
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
