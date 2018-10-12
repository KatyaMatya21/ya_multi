var buttonMenu = document.querySelector('.js-menu-button');
var menu = document.querySelector('.header-menu');

/**
 * EventListener on click menu button
 */
buttonMenu.addEventListener('click', function () {
  menu.classList.toggle('header-menu--opened');
});

(function () {

  /**
   * Video
   * @constructor
   */
  function Video(item) {
    this.item = item;
    this.video = null;

    this.init();
  }

  /**
   * Initialization
   */
  Video.prototype.init = function () {
    this.video = this.createVideo();
    this.initVideo(this.video, this.item.dataset.source);

    var canvas = this.item.querySelector('canvas');
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    this.drawVideo(this.video, canvas);

    this.item.querySelector('.video__player').addEventListener('click', this.show.bind(this));
  };

  /**
   * Initialization video
   * @param video
   * @param url
   */
  Video.prototype.initVideo = function (video, url) {
    if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play();
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8';
      video.addEventListener('loadedmetadata', function () {
        video.play();
      });
    }
  };

  /**
   * Create video element
   * @returns {HTMLElement}
   */
  Video.prototype.createVideo = function () {
    var video = document.createElement("video");

    video.autoPlay = true;
    video.loop = true;
    video.muted = true;

    return video;
  };

  /**
   * Draw on canvas
   * @param video
   * @param canvas
   */
  Video.prototype.drawVideo = function (video, canvas) {
    var ctx = canvas.getContext('2d');

    video.addEventListener('play', function () {
      var $this = this;

      (function loop() {
        if (!$this.paused && !$this.ended) {

          canvas.width = canvas.clientWidth;
          canvas.height = canvas.clientHeight;

          var scale = Math.min(
            canvas.width / $this.videoWidth,
            canvas.height / $this.videoHeight) * 1.2;

          var vidH = $this.videoHeight;
          var vidW = $this.videoWidth;
          var top = canvas.height / 2 - (vidH / 2) * scale;
          var left = canvas.width / 2 - (vidW / 2) * scale;

          ctx.drawImage($this, left, top, vidW * scale, vidH * scale);
          setTimeout(loop, 1000 / 60);
        }
      })();

    });
  };

  /**
   * Open full video
   * @param event
   */
  Video.prototype.show = function (event) {
    var video = event.target.parentNode;
    video.classList.add('video--show');

    this.video.muted = false;

    video.querySelector('.video__close').addEventListener('click', this.hide.bind(this));
  };

  /**
   * Close full video
   * @param event
   */
  Video.prototype.hide = function (event) {
    var video = event.target.parentNode.parentNode;
    video.classList.remove('video--show');

    this.video.muted = true;

    video.style = 'z-index: 666;';

    setTimeout(function () {
      video.style = '';
    }, 1000);
  };

  window.Video = Video;

}());

(function () {

  /**
   * Video controller
   * @constructor
   */
  function VideoController() {
    this.init();
  }

  /**
   * Initialization
   */
  VideoController.prototype.init = function () {
    var videos = document.querySelectorAll('.video');

    for (var k = 0; k < videos.length; k++) {
      new Video(videos[k]);
    }
  };

  window.VideoController = VideoController;

}());

new window.VideoController();
