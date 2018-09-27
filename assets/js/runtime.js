
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

  // if mobile, odd header height;
  if(window.innerWidth < 768){
    _toc_offsettop -= 50;
  }

  // calculate the offsettops and height for the component-wrapper to be scrollspied.
  d3.selectAll('body > div.scrollspy').select(function(_, i) {
    // console.log(arguments, )
    // debugger;

    // if(this.classList.contains('full-height')){
    //   console.log('(resizing) -> full-height', window.innerHeight)
    //   this.style.height = parseInt(window.innerHeight*.8)  + 'px';
    // }
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


function browseToScrollspy(index) {
  console.log()
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


// get all the a on document loadedd.
document.addEventListener("DOMContentLoaded", function(e) {
  /* Your D3.js here */
  console.log('DOMContentLoaded! #table-of-contents-wrapper');

  // add Toable of Content wrapper ypos if any.
  _toc = d3.select('#table-of-contents-wrapper');
  scrollspy._li = _toc.selectAll('ul li')

  resizing();
  scrolling();
});

_window
  .on("scroll.scroller", scrolling)
  .on("resize", throttle(resizing, 1000));
