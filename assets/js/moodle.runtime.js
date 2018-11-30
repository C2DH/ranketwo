document.addEventListener("DOMContentLoaded", function(e) {
  console.log('Display content from ranke');
  if (!window.jQuery) {
    console.warning('cannot display content. Jquery needed on the page');
    return;
  }
  console.log('loading...');
  var j = window.jQuery;
  j("#ranketwo-contents").text('loading...');
});
