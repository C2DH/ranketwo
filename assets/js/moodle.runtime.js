document.addEventListener("DOMContentLoaded", function(e) {
  console.log('Display content from ranke');
  if (!window.jQuery) {
    console.warning('cannot display content. Jquery needed on the page');
    return;
  }
  console.log('loading...');
  var j = window.jQuery;

  var wrapper = j("#ranketwo-contents");

  if(!wrapper.length) {
    console.warning('cannot display content, check that a #ranketwo-contents exists');
    return;
  };

  var id = wrapper.attr('data-id');

  wrapper.text('loading...', id);
});
