(function() {
  "use strict"

  function Ranketwo() {
    var _self = this;
    this.docs = {};
    this.log = function() {
      var args = Array.prototype.slice.call(arguments);
      console.log.apply(console, ['%cR2', 'color:cyan; background-color: magenta'].concat(args));
    }
    this.enrich = function(docs, namespace) {
      this.log('enrich()', 'n. docs:', docs.length, 'from:', namespace)
      for (var i = 0, l = docs.length; i < l; i++) {
        if (!docs[i])
          continue; // skip undefined

        this.log('enrich() - doc: ', docs[i].slug, 'ok');
        this.docs[docs[i].slug] = docs[i];
      }
    }



    this.transformLinks = function() {
      var aTags = d3.selectAll('a')
      this.log('transformLinks(). Checking: ', aTags.size(), ' links');

      aTags.each(function() {
        var href = this.getAttribute('href');

        if (href && href.indexOf('/') === -1 && href.indexOf('http') === -1) {

          if (_self.docs[href]) {
            var doc = _self.docs[href];

            switch (this.innerHTML) {
              case 'ref':
                var ref = _self.createRef(doc);
                this.parentNode.insertBefore(ref.node(), this);
                this.remove();
                break;
              case 'cit':
                d3.select(this)
                  .html('(' + _self.refAuthorTitleYear(doc) + ')')
                  .attr('href', doc.url)
                  .attr('target', '_blank');
                break;
              case 'block':
              case 'card':
                var card = _self.createCard(doc);
                this.parentNode.insertBefore(card.node(), this);
                this.remove()
                break;
              default:
                break;
            }
            //console.log(attr, _self.docs[attr]);
          } else {
            console.error('document', href, 'has not been found. Please make sure you correctly added it...')
          }

          // this.innerHTML = '';
        }
      })
      // aTags.select(function() {
      //   var attr = this.getAttribute('href'),
      //       placeholder;
      //
      //   if(attr.indexOf('/d/') === 0 || attr.indexOf('/') === -1 ) {
      //     if(attr.split(',').length > 1) {
      //
      //       placeholder = _buildPlaceholderGallery(attr.split(','));
      //
      //     } else {
      //       var placeholder_id = attr.split('/').join('-').replace(/^-d-/,'');
      //       console.log('placeholder_id', placeholder_id)
      //       _buildPlaceholder(placeholder_id)
      //
      //       if(!window.ranketwo.docs[placeholder_id]){
      //         console.warn('document with id:', placeholder_id, 'not found. Skipping placeholder...')
      //         return;
      //       }
      //
      //       placeholder = _buildPlaceholder(placeholder_id);
      //       if(!placeholder){
      //         console.warn('document with id:', placeholder_id, 'failed built.')
      //         return;
      //       }
      //     // create title, year, author and caption if provided.
      //     }
      //
      //     return this.parentNode.insertBefore(placeholder, this);
      //   }
      // });
    }

    this.refAuthorYear = function(doc) {
      return '(' + [doc.data.author, doc.data.year]
        .filter(function(d) {
          return typeof d !== 'undefined';
        })
        .map(function(d) {
          return ('' + d).replace(/\s*,\s*$/, '');
        })
        .join(', ') + ')';
    }

    this.refAuthorTitleYear = function(doc) {
      return [doc.data.author.replace(/[\s,]$/, ''), '<em>' + doc.title.replace(/[\s,]$/, '') + '</em>', doc.data.year]
        .filter(function(d) {
          return typeof d !== 'undefined';
        })
        .map(function(d) {
          return ('' + d).replace(/\s*,\s*$/, '');
        })
        .join(', ');
    }

    this.createRef = function(doc) {
      var ref = d3.select(document.createElement("div"));
      if (doc.data && doc.data.reference) {
        ref
          .html(doc.data.reference + '<br>')
          .append('a')
            .html('&rarr;&nbsp;' + _self.refAuthorYear(doc))
            .attr('href', doc.url)
            .attr('target', '_blank');
      } else {
        ref
          .html(_self.refAuthorTitleYear(doc) + '<br>')
          .append('a')
            .html('&rarr;&nbsp;' + _self.refAuthorYear(doc))
            .attr('href', doc.url)
            .attr('target', '_blank');
      }

      return ref;
    }
    this.createCard = function(doc) {
      var card = d3.select(document.createElement("div"))

      card.classed('media ml-3', true);

      // create image wrapper
      if (doc.data && doc.data.embed && doc.data.embed.thumbnail_url) {
        card.append('div')
          .classed('mr-3', true)
          .append('a')
          .attr('href', doc.url)
          .classed('media-image', true)
          .style('background-image', 'url('+ doc.data.embed.thumbnail_url + ')');
      }
      // create body
      var cardBody = card
        .append('div')
        .classed('media-body', true);

      // title
      cardBody
        .append('h5').html('<a href="'+ doc.url +'" target="_blank">' + doc.title + '</a>');
      if (doc.data && doc.data.embed && doc.data.embed.author_name) {
        cardBody.append('p')
          .text(doc.data.embed.author_name+ ', ' + doc.data.year);

      } else if (doc.author) {
        cardBody.append('p')
          .text(doc.author+ ', ' + doc.data.year);
      }
      return card
    }

    this.___buildPlaceholder = function(placeholder_id) {
      var doc = _self.docs[placeholder_id];
      if (!doc) {
        console.error('buildPlaceholder() failed, doc is undefined for this placeholder_id:', placeholder_id)
        return;
      }
      var placeholder = document.createElement("div");

      placeholder.className = 'placeholder'
      placeholder.setAttribute('data-id', placeholder_id);


      var _placeholder = d3.select(placeholder);


      if (doc.attachment) {
        _placeholder.classed('with-cover', true);
        _placeholder.
        append('img')
          .classed('cover', true)
          .attr('src', "{{'/assets/images/attachments/' | relative_url }}" + doc.attachment)
      }
      if (!doc.data) {
        return;
      }
      try {
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
          .text(doc.year || doc.data.date.en_us)
      } catch (e) {

      }
      return placeholder;
    };

  }

  window.r2 = window.ranketwo = new Ranketwo();
  r2.log('new Ranketwo() ready');
})();
