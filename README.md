# Admaru-Adsplayer
Ads-player That support Various Ads types(up to Vast 4 &amp; Vpaid 2)
It's Simple, lightweight, accessible and customizable HTML5, jquery media player that supports [_modern_](#browser-support) browsers.

[Checkout the demo](https://demoadmaru.teralineinc.io) 

[![npm version](https://badge.fury.io/js/plyr.svg)]() [![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)]() 

[![Image of Plyr](https://cdn.plyr.io/static/demo/screenshot.png?v=3)](https://plyr.io)

# Features

- 📼 **HTML Video & Audio, YouTube & Vimeo** - support for the major formats - Mp4, WebM,m3u8(HLS), mpeg-dash
- 💪 **Accessible** - full support for VTT captions and screen readers
- 🔧 **[Customizable](#html)** - make the player look how you want with the markup you want
- 😎 **Clean HTML** - uses the _right_ elements. `<input type="range">` for volume and `<progress>` for progress and well, `<button>`s for buttons. There's no
  `<span>` or `<a href="#">` button hacks
- 📱 **Responsive** - works with any screen size
- 💵 **[Monetization](#ads)** - InContent,Prebid,Sticky
- 📹 **[Streaming](#demos)** - support for hls.js, Shaka and dash.js streaming playback
- 🎛 **[API](#api)** - toggle playback, volume, seeking, and more through a standardized API
- 🎤 **[Events](#events)** - no messing around with Vimeo and YouTube APIs, all events are standardized across formats
- 🔎 **[Fullscreen](#fullscreen)** - supports native fullscreen with fallback to "full window" modes
- ⌨️ **[Shortcuts](#shortcuts)** - supports keyboard shortcuts
- 🖥 **Picture-in-Picture** - supports picture-in-picture mode
- 📱 **Playsinline** - supports the `playsinline` attribute
- 🏎 **Speed controls** - adjust speed on the fly
- 📖 **Multiple captions** - support for multiple caption tracks
- 🌎 **i18n support** - support for internationalization of controls
- 👌 **[Preview thumbnails](#preview-thumbnails)** - support for displaying preview thumbnails
- 🤟 **Frameworks** - Written in  jQuery.
- 💁‍♀️ **Sass** - to include in your build processes

## Additional settings
The plugin accepts additional settings beyond the two required settings shown in
the previous snippet. A summary of all settings follows:


| Settings | Type | Description |
|----------|------|-------------|
| adLabel                | string       | Replaces the "Advertisement" text in the ad label. Added for multilingual UI support. |
| adLabelNofN            | string       | Replaces the "of" text in the ad label (e.g. ... (1 of 2) ...). Added for multilingual UI support. |
| adTagUrl               | string       | A URL which returns a VAST, VMAP or ad rules response. This will override adsResponse. |
| adsRenderingSettings   | object       | JSON object with ads rendering settings as defined in the IMA SDK Docs(1). |
| adsResponse            | string       | The VAST, VMAP, or ad rules response to use in lieu of fetching one an ad tag. This is overridden if adTagUrl is set. |
| adsRequest             | object       | JSON object with ads request properties defined in the IMA SDK Docs(2). Properties set here that can also be provided elsewhere (e.g. adTagUrl) will override those other settings. |
| autoPlayAdBreaks       | boolean      | Whether or not to automatically play VMAP or ad rules ad breaks. Defaults to true. |
| **deprecated** adWillPlayMuted        | boolean      | Notifies the SDK whether the player intends to start ad while muted. Changing this setting will have no impact on ad playback. Defaults to false. |
| contribAdsSettings     | object       | Additional settings to be passed to the contrib-ads plugin(3) used by this IMA plugin. |
| debug                  | boolean      | True to load the debug version of the plugin, false to load the non-debug version. Defaults to false. |
| disableAdControls      | boolean      | True to hide the ad controls(play/pause, volume, and fullscreen buttons) during ad playback. Defaults to false. |
| disableCustomPlaybackForIOS10Plus | boolean      | Sets whether to disable custom playback on iOS 10+ browsers. If true, ads will play inline if the content video is inline. Defaults to false. |
| disableFlashAds        | boolean      | True to disable Flash ads - Flash ads will be considered an unsupported ad type. Defaults to false. |
| featureFlags           | object       | Sets IMA SDK feature flags. |
| forceNonLinearFullSlot | boolean      | True to force non-linear AdSense ads to render as linear fullslot. If set, the content video will be paused and the non-linear text or image ad will be rendered as fullslot. The content video will resume once the ad has been skipped or closed. |
| id                     | string       | **DEPRECATED** as of v.1.5.0, no longer used or required. |
| locale                 | string       | Locale for ad localization. The supported locale codes can be found in [Localizing for Language and Locale](//developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/localization)|
| nonLinearHeight        | number       | Desired height for non-linear ads. Defaults to 1/3 player height. |
| nonLinearWidth         | number       | Desired width of non-linear ads. Defaults to player width. |
| numRedirects           | number       | Maximum number of VAST redirects before the subsequent redirects will be denied and the ad load aborted. The number of redirects directly affects latency and thus user experience. This applies to all VAST wrapper ads. |
| omidVendorAccess       | object       | Sets and enables the Open Measurement SDK(4). Accepts an object with keys corresponding to OMID verification vendors(5). The value pair for each key should be the OMID access mode(6) associated with that vendor. |
| ppid                   | string       | Sets the publisher provided ID |
| preventLateAdStart     | boolean      | Prevent ads from starting after the content has started if an adtimeout occurred (preroll, midroll, postroll). The default value is false
| sessionId              | string       | Sets the [session ID](//developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.ImaSdkSettings#setSessionId) |
| showControlsForJSAds   | boolean      | Whether or not to show the control bar for VPAID JavaScript ads. Defaults to true. |
| showCountdown          | boolean      | Whether or not to show the ad countdown timer. Defaults to true. |
| vastLoadTimeout        | number       | Override for default VAST load timeout in milliseconds for a single wrapper. The default timeout is 5000ms. |
| vpaidAllowed           | boolean      | **DEPRECATED**, please use vpaidMode. |
| vpaidMode              | VpaidMode(5) | VPAID Mode. Defaults to ENABLED. This setting,overrides vpaidAllowed. |


(1) [AdsRenderingSettings](//developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsRenderingSettings)
<br />
(2) [AdsRequest](//developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsRequest)
<br />
(3) [contrib-ads plugin](//github.com/videojs/videojs-contrib-ads)
<br />
(4) [Open Measurement SDK guide](//developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/omsdk)
<br />
(5) [OmidVerificationVendor](//developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima#.OmidVerificationVendor)
<br />
(6) [OmidAccessMode](//developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima#.OmidAccessMode)
<br />
(7) [ImaSdkSettings.setVpaidMode](//developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.ImaSdkSettings#setVpaidMode)

## IMA Plugin Ad Events
The IMA Plugin fires events that can be listened for. Ad lifecycle events can be listened for by following our [Advanced Example](https://github.com/googleads/videojs-ima/blob/main/examples/advanced/ads.js). Other events are emited from the videojs player. Please see the below example to set up listeners for these events.

```javascript
this.player = videojs('content_video');

this.player.on('ads-manager', function(response){
  var adsManager = response.adsManager;
  // Your code in response to the `ads-manager` event.
})
```

Below are the events added by the videojs-ima plugin to the videojs player.

| Event | Event String | Payload |
|-------|--------------|---------|
| Ad Started | 'ads-ad-started' | none |
| Ads Manager | 'ads-manager' | [google.ima.AdsManager](//developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsManager) |
| Ads Loader | 'ads-loader' | [google.ima.AdsLoader](//developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsLoader) |
| Ads Request | 'ads-request' | [google.ima.AdsRequest](//developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsRequest) |

## Disable automatic ad break playback
In some circumstances you may want to prevent the SDK from playing ad breaks
until you're ready for them. In this scenario, you can disable automatic
playback of ad breaks in favor of letting the SDK know when you're ready for an
ad break to play. To do so:

1. Set ```autoPlayAdBreaks``` to false in the initial options.
2. Provide an ad break ready listener via ```setAdBreakReadyListener```.
3. Call ```player.ima.playAdBreak()``` in your ad break ready listener when
   you're ready to play the ads.

## Where do I report issues?
Please report issues on the [issues page](../../issues).

## Terms of Service
The IMA SDK plugin for Admaru video player uses the IMA SDK, and as such is subject to the
[IMA SDK Terms of Service](//developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/terms).
