/**/
const fs          = require('fs'),
      db          = require('diskdb'),
      ns          = require('nested-structure'),
      clc         = require('cli-color'),
      path        = require('path'),
      YAML        = require('yamljs'),
      async       = require('async'),
      request     = require('request'),
      settings    = require('./settings.js'),
      credentials = require(settings.google_spreadsheet_to_json.credentials),
      
      gsjson = require('google-spreadsheet-to-json');


console.log('Loading Google spreadsheet GID:', settings.google_spreadsheet_to_json.documents.gid);

db.connect(settings.diskdb.path, ['records']);

console.log(db.records.count());

let c = 0;

const _cy = clc.cyanBright,
      _ye = clc.yellowBright,
      _bl = clc.blackBright,
      _gr = clc.greenBright.bold;


async.waterfall([

  // load data from spreadsheet.
  (next) => {
    c++;
    console.log(_cy(c, '.'), _bl('load data from spreadsheet:'), settings.google_spreadsheet_to_json.documents.gid);
    gsjson({
      spreadsheetId: settings.google_spreadsheet_to_json.documents.gid,
      credentials: credentials,
      allWorksheets: true
    }).then(res => {
      console.log(_gr('    v'), _bl('request success!\n      - n.sheets:'), res.length)
      let results = [];

      res.forEach(d => {
        results = results.concat(d);
      });

      results = results.filter(d => d.title && d.slug && d.type);
      
      
      console.log(_bl('      - n. valid records:'), results.length);
      
      next(null, results)
    }).catch(next);
  },

  (results, next) => {
    c++;
    console.log(_cy(c, '.'), _bl('merge with alread stored records'))
    results
      .map(d => {
        let _d = {
          title: d.title,
          slug: d.slug.toLowerCase().trim(),
          type: d.type,
          data:{}
        };
        if(d.attachment && d.attachment.length){
          _d.attachment = d.attachment.trim()
        }
        if(d.url && d.url.length) {
          _d.url = d.url.trim();
        }
        // format data__ fields
        for(f in d) {
          if(f.indexOf('data__') !== 0)
            continue

          let keys = f.split('__').join('.');
          ns(_d).set(keys, d[f],{force: true})
        }
        return _d;
      }).forEach(d => {
        console.log(_bl('    merging:'), '/',_ye(d.slug),'/');
        // get if any
        let org = db.records.findOne({slug: d.slug});
        if(org){
          d.data = { ... org.data, ... d.data}
          db.records.update({
            _id: org._id, 
          }, d, {
            upsert: true
          })
        } else{
          // last slug win all
          db.records.update({
            slug: d.slug, 
          }, d, {
            upsert: true
          })
        }

      });
    setImmediate(next);
  },

  (next) => {
    c++;
    
    todos = db.records.find().filter(d => d.url && !d._resolved);

    console.log(_cy(c, '.'), _bl('resolve url (if it is not done yet)'));
    console.log(_bl('      - n. records todo:'), todos.length);
      
    let q = async.queue((record, callback) => {
        record.data = {}
        console.log(_bl('    type:'),_ye(record.type),_bl('- url:'), record.url);

        if(record.type == 'video') {
          
        
          // youtube video or vimeo video, oembeddable.
          // enrich with oembed
          request.get('http://noembed.com/embed?url='+record.url, {
            json:true
          }, (err, res, body) => {
            if(err) {
              // ignore
              console.log(err);

            } else {
              console.log(_gr('    v'), _bl('Noembed request success!\n      - provider_url:'), body.provider_url)
      
              record.data.embed = body;

              // update html iframe if any
              if(record.data.embed.html){
                record.data.embed.html = record.data.embed.html.replace(/(<iframe [^>]+)width=["']*([^"'\s]+)["']*/, function(m,a,b) {
                  return a + ' width="100%"';//
                }).replace(/(<iframe [^>]+)height=["']*([^"'\s]+)["']*/, function(m,a,b) {
                  
                  return a + ' height="100%"';//
                })
                
              }
              
              record._resolved = true;
              db.records.update({
                _id: record._id
              }, record);
            }
            
            callback();
          })
        } else if(record.type == 'pdf' || record.type == 'image') {
          let filepath = path.join(settings.contents.path, record.slug + path.extname(record.url));
          request
            .get({
              url: record.url,
              rejectUnauthorized: false
            })
            .on('error', (err) => {
              console.log(err)
              callback();
            })
            .on('response', (res) => {
              console.log(_bl('    ... status:'),res.statusCode, _bl('\n    ... content-type:'), res.headers['content-type']) // 'image/png'
              
            })
            .on('end', (res) => {
              console.log(_gr('    v'), _bl('Request success!\n      - local file:'), filepath)

              record._resolved = true;

              db.records.update({
                _id: record._id
              }, record);

              callback();
            })
            .pipe(fs.createWriteStream(filepath));
        } else {
          console.log(_bl('    type:'),_ye(record.type),'not supported yet, skypping');

          setImmediate(callback);
        }
      })
      q.push(todos);
      q.drain = next;
    },

    // data override
    // (next) => {
    //   let q = async.queue((result, callback) => {

    //   })

    //   setImmediate(next)
    // },

    (next) => {
      console.log(_cy(c, '.'), _bl('save YAML file'));
      fs.writeFile(settings.yaml.documents.path, YAML.stringify(db.records.find(), 4), next);
    } 
], (err) => {
  if (err) throw err;
  else{
    console.log(_gr('done!'));
  }
})


    //let datafields = results.
  // open then write json
  

