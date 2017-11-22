/* runtime */
var _window        = d3.select(window),
    _documents;


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

// activate table of contents items on scrolling
function scrolling(){
  console.log('- sY:', window.scrollY, '- h:',window.innerHeight);
}

function resizing(){
  console.log('resized')
}

function throttle(func, limit) {
  var inThrottle,
    lastFunc,
    lastRan;
  return function() {
    var context = this,
      args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      lastRan = Date.now()
      inThrottle = true;
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args)
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  };
};

var scrollspies = []

// get all the a on document loadedd.
document.addEventListener("DOMContentLoaded", function(e) {
  /* Your D3.js here */
  console.log('hey!')

  _documents = d3.selectAll('#contents > p > a').select(function() {
    
    var attr = this.getAttribute('href');
    if(attr.indexOf('/d/') === 0) {
      var placeholder_id = attr.split('/').join('-').replace('-d-','');
      if(!__docs[placeholder_id]){
        console.warn('document with id:', placeholder_id, 'not found. Skipping placeholder...')
        return;
      }
      var placeholder = document.createElement("div");
      
      placeholder.className = 'placeholder'
      placeholder.setAttribute('data-id', placeholder_id);
      
      
      var _placeholder = d3.select(placeholder);

      var _metadata = _placeholder
        .append('div')
          .classed('metadata', true)

      _metadata.
        append('span')
          .classed('title', true)
          .text(__docs[placeholder_id].title)

      _metadata
        .append('span')
          .classed('author', true)
          .text(__docs[placeholder_id].author)

      _metadata
        .append('span')
          .classed('year', true)
          .text(__docs[placeholder_id].year)

      // create title, year, author and caption if provided.

      return this.parentNode.insertBefore(placeholder, this);
    }
  });


  // on resize or here:
  d3.selectAll('#contents > p > .placeholder')


  // _documents.classed('placeholder', true)
  console.log(_documents)
});

_window
  .on("scroll.scroller", scrolling)
  .on("resize", throttle(resizing, 1000));