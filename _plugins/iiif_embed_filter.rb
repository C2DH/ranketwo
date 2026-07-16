require "cgi"

module Jekyll
  module IiifEmbedFilter
    # Supports: [[iiif <image-id> "Optional accessible title"]]
    IIIF_TAG_REGEX = /\[\[\s*iiif\s+([^\]\s"]+)(?:\s+"([^"]+)")?\s*\]\]/.freeze

    def iiif_iframe_html(viewer_url, image_id, iframe_title = nil)
      safe_title = CGI.escapeHTML(iframe_title.to_s.strip)
      safe_title = "IIIF Image" if safe_title.empty?
      safe_image_id = CGI.escapeHTML(image_id)
      safe_iframe_src = CGI.escapeHTML("#{viewer_url}#{image_id}")

      <<~HTML
        <iframe src="about:blank" data-iiif-id="#{safe_image_id}" data-iiif-src="#{safe_iframe_src}" data-iiif-loaded="false" loading="lazy" title="#{safe_title}" width="100%" height="500" frameborder="0" allowfullscreen></iframe>
        <script>
          (function() {
            var script = document.currentScript;
            var iframe = script && script.previousElementSibling;
            if (!iframe) return;

            var imageId = iframe.getAttribute('data-iiif-id');
            if (!imageId) return;

            var ratio = null;
            var minHeight = 320;
            var maxHeight = 1250;
            var sectionPadding = 16; // section--contents has 32px horizontal padding
            var loadState = 'idle'; // idle | queued | loading | loaded

            function getGlobalIiifLoader() {
              if (window.__ranke2IiifLoader) return window.__ranke2IiifLoader;

              // Shared queue across all IIIF embeds on the page.
              // Limits concurrent viewer startups to reduce network/CPU spikes.
              window.__ranke2IiifLoader = {
                queue: [],
                active: 0,
                maxConcurrent: 2,
                enqueue: function(task) {
                  this.queue.push(task);
                  this.pump();
                },
                pump: function() {
                  while (this.active < this.maxConcurrent && this.queue.length > 0) {
                    var nextTask = this.queue.shift();
                    this.active += 1;
                    nextTask(this.release.bind(this));
                  }
                },
                release: function() {
                  this.active = Math.max(0, this.active - 1);
                  this.pump();
                }
              };

              return window.__ranke2IiifLoader;
            }

            function requestIframeLoad() {
              // Ignore duplicate requests once loading has been scheduled or completed.
              if (loadState === 'loaded' || loadState === 'loading' || loadState === 'queued') return;

              loadState = 'queued';
              getGlobalIiifLoader().enqueue(function(done) {
                var realSrc = iframe.getAttribute('data-iiif-src');
                if (!realSrc) {
                  loadState = 'idle';
                  done();
                  return;
                }

                loadState = 'loading';

                var finalized = false;
                var timeoutId = null;
                function finalize() {
                  // Release queue slot exactly once, regardless of success, error, or timeout.
                  if (finalized) return;
                  finalized = true;
                  if (timeoutId) window.clearTimeout(timeoutId);
                  loadState = 'loaded';
                  done();
                }

                iframe.addEventListener('load', finalize, { once: true });
                iframe.addEventListener('error', finalize, { once: true });
                timeoutId = window.setTimeout(finalize, 15000);

                iframe.setAttribute('src', realSrc);
                iframe.setAttribute('data-iiif-loaded', 'true');
              });
            }

            function buildInfoJsonUrl() {
              try {
                var src = iframe.getAttribute('data-iiif-src') || iframe.getAttribute('src');
                var viewerUrl = new URL(src, window.location.href);
                var dziValue = viewerUrl.searchParams.get('dzi') || '/iiif/';
                var normalized = dziValue;
                // Normalize trailing slashes to keep generated URLs consistent.
                while (normalized.length > 1 && normalized.endsWith('/')) {
                  normalized = normalized.slice(0, -1);
                }
                if (normalized.toLowerCase().endsWith('/info.json')) {
                  return new URL(normalized, viewerUrl.origin).toString();
                }
                if (normalized.endsWith('/' + imageId)) {
                  return new URL(normalized + '/info.json', viewerUrl.origin).toString();
                }
                return new URL(normalized + '/' + imageId + '/info.json', viewerUrl.origin).toString();
              } catch (e) {
                // Last-resort local fallback if URL parsing fails.
                return '/iiif/' + encodeURIComponent(imageId) + '/info.json';
              }
            }

            function applyHeight() {
              if (!ratio) return;
              var section = iframe.closest && iframe.closest('.section');
              // Fall back to section width when iframe width is 0 in collapsed content.
              var width = iframe.clientWidth || (section && (section.clientWidth - sectionPadding * 2)) || 0;
              if (!width) return;
              var height = Math.round(width * ratio);
              // Keep height within a sane range to avoid extreme layouts.
              height = Math.max(minHeight, Math.min(maxHeight, height));
              iframe.style.height = height + 'px';
            }

            fetch(buildInfoJsonUrl(), { cache: 'force-cache' })
              .then(function(response) { return response.ok ? response.json() : null; })
              .then(function(info) {
                if (!info || !info.width || !info.height) return;
                ratio = info.height / info.width;
                applyHeight();
              })
              .catch(function() {});

            function installToggleListener() {
              var section = iframe.closest && iframe.closest('.section');
              if (!section) return;
              var toggler = section.querySelector('.section--toggler');
              var sectionContents = section.querySelector('.section--contents');
              if (!toggler || !sectionContents) return;

              toggler.addEventListener('click', function() {
                // Start loading only when the section is opened.
                // Re-apply height during the opening animation for a stable layout.
                requestIframeLoad();
                applyHeight();
                setTimeout(applyHeight, 120);
                setTimeout(applyHeight, 300);
              });
            }

            installToggleListener();
            // Strict mode: load the viewer only when the section is opened.
            iframe.addEventListener('load', applyHeight);
            window.addEventListener('resize', applyHeight);
          })();
        </script>
      HTML
    end

    def iiif_embed(input)
      return "" if input.nil?

      site = @context.registers[:site]
      viewer_url = site.config["iiif_viewer_url"].to_s

      input.to_s.gsub(IIIF_TAG_REGEX) do
        image_id = Regexp.last_match(1).strip
        iframe_title = Regexp.last_match(2).to_s.strip

        if !viewer_url.empty? && !image_id.empty?
          iiif_iframe_html(viewer_url, image_id, iframe_title)
        else
          %(<p>IIIF image not found: #{image_id}</p>)
        end
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::IiifEmbedFilter)