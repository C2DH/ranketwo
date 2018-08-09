(function(r2) {
  "use strict"
  r2.commons = r2.commons || {};

  r2.commons.buildIframeEventHandler = function (id, src, type) {
    var iframeWrapper = d3.select(id);
    var vimeoPlayer;
    var ready = false;

    console.log('r2.commons.buildIframeEventHandler ready:\n  id:',id,'\n  src:',src, '\n  type:', type, '\n  valid:', !!iframeWrapper.size());

    iframeWrapper.on('click', function() {
      console.log('r2.commons.buildIframeEventHandler @click');
      if(ready) {
        // do play
        return;
      }
      ready = true;
      var _iframe = iframeWrapper.append('iframe')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('frameborder', '0')
        .attr('webkitallowfullscreen', true)
        .attr('mozallowfullscreen', true)
        .attr('allowfullscreen', true)
        .attr('src', src);

      if(type == 'vimeo') {
        vimeoPlayer = new Vimeo.Player(_iframe.node());
        // player.setVolume(0);
        vimeoPlayer.play().then(function() {
          console.log('video playing...')// the video was played
        }).catch(function(err) {
          console.error(err);
        });

      } else {
        _iframe.attr('src', src);
      }

    });
  };

})(window.ranketwo);
