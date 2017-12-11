---

---
/* runtime 
  
  This script handles the Table of contents fixed on scrolling and the loading of documents data.

*/
var _window        = d3.select(window),
    _toc, // table of contents, cfr. unit.html
    _toc_offsettop = 0,// table of contents offsettop, stored locally. 
    _toc_isfixed = false,

    _documents,
    
    scrollspy = {
      _li: null,
      timer: null,
      idx: -1,
      anchors: []
    };


// debounce 
function debounce(fn, delay) {
  var timer = null;
  return function () {
    // log('debounce!');
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

function scrollspying(){
  if(!_toc){
    console.warn('document is not ready yer')
    return
  }
  // console.log('wtf',scrollspy);
  // scrollspy.timer = null;
  // apply classed etc.
  // for(var i=0, l=scrollspy.anchors.length; i < l; i++) {
  //   // scrollspy.anchors[i].el.classed('active', scrollspy.anchors[i].visible)
  // }

  scrollspy._li
    .data(scrollspy.anchors)

  scrollspy._li.classed('active', function(d){
    return d.visible;
  })

  var progress = scrollspy._li.select('.group').style('transform', function(d){
    return 'scaleY('+ d.progress +')'
  })



}
var scrollspyingthrottle = throttle(scrollspying, 100);



// activate table of contents items on scrolling
function scrolling(){
  // console.log('- sY:', window.scrollY, '- h:',window.innerHeight, window.scrollY > _toc_offsettop);
  
  // check table of contents
  if(window.scrollY > _toc_offsettop){
    if(!_toc_isfixed) {
      _toc_isfixed = true;
      _toc.classed('fixed', true);
    }
  } else if(_toc_isfixed) {
    _toc_isfixed = false;
    _toc.classed('fixed', false);
  } 

  // check table of scrollpsies
  for(var i=0, l=scrollspy.anchors.length; i < l; i++) {
    scrollspy.anchors[i].progress = Math.max(0, Math.min(1.0, (window.scrollY + window.innerHeight/2 - scrollspy.anchors[i].top) / scrollspy.anchors[i].height));
    scrollspy.anchors[i].visible = scrollspy.anchors[i].top < window.scrollY + window.innerHeight/2 && scrollspy.anchors[i].bottom > window.scrollY
  }

  // throttle in 500 seconds the scrollspy update.
  // console.log(scrollspy)
  scrollspyingthrottle();
}



function resizing(){
  console.log('(resizing)')

  // store the offset top position for the table of content.
  if(_toc.node()) {
    _toc_offsettop = _toc.node().offsetTop;
  }

  // calculate the offsettops and height for the component-wrapper to be scrollspied.
  d3.selectAll('body > div.scrollspy').select(function(_, i) {
    // console.log(arguments, )
    var rect = this.getBoundingClientRect(); // correct before scrolling
    scrollspy.anchors[i] = {
      height: rect.height,
      top: rect.top + window.scrollY,
      bottom: rect.top + window.scrollY + rect.height
    };
    // console.log(scrollspy.anchors[i])
    // d3.select(this).selectAll('.scrollspy').select(function(_, k){
    //   // console.log('children!!!!', this.getBoundingClientRect())
    // })
  })

}

function throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

var scrollspies = []

function _buildPlaceholder(placeholder_id){
  var doc = window.ranketwo.docs[placeholder_id];
  if(!doc){
    console.warn('_buildPlaceholder() failed, doc is undefined... placeholder_id:', placeholder_id)
    return;
  }
  var placeholder = document.createElement("div");
  
  placeholder.className = 'placeholder'
  placeholder.setAttribute('data-id', placeholder_id);
  
  
  var _placeholder = d3.select(placeholder);

  
  if(doc.attachment){
    _placeholder.classed('with-cover', true);
    _placeholder.
      append('img')
        .classed('cover', true)
        .attr('src', "{{'/assets/images/attachments/' | relative_url }}" + doc.attachment)
  }
  if(!doc.data) {
    return;
  }
  try{
  var _metadata = _placeholder
    .append('div')
      .classed('metadata', true)


  _metadata.
    append('h4')
      .classed('title', true)
        .append('a')
          .attr('href', doc.url)
          .attr('target', '_blank')
          .text(doc.title)

  _metadata
    .append('div')
      .classed('author', true)
      .text(doc.author || doc.data.author)

  _metadata
    .append('div')
      .classed('year', true)
      .text(doc.year || doc.data.date.en_us )
  } catch(e) {

  }
  return placeholder;
}


function _buildPlaceholderGallery(placeholder_ids) {
  console.log('_buildPlaceholderGallery()', placeholder_ids.length);
  var placeholder  = document.createElement('div');
  placeholder.className = 'placeholder-gallery row no-gutters'
  placeholder.setAttribute('data-id', placeholder_ids.join(','));
  // .classed('gallery', true);

  for(var i=0,l=placeholder_ids.length; i <l ; i++) {
    var col = document.createElement('div')
    col.className = 'col-sm-6 col-md-6'
    placeholder.append(col);
    var n = _buildPlaceholder(placeholder_ids[i]);
    if(n) {
      console.log(n)
      col.append(n);
    }
  }
  console.log(placeholder)
  return placeholder;
}

// get all the a on document loadedd.
document.addEventListener("DOMContentLoaded", function(e) {
  /* Your D3.js here */
  console.log('hey!')

  // add Toable of Content wrapper ypos if any.
  _toc = d3.select('#table-of-contents-wrapper');

  

  _documents = d3.selectAll('.contents > p > a').select(function() {
    var attr = this.getAttribute('href'),
        placeholder;

    if(attr.indexOf('/d/') === 0 || attr.indexOf('/') === -1 ) {
      if(attr.split(',').length > 1) {

        placeholder = _buildPlaceholderGallery(attr.split(','));
        
      } else {
        var placeholder_id = attr.split('/').join('-').replace(/^-d-/,'');
        console.log('placeholder_id', placeholder_id)
        _buildPlaceholder(placeholder_id)
      
        if(!window.ranketwo.docs[placeholder_id]){
          console.warn('document with id:', placeholder_id, 'not found. Skipping placeholder...')
          return;
        }
        
        placeholder = _buildPlaceholder(placeholder_id);
        if(!placeholder){
          console.warn('document with id:', placeholder_id, 'failed built.')
          return;
        }
      // create title, year, author and caption if provided.
      }

      return this.parentNode.insertBefore(placeholder, this);
    }
  });

  // 
  scrollspy._li = _toc.selectAll('ul li')

  // call resizing and scrolling function
  resizing();
  scrolling();

  // on resize or here:
  d3.selectAll('#contents > p > .placeholder')

  // _documents.classed('placeholder', true)
  console.log(_documents)
});

_window
  .on("scroll.scroller", scrolling)
  .on("resize", throttle(resizing, 1000));