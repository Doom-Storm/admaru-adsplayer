/**
 * Copyright 2023 Admaru Ad network.
 *
 
 */

var Ads = function() {
  // Set up UI stuff.
  this.adTagInput = document.getElementById('tagInput');
  var sampleAdTag = document.getElementById('sampleAdTag');
  sampleAdTag.addEventListener('click', () => {
    this.adTagInput.value = this.SAMPLE_AD_TAG;
  });
  this.console = document.getElementById('ima-sample-console');

  this.player = videojs('content_video');

  // Remove controls from the player on iPad to stop native controls from stealing
  // our click
  var contentPlayer =  document.getElementById('content_video_html5_api');
  if ((navigator.userAgent.match(/iPad/i) ||
          navigator.userAgent.match(/Android/i)) &&
      contentPlayer.hasAttribute('controls')) {
    contentPlayer.removeAttribute('controls');
  }

  // Start ads when the video player is clicked, but only the first time it's
  // clicked.
  this.startEvent = 'click';
  if (navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/Android/i)) {
    this.startEvent = 'touchend';
  }


  this.wrapperDiv = document.getElementById('content_video');
  this.boundInit = this.init.bind(this);
  this.wrapperDiv.addEventListener(this.startEvent, this.boundInit);

  var options = {
    id: 'content_video',
    adsManagerLoadedCallback: this.adsManagerLoadedCallback.bind(this)
  };
  this.player.ima(options);

};

Ads.prototype.SAMPLE_AD_TAG = 'https://search.spotxchange.com/vmap/1.0/78886?adPlaylistId=1302&channelId=79391&VPI=MP4&content_page_url=spotx.tv';

Ads.prototype.init = function() {
  if (this.adTagInput.value == '') {
    this.log('Error: please fill in an ad tag');
  } else {
    this.player.ima.initializeAdDisplayContainer();
    this.player.ima.setContentWithAdTag(null, this.adTagInput.value, false);
    this.player.ima.requestAds();
    this.wrapperDiv.removeEventListener(this.startEvent, this.boundInit);
  }
};

// Ad pharsing through google ima SDK with ima ads loader & parameter handling.

Ads.prototype.adsManagerLoadedCallback = function() {
  var events = [
    google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
    google.ima.AdEvent.Type.CLICK,
    google.ima.AdEvent.Type.COMPLETE,
    google.ima.AdEvent.Type.FIRST_QUARTILE,
    google.ima.AdEvent.Type.LOADED,
    google.ima.AdEvent.Type.MIDPOINT,
    google.ima.AdEvent.Type.PAUSED,
    google.ima.AdEvent.Type.RESUMED,
    google.ima.AdEvent.Type.STARTED,
    google.ima.AdEvent.Type.THIRD_QUARTILE
  ];

  for (var index = 0; index < events.length; index++) {
    this.player.ima.addEventListener(
        events[index],
        this.onAdEvent.bind(this));
  }

  this.player.on('adslog', this.onAdLog.bind(this));
};

Ads.prototype.onAdLog = function(data) {
  this.log('Ad log: ' + data.data.AdError);
};

Ads.prototype.onAdEvent = function(event) {
  var message = 'Ad event: ' + event.type;
  this.log(message);
};

Ads.prototype.log = function(message) {
  this.console.innerHTML = this.console.innerHTML + '<br/>' + message;
}
