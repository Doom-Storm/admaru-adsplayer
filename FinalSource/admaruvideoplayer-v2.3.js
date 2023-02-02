/*! (c)2023 Admaru Ads player, V 2.30.0
Outstream & instream Video Player.
*/

var ANOutstreamVideo = function(n) {
    var i = {};

    function o(e) {
        var t;
        return (i[e] || (t = i[e] = {
            exports: {},
            id: e,
            loaded: !1
        }, n[e].call(t.exports, t, t.exports, o), t.loaded = !0, t)).exports
    }
    return o.m = n, o.c = i, o.p = "", o(0)
}([function(e, t, n) {
    var h = n(1),
        m = n(90),
        f = n(2),
        v = n(80),
        s = s || [],
        l = l || {},
        n = "Outstream",
        g = "4.20.0",
        y = n;

    function o(e) {
        try {
            return null !== e && "object" == typeof e && !Array.isArray(e)
        } catch (e) {}
    }

    function A(e, t) {
        var n = o(e) ? e : {};
        if (o(t))
            for (var i in t) t.hasOwnProperty(i) && (o(n[i]) ? n[i] = A(n[i], t[i]) : n[i] = t[i]);
        return n
    }

    function b(e, t) {
        var n = o(t) ? t : {},
            i = !1;
        if (e && 1 <= e.length) switch (e[0]) {
            case "auto_play_sound_on":
                n.initialPlayback = "auto", n.initialAudio = "on", i = !0;
                break;
            case "auto_play_sound_off":
                n.initialPlayback = "auto", n.initialAudio = "off", i = !0;
                break;
            case "click_to_play":
                n.initialPlayback = "click", n.initialAudio = "on", i = !0;
                break;
            case "mouseover":
                n.initialPlayback = "mouseover", n.initialAudio = "on", i = !0;
                break;
            case "auto_play_sound_unknown":
                n.initialPlayback = "auto", n.initialAudio = "off", i = !0;
                break;
            case "max":
                i = !1
        }
        return i || (n.initialPlayback = "auto", n.initialAudio = "off"), n
    }

    function i(e) {
        if (f.debug(y, "Parent iframe geometry update", e), s)
            for (var t in s) s[t].adUnit.parentIframeGeometryUpdate(e)
    }

    function w(e) {
        if (e.parentIframeGeometryEvent) {
            var t = e.parentIframeGeometryEvent;
            try {
                window[t] = function(e) {
                    i(e)
                }
            } catch (e) {}
        }
        if ("function" == typeof e.parentIframeGeometryCb) try {
            e.parentIframeGeometryCb.call(this, function(e) {
                e.windowHeight = e.innerHeight, e.scrollY = e.scroll, i(e)
            })
        } catch (e) {}
    }

    function r(e, t, n) {
        f.log("Got AST message ", e, " payload", t, " target", n);
        var i = !1;
        if (s)
            for (var o in s) n && s[o].id !== n || (s[o].adUnit.handleMessage(e, t), i = !0);
        !i && n && (l[n] || (l[n] = {}), l[n] = {
            message: e,
            payload: t
        })
    }

    function k(e, t, n, i) {
        var i = new(i = i || h),
            o = (i.init(e), s.push({
                id: t,
                adUnit: i
            }), n),
            r = i;
        if (l[o]) {
            for (var a in l[o]) r.adUnit.handleMessage(l[o][a].message, l[o][a].payload);
            delete l[o]
        }
    }

    function a(e, t) {
        try {
            "undefined" != typeof apntag && void 0 !== apntag.debug ? f.setDebugLevel(apntag.debug) : void 0 !== e && (e.rendererOptions, 1) && f.setDebugLevel(e.rendererOptions.debugLevel)
        } catch (e) {}
        if (f.info(y, "Version: " + g), e) {
            f.log(y, "renderAd called with ad data " + e.targetId + " ", e);
            var n, i = e.targetId,
                o = e.rendererOptions,
                r = {},
                a = e && e.adUnit || h;
            if (e.adResponse && e.adResponse.ads && e.adResponse.ads.length && (e.adResponse.ad = e.adResponse.ads[0]), e.adResponse && e.adResponse.ad && (n = e.adResponse.ad, e.adResponse.ad.video && (l = e.adResponse.ad.video), e.adResponse.ad.renderer_config)) try {
                if ((r = JSON.parse(e.adResponse.ad.renderer_config)).hasOwnProperty("cbNotification")) try {
                    var s = window;
                    "function" == typeof s[r.cbNotification] ? r.cbNotification = s[r.cbNotification] : delete r.cbNotification
                } catch (e) {
                    delete r.cbNotification
                }
            } catch (e) {}
            o = o || {}, n = n || {};
            try {
                n && n.hasOwnProperty("notify_url") && (d = "OutstreamRenderer_" + (new Date).getTime() + Math.floor(1e4 * Math.random()), m.init({}, d), m.addTrackingEvent("notifyurl", n.notify_url, d), m.requestTracking("notifyurl", d))
            } catch (e) {}
            var l = l || {},
                s = e.adResponse && e.adResponse.content,
                o = A(o, l),
                d = A(n, o),
                d = A(r, d),
                l = n.content_source;
            d = b((d = l && n[l] && n[l].video ? A(d, n[l].video) : d).playback_methods, d), e.adResponse && e.adResponse.auction_id && (d.auction_id = e.adResponse.auction_id, e.adResponse.rtb_video_fallback && (d.rbFallbackData = {
                auction_id_64: e.adResponse.auction_id,
                tag_id: e.adResponse.tag_id || 0
            })), d.video || (d.video = {}), d.video && !d.video.skippable && (d.video.skippable = {}), d.video && (d.video.supports_skippable, 1) && d.video.skippable.enabled, d.vastXml = s || d.content, d.targetId = e.targetId, d.targetElementId = d.targetId, d.player_width && d.player_height && (d.width = d.player_width, d.height = d.player_height), d.forceDebugLevel && "number" == typeof d.forceDebugLevel && f && f.setDebugLevel(d.forceDebugLevel), d.vastXml;
            try {
                var c, u = /<VASTAdTagURI>(.+)<\/VASTAdTagURI>/gi,
                    p = u.exec(combinedOptionsObj.vastXml);
                u && 0 < p.length ? (p.splice(0, 1), delete p.index, delete p.input, (c = /<!\[CDATA\[(.+)]]>/gi.exec(p[0])).splice(0, 1), delete c.index, delete c.input, c && 0 !== c.length || (c = p), f.log(y, "First VASTAdTagURI found in incoming VAST Tag:", "\n", c[0])) : f.log(y, "No VASTAdTagURI found, perhaps it is a non-wrapped VAST tag, or CSM")
            } catch (e) {}
            d.ASTadId = i, d.targetWindow = window, d.eventCB = t, d.wcElement = e.wcElement, d.playerTechnology = ["html5"], d.enableInlineVideoFullscreenButton = !0, d.productVersion = "Outstream-4.20.0", window.$sf && window.$sf.ext ? d.safeFrame = !0 : d.safeFrame = !1, !0 === d.safeFrame && (!0 === d.allowFullscreen && f.debug("[NOT SUPPORTED] fullscreen is not supported in safeframe"), !0 === d.fixedSizePlayer && f.debug("[NOT SUPPORTED] fixedSizePlayer option is not supported in safeframe"), !0 === d.autoInitialSize && f.debug("[NOT SUPPORTED] autoInitialSize option is not supported in safeframe"), d.sideStream && !0 === d.sideStream.enabled && (f.debug("[NOT SUPPORTED] sideStream is not supported in safeframe"), d.sideStream.enabled = !1), "left" !== d.alignment && f.debug("[NOT SUPPORTED] safeframe only supports left alignment"), d.allowFullscreen = !1, d.fixedSizePlayer = !1, d.autoInitialSize = !1, d.alignment = "left"), v.isAMP() && (d.expandTime && 0 < d.expandTime && (f.debug("[NOT SUPPORTED] expandTime option is not supported in Outstream under AMP"), d.expandTime = 0), !0 === d.allowFullscreen && f.debug("[NOT SUPPORTED] fullscreen is not supported in Outstream under AMP"), d.sideStream && !0 === d.sideStream.enabled && (f.debug("[NOT SUPPORTED] sideStream is not supported in Outstream under AMP"), d.sideStream.enabled = !1), f.debug("[NOT SUPPORTED] fullscreen is not supported in Outstream under AMP turning off"), d.allowFullscreen = !1), f.info("Outstream Renderer calling ad unit with values " + d.targetId + " ", d), k(d, e.targetId, i, a), w(o);
            try {
                "function" == typeof d.cbNotification && d.cbNotification.call(this, "AdUnit", "RendererInitialized", i, {})
            } catch (e) {
                f.error(e)
            }
        } else f.debug("Outstream Renderer - no ad data")
    }
    e.exports = {
        renderAd: a,
        notify: r,
        combineObjectsAndSubobjects: A,
        setInitialPlaybackOptions: b
    };
    "object" == typeof apntag && "function" == typeof apntag.registerRenderer ? apntag.registerRenderer(2, e.exports) : (apntag_pendingRenderers = "undefined" != typeof apntag_pendingRenderers ? apntag_pendingRenderers : []).push({
        type: 2,
        handler: a,
        notify: r
    })
}, function(e, t, s) {
    var l = "Outstream_Main",
        d = s(2),
        c = s(3),
        u = s(61);
    e.exports = function() {
        d.info("Outstream starts to initialize", l), this.playerManager = Object.create(c), this.playerManager.isExpanded = !1, this.disableCollapse = void 0, this.targetElementId = void 0, this.ASTadId = void 0, this.isDoneLoadVideo = !1, this.isAlreadyCompleted = !1, this.triggerCheckFocus = null, this.rWindow = window.self, this.targetElement = {}, this.videoPlayerObjectElement = {}, this.videoIsreadyToPlay = !1, this.isVideoRendered = !1, this.hasFocus = !1, this.animationSpeed = void 0, this.isExpandTransitionCompleted = !1, this.isAreadyTerminated = !1, this.shouldResizeByFullscreenChange = !1, this.intervalIdForDetectAndPlay = void 0, this.isCollapseEnd = !1, this.isCollapseStart = !1, this.isAdComplete = !1, this.TIME_TO_REVERIFY = 100, this.isMutedByViewability = !1, this.doneInitialPlayback = !1, this.originalSize = {
            width: 0,
            height: 0
        }, this.sideStream = null, this.firstAdAttempted = !1, this.viewableDetector = {}, this.isOkToPlayFromPublisher = !0, this.isTerminatedByPublisher = !1, this.currentEventFromCrossDomainWindow = {
            offsetTop: 0,
            windowHeight: 0
        }, this.isExpanded = !1, this.rWindowForPublisher = null, this.isWindowTopAccessible = !0, this.options = null, this.haveVideoThresholdForSideStream = !1, this.sizeObj = {}, this.DEFAULT_OPTIONS_FOR_OUTSTREAM = s(78), this.cbType = {
            loaded: "loaded",
            ended: "ended",
            error: "error",
            impression: "impression"
        }, this.cbNotificationType = {
            error: "error",
            adComplete: "adComplete",
            expandStart: "expandStart",
            expandEnd: "expandEnd",
            collapseStart: "collapseStart",
            collapseEnd: "collapseEnd",
            timeout: "timeout",
            size: "renderedPlayerSize",
            waterfall: "waterfall",
            vastData: "vastData"
        }, this.doneUserActionForInitiateOutstream = !1, this.parentIframeIsModal = !1, this.elementToCheckTopMost = null, this.rateOfBeaconsForTopMostCheck = null, this.ampParentSeen = !1;
        var e = this,
            t = (this.videoPlayer = c, this.AdHandler = u, s(79)(e)),
            n = s(84)(e),
            i = s(85)(e),
            o = s(86)(e),
            r = s(87)(e),
            a = s(88)(e),
            e = s(89)(e);
        this.init = t.init, this.start = t.start, this.setInitialVariable = t.setInitialVariable, this.getTargetWindow = t.getTargetWindow, this.checkTopWindow = t.checkTopWindow, this.createAndroidIframes = i.createAndroidIframes, this.handleFullscreen = i.handleFullscreen, this.fnRotationChange = i.fnRotationChange, this.resizeOutstreamArea = i.resizeOutstreamArea, this.cleanupTargetElement = o.cleanupTargetElement, this.cleanupPreviousElement = o.cleanupPreviousElement, this.handleMessage = r.handleMessage, this.parentIframeGeometryUpdate = r.parentIframeGeometryUpdate, this.handleOkToPlayAd = r.handleOkToPlayAd, this.cbNotification = r.cbNotification, this.cbNotificationOriginalForAMP = r.cbNotification, this.eventCB = r.eventCB, this.cbNotification_internal = r.cbNotification_internal, this.eventCB_internal = r.eventCB_internal, this.reportFinalSize = r.reportFinalSize, this.listenerBlur = e.listenerBlur, this.listenerFocus = e.listenerFocus, this.setIsExpanded = e.setIsExpanded, this.finishedExpanding = e.finishedExpanding, this.expandArea = e.expandArea, this.detectAndPlay = e.detectAndPlay, this.isElementVisible = e.isElementVisible, this.renderVideo = e.renderVideo, this.whenImpression = e.whenImpression, this.isPlayingVideo = a.isPlayingVideo, this.sendPlaySignalToVideoPlayerExplicit = a.sendPlaySignalToVideoPlayerExplicit, this.sendPlaySignalToVideoPlayer = a.sendPlaySignalToVideoPlayer, this.sendPauseSignalToVideoPlayerExplicit = a.sendPauseSignalToVideoPlayerExplicit, this.sendPauseSignalToVideoPlayer = a.sendPauseSignalToVideoPlayer, this.terminateAll = n
    }
}, function(e, t) {
    var n, i = 0,
        o = 6,
        r = i,
        a = r,
        s = r;

    function l(e, t) {
        try {
            var n, i, o;
            void 0 !== e && e <= a && console && (n = "[APN", i = function(e) {
                switch (e) {
                    case 0:
                        break;
                    case 1:
                        return "always";
                    case 2:
                        return "error";
                    case 3:
                        return "warn";
                    case 4:
                        return "info";
                    case 5:
                        return "log";
                    case 6:
                        return "debug";
                    case 7:
                        return "verbose"
                }
            }(e), console[i] || (n += "-" + i, i = "log"), n = (n += "]") + "[" + function() {
                var e = "";
                try {
                    var t = new Date,
                        e = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + "." + t.getMilliseconds()
                } catch (e) {}
                return e
            }() + "]", t.splice(0, 0, n), console[i].apply ? console[i].apply(console, t) : (o = Array.prototype.slice.apply(t).join(""), console[i](o)))
        } catch (e) {}
    }

    function d(e) {
        var t, n = r;
        try {
            void 0 !== e && (t = parseInt(e), isNaN(t) ? "boolean" == typeof e ? n = e ? o : i : "TRUE" === (e = e.toUpperCase()) ? n = o : "FALSE" === e && (n = i) : n = t)
        } catch (e) {}
        return n
    }
    e.exports = {
        traceAtLevel: function() {
            try {
                var e, t;
                0 < arguments.length && (e = arguments[0], t = Array.prototype.slice.call(arguments, 1), l.call(this, e, t))
            } catch (e) {}
        },
        always: function() {
            try {
                l.call(this, 1, Array.prototype.slice.call(arguments))
            } catch (e) {}
        },
        error: function() {
            try {
                l.call(this, 2, Array.prototype.slice.call(arguments))
            } catch (e) {}
        },
        log: function() {
            try {
                l.call(this, 5, Array.prototype.slice.call(arguments))
            } catch (e) {}
        },
        warn: function() {
            try {
                l.call(this, 3, Array.prototype.slice.call(arguments))
            } catch (e) {}
        },
        info: function() {
            try {
                l.call(this, 4, Array.prototype.slice.call(arguments))
            } catch (e) {}
        },
        debug: function() {
            try {
                l.call(this, 6, Array.prototype.slice.call(arguments))
            } catch (e) {}
        },
        verbose: function() {
            try {
                l.call(this, 6, Array.prototype.slice.call(arguments))
            } catch (e) {}
        },
        handleLogDebugLegacySupport: function(e, t) {
            try {
                var n = 5,
                    i = e,
                    o = t;
                try {
                    var r = "[APN-" + n + "-" + (new Date).toISOString() + "] ";
                    null !== o && o && 0 < o.length && (r += o + ">"), r += i, n <= a && console.log(r)
                } catch (e) {
                    n <= a && console.log(e)
                }
            } catch (e) {}
        },
        setDebugLevel: function(e) {
            try {
                var t = e;
                try {
                    n = d(t), a = Math.max(Math.max(s, n), a)
                } catch (e) {}
            } catch (e) {}
        },
        isTraceLevelActive: function(e) {
            try {
                return e <= a
            } catch (e) {
                return !1
            }
        },
        TRACE_LEVEL_ALWAYS: 1,
        TRACE_LEVEL_ERROR: 2,
        TRACE_LEVEL_WARN: 3,
        TRACE_LEVEL_INFO: 4,
        TRACE_LEVEL_LOG: 5,
        TRACE_LEVEL_DEBUG: 6,
        TRACE_LEVEL_VERBOSE: 6
    };
    try {
        s = d(function(e) {
            try {
                var t = "";
                try {
                    t = window.top.location.search
                } catch (e) {
                    try {
                        t = window.location.search
                    } catch (e) {}
                }
                var n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
                return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
            } catch (e) {
                return ""
            }
        }("ast_debug").toUpperCase()), a = Math.max(s, a)
    } catch (e) {}
}, function(e, t, n) {
    function a(e) {
        y.debug(g, e)
    }

    function s(e) {
        y.error(g, e)
    }
    var i = n(4),
        o = n(9),
        r = n(52),
        l = n(53),
        d = n(51),
        c = n(11),
        u = c.DelayEventHandler,
        p = c.unique(),
        h = n(33),
        m = n(54),
        f = n(60),
        v = "APNVideo_Player_" + ((new Date).getTime() + Math.floor(1e4 * Math.random())),
        g = "[PlayerManager_Main]",
        y = n(2),
        A = ["AdPaused", "AdVolumeChange"],
        b = ["AdLoaded", "AdStopped", "AdSkippableStateChange", "AdLinearChange", "AdDurationChange", "AdRemainingTimeChange", "AdLog", "AdError"],
        w = {
            enforcePrivacy: !1,
            initialPlayback: "auto",
            initialAudio: "off",
            skippable: {
                enabled: !0,
                allowOverride: !1,
                videoThreshold: 15,
                videoOffset: 5,
                skipLocation: "top-left",
                skipText: "Video can be skipped in %%TIME%% seconds",
                skipButtonText: "SKIP"
            },
            adText: "Ad",
            showMute: !0,
            showVolume: !0,
            showProgressBar: !0,
            showPlayToggle: !0,
            showBigPlayButton: !0,
            allowFullscreen: !0,
            playerSkin: {
                customPlayerSkin: "",
                controlBarHeight: 30,
                topDividerColor: "#606060",
                bottomDividerColor: "#606060",
                topDividerWidth: 1,
                bottomDividerWidth: 1,
                videoBackgroundColor: "#000000"
            },
            disableCollapse: {
                enabled: !1,
                replay: !1
            },
            endCard: {
                enabled: !1,
                clickable: !0,
                color: "",
                imageUrl: "",
                imageWidth: "",
                imageHeight: "",
                showCompanion: !0
            },
            enableInlineVideoForIos: !0,
            delayExpandUntilVPAIDInit: !1,
            delayExpandUntilVPAIDImpression: !1,
            vpaidTimeout: 5e3,
            waterfallTimeout: 3e4,
            waterfallSteps: -1,
            fixedSizePlayer: !0,
            disableTopBar: !1,
            sideStream: {
                enabled: !1,
                position: "bottom-right",
                xOffset: 0,
                yOffset: 0,
                space: "empty",
                dynamicBigPlayButtonOnSideStream: !0
            },
            sideStreamObject: {},
            preloadInlineAudioForIos: !1,
            controlBarPosition: "over",
            customPlayerSkinCss: "",
            customButton: {
                enabled: !1,
                url: "",
                altText: "",
                imageSrc: "",
                imgWidth: 50,
                imgHeight: 30
            },
            enableNativeInline: !1,
            androidDSOverride: !1,
            cbNotification: function() {},
            parentIframeIsModal: !1,
            learnMore: {
                enabled: !1,
                clickToPause: !0,
                text: "Learn More",
                separator: "-"
            },
            playerContextId: "anadvideoplayer",
            data: {
                skipOffset: "",
                durationMsec: null,
                skipOffsetMsec: null,
                isVastVideoSkippable: !1,
                vastProgressEvent: {},
                vastDurationMsec: null,
                adIcons: null
            },
            test: function() {}
        },
        n = {
            externalNameOfVideoPlayer: v,
            videoPlayerObj: i,
            autoplayHandler: f,
            mobileSupport: f,
            customSkinning: h,
            options: {},
            adVideoPlayer: {},
            callbackForAdUnit: {},
            vpaidData: {},
            iframeVideoWrapper: {},
            isPlayingVideo: !1,
            isDoneInitialPlay: !1,
            isFullscreen: !1,
            heightOffset: 0,
            explicitPaused: !1,
            aspectRatio: 0,
            videoObjectId: {},
            isViewable: !1,
            isSkipped: !1,
            isCompleted: !1,
            isMuted: !1,
            isExplicitMuted: !1,
            hasBeenUnmuted: !1,
            isChrome: -1 < navigator.userAgent.indexOf("Chrome"),
            videojs_vpaid: r,
            overlayPlayer: !1,
            forceToSkip: !1,
            ExtendDefaultOption: l,
            delayEventHandler: null,
            pausedByViewability: !1,
            mutedByVisibility: !1,
            isReadyToExpandForMobile: !1,
            isAlreadyPlaingForVPAID: !1,
            isSideStreamActivated: !1,
            isExpanded: !0,
            isVideoCompleteInjected: !1,
            isFullscreenToggled: !1,
            toggleWindowFocus: !0,
            viewabilityTracking: null,
            isDoneFirstLoadStart: !1,
            startedReplay: !1,
            Utils: c,
            isAlreadyStart: !1,
            isEnded: !1,
            blockTrackingUserActivity: !1,
            videoId: "",
            divIdForVideo: "",
            pausedByAPI: !1,
            simidIntegratorObj: null,
            init: function(e) {
                e = l(w, e);
                return this.options = e, !0 === this.options.skippable.allowOverride && (this.options.skippable.videoThreshold = 0, this.options.skippable.enabled = !0), "boolean" == typeof this.options.disableCollapse && (this.options.disableCollapse = {
                    enabled: this.options.disableCollapse,
                    replay: !1
                }), this.delayEventHandler = new u, this.delayEventHandler.suppress(this.options.delayExpandUntilVPAIDImpression), this.delayEventHandler.start(), this.viewabilityTracking = new m, e
            },
            getValueFromPlayer: function(e) {
                var t = 0;
                try {
                    "controlBar.height" === e && this.adVideoPlayer && this.adVideoPlayer.controlBar && this.adVideoPlayer.controlBar.height && "function" == typeof this.adVideoPlayer.controlBar.height && "html5" === this.decidePlayer(this.options.requiredPlayer) && (t = this.adVideoPlayer.controlBar.height())
                } catch (e) {
                    s(e)
                }
                return t
            },
            decidePlayer: function() {
                return "html5"
            },
            buildPlayer: function(n, i) {
                var e, o = this;
                i.waterfallStepId && a("CHECKING AUTOPLAY FOR WATERFALL STEP: " + i.waterfallStepId), "html5" === this.decidePlayer(i.requiredPlayer) && this.autoplayHandler && !i.overlayPlayer ? (e = !f.isMobile() && ("on" === i.initialAudio || !0 === i.audioOnMouseover), o.autoplayHandler.getAutoplayPolicy(function(e) {
                    var t = o.autoplayHandler.videoPolicy;
                    switch (e) {
                        case t.allowAutoplay:
                            break;
                        case t.stopMediaWithSound:
                            f.isMobile() && "native" === i.adType && i.vpaid && o.isAlreadyPlaingForVPAID || ("on" === i.initialAudio ? ("auto" !== i.initialPlayback && "mouseover" !== i.initialPlayback || (i.initialAudio = "off", i.audioOnMouseover = !1), !0 === i.isWaterfall && (0 < i.adAttempt ? (i.initialAudio = "off", i.audioOnMouseover = !1) : i.audioOnMouseover = !0)) : "auto" !== i.initialPlayback && "mouseover" !== i.initialPlayback || (i.audioOnMouseover = !1));
                            break;
                        case t.neverAutoplay:
                            i.initialPlayback = "click", i.isWaterfall && (i.isWaterfall = !1, i.stopWaterfall = !0)
                    }
                    i.waterfallStepId && a("BUILDING PLAYER FOR WATERFALL STEP: " + i.waterfallStepId), o.buildPlayerCallback(n, i)
                }, e)) : o.buildPlayerCallback(n, i)
            },
            buildPlayerCallback: function(e, t) {
                this.callbackForAdUnit = e, t.hasOwnProperty("overlayPlayer") && (this.overlayPlayer = t.overlayPlayer, t.hasOwnProperty("fullscreenMode") && (t.allowFullscreen = !1)), !this.options.targetElement || this.options.firstAdAttempted || this.options.targetElement.style.backgroundImage || (this.options.targetElement.style.visibility = "hidden");
                var n = (new Date).getTime() + Math.floor(1e4 * Math.random());
                this.externalNameOfVideoPlayer = "APNVideo_Player_" + n, o(e, t, this)
            },
            getPlayerStatus: function() {},
            notifyPlayer: function(e, t) {
                this.adVideoPlayer.handleAdUnitNotification({
                    name: e,
                    value: t
                })
            },
            load: function() {
                if ("html5" === this.decidePlayer(this.options.requiredPlayer)) {
                    a("load video");
                    try {
                        this.adVideoPlayer && void 0 !== this.adVideoPlayer && this.adVideoPlayer.load && "function" == typeof this.adVideoPlayer.load && (this.options.delayExpandUntilVPAIDImpression && this.adVideoPlayer.player() && this.adVideoPlayer.player().autoplay() && this.adVideoPlayer.player().autoplay(!1), this.adVideoPlayer.load())
                    } catch (e) {
                        s(e)
                    }
                }
            },
            replay: function() {
                var e;
                this.isEnded && (!this.options.vpaid || "native" !== this.options.adType && "preview" !== this.options.adType ? (this.dispatchEventToAdunit({
                    name: "rewind"
                }), this.startedReplay = !0, this.isEnded = !1, this.explicitPlay(), this.adVideoPlayer.controlBar.playToggle && this.adVideoPlayer.controlBar.playToggle.el() && this.adVideoPlayer.controlBar.playToggle.el().style && (this.adVideoPlayer.controlBar.playToggle.el().style["pointer-events"] = ""), this.options.sideStream && !0 === this.options.sideStream.wasEnabled && (this.options.sideStream.enabled = !0, delete this.options.sideStream.wasEnabled), this.options.endCard && this.options.endCard.enabled && (this.actualPlayByVideoJS(), c.isIos() || this.adVideoPlayer.bigPlayButton.show())) : (this.dispatchEventToAdunit({
                    name: "rewind"
                }), (e = this.iframeVideoWrapper || document.getElementById(this.options.iframeVideoWrapperId)) && e.parentNode.removeChild(e), -1 < navigator.userAgent.indexOf("Trident/7.0") || c.isIos() ? (this.isEnded = !1, this.dispatchEventToAdunit({
                    name: "replay-vpaid"
                })) : (this.dispatchEventToAdunit({
                    name: "replay-vpaid"
                }), this.isEnded = !1), this.adVideoPlayer.controlBar.playToggle && this.adVideoPlayer.controlBar.playToggle.el() && this.adVideoPlayer.controlBar.playToggle.el().style && (this.adVideoPlayer.controlBar.playToggle.el().style["pointer-events"] = "")))
            },
            actualPlayByVideoJS: function() {
                this.adVideoPlayer.play(), this.options.vpaid && this.adVideoPlayer.trigger("handleManualUserInActive")
            },
            play: function() {
                var e, t, n;
                !0 === this.isEnded ? "preview" === this.options.adType && this.options.onlyAudio && this.replay() : ((e = (e = f.isMobile() && 10 <= f.iOSversion()[0] && !1 === this.options.enableInlineVideoForIos) && !c.isIphone() && "native" === this.options.adType ? !1 : e) && ((t = this).overlayPlayer ? t.options.targetElement.style.overflow = "" : setTimeout(function() {
                    t.options.targetElement.style.overflow = ""
                }, t.options.expandTime)), this.isAlreadyPlaingForVPAID = !0, this.isCompleted || (a("play video"), this.isDoneInitialPlay ? (this.decidePlayer(this.options.requiredPlayer), this.isPlayingVideo || this.dispatchEventToAdunit({
                    name: "video_resume"
                })) : this.options.vpaid || (this.dispatchEventToAdunit({
                    name: "video_start"
                }), this.dispatchEventToAdunit({
                    name: "video_impression"
                })), this.options.vpaid && this.isIosInlineRequired() ? this.isDoneInitialPlay ? this.actualPlayByVideoJS() : this.adVideoPlayer.trigger("play") : this.options.vpaid && this.options.overlayPlayer && f.isIOS() && f.iOSversion()[0] < 10 && !this.isDoneInitialPlay || this.options.vpaid && this.options.overlayPlayer && -1 < navigator.appVersion.indexOf("Android") && this.options.enableWaterfall && !this.isDoneInitialPlay ? this.adVideoPlayer.trigger("play") : this.actualPlayByVideoJS(), "native" === this.options.adType && f.isMobile() && (n = this.adVideoPlayer.controlBar, setTimeout(function() {
                    n.el_.style.opacity = 1, n.el_.style.visibility = "visible"
                }, 500)), "html5" !== this.decidePlayer(this.options.requiredPlayer) && (this.isPlayingVideo = !0), this.isDoneInitialPlay = !0, this.isEnded = !1))
            },
            resetVpaid: function() {
                this.dispatchEventToAdunit({
                    name: "reset"
                })
            },
            pause: function() {
                this.isPlayingVideo && (a("pause video"), this.adVideoPlayer.pause(), this.options.vpaid && this.adVideoPlayer.trigger("handleManualUserActive"), this.isCompleted || this.isEnded || this.dispatchEventToAdunit({
                    name: "video_pause"
                }))
            },
            explicitPause: function() {
                a("explicit pause video"), this.explicitPaused = !0, this.pause()
            },
            explicitPlay: function() {
                this.pausedByAPI || (a("explicit play video"), this.explicitPaused = !1, this.play())
            },
            mute: function() {
                this.isMuted || (a("mute audio"), this.adVideoPlayer.muted(!0), this.dispatchEventToAdunit({
                    name: "video_mute"
                }), this.isMuted = !0)
            },
            explicitMute: function() {
                a("explicit mute video"), this.isExplicitMuted = !0, this.mute()
            },
            unmute: function() {
                !this.isExplicitMuted && this.isMuted && (a("unmute audio"), !0 === this.adVideoPlayer.muted() && this.adVideoPlayer.muted(!1), !this.isMuted && "off" !== this.options.initialAudio || this.dispatchEventToAdunit({
                    name: "video_unmute"
                }), this.isMuted = !1)
            },
            explicitUnmute: function() {
                this.isExplicitMuted = !1, this.unmute()
            },
            resizeVideoWithDimensions: function(e, t) {
                (this.isEnded || this.isSkipped) && 1 === e && 1 === t && (this.options.macroWidth = this.options.width, this.options.macroHeight = this.options.height), this.options.width = e, this.options.height = t, this.resizeVideo(this.aspectRatio)
            },
            destroy: function(e, t) {
                this.isPlayingVideo = !1, this.adVideoPlayer.pause(), !1 === this.isCompleted && (!1 === this.options.vpaid || !0 === this.options.vpaid && !1 === this.isSkipped) && this.dispatchEventToAdunit({
                    name: "video_skip"
                }), this.isSkipped = !0, this.verificationManager && this.verificationManager.destroy(), a("destroy"), "preview" === this.options.adType ? (this.adVideoPlayer.currentTime(this.adVideoPlayer.duration()), this.options.vpaid ? this.adVideoPlayer.trigger("customDestroy") : this.adVideoPlayer.trigger("ended")) : "function" == typeof this.callbackForAdUnit.cbWhenDestroy && (this.overlayPlayer ? e && t ? this.callbackForAdUnit.cbWhenDestroy({
                    type: 1,
                    code: 900,
                    message: t
                }, !0, this.options) : this.callbackForAdUnit.cbWhenDestroy(null, !0, this.options) : e && t ? this.callbackForAdUnit.cbWhenDestroy({
                    type: 1,
                    code: 900,
                    message: t
                }, null, this.options) : this.callbackForAdUnit.cbWhenDestroy(null, null, this.options))
            },
            destroyWithoutSkip: function(t, n, i, o) {
                try {
                    function e() {
                        if (r.isPlayingVideo = !1, "native" === r.options.adType || "preview" === r.options.adType) {
                            if (r.options.iframeVideoWrapperId === r.options.iframeVideoWrapperIdPrevious) return;
                            r.options.iframeVideoWrapperIdPrevious = r.options.iframeVideoWrapperId
                        }
                        903 != o && r.adVideoPlayer && r.adVideoPlayer.pause && "function" == typeof r.adVideoPlayer.pause && r.adVideoPlayer.pause(), r.verificationManager && r.verificationManager.destroy(), a("destroy without skip: " + r.options.iframeVideoWrapperId);
                        var e = o || 900;
                        "function" == typeof r.callbackForAdUnit.cbWhenDestroy && (r.overlayPlayer ? t && n ? r.callbackForAdUnit.cbWhenDestroy({
                            type: 1,
                            code: e = i ? 402 : e,
                            message: n
                        }, !0, r.options) : r.callbackForAdUnit.cbWhenDestroy(null, !0, r.options) : t && n ? r.callbackForAdUnit.cbWhenDestroy({
                            type: 1,
                            code: e = i ? 402 : e,
                            message: n
                        }, null, r.options) : r.callbackForAdUnit.cbWhenDestroy(null, null, r.options))
                    }
                    var r = this;
                    r.options.disableCollapseForDelay && 0 < r.options.disableCollapseForDelay ? setTimeout(e, r.options.disableCollapseForDelay) : e()
                } catch (e) {
                    s("failed to destroy/notify by " + e)
                }
            },
            getVideoObject: function() {
                return this.adVideoPlayer
            },
            handleOverlayNotification: function(e) {
                a("Got overlay notification from player = " + e.name);
                var t = this,
                    e = {
                        leaveFullscreen: function() {
                            t.options.hasOwnProperty("playerNotification") && t.options.playerNotification("leaveFullscreen")
                        }
                    }[e.name];
                e && void 0 !== e && e()
            },
            notifyVpaidEvent: function(e, t) {
                var n = this;
                n.options.delayExpandUntilVPAIDImpression && n.delayEventHandler.isSuppress && 0 <= A.indexOf(e) || (0 <= b.indexOf(e) || 0 <= b.indexOf("vpaid." + e) ? n.notifyVpaidEvent_internal(e, t) : n.delayEventHandler.push(function() {
                    n.notifyVpaidEvent_internal(e, t)
                }))
            },
            notifyVpaidEvent_internal: function(e, t) {
                this.options.cbNotification && this.options.cbNotification("VPAID", e, this.options.targetId, null, t ? {
                    vpaidEventData: t
                } : null), this.options.cbApnVastPlayer && this.options.cbApnVastPlayer(e)
            },
            setChromeSize: function() {
                this.adVideoPlayer.width = "0px", this.adVideoPlayer.height = "0px", this.adVideoPlayer.style.width = "0px", this.adVideoPlayer.style.height = "0px", this.options.targetElement.style.visibility = "visible"
            },
            click: function(e, t) {
                var n;
                this.isDoneInitialPlay ? (!1 === this.isIosInlineRequired() && (this.pause(), this.toggleWindowFocus = !1), n = !1, e ? (n = !0, window.open(e)) : this.options.clickUrls && 0 < this.options.clickUrls.length && (n = !0, e = this.options.clickUrls[this.options.clickUrls.length - 1], window.open(e)), void 0 !== t && !0 !== t || this.dispatchEventToAdunit({
                    name: "ad-click",
                    trackClick: n
                })) : this.play()
            },
            getRapamsAndExtensions: function() {
                var e = this.options.extensions && 0 < this.options.extensions.length ? "<Extensions>" + this.options.extensions + "</Extensions>" : "";
                return {
                    adParameters: this.options.adParameters,
                    extensions: e
                }
            },
            handleViewability: function(e, i, t) {
                var n = this.options && this.options.viewability,
                    o = e && e.name ? e.name : null;
                "fullscreenchange" !== o && "video_fullscreen" !== o || (o = this.isFullscreen ? "fullscreen" : "exitFullscreen"), t || "video_duration" !== o || (this.isAlreadyStart = !0);
                o && n && (this.blockTrackingUserActivity && ("video_resume" === o || "video_pause" === o || "video_mute" === o || "video_unmute" === o) || (o === i ? function() {
                    var e = this.adVideoPlayer && this.adVideoPlayer.player && "function" == typeof this.adVideoPlayer.player && this.adVideoPlayer.player().duration(),
                        t = (-2 !== (e = !e || void 0 === e || e <= 0 ? -2 : e) || this.options && this.options.data && this.options.data.vastDurationMsec && (e = this.options.data.vastDurationMsec / 1e3) && null !== e && !(e <= 0) || (e = -2), this.options.width),
                        n = this.options.height;
                    this.viewabilityTracking.init(this.options, e, t, n, i, function() {
                        return this.isFullscreen
                    }.bind(this), function() {
                        return this.adVideoPlayer && this.adVideoPlayer.player && "function" == typeof this.adVideoPlayer.player ? this.adVideoPlayer.player().volume() : -1
                    }.bind(this)), this.options.expandable ? ("video_start" === o && this.viewabilityTracking.invokeEvent("expand"), !1 === this.options.vpaid && "loadstart" === o && this.viewabilityTracking.invokeEvent("expand"), this.viewabilityTracking.invokeEvent(o)) : this.options.overlayPlayer && c.isMobile() && this.options.delayStartViewability || this.viewabilityTracking.invokeEvent(o)
                } : function() {
                    this.viewabilityTracking && this.viewabilityTracking.isReady && ("force_start_viewability" === o && this.options.delayStartViewability ? (this.options.delayStartViewability = !1, this.viewabilityTracking.invokeEvent("video_start")) : this.viewabilityTracking.invokeEvent(o))
                }).apply(this))
            },
            findPathForViewability: function(e) {
                var t = "video_start";
                if (e && e.name && e.name === t) {
                    if (this.isDoneFirstLoadStart) return;
                    this.isDoneFirstLoadStart = !0
                }
                this.handleViewability(e, t, !0)
            },
            dispatchEventToAdunit: function(e, t) {
                var n, i, o = this;
                if ("video_start" === e.name && (o.iframeVideoWrapper.contentDocument && (n = o.iframeVideoWrapper.contentDocument.getElementById(o.divIdForVideo), i = o.iframeVideoWrapper.contentDocument.getElementById(o.videoId), n.style.background = o.options.playerSkin.videoBackgroundColor, i.style.background = o.options.playerSkin.videoBackgroundColor, f.isIOS() && o.isIosInlineRequired() && (i.style.opacity = 0)), -1 < navigator.appVersion.indexOf("Android") && o.options.hasOwnProperty("targetElementBackground") && (o.options.targetElement.style.background = "", delete o.options.targetElementBackground)), -1 < navigator.appVersion.indexOf("Android") && "expand" === e.name && !o.options.hasOwnProperty("targetElementBackground") && o.options.targetElement && o.options.isWaterfall && (o.options.targetElementBackground = o.options.targetElement.style.background, o.options.targetElement.style.background = "#000000"), "video_complete" === e.name && (void 0 === e.obj && (e.obj = {}), e.obj.videoAdPending = this.options.disableCollapse.replay), this.findPathForViewability(e), "collapse" == e.name && this.verificationManager && o.verificationManager.dispatchEvent(e.name, e.data, "ad-collapse"), (!0 === this.startedReplay || this.isEnded) && !0 === this.options.disableCollapse.replay && (!1 !== this.startedReplay || "rewind" !== e.name)) {
                    if ("video_complete" === e.name && "function" == typeof t) return void t();
                    if ("ad-click" !== e.name && -1 === e.name.indexOf("IconClick")) return void this.callbackForAdUnit.cbForHandlingDispatchedEvent(e, !0)
                }
                "video_skip" === e.name && !1 === p.pushAndCheck(this.options.targetElement.id + "_dispatchEventToAdunit", e.name) || "video_complete" === e.name && !0 === this.isVideoCompleteInjected && !1 === this.options.disableCollapse.replay || (e && "video_time" !== e.name && a("(push)" + e.name), this.delayEventHandler.push(function() {
                    o.dispatchEventToAdunit_internal(e, t)
                }), "video_complete" === e.name && (this.isVideoCompleteInjected = !0))
            },
            dispatchEventToAdunit_internal: function(e, t) {
                if (!this.isCompleted || "video_complete" === e.name || "ad-click" === e.name || "video_skip" === e.name || this.startedReplay) {
                    var n = this;
                    if (e && "video_time" !== e.name && a("invoke callback : " + JSON.stringify(e)), this.options.hasOwnProperty("overlayPlayer") && this.options.hiddenControls && (("firstplay" === e.name && !this.options.vpaid || "video_impression" === e.name && this.options.vpaid) && (c.isMobile() && ("click" === this.options.initialPlayback || "mouseover" === this.options.initialPlayback) || f.isIOS() && f.iOSversion()[0] < 10 && "auto" === this.options.initialPlayback) && (this.adVideoPlayer.controlBar.el_.style.removeProperty("display"), delete this.options.hiddenControls), "video_resume" === e.name && this.options.vpaid && c.isMobile() && (this.adVideoPlayer.controlBar.el_.style.removeProperty("display"), delete this.options.hiddenControls)), this.callbackForAdUnit.cbForHandlingDispatchedEvent && "video_time" !== e.name) {
                        if ("video_pause" === e.name && (this.isPlayingVideo = !1), "video_play" !== e.name && "video_start" !== e.name && "firstplay" !== e.name || (this.isPlayingVideo = !0, this.isDoneInitialPlay = !0), "video_fullscreen" === e.name) return void setTimeout(function() {
                            e.fullscreenStatus = n.isFullscreen ? "enter" : "exit", n.callbackForAdUnit.cbForHandlingDispatchedEvent(e)
                        }, 1500);
                        "function" == typeof t && t(), this.blockTrackingUserActivity && ("video_resume" === e.name || "video_pause" === e.name || "video_mute" === e.name || "video_unmute" === e.name) || (e.player = this).callbackForAdUnit.cbForHandlingDispatchedEvent(e), !this.verificationManager || (t = this.prepareOmidEventData(e)).name && (this.options.expandable && "video_start" == e.name && this.verificationManager.dispatchEvent(t.name, t.data, "ad-expand"), this.verificationManager.dispatchEvent(t.name, t.data, e.name))
                    }!0 === this.options.vpaid && "video_skip" === e.name && (this.isSkipped = !0)
                }
            },
            resolveMacro: function(e) {
                switch (e) {
                    case "MEDIAPLAYHEAD":
                        return this.options.hasOwnProperty("mediaPlayhead") && "number" == typeof this.options.mediaPlayhead ? c.convertTimeSecondsToString(this.options.mediaPlayhead) : -1;
                    case "BREAKPOSITION":
                        return this.options.breakPosition ? this.options.breakPosition : -1;
                    case "ADCOUNT":
                        return 1;
                    case "PLACEMENTTYPE":
                        return this.options.overlayPlayer ? 1 : this.options.expandable ? 3 : -1;
                    case "CLIENTUA":
                        return this.options.clientUA && !this.options.enforcePrivacy ? this.options.clientUA : "unknown unknown";
                    case "DEVICEIP":
                        return -1;
                    case "PLAYERCAPABILITIES":
                        var t = [];
                        return this.options.skippable && this.options.skippable.enabled && t.push("skip"), this.options.showMute && t.push("mute"), "auto" === this.options.initialPlayback && ("on" === this.options.initialAudio ? t.push("autoplay") : t.push("mautoplay")), this.options.allowFullscreen && t.push("fullscreen"), t.push("icon"), t.join();
                    case "CLICKTYPE":
                        return this.options.clickUrls && this.options.clickUrls[0] ? 1 : this.options.learnMore.enabled ? 2 : 0;
                    case "PLAYERSTATE":
                        t = [];
                        return this.isMuted && t.push("muted"), this.adVideoPlayer.isFullscreen && "function" == typeof this.adVideoPlayer.isFullscreen && this.adVideoPlayer.isFullscreen() && t.push("fullscreen"), t.join();
                    case "PLAYERSIZE":
                        return 1 === this.options.width && 1 === this.options.height ? this.options.macroWidth + "," + this.options.macroHeight : this.options.width + "," + this.options.height;
                    case "ADPLAYHEAD":
                        return this.adVideoPlayer.currentTime && "function" == typeof this.adVideoPlayer.currentTime ? (t = this.adVideoPlayer.currentTime(), c.convertTimeSecondsToString(t)) : -1;
                    case "ASSETURI":
                        return this.options.video.url;
                    case "PODSEQUENCE":
                        return -1;
                    case "LIMITADTRACKING":
                        return 0;
                    default:
                        return -1
                }
            },
            prepareOmidEventData: function(e) {
                var t = {
                        error: "sessionError",
                        impression: "impression",
                        video_impression: "impression",
                        video_start: "start",
                        "video-first-quartile": "firstQuartile",
                        "video-mid": "midpoint",
                        "video-third-quartile": "thirdQuartile",
                        video_complete: "complete",
                        video_pause: "pause",
                        video_resume: "resume",
                        "user-close": "skipped",
                        video_skipped: "skipped",
                        video_skip: "skipped",
                        "audio-mute": "volumeChange",
                        "audio-unmute": "volumeChange",
                        video_mute: "volumeChange",
                        video_unmute: "volumeChange",
                        fullscreenchange: "playerStateChange",
                        video_fullscreen: "playerStateChange",
                        "video-exit-fullscreen": "playerStateChange",
                        "ad-expand": "playerStateChange",
                        "ad-collapse": "playerStateChange",
                        "ad-click": "adUserInteraction",
                        "user-accept-invitation": "adUserInteraction"
                    },
                    t = t.hasOwnProperty(e.name) ? t[e.name] : "",
                    n = {
                        name: t
                    },
                    i = null;
                switch (t) {
                    case "sessionError":
                        (i = {}).errorType = e.code, i.message = e.message;
                        break;
                    case "start":
                        i = {}, this.options.data.durationMsec ? i.duration = this.options.data.durationMsec / 1e3 : this.adVideoPlayer && this.adVideoPlayer.player && "function" == typeof this.adVideoPlayer.player ? i.duration = this.adVideoPlayer.player().duration() / 1e3 : i.duration = -2, this.adVideoPlayer && this.adVideoPlayer.player && "function" == typeof this.adVideoPlayer.player ? i.videoPlayerVolume = this.adVideoPlayer.player().volume() : i.videoPlayerVolume = -1;
                        break;
                    case "volumeChange":
                        i = {}, "audio-mute" === e.name ? i.videoPlayerVolume = 0 : this.adVideoPlayer && this.adVideoPlayer.player && "function" == typeof this.adVideoPlayer.player ? i.videoPlayerVolume = this.adVideoPlayer.player().volume() : i.videoPlayerVolume = -1;
                        break;
                    case "playerStateChange":
                        i = {}, "video-fullscreen" === e.name || "fullscreenchange" === e.name ? i.state = this.isFullscreen ? "fullscreen" : "normal" : "video-exit-fullscreen" !== e.name && "ad-collapse" === e.name ? i.state = "collapsed" : i.state = "normal";
                        break;
                    case "adUserInteraction":
                        i = {}, "ad-click" === e.name ? i.interactionType = "click" : i.interactionType = "invitationAccept"
                }
                return i && (n.data = i), n
            },
            resizeVideo: function(e, t, n) {
                d.resizeVideo(e, t, this, n)
            },
            resizeVideoForSideStream: function(e, t, n) {
                d.resizeVideoForSideStream(this, e, t, n)
            },
            isIosInlineRequired: function() {
                return this.autoplayHandler.isIosInlineRequired(this.options.enableInlineVideoForIos)
            },
            resizePlayer: function(e, t) {
                d.resizePlayer(e, t, this)
            },
            getFinalSize: function() {
                return d.getFinalSize(this)
            },
            setVastAttribute: function(e) {
                var t = this.options,
                    e = e || (this.adVideoPlayer && this.adVideoPlayer.player ? this.adVideoPlayer.player().duration() : 0),
                    e = (t.data.durationMsec = null !== e ? Math.round(1e3 * e) : 0, this.Utils.getMsecTime(t.data.skipOffset, t.data.durationMsec)),
                    n = (t.data.skipOffset && 0 <= e ? (t.data.isVastVideoSkippable = !0, t.data.skipOffsetMsec = e) : t.data.skipOffsetMsec = null, t.data.vastProgressEvent);
                if (n && "object" == typeof n)
                    for (var i in n) {
                        var o = this.Utils.getMsecTime(i.replace(/progress_/g, ""), t.data.durationMsec);
                        n[i] = o
                    }
            },
            disableTrackingUserActivity: function(e) {
                this.blockTrackingUserActivity = e, this.adVideoPlayer && this.adVideoPlayer.bigPlayButton && (this.adVideoPlayer.bigPlayButton.el_.style.opacity = !0 === e ? 0 : 1)
            },
            delayEventsTracking: function(e, t) {
                this.callbackForAdUnit.cbDelayEventsTracking && this.callbackForAdUnit.cbDelayEventsTracking(e, t)
            },
            notifyOverlayPlayerVideoPaused: function() {
                this.options.tmpActiveListener && this.options.cbApnVastPlayer && this.options.cbApnVastPlayer("apn-video-paused-by-device")
            },
            checkWhenVideoPausedByDevice: function(e) {
                if (this.options.overlayPlayer && this.options.cbApnVastPlayer && this.iframeVideoWrapper && this.iframeVideoWrapper.contentDocument) {
                    var t = null;
                    if ("string" == typeof this.videoObjectId) t = this.iframeVideoWrapper.contentDocument.getElementById(this.videoObjectId);
                    else {
                        var n = this.iframeVideoWrapper.contentDocument.getElementsByTagName("VIDEO");
                        if (n && 0 < n.length)
                            for (var i = 0; i < n.length; i++)
                                if (n[i].src && 0 < n[i].src.length) {
                                    t = n[i];
                                    break
                                }
                    }
                    if (t) e ? (this.options.tmpActiveListener = !0, t.addEventListener("pause", this.notifyOverlayPlayerVideoPaused.bind(this))) : (delete this.options.tmpActiveListener, t.removeEventListener("pause", this.notifyOverlayPlayerVideoPaused.bind(this)))
                }
                return !0
            },
            forceStartViewability: function() {
                this.findPathForViewability({
                    name: "force_start_viewability"
                })
            },
            log: a,
            debug: a,
            test: function(n, e) {
                var t = this.options;
                if (t && t.test && t.test[n] && "function" == typeof t.test[n]) {
                    function i(e) {
                        console.debug("%c" + e, "background: red; color: white")
                    }
                    try {
                        t.test[n](e, function(e, t) {
                            e ? (e = "Unit Test [" + n + "] : " + (t = t + " Succeeded" || "Succeeded"), console.debug("%c" + e, "background: green; color: white")) : i("Unit Test [" + n + "] : " + (t = t + " failed" || "Assertion failed"))
                        }, function(e) {
                            console.debug("%cUnit Test Log : [" + n + "] : " + e, "background: gray; color: white")
                        })
                    } catch (e) {
                        i("unit test failed due to : " + e)
                    }
                }
            }
        };
    e.exports = n, window[v] = n
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    ! function(module) {
        var global_options, vjs = (document.createElement("video"), document.createElement("audio"), document.createElement("track"), function(e, t, n) {
                var i;
                if (global_options = t, "string" == typeof e) {
                    if (0 === e.indexOf("#") && (e = e.slice(1)), vjs.players[e]) return t && vjs.log.warn('Player "' + e + '" is already initialised. Options will not be applied.'), n && vjs.players[e].ready(n), vjs.players[e];
                    i = vjs.el(e)
                } else i = e;
                if (i && i.nodeName) return i.player || new vjs.Player(i, t, n);
                throw new TypeError("The element or ID supplied is not valid. (videojs)")
            }),
            videojs = window.videojs_apn = vjs;

        function _handleMultipleEvents(t, n, e, i) {
            vjs.arr.forEach(e, function(e) {
                t(n, e, i)
            })
        }
        vjs.VERSION = "GENERATED_FULL_VSN", vjs.options = {
            techOrder: ["html5"],
            html5: {},
            width: 300,
            height: 150,
            defaultVolume: 0,
            playbackRates: [],
            inactivityTimeout: 500,
            children: {
                mediaLoader: {},
                posterImage: {},
                loadingSpinner: {},
                textTrackDisplay: {},
                bigPlayButton: {},
                controlBar: {},
                errorDisplay: {},
                textTrackSettings: {}
            },
            language: document.getElementsByTagName("html")[0].getAttribute("lang") || navigator.languages && navigator.languages[0] || navigator.userLanguage || navigator.language || "en",
            languages: {},
            notSupportedMessage: "No compatible source was found for this video."
        }, vjs.addLanguage = function(e, t) {
            return void 0 !== vjs.options.languages[e] ? vjs.options.languages[e] = vjs.util.mergeOptions(vjs.options.languages[e], t) : vjs.options.languages[e] = t, vjs.options.languages
        }, vjs.players = {}, __webpack_require__(6).amd ? (__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return videojs
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : module.exports = videojs, vjs.CoreObject = vjs.CoreObject = function() {}, vjs.CoreObject.extend = function(e) {
            var t, n, i = (e = e || {}).init || e.init || this.prototype.init || this.prototype.init || function() {};
            for (n in (((t = function() {
                    i.apply(this, arguments)
                }).prototype = vjs.obj.create(this.prototype)).constructor = t).extend = vjs.CoreObject.extend, t.create = vjs.CoreObject.create, e) e.hasOwnProperty(n) && (t.prototype[n] = e[n]);
            return t
        }, vjs.CoreObject.create = function() {
            var e = vjs.obj.create(this.prototype);
            return this.apply(e, arguments), e
        }, vjs.on = function(r, e, t) {
            if (vjs.obj.isArray(e)) return _handleMultipleEvents(vjs.on, r, e, t);
            var a = vjs.getData(r);
            a.handlers || (a.handlers = {}), a.handlers[e] || (a.handlers[e] = []), t.guid || (t.guid = vjs.guid++), a.handlers[e].push(t), a.dispatcher || (a.disabled = !1, a.dispatcher = function(e) {
                if (!a.disabled) {
                    e = vjs.fixEvent(e);
                    var t = a.handlers[e.type];
                    if (t)
                        for (var n = t.slice(0), i = 0, o = n.length; i < o && !e.isImmediatePropagationStopped(); i++) n[i].call(r, e)
                }
            }), 1 == a.handlers[e].length && (r.addEventListener ? r.addEventListener(e, a.dispatcher, !1) : r.attachEvent && r.attachEvent("on" + e, a.dispatcher))
        }, vjs.off = function(t, e, n) {
            if (vjs.hasData(t)) {
                var i = vjs.getData(t);
                if (i.handlers) {
                    if (vjs.obj.isArray(e)) return _handleMultipleEvents(vjs.off, t, e, n);

                    function o(e) {
                        i.handlers[e] = [], vjs.cleanUpEvents(t, e)
                    }
                    if (e) {
                        var r = i.handlers[e];
                        if (r)
                            if (n) {
                                if (n.guid)
                                    for (var a = 0; a < r.length; a++) r[a].guid === n.guid && r.splice(a--, 1);
                                vjs.cleanUpEvents(t, e)
                            } else o(e)
                    } else
                        for (var s in i.handlers) o(s)
                }
            }
        }, vjs.cleanUpEvents = function(e, t) {
            var n = vjs.getData(e);
            0 === n.handlers[t].length && (delete n.handlers[t], e.removeEventListener ? e.removeEventListener(t, n.dispatcher, !1) : e.detachEvent && e.detachEvent("on" + t, n.dispatcher)), vjs.isEmpty(n.handlers) && (delete n.handlers, delete n.dispatcher, delete n.disabled), vjs.isEmpty(n) && vjs.removeData(e)
        }, vjs.fixEvent = function(e) {
            function t() {
                return !0
            }

            function n() {
                return !1
            }
            if (!e || !e.isPropagationStopped) {
                var i, o, r, a = e || window.event;
                for (i in e = {}, a) "layerX" === i || "layerY" === i || "keyLocation" === i || "returnValue" == i && a.preventDefault || (e[i] = a[i]);
                e.target || (e.target = e.srcElement || document), e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement, e.preventDefault = function() {
                    a.preventDefault && a.preventDefault(), e.returnValue = !1, e.isDefaultPrevented = t, e.defaultPrevented = !0
                }, e.isDefaultPrevented = n, e.defaultPrevented = !1, e.stopPropagation = function() {
                    a.stopPropagation && a.stopPropagation(), e.cancelBubble = !0, e.isPropagationStopped = t
                }, e.isPropagationStopped = n, e.stopImmediatePropagation = function() {
                    a.stopImmediatePropagation && a.stopImmediatePropagation(), e.isImmediatePropagationStopped = t, e.stopPropagation()
                }, e.isImmediatePropagationStopped = n, null != e.clientX && (o = document.documentElement, r = document.body, e.pageX = e.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = e.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), e.which = e.charCode || e.keyCode, null != e.button && (e.button = 1 & e.button ? 0 : 4 & e.button ? 1 : 2 & e.button ? 2 : 0)
            }
            return e
        }, vjs.trigger = function(e, t) {
            var n = vjs.hasData(e) ? vjs.getData(e) : {},
                i = e.parentNode || e.ownerDocument;
            return t = vjs.fixEvent(t = "string" == typeof t ? {
                type: t,
                target: e
            } : t), n.dispatcher && n.dispatcher.call(e, t), i && !t.isPropagationStopped() && !1 !== t.bubbles ? vjs.trigger(i, t) : i || t.defaultPrevented || (n = vjs.getData(t.target), t.target[t.type] && (n.disabled = !0, "function" == typeof t.target[t.type] && t.target[t.type](), n.disabled = !1)), !t.defaultPrevented
        }, vjs.one = function(e, t, n) {
            if (vjs.obj.isArray(t)) return _handleMultipleEvents(vjs.one, e, t, n);

            function i() {
                vjs.off(e, t, i), n.apply(this, arguments)
            }
            i.guid = n.guid = n.guid || vjs.guid++, vjs.on(e, t, i)
        };
        var hasOwnProp = Object.prototype.hasOwnProperty,
            cacheManager = __webpack_require__(7);

        function _logType(e, t) {}
        vjs.createEl = function(e, t) {
            var n;
            return e = e || "div", t = t || {}, n = document.createElement(e), vjs.obj.each(t, function(e, t) {
                -1 !== e.indexOf("aria-") || "role" == e ? n.setAttribute(e, t) : n[e] = t
            }), n
        }, vjs.capitalize = function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }, vjs.obj = {}, vjs.obj.create = Object.create || function(e) {
            function t() {}
            return t.prototype = e, new t
        }, vjs.obj.each = function(e, t, n) {
            for (var i in e) hasOwnProp.call(e, i) && t.call(n || this, i, e[i])
        }, vjs.obj.merge = function(e, t) {
            if (t)
                for (var n in t) hasOwnProp.call(t, n) && (e[n] = t[n]);
            return e
        }, vjs.obj.deepMerge = function(e, t) {
            var n, i, o;
            for (n in e = vjs.obj.copy(e), t) hasOwnProp.call(t, n) && (i = e[n], o = t[n], vjs.obj.isPlain(i) && vjs.obj.isPlain(o) ? e[n] = vjs.obj.deepMerge(i, o) : e[n] = t[n]);
            return e
        }, vjs.obj.copy = function(e) {
            return vjs.obj.merge({}, e)
        }, vjs.obj.isPlain = function(e) {
            return !!e && "object" == typeof e && "[object Object]" === e.toString() && e.constructor === Object
        }, vjs.obj.isArray = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }, vjs.isNaN = function(e) {
            return e != e
        }, vjs.bind = function(e, t, n) {
            t.guid || (t.guid = vjs.guid++);

            function i() {
                return t.apply(e, arguments)
            }
            return i.guid = n ? n + "_" + t.guid : t.guid, i
        }, vjs.cache = {}, vjs.guid = 1, vjs.expando = "vdata" + (new Date).getTime(), vjs.getData = function(e) {
            var t = (t = e[vjs.expando]) || (e[vjs.expando] = vjs.guid++);
            return vjs.cache[t] || (vjs.cache[t] = {}), vjs.cache[t]
        }, vjs.hasData = function(e) {
            e = e[vjs.expando];
            return !(!e || vjs.isEmpty(vjs.cache[e]))
        }, vjs.removeData = function(t) {
            var e = t[vjs.expando];
            if (e) {
                delete vjs.cache[e];
                try {
                    delete t[vjs.expando]
                } catch (e) {
                    t.removeAttribute ? t.removeAttribute(vjs.expando) : t[vjs.expando] = null
                }
            }
        }, vjs.isEmpty = function(e) {
            for (var t in e)
                if (null !== e[t]) return !1;
            return !0
        }, vjs.hasClass = function(e, t) {
            try {
                if (e) return -1 !== (" " + e.className + " ").indexOf(" " + t + " ");
                vjs.log("Error in hasClass, element does not exist")
            } catch (e) {
                vjs.log("Exception in hasClass", e)
            }
        }, vjs.addClass = function(e, t) {
            try {
                e && !vjs.hasClass(e, t) ? e.className = "" === e.className ? t : e.className + " " + t : vjs.log("Error in addClass, class or element doesn't exist")
            } catch (e) {
                vjs.log("Exception in addClass", e)
            }
        }, vjs.removeClass = function(e, t) {
            var n, i;
            if (vjs.hasClass(e, t)) {
                for (i = (n = e.className.split(" ")).length - 1; 0 <= i; i--) n[i] === t && n.splice(i, 1);
                e.className = n.join(" ")
            }
        }, vjs.TEST_VID = vjs.createEl("video"), ! function() {
            var e = document.createElement("track");
            e.kind = "captions", e.srclang = "en", e.label = "English", vjs.TEST_VID.appendChild(e)
        }(), vjs.USER_AGENT = navigator.userAgent, vjs.IS_IPHONE = /iPhone/i.test(vjs.USER_AGENT), vjs.IS_IPAD = /iPad/i.test(vjs.USER_AGENT), vjs.IS_IPOD = /iPod/i.test(vjs.USER_AGENT), vjs.IS_IOS = vjs.IS_IPHONE || vjs.IS_IPAD || vjs.IS_IPOD, vjs.IOS_VERSION = function() {
            var e = vjs.USER_AGENT.match(/OS (\d+)_/i);
            if (e && e[1]) return e[1]
        }(), vjs.IS_ANDROID = /Android/i.test(vjs.USER_AGENT), vjs.ANDROID_VERSION = function() {
            var e, t, n = vjs.USER_AGENT.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
            return n ? (e = n[1] && parseFloat(n[1]), t = n[2] && parseFloat(n[2]), e && t ? parseFloat(n[1] + "." + n[2]) : e || null) : null
        }(), vjs.IS_OLD_ANDROID = vjs.IS_ANDROID && /webkit/i.test(vjs.USER_AGENT) && vjs.ANDROID_VERSION < 2.3, vjs.IS_FIREFOX = /Firefox/i.test(vjs.USER_AGENT), vjs.IS_CHROME = /Chrome/i.test(vjs.USER_AGENT), vjs.IS_IE8 = /MSIE\s8\.0/.test(vjs.USER_AGENT), vjs.TOUCH_ENABLED = !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch), vjs.BACKGROUND_SIZE_SUPPORTED = "backgroundSize" in vjs.TEST_VID.style, vjs.setElementAttributes = function(n, e) {
            vjs.obj.each(e, function(e, t) {
                null == t || !1 === t ? n.removeAttribute(e) : n.setAttribute(e, !0 === t ? "" : t)
            })
        }, vjs.getElementAttributes = function(e) {
            var t, n, i = {},
                o = ",autoplay,controls,loop,muted,default,";
            if (e && e.attributes && 0 < e.attributes.length)
                for (var r, a = (r = e.attributes).length - 1; 0 <= a; a--) t = r[a].name, n = r[a].value, "boolean" != typeof e[t] && -1 === o.indexOf("," + t + ",") || (n = null !== n), i[t] = n;
            return i
        }, vjs.getComputedDimension = function(e, t) {
            var n = "";
            return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "").getPropertyValue(t) : e.currentStyle && (n = e["client" + t.substr(0, 1).toUpperCase() + t.substr(1)] + "px"), n
        }, vjs.insertFirst = function(e, t) {
            t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e)
        }, vjs.browser = {}, vjs.el = function(e) {
            return 0 === e.indexOf("#") && (e = e.slice(1)), document.getElementById(e)
        }, vjs.formatTime = function(e, t) {
            t = t || e;
            var n = Math.floor(e % 60),
                i = Math.floor(e / 60 % 60),
                o = Math.floor(e / 3600),
                r = Math.floor(t / 60 % 60),
                t = Math.floor(t / 3600);
            return (o = 0 < (o = !isNaN(e) && e !== 1 / 0 ? o : i = n = "-") || 0 < t ? o + ":" : "") + (i = ((o || 10 <= r) && i < 10 ? "0" + i : i) + ":") + (n = n < 10 ? "0" + n : n)
        }, vjs.blockTextSelection = function() {
            document.body.focus(), document.onselectstart = function() {
                return !1
            }
        }, vjs.unblockTextSelection = function() {
            document.onselectstart = function() {
                return !0
            }
        }, vjs.trim = function(e) {
            return (e + "").replace(/^\s+|\s+$/g, "")
        }, vjs.round = function(e, t) {
            return t = t || 0, Math.round(e * Math.pow(10, t)) / Math.pow(10, t)
        }, vjs.createTimeRange = function(e, t) {
            return void 0 === e && void 0 === t ? {
                length: 0,
                start: function() {
                    throw new Error("This TimeRanges object is empty")
                },
                end: function() {
                    throw new Error("This TimeRanges object is empty")
                }
            } : {
                length: 1,
                start: function() {
                    return e
                },
                end: function() {
                    return t
                }
            }
        }, vjs.setVjsStorage = function(e, t) {
            try {
                cacheManager.setGenericData(e, t)
            } catch (e) {
                vjs.log("cacheManager Error (VideoJS)", e)
            }
        }, vjs.getAbsoluteURL = function(e) {
            return e = e.match(/^https?:\/\//) ? e : vjs.createEl("div", {
                innerHTML: '<a href="' + e + '">x</a>'
            }).firstChild.href
        }, vjs.parseUrl = function(e) {
            var t, n = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"],
                i = vjs.createEl("a", {
                    href: e
                }),
                o = "" === i.host && "file:" !== i.protocol;
            o && ((t = vjs.createEl("div")).innerHTML = '<a href="' + e + '"></a>', i = t.firstChild, t.setAttribute("style", "display:none; position:absolute;"), document.body.appendChild(t));
            for (var r = {}, a = 0; a < n.length; a++) r[n[a]] = i[n[a]];
            return "http:" === r.protocol && (r.host = r.host.replace(/:80$/, "")), "https:" === r.protocol && (r.host = r.host.replace(/:443$/, "")), o && document.body.removeChild(t), r
        }, vjs.log = function() {
            _logType(null, arguments)
        }, vjs.log.history = [], vjs.log.error = function() {
            _logType("error", arguments)
        }, vjs.log.warn = function() {
            _logType("warn", arguments)
        }, vjs.findPosition = function(e) {
            var t, n, i, o;
            return (t = e.getBoundingClientRect && e.parentNode ? e.getBoundingClientRect() : t) ? (e = document.documentElement, o = document.body, i = e.clientLeft || o.clientLeft || 0, n = window.pageXOffset || o.scrollLeft, n = t.left + n - i, i = e.clientTop || o.clientTop || 0, e = window.pageYOffset || o.scrollTop, o = t.top + e - i, {
                left: vjs.round(n),
                top: vjs.round(o)
            }) : {
                left: 0,
                top: 0
            }
        }, vjs.arr = {}, vjs.arr.forEach = function(e, t, n) {
            if (vjs.obj.isArray(e) && t instanceof Function)
                for (var i = 0, o = e.length; i < o; ++i) t.call(n || vjs, e[i], i, e);
            return e
        }, vjs.util = {}, vjs.util.mergeOptions = function(e, t) {
            var n, i, o;
            for (n in e = vjs.obj.copy(e), t) t.hasOwnProperty(n) && (i = e[n], o = t[n], vjs.obj.isPlain(i) && vjs.obj.isPlain(o) ? e[n] = vjs.util.mergeOptions(i, o) : e[n] = t[n]);
            return e
        }, vjs.EventEmitter = function() {}, vjs.EventEmitter.prototype.allowedEvents_ = {}, vjs.EventEmitter.prototype.on = function(e, t) {
            var n = this.addEventListener;
            this.addEventListener = Function.prototype, vjs.on(this, e, t), this.addEventListener = n
        }, vjs.EventEmitter.prototype.addEventListener = vjs.EventEmitter.prototype.on, vjs.EventEmitter.prototype.off = function(e, t) {
            vjs.off(this, e, t)
        }, vjs.EventEmitter.prototype.removeEventListener = vjs.EventEmitter.prototype.off, vjs.EventEmitter.prototype.one = function(e, t) {
            vjs.one(this, e, t)
        }, vjs.EventEmitter.prototype.trigger = function(e) {
            var t = e.type || e;
            e = vjs.fixEvent(e = "string" == typeof e ? {
                type: t
            } : e), this.allowedEvents_[t] && this["on" + t] && this["on" + t](e), vjs.trigger(this, e)
        }, vjs.EventEmitter.prototype.dispatchEvent = vjs.EventEmitter.prototype.trigger, vjs.Component = vjs.CoreObject.extend({
            init: function(e, t, n) {
                this.player_ = e, this.options_ = vjs.obj.copy(this.options_), t = this.options(t), this.id_ = t.id || t.el && t.el.id, this.id_ || (this.id_ = (e.id && e.id() || "no_player") + "_component_" + vjs.guid++), this.name_ = t.name || null, this.el_ = t.el || this.createEl(), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, this.initChildren(), this.ready(n), !1 !== t.reportTouchActivity && this.enableTouchActivity()
            }
        }), vjs.Component.prototype.dispose = function() {
            if (this.trigger({
                    type: "dispose",
                    bubbles: !1
                }), this.children_)
                for (var e = this.children_.length - 1; 0 <= e; e--) this.children_[e].dispose && this.children_[e].dispose();
            this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.off(), this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), vjs.removeData(this.el_), this.el_ = null
        }, vjs.Component.prototype.player_ = !0, vjs.Component.prototype.player = function() {
            return this.player_
        }, vjs.Component.prototype.options_, vjs.Component.prototype.options = function(e) {
            return void 0 === e ? this.options_ : this.options_ = vjs.util.mergeOptions(this.options_, e)
        }, vjs.Component.prototype.el_, vjs.Component.prototype.createEl = function(e, t) {
            return vjs.createEl(e, t)
        }, vjs.Component.prototype.localize = function(e) {
            var t = this.player_.language(),
                n = this.player_.languages();
            return n && n[t] && n[t][e] ? n[t][e] : e
        }, vjs.Component.prototype.el = function() {
            return this.el_
        }, vjs.Component.prototype.contentEl_, vjs.Component.prototype.contentEl = function() {
            return this.contentEl_ || this.el_
        }, vjs.Component.prototype.id_, vjs.Component.prototype.id = function() {
            return this.id_
        }, vjs.Component.prototype.name_, vjs.Component.prototype.name = function() {
            return this.name_
        }, vjs.Component.prototype.children_, vjs.Component.prototype.children = function() {
            return this.children_
        }, vjs.Component.prototype.childIndex_, vjs.Component.prototype.getChildById = function(e) {
            return this.childIndex_[e]
        }, vjs.Component.prototype.childNameIndex_, vjs.Component.prototype.getChild = function(e) {
            return this.childNameIndex_[e]
        }, vjs.Component.prototype.addChild = function(e, t) {
            var n, i = "string" == typeof e ? (n = e, i = (t = t || {}).componentClass || vjs.capitalize(n), t.name = n, new window.videojs_apn[i](this.player_ || this, t)) : e;
            return this.children_.push(i), "function" == typeof i.id && (this.childIndex_[i.id()] = i), (n = n || i.name && i.name()) && (this.childNameIndex_[n] = i), "function" == typeof i.el && i.el() && this.contentEl().appendChild(i.el()), i
        }, vjs.Component.prototype.removeChild = function(e) {
            if ((e = "string" == typeof e ? this.getChild(e) : e) && this.children_) {
                for (var t, n = !1, i = this.children_.length - 1; 0 <= i; i--)
                    if (this.children_[i] === e) {
                        n = !0, this.children_.splice(i, 1);
                        break
                    }
                n && (this.childIndex_[e.id()] = null, this.childNameIndex_[e.name()] = null, (t = e.el()) && t.parentNode === this.contentEl() && this.contentEl().removeChild(e.el()))
            }
        }, vjs.Component.prototype.initChildren = function() {
            var e, t, n, i = this,
                o = i.options(),
                r = o.children;
            if (r)
                if (n = function(e, t) {
                        !1 !== (t = void 0 !== o[e] ? o[e] : t) && (i[e] = i.addChild(e, t))
                    }, vjs.obj.isArray(r))
                    for (var a = 0; a < r.length; a++) t = "string" == typeof(t = r[a]) ? (e = t, {}) : (e = t.name, t), n(e, t);
                else vjs.obj.each(r, n)
        }, vjs.Component.prototype.buildCSSClass = function() {
            return ""
        }, vjs.Component.prototype.on = function(e, t, n) {
            var i, o, r, a, s;
            return "string" == typeof e || vjs.obj.isArray(e) ? vjs.on(this.el_, e, vjs.bind(this, t)) : (i = e, o = t, r = vjs.bind(this, n), s = this, (a = function() {
                s.off(i, o, r)
            }).guid = r.guid, this.on("dispose", a), (t = function() {
                s.off("dispose", a)
            }).guid = r.guid, e.nodeName ? (vjs.on(i, o, r), vjs.on(i, "dispose", t)) : "function" == typeof e.on && (i.on(o, r), i.on("dispose", t))), this
        }, vjs.Component.prototype.off = function(e, t, n) {
            var i;
            return !e || "string" == typeof e || vjs.obj.isArray(e) ? vjs.off(this.el_, e, t) : (i = e, t = t, n = vjs.bind(this, n), this.off("dispose", n), e.nodeName ? (vjs.off(i, t, n), vjs.off(i, "dispose", n)) : (i.off(t, n), i.off("dispose", n))), this
        }, vjs.Component.prototype.one = function(e, t, n) {
            var i, o, r, a, s;
            return "string" == typeof e || vjs.obj.isArray(e) ? vjs.one(this.el_, e, vjs.bind(this, t)) : (i = e, o = t, r = vjs.bind(this, n), a = this, (s = function() {
                a.off(i, o, s), r.apply(this, arguments)
            }).guid = r.guid, this.on(i, o, s)), this
        }, vjs.Component.prototype.trigger = function(e) {
            return vjs.trigger(this.el_, e), this
        }, vjs.Component.prototype.isReady_, vjs.Component.prototype.isReadyOnInitFinish_ = !0, vjs.Component.prototype.readyQueue_, vjs.Component.prototype.ready = function(e) {
            return e && (this.isReady_ ? e.call(this) : (void 0 === this.readyQueue_ && (this.readyQueue_ = []), this.readyQueue_.push(e))), this
        }, vjs.Component.prototype.triggerReady = function() {
            this.isReady_ = !0;
            var e = this.readyQueue_;
            if (e && 0 < e.length) {
                for (var t = 0, n = e.length; t < n; t++) e[t].call(this);
                this.readyQueue_ = [], this.trigger("ready")
            }
        }, vjs.Component.prototype.hasClass = function(e) {
            return vjs.hasClass(this.el_, e)
        }, vjs.Component.prototype.addClass = function(e) {
            return vjs.addClass(this.el_, e), this
        }, vjs.Component.prototype.removeClass = function(e) {
            return vjs.removeClass(this.el_, e), this
        }, vjs.Component.prototype.show = function() {
            return this.removeClass("vjs-hidden"), this
        }, vjs.Component.prototype.hide = function() {
            return this.addClass("vjs-hidden"), this
        }, vjs.Component.prototype.lockShowing = function() {
            return this.addClass("vjs-lock-showing"), this
        }, vjs.Component.prototype.unlockShowing = function() {
            return this.removeClass("vjs-lock-showing"), this
        }, vjs.Component.prototype.disable = function() {
            this.hide(), this.show = function() {}
        }, vjs.Component.prototype.width = function(e, t) {
            return this.dimension("width", e, t)
        }, vjs.Component.prototype.height = function(e, t) {
            return this.dimension("height", e, t)
        }, vjs.Component.prototype.dimensions = function(e, t) {
            return this.width(e, !0).height(t)
        }, vjs.Component.prototype.dimension = function(e, t, n) {
            return void 0 !== t ? (-1 !== ("" + (t = null !== t && !vjs.isNaN(t) ? t : 0)).indexOf("%") || -1 !== ("" + t).indexOf("px") ? this.el_.style[e] = t : this.el_.style[e] = "auto" === t ? "" : t + "px", n || this.trigger("resize"), this) : this.el_ ? -1 !== (n = (t = this.el_.style[e]).indexOf("px")) ? parseInt(t.slice(0, n), 10) : parseInt(this.el_["offset" + vjs.capitalize(e)], 10) : 0
        }, vjs.Component.prototype.onResize, vjs.Component.prototype.emitTapEvents = function() {
            var t, e, n, i, o = 0,
                r = null;
            this.on("touchstart", function(e) {
                1 === e.touches.length && (r = vjs.obj.copy(e.touches[0]), o = (new Date).getTime(), t = !0)
            }), this.on("touchmove", function(e) {
                1 < e.touches.length ? t = !1 : r && (n = e.touches[0].pageX - r.pageX, i = e.touches[0].pageY - r.pageY, 10 < Math.sqrt(n * n + i * i) && (t = !1))
            }), this.on("touchleave", e = function() {
                t = !1
            }), this.on("touchcancel", e), this.on("touchend", function(e) {
                !(r = null) === t && (new Date).getTime() - o < 200 && (e.preventDefault(), this.trigger("tap"))
            })
        }, vjs.Component.prototype.enableTouchActivity = function() {
            var t, n, e;
            this.player().reportUserActivity && (t = vjs.bind(this.player(), this.player().reportUserActivity), this.on("touchstart", function() {
                t(), this.clearInterval(n), n = this.setInterval(t, 250)
            }), e = function(e) {
                t(), this.clearInterval(n)
            }, this.on("touchmove", t), this.on("touchend", e), this.on("touchcancel", e))
        }, vjs.Component.prototype.setTimeout = function(e, t) {
            e = vjs.bind(this, e);

            function n() {
                this.clearTimeout(i)
            }
            var i = setTimeout(e, t);
            return n.guid = "vjs-timeout-" + i, this.on("dispose", n), i
        }, vjs.Component.prototype.clearTimeout = function(e) {
            clearTimeout(e);

            function t() {}
            return t.guid = "vjs-timeout-" + e, this.off("dispose", t), e
        }, vjs.Component.prototype.setInterval = function(e, t) {
            e = vjs.bind(this, e);

            function n() {
                this.clearInterval(i)
            }
            var i = setInterval(e, t);
            return n.guid = "vjs-interval-" + i, this.on("dispose", n), i
        }, vjs.Component.prototype.clearInterval = function(e) {
            clearInterval(e);

            function t() {}
            return t.guid = "vjs-interval-" + e, this.off("dispose", t), e
        }, vjs.Button = vjs.Component.extend({
            init: function(e, t) {
                vjs.Component.call(this, e, t), this.emitTapEvents(), this.on("tap", this.onClick), this.on("click", this.onClick), this.on("focus", this.onFocus), this.on("blur", this.onBlur)
            }
        }), vjs.Button.prototype.createEl = function(e, t) {
            return t = vjs.obj.merge({
                className: this.buildCSSClass(),
                role: "button",
                "aria-live": "polite",
                tabIndex: 0
            }, t), e = vjs.Component.prototype.createEl.call(this, e, t), t.innerHTML || (this.contentEl_ = vjs.createEl("div", {
                className: "vjs-control-content"
            }), this.controlText_ = vjs.createEl("span", {
                className: "vjs-control-text",
                innerHTML: this.localize(this.buttonText) || "Need Text"
            }), this.contentEl_.appendChild(this.controlText_), e.appendChild(this.contentEl_)), e
        }, vjs.Button.prototype.buildCSSClass = function() {
            return "vjs-control " + vjs.Component.prototype.buildCSSClass.call(this)
        }, vjs.Button.prototype.onClick = function() {}, vjs.Button.prototype.onFocus = function() {
            vjs.on(document, "keydown", vjs.bind(this, this.onKeyPress))
        }, vjs.Button.prototype.onKeyPress = function(e) {
            32 != e.which && 13 != e.which || (e.preventDefault(), this.onClick())
        }, vjs.Button.prototype.onBlur = function() {
            vjs.off(document, "keydown", vjs.bind(this, this.onKeyPress))
        }, vjs.Slider = vjs.Component.extend({
            init: function(e, t) {
                vjs.Component.call(this, e, t), this.bar = this.getChild(this.options_.barName), this.handle = this.getChild(this.options_.handleName), this.on("mousedown", this.onMouseDown), this.on("touchstart", this.onMouseDown), this.on("focus", this.onFocus), this.on("blur", this.onBlur), this.on("click", this.onClick), this.on(e, "controlsvisible", this.update), this.on(e, this.playerEvent, this.update)
            }
        }), vjs.Slider.prototype.createEl = function(e, t) {
            return (t = t || {}).className = t.className + " vjs-slider", t = vjs.obj.merge({
                role: "slider",
                "aria-valuenow": 0,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                tabIndex: 0
            }, t), vjs.Component.prototype.createEl.call(this, e, t)
        }, vjs.Slider.prototype.onMouseDown = function(e) {
            e.preventDefault(), vjs.blockTextSelection(), this.addClass("vjs-sliding"), this.on(document, "mousemove", this.onMouseMove), this.on(document, "mouseup", this.onMouseUp), this.on(document, "touchmove", this.onMouseMove), this.on(document, "touchend", this.onMouseUp), this.onMouseMove(e)
        }, vjs.Slider.prototype.onMouseMove = function() {}, vjs.Slider.prototype.onMouseUp = function() {
            vjs.unblockTextSelection(), this.removeClass("vjs-sliding"), this.off(document, "mousemove", this.onMouseMove), this.off(document, "mouseup", this.onMouseUp), this.off(document, "touchmove", this.onMouseMove), this.off(document, "touchend", this.onMouseUp), this.update()
        }, vjs.Slider.prototype.update = function() {
            var e, t, n, i, o;
            this.el_ && (n = this.getPercent(), e = this.handle, t = this.bar, o = n = "number" != typeof n || n != n || n < 0 || n === 1 / 0 ? 0 : n, e && (i = this.el_.offsetWidth, o = (i = n * (1 - (n = (n = e.el().offsetWidth) ? n / i : 0))) + n / 2, e.el().style.left = vjs.round(100 * i, 2) + "%"), t && (t.el().style.width = vjs.round(100 * o, 2) + "%"))
        }, vjs.Slider.prototype.calculateDistance = function(e) {
            var t, n, i, o = this.el_,
                r = vjs.findPosition(o),
                a = o = o.offsetWidth,
                s = this.handle;
            return this.options().vertical ? (i = r.top, t = (e.changedTouches ? e.changedTouches[0] : e).pageY, s && (i += (n = s.el().offsetHeight) / 2, o -= n), Math.max(0, Math.min(1, (i - t + o) / o))) : (n = r.left, i = (e.changedTouches ? e.changedTouches[0] : e).pageX, s && (n += (t = s.el().offsetWidth) / 2, a -= t), Math.max(0, Math.min(1, (i - n) / a)))
        }, vjs.Slider.prototype.onFocus = function() {
            this.on(document, "keydown", this.onKeyPress)
        }, vjs.Slider.prototype.onKeyPress = function(e) {
            37 == e.which || 40 == e.which ? (e.preventDefault(), this.stepBack()) : 38 != e.which && 39 != e.which || (e.preventDefault(), this.stepForward())
        }, vjs.Slider.prototype.onBlur = function() {
            this.off(document, "keydown", this.onKeyPress)
        }, vjs.Slider.prototype.onClick = function(e) {
            e.stopImmediatePropagation(), e.preventDefault()
        }, vjs.SliderHandle = vjs.Component.extend(), vjs.SliderHandle.prototype.defaultValue = 0, vjs.SliderHandle.prototype.createEl = function(e, t) {
            return (t = t || {}).className = t.className + " vjs-slider-handle", t = vjs.obj.merge({
                innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"
            }, t), vjs.Component.prototype.createEl.call(this, "div", t)
        }, vjs.Menu = vjs.Component.extend(), vjs.Menu.prototype.addItem = function(e) {
            this.addChild(e), e.on("click", vjs.bind(this, function() {
                this.unlockShowing()
            }))
        }, vjs.Menu.prototype.createEl = function() {
            var e = this.options().contentElType || "ul",
                e = (this.contentEl_ = vjs.createEl(e, {
                    className: "vjs-menu-content"
                }), vjs.Component.prototype.createEl.call(this, "div", {
                    append: this.contentEl_,
                    className: "vjs-menu"
                }));
            return e.appendChild(this.contentEl_), vjs.on(e, "click", function(e) {
                e.preventDefault(), e.stopImmediatePropagation()
            }), e
        }, vjs.MenuItem = vjs.Button.extend({
            init: function(e, t) {
                vjs.Button.call(this, e, t), this.selected(t.selected)
            }
        }), vjs.MenuItem.prototype.createEl = function(e, t) {
            return vjs.Button.prototype.createEl.call(this, "li", vjs.obj.merge({
                className: "vjs-menu-item",
                innerHTML: this.localize(this.options_.label)
            }, t))
        }, vjs.MenuItem.prototype.onClick = function() {
            this.selected(!0)
        }, vjs.MenuItem.prototype.selected = function(e) {
            e ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-selected", !0)) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-selected", !1))
        }, vjs.MenuButton = vjs.Button.extend({
            init: function(e, t) {
                vjs.Button.call(this, e, t), this.update(), this.on("keydown", this.onKeyPress), this.el_.setAttribute("aria-haspopup", !0), this.el_.setAttribute("role", "button")
            }
        }), vjs.MenuButton.prototype.update = function() {
            var e = this.createMenu();
            this.menu && this.removeChild(this.menu), this.menu = e, this.addChild(e), this.items && 0 === this.items.length ? this.hide() : this.items && 1 < this.items.length && this.show()
        }, vjs.MenuButton.prototype.buttonPressed_ = !1, vjs.MenuButton.prototype.createMenu = function() {
            var e = new vjs.Menu(this.player_);
            if (this.options().title && e.contentEl().appendChild(vjs.createEl("li", {
                    className: "vjs-menu-title",
                    innerHTML: vjs.capitalize(this.options().title),
                    tabindex: -1
                })), this.items = this.createItems(), this.items)
                for (var t = 0; t < this.items.length; t++) e.addItem(this.items[t]);
            return e
        }, vjs.MenuButton.prototype.createItems = function() {}, vjs.MenuButton.prototype.buildCSSClass = function() {
            return this.className + " vjs-menu-button " + vjs.Button.prototype.buildCSSClass.call(this)
        }, vjs.MenuButton.prototype.onFocus = function() {}, vjs.MenuButton.prototype.onBlur = function() {}, vjs.MenuButton.prototype.onClick = function() {
            this.one("mouseout", vjs.bind(this, function() {
                this.menu.unlockShowing(), this.el_.blur()
            })), this.buttonPressed_ ? this.unpressButton() : this.pressButton()
        }, vjs.MenuButton.prototype.onKeyPress = function(e) {
            32 == e.which || 13 == e.which ? (this.buttonPressed_ ? this.unpressButton() : this.pressButton(), e.preventDefault()) : 27 == e.which && (this.buttonPressed_ && this.unpressButton(), e.preventDefault())
        }, vjs.MenuButton.prototype.pressButton = function() {
            this.buttonPressed_ = !0, this.menu.lockShowing(), this.el_.setAttribute("aria-pressed", !0), this.items && 0 < this.items.length && this.items[0].el().focus()
        }, vjs.MenuButton.prototype.unpressButton = function() {
            this.buttonPressed_ = !1, this.menu.unlockShowing(), this.el_.setAttribute("aria-pressed", !1)
        }, vjs.MediaError = function(e) {
            "number" == typeof e ? this.code = e : "string" == typeof e ? this.message = e : "object" == typeof e && vjs.obj.merge(this, e), this.message || (this.message = "")
        }, vjs.MediaError.prototype.code = 0, vjs.MediaError.prototype.message = "", vjs.MediaError.prototype.status = null, vjs.MediaError.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], vjs.MediaError.defaultMessages = {
            1: "You aborted the video playback",
            2: "A network error caused the video download to fail part-way.",
            3: "The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",
            4: "The video could not be loaded, either because the server or network failed or because the format is not supported.",
            5: "The video is encrypted and we do not have the keys to decrypt it."
        };
        for (var errNum = 0; errNum < vjs.MediaError.errorTypes.length; errNum++) vjs.MediaError[vjs.MediaError.errorTypes[errNum]] = errNum, vjs.MediaError.prototype[vjs.MediaError.errorTypes[errNum]] = errNum;
        ! function() {
            var e, t, n, i;
            for (vjs.browser.fullscreenAPI, t = (e = [
                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                ])[0], i = 0; i < e.length; i++)
                if (e[i][1] in document) {
                    n = e[i];
                    break
                }
            if (n)
                for (vjs.browser.fullscreenAPI = {}, i = 0; i < n.length; i++) vjs.browser.fullscreenAPI[t[i]] = n[i];
            document.addEventListener("MSFullscreenChange", function(e) {
                if (vjs.players)
                    for (var t in vjs.players) 0 <= t.indexOf("an_video_ad_player") && (vjs.players[t].trigger("fullscreenchange"), vjs.players[t].fsButtonClicked || (vjs.players[t].isFullscreen(!1), vjs.players[t].removeClass("vjs-fullscreen")), vjs.players[t].fsButtonClicked = !1)
            })
        }(), vjs.Player = vjs.Component.extend({
            init: function(e, t, n) {
                (this.tag = e).id = e.id || "vjs_video_" + vjs.guid++, this.tagAttributes = e && vjs.getElementAttributes(e), t = vjs.obj.merge(this.getTagSettings(e), t), this.language_ = t.language || vjs.options.language, this.languages_ = t.languages || vjs.options.languages, this.cache_ = {}, this.poster_ = t.poster || "", this.controls_ = !!t.controls, e.controls = !1, t.reportTouchActivity = !1, this.isAudio("audio" === this.tag.nodeName.toLowerCase()), vjs.Component.call(this, this, t, n), this.controls() ? this.addClass("vjs-controls-enabled") : this.addClass("vjs-controls-disabled"), this.isAudio() && this.addClass("vjs-audio"), this.addClass("vjs-big-play-centered"), vjs.players[this.id_] = this, t.plugins && vjs.obj.each(t.plugins, function(e, t) {
                    this[e](t)
                }, this), this.listenForUserActivity()
            }
        }), vjs.Player.prototype.language_, vjs.Player.prototype.language = function(e) {
            return void 0 === e ? this.language_ : (this.language_ = e, this)
        }, vjs.Player.prototype.getMuteSettingsForIOS10 = function() {
            return vjs.IS_IOS && this.options_.enableNativeInline && 9 < parseInt(vjs.IOS_VERSION)
        }, vjs.Player.prototype.languages_, vjs.Player.prototype.languages = function() {
            return this.languages_
        }, vjs.Player.prototype.options_ = vjs.options, vjs.Player.prototype.dispose = function() {
            this.trigger("dispose"), this.off("dispose"), vjs.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech && this.tech.dispose(), vjs.Component.prototype.dispose.call(this)
        }, vjs.Player.prototype.getTagSettings = function(e) {
            var t = {
                    sources: [],
                    tracks: []
                },
                n = vjs.getElementAttributes(e),
                i = n["data-setup"];
            if (null !== i && vjs.obj.merge(n, vjs.JSON.parse(i || "{}")), vjs.obj.merge(t, n), e.hasChildNodes())
                for (var o, r, a = e.childNodes, s = 0, l = a.length; s < l; s++) "source" === (r = (o = a[s]).nodeName.toLowerCase()) ? t.sources.push(vjs.getElementAttributes(o)) : "track" === r && t.tracks.push(vjs.getElementAttributes(o));
            return t
        }, vjs.Player.prototype.createEl = function() {
            var t, n = this.el_ = vjs.Component.prototype.createEl.call(this, "div"),
                e = this.tag;
            return e.removeAttribute("width"), e.removeAttribute("height"), t = vjs.getElementAttributes(e), vjs.obj.each(t, function(e) {
                "class" == e ? n.className = t[e] : n.setAttribute(e, t[e])
            }), e.id += "_html5_api", e.className = "vjs-tech", (e.player = n.player = this).addClass("vjs-paused"), this.width(this.options_.width, !0), this.height(this.options_.height, !0), e.initNetworkState_ = e.networkState, e.parentNode && e.parentNode.insertBefore(n, e), vjs.insertFirst(e, n), this.el_ = n, this.on("loadstart", this.onLoadStart), this.on("waiting", this.onWaiting), this.on(["canplay", "canplaythrough", "playing", "ended"], this.onWaitEnd), this.on("seeking", this.onSeeking), this.on("seeked", this.onSeeked), this.on("ended", this.onEnded), this.on("play", this.onPlay), this.on("firstplay", this.onFirstPlay), this.on("pause", this.onPause), this.on("progress", this.onProgress), this.on("durationchange", this.onDurationChange), this.on("fullscreenchange", this.onFullscreenChange), n
        }, vjs.Player.prototype.loadTech = function(e, t) {
            this.tech && this.unloadTech(), "Html5" !== e && this.tag && (vjs.Html5.disposeMediaElement(this.tag), this.tag = null), this.techName = e, this.isReady_ = !1;
            var n = vjs.obj.merge({
                source: t,
                parentEl: this.el_
            }, this.options_[e.toLowerCase()]);
            t && (this.currentType_ = t.type, t.src == this.cache_.src && 0 < this.cache_.currentTime && (n.startTime = this.cache_.currentTime), this.cache_.src = t.src), this.tech = new window.videojs_apn[e](this, n), this.tech.ready(function() {
                this.player_.triggerReady()
            })
        }, vjs.Player.prototype.unloadTech = function() {
            this.isReady_ = !1, this.tech.dispose(), this.tech = !1
        }, vjs.Player.prototype.onLoadStart = function() {
            this.removeClass("vjs-ended"), this.error(null), this.paused() ? this.hasStarted(!1) : this.trigger("firstplay")
        }, vjs.Player.prototype.hasStarted_ = !1, vjs.Player.prototype.hasStarted = function(e) {
            return void 0 !== e ? (this.hasStarted_ !== e && ((this.hasStarted_ = e) ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started")), this) : this.hasStarted_
        }, vjs.Player.prototype.onLoadedMetaData, vjs.Player.prototype.onLoadedData, vjs.Player.prototype.onLoadedAllData, vjs.Player.prototype.onPlay = function() {
            this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0)
        }, vjs.Player.prototype.onWaiting = function() {
            this.addClass("vjs-waiting")
        }, vjs.Player.prototype.onWaitEnd = function() {
            this.removeClass("vjs-waiting")
        }, vjs.Player.prototype.onSeeking = function() {
            this.addClass("vjs-seeking")
        }, vjs.Player.prototype.onSeeked = function() {
            this.removeClass("vjs-seeking")
        }, vjs.Player.prototype.onFirstPlay = function() {
            this.options_.starttime && this.currentTime(this.options_.starttime), this.addClass("vjs-has-started")
        }, vjs.Player.prototype.onPause = function() {
            this.removeClass("vjs-playing"), this.addClass("vjs-paused")
        }, vjs.Player.prototype.onTimeUpdate, vjs.Player.prototype.onProgress = function() {
            1 == this.bufferedPercent() && this.trigger("loadedalldata")
        }, vjs.Player.prototype.onEnded = function() {
            this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause()
        }, vjs.Player.prototype.onDurationChange = function() {
            var e = this.techGet("duration");
            e && (this.duration(e = e < 0 ? 1 / 0 : e), e === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"))
        }, vjs.Player.prototype.onVolumeChange, vjs.Player.prototype.onFullscreenChange = function() {
            this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
        }, vjs.Player.prototype.onError, vjs.Player.prototype.cache_, vjs.Player.prototype.getCache = function() {
            return this.cache_
        }, vjs.Player.prototype.techCall = function(e, t) {
            if (this.tech && !this.tech.isReady_) this.tech.ready(function() {
                this[e](t)
            });
            else try {
                this.tech[e](t)
            } catch (e) {
                throw vjs.log(e), e
            }
        }, vjs.Player.prototype.techGet = function(t) {
            if (this.tech && this.tech.isReady_) try {
                return this.tech[t]()
            } catch (e) {
                throw void 0 === this.tech[t] ? vjs.log("Video.js: " + t + " method not defined for " + this.techName + " playback technology.", e) : "TypeError" == e.name ? (vjs.log("Video.js: " + t + " unavailable on " + this.techName + " playback technology element.", e), this.tech.isReady_ = !1) : vjs.log(e), e
            }
        }, vjs.Player.prototype.play = function() {
            return this.techCall("play"), this
        }, vjs.Player.prototype.pause = function() {
            return this.techCall("pause"), this.trigger("apn-vpaid-pause"), this
        }, vjs.Player.prototype.paused = function() {
            return !1 !== this.techGet("paused")
        }, vjs.Player.prototype.currentTime = function(e) {
            return void 0 !== e ? (this.techCall("setCurrentTime", e), this) : this.cache_.currentTime = this.techGet("currentTime") || 0
        }, vjs.Player.prototype.duration = function(e) {
            return void 0 !== e ? (this.cache_.duration = parseFloat(e), this) : (void 0 === this.cache_.duration && this.onDurationChange(), this.cache_.duration || 0)
        }, vjs.Player.prototype.remainingTime = function() {
            return this.duration() - this.currentTime()
        }, vjs.Player.prototype.buffered = function() {
            var e = this.techGet("buffered");
            return e = e && e.length ? e : vjs.createTimeRange(0, 0)
        }, vjs.Player.prototype.bufferedPercent = function() {
            var e, t, n = this.duration(),
                i = this.buffered(),
                o = 0;
            if (!n) return 0;
            for (var r = 0; r < i.length; r++) e = i.start(r), o += (t = n < (t = i.end(r)) ? n : t) - e;
            return o / n
        }, vjs.Player.prototype.bufferedEnd = function() {
            var e = this.buffered(),
                t = this.duration(),
                e = e.end(e.length - 1);
            return e = t < e ? t : e
        }, vjs.Player.prototype.volume = function(e) {
            var t;
            return void 0 !== e ? (t = Math.max(0, Math.min(1, parseFloat(e))), this.cache_.volume = t, this.techCall("setVolume", t), vjs.setVjsStorage("volume", t), this) : (t = parseFloat(this.techGet("volume")), isNaN(t) ? 1 : t)
        }, vjs.Player.prototype.muted = function(e) {
            return void 0 !== e ? (vjs.IS_IOS && this.options_.enableInlineVideoForIos || this.techCall("setMuted", e), this) : this.techGet("muted") || !1
        }, vjs.Player.prototype.supportsFullScreen = function() {
            return this.techGet("supportsFullScreen") || !1
        }, vjs.Player.prototype.isFullscreen_ = !1, vjs.Player.prototype.isFullscreen = function(e) {
            return void 0 !== e ? (this.isFullscreen_ = !!e, this) : this.isFullscreen_
        }, vjs.Player.prototype.isFullScreen = function(e) {
            return vjs.log.warn('player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")'), this.isFullscreen(e)
        }, vjs.Player.prototype.requestFullscreen = function() {
            var t = vjs.browser.fullscreenAPI;
            return this.isFullscreen(!0), t ? (vjs.on(document, t.fullscreenchange, vjs.bind(this, function(e) {
                this.isFullscreen(document[t.fullscreenElement]), !1 === this.isFullscreen() && vjs.off(document, t.fullscreenchange, arguments.callee)
            })), this.el_[t.requestFullscreen]()) : this.tech.supportsFullScreen() ? this.techCall("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange")), this
        }, vjs.Player.prototype.requestFullScreen = function() {
            return vjs.log.warn('player.requestFullScreen() has been deprecated, use player.requestFullscreen() with a lowercase "s")'), this.requestFullscreen()
        }, vjs.Player.prototype.exitFullscreen = function() {
            var e = vjs.browser.fullscreenAPI;
            return this.isFullscreen(!1), e ? document[e.exitFullscreen]() : this.tech.supportsFullScreen() ? this.techCall("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange")), this
        }, vjs.Player.prototype.cancelFullScreen = function() {
            return vjs.log.warn("player.cancelFullScreen() has been deprecated, use player.exitFullscreen()"), this.exitFullscreen()
        }, vjs.Player.prototype.enterFullWindow = function() {
            this.isFullWindow = !0, this.docOrigOverflow = document.documentElement.style.overflow, vjs.on(document, "keydown", vjs.bind(this, this.fullWindowOnEscKey)), document.documentElement.style.overflow = "hidden", vjs.addClass(document.body, "vjs-full-window"), this.trigger("enterFullWindow")
        }, vjs.Player.prototype.fullWindowOnEscKey = function(e) {
            27 === e.keyCode && (!0 === this.isFullscreen() ? this.exitFullscreen() : this.exitFullWindow())
        }, vjs.Player.prototype.exitFullWindow = function() {
            this.isFullWindow = !1, vjs.off(document, "keydown", this.fullWindowOnEscKey), document.documentElement.style.overflow = this.docOrigOverflow, vjs.removeClass(document.body, "vjs-full-window"), this.trigger("exitFullWindow")
        }, vjs.Player.prototype.selectSource = function(e) {
            for (var t = 0, n = this.options_.techOrder; t < n.length; t++) {
                var i = vjs.capitalize(n[t]),
                    o = window.videojs_apn[i];
                if (o) {
                    if (o.isSupported())
                        for (var r = 0, a = e; r < a.length; r++) {
                            var s = a[r];
                            if (o.canPlaySource(s)) return {
                                source: s,
                                tech: i
                            }
                        }
                } else vjs.log.error('The "' + i + '" tech is undefined. Skipped browser support check for that tech.')
            }
            return !1
        }, vjs.Player.prototype.src = function(e) {
            return void 0 === e ? this.techGet("src") : (vjs.obj.isArray(e) ? this.sourceList_(e) : "string" == typeof e ? this.src({
                src: e
            }) : e instanceof Object && (e.type && !window.videojs_apn[this.techName].canPlaySource(e) ? this.sourceList_([e]) : (this.cache_.src = e.src, this.currentType_ = e.type || "", this.ready(function() {
                window.videojs_apn[this.techName].prototype.hasOwnProperty("setSource") ? this.techCall("setSource", e) : this.techCall("src", e.src), "auto" == this.options_.preload && this.load(), this.options_.autoplay && this.play()
            }))), this)
        }, vjs.Player.prototype.sourceList_ = function(e) {
            e = this.selectSource(e);
            e ? e.tech === this.techName ? this.src(e.source) : this.loadTech(e.tech, e.source) : (this.setTimeout(function() {
                this.error({
                    code: 4,
                    message: this.localize(this.options().notSupportedMessage)
                })
            }, 0), this.triggerReady())
        }, vjs.Player.prototype.load = function() {
            return this.techCall("load"), this
        }, vjs.Player.prototype.currentSrc = function() {
            return this.techGet("currentSrc") || this.cache_.src || ""
        }, vjs.Player.prototype.currentType = function() {
            return this.currentType_ || ""
        }, vjs.Player.prototype.preload = function(e) {
            return void 0 !== e ? (this.techCall("setPreload", e), this.options_.preload = e, this) : this.techGet("preload")
        }, vjs.Player.prototype.autoplay = function(e) {
            return void 0 !== e ? (this.techCall("setAutoplay", e), this.options_.autoplay = e, this) : this.techGet("autoplay", e)
        }, vjs.Player.prototype.loop = function(e) {
            return void 0 !== e ? (this.techCall("setLoop", e), this.options_.loop = e, this) : this.techGet("loop")
        }, vjs.Player.prototype.poster_, vjs.Player.prototype.poster = function(e) {
            return void 0 === e ? this.poster_ : (this.poster_ = e = e || "", this.techCall("setPoster", e), this.trigger("posterchange"), this)
        }, vjs.Player.prototype.controls_, vjs.Player.prototype.controls = function(e) {
            return void 0 !== e ? (this.controls_ !== (e = !!e) && ((this.controls_ = e) ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled")) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"))), this) : this.controls_
        }, vjs.Player.prototype.usingNativeControls_, vjs.Player.prototype.usingNativeControls = function(e) {
            return void 0 !== e ? (this.usingNativeControls_ !== (e = !!e) && ((this.usingNativeControls_ = e) ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols"))), this) : this.usingNativeControls_
        }, vjs.Player.prototype.error_ = null, vjs.Player.prototype.error = function(e) {
            return void 0 === e ? this.error_ : (null === e ? (this.error_ = e, this.removeClass("vjs-error")) : (e instanceof vjs.MediaError ? this.error_ = e : this.error_ = new vjs.MediaError(e), this.trigger("error"), this.addClass("vjs-error"), vjs.log.error("(CODE:" + this.error_.code + " " + vjs.MediaError.errorTypes[this.error_.code] + ")", this.error_.message, this.error_)), this)
        }, vjs.Player.prototype.ended = function() {
            return this.techGet("ended")
        }, vjs.Player.prototype.seeking = function() {
            return this.techGet("seeking")
        }, vjs.Player.prototype.seekable = function() {
            return this.techGet("seekable")
        }, vjs.Player.prototype.userActivity_ = !0, vjs.Player.prototype.reportUserActivity = function(e) {
            this.userActivity_ = !0
        }, vjs.Player.prototype.userActive_ = !0, vjs.Player.prototype.userActive = function(e) {
            return void 0 !== e ? ((e = !!e) !== this.userActive_ && ((this.userActive_ = e) ? (this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), this.trigger("useractive")) : (this.userActivity_ = !1, this.tech && this.tech.one("mousemove", function(e) {
                e.stopPropagation(), e.preventDefault()
            }), this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive"))), this) : this.userActive_
        }, vjs.Player.prototype.listenForUserActivity = function() {
            var t, n, i, o, r = vjs.bind(this, this.reportUserActivity),
                e = function(e) {
                    e.screenX == i && e.screenY == o || (i = e.screenX, o = e.screenY, r())
                },
                a = function(e) {
                    e.screenX == i && e.screenY == o && void 0 !== i && void 0 !== o || Math.floor(e.screenX / 100) !== Math.floor(i / 100) && (i = e.screenX, o = e.screenY, r())
                },
                s = function(e) {
                    e.target && e.target.getAttribute("class") && 0 <= e.target.getAttribute("class").indexOf("vjs-") || (console.log("active:onmouseout:initialize"), o = i = void 0)
                },
                l = function(e) {
                    r(), this.clearInterval(t)
                };
            this.on("mousedown", function() {
                r(), this.clearInterval(t), t = this.setInterval(r, 250)
            }), this.on("mousemove", e), this.on("mouseup", l), this.on("mouseover", a), this.on("mouseout", s), this.on("keydown", r), this.on("keyup", r), this.setInterval(function() {
                var e;
                this.userActivity_ && (this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(n), 0 < (e = this.options().inactivityTimeout) && (n = this.setTimeout(function() {
                    this.userActivity_ || this.userActive(!1)
                }, e)))
            }, 250)
        }, vjs.Player.prototype.playbackRate = function(e) {
            return void 0 !== e ? (this.techCall("setPlaybackRate", e), this) : this.tech && this.tech.featuresPlaybackRate ? this.techGet("playbackRate") : 1
        }, vjs.Player.prototype.isAudio_ = !1, vjs.Player.prototype.isAudio = function(e) {
            return void 0 !== e ? (this.isAudio_ = !!e, this) : this.isAudio_
        }, vjs.Player.prototype.networkState = function() {
            return this.techGet("networkState")
        }, vjs.Player.prototype.readyState = function() {
            return this.techGet("readyState")
        }, vjs.Player.prototype.textTracks = function() {
            return this.tech && this.tech.textTracks()
        }, vjs.Player.prototype.remoteTextTracks = function() {
            return this.tech && this.tech.remoteTextTracks()
        }, vjs.Player.prototype.addTextTrack = function(e, t, n) {
            return this.tech && this.tech.addTextTrack(e, t, n)
        }, vjs.Player.prototype.addRemoteTextTrack = function(e) {
            return this.tech && this.tech.addRemoteTextTrack(e)
        }, vjs.Player.prototype.removeRemoteTextTrack = function(e) {
            this.tech && this.tech.removeRemoteTextTrack(e)
        }, vjs.ControlBar = vjs.Component.extend(), vjs.ControlBar.prototype.options_ = {
            loadEvent: "play",
            children: {
                playToggle: {},
                currentTimeDisplay: {},
                timeDivider: {},
                durationDisplay: {},
                remainingTimeDisplay: {},
                progressControl: {},
                fullscreenToggle: {},
                volumeControl: {},
                muteToggle: {},
                playbackRateMenuButton: {}
            }
        }, vjs.ControlBar.prototype.createEl = function() {
            return vjs.createEl("div", {
                className: "vjs-control-bar"
            })
        }, vjs.LiveDisplay = vjs.Component.extend({
            init: function(e, t) {
                vjs.Component.call(this, e, t)
            }
        }), vjs.LiveDisplay.prototype.createEl = function() {
            var e = vjs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-live-controls vjs-control"
            });
            return this.contentEl_ = vjs.createEl("div", {
                className: "vjs-live-display",
                innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + "</span>" + this.localize("LIVE"),
                "aria-live": "off"
            }), e.appendChild(this.contentEl_), e
        }, vjs.PlayToggle = vjs.Button.extend({
            init: function(e, t) {
                vjs.Button.call(this, e, t), this.on(e, "play", this.onPlay), this.on(e, "pause", this.onPause)
            }
        }), vjs.PlayToggle.prototype.buttonText = "Play", vjs.PlayToggle.prototype.buildCSSClass = function() {
            return "vjs-play-control " + vjs.Button.prototype.buildCSSClass.call(this)
        }, vjs.PlayToggle.prototype.onClick = function() {}, vjs.PlayToggle.prototype.onPlay = function() {
            this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.el_.children[0].children[0].innerHTML = this.localize("Pause")
        }, vjs.PlayToggle.prototype.onPause = function() {
            this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.el_.children[0].children[0].innerHTML = this.localize("Play")
        }, vjs.CurrentTimeDisplay = vjs.Component.extend({
            init: function(e, t) {
                vjs.Component.call(this, e, t), this.on(e, "timeupdate", this.updateContent)
            }
        }), vjs.CurrentTimeDisplay.prototype.createEl = function() {
            var e = vjs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-current-time vjs-time-controls vjs-control"
            });
            return this.contentEl_ = vjs.createEl("div", {
                className: "vjs-current-time-display",
                innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
                "aria-live": "off"
            }), e.appendChild(this.contentEl_), e
        }, vjs.CurrentTimeDisplay.prototype.updateContent = function() {
            var e = this.player_.scrubbing ? this.player_.getCache().currentTime : this.player_.currentTime();
            this.contentEl_.innerHTML = '<span class="vjs-control-text">' + this.localize("Current Time") + "</span> " + vjs.formatTime(e, this.player_.duration())
        }, vjs.DurationDisplay = vjs.Component.extend({
            init: function(e, t) {
                vjs.Component.call(this, e, t), this.on(e, "timeupdate", this.updateContent), this.on(e, "loadedmetadata", this.updateContent)
            }
        }), vjs.DurationDisplay.prototype.createEl = function() {
            var e = vjs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-duration vjs-time-controls vjs-control"
            });
            return this.contentEl_ = vjs.createEl("div", {
                className: "vjs-duration-display",
                innerHTML: '<span class="vjs-control-text">' + this.localize("Duration Time") + "</span> 0:00",
                "aria-live": "off"
            }), e.appendChild(this.contentEl_), e
        }, vjs.DurationDisplay.prototype.updateContent = function() {
            var e = this.player_.duration();
            e && (this.contentEl_.innerHTML = '<span class="vjs-control-text">' + this.localize("Duration Time") + "</span> " + vjs.formatTime(e))
        }, vjs.TimeDivider = vjs.Component.extend({
            init: function(e, t) {
                vjs.Component.call(this, e, t)
            }
        }), vjs.TimeDivider.prototype.createEl = function() {
            return vjs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-time-divider",
                innerHTML: "<div><span>/</span></div>"
            })
        }, vjs.RemainingTimeDisplay = vjs.Component.extend({
            init: function(e, t) {
                vjs.Component.call(this, e, t), this.on(e, "timeupdate", this.updateContent)
            }
        }), vjs.RemainingTimeDisplay.prototype.createEl = function() {
            var e = vjs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-remaining-time vjs-time-controls vjs-control"
            });
            return this.contentEl_ = vjs.createEl("div", {
                className: "vjs-remaining-time-display",
                innerHTML: '<span class="vjs-control-text">' + this.localize("Remaining Time") + "</span> -0:00",
                "aria-live": "off"
            }), e.appendChild(this.contentEl_), e
        }, vjs.RemainingTimeDisplay.prototype.updateContent = function() {
            this.player_.duration() && (this.contentEl_.innerHTML = '<span class="vjs-control-text">' + this.localize("Remaining Time") + "</span> -" + vjs.formatTime(this.player_.remainingTime()))
        }, vjs.FullscreenToggle = vjs.Button.extend({
            init: function(e, t) {
                vjs.Button.call(this, e, t)
            }
        }), vjs.FullscreenToggle.prototype.buttonText = "Fullscreen", vjs.FullscreenToggle.prototype.buildCSSClass = function() {
            return "vjs-fullscreen-control " + vjs.Button.prototype.buildCSSClass.call(this)
        }, vjs.FullscreenToggle.prototype.onClick = function() {
            this.player_.fsButtonClicked = !0, this.player_.isFullscreen() ? (this.player_.exitFullscreen(), this.controlText_.innerHTML = this.localize("Fullscreen")) : (this.player_.requestFullscreen(), this.controlText_.innerHTML = this.localize("Non-Fullscreen"))
        }, vjs.ProgressControl = vjs.Component.extend({
            init: function(e, t) {
                vjs.Component.call(this, e, t)
            }
        }), vjs.ProgressControl.prototype.options_ = {
            children: {
                seekBar: {}
            }
        }, vjs.ProgressControl.prototype.createEl = function() {
            return vjs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-progress-control vjs-control"
            })
        }, vjs.SeekBar = vjs.Slider.extend({
            init: function(e, t) {
                vjs.Slider.call(this, e, t), this.on(e, "timeupdate", this.updateARIAAttributes), e.ready(vjs.bind(this, this.updateARIAAttributes))
            }
        }), vjs.SeekBar.prototype.options_ = {
            children: {
                loadProgressBar: {},
                playProgressBar: {},
                seekHandle: {}
            },
            barName: "playProgressBar",
            handleName: "seekHandle"
        }, vjs.SeekBar.prototype.playerEvent = "timeupdate", vjs.SeekBar.prototype.createEl = function() {
            return vjs.Slider.prototype.createEl.call(this, "div", {
                className: "vjs-progress-holder",
                "aria-label": "video progress bar"
            })
        }, vjs.SeekBar.prototype.updateARIAAttributes = function() {
            var e = this.player_.scrubbing ? this.player_.getCache().currentTime : this.player_.currentTime();
            this.el_.setAttribute("aria-valuenow", vjs.round(100 * this.getPercent(), 2)), this.el_.setAttribute("aria-valuetext", vjs.formatTime(e, this.player_.duration()))
        }, vjs.SeekBar.prototype.getPercent = function() {
            return this.player_.currentTime() / this.player_.duration()
        }, vjs.LoadProgressBar = vjs.Component.extend({
            init: function(e, t) {
                vjs.Component.call(this, e, t), this.on(e, "progress", this.update)
            }
        }), vjs.LoadProgressBar.prototype.createEl = function() {
            return vjs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-load-progress",
                innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + "</span>: 0%</span>"
            })
        }, vjs.LoadProgressBar.prototype.update = function() {
            function e(e, t) {
                return 100 * (e / t || 0) + "%"
            }
            var t, n, i, o, r = this.player_.buffered(),
                a = this.player_.duration(),
                s = this.player_.bufferedEnd(),
                l = this.el_.children;
            for (this.el_.style.width = e(s, a), t = 0; t < r.length; t++) n = r.start(t), i = r.end(t), (o = (o = l[t]) || this.el_.appendChild(vjs.createEl())).style.left = e(n, s), o.style.width = e(i - n, s);
            for (t = l.length; t > r.length; t--) this.el_.removeChild(l[t - 1])
        }, vjs.PlayProgressBar = vjs.Component.extend({
            init: function(e, t) {
                vjs.Component.call(this, e, t)
            }
        }), vjs.PlayProgressBar.prototype.createEl = function() {
            return vjs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-play-progress",
                innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
            })
        }, vjs.SeekHandle = vjs.SliderHandle.extend({
            init: function(e, t) {
                vjs.SliderHandle.call(this, e, t), this.on(e, "timeupdate", this.updateContent)
            }
        }), vjs.SeekHandle.prototype.defaultValue = "00:00", vjs.SeekHandle.prototype.createEl = function() {
            return vjs.SliderHandle.prototype.createEl.call(this, "div", {
                className: "vjs-seek-handle",
                "aria-live": "off"
            })
        }, vjs.SeekHandle.prototype.updateContent = function() {
            var e = this.player_.scrubbing ? this.player_.getCache().currentTime : this.player_.currentTime();
            this.el_.innerHTML = '<span class="vjs-control-text">' + vjs.formatTime(e, this.player_.duration()) + "</span>"
        }, vjs.VolumeControl = vjs.Component.extend({
            init: function(e, t) {
                vjs.Component.call(this, e, t), e.tech && !1 === e.tech.featuresVolumeControl && this.addClass("vjs-hidden"), this.on(e, "loadstart", function() {
                    !1 === e.tech.featuresVolumeControl ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                })
            }
        }), vjs.VolumeControl.prototype.options_ = {
            children: {
                volumeBar: {}
            }
        }, vjs.VolumeControl.prototype.createEl = function() {
            return vjs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-volume-control vjs-control"
            })
        }, vjs.VolumeBar = vjs.Slider.extend({
            init: function(e, t) {
                vjs.Slider.call(this, e, t), this.on(e, "volumechange", this.updateARIAAttributes), e.ready(vjs.bind(this, this.updateARIAAttributes))
            }
        }), vjs.VolumeBar.prototype.updateARIAAttributes = function() {
            this.el_.setAttribute("aria-valuenow", vjs.round(100 * this.player_.volume(), 2)), this.el_.setAttribute("aria-valuetext", vjs.round(100 * this.player_.volume(), 2) + "%")
        }, vjs.VolumeBar.prototype.options_ = {
            children: {
                volumeLevel: {},
                volumeHandle: {}
            },
            barName: "volumeLevel",
            handleName: "volumeHandle"
        }, vjs.VolumeBar.prototype.playerEvent = "volumechange", vjs.VolumeBar.prototype.createEl = function() {
            return vjs.Slider.prototype.createEl.call(this, "div", {
                className: "vjs-volume-bar",
                "aria-label": "volume level"
            })
        }, vjs.VolumeBar.prototype.onMouseMove = function(e) {
            var t;
            this.player_.muted(), global_options.hasOwnProperty("overlayPlayer") ? e.srcElement && "VIDEO" != e.srcElement.tagName && 0 <= e.srcElement.className.indexOf("vjs") ? "VIDEO" != e.srcElement.tagName && e.srcElement.className && 0 <= e.srcElement.className.indexOf("vjs") && this.player_.volume(this.calculateDistance(e)) : e.currentTarget && "VIDEO" != e.currentTarget.tagName && e.currentTarget.className && 0 <= e.currentTarget.className.indexOf("vjs") && this.player_.volume(this.calculateDistance(e)) : (t = (t = (t = global_options.wcElement && global_options.wcElement instanceof Element ? global_options.wcElement.querySelector("#" + String(global_options.iframeVideoWrapperId)) : document.getElementById(global_options.iframeVideoWrapperId)) && t.contentWindow.document) && t.elementFromPoint(e.clientX, e.clientY)) && "VIDEO" != t.tagName && 0 <= t.className.indexOf("vjs") && this.player_.volume(this.calculateDistance(e))
        }, vjs.VolumeBar.prototype.getPercent = function() {
            return this.player_.muted() ? 0 : this.player_.volume()
        }, vjs.VolumeBar.prototype.stepForward = function() {
            this.player_.volume(this.player_.volume() + .1)
        }, vjs.VolumeBar.prototype.stepBack = function() {
            this.player_.volume(this.player_.volume() - .1)
        }, vjs.VolumeLevel = vjs.Component.extend({
            init: function(e, t) {
                vjs.Component.call(this, e, t)
            }
        }), vjs.VolumeLevel.prototype.createEl = function() {
            return vjs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-volume-level",
                innerHTML: '<span class="vjs-control-text"></span>'
            })
        }, vjs.VolumeHandle = vjs.SliderHandle.extend(), vjs.VolumeHandle.prototype.defaultValue = "00:00", vjs.VolumeHandle.prototype.createEl = function() {
            return vjs.SliderHandle.prototype.createEl.call(this, "div", {
                className: "vjs-volume-handle"
            })
        }, vjs.MuteToggle = vjs.Button.extend({
            init: function(e, t) {
                vjs.Button.call(this, e, t), this.on(e, "volumechange", this.update);
                var n = e.getMuteSettingsForIOS10();
                e.tech && !1 === e.tech.featuresVolumeControl && !n && this.addClass("vjs-hidden"), this.on(e, "loadstart", function() {
                    !1 !== e.tech.featuresVolumeControl || n ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
                })
            }
        }), vjs.MuteToggle.prototype.createEl = function() {
            return vjs.Button.prototype.createEl.call(this, "div", {
                className: "vjs-mute-control vjs-control",
                innerHTML: '<div><span class="vjs-control-text">' + this.localize("Mute") + "</span></div>"
            })
        }, vjs.MuteToggle.prototype.onClick = function() {
            this.player_.muted() && 0 === this.player_.volume() && this.player_.volume(.5), this.player_.muted(!this.player_.muted())
        }, vjs.MuteToggle.prototype.update = function() {
            var e = this.player_.volume(),
                t = 3;
            if (0 === e || this.player_.muted() ? t = 0 : e < .33 ? t = 1 : e < .67 && (t = 2), this.el_) {
                this.player_.muted() ? this.el_.children[0].children[0].innerHTML != this.localize("Unmute") && (this.el_.children[0].children[0].innerHTML = this.localize("Unmute")) : this.el_.children[0].children[0].innerHTML != this.localize("Mute") && (this.el_.children[0].children[0].innerHTML = this.localize("Mute"));
                for (var n = 0; n < 4; n++) vjs.removeClass(this.el_, "vjs-vol-" + n);
                vjs.addClass(this.el_, "vjs-vol-" + t)
            }
        }, vjs.VolumeMenuButton = vjs.MenuButton.extend({
            init: function(e, t) {
                vjs.MenuButton.call(this, e, t), this.on(e, "volumechange", this.volumeUpdate), e.tech && !1 === e.tech.featuresVolumeControl && this.addClass("vjs-hidden"), this.on(e, "loadstart", function() {
                    !1 === e.tech.featuresVolumeControl ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                }), this.addClass("vjs-menu-button")
            }
        }), vjs.VolumeMenuButton.prototype.createMenu = function() {
            var e = new vjs.Menu(this.player_, {
                    contentElType: "div"
                }),
                t = new vjs.VolumeBar(this.player_, this.options_.volumeBar);
            return t.on("focus", function() {
                e.lockShowing()
            }), t.on("blur", function() {
                e.unlockShowing()
            }), e.addChild(t), e
        }, vjs.VolumeMenuButton.prototype.onClick = function() {
            vjs.MuteToggle.prototype.onClick.call(this), vjs.MenuButton.prototype.onClick.call(this)
        }, vjs.VolumeMenuButton.prototype.createEl = function() {
            return vjs.Button.prototype.createEl.call(this, "div", {
                className: "vjs-volume-menu-button vjs-menu-button vjs-control",
                innerHTML: '<div><span class="vjs-control-text">' + this.localize("Mute") + "</span></div>"
            })
        }, vjs.VolumeMenuButton.prototype.volumeUpdate = vjs.MuteToggle.prototype.update, vjs.PlaybackRateMenuButton = vjs.MenuButton.extend({
            init: function(e, t) {
                vjs.MenuButton.call(this, e, t), this.updateVisibility(), this.updateLabel(), this.on(e, "loadstart", this.updateVisibility), this.on(e, "ratechange", this.updateLabel)
            }
        }), vjs.PlaybackRateMenuButton.prototype.buttonText = "Playback Rate", vjs.PlaybackRateMenuButton.prototype.className = "vjs-playback-rate", vjs.PlaybackRateMenuButton.prototype.createEl = function() {
            var e = vjs.MenuButton.prototype.createEl.call(this);
            return this.labelEl_ = vjs.createEl("div", {
                className: "vjs-playback-rate-value",
                innerHTML: 1
            }), e.appendChild(this.labelEl_), e
        }, vjs.PlaybackRateMenuButton.prototype.createMenu = function() {
            var e = new vjs.Menu(this.player()),
                t = this.player().options().playbackRates;
            if (t)
                for (var n = t.length - 1; 0 <= n; n--) e.addChild(new vjs.PlaybackRateMenuItem(this.player(), {
                    rate: t[n] + "x"
                }));
            return e
        }, vjs.PlaybackRateMenuButton.prototype.updateARIAAttributes = function() {
            this.el().setAttribute("aria-valuenow", this.player().playbackRate())
        }, vjs.PlaybackRateMenuButton.prototype.onClick = function() {
            for (var e = this.player().playbackRate(), t = this.player().options().playbackRates, n = t[0], i = 0; i < t.length; i++)
                if (t[i] > e) {
                    n = t[i];
                    break
                }
            this.player().playbackRate(n)
        }, vjs.PlaybackRateMenuButton.prototype.playbackRateSupported = function() {
            return this.player().tech && this.player().tech.featuresPlaybackRate && this.player().options().playbackRates && 0 < this.player().options().playbackRates.length
        }, vjs.PlaybackRateMenuButton.prototype.updateVisibility = function() {
            this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
        }, vjs.PlaybackRateMenuButton.prototype.updateLabel = function() {
            this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
        }, vjs.PlaybackRateMenuItem = vjs.MenuItem.extend({
            contentElType: "button",
            init: function(e, t) {
                var n = this.label = t.rate,
                    i = this.rate = parseFloat(n, 10);
                t.label = n, t.selected = 1 === i, vjs.MenuItem.call(this, e, t), this.on(e, "ratechange", this.update)
            }
        }), vjs.PlaybackRateMenuItem.prototype.onClick = function() {
            vjs.MenuItem.prototype.onClick.call(this), this.player().playbackRate(this.rate)
        }, vjs.PlaybackRateMenuItem.prototype.update = function() {
            this.selected(this.player().playbackRate() == this.rate)
        }, vjs.PosterImage = vjs.Button.extend({
            init: function(e, t) {
                vjs.Button.call(this, e, t), this.update(), e.on("posterchange", vjs.bind(this, this.update))
            }
        }), vjs.PosterImage.prototype.dispose = function() {
            this.player().off("posterchange", this.update), vjs.Button.prototype.dispose.call(this)
        }, vjs.PosterImage.prototype.createEl = function() {
            var e = vjs.createEl("div", {
                className: "vjs-poster",
                tabIndex: -1
            });
            return vjs.BACKGROUND_SIZE_SUPPORTED || (this.fallbackImg_ = vjs.createEl("img"), e.appendChild(this.fallbackImg_)), e
        }, vjs.PosterImage.prototype.update = function() {
            var e = this.player().poster();
            this.setSrc(e), e ? this.show() : this.hide()
        }, vjs.PosterImage.prototype.setSrc = function(e) {
            var t;
            this.fallbackImg_ ? this.fallbackImg_.src = e : (t = "", this.el_.style.backgroundImage = t = e ? 'url("' + e + '")' : t)
        }, vjs.PosterImage.prototype.onClick = function() {
            this.player_.play()
        }, vjs.LoadingSpinner = vjs.Component.extend({
            init: function(e, t) {
                vjs.Component.call(this, e, t)
            }
        }), vjs.LoadingSpinner.prototype.createEl = function() {
            return vjs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-loading-spinner"
            })
        }, vjs.BigPlayButton = vjs.Button.extend(), vjs.BigPlayButton.prototype.createEl = function() {
            return vjs.Button.prototype.createEl.call(this, "div", {
                className: "vjs-big-play-button",
                innerHTML: '<span aria-hidden="true"></span>',
                "aria-label": "play video"
            })
        }, vjs.BigPlayButton.prototype.onClick = function() {}, vjs.ErrorDisplay = vjs.Component.extend({
            init: function(e, t) {
                vjs.Component.call(this, e, t), this.update(), this.on(e, "error", this.update)
            }
        }), vjs.ErrorDisplay.prototype.createEl = function() {
            var e = vjs.Component.prototype.createEl.call(this, "div", {});
            return this.contentEl_ = vjs.createEl("div"), e.appendChild(this.contentEl_), e
        }, vjs.ErrorDisplay.prototype.update = function() {
            this.player().error() && (this.contentEl_.innerHTML = this.localize(this.player().error().message))
        }, ! function() {
            var i;
            vjs.MediaTechController = vjs.Component.extend({
                init: function(e, t, n) {
                    (t = t || {}).reportTouchActivity = !1, vjs.Component.call(this, e, t, n), this.featuresProgressEvents || this.manualProgressOn(), this.featuresTimeupdateEvents || this.manualTimeUpdatesOn(), this.initControlsListeners(), this.initTextTrackListeners()
                }
            }), vjs.MediaTechController.prototype.initControlsListeners = function() {
                var e = this.player(),
                    t = function() {
                        e.controls() && !e.usingNativeControls() && this.addControlsListeners()
                    };
                this.ready(t), this.on(e, "controlsenabled", t), this.on(e, "controlsdisabled", this.removeControlsListeners), this.ready(function() {
                    this.networkState && 0 < this.networkState() && this.player().trigger("loadstart")
                })
            }, vjs.MediaTechController.prototype.addControlsListeners = function() {
                var t;
                this.on("mousedown", this.onClick), this.on("touchstart", function(e) {
                    t = this.player_.userActive()
                }), this.on("touchmove", function(e) {
                    t && this.player().reportUserActivity()
                }), this.on("touchend", function(e) {
                    e.preventDefault()
                }), this.emitTapEvents(), this.on("tap", this.onTap)
            }, vjs.MediaTechController.prototype.removeControlsListeners = function() {
                this.off("tap"), this.off("touchstart"), this.off("touchmove"), this.off("touchleave"), this.off("touchcancel"), this.off("touchend"), this.off("click"), this.off("mousedown")
            }, vjs.MediaTechController.prototype.onClick = function(e) {
                0 === e.button && this.player().controls() && (this.player().paused() ? this.player().play() : this.player().pause())
            }, vjs.MediaTechController.prototype.onTap = function() {
                this.player().userActive(!this.player().userActive())
            }, vjs.MediaTechController.prototype.manualProgressOn = function() {
                this.manualProgress = !0, this.trackProgress()
            }, vjs.MediaTechController.prototype.manualProgressOff = function() {
                this.manualProgress = !1, this.stopTrackingProgress()
            }, vjs.MediaTechController.prototype.trackProgress = function() {
                this.progressInterval = this.setInterval(function() {
                    var e = this.player().bufferedPercent();
                    this.bufferedPercent_ != e && this.player().trigger("progress"), 1 === (this.bufferedPercent_ = e) && this.stopTrackingProgress()
                }, 500)
            }, vjs.MediaTechController.prototype.stopTrackingProgress = function() {
                this.clearInterval(this.progressInterval)
            }, vjs.MediaTechController.prototype.manualTimeUpdatesOn = function() {
                var e = this.player_;
                this.manualTimeUpdates = !0, this.on(e, "play", this.trackCurrentTime), this.on(e, "pause", this.stopTrackingCurrentTime), this.one("timeupdate", function() {
                    this.featuresTimeupdateEvents = !0, this.manualTimeUpdatesOff()
                })
            }, vjs.MediaTechController.prototype.manualTimeUpdatesOff = function() {
                var e = this.player_;
                this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off(e, "play", this.trackCurrentTime), this.off(e, "pause", this.stopTrackingCurrentTime)
            }, vjs.MediaTechController.prototype.trackCurrentTime = function() {
                this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function() {
                    this.player().trigger("timeupdate")
                }, 250)
            }, vjs.MediaTechController.prototype.stopTrackingCurrentTime = function() {
                this.clearInterval(this.currentTimeInterval), this.player().trigger("timeupdate")
            }, vjs.MediaTechController.prototype.dispose = function() {
                this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), vjs.Component.prototype.dispose.call(this)
            }, vjs.MediaTechController.prototype.setCurrentTime = function() {
                this.manualTimeUpdates && this.player().trigger("timeupdate")
            }, vjs.MediaTechController.prototype.initTextTrackListeners = function() {
                function e() {
                    var e = t.getChild("textTrackDisplay");
                    e && e.updateDisplay()
                }
                var t = this.player_,
                    n = this.textTracks();
                n && (n.addEventListener("removetrack", e), n.addEventListener("addtrack", e), this.on("dispose", vjs.bind(this, function() {
                    n.removeEventListener("removetrack", e), n.removeEventListener("addtrack", e)
                })))
            }, vjs.MediaTechController.prototype.emulateTextTracks = function() {
                var e, t, i = this.player_;
                window.WebVTT, (t = this.textTracks()) && (t.addEventListener("change", e = function() {
                    var e, t, n = i.getChild("textTrackDisplay");
                    for (n.updateDisplay(), e = 0; e < this.length; e++)(t = this[e]).removeEventListener("cuechange", vjs.bind(n, n.updateDisplay)), "showing" === t.mode && t.addEventListener("cuechange", vjs.bind(n, n.updateDisplay))
                }), this.on("dispose", vjs.bind(this, function() {
                    t.removeEventListener("change", e)
                })))
            }, vjs.MediaTechController.prototype.textTracks_, vjs.MediaTechController.prototype.textTracks = function() {
                return this.player_.textTracks_ = this.player_.textTracks_ || new vjs.TextTrackList, this.player_.textTracks_
            }, vjs.MediaTechController.prototype.remoteTextTracks = function() {
                return this.player_.remoteTextTracks_ = this.player_.remoteTextTracks_ || new vjs.TextTrackList, this.player_.remoteTextTracks_
            }, i = function(e, t, n, i, o) {
                var r = e.textTracks();
                return (o = o || {}).kind = t, n && (o.label = n), i && (o.language = i), o.player = e.player_, t = new vjs.TextTrack(o), r.addTrack_(t), t
            }, vjs.MediaTechController.prototype.addTextTrack = function(e, t, n) {
                if (e) return i(this, e, t, n);
                throw new Error("TextTrack kind is required but was not provided")
            }, vjs.MediaTechController.prototype.addRemoteTextTrack = function(e) {
                e = i(this, e.kind, e.label, e.language, e);
                return this.remoteTextTracks().addTrack_(e), {
                    track: e
                }
            }, vjs.MediaTechController.prototype.removeRemoteTextTrack = function(e) {
                this.textTracks().removeTrack_(e), this.remoteTextTracks().removeTrack_(e)
            }, vjs.MediaTechController.prototype.setPoster = function() {}, vjs.MediaTechController.prototype.featuresVolumeControl = !0, vjs.MediaTechController.prototype.featuresFullscreenResize = !1, vjs.MediaTechController.prototype.featuresPlaybackRate = !1, vjs.MediaTechController.prototype.featuresProgressEvents = !1, vjs.MediaTechController.prototype.featuresTimeupdateEvents = !1, vjs.MediaTechController.prototype.featuresNativeTextTracks = !1, vjs.MediaTechController.withSourceHandlers = function(i) {
                i.registerSourceHandler = function(e, t) {
                    var n = (n = i.sourceHandlers) || (i.sourceHandlers = []);
                    void 0 === t && (t = n.length), n.splice(t, 0, e)
                }, i.selectSourceHandler = function(e) {
                    for (var t = i.sourceHandlers || [], n = 0; n < t.length; n++)
                        if (t[n].canHandleSource(e)) return t[n];
                    return null
                }, i.canPlaySource = function(e) {
                    var t = i.selectSourceHandler(e);
                    return t ? t.canHandleSource(e) : ""
                }, i.prototype.setSource = function(e) {
                    var t = i.selectSourceHandler(e);
                    return t || (i.nativeSourceHandler ? t = i.nativeSourceHandler : vjs.log.error("No source hander found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), this.currentSource_ = e, this.sourceHandler_ = t.handleSource(e, this), this.on("dispose", this.disposeSourceHandler), this
                }, i.prototype.disposeSourceHandler = function() {
                    this.sourceHandler_ && this.sourceHandler_.dispose && this.sourceHandler_.dispose()
                }
            }, vjs.media = {}
        }(), vjs.Html5 = vjs.MediaTechController.extend({
            init: function(e, t, n) {
                !1 !== t.nativeCaptions && !1 !== t.nativeTextTracks || (this.featuresNativeTextTracks = !1), vjs.MediaTechController.call(this, e, t, n), this.setupTriggers();
                var i, o, r, a, s, n = t.source;
                if (n && (this.el_.currentSrc !== n.src || e.tag && 3 === e.tag.initNetworkState_) && this.setSource(n), this.el_.hasChildNodes()) {
                    for (o = (i = this.el_.childNodes).length, s = []; o--;) "track" === (a = i[o]).nodeName.toLowerCase() && (this.featuresNativeTextTracks ? this.remoteTextTracks().addTrack_(a.track) : s.push(a));
                    for (r = 0; r < s.length; r++) this.el_.removeChild(s[r])
                }
                this.featuresNativeTextTracks && this.on("loadstart", vjs.bind(this, this.hideCaptions)), vjs.TOUCH_ENABLED && !0 === e.options().nativeControlsForTouch && this.useNativeControls(), e.ready(function() {
                    this.src() && this.tag && this.options_.autoplay && this.paused() && (delete this.tag.poster, this.play())
                }), this.triggerReady()
            }
        }), vjs.Html5.prototype.dispose = function() {
            vjs.Html5.disposeMediaElement(this.el_), vjs.MediaTechController.prototype.dispose.call(this)
        }, vjs.Html5.prototype.createEl = function() {
            var e, t, n, i = this.player_,
                o = i.tag;
            if (!o || !1 === this.movingMediaElementInDOM) {
                if (o ? (n = o.cloneNode(!1), vjs.Html5.disposeMediaElement(o), o = n, i.tag = null) : (o = vjs.createEl("video"), n = videojs.util.mergeOptions({}, i.tagAttributes), vjs.TOUCH_ENABLED && !0 === i.options().nativeControlsForTouch || delete n.controls, vjs.setElementAttributes(o, vjs.obj.merge(n, {
                        id: i.id() + "_html5_api",
                        class: "vjs-tech"
                    }))), (o.player = i).options_.tracks)
                    for (a = 0; a < i.options_.tracks.length; a++) e = i.options_.tracks[a], (t = document.createElement("track")).kind = e.kind, t.label = e.label, t.srclang = e.srclang, t.src = e.src, "default" in e && t.setAttribute("default", "default"), o.appendChild(t);
                vjs.insertFirst(o, i.el())
            }
            for (var r = ["autoplay", "preload", "loop", "muted"], a = r.length - 1; 0 <= a; a--) {
                var s = r[a],
                    l = {};
                void 0 !== i.options_[s] && (l[s] = i.options_[s]), vjs.setElementAttributes(o, l)
            }
            return i.options_.enableNativeInline && (o.setAttribute("playsinline", ""), o.setAttribute("webkit-playsinline", "")), o
        }, vjs.Html5.prototype.hideCaptions = function() {
            for (var e, t = this.el_.querySelectorAll("track"), n = t.length, i = {
                    captions: 1,
                    subtitles: 1
                }; n--;)(e = t[n].track) && e.kind in i && !t[n].default && (e.mode = "disabled")
        }, vjs.Html5.prototype.setupTriggers = function() {
            for (var e = vjs.Html5.Events.length - 1; 0 <= e; e--) this.on(vjs.Html5.Events[e], this.eventHandler)
        }, vjs.Html5.prototype.eventHandler = function(e) {
            "error" == e.type && this.error() ? this.player().error(this.error().code) : (e.bubbles = !1, this.player().trigger(e))
        }, vjs.Html5.prototype.useNativeControls = function() {
            var e, t, n, i = this,
                o = this.player();
            i.setControls(o.controls()), e = function() {
                i.setControls(!0)
            }, t = function() {
                i.setControls(!1)
            }, o.on("controlsenabled", e), o.on("controlsdisabled", t), i.on("dispose", n = function() {
                o.off("controlsenabled", e), o.off("controlsdisabled", t)
            }), o.on("usingcustomcontrols", n), o.usingNativeControls(!0)
        }, vjs.Html5.prototype.play = function() {
            this.el_.play()
        }, vjs.Html5.prototype.pause = function() {
            this.el_.pause()
        }, vjs.Html5.prototype.paused = function() {
            return this.el_.paused
        }, vjs.Html5.prototype.currentTime = function() {
            return this.el_.currentTime || this.el_.currentTimeForOutstream || 0
        }, vjs.Html5.prototype.setCurrentTime = function(e) {
            try {
                this.el_.currentTimeForOutstream = e, this.el_.currentTime = e
            } catch (e) {
                vjs.log(e, "Video is not ready. (Video.js)")
            }
        }, vjs.Html5.prototype.duration = function() {
            return this.el_.duration || 0
        }, vjs.Html5.prototype.buffered = function() {
            return this.el_.buffered
        }, vjs.Html5.prototype.volume = function() {
            return this.el_.volume
        }, vjs.Html5.prototype.setVolume = function(e) {
            this.el_.volume = e
        }, vjs.Html5.prototype.muted = function() {
            return this.el_.muted
        }, vjs.Html5.prototype.setMuted = function(e) {
            this.el_.muted = e
        }, vjs.Html5.prototype.width = function() {
            return this.el_.offsetWidth
        }, vjs.Html5.prototype.height = function() {
            return this.el_.offsetHeight
        }, vjs.Html5.prototype.supportsFullScreen = function() {
            return !("function" != typeof this.el_.webkitEnterFullScreen || !/Android/.test(vjs.USER_AGENT) && /Chrome|Mac OS X 10.5/.test(vjs.USER_AGENT))
        }, vjs.Html5.prototype.enterFullScreen = function() {
            var e = this.el_;
            "webkitDisplayingFullscreen" in e && this.one("webkitbeginfullscreen", function() {
                this.player_.isFullscreen(!0), this.one("webkitendfullscreen", function() {
                    this.player_.isFullscreen(!1), this.player_.trigger("fullscreenchange")
                }), this.player_.trigger("fullscreenchange")
            }), e.paused && e.networkState <= e.HAVE_METADATA ? (this.el_.play(), this.setTimeout(function() {
                e.pause(), e.webkitEnterFullScreen()
            }, 0)) : e.webkitEnterFullScreen()
        }, vjs.Html5.prototype.exitFullScreen = function() {
            this.el_.webkitExitFullScreen()
        }, vjs.Html5.prototype.returnOriginalIfBlobURI_ = function(e, t) {
            return t && e && /^blob\:/i.test(e) ? t : e
        }, vjs.Html5.prototype.src = function(e) {
            var t = this.el_.src;
            if (void 0 === e) return this.returnOriginalIfBlobURI_(t, this.source_);
            this.setSrc(e)
        }, vjs.Html5.prototype.setSrc = function(e) {
            this.el_.src = e
        }, vjs.Html5.prototype.load = function() {
            this.el_.load()
        }, vjs.Html5.prototype.currentSrc = function() {
            var e = this.el_.currentSrc;
            return this.currentSource_ ? this.returnOriginalIfBlobURI_(e, this.currentSource_.src) : e
        }, vjs.Html5.prototype.poster = function() {
            return this.el_.poster
        }, vjs.Html5.prototype.setPoster = function(e) {
            this.el_.poster = e
        }, vjs.Html5.prototype.preload = function() {
            return this.el_.preload
        }, vjs.Html5.prototype.setPreload = function(e) {
            this.el_.preload = e
        }, vjs.Html5.prototype.autoplay = function() {
            return this.el_.autoplay
        }, vjs.Html5.prototype.setAutoplay = function(e) {
            this.el_.autoplay = e
        }, vjs.Html5.prototype.controls = function() {
            return this.el_.controls
        }, vjs.Html5.prototype.setControls = function(e) {
            this.el_.controls = !!e
        }, vjs.Html5.prototype.loop = function() {
            return this.el_.loop
        }, vjs.Html5.prototype.setLoop = function(e) {
            this.el_.loop = e
        }, vjs.Html5.prototype.error = function() {
            return this.el_.error
        }, vjs.Html5.prototype.seeking = function() {
            return this.el_.seeking
        }, vjs.Html5.prototype.seekable = function() {
            return this.el_.seekable
        }, vjs.Html5.prototype.ended = function() {
            return this.el_.ended
        }, vjs.Html5.prototype.defaultMuted = function() {
            return this.el_.defaultMuted
        }, vjs.Html5.prototype.playbackRate = function() {
            return this.el_.playbackRate
        }, vjs.Html5.prototype.setPlaybackRate = function(e) {
            this.el_.playbackRate = e
        }, vjs.Html5.prototype.networkState = function() {
            return this.el_.networkState
        }, vjs.Html5.prototype.readyState = function() {
            return this.el_.readyState
        }, vjs.Html5.prototype.textTracks = function() {
            return this.featuresNativeTextTracks ? this.el_.textTracks : vjs.MediaTechController.prototype.textTracks.call(this)
        }, vjs.Html5.prototype.addTextTrack = function(e, t, n) {
            return this.featuresNativeTextTracks ? this.el_.addTextTrack(e, t, n) : vjs.MediaTechController.prototype.addTextTrack.call(this, e, t, n)
        }, vjs.Html5.prototype.addRemoteTextTrack = function(e) {
            var t;
            return this.featuresNativeTextTracks ? (t = document.createElement("track"), (e = e || {}).kind && (t.kind = e.kind), e.label && (t.label = e.label), (e.language || e.srclang) && (t.srclang = e.language || e.srclang), e.default && (t.default = e.default), e.id && (t.id = e.id), e.src && (t.src = e.src), this.el().appendChild(t), "metadata" === t.track.kind ? t.track.mode = "hidden" : t.track.mode = "disabled", t.onload = function() {
                var e = t.track;
                2 <= t.readyState && ("metadata" === e.kind && "hidden" !== e.mode ? e.mode = "hidden" : "metadata" !== e.kind && "disabled" !== e.mode && (e.mode = "disabled"), t.onload = null)
            }, this.remoteTextTracks().addTrack_(t.track), t) : vjs.MediaTechController.prototype.addRemoteTextTrack.call(this, e)
        }, vjs.Html5.prototype.removeRemoteTextTrack = function(e) {
            if (!this.featuresNativeTextTracks) return vjs.MediaTechController.prototype.removeRemoteTextTrack.call(this, e);
            var t, n;
            for (this.remoteTextTracks().removeTrack_(e), t = this.el().querySelectorAll("track"), n = 0; n < t.length; n++)
                if (t[n] === e || t[n].track === e) {
                    t[n].parentNode.removeChild(t[n]);
                    break
                }
        }, vjs.Html5.isSupported = function() {
            try {
                vjs.TEST_VID.volume = .5
            } catch (e) {
                return !1
            }
            return !!vjs.TEST_VID.canPlayType
        }, vjs.MediaTechController.withSourceHandlers(vjs.Html5), ! function() {
            var n = vjs.Html5.prototype.setSource,
                e = vjs.Html5.prototype.disposeSourceHandler;
            vjs.Html5.prototype.setSource = function(e) {
                var t = n.call(this, e);
                return this.source_ = e.src, t
            }, vjs.Html5.prototype.disposeSourceHandler = function() {
                return this.source_ = void 0, e.call(this)
            }
        }(), vjs.Html5.nativeSourceHandler = {}, vjs.Html5.nativeSourceHandler.canHandleSource = function(e) {
            function t(e) {
                try {
                    return vjs.TEST_VID.canPlayType(e)
                } catch (e) {
                    return ""
                }
            }
            return e.type ? t(e.type) : e.src ? t("video/" + ((e = e.src.match(/\.([^.\/\?]+)(\?[^\/]+)?$/i)) && e[1])) : ""
        }, vjs.Html5.nativeSourceHandler.handleSource = function(e, t) {
            t.setSrc(e.src)
        }, vjs.Html5.nativeSourceHandler.dispose = function() {}, vjs.Html5.registerSourceHandler(vjs.Html5.nativeSourceHandler), vjs.Html5.canControlVolume = function() {
            var e = vjs.TEST_VID.volume;
            return vjs.TEST_VID.volume = e / 2 + .1, e !== vjs.TEST_VID.volume
        }, vjs.Html5.canControlPlaybackRate = function() {
            var e = vjs.TEST_VID.playbackRate;
            return vjs.TEST_VID.playbackRate = e / 2 + .1, e !== vjs.TEST_VID.playbackRate
        }, vjs.Html5.supportsNativeTextTracks = function() {
            var e = !!vjs.TEST_VID.textTracks;
            return e = (e = e && 0 < vjs.TEST_VID.textTracks.length ? "number" != typeof vjs.TEST_VID.textTracks[0].mode : e) && vjs.IS_FIREFOX ? !1 : e
        }, vjs.Html5.prototype.featuresVolumeControl = vjs.Html5.canControlVolume(), vjs.Html5.prototype.featuresPlaybackRate = vjs.Html5.canControlPlaybackRate(), vjs.Html5.prototype.movingMediaElementInDOM = !vjs.IS_IOS, vjs.Html5.prototype.featuresFullscreenResize = !0, vjs.Html5.prototype.featuresProgressEvents = !0, vjs.Html5.prototype.featuresNativeTextTracks = vjs.Html5.supportsNativeTextTracks(), ! function() {
            var t, n = /^application\/(?:x-|vnd\.apple\.)mpegurl/i,
                i = /^video\/mp4/i;
            vjs.Html5.patchCanPlayType = function() {
                4 <= vjs.ANDROID_VERSION && (t = t || vjs.TEST_VID.constructor.prototype.canPlayType, vjs.TEST_VID.constructor.prototype.canPlayType = function(e) {
                    return e && n.test(e) ? "maybe" : t.call(this, e)
                }), vjs.IS_OLD_ANDROID && (t = t || vjs.TEST_VID.constructor.prototype.canPlayType, vjs.TEST_VID.constructor.prototype.canPlayType = function(e) {
                    return e && i.test(e) ? "maybe" : t.call(this, e)
                })
            }, vjs.Html5.unpatchCanPlayType = function() {
                var e = vjs.TEST_VID.constructor.prototype.canPlayType;
                return vjs.TEST_VID.constructor.prototype.canPlayType = t, t = null, e
            }, vjs.Html5.patchCanPlayType()
        }(), vjs.Html5.Events = "loadstart,suspend,abort,error,emptied,stalled,loadedmetadata,loadeddata,canplay,canplaythrough,playing,waiting,seeking,seeked,ended,durationchange,timeupdate,progress,play,pause,ratechange,volumechange".split(","), vjs.Html5.disposeMediaElement = function(e) {
            if (e) {
                for (e.player = null, e.parentNode && e.parentNode.removeChild(e); e.hasChildNodes();) e.removeChild(e.firstChild);
                if (e.removeAttribute("src"), "function" == typeof e.load) try {
                    e.load()
                } catch (e) {}
            }
        }, vjs.MediaLoader = vjs.Component.extend({
            init: function(e, t, n) {
                if (vjs.Component.call(this, e, t, n), e.options_.sources && 0 !== e.options_.sources.length) e.src(e.options_.sources);
                else
                    for (var i = 0, o = e.options_.techOrder; i < o.length; i++) {
                        var r = vjs.capitalize(o[i]),
                            a = window.videojs_apn[r];
                        if (a && a.isSupported()) {
                            e.loadTech(r);
                            break
                        }
                    }
            }
        }), vjs.TextTrackMode = {
            disabled: "disabled",
            hidden: "hidden",
            showing: "showing"
        }, vjs.TextTrackKind = {
            subtitles: "subtitles",
            captions: "captions",
            descriptions: "descriptions",
            chapters: "chapters",
            metadata: "metadata"
        }, ! function() {
            var p, o, h;
            vjs.TextTrack = function(e) {
                var t, n, i, o, r, a, s, l, d, c, u;
                if (!(e = e || {}).player) throw new Error("A player was not provided.");
                if (t = this, vjs.IS_IE8)
                    for (u in t = document.createElement("custom"), vjs.TextTrack.prototype) t[u] = vjs.TextTrack.prototype[u];
                if (t.player_ = e.player, i = vjs.TextTrackMode[e.mode] || "disabled", o = vjs.TextTrackKind[e.kind] || "subtitles", r = e.label || "", a = e.language || e.srclang || "", n = e.id || "vjs_text_track_" + vjs.guid++, "metadata" !== o && "chapters" !== o || (i = "hidden"), t.cues_ = [], t.activeCues_ = [], s = new vjs.TextTrackCueList(t.cues_), l = new vjs.TextTrackCueList(t.activeCues_), c = !1, d = vjs.bind(t, function() {
                        this.activeCues, c && (this.trigger("cuechange"), c = !1)
                    }), "disabled" !== i && t.player_.on("timeupdate", d), Object.defineProperty(t, "kind", {
                        get: function() {
                            return o
                        },
                        set: Function.prototype
                    }), Object.defineProperty(t, "label", {
                        get: function() {
                            return r
                        },
                        set: Function.prototype
                    }), Object.defineProperty(t, "language", {
                        get: function() {
                            return a
                        },
                        set: Function.prototype
                    }), Object.defineProperty(t, "id", {
                        get: function() {
                            return n
                        },
                        set: Function.prototype
                    }), Object.defineProperty(t, "mode", {
                        get: function() {
                            return i
                        },
                        set: function(e) {
                            vjs.TextTrackMode[e] && ("showing" === (i = e) && this.player_.on("timeupdate", d), this.trigger("modechange"))
                        }
                    }), Object.defineProperty(t, "cues", {
                        get: function() {
                            return this.loaded_ ? s : null
                        },
                        set: Function.prototype
                    }), Object.defineProperty(t, "activeCues", {
                        get: function() {
                            var e, t, n, i, o;
                            if (!this.loaded_) return null;
                            if (0 !== this.cues.length) {
                                for (i = this.player_.currentTime(), e = 0, t = this.cues.length, n = []; e < t; e++)((o = this.cues[e]).startTime <= i && o.endTime >= i || o.startTime === o.endTime && o.startTime <= i && o.startTime + .5 >= i) && n.push(o);
                                if (c = !1, n.length !== this.activeCues_.length) c = !0;
                                else
                                    for (e = 0; e < n.length; e++) - 1 === h.call(this.activeCues_, n[e]) && (c = !0);
                                this.activeCues_ = n, l.setCues_(this.activeCues_)
                            }
                            return l
                        },
                        set: Function.prototype
                    }), e.src ? p(e.src, t) : t.loaded_ = !0, vjs.IS_IE8) return t
            }, vjs.TextTrack.prototype = vjs.obj.create(vjs.EventEmitter.prototype), vjs.TextTrack.prototype.constructor = vjs.TextTrack, vjs.TextTrack.prototype.allowedEvents_ = {
                cuechange: "cuechange"
            }, vjs.TextTrack.prototype.addCue = function(e) {
                var t = this.player_.textTracks(),
                    n = 0;
                if (t)
                    for (; n < t.length; n++) t[n] !== this && t[n].removeCue(e);
                this.cues_.push(e), this.cues.setCues_(this.cues_)
            }, vjs.TextTrack.prototype.removeCue = function(e) {
                for (var t = 0, n = this.cues_.length, i = !1; t < n; t++) this.cues_[t] === e && (this.cues_.splice(t, 1), i = !0);
                i && this.cues.setCues_(this.cues_)
            }, p = function(e, i) {
                vjs.xhr(e, vjs.bind(this, function(e, t, n) {
                    if (e) return vjs.log.error(e);
                    i.loaded_ = !0, o(n, i)
                }))
            }, o = function(e, t) {
                if ("function" != typeof window.WebVTT) return window.setTimeout(function() {
                    o(e, t)
                }, 25);
                var n = new window.WebVTT.Parser(window, window.vttjs, window.WebVTT.StringDecoder());
                n.oncue = function(e) {
                    t.addCue(e)
                }, n.onparsingerror = function(e) {
                    vjs.log.error(e)
                }, n.parse(e), n.flush()
            }, h = function(e, t) {
                var n;
                if (null == this) throw new TypeError('"this" is null or not defined');
                var i = Object(this),
                    o = i.length >>> 0;
                if (0 != o) {
                    t = +t || 0;
                    if (!(o <= (t = Math.abs(t) === 1 / 0 ? 0 : t)))
                        for (n = Math.max(0 <= t ? t : o - Math.abs(t), 0); n < o;) {
                            if (n in i && i[n] === e) return n;
                            n++
                        }
                }
                return -1
            }
        }(), vjs.TextTrackList = function(e) {
            var t, n = this,
                i = 0;
            if (vjs.IS_IE8)
                for (t in n = document.createElement("custom"), vjs.TextTrackList.prototype) n[t] = vjs.TextTrackList.prototype[t];
            for (e = e || [], n.tracks_ = [], Object.defineProperty(n, "length", {
                    get: function() {
                        return this.tracks_.length
                    }
                }); i < e.length; i++) n.addTrack_(e[i]);
            if (vjs.IS_IE8) return n
        }, vjs.TextTrackList.prototype = vjs.obj.create(vjs.EventEmitter.prototype), vjs.TextTrackList.prototype.constructor = vjs.TextTrackList, vjs.TextTrackList.prototype.allowedEvents_ = {
            change: "change",
            addtrack: "addtrack",
            removetrack: "removetrack"
        }, ! function() {
            for (var e in vjs.TextTrackList.prototype.allowedEvents_) vjs.TextTrackList.prototype["on" + e] = null
        }(), vjs.TextTrackList.prototype.addTrack_ = function(e) {
            var t = this.tracks_.length;
            "" + t in this || Object.defineProperty(this, t, {
                get: function() {
                    return this.tracks_[t]
                }
            }), e.addEventListener("modechange", vjs.bind(this, function() {
                this.trigger("change")
            })), this.tracks_.push(e), this.trigger({
                type: "addtrack",
                track: e
            })
        }, vjs.TextTrackList.prototype.removeTrack_ = function(e) {
            for (var t = 0, n = this.length; t < n; t++)
                if (this[t] === e) {
                    this.tracks_.splice(t, 1);
                    break
                }
            this.trigger({
                type: "removetrack",
                track: e
            })
        }, vjs.TextTrackList.prototype.getTrackById = function(e) {
            for (var t, n = 0, i = this.length, o = null; n < i; n++)
                if ((t = this[n]).id === e) {
                    o = t;
                    break
                }
            return o
        }, vjs.TextTrackCueList = function(e) {
            var t, n = this;
            if (vjs.IS_IE8)
                for (t in n = document.createElement("custom"), vjs.TextTrackCueList.prototype) n[t] = vjs.TextTrackCueList.prototype[t];
            if (vjs.TextTrackCueList.prototype.setCues_.call(n, e), Object.defineProperty(n, "length", {
                    get: function() {
                        return this.length_
                    }
                }), vjs.IS_IE8) return n
        }, vjs.TextTrackCueList.prototype.setCues_ = function(e) {
            var t, n = this.length || 0,
                i = 0,
                o = e.length;
            if (this.cues_ = e, this.length_ = e.length, t = function(e) {
                    "" + e in this || Object.defineProperty(this, "" + e, {
                        get: function() {
                            return this.cues_[e]
                        }
                    })
                }, n < o)
                for (i = n; i < o; i++) t.call(this, i)
        }, vjs.TextTrackCueList.prototype.getCueById = function(e) {
            for (var t, n = 0, i = this.length, o = null; n < i; n++)
                if ((t = this[n]).id === e) {
                    o = t;
                    break
                }
            return o
        }, ! function() {
            "use strict";
            vjs.TextTrackDisplay = vjs.Component.extend({
                init: function(i, e, t) {
                    vjs.Component.call(this, i, e, t), i.on("loadstart", vjs.bind(this, this.toggleDisplay)), i.ready(vjs.bind(this, function() {
                        var e, t, n;
                        if (i.tech && i.tech.featuresNativeTextTracks) this.hide();
                        else
                            for (i.on("fullscreenchange", vjs.bind(this, this.updateDisplay)), t = i.options_.tracks || [], e = 0; e < t.length; e++) n = t[e], this.player_.addRemoteTextTrack(n)
                    }))
                }
            }), vjs.TextTrackDisplay.prototype.toggleDisplay = function() {
                this.player_.tech && this.player_.tech.featuresNativeTextTracks ? this.hide() : this.show()
            }, vjs.TextTrackDisplay.prototype.createEl = function() {
                return vjs.Component.prototype.createEl.call(this, "div", {
                    className: "vjs-text-track-display"
                })
            }, vjs.TextTrackDisplay.prototype.clearDisplay = function() {
                "function" == typeof window.WebVTT && window.WebVTT.processCues(window, [], this.el_)
            };

            function a(e, t) {
                return "rgba(" + parseInt(e[1] + e[1], 16) + "," + parseInt(e[2] + e[2], 16) + "," + parseInt(e[3] + e[3], 16) + "," + t + ")"
            }

            function s(e, t, n) {
                try {
                    e.style[t] = n
                } catch (e) {}
            }
            var l = "#222",
                d = {
                    monospace: "monospace",
                    sansSerif: "sans-serif",
                    serif: "serif",
                    monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
                    monospaceSerif: '"Courier New", monospace',
                    proportionalSansSerif: "sans-serif",
                    proportionalSerif: "serif",
                    casual: '"Comic Sans MS", Impact, fantasy',
                    script: '"Monotype Corsiva", cursive',
                    smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
                };
            vjs.TextTrackDisplay.prototype.updateDisplay = function() {
                var e, t = this.player_.textTracks(),
                    n = 0;
                if (this.clearDisplay(), t)
                    for (; n < t.length; n++) "showing" === (e = t[n]).mode && this.updateForTrack(e)
            }, vjs.TextTrackDisplay.prototype.updateForTrack = function(e) {
                if ("function" == typeof window.WebVTT && e.activeCues) {
                    for (var t, n, i = 0, o = this.player_.textTrackSettings.getValues(), r = []; i < e.activeCues.length; i++) r.push(e.activeCues[i]);
                    for (window.WebVTT.processCues(window, e.activeCues, this.el_), i = r.length; i--;) t = r[i].displayState, o.color && (t.firstChild.style.color = o.color), o.textOpacity && s(t.firstChild, "color", a(o.color || "#fff", o.textOpacity)), o.backgroundColor && (t.firstChild.style.backgroundColor = o.backgroundColor), o.backgroundOpacity && s(t.firstChild, "backgroundColor", a(o.backgroundColor || "#000", o.backgroundOpacity)), o.windowColor && (o.windowOpacity ? s(t, "backgroundColor", a(o.windowColor, o.windowOpacity)) : t.style.backgroundColor = o.windowColor), o.edgeStyle && ("dropshadow" === o.edgeStyle ? t.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px " + l : "raised" === o.edgeStyle ? t.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px " + l : "depressed" === o.edgeStyle ? t.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px " + l : "uniform" === o.edgeStyle && (t.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px " + l)), o.fontPercent && 1 !== o.fontPercent && (n = window.parseFloat(t.style.fontSize), t.style.fontSize = n * o.fontPercent + "px", t.style.height = "auto", t.style.top = "auto", t.style.bottom = "2px"), o.fontFamily && "default" !== o.fontFamily && ("small-caps" === o.fontFamily ? t.firstChild.style.fontVariant = "small-caps" : t.firstChild.style.fontFamily = d[o.fontFamily])
                }
            }, vjs.TextTrackMenuItem = vjs.MenuItem.extend({
                init: function(e, t) {
                    var n, i, o = this.track = t.track,
                        r = e.textTracks();
                    r && (n = vjs.bind(this, function() {
                        var e, t, n, i = "showing" === this.track.mode;
                        if (this instanceof vjs.OffTextTrackMenuItem)
                            for (i = !0, t = 0, n = r.length; t < n; t++)
                                if ((e = r[t]).kind === this.track.kind && "showing" === e.mode) {
                                    i = !1;
                                    break
                                }
                        this.selected(i)
                    }), r.addEventListener("change", n), e.on("dispose", function() {
                        r.removeEventListener("change", n)
                    })), t.label = o.label || o.language || "Unknown", t.selected = o.default || "showing" === o.mode, vjs.MenuItem.call(this, e, t), r && void 0 === r.onchange && this.on(["tap", "click"], function() {
                        if ("object" != typeof window.Event) try {
                            i = new window.Event("change")
                        } catch (e) {}
                        i || (i = document.createEvent("Event")).initEvent("change", !0, !0), r.dispatchEvent(i)
                    })
                }
            }), vjs.TextTrackMenuItem.prototype.onClick = function() {
                var e, t = this.track.kind,
                    n = this.player_.textTracks(),
                    i = 0;
                if (vjs.MenuItem.prototype.onClick.call(this), n)
                    for (; i < n.length; i++)(e = n[i]).kind === t && (e === this.track ? e.mode = "showing" : e.mode = "disabled")
            }, vjs.OffTextTrackMenuItem = vjs.TextTrackMenuItem.extend({
                init: function(e, t) {
                    t.track = {
                        kind: t.kind,
                        player: e,
                        label: t.kind + " off",
                        default: !1,
                        mode: "disabled"
                    }, vjs.TextTrackMenuItem.call(this, e, t), this.selected(!0)
                }
            }), vjs.CaptionSettingsMenuItem = vjs.TextTrackMenuItem.extend({
                init: function(e, t) {
                    t.track = {
                        kind: t.kind,
                        player: e,
                        label: t.kind + " settings",
                        default: !1,
                        mode: "disabled"
                    }, vjs.TextTrackMenuItem.call(this, e, t), this.addClass("vjs-texttrack-settings")
                }
            }), vjs.CaptionSettingsMenuItem.prototype.onClick = function() {
                this.player().getChild("textTrackSettings").show()
            }, vjs.TextTrackButton = vjs.MenuButton.extend({
                init: function(e, t) {
                    var n, i;
                    vjs.MenuButton.call(this, e, t), n = this.player_.textTracks(), this.items.length <= 1 && this.hide(), n && (i = vjs.bind(this, this.update), n.addEventListener("removetrack", i), n.addEventListener("addtrack", i), this.player_.on("dispose", function() {
                        n.removeEventListener("removetrack", i), n.removeEventListener("addtrack", i)
                    }))
                }
            }), vjs.TextTrackButton.prototype.createItems = function() {
                var e, t, n = [];
                if (!(this instanceof vjs.CaptionsButton) || this.player().tech && this.player().tech.featuresNativeTextTracks || n.push(new vjs.CaptionSettingsMenuItem(this.player_, {
                        kind: this.kind_
                    })), n.push(new vjs.OffTextTrackMenuItem(this.player_, {
                        kind: this.kind_
                    })), t = this.player_.textTracks())
                    for (var i = 0; i < t.length; i++)(e = t[i]).kind === this.kind_ && n.push(new vjs.TextTrackMenuItem(this.player_, {
                        track: e
                    }));
                return n
            }, vjs.CaptionsButton = vjs.TextTrackButton.extend({
                init: function(e, t, n) {
                    vjs.TextTrackButton.call(this, e, t, n), this.el_.setAttribute("aria-label", "Captions Menu")
                }
            }), vjs.CaptionsButton.prototype.kind_ = "captions", vjs.CaptionsButton.prototype.buttonText = "Captions", vjs.CaptionsButton.prototype.className = "vjs-captions-button", vjs.CaptionsButton.prototype.update = function() {
                var e = 2;
                vjs.TextTrackButton.prototype.update.call(this), this.player().tech && this.player().tech.featuresNativeTextTracks && (e = 1), this.items && this.items.length > e ? this.show() : this.hide()
            }, vjs.SubtitlesButton = vjs.TextTrackButton.extend({
                init: function(e, t, n) {
                    vjs.TextTrackButton.call(this, e, t, n), this.el_.setAttribute("aria-label", "Subtitles Menu")
                }
            }), vjs.SubtitlesButton.prototype.kind_ = "subtitles", vjs.SubtitlesButton.prototype.buttonText = "Subtitles", vjs.SubtitlesButton.prototype.className = "vjs-subtitles-button", vjs.ChaptersButton = vjs.TextTrackButton.extend({
                init: function(e, t, n) {
                    vjs.TextTrackButton.call(this, e, t, n), this.el_.setAttribute("aria-label", "Chapters Menu")
                }
            }), vjs.ChaptersButton.prototype.kind_ = "chapters", vjs.ChaptersButton.prototype.buttonText = "Chapters", vjs.ChaptersButton.prototype.className = "vjs-chapters-button", vjs.ChaptersButton.prototype.createItems = function() {
                var e, t = [],
                    n = this.player_.textTracks();
                if (n)
                    for (var i = 0; i < n.length; i++)(e = n[i]).kind === this.kind_ && t.push(new vjs.TextTrackMenuItem(this.player_, {
                        track: e
                    }));
                return t
            }, vjs.ChaptersButton.prototype.createMenu = function() {
                for (var e, t, n = this.player_.textTracks() || [], i = 0, o = n.length, r = this.items = []; i < o; i++)
                    if ((e = n[i]).kind == this.kind_) {
                        if (e.cues) {
                            t = e;
                            break
                        }
                        e.mode = "hidden", window.setTimeout(vjs.bind(this, function() {
                            this.createMenu()
                        }), 100)
                    }
                var a = this.menu;
                if (void 0 === a && (a = new vjs.Menu(this.player_)).contentEl().appendChild(vjs.createEl("li", {
                        className: "vjs-menu-title",
                        innerHTML: vjs.capitalize(this.kind_),
                        tabindex: -1
                    })), t) {
                    for (var s, l = t.cues, i = 0, o = l.length; i < o; i++) s = l[i], s = new vjs.ChaptersTrackMenuItem(this.player_, {
                        track: t,
                        cue: s
                    }), r.push(s), a.addChild(s);
                    this.addChild(a)
                }
                return 0 < this.items.length && this.show(), a
            }, vjs.ChaptersTrackMenuItem = vjs.MenuItem.extend({
                init: function(e, t) {
                    var n = this.track = t.track,
                        i = this.cue = t.cue,
                        o = e.currentTime();
                    t.label = i.text, t.selected = i.startTime <= o && o < i.endTime, vjs.MenuItem.call(this, e, t), n.addEventListener("cuechange", vjs.bind(this, this.update))
                }
            }), vjs.ChaptersTrackMenuItem.prototype.onClick = function() {
                vjs.MenuItem.prototype.onClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime)
            }, vjs.ChaptersTrackMenuItem.prototype.update = function() {
                var e = this.cue,
                    t = this.player_.currentTime();
                this.selected(e.startTime <= t && t < e.endTime)
            }
        }();
        var cacheManager = __webpack_require__(7),
            cx;
        ! function() {
            "use strict";

            function c(e) {
                var t;
                return e.selectedOptions ? t = e.selectedOptions[0] : e.options && (t = e.options[e.options.selectedIndex]), t.value
            }

            function n(e, t) {
                var n;
                if (t) {
                    for (n = 0; n < e.options.length && e.options[n].value !== t; n++);
                    e.selectedIndex = n
                }
            }
            vjs.TextTrackSettings = vjs.Component.extend({
                init: function(e, t) {
                    vjs.Component.call(this, e, t), this.hide(), vjs.on(this.el().querySelector(".vjs-done-button"), "click", vjs.bind(this, function() {
                        this.saveSettings(), this.hide()
                    })), vjs.on(this.el().querySelector(".vjs-default-button"), "click", vjs.bind(this, function() {
                        this.el().querySelector(".vjs-fg-color > select").selectedIndex = 0, this.el().querySelector(".vjs-bg-color > select").selectedIndex = 0, this.el().querySelector(".window-color > select").selectedIndex = 0, this.el().querySelector(".vjs-text-opacity > select").selectedIndex = 0, this.el().querySelector(".vjs-bg-opacity > select").selectedIndex = 0, this.el().querySelector(".vjs-window-opacity > select").selectedIndex = 0, this.el().querySelector(".vjs-edge-style select").selectedIndex = 0, this.el().querySelector(".vjs-font-family select").selectedIndex = 0, this.el().querySelector(".vjs-font-percent select").selectedIndex = 2, this.updateDisplay()
                    })), vjs.on(this.el().querySelector(".vjs-fg-color > select"), "change", vjs.bind(this, this.updateDisplay)), vjs.on(this.el().querySelector(".vjs-bg-color > select"), "change", vjs.bind(this, this.updateDisplay)), vjs.on(this.el().querySelector(".window-color > select"), "change", vjs.bind(this, this.updateDisplay)), vjs.on(this.el().querySelector(".vjs-text-opacity > select"), "change", vjs.bind(this, this.updateDisplay)), vjs.on(this.el().querySelector(".vjs-bg-opacity > select"), "change", vjs.bind(this, this.updateDisplay)), vjs.on(this.el().querySelector(".vjs-window-opacity > select"), "change", vjs.bind(this, this.updateDisplay)), vjs.on(this.el().querySelector(".vjs-font-percent select"), "change", vjs.bind(this, this.updateDisplay)), vjs.on(this.el().querySelector(".vjs-edge-style select"), "change", vjs.bind(this, this.updateDisplay)), vjs.on(this.el().querySelector(".vjs-font-family select"), "change", vjs.bind(this, this.updateDisplay)), e.options().persistTextTrackSettings && this.restoreSettings()
                }
            }), vjs.TextTrackSettings.prototype.createEl = function() {
                return vjs.Component.prototype.createEl.call(this, "div", {
                    className: "vjs-caption-settings vjs-modal-overlay",
                    innerHTML: '<div class="vjs-tracksettings"><div class="vjs-tracksettings-colors"><div class="vjs-fg-color vjs-tracksetting"><label class="vjs-label">Foreground</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-text-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Opaque</option></select></span></div><div class="vjs-bg-color vjs-tracksetting"><label class="vjs-label">Background</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-bg-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div><div class="window-color vjs-tracksetting"><label class="vjs-label">Window</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-window-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div></div><div class="vjs-tracksettings-font"><div class="vjs-font-percent vjs-tracksetting"><label class="vjs-label">Font Size</label><select><option value="0.50">50%</option><option value="0.75">75%</option><option value="1.00" selected>100%</option><option value="1.25">125%</option><option value="1.50">150%</option><option value="1.75">175%</option><option value="2.00">200%</option><option value="3.00">300%</option><option value="4.00">400%</option></select></div><div class="vjs-edge-style vjs-tracksetting"><label class="vjs-label">Text Edge Style</label><select><option value="none">None</option><option value="raised">Raised</option><option value="depressed">Depressed</option><option value="uniform">Uniform</option><option value="dropshadow">Dropshadow</option></select></div><div class="vjs-font-family vjs-tracksetting"><label class="vjs-label">Font Family</label><select><option value="">Default</option><option value="monospaceSerif">Monospace Serif</option><option value="proportionalSerif">Proportional Serif</option><option value="monospaceSansSerif">Monospace Sans-Serif</option><option value="proportionalSansSerif">Proportional Sans-Serif</option><option value="casual">Casual</option><option value="script">Script</option><option value="small-caps">Small Caps</option></select></div></div></div><div class="vjs-tracksettings-controls"><button class="vjs-default-button">Defaults</button><button class="vjs-done-button">Done</button></div>'
                })
            }, vjs.TextTrackSettings.prototype.getValues = function() {
                var e, t = this.el(),
                    n = c(t.querySelector(".vjs-edge-style select")),
                    i = c(t.querySelector(".vjs-font-family select")),
                    o = c(t.querySelector(".vjs-fg-color > select")),
                    r = c(t.querySelector(".vjs-text-opacity > select")),
                    a = c(t.querySelector(".vjs-bg-color > select")),
                    s = c(t.querySelector(".vjs-bg-opacity > select")),
                    l = c(t.querySelector(".window-color > select")),
                    d = {
                        backgroundOpacity: s,
                        textOpacity: r,
                        windowOpacity: c(t.querySelector(".vjs-window-opacity > select")),
                        edgeStyle: n,
                        fontFamily: i,
                        color: o,
                        backgroundColor: a,
                        windowColor: l,
                        fontPercent: window.parseFloat(c(t.querySelector(".vjs-font-percent > select")))
                    };
                for (e in d)("" === d[e] || "none" === d[e] || "fontPercent" === e && 1 === d[e]) && delete d[e];
                return d
            }, vjs.TextTrackSettings.prototype.setValues = function(e) {
                var t = this.el();
                n(t.querySelector(".vjs-edge-style select"), e.edgeStyle), n(t.querySelector(".vjs-font-family select"), e.fontFamily), n(t.querySelector(".vjs-fg-color > select"), e.color), n(t.querySelector(".vjs-text-opacity > select"), e.textOpacity), n(t.querySelector(".vjs-bg-color > select"), e.backgroundColor), n(t.querySelector(".vjs-bg-opacity > select"), e.backgroundOpacity), n(t.querySelector(".window-color > select"), e.windowColor), n(t.querySelector(".vjs-window-opacity > select"), e.windowOpacity), e = (e = e.fontPercent) && e.toFixed(2), n(t.querySelector(".vjs-font-percent > select"), e)
            }, vjs.TextTrackSettings.prototype.restoreSettings = function() {
                var e;
                try {
                    e = JSON.parse(cacheManager.getGenericData("vjs-text-track-settings"))
                } catch (e) {}
                e && this.setValues(e)
            }, vjs.TextTrackSettings.prototype.saveSettings = function() {
                var e;
                if (this.player_.options().persistTextTrackSettings) {
                    e = this.getValues();
                    try {
                        vjs.isEmpty(e) ? cacheManager.deleteGenericData("vjs-text-track-settings") : cacheManager.setGenericData("vjs-text-track-settings", JSON.stringify(e))
                    } catch (e) {}
                }
            }, vjs.TextTrackSettings.prototype.updateDisplay = function() {
                var e = this.player_.getChild("textTrackDisplay");
                e && e.updateDisplay()
            }
        }(), vjs.JSON, void 0 !== window.JSON && "function" == typeof window.JSON.parse ? vjs.JSON = window.JSON : (vjs.JSON = {}, cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, vjs.JSON.parse = function(text, reviver) {
            var j;

            function walk(e, t) {
                var n, i, o = e[t];
                if (o && "object" == typeof o)
                    for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (void 0 !== (i = walk(o, n)) ? o[n] = i : delete o[n]);
                return reviver.call(e, t, o)
            }
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
                    return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")
        }), vjs.autoSetup = function() {
            var e, t, n, i = document.getElementsByTagName("video"),
                o = document.getElementsByTagName("audio"),
                r = [];
            if (i && 0 < i.length)
                for (t = 0, n = i.length; t < n; t++) r.push(i[t]);
            if (o && 0 < o.length)
                for (t = 0, n = o.length; t < n; t++) r.push(o[t]);
            if (r && 0 < r.length)
                for (t = 0, n = r.length; t < n; t++) {
                    if (!(e = r[t]) || !e.getAttribute) {
                        vjs.autoSetupTimeout(1);
                        break
                    }
                    void 0 === e.player && null !== e.getAttribute("data-setup") && videojs(e)
                } else vjs.windowLoaded || vjs.autoSetupTimeout(1)
        }, vjs.autoSetupTimeout = function(e) {
            setTimeout(vjs.autoSetup, e)
        }, "complete" === document.readyState ? vjs.windowLoaded = !0 : vjs.one(window, "load", function() {
            vjs.windowLoaded = !0
        }), vjs.autoSetupTimeout(1), vjs.plugin = function(e, t) {
            vjs.Player.prototype[e] = t
        }
    }.call(exports, __webpack_require__(5)(module))
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
    }
}, function(e, t) {
    e.exports = function() {
        throw new Error("define cannot be used indirect")
    }
}, function(e, t, n) {
    var i = n(8),
        o = "Cache Manager",
        r = 24e5,
        a = "___appnexus_video_cachemanager_generic_data___",
        s = "___appnexus_video_cachemanager_ad_token___",
        l = {},
        d = 2;

    function c(e, t) {
        switch (d) {
            case 0:
            case 1:
                break;
            default:
                n = e, i = t, l && (l[n] = i)
        }
        var n, i
    }

    function u(e) {
        switch (d) {
            case 0:
            case 1:
                return null;
            default:
                var t = e;
                if (l) return l[t]
        }
    }

    function p(e) {
        switch (d) {
            case 0:
            case 1:
                break;
            default:
                t = e, l && delete l[t]
        }
        var t
    }

    function h(e) {
        return "apn_" + e
    }
    i.debug("Using Cache Method " + d, o), e.exports = {
        setGenericData: function(e, t) {
            if (void 0 !== e && void 0 !== t) {
                e = a + e;
                try {
                    return c(e, t), !0
                } catch (e) {}
            }
            return !1
        },
        getGenericData: function(e) {
            if (void 0 !== e) return u(e = a + e)
        },
        deleteGenericData: function(e) {
            void 0 !== e && p(e = a + e)
        },
        forceStorageMethod: function(e) {
            d = e, i.debug("Forced usage of cache method " + d, o)
        },
        addAd: function(e, t) {
            if (e) {
                var t = h(t),
                    n = {};
                n.timestamp = (new Date).getTime(), n.ad = e;
                try {
                    c(t, JSON.stringify(n))
                } catch (e) {}
            }
        },
        getAd: function(e) {
            var e = h(e),
                t = (new Date).getTime();
            try {
                var n = u(e),
                    i = n && JSON.parse(n);
                p(e)
            } catch (e) {}
            return i && i.timestamp && 0 < i.timestamp && t - i.timestamp <= r ? i.ad : null
        },
        clearAd: function(e) {
            e = h(e);
            try {
                p(e)
            } catch (e) {}
        },
        setTimeToLive: function(e) {
            r = 6e4 * e
        },
        getNextAdToken: function() {
            return e = (e = u(s)) ? parseInt(e) : 0, c(s, e += 1), e;
            var e
        }
    }
}, function(e, t, n) {
    var l = n(2);

    function d(e) {
        if (e) return e.responseXML || e.responseText
    }
    e.exports = {
        debug: function() {
            l.handleLogDebugLegacySupport.apply(this, arguments)
        },
        logDebug: function() {
            l.handleLogDebugLegacySupport.apply(this, arguments)
        },
        setDebugLevel: function(e) {
            l.setDebugLevel(e)
        },
        isNotEmpty: function(e) {
            var t = !1;
            return t = null !== e && e ? 0 < e.length : t
        },
        objectToString: function(e, t) {
            var n = "null";
            if (t = void 0 !== t ? t : 0, null !== e) {
                var i, n = "OBJ[",
                    o = "";
                for (i in e) {
                    var r = e[i];
                    if ("object" == typeof r)
                        if (++t < 9) try {
                            r = this.objectToString(r)
                        } catch (e) {
                            r = "err:" + e
                        } else r = "err: max recursion hit";
                    0 < o.length && (o += ","), o += i + "=" + r
                }
                n = n + o + "]"
            }
            return n
        },
        getRandomString: function() {
            return Math.random().toString(36).substring(2)
        },
        traceVastFromXhr: function(e, t) {
            try {
                if (e)
                    if (Array.isArray(e)) {
                        if (0 < e.length) {
                            var n, i = [];
                            for (n in e) i.push(e[n].responseURL);
                            var o, r, a = e[e.length - 1];
                            a && (o = d(a), r = a.responseURL, l.info(t, "Tag load chain:", i, "\n", "Final Tag URL: ", r, "\n", "Final Tag: ", o))
                        }
                    } else {
                        var s = d(e);
                        l.info(t, "Tag URL:", e.responseURL, "\n", "Tag:", s)
                    }
            } catch (e) {}
        }
    }
}, function(e, t, n) {
    function m(e) {
        d.verbose(e, l)
    }
    var i = n(10),
        o = n(44),
        r = n(50),
        a = n(51),
        s = n(11),
        l = "PlayerManager_BuildPlayer",
        d = n(2);
    e.exports = function(e, t, d) {
        function c() {
            return /iPad|iPhone|iPod/.test(navigator.appVersion)
        }

        function u(e) {
            return !!e.isFullscreen || !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) && (!window.screenTop && !window.screenY)
        }

        function n(e, t) {
            !0 === p.playOnMouseover && (e.addEventListener("mouseenter", function() {
                !0 === d.isDoneInitialPlay && !d.explicitPaused && d.isViewable && !1 === d.isPlayingVideo && d.play()
            }), e.addEventListener("mouseleave", function() {
                d.pause()
            })), !1 !== p.audioOnMouseover && (n = 0, "number" == typeof p.audioOnMouseover && (n = p.audioOnMouseover), o = function() {
                !d.isFullscreen && d.isDoneInitialPlay && (clearTimeout(i), d.mute(), e.removeEventListener("mouseleave", o))
            }, h() || (setInterval(function() {
                d && d.isFullscreen && o && e && e.removeEventListener("mouseleave", o)
            }, 500), e.addEventListener("mouseenter", function() {
                d.isFullscreen || !d.isDoneInitialPlay || d.mutedByViewability || (i = setTimeout(function() {
                    d.unmute(), m("unmute by mouseover")
                }, n)), e.addEventListener("mouseleave", o, !1)
            }, !1))), !p.autoInitialSize || (l = navigator.appVersion.indexOf("Mobile"), r = navigator.appVersion.indexOf("Android"), -1 < l || -1 < r) || window.addEventListener("resize", function() {
                !0 === u(d) || !(!d.options.sideStreamObject || "function" != typeof d.options.sideStreamObject.shouldNotResizeWhenSideStreamActivated) && d.options.sideStreamObject.shouldNotResizeWhenSideStreamActivated() || p.targetElement && p.targetElement.style && p.targetElement.style.height && 0 === Number(p.targetElement.style.height.replace("px", "")) || setTimeout(function() {
                    var t, e;
                    !0 === u(d) || !p.disableCollapse.enabled && (d.isSkipped || d.isCompleted) || (p.width = p.targetElement.offsetWidth || p.width, (t = /android/i.test(navigator.userAgent.toLowerCase())) ? p.targetElement.style.webkitTransition = "height 0s ease" : p.targetElement.style.transition = "height 0s ease", d.resizeVideo(-1), p.targetElement.style.height = p.height + "px", (e = document.getElementById(d.videoObjectId)) && (e.style.width = p.width, e.style.height = p.height), setTimeout(function() {
                        var e = (e = (e = p.expandTime) < 0 ? 0 : e / 1e3) <= 0 ? .001 : e;
                        t ? p.targetElement.style.webkitTransition = "height " + e + "s ease" : p.targetElement.style.transition = "height " + e + "s ease"
                    }, 500))
                }, 0)
            }), e.style.cursor = "pointer", t && void 0 !== t && (c() ? (a = !1, t.ontouchmove = function() {
                a = !0
            }, t.ontouchend = function(e) {
                a ? a = !1 : s(e)
            }) : t.onclick = function(e) {
                s(e)
            }, s = function() {
                "html5" !== d.decidePlayer(p.requiredPlayer) || p.vpaid || (!0 === p.learnMore.enabled ? !0 === p.learnMore.clickToPause && (d.isPlayingVideo ? d.explicitPause() : d.explicitPlay()) : d.click())
            });
            var n, i, o, r, a, s, l = d.options && d.options.playerSkin && d.options.playerSkin.customPlayerSkin;
            c() && d.overlayPlayer && d.options && !1 === d.options.enableInlineVideoForIos && l && (d.adVideoPlayer.controlBar.fullscreenToggle.dispose(), d.adVideoPlayer.one("playing", function() {
                d.adVideoPlayer.controlBar.el().style.display = "none", setTimeout(function() {
                    d.adVideoPlayer.controlBar.el().style.display = "block"
                }, 7e3)
            }))
        }
        m("buildPlayer");
        var p = t,
            h = d.isIosInlineRequired.bind(d);
        "off" === (p = function(e) {
            switch (e.nativeControlsForTouch = !1, e.controls = !0, e.preload = "auto", e.extensions || (e.extensions = ""), a.setSizeForInitialRender(e), c() && e.sideStream && !1 === e.sideStream.enabled && (e.nonViewableBehavior = "pause"), e.initialPlayback) {
                case "auto":
                case "click":
                case "mouseover":
                    e.autoplay = !1
            }
            e.hasOwnProperty("disableTopBar") || (e.disableTopBar = !1), (s.isAndroid() || h()) && (e.controlBarPosition = "below");
            var t, n = e.endCard;
            return n && n.enabled && (n.buttons || (n.buttons = [], n.showDefaultButtons = !0, n.buttons.indexOf("replay") < 0 && e.disableCollapse && e.disableCollapse.replay && n.buttons.push({
                type: "replay"
            }), n.buttons.indexOf("learnMore") < 0 && e.learnMore && e.learnMore.enabled && (t = {
                type: "learnMore"
            }, e.learnMore.text && (t.text = e.learnMore.text), n.buttons.push(t)))), e
        }(p)).initialAudio && (d.isMuted = !0), d.options = p;
        "html5" === d.decidePlayer(p.requiredPlayer) && new(h() ? o : i)(d, n).start(), r.sharedInstance().run(t)
    }
}, function(e, t, o) {
    var r = o(11),
        a = o(2);
    e.exports = function(n, e) {
        var i = this;
        this.options = n.options, this.an_video_ad_player_id = "", this.an_video_ad_player_html5_api_id = "", this.targetElement = "", this.videojsOrigin = n.videoPlayerObj, this.dispatchEventToAdunit = n.dispatchEventToAdunit.bind(n), this.callbackForAdUnit = n.callbackForAdUnit, this.topChromeHeight = 24, this.pendingFullscreenExit = !1, this.bigbuttonUnmuteTimeout = 250, this.CONST_MESSAGE_GENERAL_ERROR = "General error reported from HTML5 video player", this.adIndicatorTextContent = this.options.adText, this.readyForSkip = !1, this.floatingSkipButton = null, this.floatingAdSkipText = null, this.isIos = r.isIos, this.isAndroid = r.isAndroid, this.isMobile = r.isMobile, this.refreshVideoLookAndFeel = r.refreshVideoLookAndFeel, this.initializeIframeAndVideo = o(12)(i, n).init, this.UIController = o(17)(i, n, e).init, this.displayVolumeControls = o(43)(i).displayVolumeControls, this.start = function() {
            a.info("Video Player: WE ARE USING HTML5 PLAYER");
            var e = (new Date).getTime() + Math.floor(1e4 * Math.random()),
                t = (i.options.techOrder = ["html5"], i.options.iframeVideoWrapperId = "iframeVideoWrapper_" + e, "an_video_ad_player_" + e),
                e = "an_video_ad_player_" + e + "_html5_api";
            i.an_video_ad_player_id = t, i.an_video_ad_player_html5_api_id = e, n.divIdForVideo = t, n.videoId = e, i.targetElement = i.options.targetElement, i.initializeIframeAndVideo(i.UIController)
        }
    }
}, function(e, t, n) {
    function i() {
        return /iphone/i.test(navigator.userAgent.toLowerCase())
    }

    function o() {
        return i() || /ipad/i.test(navigator.userAgent.toLowerCase())
    }

    function r() {
        return -1 < navigator.appVersion.indexOf("Mobile") || -1 < navigator.appVersion.indexOf("Android")
    }

    function d(e) {
        var t = !1;
        try {
            t = !isNaN(parseFloat(e)) && isFinite(e)
        } catch (e) {
            c(e)
        }
        return t
    }
    var a = "PlayerManager_Utils",
        s = n(2),
        c = function(e) {
            s.verbose(e, a)
        };
    e.exports = {
        isPortrait: function() {
            return window.innerHeight > window.innerWidth
        },
        isIphone: i,
        isIos: o,
        isIpad: function() {
            return navigator.userAgent.toLowerCase().match(/mac/) && navigator.maxTouchPoints && 2 < navigator.maxTouchPoints
        },
        isAndroid: function() {
            return /android/i.test(navigator.userAgent.toLowerCase())
        },
        isMobile: r,
        getIOSVersion: function() {
            var e = navigator.userAgent.match(/OS (\d+)_/i);
            if (e && e[1]) return e[1]
        },
        refreshVideoLookAndFeel: function(e, t) {
            !t.isSkipped && t.isExpanded && (e.autoInitialSize && (e.width = e.targetElement.offsetWidth), t.resizeVideo(-1, r()), e.targetElement.style.height = e.height + "px")
        },
        fireEvent: function(e, t) {
            var n = document.createEvent("HTMLEvents");
            n.initEvent(t, !0, !0), n.eventName = t, e.dispatchEvent(n)
        },
        DelayEventHandler: function() {
            this.queue = [], this.id = "", this.isSuppress = !1, this.isPaused = !1, this.isCompleted = !1;
            var t = !1;
            this.push = function(e) {
                !1 === this.isSuppress && "function" == typeof e ? e() : t ? t = !1 : !1 === this.isPaused && this.queue.push(e)
            }, this.start = function() {
                c("delay event starts");
                var t = this,
                    n = function() {
                        var e;
                        !1 === t.isSuppress && (e = t.queue.shift()) && "function" == typeof e && e(), setTimeout(function() {
                            !1 === t.isCompleted && n()
                        }, 100)
                    };
                n()
            }, this.ImmediateStop = function() {
                this.isCompleted = !0
            }, this.lazyTerminate = function() {
                var e = this;
                this.queue.push(function() {
                    e.ImmediateStop()
                })
            }, this.suppress = function(e) {
                this.isSuppress = e
            }, this.clearQueue = function() {
                this.queue = []
            }, this.ignoreNextQueue = function() {
                t = !0
            }
        },
        isEmpty: function(e) {
            return void 0 === e || "" === e || !1 === e || null === e
        },
        unique: function() {
            var n = {};
            return {
                pushAndCheck: function(e, t) {
                    e = e + "_" + t;
                    return !n[e] && (n[e] = !0)
                }
            }
        },
        getMsecTime: function(e, t) {
            try {
                var n, i = e.indexOf("%");
                if (0 < i) return t && 0 < t && 0 <= (n = Number(e.substring(0, i))) && n <= 100 ? Math.round(t * (n / 100)) : -1;
                var o = 0 < (i = e.indexOf(".")) ? Number(e.substring(i + 1).substr(0, 3)) : 0,
                    r = (e = 0 < i ? e.substring(0, i) : e).split(":");
                if (3 !== r.length) return -1;
                for (var a = 0; a < r.length; a++) {
                    var s = r[a];
                    if (s && !1 === d(s) || parseInt(s) < 0) return -1
                }
                var l = 1e3 * (3600 * Number(r[0]) + 60 * Number(r[1]) + Number(r[2])) + o;
                return !t || l <= t ? l : -1
            } catch (e) {
                return c(e), -1
            }
        },
        isNumeric: d,
        makeIframeFlexbileSize: function(t) {
            o() && t.options.enableInlineVideoForIos && setTimeout(function() {
                var e = t.iframeVideoWrapper || document.getElementById(t.options.iframeVideoWrapperId);
                e.style.width = "", e.style.height = ""
            }, 0)
        },
        isEmptyAndObject: function(e) {
            if (null != e && 0 !== e.length && "" !== e) {
                if ("object" != typeof e) return !1;
                if (0 < e.length) return !1;
                for (var t in e)
                    if (e.hasOwnProperty(t)) return !1
            }
            return !0
        },
        elementsOverlap: function(e, t) {
            return e && t && e.getBoundingClientRect && t.getBoundingClientRect ? (e = e.getBoundingClientRect(), t = t.getBoundingClientRect(), !(e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom)) : (s.info("Utils.elementsOverlap expects two html elements", a), !1)
        },
        convertTimeSecondsToString: function(e) {
            var e = 1e3 * e,
                t = parseInt(e % 1e3),
                n = parseInt(e / 1e3 % 60),
                i = parseInt(e / 6e4 % 60),
                e = parseInt(e / 36e5 % 24);
            return (e = e < 10 ? "0" + e : e) + ":" + (i = i < 10 ? "0" + i : i) + ":" + (n = n < 10 ? "0" + n : n) + "." + (t = t < 10 ? "00" + t : t < 100 ? "0" + t : t)
        }
    }
}, function(e, t, n) {
    function h(e) {
        o.verbose(i, e)
    }

    function m(e) {
        o.debug(i, e)
    }

    function f(e) {
        o.log(i, e)
    }
    var i = "[PlayerManager_InitializeElements]",
        o = n(2),
        v = n(13);
    e.exports = function(u, p) {
        return {
            init: function(d) {
                f("init");
                var c, e, t, n = !1;
                if (p.autoplayHandler.isRequiredFakeAndroidAutoStart(u.options.initialPlayback, u.options.initialAudio, u.options.automatedTestingOnlyAndroidSkipTouchStart, !0)) {
                    h("Setting correct iframe for androids 'fake' autostart");
                    for (var i = u.options.targetElement.getElementsByTagName("iframe"), o = 0; o < i.length; o++) {
                        var r = i[o],
                            a = p.autoplayHandler.APN_MOBILE_IFRAME_NAME;
                        if (u.isAndroid() && u.options.firstAdAttempted && u.options.adAttempt && (a = p.autoplayHandler.APN_MOBILE_IFRAME_NAME + "_Waterfall_" + u.options.adAttempt), r && r.name && r.name === a) {
                            n = !0, c = r;
                            break
                        }
                    }
                }
                if (!n) {
                    if (u.options.fallbackNotFirstStep) {
                        var s = u.targetElement.getElementsByTagName("iframe");
                        if (s && 0 < s.length)
                            for (var l = 0; l < s.length; l++) u.targetElement.removeChild(s[l])
                    }
                    h("Creating new iframe if one is not already created."), (c = document.createElement("iframe")).src = "about:blank", "native" === u.options.adType && u.options.banners && u.options.banners.preShow && (c.style.opacity = .01), u.targetElement.appendChild(c);
                    c.contentWindow.document.open(), c.contentWindow.document.write("<html></html>"), c.contentWindow.document.close()
                }
                c ? (c.id = u.options.iframeVideoWrapperId, c.style.width = u.options.width + "px", c.style.height = u.options.height + "px", c.style.display = "", n || m("Html5Player created new iframe: " + u.options.iframeVideoWrapperId), c.setAttribute("allowfullscreen", "true"), c.setAttribute("webkitallowfullscreen", "true"), c.setAttribute("mozallowfullscreen", "true"), u.options.playerSkin && u.options.playerSkin.controlBarColor && c.contentWindow && c.contentWindow.document && c.contentWindow.document.body && c.contentWindow.document.body.style && (c.contentWindow.document.body.style.background = p.options.playerSkin.controlBarColor), t = !(e = function() {
                    var e, t, i, n, o = c.contentWindow.document,
                        r = c.contentWindow.window,
                        a = (m("Creating and styling top chrome bar"), o.createElement("div")),
                        s = (a.id = "top_chrome", a.style.height = u.options.playerSkin && "number" == typeof u.options.playerSkin.dividerHeight ? u.topChromeHeight - u.options.playerSkin.dividerHeight + "px" : u.topChromeHeight - 1 + "px", a.style.width = u.options.width + "px", a.style.marginRight = "auto", a.style.marginLeft = "auto", a.className = "video-js vjs-default-skin", m("Generating and styling video object"), !1);

                    function l(e) {
                        for (var t, n = 0; n < e.length; n++) e[n].body && "HeavyAdIntervention" === e[n].body.id && (t = "Heavy Ad Intervention by browser detected.  Browser Message: " + e[n].body.message, f(t), i.destroyWithoutSkip(!0, t, null, 903))
                    }
                    p.autoplayHandler.isRequiredFakeAndroidAutoStart(u.options.initialPlayback, u.options.initialAudio, u.options.automatedTestingOnlyAndroidSkipTouchStart, !0) && (t = c.contentWindow[p.autoplayHandler.APN_MOBILE_VIDEO_PLACEMENT_ID]) && (s = !0, e = t), (e = s ? e : o.createElement("video")).id = u.an_video_ad_player_id, e.className = "video-js vjs-default-skin", e.style.marginRight = "auto", e.style.marginLeft = "auto", a.style["z-index"] = e.style["z-index"] + 1, r.ReportingObserver && (i = p, (n = new(t = r).ReportingObserver(l, {
                        buffered: !0
                    })).observe(), t.addEventListener("unload", function() {
                        l(n.takeRecords())
                    })), !1 === u.options.vpaid && (m("Generating source object"), (s = o.createElement("source")).type = u.options.video.type, s.src = u.options.videoUrl, u.options.vpaid || e.appendChild(s)), m("Injecting required elements into iframe"), u.options.disableTopBar || (o.body.appendChild(a), "native" === u.options.adType && (a.style.display = "none")), o.body.appendChild(e), r.videojs = u.videojsOrigin, u.options.vpaid && ((s = o.createElement("script")).innerHTML = p.videojs_vpaid, o.head.appendChild(s)), u.options.verifications && (p.verificationManager = new v(u.options.verifications, {
                        parentDoc: o,
                        videoElement: e,
                        viewableImpression: u.options.viewableImpression,
                        adServingId: u.options.adServingId,
                        player: p
                    }), p.verificationManager.init(), p.verificationManager.start()), o.body.style.margin = "0px", o.body.style.overflow = "hidden", d(c)
                }), -1 < navigator.userAgent.toLowerCase().indexOf("firefox") && !1 === p.overlayPlayer ? (c.onload = function() {
                    e(), t = !0
                }, setTimeout(function() {
                    !1 === t && (h("destroying due to an error in firefox"), p.destroyWithoutSkip(!0, u.CONST_MESSAGE_GENERAL_ERROR, null, 900))
                }, u.options.vpaidTimeout)) : e()) : m("iframeVideoWrapper Doesn't exist.")
            }
        }
    }
}, function(e, t, n) {
    var m = n(14),
        i = n(16),
        f = "[PlayerManager_Verifications]",
        v = n(2);
    Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        enumerable: !1,
        value: function(t) {
            return 0 < this.filter(function(e) {
                return e == t
            }).length
        }
    }), e.exports = function(e, d) {
        var c = e,
            u = d,
            p = [],
            h = new i(e, d.player);
        return {
            init: function() {
                v.debug(f, "init verifications");
                for (var e = [], t = 0; t < c.length; t++) {
                    var n = c[t],
                        i = !0;
                    if (n.jsResources)
                        for (var o, r = 0; r < n.jsResources.length; r++) "OMID" === n.jsResources[r].framework.toUpperCase() && (i = !1, e.includes(n.vendor) || (e.push(n.vendor), o = {
                            vendor: n.vendor,
                            url: n.jsResources[r].url,
                            viewableImpression: u.viewableImpression,
                            verificationParams: n.verificationParameters,
                            adServingId: u.adServingId,
                            started: !1
                        }, "appnexus.com-omid" === n.vendor && 0 < n.jsResources[r].url.indexOf("trk.js") && (o.xdrViewabilityAPI = !0, o.a = "" + (new Date).getTime() + Math.round(1e3 * Math.random()), d.player.options.data.durationMsec ? o.duration = d.player.options.data.durationMsec / 1e3 : d.player.options.data.vastDurationMsec ? o.duration = d.player.options.data.vastDurationMsec / 1e3 : d.player.adVideoPlayer && d.player.adVideoPlayer.player && "function" == typeof d.player.adVideoPlayer.player ? o.duration = d.player.adVideoPlayer.player().duration() / 1e3 : o.duration = 0, o.wnd = u.parentDoc.defaultView), p.push(o), v.debug(f, "verification is OMID")));
                    n.executableResources, i && (h.trackEvent(n.vendor, "verificationNotExecuted", {
                        REASON: 2
                    }), v.debug(f, "verification is not OMID"))
                }
                for (var a, s, l, t = 0; t < p.length; t++) p[t].xdrViewabilityAPI ? (a || (v.debug(f, "Load Xandr VPAID-less Viewability script"), (a = u.parentDoc.createElement("script")).onerror = function(e) {
                    return function() {
                        h.trackEvent(e.vendor, "verificationNotExecuted", {
                            reason: 3
                        }), v.error(f, "failed to load JS resource for Xandr Viewability API"), e.loadFailed = !0
                    }
                }(p[t]), a.src = p[t].url, a.onload = function() {
                    d.player.options.viewability = null
                }, u.parentDoc.head.appendChild(a)), p[t].wnd.xdrViewApi || (p[t].wnd.xdrViewApi = {
                    inits: [],
                    events: []
                }), v.debug(f, "Init Xandr VPAID-less Viewability: " + p[t].a), p[t].wnd.xdrViewApi.inits.push({
                    p: p[t].verificationParams,
                    a: p[t].a,
                    an: u.videoElement,
                    imn: "Video Framework",
                    imv: "NA",
                    d: p[t].duration
                })) : ((l = u.parentDoc.createElement("iframe")).src = "about:blank", u.parentDoc.body.appendChild(l), l.contentWindow.document.open(), l.contentWindow.document.write("<html></html>"), l.contentWindow.document.close(), s = l.contentWindow.document.body, p[t].scriptContainer = l, p[t].omidManager = new m(p[t], {
                    frameWin: l.contentWindow,
                    videoElement: u.videoElement
                }), p[t].omidManager.init(), (l = l.contentWindow.document.createElement("script")).src = p[t].url, l.onerror = function(e) {
                    return function() {
                        h.trackEvent(e, "verificationNotExecuted", {
                            reason: 3
                        }), v.error(f, "failed to load JS resource for OMID")
                    }
                }(p[t].vendor), l.async = !0, l.type = "text/javascript", s.appendChild(l))
            },
            start: function() {
                v.debug(f, "start verifications"), p.forEach(function(e) {
                    e.started || (e.omidManager ? (e.omidManager.start(), e.started = !0) : e.xdrViewabilityAPI && !e.loadFailed && (e.started = !0))
                })
            },
            dispatchEvent: function(o, r, a) {
                var s = {
                    video_start: "start",
                    video_complete: "complete",
                    video_pause: "pause",
                    video_resume: "resume",
                    "user-close": "skip",
                    video_skipped: "skip",
                    video_skip: "skip",
                    "audio-mute": "sound_off",
                    "audio-unmute": "sound_on",
                    video_mute: "sound_off",
                    video_unmute: "sound_on",
                    "video-exit-fullscreen": "fullscreen_off",
                    "ad-click": "click",
                    "ad-expand": "expand",
                    "ad-collapse": "collapse"
                };
                v.debug(f, "try to dispatch OMID event: " + o + ", data: ", r), p.forEach(function(e) {
                    var t, n, i;
                    e.started && (e.omidManager ? e.omidManager.dispatchEvent(o, r) : e.xdrViewabilityAPI && !e.loadFailed && (t = a, n = r, "" !== (t = i = "" !== (i = s.hasOwnProperty(t) ? s[t] : "") || "fullscreenchange" !== t && "video_fullscreen" !== t ? i : "fullscreen" === n.state ? "fullscreen_on" : "fullscreen_off") && (v.debug(f, "Xandr VPAID-less Viewability event: " + t), e.wnd.xdrViewApi.events.push({
                        c: t,
                        a: e.a,
                        d: (new Date).getTime()
                    }))))
                })
            },
            destroy: function() {
                v.debug(f, "destroy verifications"), p.forEach(function(e) {
                    e.started && e.omidManager && e.omidManager.destroy()
                })
            }
        }
    }
}, function(e, t, n) {
    var m = n(15),
        f = "[PlayerManager_Verification_OMID]",
        v = n(2);
    e.exports = function(e, t) {
        var n, i, o, r = e,
            a = t,
            s = !1,
            l = (o = (new Date).getTime(), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = (o + 16 * Math.random()) % 16 | 0;
                return o = Math.floor(o / 16), ("x" === e ? t : 3 & t | 8).toString(16)
            })),
            d = null,
            c = [];

        function u(e, t) {
            n = e, i = t, s && h()
        }

        function p(e, t) {
            d && d.addListener(e, t)
        }

        function h() {
            v.debug(f, "start OMID session");
            var e = {
                    adSessionId: l,
                    type: "sessionStart",
                    timestamp: Date.now(),
                    data: {
                        context: (e = {
                            apiVersion: "1.0",
                            environment: "web",
                            accessMode: "full",
                            videElement: a.videoElement,
                            adSessionType: "html",
                            adCount: 1,
                            omidJsInfo: {
                                omidImplementer: "videoads-ad-video-player-manager",
                                serviceVersion: "3.5.19"
                            }
                        }, r.adServingId && (e.adServingId = r.adServingId), e)
                    }
                },
                t = i === r.vendor ? r.verificationParams : null;
            t && (e.data.verificationParameters = t), d = new m(l, n), n(e)
        }
        return {
            init: function() {
                v.debug(f, "expose OMID interface"), a.frameWin.omid3p = {
                    registerSessionObserver: u,
                    addEventListener: p
                }
            },
            start: function() {
                s = !0, n && h()
            },
            dispatchEvent: function(n, e) {
                d ? (0 < c.length && (c.forEach(function(e) {
                    var t;
                    t = "dispatch from cache OMID event " + n, v.debug(f, t), d.fireEvent(e.eventName, e.data)
                }), c = []), v.debug(f, "dispatch OMID event " + n), d.fireEvent(n, e)) : (v.debug(f, "save in cache OMID event " + n), c.push({
                    event: n,
                    data: e
                }))
            },
            destroy: function() {
                var e;
                v.debug(f, "terminate OMID session"), n && s && (e = {
                    adSessionId: l,
                    type: "sessionFinish",
                    timestamp: Date.now()
                }, n(e))
            }
        }
    }
}, function(e, t) {
    e.exports = function(e, t) {
        var i = e,
            o = t,
            r = {},
            a = ["sessionStart", "sessionError", "sessionFinish"],
            s = ["impression"],
            l = ["loaded", "start", "firstQuartile", "midpoint", "thirdQuartile", "complete", "pause", "resume", "bufferStart", "bufferFinish", "skipped", "volumeChange", "playerStateChange", "adUserInteraction"],
            d = ["geometryChange"],
            c = ["video"];

        function u(e, t) {
            return !!e.find(function(e) {
                return t === e
            })
        }

        function p(e, t) {
            var n = {
                    adSessionId: i,
                    type: e,
                    timestamp: Date.now()
                },
                e = function(e, t) {
                    var n = null;
                    switch (e) {
                        case "sessionError":
                            n = {}, t && t.type && (n.errorType = t.type), t && t.message && (n.message = t.message);
                            break;
                        case "impression":
                            n = {
                                mediaType: "video"
                            };
                            break;
                        case "loaded":
                            (n = {}).skippable = t.skippable, n.skippable && (n.skipOffset = parseInt(t.skipOffset / 1e3 + .5)), n.autoPlay = t.autoPlay, n.position = t.position;
                            break;
                        case "start":
                            (n = {}).duration = t.duration, n.videoPlayerVolume = t.volume;
                            break;
                        case "volumeChange":
                            (n = {}).videoPlayerVolume = t.volume;
                            break;
                        case "playerStateChange":
                            (n = {}).state = t.state;
                            break;
                        case "adUsetInteraction":
                            (n = {}).interactionType = t.interactionType
                    }
                    return n
                }(e, t);
            return e && (n.data = e), n
        }

        function h(e, t) {
            r.hasOwnProperty(e) || (r[e] = []), r[e].push(t)
        }
        return {
            addListener: function(e, t) {
                var n;
                (u(a, n = e) || u(s, n) || u(l, n) || u(d, n) || u(c, n)) && (u(c, e) ? l.forEach(function(e) {
                    h(e, t)
                }) : h(e, t))
            },
            fireEvent: function(e, t) {
                var n;
                r.hasOwnProperty(e) && (n = p(e, t), "sessionError" === e ? o(n) : r[e].forEach(function(e) {
                    e(n)
                }))
            }
        }
    }
}, function(e, t, n) {
    var l = n(2);
    e.exports = function(e, o) {
        for (var i = {}, t = 0; t < e.length; t++) {
            var n = e[t].vendor;
            n && (i[n] = e[t].trackingEvents)
        }

        function r(e, t) {
            var n = e;
            if (t)
                for (var i in t) n = n.split("[" + i.toUpperCase() + "]").join(encodeURIComponent(t[i]));
            return n = function(e) {
                for (var t in s) {
                    var n;
                    0 <= e.indexOf("[" + t + "]") && (null === (n = s[t]) && (n = o ? o.resolveMacro(t) : -1), e = e.split("[" + t + "]").join(encodeURIComponent(n)))
                }
                return e
            }(n)
        }
        var a, s = {
            TIMESTAMP: (new Date).toISOString(),
            MEDIAPLAYHEAD: null,
            BREAKPOSITION: null,
            ADCOUNT: null,
            TRANSACTIONID: (a = (new Date).getTime(), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = (a + 16 * Math.random()) % 16 | 0;
                return a = Math.floor(a / 16), ("x" === e ? t : 3 & t | 8).toString(16)
            })),
            PLACEMENTTYPE: null,
            IFA: -1,
            IFATYPE: -1,
            CLIENTUA: null,
            DEVICEIP: null,
            LATLONG: -1,
            PAGEURL: function() {
                try {
                    return top && top.location && top.location.href ? top.location.href : -1
                } catch (e) {
                    return -1
                }
            }(),
            APPNAME: -1,
            APIFRAMEWORKS: "2,7",
            EXTENSIONS: -1,
            PLAYERCAPABILITIES: null,
            CLICKTYPE: null,
            PLAYERSTATE: null,
            PLAYERSIZE: null,
            ADPLAYHEAD: null,
            ASSETURI: null,
            PODSEQUENCE: null,
            CLICKPOS: -1,
            LIMITADTRACKING: null
        };
        return {
            trackEvent: function(e, t, n) {
                l.debug("[PlayerManager_Verification_Tracking]", "track verification event: " + t), i && i[e] && i[e].hasOwnProperty(t) && i[e][t].forEach(function(e) {
                    e = r(e, n);
                    (new Image).src = e
                })
            }
        }
    }
}, function(e, t, r) {
    var a = r(11),
        s = r(18),
        l = r(2);
    e.exports = function(n, i, o) {
        return {
            init: function(e) {
                l.log("Video Player: init");
                var t = e.contentWindow.document.getElementById(n.an_video_ad_player_id);
                if (i.iframeVideoWrapper = e, n.options.vpaid) try {
                    i.options.showVpaidIcons = !1, s(i)
                } catch (e) {
                    l.error("Video Player: " + e)
                } else n.options.isWaterfall && n.options.plugins && (n.options.plugins = null);
                "autoWithFallbackPlay" === n.options.initialPlayback && (n.options.autoplay = !0, n.options.muted = !0), n.videojsOrigin(t, n.options, function() {
                    r(20)(n, i).init(this, e, o), !1 === n.options.vpaid && this.src(n.options.videoUrl), r(40)(n, i).init(this, a, 24)
                }), n.options.vpaid && i && i.adVideoPlayer && i.adVideoPlayer.trigger && i.adVideoPlayer.trigger("an.doneInitialize")
            }
        }
    }
}, function(e, t, n) {
    function v(e, t) {
        i.error("[" + (new Date).toISOString() + "] " + e, t)
    }

    function g(e) {
        i.warn("JS VPAID: " + e)
    }

    function y(e) {
        i.info("JS VPAID: " + e)
    }

    function A(e) {
        i.log("JS VPAID: " + e)
    }

    function b(e) {
        i.debug("JS VPAID: " + e)
    }

    function w(e) {
        i.verbose("JS VPAID: " + e)
    }
    var k = n(11),
        i = n(2),
        o = n(19),
        T = "VPAID AdError reported from JS VPAID player";
    e.exports = function(c) {
        var a = c.dispatchEventToAdunit.bind(c),
            s = c.options,
            e = c.videoPlayerObj,
            u = s.videoUrl,
            p = c.callbackForAdUnit,
            h = c.iframeVideoWrapper,
            m = !1,
            f = o().browser.name.toLowerCase();
        !k.isIos() && !k.isAndroid() && h && s.overlayPlayer && "auto" === s.initialPlayback && ("edge" === f || "ie" === f ? h.style.visibility = "hidden" : h.style.display = "none"), s.plugins = {
            "ads-setup": {}
        }, s.vpaidImpressionFired = !1, s.isWaterfall && s.firstAdAttempted && (s.delayExpandUntilVPAIDImpression || s.isExpanded) && (s.delayExpandUntilVPAIDInit = !1), e.plugin("ads-setup", function(e) {
            b(e);

            function t() {
                var e, t;
                c.options.overlayPlayer && (e = d, t = k.isAndroid() ? 1e3 : 500, setTimeout(function() {
                    e.paused() && e.tech && e.tech.el() && e.tech.el().src && e.trigger("pause")
                }, t))
            }
            var l, n, e = 5e3,
                i = (void 0 !== s.vpaidTimeout && (e = s.vpaidTimeout), {
                    error: v,
                    warn: g,
                    info: y,
                    log: A,
                    debug: b,
                    verbose: w
                }),
                o = k.isIos() || k.isAndroid(),
                d = this,
                r = (c.options.overlayPlayer && c.resizeVideo(), d.vastClient({
                    url: "",
                    jsVpaidUrl: u,
                    playAdAlways: !0,
                    adCancelTimeout: e,
                    adsEnabled: !0,
                    adParameters: s.adParameters,
                    clickUrl: s.clickUrls[0],
                    delayExpandUntilVPAIDInit: s.delayExpandUntilVPAIDInit,
                    terminateUnresponsiveVPAIDCreative: s.terminateUnresponsiveVPAIDCreative,
                    disableControlsOnMouseover: o,
                    initialAudio: s.initialAudio,
                    loggerCallback: i,
                    vpaidEventCallback: function(e, t) {
                        var n = {
                            AdImpression: "video_impression",
                            AdVideoStart: "video_start",
                            AdVideoFirstQuartile: "video-first-quartile",
                            AdVideoMidpoint: "video-mid",
                            AdVideoThirdQuartile: "video-third-quartile",
                            AdVideoComplete: "video_complete",
                            AdSkipped: "video_skip",
                            AdClickThru: "ad-click"
                        };
                        "AdImpression" === e && (s.vpaidImpressionFired = !0), "AdClickThru" === e ? t && t.playerHandles ? t.hasOwnProperty("url") && t.url && 0 < t.url.length ? c.click(t.url) : c.click() : a({
                            name: "ad-click",
                            trackClick: !0
                        }) : n[e] && a({
                            name: n[e]
                        }), c.notifyVpaidEvent(e, t), "AdVideoComplete" === e && c.adVideoPlayer.trigger("customDestroy")
                    },
                    delayExpandUntilVPAIDImpression: s.delayExpandUntilVPAIDImpression,
                    vpaidEnvironmentVars: s.vpaidEnvironmentVars,
                    overlayPlayer: s.overlayPlayer,
                    mobileSDK: s.mobileSDK,
                    initialPlayback: s.initialPlayback,
                    controlBarPosition: s.controlBarPosition
                }));
            d.on("reset", function() {
                d.options().plugins["ads-setup"].adsEnabled ? r.enable() : r.disable()
            }), d.on("vast.adError", function(e) {
                !0 !== m && (m = !0, d.loadingSpinner.hide(), c.destroyWithoutSkip(!0, "VAST AdError reported from JS VPAID player", !1, 901), (e = e.error) && e.message && b("JS-VPAID Error (vast.adError)" + e.message))
            }), d.on("vpaid.AdVideoStart", function() {
                var t, n = c && c.adVideoPlayer && c.adVideoPlayer.player ? c.adVideoPlayer.player().duration() : 0;
                n && 0 < n ? c.setVastAttribute() : (t = !1, d.one("loadedmetadata", function() {
                    var e;
                    t = !0, (n = c && c.adVideoPlayer && c.adVideoPlayer.player ? c.adVideoPlayer.player().duration() : 0) && 0 < n ? c.setVastAttribute() : (e = (e = c.options.data.vastDurationMsec) && 0 < e ? Math.round(e / 1e3) : 0, c.setVastAttribute(e))
                }), setTimeout(function() {
                    var e;
                    !1 === t && (e = (e = c.options.data.vastDurationMsec) && 0 < e ? Math.round(e / 1e3) : 0, c.setVastAttribute(e))
                }, 3e3))
            }), d.on("vast.adTimeout", function() {
                d.loadingSpinner.hide(), c.destroyWithoutSkip(!0, T, !0, 901)
            }), d.on("vpaid.AdError", function(e) {
                !0 !== m && (m = !0, d.loadingSpinner.hide(), c.destroyWithoutSkip(!0, T, !1, 901), (e = e.error) && e.message && b("JS-VPAID Error (vpaid.AdError) " + e.message))
            }), d.on("vast.adSkip", function() {
                c.destroy(), b("vast.adSkip")
            }), d.on("vpaid.AdSkipped", function() {
                c.destroy(), b("vpaid.AdSkipped")
            }), d.on("vpaid.AdIcons", function(e) {
                e && e.hasOwnProperty("adIcons") && e.adIcons || (c.options.showVpaidIcons = !0)
            }), d.on("vast.adsCancel", function() {
                m || (m = !0, c.destroyWithoutSkip(), b("adsCancel"))
            }), d.on("vpaid.AdStopped", function() {
                b("vpaid.AdStopped"), !0 === s.disableCollapse.replay ? c.resetVpaid() : (d.loadingSpinner.hide(), d.controlBar.hide(), d.bigPlayButton.hide(), c.isCompleted || (s.disableCollapse.enabled || c.destroyWithoutSkip(), c.isCompleted = !0))
            }), d.one("vpaid.AdStarted", function() {
                t(), h && s.overlayPlayer && ("edge" === f || "ie" === f ? h.style.visibility = "visible" : h.style.display = "block"), d.loadingSpinner.hide()
            }), d.one("vpaid.AdImpression", function() {
                t(), d.controlBar.show(), s.showBigPlayButton && d.bigPlayButton.show()
            }), p.cbWhenReady && (l = function() {
                b("callcbWhenReady (Impression, AdStarted are delivered"), c.isReadyToExpandForMobile = !0, d.tech.removeControlsListeners();
                var e = c.options.width / c.options.height;
                c.resizeVideo(e, k.isMobile()), s.isWaterfall && s.firstAdAttempted && s.delayExpandUntilVPAIDInit && !s.isExpanded && "auto" !== s.initialPlayback && d.bigPlayButton.show(), "function" == typeof p.cbWhenReady && p.cbWhenReady(c)
            }, n = function() {
                function e() {
                    o && r && a && !1 === n && (n = !0, setTimeout(l, 500))
                }
                var t, n = !1,
                    i = d.volume(),
                    o = !1,
                    r = !1,
                    a = !1,
                    s = !1;
                k.isIos() ? (d.on("timeupdate", function() {
                    0 < d.player().currentTime() && !1 === s && !1 === c.isAlreadyPlaingForVPAID && (a = s = !0, d.pause(), e(), b("pause by timeupdate when delayExpandUntilVPAIDImpression is true"))
                }), t = function() {
                    0 < d.player().currentTime() && !1 === s && !1 === c.isAlreadyPlaingForVPAID && (a = s = !0, d.pause(), e(), b("pause by timer when delayExpandUntilVPAIDImpression is true")), n || setTimeout(t, 100)
                }, setTimeout(t, 100)) : d.one("vpaid.AdVideoStart", function() {
                    !1 === c.isAlreadyPlaingForVPAID && d.pause(), d.volume(i), a = !0, e()
                }), d.one("vpaid.AdStarted", function() {
                    o = !0, e()
                }), d.one("vpaid.AdImpression", function() {
                    r = !0, e()
                }), d.volume(0), c.delayEventHandler.ignoreNextQueue(), k.isIos() ? (c.adVideoPlayer.trigger("play"), c.isDoneInitialPlay = !0) : d.play()
            }, e = function() {
                (s.delayExpandUntilVPAIDImpression ? n : l)()
            }, (!s.isWaterfall || !s.firstAdAttempted) && s.delayExpandUntilVPAIDInit ? d.one("an.readytogovpaid", e) : d.one("an.doneInitialize", e))
        })
    }
}, function(e, t, n) {
    function A(e, t) {
        var n, i, u = "function",
            p = "object",
            o = "model",
            r = "name",
            a = "type",
            s = "vendor",
            l = "version",
            d = "console",
            c = "mobile",
            h = "tablet",
            m = "smarttv",
            f = "wearable",
            v = {
                extend: function(e, t) {
                    var n, i = {};
                    for (n in e) t[n] && t[n].length % 2 == 0 ? i[n] = t[n].concat(e[n]) : i[n] = e[n];
                    return i
                },
                has: function(e, t) {
                    return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                },
                lowerize: function(e) {
                    return e.toLowerCase()
                },
                major: function(e) {
                    return "string" == typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0
                },
                trim: function(e) {
                    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                }
            },
            g = {
                rgx: function() {
                    for (var e, t, n, i, o = {}, r = 0, a = arguments, s = 0; s < a[1].length; s++) o[typeof(t = a[1][s]) == p ? t[0] : t] = void 0;
                    for (; r < a.length && !n;) {
                        for (var l = a[r], d = a[r + 1], c = e = 0; c < l.length && !n;)
                            if (n = l[c++].exec(this.getUA()))
                                for (s = 0; s < d.length; s++) i = n[++e], typeof(t = d[s]) == p && 0 < t.length ? 2 === t.length ? typeof t[1] == u ? o[t[0]] = t[1].call(this, i) : o[t[0]] = t[1] : 3 === t.length ? typeof t[1] != u || t[1].exec && t[1].test ? o[t[0]] = i ? i.replace(t[1], t[2]) : void 0 : o[t[0]] = i ? t[1].call(this, i, t[2]) : void 0 : 4 === t.length && (o[t[0]] = i ? t[3].call(this, i.replace(t[1], t[2])) : void 0) : o[t] = i || void 0;
                        r += 2
                    }
                    return o
                },
                str: function(e, t) {
                    for (var n in t)
                        if (typeof t[n] == p && 0 < t[n].length) {
                            for (var i = 0; i < t[n].length; i++)
                                if (v.has(t[n][i], e)) return "?" === n ? void 0 : n
                        } else if (v.has(t[n], e)) return "?" === n ? void 0 : n;
                    return e
                }
            },
            y = {
                browser: {
                    oldsafari: {
                        version: {
                            "1.0": "/8",
                            1.2: "/1",
                            1.3: "/3",
                            "2.0": "/412",
                            "2.0.2": "/416",
                            "2.0.3": "/417",
                            "2.0.4": "/419",
                            "?": "/"
                        }
                    }
                },
                device: {
                    amazon: {
                        model: {
                            "Fire Phone": ["SD", "KF"]
                        }
                    },
                    sprint: {
                        model: {
                            "Evo Shift 4G": "7373KT"
                        },
                        vendor: {
                            HTC: "APA",
                            Sprint: "Sprint"
                        }
                    }
                },
                os: {
                    windows: {
                        version: {
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        }
                    }
                }
            },
            d = {
                browser: [
                    [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                    [r, l],
                    [/(opios)[\/\s]+([\w\.]+)/i],
                    [
                        [r, "Opera Mini"], l
                    ],
                    [/\s(opr)\/([\w\.]+)/i],
                    [
                        [r, "Opera"], l
                    ],
                    [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],
                    [r, l],
                    [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                    [
                        [r, "IE"], l
                    ],
                    [/(edge)\/((\d+)?[\w\.]+)/i],
                    [r, l],
                    [/(yabrowser)\/([\w\.]+)/i],
                    [
                        [r, "Yandex"], l
                    ],
                    [/(comodo_dragon)\/([\w\.]+)/i],
                    [
                        [r, /_/g, " "], l
                    ],
                    [/(micromessenger)\/([\w\.]+)/i],
                    [
                        [r, "WeChat"], l
                    ],
                    [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                    [l, [r, "MIUI Browser"]],
                    [/\swv\).+(chrome)\/([\w\.]+)/i],
                    [
                        [r, /(.+)/, "$1 WebView"], l
                    ],
                    [/android.+samsungbrowser\/([\w\.]+)/i, /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                    [l, [r, "Android Browser"]],
                    [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i],
                    [r, l],
                    [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /juc.+(ucweb)[\/\s]?([\w\.]+)/i],
                    [
                        [r, "UCBrowser"], l
                    ],
                    [/(dolfin)\/([\w\.]+)/i],
                    [
                        [r, "Dolphin"], l
                    ],
                    [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                    [
                        [r, "Chrome"], l
                    ],
                    [/;fbav\/([\w\.]+);/i],
                    [l, [r, "Facebook"]],
                    [/fxios\/([\w\.-]+)/i],
                    [l, [r, "Firefox"]],
                    [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                    [l, [r, "Mobile Safari"]],
                    [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                    [l, r],
                    [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                    [r, [l, g.str, y.browser.oldsafari.version]],
                    [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                    [r, l],
                    [/(navigator|netscape)\/([\w\.-]+)/i],
                    [
                        [r, "Netscape"], l
                    ],
                    [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                    [r, l]
                ],
                device: [
                    [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                    [o, s, [a, h]],
                    [/applecoremedia\/[\w\.]+ \((ipad)/],
                    [o, [s, "Apple"],
                        [a, h]
                    ],
                    [/(apple\s{0,1}tv)/i],
                    [
                        [o, "Apple TV"],
                        [s, "Apple"]
                    ],
                    [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                    [s, o, [a, h]],
                    [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
                    [o, [s, "Amazon"],
                        [a, h]
                    ],
                    [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
                    [
                        [o, g.str, y.device.amazon.model],
                        [s, "Amazon"],
                        [a, c]
                    ],
                    [/\((ip[honed|\s\w*]+);.+(apple)/i],
                    [o, s, [a, c]],
                    [/\((ip[honed|\s\w*]+);/i],
                    [o, [s, "Apple"],
                        [a, c]
                    ],
                    [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                    [s, o, [a, c]],
                    [/\(bb10;\s(\w+)/i],
                    [o, [s, "BlackBerry"],
                        [a, c]
                    ],
                    [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
                    [o, [s, "Asus"],
                        [a, h]
                    ],
                    [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                    [
                        [s, "Sony"],
                        [o, "Xperia Tablet"],
                        [a, h]
                    ],
                    [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],
                    [
                        [s, "Sony"],
                        [o, "Xperia Phone"],
                        [a, c]
                    ],
                    [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                    [s, o, [a, d]],
                    [/android.+;\s(shield)\sbuild/i],
                    [o, [s, "Nvidia"],
                        [a, d]
                    ],
                    [/(playstation\s[34portablevi]+)/i],
                    [o, [s, "Sony"],
                        [a, d]
                    ],
                    [/(sprint\s(\w+))/i],
                    [
                        [s, g.str, y.device.sprint.vendor],
                        [o, g.str, y.device.sprint.model],
                        [a, c]
                    ],
                    [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                    [s, o, [a, h]],
                    [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],
                    [s, [o, /_/g, " "],
                        [a, c]
                    ],
                    [/(nexus\s9)/i],
                    [o, [s, "HTC"],
                        [a, h]
                    ],
                    [/(nexus\s6p)/i],
                    [o, [s, "Huawei"],
                        [a, c]
                    ],
                    [/(microsoft);\s(lumia[\s\w]+)/i],
                    [s, o, [a, c]],
                    [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                    [o, [s, "Microsoft"],
                        [a, d]
                    ],
                    [/(kin\.[onetw]{3})/i],
                    [
                        [o, /\./g, " "],
                        [s, "Microsoft"],
                        [a, c]
                    ],
                    [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                    [o, [s, "Motorola"],
                        [a, c]
                    ],
                    [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                    [o, [s, "Motorola"],
                        [a, h]
                    ],
                    [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                    [
                        [s, v.trim],
                        [o, v.trim],
                        [a, m]
                    ],
                    [/hbbtv.+maple;(\d+)/i],
                    [
                        [o, /^/, "SmartTV"],
                        [s, "Samsung"],
                        [a, m]
                    ],
                    [/\(dtv[\);].+(aquos)/i],
                    [o, [s, "Sharp"],
                        [a, m]
                    ],
                    [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                    [
                        [s, "Samsung"], o, [a, h]
                    ],
                    [/smart-tv.+(samsung)/i],
                    [s, [a, m], o],
                    [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i],
                    [
                        [s, "Samsung"], o, [a, c]
                    ],
                    [/sie-(\w+)*/i],
                    [o, [s, "Siemens"],
                        [a, c]
                    ],
                    [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
                    [
                        [s, "Nokia"], o, [a, c]
                    ],
                    [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                    [o, [s, "Acer"],
                        [a, h]
                    ],
                    [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                    [
                        [s, "LG"], o, [a, h]
                    ],
                    [/(lg) netcast\.tv/i],
                    [s, o, [a, m]],
                    [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i],
                    [o, [s, "LG"],
                        [a, c]
                    ],
                    [/android.+(ideatab[a-z0-9\-\s]+)/i],
                    [o, [s, "Lenovo"],
                        [a, h]
                    ],
                    [/linux;.+((jolla));/i],
                    [s, o, [a, c]],
                    [/((pebble))app\/[\d\.]+\s/i],
                    [s, o, [a, f]],
                    [/android.+;\s(glass)\s\d/i],
                    [o, [s, "Google"],
                        [a, f]
                    ],
                    [/android.+;\s(pixel c)\s/i],
                    [o, [s, "Google"],
                        [a, h]
                    ],
                    [/android.+;\s(pixel xl|pixel)\s/i],
                    [o, [s, "Google"],
                        [a, c]
                    ],
                    [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i],
                    [
                        [o, /_/g, " "],
                        [s, "Xiaomi"],
                        [a, c]
                    ],
                    [/android.+a000(1)\s+build/i],
                    [o, [s, "OnePlus"],
                        [a, c]
                    ],
                    [/\s(tablet)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                    [
                        [a, v.lowerize], s, o
                    ]
                ],
                engine: [
                    [/windows.+\sedge\/([\w\.]+)/i],
                    [l, [r, "EdgeHTML"]],
                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                    [r, l],
                    [/rv\:([\w\.]+).*(gecko)/i],
                    [l, r]
                ],
                os: [
                    [/microsoft\s(windows)\s(vista|xp)/i],
                    [r, l],
                    [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                    [r, [l, g.str, y.os.windows.version]],
                    [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                    [
                        [r, "Windows"],
                        [l, g.str, y.os.windows.version]
                    ],
                    [/\((bb)(10);/i],
                    [
                        [r, "BlackBerry"], l
                    ],
                    [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i],
                    [r, l],
                    [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                    [
                        [r, "Symbian"], l
                    ],
                    [/\((series40);/i],
                    [r],
                    [/mozilla.+\(mobile;.+gecko.+firefox/i],
                    [
                        [r, "Firefox OS"], l
                    ],
                    [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
                    [r, l],
                    [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                    [
                        [r, "Chromium OS"], l
                    ],
                    [/(sunos)\s?([\w\.]+\d)*/i],
                    [
                        [r, "Solaris"], l
                    ],
                    [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                    [r, l],
                    [/(haiku)\s(\w+)/i],
                    [r, l],
                    [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],
                    [
                        [r, "iOS"],
                        [l, /_/g, "."]
                    ],
                    [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
                    [
                        [r, "Mac OS"],
                        [l, /_/g, "."]
                    ],
                    [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i],
                    [r, l]
                ]
            };
        return this instanceof A ? (n = e || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : ""), i = t ? v.extend(d, t) : d, this.getBrowser = function() {
            var e = g.rgx.apply(this, i.browser);
            return e.major = v.major(e.version), e
        }, this.getDevice = function() {
            return g.rgx.apply(this, i.device)
        }, this.getEngine = function() {
            return g.rgx.apply(this, i.engine)
        }, this.getOS = function() {
            return g.rgx.apply(this, i.os)
        }, this.getResult = function() {
            return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice()
            }
        }, this.getUA = function() {
            return n
        }, this) : new A(e, t).getResult()
    }
    n(2).always("UserAgentParser", "Version 0.0.1");
    e.exports = A
}, function(e, t, u) {
    var p = u(2);
    e.exports = function(d, c) {
        return {
            init: function(e, t, n) {
                p.debug("[PlayerManager_CustomizedVideoJS]", "init"), c.adVideoPlayer = e, d.options.nativeControlsForTouch = !1, d.options.customControlsOnMobile = !1, d.isMobile() ? e.enableTouchActivity() : e.userActive(!1), c.customSkinning.render(d, e, t.contentWindow.document, !1);
                var i = t.contentWindow.document.getElementById("top_chrome"),
                    o = t.contentWindow.document.createElement("div"),
                    r = d.options.learnMore.enabled,
                    a = ((r = d.options.clickUrls[0] ? r : !1) && ("top-right" === d.options.skippable.skipLocation ? d.adIndicatorTextContent = d.options.learnMore.text + " " + d.options.learnMore.separator + " " + d.adIndicatorTextContent : d.adIndicatorTextContent += " " + d.options.learnMore.separator + " " + d.options.learnMore.text), d.videojsOrigin.createEl("div", {
                        role: "button",
                        innerHTML: d.adIndicatorTextContent,
                        className: "top-bar-text"
                    })),
                    s = d.options.wcElement && d.options.wcElement instanceof Element ? d.options.wcElement.querySelector("#" + String(d.options.iframeVideoWrapperId)) : document.getElementById(d.options.iframeVideoWrapperId),
                    l = s.contentWindow.document.getElementById(d.an_video_ad_player_id),
                    s = s.contentWindow.document.getElementById(d.an_video_ad_player_html5_api_id);
                u(21)(d, c).init(e), u(22)(d, c).init(e, t, o, a, r), u(23)(d, c).init(i, a, o, e, t), u(24)(d, c).init(e), u(32)(d, c).init(e), u(35)(d, c).init(e, a, o), u(36)(d).init(e), u(37)(d, c).init(), u(38)(d, c).init(e), u(39)(d, c).init(e), n(l, s)
            }
        }
    }
}, function(e, t, n) {
    function l(e) {
        u.verbose(c, e)
    }
    var d = n(11),
        c = "[PlayerManager_Customize]",
        u = n(2);
    e.exports = function(a, s) {
        return {
            init: function(t) {
                var e, n, i, o, r;
                u.debug(c, "init"), a.options.isWaterfall && a.options.vpaid && (t.controlBar.hide(), a.options.firstAdAttempted && t.bigPlayButton.hide()), l("disabling scrubbing"), t.controlBar.progressControl.seekBar.off("mousedown"), t.controlBar.progressControl.seekBar.off("touchstart"), t.controlBar.progressControl.seekBar.off("click"), l("setting initial audio"), "off" === a.options.initialAudio ? (t.muted(!0), s.isMuted = !0) : (t.muted(!1), s.isMuted = !1), l("setting initial playback"), "mouseover" === a.options.initialPlayback && (e = function() {
                    s.play(), t.el().removeEventListener("mouseover", e)
                }, t.el().addEventListener("mouseover", e)), l("setting aspect ratio"), a.options.maintainAspectRatio;
                !1 !== a.options.showVolume && a.displayVolumeControls() || (l("removing volume controls"), t.controlBar.volumeControl.dispose()), !1 === a.options.showPlayToggle && t.controlBar.playToggle.hide(), !1 === a.options.showBigPlayButton && t.bigPlayButton.hide(), !0 === a.options.showMute && (a.displayVolumeControls() || a.isAndroid()) ? (l("setting mute functionality"), t.controlBar.muteToggle.on("click", i = function() {
                    s.isMuted ? 0 < t.volume() && s.explicitUnmute() : s.explicitMute()
                }), t.controlBar.muteToggle.on("touchend", i)) : (l("removing mute button"), t.controlBar.muteToggle.dispose()), !0 === a.options.showVolume && a.displayVolumeControls() && t.controlBar.volumeControl.volumeBar.on("mousedown", function() {
                    var e = t.volume();
                    e <= 0 && !s.isMuted && (l("muting from volume scrubber"), s.explicitMute()), 0 < e && s.isMuted && (l("unmuting from volume scrubber"), s.explicitUnmute())
                }), d.isIos() && a.options.enableNativeInline && 9 < parseInt(d.getIOSVersion()) && "click" !== a.options.initialPlayback && (t.muted(!0), t.controlBar.muteToggle.update()), "boolean" == typeof a.options.customButton.enabled && !0 === a.options.customButton.enabled && (i = a.options.playerSkin.controlBarHeight || 30, n = Math.min(50, a.options.customButton.imgWidth), r = Math.min(i, a.options.customButton.imgHeight), i = Math.floor((i - r) / 2), o = "a", a.isMobile() && (o = "span"), (r = a.videojsOrigin.createEl("div", {
                    innerHTML: "<" + o + ' href="' + a.options.customButton.url + '" target="_blank"><img style="height:' + r + "px;width:" + n + "px;margin-top:" + i + 'px" class="home-button-image" src="' + a.options.customButton.imageSrc + '" alt="' + a.options.customButton.altText + '"></' + o + ">",
                    role: "button",
                    "aria-live": "polite",
                    tabindex: "0"
                })).style.cssText = "float:right;font-family:VideoJS;font-size:1.5em;line-height:2;width:50px;height:100%;text-align:center", t.controlBar.addChild("button", {
                    el: r
                }), t.controlBar.el().insertBefore(r, t.controlBar.fullscreenToggle.el())), t.controlBar.progressControl.seekBar.seekHandle.hide(), t.controlBar.progressControl.seekBar.el_.style.pointerEvents = "none", "boolean" == typeof a.options.showProgressBar ? (!1 === a.options.showProgressBar && (l("removing progress bar"), t.controlBar.currentTimeDisplay.hide(), t.controlBar.timeDivider.hide(), t.controlBar.durationDisplay.hide()), t.controlBar.progressControl.seekBar.hide()) : "text" === a.options.showProgressBar ? (l("removing progress text"), t.controlBar.progressControl.seekBar.hide()) : "bar" === a.options.showProgressBar && (l("removing progress bar"), t.controlBar.currentTimeDisplay.hide(), t.controlBar.timeDivider.hide(), t.controlBar.durationDisplay.hide()), !1 === a.options.allowFullscreen && (l("removing fullscreen toggle"), t.controlBar.fullscreenToggle.el().style.visibility = "hidden"), a.isMobile() && !0 === a.options.allowFullscreen && !0 === a.options.showMute && (t.controlBar.fullscreenToggle.el().style.visibility = "hidden", t.controlBar.muteToggle.el().style.visibility = "visible"), a.options.targetElement.addEventListener("outstream-impression", function() {
                    a.isMobile() && !0 === a.options.allowFullscreen && !0 === a.options.showMute && (t.controlBar.fullscreenToggle.el().style.visibility = "visible", t.controlBar.muteToggle.el().style.visibility = "visible")
                }), a.options.targetElement.addEventListener("vastplayer-impression", function() {
                    a.isMobile() && !0 === a.options.allowFullscreen && !0 === a.options.showMute && (t.controlBar.fullscreenToggle.el().style.visibility = "visible", t.controlBar.muteToggle.el().style.visibility = "visible")
                })
            }
        }
    }
}, function(e, t, n) {
    var l = n(2);
    e.exports = function(a, s) {
        return {
            init: function(e, t, n, i, o) {
                l.verbose("[PlayerManager_AdIndicator]", "init"), n.id = "ad_indicator_text", n.innerHTML = a.adIndicatorTextContent, n.className = "top-bar-text", n.role = "button";
                var r = "3em";
                a.isMobile() && (r = "5em"), n.style["text-align"] = "right", n.style["margin-right"] = "1em", n.style["margin-left"] = "1em", n.style["font-size"] = "1em", n.style.right = "0px", n.style.left = "", n.style["line-height"] = "24px", n.style.outline = "0", n.style.position = "absolute", n.style.padding = "0", n.style.height = "auto", n.style.width = "auto", n.style["max-width"] = "35%", n.style["white-space"] = "nowrap", n.style.overflow = "hidden", n.style["text-overflow"] = "ellipsis", o ? n.style.cursor = "pointer" : n.style["pointer-events"] = "none", i.style["text-align"] = "right", i.style["margin-right"] = "1em", i.style["margin-left"] = "1em", i.style["font-size"] = "1em", i.style.right = "0px", i.style.left = "", i.style["line-height"] = "3em", i.style.outline = "0", i.style.position = "absolute", i.style.padding = "0", i.style.height = r, i.style["max-width"] = "35%", i.style.width = "auto", i.style["text-overflow"] = "ellipsis", i.style["white-space"] = "nowrap", i.style.overflow = "hidden", i.style.display = "none", o ? (i.style.cursor = "pointer", n.addEventListener("touchend", r = function(e) {
                    s.click(), a.isMobile() && (e.stopPropagation(), e.preventDefault())
                }), i.addEventListener("touchend", r), n.addEventListener("click", r), i.addEventListener("click", r)) : i.style["pointer-events"] = "none", e.addChild("button", {
                    el: i
                })
            }
        }
    }
}, function(e, t, n) {
    function y(e) {
        b.debug(A, e)
    }
    var A = "[PlayerManager_Skip]",
        b = n(2),
        w = n(11);
    e.exports = function(v, g) {
        return {
            init: function(e, t, r, a, n) {
                var s, l, d, i, c, o, u, p, h, m, f;
                y("init"), !0 === v.options.skippable.enabled && (b.verbose(A, "creating and styling skip buttons and skip texts"), l = v.options.skippable.videoThreshold, d = v.options.skippable.skipText, i = v.options.skippable.skipButtonText, (c = n.contentWindow.document.createElement("div")).id = "skip_button", c.innerHTML = i, c.className = "top-bar-text", c.role = "button", o = "", v.isMobile() && (o = "5.0em"), c.style.display = "none", c.style.cursor = "pointer", c.style["font-weight"] = "bold", c.style["margin-right"] = "1em", c.style["margin-left"] = "1em", c.style["font-size"] = "1em", c.style.right = "", c.style.left = "0px", c.style["line-height"] = "24px", c.style.outline = "0", c.style.position = "absolute", c.style.padding = "0", c.style.height = o, c.style.width = "auto", c.style["min-width"] = "5em", c.style["text-align"] = "left", v.floatingSkipButton = v.videojsOrigin.createEl("div", {
                    className: "top-bar-text",
                    role: "button",
                    innerHTML: i
                }), v.floatingSkipButton.style.display = "none", v.floatingSkipButton.style.cursor = "pointer", v.floatingSkipButton.style["font-weight"] = "bold", v.floatingSkipButton.style["margin-right"] = "1em", v.floatingSkipButton.style["margin-left"] = "1em", v.floatingSkipButton.style["font-size"] = "1em", v.floatingSkipButton.style.right = "", v.floatingSkipButton.style.left = "0px", v.floatingSkipButton.style["line-height"] = "3em", v.floatingSkipButton.style.outline = "0", v.floatingSkipButton.style.position = "absolute", v.floatingSkipButton.style.padding = "0", v.floatingSkipButton.style.height = o, v.floatingSkipButton.style["min-width"] = "5em", v.floatingSkipButton.style.width = "auto", v.floatingSkipButton.style.display = "none", v.floatingSkipButton.style["text-align"] = "left", a.addChild("button", {
                    el: v.floatingSkipButton
                }), o = function(e) {
                    y("SKIP clicked, destroying player"), v.options.vpaid ? (a.trigger("skip"), v.isMobile() && (e.stopPropagation(), e.preventDefault(), v.options.overlayPlayer && g.destroy())) : (g.destroy(), v.isMobile() && (e.stopPropagation(), e.preventDefault(), g.isCompleted = !0))
                }, v.isMobile() && (c.addEventListener("touchend", o), v.floatingSkipButton.addEventListener("touchend", o), v.floatingSkipButton.addEventListener("mousedown", function(e) {
                    e.preventDefault()
                })), c.addEventListener("click", o), v.floatingSkipButton.addEventListener("click", o), v.floatingAdSkipText = v.videojsOrigin.createEl("div", {
                    className: "top-bar-text",
                    role: "button",
                    innerHTML: ""
                }), v.floatingAdSkipText.style["margin-left"] = "1em", v.floatingAdSkipText.style["margin-right"] = "1em", v.floatingAdSkipText.style.right = "", v.floatingAdSkipText.style.left = "0px", v.floatingAdSkipText.style["font-size"] = "1em", v.floatingAdSkipText.style["line-height"] = "3em", v.floatingAdSkipText.style.outline = "0", v.floatingAdSkipText.style.position = "absolute", v.floatingAdSkipText.style["text-align"] = "left", v.floatingAdSkipText.style.padding = "0", v.floatingAdSkipText.style.height = "3em", v.floatingAdSkipText.style.width = "auto", v.floatingAdSkipText.style["pointer-events"] = "none", v.floatingAdSkipText.style.display = "none", a.addChild("button", {
                    el: v.floatingAdSkipText
                }), (s = n.contentWindow.document.createElement("div")).id = "ad_skip_text", s.innerHTML = i, s.className = "top-bar-text", s.role = "button", s.style["margin-left"] = "1em", s.style["margin-right"] = "1em", s.style.right = "", s.style.left = "0px", s.style["font-size"] = "1em", s.style["line-height"] = "24px", s.style.outline = "0", s.style.position = "absolute", s.style["text-align"] = "left", s.style.padding = "0", s.style.height = "3em", s.style.width = "auto", s.style["pointer-events"] = "none", s.style.display = "none", "top-right" === v.options.skippable.skipLocation && (c.style.right = "0px", c.style.left = "", c.style["text-align"] = "right", s.style.right = "0px", s.style.left = "", v.floatingSkipButton.style.right = "0px", v.floatingSkipButton.style.left = "", v.floatingSkipButton.style["text-align"] = "right", v.floatingAdSkipText.style.right = "0px", v.floatingAdSkipText.style.left = ""), h = p = u = !1, m = {}, f = function() {
                    var e = Math.round(a.player().currentTime()),
                        t = Math.round(a.player().duration()),
                        n = g.options.skippable.allowOverride ? Math.round(v.options.data.skipOffsetMsec / 1e3) : v.options.skippable.videoOffset,
                        i = n - e,
                        o = !v.options.skippable.allowOverride || v.options.data.isVastVideoSkippable,
                        o = !(t < n) && o;
                    l < t && !v.options.disableTopBar && o && (n = "native" === v.options.adType || "preview" === v.options.adType, 0 < i && (!g.startedReplay && !g.isEnded || n) ? (v.floatingAdSkipText.innerHTML = d.replace("%%TIME%%", i), c.style.display = "none", s.innerHTML = d.replace("%%TIME%%", i), s.style.display = "block", w.elementsOverlap(s, r) && (s.style.display = "none")) : (v.readyForSkip = !0, g.isFullscreen && !v.pendingFullscreenExit && (v.floatingAdSkipText.style.display = "none", v.floatingSkipButton.style.display = "block"), s.style.display = "none", c.style.display = "block", n && Math.abs(t - e) < .1 && (c.style.display = "none")))
                }, a.on("resize", function() {
                    f()
                }), a.on("timeupdate", function() {
                    var e = g.options.data.vastProgressEvent;
                    if (!v.options.isWaterfall || !v.options.vpaid || v.options.vpaidImpressionFired) {
                        var t = 1e3 * Math.round(a.player().currentTime());
                        if (e && "object" == typeof e) {
                            function n() {}
                            for (var i in e) {
                                var o = e[i];
                                "number" == typeof o && 0 <= o && o <= t && -1 === Object.keys(m).indexOf(i) && (m[i] = o, (o = {}).name = i, o.name && g.dispatchEventToAdunit(o, n))
                            }
                        }
                        f()
                    }
                })), v.options.skippable && v.options.skippable.skipLocation && "top-right" === v.options.skippable.skipLocation && (r.style.right = "", r.style.left = "0px", t.style.right = "", t.style.left = "0px"), !v.options.disableTopBar && e && (!0 === v.options.skippable.enabled && (e.appendChild(c), e.appendChild(s)), e.appendChild(r)), a.on("timeupdate", function() {
                    var e, t, n, i;
                    v.options.vpaid || (e = Math.round(a.player().currentTime()), (t = a.player().duration()) && (n = t / 4 * 2, i = t / 4 * 3, !u && t / 4 <= e && e < n && (v.dispatchEventToAdunit({
                        name: "video-first-quartile"
                    }), u = !0), !p && n <= e && e < i && (v.dispatchEventToAdunit({
                        name: "video-mid"
                    }), p = !0), !h && i <= e && (v.dispatchEventToAdunit({
                        name: "video-third-quartile"
                    }), h = !0)))
                })
            }
        }
    }
}, function(e, t, n) {
    function a(e) {
        i.debug("[PlayerManager_EndCardSetup]", e)
    }
    var i = n(2),
        s = n(25);
    e.exports = function(o, r) {
        return {
            init: function(e) {
                if (a("init"), o.options.endCard.enabled) {
                    var t = o.options.endCard;
                    if (t.showDefaultButtons) {
                        for (var n = -1, i = 0; i < t.buttons.length; i++)
                            if ("replay" === t.buttons[i].type) {
                                n = i;
                                break
                            }
                        o.options.disableCollapse.replay ? n < 0 && t.buttons.splice(0, 0, {
                            type: "replay"
                        }) : 0 <= n && t.buttons.splice(n, 1)
                    }
                    a("Creating EndCard."), r.endCard = new s(t, e, r)
                }
            }
        }
    }
}, function(e, t, n) {
    function h(e) {
        p.debug(c, e)
    }

    function i(e, t, n) {
        this.layers = [], this.buttons = [], this.options = e, this.vjsPlayer = t, this.playerManager = n, this.firedCreativeView = !1, this.onLayerClick = function(e) {
            e.stopPropagation(), e.target === e.currentTarget && n.click()
        }, e.layers = [{
            type: "videoAd"
        }], e.layers.push({
            type: "color",
            width: "100%",
            height: "100%",
            color: e.color
        }), e.layers.push({
            type: "companionAd"
        }), e.layers.push({
            type: "image",
            width: e.imageWidth,
            height: e.imageHeight,
            imageUrl: e.imageUrl
        }), this.createEndCardContainer(t.player().el_), this.createLayers(), this.createButtons()
    }
    var c = "[EndCard]",
        u = n(26),
        p = n(2);
    i.prototype.styleForCentering = function(e, t, n) {
        e.style.display = "block", e.style.position = "absolute", e.style.top = 0, e.style.bottom = 0, e.style.left = 0, e.style.right = 0, e.style.margin = "auto", e.style.maxWidth = t || "100%", e.style.maxHeight = n || "100%", t && (e.style.width = t), n && (e.style.height = n)
    }, i.prototype.styleSizeLimitScaleDown = function(i, o, r) {
        function a() {
            o = o || s.endCardElem.offsetWidth, r = r || s.endCardElem.offsetHeight;
            var e, t = l.offsetWidth,
                n = l.offsetHeight;
            o && r && t && n ? (o / r < t / n ? (l.style.width = "100%", e = n / (r * (t / o)), l.style.height = 100 * e + "%") : (l.style.height = "100%", n = o * (n / r), l.style.width = 100 * (e = t / n) + "%"), i.opts.width || (l.style.maxWidth = l.naturalWidth), i.opts.height || (l.style.maxHeight = l.naturalHeight)) : setTimeout(a, 5)
        }
        var s = this,
            l = i.elem;
        a()
    }, i.prototype.selectEndCardCompanion = function() {
        if (Array.isArray(this.options.companionAds) && 0 !== this.options.companionAds.length) {
            var e, t, n, i, o, r, a, s = this.vjsPlayer.player().el_,
                l = this.playerManager.options.width,
                d = this.playerManager.options.height,
                c = (s && (s.offsetWidth && (l = s.offsetWidth), s.offsetHeight && (d = s.offsetHeight)), l * d);
            h("Selecting best companion for ad unit size (" + l + "x" + d + "):");
            for (var u = 99999999, p = 0; p < this.options.companionAds.length; p++) {
                if (o = (n = this.options.companionAds[p]).width || 1, r = n.height || 1, n.hasOwnProperty("StaticResource") && 0 === n.StaticResource.type.indexOf("image")) a = "StaticImageCompanion";
                else {
                    if (!n.hasOwnProperty("HTMLResource")) {
                        h("xxx Skipping Companion: [" + p + "] - Resource type is neither a static image nor HTML.");
                        continue
                    }
                    a = "HtmlCompanion"
                }
                if ("StaticImageCompanion" === a) l < o && (o *= t = l / o, r *= t), d < r && (o *= t = d / r, r *= t);
                else if (l < o || d < r) {
                    h("xxx Skipping Companion: [" + p + "] - Companion size (" + o + "x" + r + ") won't fit in ad unit.");
                    continue
                }(i = Math.abs(o * r - c)) < u ? (u = i, e = n, this.CompanionAdType = a, h("*** Selecting Companion: [" + p + "] size (" + o + "x" + r + "), areaDiff=" + u)) : h("xxx Discarding Companion: [" + p + "] size (" + o + "x" + r + "), areaDiff=" + i)
            }
            return e
        }
        h("No companion ads found.")
    }, i.prototype.prepareCompanionLayers = function(o) {
        function r(e) {
            if ("requestTracking" === e.command && "creative-view" === e.data) {
                if (a.firedCreativeView) return;
                a.firedCreativeView = !0
            }
            a.options.companionCallback && a.options.companionCallback(e)
        }
        for (var a = this, s = 0, l = 1, e = 0; e < this.layers.length; e++) {
            var d, t = this.layers[e];
            "companionAd" !== t.opts.type || t.companionManager || (l++, (d = function(t) {
                var e, n, i;
                a.playerManager.isFullscreen ? (e = "Delaying companion selection since we are in " + (a.playerManager.isFullscreen ? "fullscreen" : "sidestream") + " mode.", p.verbose(c, e), setTimeout(d, 100, t)) : (t.companionAd = a.selectEndCardCompanion(), t.companionAd ? (n = {
                    companionContainers: [t.elem]
                }, i = {
                    companions: [t.companionAd]
                }, t.elem.style.width = t.opts.width = t.companionAd.width, t.elem.style.height = t.opts.height = t.companionAd.height, t.elem.style.maxWidth = "", t.elem.style.maxHeight = "", setTimeout(function() {
                    var e;
                    t.companionManager = u.renderCompanions(i, n, r), a.styleForCentering(t.elem, t.companionAd.width, t.companionAd.height), "StaticImageCompanion" === a.CompanionAdType && ((e = t.elem.childNodes.item(0)) && (e.style.width = "100%", e.style.height = "100%"), a.styleSizeLimitScaleDown(t)), t.companionAd.hasOwnProperty("StaticResource") && !t.companionAd.CompanionClickThrough && (t.elem.style["pointer-events"] = "none", t.elem.style.cursor = a.options.clickable ? "pointer" : "default", "StaticImageCompanion" !== a.CompanionAdType || a.options.clickable || (t.elem.childNodes.item(0).style.cursor = "default"))
                }, 50), s++) : t.elem.style.display = "none", 0 == --l && o && o(s))
            })(t))
        }
        0 == --l && o && o(s)
    }, i.prototype.onVideoResized = function(e, t) {
        for (var n = 0; n < this.layers.length; n++) {
            var i = this.layers[n];
            i.companionAd ? "StaticImageCompanion" !== this.CompanionAdType && (i.companionAd.width > e || i.companionAd.height > t ? i.elem.style.display = "none" : i.elem.style.display = "block") : "image" === i.type && i.elem.style
        }
    }, i.prototype.saveSetStyle = function(e, t, n) {
        void 0 !== n && (e.styleSave || (e.styleSave = {}), e.elem && (void 0 === e.styleSave[t] && (e.styleSave[t] = e.elem.style[t]), e.elem.style[t] = n))
    }, i.prototype.restoreStyle = function(e) {
        if (e.styleSave) {
            if (e.elem)
                for (var t in e.styleSave) e.elem.style[t] = e.styleSave[t];
            delete e.styleSave
        }
    }, i.prototype.createEndCardContainer = function(e) {
        this.endCardElem || (this.endCardElem = e.ownerDocument.createElement("div"), e.appendChild(this.endCardElem), this.endCardElem.className = "video-js vjs-default-skin vjs-controls-enabled vjs-big-play-centered vjs-has-started vjs-paused vjs-ended vjs-user-active", this.playerManager.isIosInlineRequired() ? (this.endCardElem.style["background-color"] = "", this.endCardElem.style.background = this.playerManager.options.playerSkin.videoBackgroundColor, this.endCardElem.style.opacity = 1) : this.endCardElem.style["background-color"] = "rgba(0,0,0,0)", this.endCardElem.setAttribute("name", "endCardContainer"), this.endCardElem.style.width = "100%", this.endCardElem.style.height = "100%", this.endCardElem.style.display = "none", this.endCardElem.style.cursor = this.options.clickable ? "pointer" : "default", this.endCardElem.style.position = "relative", this.endCardElem.style["text-align"] = "center", this.options.clickable && (this.endCardElem.onclick = this.onLayerClick))
    }, i.prototype.createImageLayer = function(e, t) {
        var n = {},
            i = e.ownerDocument.createElement("img");
        e.appendChild(i), i.setAttribute("name", "ecImageLayer"), i.id = t.id || "endCardImageLayer", i.setAttribute("src", t.imageUrl || ""), i.style.cursor = this.options.clickable ? "pointer" : "default", this.styleForCentering(i, t.width, t.height), i.style.display = "none", n.elem = i, n.opts = t, this.layers.push(n)
    }, i.prototype.createColorLayer = function(e, t) {
        var n = {},
            i = e.ownerDocument.createElement("div");
        e.appendChild(i), i.setAttribute("name", "ecColorLayer"), i.id = t.id || "endCardColorLayer", i.style["background-color"] = t.color || "black", i.style.cursor = this.options.clickable ? "pointer" : "default", this.styleForCentering(i, t.width || "100%", t.height || "100%"), t.color || (i.style.display = "none"), n.elem = i, n.opts = t, this.layers.push(n)
    }, i.prototype.createAdVideoLayer = function(e, t) {
        var n;
        void 0 === this.videoLayer ? ((n = {}).elem = e, n.opts = t, e && this.playerManager.isIosInlineRequired() && (n.videoParent = e.parentElement, n.videoSibling = e.nextSibling), this.videoLayer = this.layers.length, this.layers.push(n)) : h("Can't create new video layer because one already exists!")
    }, i.prototype.createCompanionLayer = function(e, t) {
        var n = {},
            i = e.ownerDocument.createElement("div");
        e.appendChild(i), i.setAttribute("name", "ecCompanionLayer"), i.id = "endCardCompanionLayer", i.style.position = "absolute", i.style.width = t.width || "100%", i.style.height = t.height || "100%", this.styleForCentering(i), i.style["background-color"] = "rgba(0,0,0,0)", n.elem = i, n.opts = t, this.layers.push(n)
    }, i.prototype.show = function() {
        this.vjsPlayer && this.vjsPlayer.controlBar && this.vjsPlayer.controlBar.hide(), void 0 !== this.videoLayer && (e = this.layers[this.videoLayer], t = this.options.layers[this.videoLayer], e.elem && (e.videoParent && (this.videoLayer < this.layers.length - 1 ? this.endCardElem.insertBefore(e.elem, this.layers[this.videoLayer + 1].elem) : this.buttonContainer ? this.endCardElem.insertBefore(e.elem, this.buttonContainer) : this.endCardElem.appendChild(e.elem)), this.playerManager.isIosInlineRequired() && (this.endCardElem.style.width = e.elem.style.width, this.endCardElem.style.height = e.elem.style.height)), e.styleSave = {}, t.width && this.saveSetStyle(e, "width", t.width), t.height && this.saveSetStyle(e, "height", t.height), this.options.clickable ? (this.saveSetStyle(e, "cursor", "pointer"), this.saveSetStyle(e, "pointer-events", "auto"), this.playerManager.options.learnMore.enabled && e.elem.addEventListener("click", this.onLayerClick)) : (this.saveSetStyle(e, "cursor", "default"), this.saveSetStyle(e, "pointer-events", "none")), this.playerManager.isIosInlineRequired() && (this.endCardElem.style.width = e.elem.style.width, this.endCardElem.style.height = e.elem.style.height));
        var e, t, i = this;
        this.prepareCompanionLayers(function(e) {
            for (var t = 0; t < i.layers.length; t++) {
                var n = i.layers[t];
                "videoAd" !== n.opts.type && "companionAd" !== n.opts.type && ("image" === n.opts.type && (0 < e ? n.elem.style.display = "none" : n.opts.imageUrl && (i.styleSizeLimitScaleDown(n), n.elem.style.display = "block")), i.options.clickable && n.elem && (n.elem.addEventListener("click", i.onLayerClick), n.elem.style.cursor = "pointer"))
            }
        }), this.endCardElem.style.display = "block"
    }, i.prototype.hide = function() {
        var e;
        void 0 !== this.videoLayer && (e = this.layers[this.videoLayer], this.restoreStyle(e), e.videoParent && e.videoParent.insertBefore(e.elem, e.videoSibling));
        for (var t = 0; t < this.layers.length; t++) {
            var n = this.layers[t];
            ("videoAd" !== n.opts.type || this.options.clickable && this.playerManager.options.learnMore.enabled) && ("companionAd" === n.opts.type ? n.companionManager && (u.stopCompanions(n.companionManager), delete n.companionManager) : this.options.clickable && n.elem && n.elem.removeEventListener("click", this.onLayerClick))
        }
        this.vjsPlayer && this.vjsPlayer.controlBar && this.vjsPlayer.controlBar.show(), this.endCardElem.style.display = "none"
    }, i.prototype.createLayers = function() {
        var e = this.options.layers;
        if (Array.isArray(e) && !(e.length < 0))
            for (var t = 0; t < e.length; t++) {
                var n, i = e[t],
                    o = i.type || "color";
                switch (o) {
                    case "color":
                        this.createColorLayer(this.endCardElem, i);
                        break;
                    case "image":
                        this.createImageLayer(this.endCardElem, i);
                        break;
                    case "videoAd":
                        this.playerManager.isIosInlineRequired() ? (h("iOS inline player using canvas in place of video element"), n = this.endCardElem.ownerDocument.getElementsByTagName("canvas"), this.createAdVideoLayer(n[0], i)) : this.vjsPlayer && this.vjsPlayer.tag && this.createAdVideoLayer(this.vjsPlayer.tag, i);
                        break;
                    case "companionAd":
                        this.options.companionAds ? this.createCompanionLayer(this.endCardElem, i) : h("Companion ad layer specified but no companion ads were found.");
                        break;
                    default:
                        h("Invalid endCard layer type: " + o)
                }
            }
    }, i.prototype.createButtonContainer = function() {
        this.buttonContainer || (this.buttonContainer = this.endCardElem.ownerDocument.createElement("div"), this.endCardElem.appendChild(this.buttonContainer), this.buttonContainer.setAttribute("name", "ecButtonContainer"), this.buttonContainer.id = "endCardButtonContainer", this.buttonContainer.style.cursor = "default", this.buttonContainer.style["background-color"] = "rgba(0,0,0,0.5)", this.buttonContainer.style.display = "block", this.buttonContainer.style.position = "absolute", this.buttonContainer.style.left = "50%", this.buttonContainer.style.top = "50%", this.buttonContainer.style.transform = "translate(-50%, -50%)", this.buttonContainer.style["font-size"] = "14px", this.buttonContainer.style["text-align"] = "left")
    }, i.prototype.addButton = function(e, t, n, i) {
        var o = this.buttonContainer.ownerDocument.createElement("div"),
            r = this.buttonContainer.ownerDocument.createElement("span"),
            a = this.buttonContainer.ownerDocument.createElement("span");
        o.className = "ec-button " + e, o.id = "ec-button-" + n, i && o.addEventListener("click", i), r.textContent = "", a.textContent = t, a.style["margin-left"] = "6px", o.appendChild(r), o.appendChild(a), this.buttonContainer.appendChild(o)
    }, i.prototype.createButtons = function() {
        var e = this.options.buttons;
        if (Array.isArray(e) && !(e.length < 1)) {
            function t(e) {
                e.stopPropagation(), i.hide(), i.vjsPlayer.currentTime(0), i.vjsPlayer.trigger("revealControls"), i.playerManager.replay()
            }

            function n(e) {
                e.stopPropagation(), i.playerManager.click()
            }
            var i = this;
            this.createButtonContainer();
            for (var o = 0; o < e.length; o++) {
                var r = e[o],
                    a = r.type;
                switch (a) {
                    case "replay":
                        this.addButton("vjs-big-play-button-replay", r.text || "Replay", a, t);
                        break;
                    case "learnMore":
                        this.addButton("vjs-ec-button-learnmore", r.text || "Learn More", a, n);
                        break;
                    default:
                        h("Invalid endCard button type: " + a)
                }
            }
        }
    }, e.exports = i
}, function(e, t, p) {
    function u(e, t, n, i, o) {
        function r() {
            l.CompanionClickTracking && d({
                command: "requestTracking",
                uniqueId: u,
                data: "companion-click"
            }), l.hasOwnProperty("StaticResource") && l.CompanionClickThrough && window.open(l.CompanionClickThrough)
        }

        function a() {
            l.TrackingEvents && 0 < l.TrackingEvents.length && d({
                command: "requestTracking",
                uniqueId: u,
                data: "creative-view"
            })
        }
        var s = e,
            l = i,
            d = o,
            c = {
                width: t,
                height: n
            },
            u = (new Date).getTime() + Math.floor(1e4 * Math.random()),
            e = (d({
                command: "addTrackingEvents",
                uniqueId: u,
                data: l
            }), !0);
        l.hasOwnProperty("StaticResource") ? "application/x-javascript" === (i = l.StaticResource.type) ? ((o = document.createElement("script")).src = l.StaticResource.src, o.onload = a(), s.appendChild(o)) : 0 === i.indexOf("image") && ((t = document.createElement("img")).src = l.StaticResource.src, t.style.maxWidth = "100%", t.style.maxHeight = "100%", t.style.width = "auto", t.style.height = "auto", t.style.margin = "auto", t.style.display = "block", t.style.top = 0, t.style.bottom = 0, t.style.left = 0, t.style.right = 0, t.style.position = "absolute", t.onload = a(), t.onclick = r, e = !1, t.style.cursor = "pointer", s.innerHTML = "", s.style.position = "relative", s.appendChild(t)) : l.hasOwnProperty("IFrameResource") ? ((n = document.createElement("iframe")).src = l.IFrameResource, n.scrolling = "no", n.style.width = "100%", n.style.height = "100%", n.style.border = "none", n.style.overflow = "hidden", n.onload = a(), e = !1, s.appendChild(n)) : l.hasOwnProperty("HTMLResource") && (0 === l.HTMLResource.indexOf("http") ? p(29).load(l.HTMLResource, function(e, t) {
            e || 0 === t.length || (s.style.display = "inline-block", s.style.position = "relative", s.innerHTML = t, a())
        }) : (s.style.display = "inline-block", s.style.position = "relative", s.innerHTML = l.HTMLResource, a())), e && (l.hasOwnProperty("StaticResource") && l.CompanionClickThrough && (s.style.cursor = "pointer"), s.onclick = r), this.stop = function() {
            "concurrent" === l.renderingMode && (s.innerHTML = "")
        }, this.getData = function() {
            return {
                container: s,
                companionData: l,
                size: c
            }
        }
    }

    function i(e, t, n) {
        for (var i, o = t, r = n, a = [], s = (m.always(f, "Version: 0.1.11"), []), l = 0; l < o.companionContainers.length; l++) try {
            var d = window.getComputedStyle(o.companionContainers[l], null),
                c = {
                    id: l,
                    width: parseInt(d.width),
                    height: parseInt(d.height),
                    companion: null
                };
            s.push(c)
        } catch (e) {}
        for (h.selectCompanionsForContainers(e, s), l = 0; l < s.length; l++) s[l].companion && (i = new u(o.companionContainers[l], s[l].width, s[l].height, s[l].companion, r), a.push(i));
        this.stop = function() {
            for (l = 0; l < a.length; l++) a[l].stop();
            a.length = 0
        }, this.getCompanionsData = function() {
            var e = [];
            for (l = 0; l < a.length; l++) e.push(a[l].getData());
            return e
        }
    }
    var h = p(27),
        m = p(2),
        f = "CompanionsHandler > ";
    e.exports = {
        renderCompanions: function(e, t, n) {
            return m.log(f, "renderCompanions called."), new i(e, t, n)
        },
        stopCompanions: function(e) {
            e && e.stop()
        },
        parse: function(e) {
            if (0 === e.length) return m.warn(f, "parseCompanions > empty companions xml"), null;
            n = (t = e).indexOf("<"), t = t.substr(-1 === n ? 0 : n), "<CompanionAds" !== (e = (t = -1 !== (n = t.lastIndexOf(">")) ? t.substr(0, n + 1) : t).trim()).substr(0, 13) && (e = "<CompanionAds>" + e + "</CompanionAds>");
            var t, n = null;
            if (void 0 !== window.DOMParser) {
                if ("parsererror" === (n = (new DOMParser).parseFromString(e, "text/xml")).documentElement.nodeName) {
                    try {
                        m.error(f, "parseCompanions > Error reason = " + n.documentElement.childNodes[0].nodeValue)
                    } catch (e) {}
                    return m.warn(f, "parseCompanions > invalide xml structure"), null
                }
            } else {
                if (void 0 === window.ActiveXObject) return m.error(f, "parseCompanions > Failed to parse vast xml by window.ActiveXObject(Microsoft.XMLDOM)"), null;
                try {
                    if ((n = new window.ActiveXObject("Microsoft.XMLDOM")).loadXML(e), 0 !== n.parseError.errorCode) return m.error(f, n.parseError), null
                } catch (e) {
                    return m.error(f, "parseCompanions > Failed to parse vast xml by window.ActiveXObject(Microsoft.XMLDOM)", e), null
                }
            }
            return n ? p(31).parse(n) : (m.error(f, "parseCompanions > invalid xml structure"), null)
        }
    }
}, function(e, t, n) {
    var i = ["video/mp4", "video/webm", "video/ogg", "video/x-ms-wmv", "video/x-msvideo", "video/mpeg", "video/quicktime", "video/3gpp", "video/3gpp2", "video/x-m4v", "application/javascript", "application/x-javascript"],
        o = ["audio/mpeg", "audio/mp4", "audio/ogg", "audio/x-pn-realaudio", "application/javascript", "application/x-javascript"],
        m = [],
        a = 0,
        s = n(28),
        f = n(2),
        v = "Rendition Manager > ";

    function l(e) {
        for (var t = 0; t < m.length;) ! function(e, t) {
            var n;
            if (t) {
                for (n = 0; n < o.length; n++)
                    if (e === o[n]) return 1
            } else
                for (n = 0; n < i.length; n++)
                    if (e === i[n]) return 1
        }(m[t].type.toLowerCase(), e) ? m.splice(t, 1) : t++
    }

    function d(e, t) {
        for (var n = [], i = -1, o = 0; o < m.length; o++) m[o].width >= e && (-1 === i || i >= m[o].width - e) && (i > m[o].width - e && (n.length = 0), n.push(m[o]), i = m[o].width - e);
        if (0 < n.length) m.length = 0, m = n.slice();
        else {
            for (o = 0; o < m.length; o++) m[o].width < e && (-1 === i || i >= e - m[o].width) && (i > e - m[o].width && (n.length = 0), n.push(m[o]), i = e - m[o].width);
            0 < n.length && (m.length = 0, m = n.slice())
        }
        if (1 !== m.length) {
            for (i = -1, o = n.length = 0; o < m.length; o++) m[o].height >= t && (-1 === i || i >= m[o].height - t) && (i > m[o].height - t && (n.length = 0), n.push(m[o]), i = m[o].height - t);
            if (0 < n.length) m.length = 0, m = n.slice();
            else {
                for (o = 0; o < m.length; o++) m[o].height < t && (-1 === i || i >= t - m[o].height) && (i > t - m[o].height && (n.length = 0), n.push(m[o]), i = t - m[o].height);
                0 < n.length && (m.length = 0, m = n.slice())
            }
        }
    }

    function r() {
        return 1
    }

    function c(e) {
        for (var t = [], n = -1, i = 0; i < m.length; i++) m[i].bitrate <= e && (-1 === n || n >= e - m[i].bitrate) && (n > e - m[i].bitrate && (t.length = 0), n = e - m[i].bitrate, t.push(m[i]));
        if (0 < t.length) m.length = 0, m = t.slice();
        else
            for (i = 0; i < m.length; i++) m[i].bitrate >= e && (-1 === n || n >= m[i].bitrate - e) && (n > m[i].bitrate - e && (t.length = 0), n = m[i].bitrate - e, t.push(m[i]));
        return 1 !== t.length && 0 !== a && 1 === a ? (i = 0) < t.length ? (r(t[i].type.toLowerCase()), t[i]) : null : t[0]
    }

    function u(e) {
        return e ? (e.requiredPlayer = 1, e.success = !0, f.info(v, "Selected rendition: ", e), e) : (f.error(v, "Failed to select rendition"), {
            success: !1,
            errorCode: 403
        })
    }

    function p(e, t, n) {
        var i = function(e, t, n) {
            for (var i = null, o = [], r = 0; r < m.length;) !m[r].apiFramework || m[r].apiFramework.toLowerCase().indexOf("vpaid") < 0 ? (o.push(m[r]), m.splice(r, 1)) : r++;
            if (0 < m.length) {
                if (1 === m.length) return m[0];
                d(e, t), i = 1 === m.length ? m[0] : c(n)
            }
            return null === i && (m = o.slice()), i
        }(e, t, n);
        return i ? (r(i.type.toLowerCase()), f.info(v, "VPAID selected"), i) : (a = 1, 0 === m.length ? null : 1 === m.length ? (r(m[0].type.toLowerCase()), m[0]) : (d(e, t), 1 === m.length ? (f.log(v, "Rendition selected by size"), r(m[0].type.toLowerCase()), m[0]) : (f.log(v, "Try select rendition by bitrate"), c(n))))
    }

    function h(e, t, n, i) {
        i.playerTechnology = ["html5"], a = 1, l(i.onlyAudio);
        for (var i = function(e) {
                if (e && 0 < e) f.info(v, "Selected bitrate (not from cache): " + e);
                else {
                    e = 1;
                    try {
                        var t = s.getGenericData("anxBandwidth");
                        t ? (e = t, f.info(v, "Selected bitrate (from cache): " + e)) : f.info(v, "No bitrate data present in cache (use bitrate 1)")
                    } catch (e) {
                        f.warn(v, "Exception during getting bitrate from cache (use bitrate 1)")
                    }
                }
                return e
            }(n), o = m.slice(), r = m.length = 0; r < o.length; r++) m.push(o[r]);
        return f.log(v, "HTML5 rendition count = " + m.length), 0 < m.length && (n = p(e, t, i)) ? u(n) : u(null)
    }

    function g(e, t) {
        for (var n = 0; n < e.length; n++)
            if (e[n].id === t) {
                e.splice(n, 1);
                break
            }
    }

    function y(e, t) {
        if (e && 0 !== e.companions.length && t && 0 !== t.length) {
            m = [];
            for (var n = 0; n < e.companions.length; n++) {
                var i = e.companions[n];
                try {
                    r = Object.assign({}, i)
                } catch (e) {
                    try {
                        var o = JSON.stringify(i),
                            r = JSON.parse(o)
                    } catch (e) {
                        continue
                    }
                }
                r.id = n, r.type = "unknown", i.hasOwnProperty("StaticResource") && (r.type = i.StaticResource.type), m.push(r)
            }
            if (0 !== m.length)
                for (var a = m.slice(), n = 0; n < t.length && 0 < a.length; n++) {
                    for (var s = t[n], l = (m.length = 0, m = a.slice(), u = c = d = l = void 0, s.width), d = s.height, c = [], u = 0; u < m.length; u++) m[u].width === l && m[u].height === d && c.push(m[u]);
                    if (1 === (m = (m.length = 0) < c.length ? c.slice() : m).length) f.log(v, "Companion rendition selected by size"), s.companion = m[0], g(a, s.companion.id);
                    else if (0 === m.length) f.log(v, "Companion rendition not selected for container"), s.companion = null;
                    else {
                        for (var p = !1, h = 0; h < m.length; h++)
                            if (m[h].apiFramework && m[h].apiFramework.toLowerCase().indexOf("vpaid") < 0) {
                                f.log(v, "Companion rendition selected by apiFramework"), s.companion = m[h], g(a, s.companion.id), p = !0;
                                break
                            }
                        p || (f.log(v, "First companion rendition selected"), s.companion = m[0], g(a, s.companion.id))
                    }
                }
        }
    }
    e.exports = {
        init: function(e) {
            m = function(e) {
                for (var t = [], n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.hasOwnProperty("type") && (i.hasOwnProperty("width") || (i.width = 0), i.hasOwnProperty("height") || (i.height = 0), i.hasOwnProperty("bitrate") || (i.bitrate = 2147483647), t.push(i))
                }
                return t
            }(e)
        },
        getUrl: h,
        selectCompanionsForContainers: function(e, t) {
            y(e, t)
        }
    }
}, function(e, t, n) {
    var i = n(8),
        o = "Cache Manager",
        r = 24e5,
        a = "___appnexus_video_cachemanager_generic_data___",
        s = "___appnexus_video_cachemanager_ad_token___",
        l = {},
        d = 2;

    function c(e, t) {
        switch (d) {
            case 0:
            case 1:
                break;
            default:
                n = e, i = t, l && (l[n] = i)
        }
        var n, i
    }

    function u(e) {
        switch (d) {
            case 0:
            case 1:
                return null;
            default:
                var t = e;
                if (l) return l[t]
        }
    }

    function p(e) {
        switch (d) {
            case 0:
            case 1:
                break;
            default:
                t = e, l && delete l[t]
        }
        var t
    }

    function h(e) {
        return "apn_" + e
    }
    i.debug("Using Cache Method " + d, o), e.exports = {
        setGenericData: function(e, t) {
            if (void 0 !== e && void 0 !== t) {
                e = a + e;
                try {
                    return c(e, t), !0
                } catch (e) {}
            }
            return !1
        },
        getGenericData: function(e) {
            if (void 0 !== e) return u(e = a + e)
        },
        deleteGenericData: function(e) {
            void 0 !== e && p(e = a + e)
        },
        forceStorageMethod: function(e) {
            d = e, i.debug("Forced usage of cache method " + d, o)
        },
        addAd: function(e, t) {
            if (e) {
                var t = h(t),
                    n = {};
                n.timestamp = (new Date).getTime(), n.ad = e;
                try {
                    c(t, JSON.stringify(n))
                } catch (e) {}
            }
        },
        getAd: function(e) {
            var e = h(e),
                t = (new Date).getTime();
            try {
                var n = u(e),
                    i = n && JSON.parse(n);
                p(e)
            } catch (e) {}
            return i && i.timestamp && 0 < i.timestamp && t - i.timestamp <= r ? i.ad : null
        },
        clearAd: function(e) {
            e = h(e);
            try {
                p(e)
            } catch (e) {}
        },
        setTimeToLive: function(e) {
            r = 6e4 * e
        },
        getNextAdToken: function() {
            return e = (e = u(s)) ? parseInt(e) : 0, c(s, e += 1), e;
            var e
        }
    }
}, function(e, t, f) {
    var n = f(2);

    function v(t, n, i, o, r, a) {
        function s(e) {
            p.logDebug(e, "URL Loader")
        }
        var l, d = 0,
            c = 0,
            u = !1,
            p = f(8),
            h = f(30),
            m = !0;
        if (r && void 0 !== r.withCredentials && (m = r.withCredentials), window.XMLHttpRequest) l = new XMLHttpRequest;
        else if (window.ActiveXObject) try {
            l = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (e) {
            try {
                l = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }
        l ? (l.onreadystatechange = function() {
            if (4 === l.readyState)
                if (200 === l.status) {
                    if (s("duration: " + c + ", response length: " + l.responseText.length), u && l.responseText && 2048 < l.responseText.length) {
                        var e = 8 * l.responseText.length * 1e3 / (1024 * Math.max(1, c)),
                            e = parseInt(e.toString());
                        s("Bandwidth: " + e);
                        try {
                            h.setGenericData("anxBandwidth", e)
                        } catch (e) {}
                    }
                    i && i.call(this, void 0, l.responseText, l)
                } else 400 <= l.status && l.status < 600 && i && i.call(this, l.status, "", l);
            else 2 === l.readyState ? d = (new Date).getTime() : 3 === l.readyState && 0 < d && (u = !0, c = (new Date).getTime() - d)
        }, l.onerror = function() {
            var e;
            m ? ((e = r || {}).withCredentials = !1, v(t, n, i, o, e, a)) : i && (e = 0 === l.status ? "404" : l.status.toString(), i.call(this, e, "", l))
        }, l.ontimeout = function() {
            i && i.call(this, "Timeout", "", l)
        }, l.open(a, t), o && (l.timeout = o), l.withCredentials = m, d = 0, "POST" === a ? l.send(n) : l.send()) : i && i.call(this, "406", "")
    }
    e.exports = {
        load: function(e, t, n) {
            v(e, null, t, n, {
                withCredentials: !0
            }, "GET")
        },
        loadPost: function(e, t, n, i) {
            v(e, t, n, i, {
                withCredentials: !0
            }, "POST")
        },
        trackPixel: function(e, t) {
            e = e, n.log("Logging Event: " + t + " at url:" + e), new Image(1, 1).src = e
        }
    }
}, function(e, t, n) {
    var i = n(8),
        o = "Cache Manager",
        r = 24e5,
        a = "___appnexus_video_cachemanager_generic_data___",
        s = "___appnexus_video_cachemanager_ad_token___",
        l = {},
        d = 2;

    function c(e, t) {
        switch (d) {
            case 0:
            case 1:
                break;
            default:
                n = e, i = t, l && (l[n] = i)
        }
        var n, i
    }

    function u(e) {
        switch (d) {
            case 0:
            case 1:
                return null;
            default:
                var t = e;
                if (l) return l[t]
        }
    }

    function p(e) {
        switch (d) {
            case 0:
            case 1:
                break;
            default:
                t = e, l && delete l[t]
        }
        var t
    }

    function h(e) {
        return "apn_" + e
    }
    i.debug("Using Cache Method " + d, o), e.exports = {
        setGenericData: function(e, t) {
            if (void 0 !== e && void 0 !== t) {
                e = a + e;
                try {
                    return c(e, t), !0
                } catch (e) {}
            }
            return !1
        },
        getGenericData: function(e) {
            if (void 0 !== e) return u(e = a + e)
        },
        deleteGenericData: function(e) {
            void 0 !== e && p(e = a + e)
        },
        forceStorageMethod: function(e) {
            d = e, i.debug("Forced usage of cache method " + d, o)
        },
        addAd: function(e, t) {
            if (e) {
                var t = h(t),
                    n = {};
                n.timestamp = (new Date).getTime(), n.ad = e;
                try {
                    c(t, JSON.stringify(n))
                } catch (e) {}
            }
        },
        getAd: function(e) {
            var e = h(e),
                t = (new Date).getTime();
            try {
                var n = u(e),
                    i = n && JSON.parse(n);
                p(e)
            } catch (e) {}
            return i && i.timestamp && 0 < i.timestamp && t - i.timestamp <= r ? i.ad : null
        },
        clearAd: function(e) {
            e = h(e);
            try {
                p(e)
            } catch (e) {}
        },
        setTimeToLive: function(e) {
            r = 6e4 * e
        },
        getNextAdToken: function() {
            return e = (e = u(s)) ? parseInt(e) : 0, c(s, e += 1), e;
            var e
        }
    }
}, function(e, t) {
    e.exports = {
        parse: function(e) {
            var t = {
                    companions: []
                },
                n = new function() {
                    this.getSubNodes = function(e, t) {
                        e = e.getElementsByTagName(t);
                        return 0 < e.length ? e : null
                    }, this.getSubNode = function(e, t, n) {
                        n = n || 0;
                        e = e.getElementsByTagName(t);
                        return e.length > n ? e[n] : null
                    }, this.getNodeValue = function(e) {
                        return 0 === e.childNodes.length ? "" : e.childNodes[0].nodeValue.trim()
                    }, this.getNodeValues = function(e) {
                        if (0 === e.childNodes.length) return "";
                        for (var t = "", n = 0; n < e.childNodes.length; n++) t += e.childNodes[n].nodeValue;
                        return t.trim()
                    }, this.getNodeAttributeValue = function(e, t) {
                        e = e.getAttribute(t);
                        return e = null === e ? "" : e
                    }, this.getNodeAttributeNumberValue = function(e, t, n) {
                        n = n || 0, e = this.getNodeAttributeValue(e, t);
                        return n = 0 < e.length ? (0 <= e.indexOf(".") ? parseFloat : parseInt)(e) : n
                    }, this.getNodeAttributeBooleanValue = function(e, t, n) {
                        n = n || !1, e = this.getNodeAttributeValue(e, t);
                        return n = 0 < e.length ? "t" === e.toLowerCase().charAt(0) : n
                    }, this.getSubNodeValue = function(e, t, n) {
                        n = void 0 === n ? "" : n;
                        e = this.getSubNode(e, t);
                        return null !== e ? this.getNodeValue(e) : n
                    }, this.getSubNodeWholeValue = function(e, t, n) {
                        n = void 0 === n ? "" : n;
                        e = this.getSubNode(e, t);
                        return null !== e ? this.getNodeValues(e) : n
                    }, this.getSubNodeBooleanValue = function(e, t, n) {
                        n = void 0 === n ? "false" : n;
                        e = this.getSubNodeValue(e, t);
                        return 0 < e.length && "t" === e.toLowerCase().charAt(0) || !(0 < e.length && "f" === e.toLowerCase().charAt(0)) && n
                    }
                },
                e = n.getSubNode(e, "CompanionAds"),
                i = n.getNodeAttributeValue(e, "required"),
                o = (i && 0 < i.length && (t.required = i), n.getSubNodes(e, "Companion"));
            if (o)
                for (var r = 0; r < o.length; r++) {
                    var a = o[r],
                        s = {},
                        l = n.getNodeAttributeNumberValue(a, "width", -1),
                        d = n.getNodeAttributeNumberValue(a, "height", -1);
                    if (!(l <= 0 || d <= 0)) {
                        s.width = l, s.height = d;
                        (l = n.getNodeAttributeValue(a, "id")) && (s.id = l), 0 < (l = n.getNodeAttributeNumberValue(a, "assetWidth", -1)) && (s.assetWidth = l), 0 < (l = n.getNodeAttributeNumberValue(a, "assetHeight", -1)) && (s.assetHeight = l), 0 < (l = n.getNodeAttributeNumberValue(a, "expandedWidth", -1)) && (s.expandedWidth = l), 0 < (l = n.getNodeAttributeNumberValue(a, "expandedHeight", -1)) && (s.expandedHeight = l), (l = n.getNodeAttributeValue(a, "apiFramework")) && (s.apiFramework = l), (l = n.getNodeAttributeValue(a, "adSlotId")) && (s.adSlotId = l), (l = n.getNodeAttributeValue(a, "required")) && (s.required = l), (l = n.getNodeAttributeValue(a, "renderingMode")) && (s.renderingMode = l), (l = n.getSubNodeValue(a, "AltText")) && (s.AltText = l), (l = n.getSubNodeValue(a, "AdParameters")) && (s.AdParameters = l);
                        var c, d = n.getSubNode(a, "StaticResource");
                        if (d && (l = n.getNodeAttributeValue(d, "creativeType"))) {
                            if ("video/x-flv" === l || "video/x-f4v" === l || "video/f4v" === l || "application/x-shockwave-flash" === l) continue;
                            var u = {
                                type: l
                            };
                            (l = n.getNodeValues(d)) && (u.src = l, s.StaticResource = u)
                        }(l = n.getSubNodeWholeValue(a, "IFrameResource")) && (s.IFrameResource = l), (l = n.getSubNodeWholeValue(a, "HTMLResource")) && (s.HTMLResource = l), (l = n.getSubNodeValue(a, "CompanionClickThrough")) && (s.CompanionClickThrough = l);
                        var p = n.getSubNodes(a, "CompanionClickTracking");
                        if (p)
                            for (s.CompanionClickTracking = [], c = 0; c < p.length; c++) m = p[c], (v = n.getNodeValues(m)) && s.CompanionClickTracking.push(v);
                        var h = n.getSubNodes(a, "Tracking");
                        if (h)
                            for (s.TrackingEvents = [], c = 0; c < h.length; c++) {
                                var m = h[c],
                                    f = n.getNodeAttributeValue(m, "event"),
                                    v = n.getNodeValues(m);
                                f && v && s.TrackingEvents.push({
                                    eventType: f,
                                    url: v
                                })
                            }
                        t.companions.push(s)
                    }
                }
            return t
        }
    }
}, function(e, t, n) {
    function o(e) {
        a.verbose(r, e)
    }
    var r = "[PlayerManager_Destroy]",
        a = n(2),
        s = n(33),
        l = n(11);
    e.exports = function(n, i) {
        return {
            init: function(t) {
                a.debug(r, "init"), t.on("ended", function() {
                    !1 === n.options.vpaid && t.trigger("customDestroy")
                }), t.on("customDestroy", function() {
                    function e() {
                        var e;
                        (i.isEnded = !0) === n.options.disableCollapse.enabled && (i.options.sideStreamObject && i.options.sideStreamObject.isActivated && i.options.sideStreamObject.moveAdUnitBack(), i.options.sideStream.wasEnabled = i.options.sideStream.enabled, i.options.sideStream.enabled = !1), !0 !== n.options.disableCollapse.enabled || !0 !== n.options.disableCollapse.replay || n.options.endCard.enabled ? ((n.options.wcElement && n.options.wcElement instanceof Element ? n.options.wcElement.querySelector("#" + String(n.options.iframeVideoWrapperId)) : document.getElementById(n.options.iframeVideoWrapperId)).style.background = n.options.videoBackgroundColor, (n.isAndroid && n.isAndroid() || "below" === n.options.controlBarPosition) && (t.controlBar.el().style.bottom = s.getBottomMarginForControlbar(n.options, !1) + "em"), o("hiding control bar and big play button"), t.trigger("concealControls"), t.bigPlayButton.hide(), n.options.disableCollapse.enabled || (i.isSkipped = !0, i.destroyWithoutSkip()), n.options.endCard.enabled || (o("isCompleted = true"), i.isCompleted = !0)) : "preview" === n.options.adType && n.options.onlyAudio || (t.bigPlayButton.show(), t.bigPlayButton.addClass("vjs-big-play-button-replay"), t.controlBar.playToggle.el().style["pointer-events"] = "none"), (i.isFullscreen || i.adVideoPlayer.isFullscreen_) && (o("exiting fullscreen before destroy()"), document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : l.isIos() && (e = r(document)) && e.webkitExitFullscreen && e.webkitExitFullscreen()), i.endCard && (o("showing EndCard."), i.endCard.show())
                    }
                    var r = function(e) {
                        var t, n = e.activeElement;
                        if (n) {
                            if ("IFRAME" === n.tagName) return n.contentDocument ? r(n.contentDocument) : null;
                            n = e.getElementsByTagName("video");
                            if (0 < n.length && n[0].webkitDisplayingFullscreen) return n[0]
                        }
                        var i = e.getElementsByTagName("iframe");
                        if (0 < i.length)
                            for (var o = 0; o < i.length; o++)
                                if (i[o].contentDocument && (t = r(i[o].contentDocument))) return t;
                        return null
                    };
                    n.options.vpaid ? e() : n.dispatchEventToAdunit({
                        name: "video_complete"
                    }, function() {
                        e()
                    })
                })
            }
        }
    }
}, function(e, t, n) {
    function a(e, t, r, a) {
        function i(e, t, n, i) {
            var o;
            s[e] && (o = s[e].el_, a && ("playToggle" === e ? o = r.getElementById("customPlayToggle") : "fullscreenToggle" === e && (o = r.getElementById("customFullscreenToggle"))), o && (s.el_.appendChild(o), o.style.float = i))
        }
        var s = t.controlBar,
            t = e.options.playerSkin.buttonOrderLeft,
            e = e.options.playerSkin.buttonOrderRight;
        t && t.forEach(function(e, t, n) {
            i(e, 0, 0, "left")
        }), e && e.reverse().forEach(function(e, t, n) {
            i(e, 0, 0, "right")
        })
    }
    var s = n(34),
        l = n(11),
        i = n(2),
        d = function(e) {
            i.debug("Custom Skinning: " + e)
        },
        c = function(e, t) {
            var n = e.playerSkin,
                i = -3.2;
            return "text" !== e.showProgressBar && !0 !== e.showProgressBar && !1 !== e.showProgressBar && !1 !== t || (i = -3), i = n.controlBarHeight ? parseInt(i * n.controlBarHeight / 30) : i
        };
    e.exports = {
        render: function(e, t, n, i) {
            var o, r;
            a(e, t, n, i), t = e, e = n, n = i, d("Applying custom styles/skins"), o = i = "", n && (i = ".vjs-default-skin.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {display: block;visibility: visible;opacity: 1} .vjs-loading-spinner { position: absolute; top: 50%; left: 50%; font-size: 4em; line-height: 1; width: 1em; height: 1em; margin-left: -0.5em; margin-top: -0.5em; opacity: 0.75; display: block; -webkit-animation: spin 1.5s infinite linear; -moz-animation: spin 1.5s infinite linear; -o-animation: spin 1.5s infinite linear; animation: spin 1.5s infinite linear; }\n"), l.isIpad() && (o = ".vjs-default-skin.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {display: block;visibility: visible;opacity: 1}"), n = "\n", (r = t.options.playerSkin) ? (r.bigPlayButtonColor || (r.bigPlayButtonColor = "#7b7a7d"), r.topBarColor && (n += "#top_chrome { background: " + r.topBarColor + "; }\n"), r.dividerColor ? n += "#top_chrome { border-bottom-color: " + r.dividerColor + "; }\n" : n += "#top_chrome { border-bottom-color: " + r.bottomDividerColor + "; }\n", "number" == typeof r.dividerHeight ? n += "#top_chrome { border-bottom-width: " + r.dividerHeight + "; border-bottom-style: solid; }\n" : n += "#top_chrome { border-bottom-width: " + r.bottomDividerWidth + "; border-bottom-style: solid; }\n", r.topBarTextColor && (n += ".top-bar-text { color: " + r.topBarTextColor + "; }\n"), r.controlBarColor && (n += ".vjs-default-skin .vjs-control-bar { background-color: " + r.controlBarColor + "; }\n"), r.controlBarControlsColor && (n = (n += ".vjs-default-skin .vjs-control-bar { color: " + r.controlBarControlsColor + "; }\n") + ".vjs-default-skin:hover .vjs-control-bar { color: " + r.controlBarControlsColor + "; }\n"), r.bigPlayButtonColor && (n = (n += ".vjs-default-skin .vjs-big-play-button { color: " + r.bigPlayButtonColor + "; border-color: " + r.bigPlayButtonColor + "; }\n") + ".vjs-default-skin:hover .vjs-big-play-button { color: " + r.bigPlayButtonColor + "; border-color: " + r.bigPlayButtonColor + "; }\n"), r.progressBarElapsedColor && (n += ".vjs-default-skin .vjs-play-progress { background: " + r.progressBarElapsedColor + " }\n"), r.volumeBarBackground && (n += ".vjs-default-skin .vjs-volume-level { background: " + r.volumeBarBackground + " }\n"), r.controlBarHeight && (n = (n = (n += ".vjs-default-skin .vjs-control-bar { height: " + r.controlBarHeight + "px; }\n") + ".vjs-default-skin .vjs-control { font-size: " + Math.ceil(r.controlBarHeight / 3) + "px; }\n") + ".vjs-default-skin .vjs-time-divider { height: " + r.controlBarHeight + "px; line-height: " + r.controlBarHeight / 9.7 + "em} \n.vjs-default-skin .vjs-progress-control { font-size: 0.3em } \n"), !r.videoBackgroundColor || void 0 !== t.options.isWaterfall && !1 !== t.options.isWaterfall || (n += ".video-js {background:" + r.videoBackgroundColor + "} \n"), t.options.sideStream.dynamicBigPlayButtonOnSideStream && !0 === t.options.sideStream.dynamicBigPlayButtonOnSideStream && (n += ".vjs-default-skin .vjs-big-play-button {-webkit-transition: all 0s;-moz-transition: all 0s;-o-transition: all 0s;transition: all 0s;} \n")) : n += "#top_chrome { border-bottom-color: " + r.bottomDividerColor + "; border-bottom-width: " + r.bottomDividerWidth + "; border-bottom-style: solid; }\n", l.isIos() ? n += ".vjs-default-skin .vjs-control-bar { display: block;visibility: visible;opacity: 1;bottom:" + c(t.options, !0) + "em }\n" : (t.isAndroid && t.isAndroid() || "below" === t.options.controlBarPosition) && (n += ".vjs-default-skin .vjs-control-bar { display: block !important;visibility: visible !important;opacity: 1 !important ;bottom:" + c(t.options, !0) + "em }\n"), d("Generating css element"), (r = document.createElement("style")).type = "text/css", r.innerHTML = s + o + 'video::-webkit-media-controls-start-playback-button {display: none !important;-webkit-appearance: none;}\n.vjs-default-skin .vjs-big-play-button-replay:before {content: "\\e984";}\n' + n + i + '.vjs-default-skin .vjs-ec-button-learnmore:before {content: "\\e926";} .ec-button {display: block; cursor: pointer; height: 1em; font-family: VideoJS; margin: 0.5em; padding: 0.3em; border: 2px solid gray; background-color: rgba(128,128,128,0); transition: background-color 0.8s; -webkit-transition: background-color 0.5s;}\n', e.head.appendChild(r)
        },
        bottomMarginOfControlBarWithProgressBar: -3.2,
        bottomMarginOfControlBar: -3,
        getBottomMarginForControlbar: c
    }
}, function(e, t) {
    e.exports = '/* SKIN\n================================================================================\nThe main class name for all skin-specific styles. To make your own skin,\nreplace all occurrences of \'vjs-default-skin\' with a new name. Then add your new\nskin name to your video tag instead of the default skin.\ne.g. <video class="video-js my-skin-name">\n*/\n.vjs-default-skin {\n  color: #CCCCCC;\n}\n/* Custom Icon Font\n--------------------------------------------------------------------------------\nThe control icons are from a custom font. Each icon corresponds to a character\n(e.g. "\\e001"). Font icons allow for easy scaling and coloring of icons.\n*/\n@font-face {\n  font-family: \'VideoJS\';\n  src: url(\'font/vjs.eot\');\n  src: url(data:application/font-woff;base64,d09GRgABAAAAABG0AAsAAAAAEWgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIHUGNtYXAAAAFoAAAAfAAAAHyz47CpZ2FzcAAAAeQAAAAIAAAACAAAABBnbHlmAAAB7AAADTwAAA08MPTaTGhlYWQAAA8oAAAANgAAADYP2gkbaGhlYQAAD2AAAAAkAAAAJAkgBThobXR4AAAPhAAAAGQAAABkW54DGGxvY2EAAA/oAAAANAAAADQeIiIQbWF4cAAAEBwAAAAgAAAAIAAiAIluYW1lAAAQPAAAAVYAAAFWUqTEiXBvc3QAABGUAAAAIAAAACAAAwAAAAMD/AGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6ioDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAGAAAAAUABAAAwAEAAEAIOAO4B/mAOkm6YTqKv/9//8AAAAAACDgAOAe5gDpJumE6ir//f//AAH/4yAEH/UaFRbwFpMV7gADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAIAAP/ABAADwAAGAA0AAAERJwcnNycDBxchERc3BACgwGDAoKDAoP5goMADwP5goMBgwKD9YMCgAaCgwAAAAAABAMAAQANAA0AAAgAAEwkBwAKA/YADQP6A/oAAAgCAAEADgANAAAMABwAAEyERIQEhESGAAUD+wAHAAUD+wANA/QADAP0AAAABAAAADwHAA3EACwAAATYWFREUBi8BIxEzAZEUGxsU8aCgA3EUDBv8xBsMFPEBgAACAAAADwJHA3EAGAAkAAAlIiYnJjQ3PgE0JicmNDc2MhceARQGBw4BAzYWFREUBi8BIxEzAiUJEgcODh4fHx4ODg4oDiwtLSwHEp0UGxsU8aCg2wcHDigOHk1QTR4OKA4ODixxdHEsBwcClhQMG/zEGwwU8QGAAAADAAAADwNwA3EAHQA2AEIAACUiJicmNDc+ATQmJyY0NzYyFx4DFRQOAgcOASciJicmNDc+ATQmJyY0NzYyFx4BFAYHDgEDNhYVERQGLwEjETMC0AoRBw4OMTExMQ4ODicOHy8gEREgLx8HEbQJEgcODh4fHx4ODg4oDiwtLSwHEp0UGxsU8aCggAcIDicOMnuCezIOJw4PDx5HTVQrK1RNRx4IB1sHBw4oDh5NUE0eDigODg4scXRxLAcHApYUDBv8xBsMFPEBgAAAAAAEAAAADwRAA3EAIwBBAFoAZgAAJSImJyY0Nz4DNTQuAicmNDc2MhceAxUUDgIHDgEjJyImJyY0Nz4BNCYnJjQ3NjIXHgMVFA4CBw4BJyImJyY0Nz4BNCYnJjQ3NjIXHgEUBgcOAQM2FhURFAYvASMRMwN6CRIHDg4hMyISEiIzIQ4ODigOKD0pFhYpPSgHEgmqChEHDg4xMTExDg4OJw4fLyARESAvHwcRtAkSBw4OHh8fHg4ODigOLC0tLAcSnRQbGxTxoKAmBwcOKA4hTFNaLi5aU0whDigODg4oW2VsODhsZVsoBwdaBwgOJw4ye4J7Mg4nDg8PHkdNVCsrVE1HHggHWwcHDigOHk1QTR4OKA4ODixxdHEsBwcClhQMG/zEGwwU8QGAAAEAwP/AA0ADwAADAAAJAwIA/sABQAFAA8D+AP4AAgAABAAA/7oFXgPAAAMALwBSAHUAABMhESEBLgEnLgEnLgMjIg4CBw4BBw4BBx4BFx4BFx4DFz4DNz4BNz4BJS4DIyIOAhUUHgIzMj4CNyMOASMiJjU0NjMyFhczIS4DIyIOAhUUHgIzMj4CNyMOASMiJjU0NjMyFhczAAVe+qIE3QESIAUUCRBVfZxWVZ+AWBAJFAcfEQICER8HFAkQWICfVVacfVUQCRQFIBL9ugQgOE4yLlA7IiA8VjcrSTYjBIoEIyM2ICsmIikDiAHeBCE3TjMtUDsiIDxWNixJNiIFigQjIzcfKyYhKQSIA8D7+gIHh4opCQwHCxAKBAQKEAsHDAkpioeHiSoJDAYMEAoFAQEFChAMBgwJKom2NVM5HyhLa0JDa0soHzpUNSc1WzpPUS8rNVM5HyhLa0JDa0soHzpUNSc1WzpPUS8rAAABAIAAQAOAA0AAAwAAEyERIYADAP0AA0D9AAAACAA4AAADwAPAAAsAFwAjAC8ASABhAHoAhgAAARQWMzI2NTQmIyIGBRQWMzI2NTQmIyIGExQWMzI2NTQmIyIGAxQWMzI2NTQmIyIGBTgBMRQWMzI2NTgBMTgBMTQmIyIGFRQ0MSU4ATEUFjMyNjU4ATE4ATE0JiMiBhUUNDEDOAExFBYzMjY1OAExOAExNCYjIgYVFDQxAxQWMzI2NTQmIyIGAYBLNTVLSzU1SwEQSzU1S0s1NUuwJRsbJSUbGyVwJRsaJiYaGyX+8CUbGyUlGxsl/vAmGhslJRsaJiA5Jyg4OCgnOVgqHh4qKh4eKgNANUtLNTVLS6U1S0s1NUtL/rsbJSUbGyUl/tUaJiYaGyUlixslJRsbJSUbGxtwGiYmGhslJRsaGgIgKDg4KCc5OScoKP7wHioqHh4qKgAAAAACAAD/wAQAA8AABgANAAABEScHJzcnAQcXIREXNwHAoMBgwKAD4MCg/mCgwAGA/mCgwGDAoAHgwKABoKDAAAAAAQAA/8AEAAOAACIAAAEyHgIVFA4CIyImJw4DBzU+ATU0JicuAzU0PgICAGq7i1BQi7tqFCgUKVpdYDAzTQEBLEYxG1CLuwOAQXGYVlaYcUEDAikzHQoCGxpXNAcPBxxIUlwxVphxQQADAAD/wAQAA8AAEwAnAFoAAAEiDgIVFB4CMzI+AjU0LgIDMh4CFRQOAiMiLgI1ND4CAQ4DIyIuAicuAzU0PgI3FzgBMQ4BFBYXHgEzMjY3PgE0Jic3HgMVFA4CAgBqu4tQUIu7amq7i1BQi7tqNV1GKChGXTU1XUYoKEZdAWYeR01UKytUTUceHy8gEREgLx9DMTExMTB7Q0N7MDExMTFDHy8gEREgLwPAUIu7amq7i1BQi7tqaruLUP8AKEZdNTVdRigoRl01NV1GKP3PHy8gEREgLx8eR01UKytUTUceQzJ7gnsyLzMzLzJ7gnsyQx5HTVQrK1RNRwAAAAABAAD/wAQAA8AAMwAAASIGByU+ATU0JiclHgEzMjY1NCYjIgYVFBYXBS4BIyIGFRQWMzI2NwUOARUUFjMyNjU0JgNgIjsW/lEBAQEBAa8WOyJCXl5CQl4BAf5RFjsiQl5eQiI7FgGvAQFeQkJeXgEAGhfYBg0GBg0G2BcaXkJCXl5CBg0G2BcaXkJCXhoX2AYNBkJeXkJCXgAAAAACACD/8AQAA7AAOgByAAABLgEnLgEnLgEnLgEHDgEHDgEHDgEHDgEXHgEXHgEXHgEXHgE3PgE3PgE3PgE3PgE3OgEzMjY1PAE1MQcOAQcOAQcOAScuAScuAScuAScuATc+ATc+ATc+ATc+ARceARceARceARceAQcxHAEVFBYXDgEHBAABFRUUOSQjVC4tYTExXywtTyEhNBESEAEBFBMTNiEiTisrWi4uWSkpSx4fMRAJDgMBAgEbJWYRMx8fSSgoVSoqUycmRR0dLA8PDgEBEhARLh0eQyUlTycnTSQjQBobKQ4NDQEhGAUPCwHAMmMtLlIiIzUSEhEBARUTFDcjIlEtLF4vL1wrK00gIDIQERABARQSEjQhIEwpGTQbJRsBAwGqKEceHi4QDw8BARIRETEeHkcmJ1EpKVAlJUIcGysODw0BAREQEC0cHEEkI0smAQMBGSQDGjMYAAACAAD/wAQAA8AAGQAzAAABIg4CBz4DMzIeAhUUFjMyNjU0LgIDMj4CNw4DIyIuAjU0JiMiBhUUHgICAGm4ilIDAkNxlVVWmHFBOCgoOFCLu2ppuIpSAwJDcZVVVphxQTgoKDhQi7sDwE6Itmhbn3ZERnqjXSg4OChqu4tQ/ABOiLZoW592REZ6o10oODgoaruLUAAAAgAA/8AEAAPAADAAPAAAATUnLgEnNycHLgEvASMHDgEHJwcXDgEPARUXHgEXBxc3HgEfATM3PgE3FzcnPgE/AQUiJjU0NjMyFhUUBgQAkwQLBlaIeQwbDhjAGA4bDHmIVgYLBJOTBQoHV4h6DBoNGcAZDRoMeohXBwoFk/4ANUtLNTVLSwFgwBkNGg15iFYGCwWSkgULBlaIeQ0aDRnAGQ0aDXmIVwYLBZOTBQsGV4h5DRoNGSBLNTVLSzU1SwAABgBA/8ADwAPAABkAIQA3AEUAUwBhAAABLgEnLgEnLgEjISIGFREUFjMhMjY1ETQmJyceARcjNR4BExQGIyEiJjURNDYzMDoCMRUUFjsBAyEiJjU0NjMhMhYVFAYnISImNTQ2MyEyFhUUBichIiY1NDYzITIWFRQGA5YRLRkaMxcnKQv+ECEvLyEC4CEvDhyFFyUNmhEphgkH/SAHCQkHm7qbEw3goP5ADRMTDQHADRMTDf5ADRMTDQHADRMTDf5ADRMTDQHADRMTAtsXMxoZLREcDi8h/KAhLy8hAnALKSc2FykRmg0l/OgHCQkHA2AHCeANE/4AEw0NExMNDROAEw0NExMNDROAEw0NExMNDRMAAAAAAQAA/8AEAAPAAC0AAAEhNy4BIyIGBw4BFRQWFx4BMzI2Nz4BNxcOAyMiLgI1ND4CMzIeAhc3BAD+gJA3jE1NjDc2Ojo2N4xNTYw3BAkEYCNWYmw6aruLUFCLu2o1ZFxSI5YCQJA2Ojo2N4xNTYw3Njo6NgUJBVQoQS0ZUIu7amq7i1AVJzcjlgAAAAACAAAAAAPAA34ADwAqAAABFSMnByM1Nyc1Mxc3MxUHASImLwEjIiY1ETQ2OwE3PgEXHgEVERQGBw4BA8BVa2tVa2tVa2tVa/5LBgwF9nMNExMNc/YHEwkJCwsJAwYBVVVra1Vra1Vra1Vr/kAFBPcTDQFADRP3BgQDBBAK/MAKEAQBAQABAAAAAQAAi1igY18PPPUACwQAAAAAANWuYlIAAAAA1a5iUgAA/7oFXgPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAVeAAAAAAVeAAEAAAAAAAAAAAAAAAAAAAAZBAAAAAAAAAAAAAAAAgAAAAQAAAAEAADABAAAgAQAAAAEAAAABAAAAARAAAAEAADABV4AAAQAAIAEAAA4BAAAAAQAAAAEAAAABAAAAAQAACAEAAAABAAAAAQAAEAEAAAABAAAAAAAAAAACgAUAB4APgBMAGIAegC2ARwBsAHAAmYCdAMUAzQDaAPmBDQE4gUsBYwGFgZcBp4AAQAAABkAhwAIAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAMAAAABAAAAAAACAAcAPAABAAAAAAADAAMAKgABAAAAAAAEAAMAUQABAAAAAAAFAAsACQABAAAAAAAGAAMAMwABAAAAAAAKABoAWgADAAEECQABAAYAAwADAAEECQACAA4AQwADAAEECQADAAYALQADAAEECQAEAAYAVAADAAEECQAFABYAFAADAAEECQAGAAYANgADAAEECQAKADQAdHZqcwB2AGoAc1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMHZqcwB2AGoAc3ZqcwB2AGoAc1JlZ3VsYXIAUgBlAGcAdQBsAGEAcnZqcwB2AGoAc0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=) format("woff"), url(\'font/vjs.eot?#iefix\') format(\'embedded-opentype\'), url(\'font/vjs.ttf\') format(\'truetype\'), url(\'font/vjs.svg#icomoon\') format(\'svg\');\n  font-weight: normal;\n  font-style: normal;\n}\n/* Base UI Component Classes\n--------------------------------------------------------------------------------\n*/\n/* Slider - used for Volume bar and Seek bar */\n.vjs-default-skin .vjs-slider {\n  /* Replace browser focus highlight with handle highlight */\n  outline: 0;\n  position: relative;\n  cursor: pointer;\n  padding: 0;\n  /* background-color-with-alpha */\n  background-color: #333333;\n  background-color: rgba(51, 51, 51, 0.9);\n}\n.vjs-default-skin .vjs-slider:focus {\n  /* box-shadow */\n  -webkit-box-shadow: 0 0 2em #fff;\n  -moz-box-shadow: 0 0 2em #fff;\n  box-shadow: 0 0 2em #fff;\n}\n.vjs-default-skin .vjs-slider-handle {\n  position: absolute;\n  /* Needed for IE6 */\n  left: 0;\n  top: 0;\n}\n.vjs-default-skin .vjs-slider-handle:before {\n  content: "\\e009";\n  font-family: VideoJS;\n  font-size: 1em;\n  line-height: 1;\n  text-align: center;\n  text-shadow: 0em 0em 1em #fff;\n  position: absolute;\n  top: 0;\n  left: 0;\n  /* Rotate the square icon to make a diamond */\n  /* transform */\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n/* Control Bar\n--------------------------------------------------------------------------------\nThe default control bar that is a container for most of the controls.\n*/\n.vjs-default-skin .vjs-control-bar {\n  /* Start hidden */\n  display: none;\n  position: absolute;\n  /* Place control bar at the bottom of the player box/video.\n     If you want more margin below the control bar, add more height. */\n  bottom: 0;\n  /* Use left/right to stretch to 100% width of player div */\n  left: 0;\n  right: 0;\n  /* Height includes any margin you want above or below control items */\n  height: 3.0em;\n  /* background-color-with-alpha */\n  background-color: #07141E;\n  background-color: rgba(7, 20, 30, 0.7);\n}\n/* Show the control bar only once the video has started playing */\n.vjs-default-skin.vjs-has-started .vjs-control-bar {\n  display: block;\n  /* Visibility needed to make sure things hide in older browsers too. */\n  visibility: visible;\n  opacity: 1;\n  /* transition */\n  -webkit-transition: visibility 0.1s, opacity 0.1s;\n  -moz-transition: visibility 0.1s, opacity 0.1s;\n  -o-transition: visibility 0.1s, opacity 0.1s;\n  transition: visibility 0.1s, opacity 0.1s;\n}\n/* Hide the control bar when the video is playing and the user is inactive  */\n.vjs-default-skin.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {\n  display: block;\n  visibility: hidden;\n  opacity: 0;\n  /* transition */\n  -webkit-transition: visibility 0.5s, opacity 0.5s;\n  -moz-transition: visibility 0.5s, opacity 0.5s;\n  -o-transition: visibility 0.5s, opacity 0.5s;\n  transition: visibility 0.5s, opacity 0.5s;\n}\n.vjs-default-skin.vjs-controls-disabled .vjs-control-bar {\n  display: none;\n}\n.vjs-default-skin.vjs-using-native-controls .vjs-control-bar {\n  display: none;\n}\n/* The control bar shouldn\'t show after an error */\n.vjs-default-skin.vjs-error .vjs-control-bar {\n  display: none;\n}\n/* Don\'t hide the control bar if it\'s audio */\n.vjs-audio.vjs-default-skin.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {\n  opacity: 1;\n  visibility: visible;\n}\n/* IE8 is flakey with fonts, and you have to change the actual content to force\nfonts to show/hide properly.\n  - "\\9" IE8 hack didn\'t work for this\n  - Found in XP IE8 from http://modern.ie. Does not show up in "IE8 mode" in IE9\n*/\n@media \\0screen {\n  .vjs-default-skin.vjs-user-inactive.vjs-playing .vjs-control-bar :before {\n    content: "";\n  }\n}\n/* General styles for individual controls. */\n.vjs-default-skin .vjs-control {\n  outline: none;\n  position: relative;\n  float: left;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: 3.0em;\n  width: 4em;\n}\n/* Font button icons */\n.vjs-default-skin .vjs-control:before {\n  font-family: VideoJS;\n  font-size: 1.5em;\n  line-height: 2;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);\n}\n/* Replacement for focus outline */\n.vjs-default-skin .vjs-control:focus:before,\n.vjs-default-skin .vjs-control:hover:before {\n  text-shadow: 0em 0em 1em #ffffff;\n}\n.vjs-default-skin .vjs-control:focus {\n  /*  outline: 0; */\n  /* keyboard-only users cannot see the focus on several of the UI elements when\n  this is set to 0 */\n}\n/* Hide control text visually, but have it available for screenreaders */\n.vjs-default-skin .vjs-control-text {\n  /* hide-visually */\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n/* Play/Pause\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-play-control {\n  width: 5em;\n  cursor: pointer;\n}\n.vjs-default-skin .vjs-play-control:before {\n  content: "\\e001";\n}\n.vjs-default-skin.vjs-playing .vjs-play-control:before {\n  content: "\\e002";\n}\n/* Playback toggle\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-playback-rate .vjs-playback-rate-value {\n  font-size: 1.5em;\n  line-height: 2;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);\n}\n.vjs-default-skin .vjs-playback-rate.vjs-menu-button .vjs-menu .vjs-menu-content {\n  width: 4em;\n  left: -2em;\n  list-style: none;\n}\n/* Volume/Mute\n-------------------------------------------------------------------------------- */\n.vjs-default-skin .vjs-mute-control,\n.vjs-default-skin .vjs-volume-menu-button {\n  cursor: pointer;\n  float: right;\n}\n.vjs-default-skin .vjs-mute-control:before,\n.vjs-default-skin .vjs-volume-menu-button:before {\n  content: "\\e006";\n}\n.vjs-default-skin .vjs-mute-control.vjs-vol-0:before,\n.vjs-default-skin .vjs-volume-menu-button.vjs-vol-0:before {\n  content: "\\e003";\n}\n.vjs-default-skin .vjs-mute-control.vjs-vol-1:before,\n.vjs-default-skin .vjs-volume-menu-button.vjs-vol-1:before {\n  content: "\\e004";\n}\n.vjs-default-skin .vjs-mute-control.vjs-vol-2:before,\n.vjs-default-skin .vjs-volume-menu-button.vjs-vol-2:before {\n  content: "\\e005";\n}\n.vjs-default-skin .vjs-volume-control {\n  width: 5em;\n  float: right;\n}\n.vjs-default-skin .vjs-volume-bar {\n  width: 5em;\n  height: 0.6em;\n  margin: 1.1em auto 0;\n}\n.vjs-default-skin .vjs-volume-level {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 0.5em;\n  /* assuming volume starts at 1.0 */\n  width: 100%;\n  background: #66A8CC url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAP0lEQVQIHWWMAQoAIAgDR/QJ/Ub//04+w7ZICBwcOg5FZi5iBB82AGzixEglJrd4TVK5XUJpskSTEvpdFzX9AB2pGziSQcvAAAAAAElFTkSuQmCC) -50% 0 repeat;\n}\n.vjs-default-skin .vjs-volume-bar .vjs-volume-handle {\n  width: 0.5em;\n  height: 0.5em;\n  /* Assumes volume starts at 1.0. If you change the size of the\n     handle relative to the volume bar, you\'ll need to update this value\n     too. */\n  left: 4.5em;\n}\n.vjs-default-skin .vjs-volume-handle:before {\n  font-size: 0.9em;\n  top: -0.2em;\n  left: -0.2em;\n  width: 1em;\n  height: 1em;\n}\n/* The volume menu button is like menu buttons (captions/subtitles) but works\n    a little differently. It needs to be possible to tab to the volume slider\n    without hitting space bar on the menu button. To do this we\'re not using\n    display:none to hide the slider menu by default, and instead setting the\n    width and height to zero. */\n.vjs-default-skin .vjs-volume-menu-button .vjs-menu {\n  display: block;\n  width: 0;\n  height: 0;\n  border-top-color: transparent;\n}\n.vjs-default-skin .vjs-volume-menu-button .vjs-menu .vjs-menu-content {\n  height: 0;\n  width: 0;\n}\n.vjs-default-skin .vjs-volume-menu-button:hover .vjs-menu,\n.vjs-default-skin .vjs-volume-menu-button .vjs-menu.vjs-lock-showing {\n  border-top-color: rgba(7, 40, 50, 0.5);\n  /* Same as ul background */\n}\n.vjs-default-skin .vjs-volume-menu-button:hover .vjs-menu .vjs-menu-content,\n.vjs-default-skin .vjs-volume-menu-button .vjs-menu.vjs-lock-showing .vjs-menu-content {\n  height: 2.9em;\n  width: 10em;\n}\n/* Progress\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-progress-control {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: auto;\n  font-size: 0.3em;\n  height: 1.2em;\n  /* Increase default height of progress bar by a decision for VIDLA-1692 */\n  /* Set above the rest of the controls. */\n  top: -1em;\n  /* Shrink the bar slower than it grows. */\n  /* transition */\n  -webkit-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  transition: all 0.4s;\n}\n/* On hover, make the progress bar grow to something that\'s more clickable.\n    This simply changes the overall font for the progress bar, and this\n    updates both the em-based widths and heights, as wells as the icon font */\n.vjs-default-skin:hover .vjs-progress-control {\n  /* commented out by a decision for VIDLA-1692 */\n  /* font-size: .9em; */\n  /* Even though we\'re not changing the top/height, we need to include them in\n      the transition so they\'re handled correctly. */\n  /* .transition(all 0.2s);  */\n}\n/* Box containing play and load progresses. Also acts as seek scrubber. */\n.vjs-default-skin .vjs-progress-holder {\n  height: 100%;\n}\n/* Progress Bars */\n.vjs-default-skin .vjs-progress-holder .vjs-play-progress,\n.vjs-default-skin .vjs-progress-holder .vjs-load-progress,\n.vjs-default-skin .vjs-progress-holder .vjs-load-progress div {\n  position: absolute;\n  display: block;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  /* updated by javascript during playback */\n  width: 0;\n  /* Needed for IE6 */\n  left: 0;\n  top: 0;\n}\n.vjs-default-skin .vjs-play-progress {\n  /*\n    Using a data URI to create the white diagonal lines with a transparent\n      background. Surprisingly works in IE8.\n      Created using http://www.patternify.com\n    Changing the first color value will change the bar color.\n    Also using a paralax effect to make the lines move backwards.\n      The -50% left position makes that happen.\n  */\n  background: #66A8CC url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAP0lEQVQIHWWMAQoAIAgDR/QJ/Ub//04+w7ZICBwcOg5FZi5iBB82AGzixEglJrd4TVK5XUJpskSTEvpdFzX9AB2pGziSQcvAAAAAAElFTkSuQmCC) -50% 0 repeat;\n}\n.vjs-default-skin .vjs-load-progress {\n  background: #646464 /* IE8- Fallback */;\n  background: rgba(255, 255, 255, 0.2);\n}\n/* there are child elements of the load progress bar that represent the\n   specific time ranges that have been buffered */\n.vjs-default-skin .vjs-load-progress div {\n  background: #787878 /* IE8- Fallback */;\n  background: rgba(255, 255, 255, 0.1);\n}\n.vjs-default-skin .vjs-seek-handle {\n  width: 1.5em;\n  height: 100%;\n}\n.vjs-default-skin .vjs-seek-handle:before {\n  padding-top: 0.1em /* Minor adjustment */;\n}\n/* Live Mode\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin.vjs-live .vjs-time-controls,\n.vjs-default-skin.vjs-live .vjs-time-divider,\n.vjs-default-skin.vjs-live .vjs-progress-control {\n  display: none;\n}\n.vjs-default-skin.vjs-live .vjs-live-display {\n  display: block;\n}\n/* Live Display\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-live-display {\n  display: none;\n  font-size: 1em;\n  line-height: 3em;\n}\n/* Time Display\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-time-controls {\n  font-size: 1em;\n  /* Align vertically by making the line height the same as the control bar */\n  line-height: 3em;\n}\n.vjs-default-skin .vjs-current-time {\n  float: left;\n}\n.vjs-default-skin .vjs-duration {\n  float: left;\n}\n/* Remaining time is in the HTML, but not included in default design */\n.vjs-default-skin .vjs-remaining-time {\n  display: none;\n  float: left;\n}\n.vjs-time-divider {\n  float: left;\n  line-height: 3em;\n}\n/* Fullscreen\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-fullscreen-control {\n  width: 3.8em;\n  cursor: pointer;\n  float: right;\n}\n.vjs-default-skin .vjs-fullscreen-control:before {\n  content: "\\e000";\n}\n/* Switch to the exit icon when the player is in fullscreen */\n.vjs-default-skin.vjs-fullscreen .vjs-fullscreen-control:before {\n  content: "\\e00b";\n}\n/* Big Play Button (play button at start)\n--------------------------------------------------------------------------------\nPositioning of the play button in the center or other corners can be done more\neasily in the skin designer. http://designer.videojs.com/\n*/\n.vjs-default-skin .vjs-big-play-button {\n  left: 0.5em;\n  top: 0.5em;\n  font-size: 3em;\n  display: block;\n  z-index: 2;\n  position: absolute;\n  width: 4em;\n  height: 2.6em;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  opacity: 1;\n  /* Need a slightly gray bg so it can be seen on black backgrounds */\n  /* background-color-with-alpha */\n  background-color: #07141E;\n  background-color: rgba(7, 20, 30, 0.7);\n  border: 0.1em solid #3b4249;\n  /* border-radius */\n  -webkit-border-radius: 0.8em;\n  -moz-border-radius: 0.8em;\n  border-radius: 0.8em;\n  /* box-shadow */\n  -webkit-box-shadow: 0px 0px 1em rgba(255, 255, 255, 0.25);\n  -moz-box-shadow: 0px 0px 1em rgba(255, 255, 255, 0.25);\n  box-shadow: 0px 0px 1em rgba(255, 255, 255, 0.25);\n  /* transition */\n  -webkit-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  transition: all 0.4s;\n}\n/* Optionally center */\n.vjs-default-skin.vjs-big-play-centered .vjs-big-play-button {\n  /* Center it horizontally */\n  left: 50%;\n  margin-left: -2.1em;\n  /* Center it vertically */\n  top: 50%;\n  margin-top: -1.4em;\n}\n/* Hide if controls are disabled */\n.vjs-default-skin.vjs-controls-disabled .vjs-big-play-button {\n  display: none;\n}\n/* Hide when video starts playing */\n.vjs-default-skin.vjs-has-started .vjs-big-play-button {\n  display: none;\n}\n/* Hide on mobile devices. Remove when we stop using native controls\n    by default on mobile  */\n.vjs-default-skin.vjs-using-native-controls .vjs-big-play-button {\n  display: none;\n}\n.vjs-default-skin:hover .vjs-big-play-button,\n.vjs-default-skin .vjs-big-play-button:focus {\n  outline: 0;\n  border-color: #fff;\n  /* IE8 needs a non-glow hover state */\n  background-color: #505050;\n  background-color: rgba(50, 50, 50, 0.75);\n  /* box-shadow */\n  -webkit-box-shadow: 0 0 3em #fff;\n  -moz-box-shadow: 0 0 3em #fff;\n  box-shadow: 0 0 3em #fff;\n  /* transition */\n  -webkit-transition: all 0s;\n  -moz-transition: all 0s;\n  -o-transition: all 0s;\n  transition: all 0s;\n}\n.vjs-default-skin .vjs-big-play-button:before {\n  content: "\\e001";\n  font-family: VideoJS;\n  /* In order to center the play icon vertically we need to set the line height\n     to the same as the button height */\n  line-height: 2.6em;\n  text-shadow: 0.05em 0.05em 0.1em #000;\n  text-align: center /* Needed for IE8 */;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.vjs-error .vjs-big-play-button {\n  display: none;\n}\n/* Error Display\n--------------------------------------------------------------------------------\n*/\n.vjs-error-display {\n  display: none;\n}\n.vjs-error .vjs-error-display {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.vjs-error .vjs-error-display:before {\n  content: \'X\';\n  font-family: Arial;\n  font-size: 4em;\n  color: #666666;\n  /* In order to center the play icon vertically we need to set the line height\n     to the same as the button height */\n  line-height: 1;\n  text-shadow: 0.05em 0.05em 0.1em #000;\n  text-align: center /* Needed for IE8 */;\n  vertical-align: middle;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  margin-top: -0.5em;\n  width: 100%;\n}\n.vjs-error-display div {\n  position: absolute;\n  bottom: 1em;\n  right: 0;\n  left: 0;\n  font-size: 1.4em;\n  text-align: center;\n  padding: 3px;\n  background: #000000;\n  background: rgba(0, 0, 0, 0.5);\n}\n.vjs-error-display a,\n.vjs-error-display a:visited {\n  color: #F4A460;\n}\n/* Loading Spinner\n--------------------------------------------------------------------------------\n*/\n.vjs-loading-spinner {\n  /* Should be hidden by default */\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-size: 4em;\n  line-height: 1;\n  width: 1em;\n  height: 1em;\n  margin-left: -0.5em;\n  margin-top: -0.5em;\n  opacity: 0.75;\n}\n/* Show the spinner when waiting for data and seeking to a new time */\n.vjs-waiting .vjs-loading-spinner,\n.vjs-seeking .vjs-loading-spinner {\n  display: block;\n  /* only animate when showing because it can be processor heavy */\n  /* animation */\n  -webkit-animation: spin 1.5s infinite linear;\n  -moz-animation: spin 1.5s infinite linear;\n  -o-animation: spin 1.5s infinite linear;\n  animation: spin 1.5s infinite linear;\n}\n/* Errors are unrecoverable without user interaction so hide the spinner */\n.vjs-error .vjs-loading-spinner {\n  display: none;\n  /* ensure animation doesn\'t continue while hidden */\n  /* animation */\n  -webkit-animation: none;\n  -moz-animation: none;\n  -o-animation: none;\n  animation: none;\n}\n.vjs-default-skin .vjs-loading-spinner:before {\n  content: "\\e01e";\n  font-family: VideoJS;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1em;\n  height: 1em;\n  text-align: center;\n  text-shadow: 0em 0em 0.1em #000;\n}\n@-moz-keyframes spin {\n  0% {\n    -moz-transform: rotate(0deg);\n  }\n  100% {\n    -moz-transform: rotate(359deg);\n  }\n}\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n  }\n}\n@-o-keyframes spin {\n  0% {\n    -o-transform: rotate(0deg);\n  }\n  100% {\n    -o-transform: rotate(359deg);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(359deg);\n  }\n}\n/* Menu Buttons (Captions/Subtitles/etc.)\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-menu-button {\n  float: right;\n  cursor: pointer;\n}\n.vjs-default-skin .vjs-menu {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  left: 0em;\n  /* (Width of vjs-menu - width of button) / 2 */\n  width: 0em;\n  height: 0em;\n  margin-bottom: 3em;\n  border-left: 2em solid transparent;\n  border-right: 2em solid transparent;\n  border-top: 1.55em solid #000000;\n  /* Same width top as ul bottom */\n  border-top-color: rgba(7, 40, 50, 0.5);\n  /* Same as ul background */\n}\n/* Button Pop-up Menu */\n.vjs-default-skin .vjs-menu-button .vjs-menu .vjs-menu-content {\n  display: block;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  width: 10em;\n  bottom: 1.5em;\n  /* Same bottom as vjs-menu border-top */\n  max-height: 15em;\n  overflow: auto;\n  left: -5em;\n  /* Width of menu - width of button / 2 */\n  /* background-color-with-alpha */\n  background-color: #07141E;\n  background-color: rgba(7, 20, 30, 0.7);\n  /* box-shadow */\n  -webkit-box-shadow: -0.2em -0.2em 0.3em rgba(255, 255, 255, 0.2);\n  -moz-box-shadow: -0.2em -0.2em 0.3em rgba(255, 255, 255, 0.2);\n  box-shadow: -0.2em -0.2em 0.3em rgba(255, 255, 255, 0.2);\n}\n.vjs-default-skin .vjs-menu-button:hover .vjs-control-content .vjs-menu,\n.vjs-default-skin .vjs-control-content .vjs-menu.vjs-lock-showing {\n  display: block;\n}\n/* prevent menus from opening while scrubbing (FF, IE) */\n.vjs-default-skin.vjs-scrubbing .vjs-menu-button:hover .vjs-control-content .vjs-menu {\n  display: none;\n}\n.vjs-default-skin .vjs-menu-button ul li {\n  list-style: none;\n  margin: 0;\n  padding: 0.3em 0 0.3em 0;\n  line-height: 1.4em;\n  font-size: 1.2em;\n  text-align: center;\n  text-transform: lowercase;\n}\n.vjs-default-skin .vjs-menu-button ul li.vjs-selected {\n  background-color: #000;\n}\n.vjs-default-skin .vjs-menu-button ul li:focus,\n.vjs-default-skin .vjs-menu-button ul li:hover,\n.vjs-default-skin .vjs-menu-button ul li.vjs-selected:focus,\n.vjs-default-skin .vjs-menu-button ul li.vjs-selected:hover {\n  outline: 0;\n  color: #111;\n  /* background-color-with-alpha */\n  background-color: #ffffff;\n  background-color: rgba(255, 255, 255, 0.75);\n  /* box-shadow */\n  -webkit-box-shadow: 0 0 1em #ffffff;\n  -moz-box-shadow: 0 0 1em #ffffff;\n  box-shadow: 0 0 1em #ffffff;\n}\n.vjs-default-skin .vjs-menu-button ul li.vjs-menu-title {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 1em;\n  line-height: 2em;\n  padding: 0;\n  margin: 0 0 0.3em 0;\n  font-weight: bold;\n  cursor: default;\n}\n/* Subtitles Button */\n.vjs-default-skin .vjs-subtitles-button:before {\n  content: "\\e00c";\n}\n/* Captions Button */\n.vjs-default-skin .vjs-captions-button:before {\n  content: "\\e008";\n}\n/* Chapters Button */\n.vjs-default-skin .vjs-chapters-button:before {\n  content: "\\e00c";\n}\n.vjs-default-skin .vjs-chapters-button.vjs-menu-button .vjs-menu .vjs-menu-content {\n  width: 24em;\n  left: -12em;\n}\n/* Replacement for focus outline */\n.vjs-default-skin .vjs-captions-button:focus .vjs-control-content:before,\n.vjs-default-skin .vjs-captions-button:hover .vjs-control-content:before {\n  /* box-shadow */\n  -webkit-box-shadow: 0 0 1em #ffffff;\n  -moz-box-shadow: 0 0 1em #ffffff;\n  box-shadow: 0 0 1em #ffffff;\n}\n/*\nREQUIRED STYLES (be careful overriding)\n================================================================================\nWhen loading the player, the video tag is replaced with a DIV,\nthat will hold the video tag or object tag for other playback methods.\nThe div contains the video playback element (Flash or HTML5) and controls,\nand sets the width and height of the video.\n\n** If you want to add some kind of border/padding (e.g. a frame), or special\npositioning, use another containing element. Otherwise you risk messing up\ncontrol positioning and full window mode. **\n*/\n.video-js {\n  background-color: #000;\n  position: relative;\n  padding: 0;\n  /* Start with 10px for base font size so other dimensions can be em based and\n     easily calculable. */\n  font-size: 10px;\n  /* Allow poster to be vertically aligned. */\n  vertical-align: middle;\n  /*  display: table-cell; */\n  /*This works in Safari but not Firefox.*/\n  /* Provide some basic defaults for fonts */\n  font-weight: normal;\n  font-style: normal;\n  /* Avoiding helvetica: issue #376 */\n  font-family: Arial, sans-serif;\n  /* Turn off user selection (text highlighting) by default.\n     The majority of player components will not be text blocks.\n     Text areas will need to turn user selection back on. */\n  /* user-select */\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n/* Playback technology elements expand to the width/height of the containing div\n    <video> or <object> */\n.video-js .vjs-tech {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/* Fix for Firefox 9 fullscreen (only if it is enabled). Not needed when\n   checking fullScreenEnabled. */\n.video-js:-moz-full-screen {\n  position: absolute;\n}\n/* Fullscreen Styles */\nbody.vjs-full-window {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  /* Fix for IE6 full-window. http://www.cssplay.co.uk/layouts/fixed.html */\n  overflow-y: auto;\n}\n.video-js.vjs-fullscreen {\n  position: fixed;\n  overflow: hidden;\n  z-index: 1000;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 100% !important;\n  height: 100% !important;\n  /* IE6 full-window (underscore hack) */\n  _position: absolute;\n}\n.video-js:-webkit-full-screen {\n  width: 100% !important;\n  height: 100% !important;\n}\n.video-js.vjs-fullscreen.vjs-user-inactive {\n  cursor: none;\n}\n/* Poster Styles */\n.vjs-poster {\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: contain;\n  background-color: #000000;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.vjs-poster img {\n  display: block;\n  margin: 0 auto;\n  max-height: 100%;\n  padding: 0;\n  width: 100%;\n}\n/* Hide the poster after the video has started playing */\n.video-js.vjs-has-started .vjs-poster {\n  display: none;\n}\n/* Don\'t hide the poster if we\'re playing audio */\n.video-js.vjs-audio.vjs-has-started .vjs-poster {\n  display: block;\n}\n/* Hide the poster when controls are disabled because it\'s clickable\n    and the native poster can take over */\n.video-js.vjs-controls-disabled .vjs-poster {\n  display: none;\n}\n/* Hide the poster when native controls are used otherwise it covers them */\n.video-js.vjs-using-native-controls .vjs-poster {\n  display: none;\n}\n/* Text Track Styles */\n/* Overall track holder for both captions and subtitles */\n.video-js .vjs-text-track-display {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 3em;\n  right: 0;\n  pointer-events: none;\n}\n/* Captions Settings Dialog */\n.vjs-caption-settings {\n  position: relative;\n  top: 1em;\n  background-color: #000;\n  opacity: 0.75;\n  color: #FFF;\n  margin: 0 auto;\n  padding: 0.5em;\n  height: 15em;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 12px;\n  width: 40em;\n}\n.vjs-caption-settings .vjs-tracksettings {\n  top: 0;\n  bottom: 2em;\n  left: 0;\n  right: 0;\n  position: absolute;\n  overflow: auto;\n}\n.vjs-caption-settings .vjs-tracksettings-colors,\n.vjs-caption-settings .vjs-tracksettings-font {\n  float: left;\n}\n.vjs-caption-settings .vjs-tracksettings-colors:after,\n.vjs-caption-settings .vjs-tracksettings-font:after,\n.vjs-caption-settings .vjs-tracksettings-controls:after {\n  clear: both;\n}\n.vjs-caption-settings .vjs-tracksettings-controls {\n  position: absolute;\n  bottom: 1em;\n  right: 1em;\n}\n.vjs-caption-settings .vjs-tracksetting {\n  margin: 5px;\n  padding: 3px;\n  min-height: 40px;\n}\n.vjs-caption-settings .vjs-tracksetting label {\n  display: block;\n  width: 100px;\n  margin-bottom: 5px;\n}\n.vjs-caption-settings .vjs-tracksetting span {\n  display: inline;\n  margin-left: 5px;\n}\n.vjs-caption-settings .vjs-tracksetting > div {\n  margin-bottom: 5px;\n  min-height: 20px;\n}\n.vjs-caption-settings .vjs-tracksetting > div:last-child {\n  margin-bottom: 0;\n  padding-bottom: 0;\n  min-height: 0;\n}\n.vjs-caption-settings label > input {\n  margin-right: 10px;\n}\n.vjs-caption-settings input[type="button"] {\n  width: 40px;\n  height: 40px;\n}\n/* Hide disabled or unsupported controls */\n.vjs-hidden {\n  display: none !important;\n}\n.vjs-lock-showing {\n  display: block !important;\n  opacity: 1;\n  visibility: visible;\n}\n/*  In IE8 w/ no JavaScript (no HTML5 shim), the video tag doesn\'t register.\n    The .video-js classname on the video tag also isn\'t considered.\n    This optional paragraph inside the video tag can provide a message to users\n    about what\'s required to play video. */\n.vjs-no-js {\n  padding: 2em;\n  color: #ccc;\n  background-color: #333;\n  font-size: 1.8em;\n  font-family: Arial, sans-serif;\n  text-align: center;\n  width: 30em;\n  height: 15em;\n  margin: 0 auto;\n}\n.vjs-no-js a,\n.vjs-no-js a:visited {\n  color: #F4A460;\n}\n/* -----------------------------------------------------------------------------\nThe original source of this file lives at\nhttps://github.com/videojs/video.js/blob/master/src/css/video-js.less */\n'
}, function(e, t, n) {
    var a = "[PlayerManager_Fullscreen]",
        s = n(2);
    e.exports = function(o, r) {
        return {
            init: function(t, n, i) {
                s.debug(a, "init"), !1 === o.isMobile() && t.controlBar.fullscreenToggle.on("click", function() {
                    r.isFullscreenToggled || (r.isFullscreenToggled = !0)
                });

                function e() {
                    var e;
                    s.verbose(a, "fullscreenchange"), o.isIos() && r.isFullscreen && r.play(), r.isFullscreen ? (o.pendingFullscreenExit = !0, t.controlBar.el().style.bottom = "", o.options.disableTopBar || (i.style.display = "block", n.style.display = "none", o.floatingSkipButton && (o.floatingSkipButton.style.display = "none", o.floatingAdSkipText.style.display = "none")), e = !1 === o.isMobile() ? 1e3 : 0, setTimeout(function() {
                        o.pendingFullscreenExit = !1, r.isFullscreen = !1, r.isFullscreenToggled = !1, o.dispatchEventToAdunit({
                            name: "fullscreenchange",
                            fullscreenStatus: "exit"
                        })
                    }, e)) : (r.isFullscreen = !r.isFullscreen, t.controlBar.el().style.bottom = "0.0em", o.options.disableTopBar || (n.style.display = "block", i.style.display = "none", o.floatingSkipButton && (o.readyForSkip ? (o.floatingSkipButton.style.display = "block", o.floatingAdSkipText.style.display = "none") : (o.floatingSkipButton.style.display = "none", o.floatingAdSkipText.style.display = "block"))), o.dispatchEventToAdunit({
                        name: "fullscreenchange",
                        fullscreenStatus: "enter"
                    }))
                }
                "onfullscreenchange" in document ? t.on("fullscreenchange", e) : "onwebkitfullscreenchange" in document && t.on("webkitfullscreenchange", e)
            }
        }
    }
}, function(e, t, n) {
    var r = n(2);
    e.exports = function(o) {
        return {
            init: function(i) {
                r.debug("[PlayerManager_Controls]", "init"), i.on("concealControls", function() {
                    var e, t, n = i.player().controlBar;
                    !0 === i.options().disableCollapse.enabled && !0 === i.options().disableCollapse.hideControlBar && !1 === i.options().disableCollapse.replay && (n.hide(), "below" === i.options().controlBarPosition && (e = parseInt(o.targetElement.style.height), o.targetElement.style.height = e - this.controlBar.el_.offsetHeight + "px", o.options.sideStreamObject.isActivated && (e = 1 < parseInt(o.targetElement.childNodes[0].style.height) ? 0 : 1, t = parseInt(o.targetElement.childNodes[e].style.height), o.targetElement.childNodes[e].style.height = t - this.controlBar.el_.offsetHeight + "px"))), n && !n.concealed && (n.currentTimeDisplay && n.currentTimeDisplay.hide(), n.durationDisplay && n.durationDisplay.hide(), n.timeDivider && n.timeDivider.hide(), n.muteToggle && n.muteToggle.hide(), n.playToggle && n.playToggle.hide(), n.fullscreenToggle && n.fullscreenToggle.hide(), n.progressControl && n.progressControl.hide(), n.volumeControl && n.volumeControl.hide(), n.concealed = !0)
                }), i.on("revealControls", function() {
                    var e = i.player().controlBar;
                    e.show(), e && e.concealed && ("bar" !== o.options.showProgressBar && !1 !== o.options.showProgressBar && (e.currentTimeDisplay && e.currentTimeDisplay.show(), e.durationDisplay && e.durationDisplay.show(), e.timeDivider && e.timeDivider.show()), e.muteToggle && o.options.showMute && e.muteToggle.show(), e.playToggle && o.options.showPlayToggle && e.playToggle.show(), e.fullscreenToggle && o.options.allowFullscreen && e.fullscreenToggle.show(), !1 !== o.options.showProgressBar && "text" !== o.options.showProgressBar && e.progressControl && e.progressControl.show(), e.volumeControl && o.options.showVolume && o.displayVolumeControls() && e.volumeControl.show(), e.concealed = !1)
                })
            }
        }
    }
}, function(e, t, n) {
    var i = n(2);
    e.exports = function(t, n) {
        return {
            init: function() {
                i.debug("[PlayerManager_Orientation]", "init");
                var e = t.options.isWaterfall ? t.options.waterfallStepId : null;
                window.addEventListener("orientationchange", function() {
                    t.options.overlayPlayer || !n.isReadyToExpandForMobile || e && e !== t.options.waterfallStepId || !(!t.options.sideStreamObject || "function" != typeof t.options.sideStreamObject.shouldNotResizeWhenSideStreamActivated) && t.options.sideStreamObject.shouldNotResizeWhenSideStreamActivated() || t.refreshVideoLookAndFeel(t.options, n)
                })
            }
        }
    }
}, function(e, t, n) {
    function o(e) {
        a.verbose(r, e)
    }
    var r = "[PlayerManager_BigPlayButton]",
        a = n(2);
    e.exports = function(n, i) {
        return {
            init: function(e) {
                a.debug(r, "init");

                function t() {
                    i.explicitPlay(), !0 === i.isEnded && (i.replay(), e.player().bigPlayButton.removeClass("vjs-big-play-button-replay"), !1 === n.options.showBigPlayButton && e.bigPlayButton && e.bigPlayButton.hide()), setTimeout(function() {
                        i.unmute()
                    }, n.bigbuttonUnmuteTimeout)
                }
                e.player().bigPlayButton.on("click", function() {
                    o("big play button click"), t()
                }), e.player().bigPlayButton.on("touchend", function() {
                    o("big play button touchend"), t()
                })
            }
        }
    }
}, function(e, t, n) {
    function r(e) {
        o.debug(i, e)
    }

    function a(e) {
        o.verbose(i, e)
    }
    var i = "[PlayerManager_VideoPlay]",
        o = n(2),
        s = n(19)(),
        l = n(11);
    e.exports = function(i, o) {
        return {
            init: function(n) {
                r("init"), n.controlBar.playToggle.on("click", function() {
                    a("play button click"), o.explicitPaused = !o.explicitPaused
                }), n.controlBar.playToggle.on("touchend", function() {
                    a("play button touchend"), o.explicitPaused = !o.explicitPaused
                }), n.on("durationchange", function() {
                    i.dispatchEventToAdunit({
                        name: "durationchange"
                    })
                }), n.on("firstplay", function() {
                    i.dispatchEventToAdunit({
                        name: "firstplay"
                    }), n.controlBar.muteToggle && n.controlBar.muteToggle.update(), n.controlBar.volumeControl && n.controlBar.volumeControl.volumeBar && n.controlBar.volumeControl.volumeBar.update(), e()
                });
                var e = function() {
                    i.dispatchEventToAdunit({
                        name: "volume-change",
                        obj: {
                            volume: o.isMuted ? 0 : n.volume()
                        },
                        eventType: "AdUnit"
                    })
                };
                n.on("volumechange", e), n.controlBar.playToggle.on("click", function() {
                    a("play button click"), !0 === o.isPlayingVideo ? o.explicitPause() : (o.explicitPlay(), o.unmute())
                }), n.controlBar.playToggle.on("touchend", function() {
                    a("play button touchend"), !0 === o.isPlayingVideo ? o.explicitPause() : (o.explicitPlay(), o.unmute())
                }), n.on("loadstart", function() {
                    i.dispatchEventToAdunit({
                        name: "loadstart"
                    })
                }), n.on("pause", function() {
                    i.options.overlayPlayer && Math.abs(n.player().duration() - n.player().currentTime()) < .5 ? (a("hiding big play button for overlay player at the end of the video"), n.player().bigPlayButton.el().style.display = "none") : (a("showing big play button"), n.player().bigPlayButton.el().style.display = "block"), o.isPlayingVideo = !1, i.options.hasOwnProperty("overlayPlayer") && (l.isIphone() && parseInt(l.getIOSVersion()) < 10 || l.isIos() && n.isFullscreen()) && i.dispatchEventToAdunit({
                        name: "video_pause"
                    })
                }), n.on("play", function() {
                    n.player().bigPlayButton.el().style.display = "", o.isPlayingVideo = !0, i.options.hasOwnProperty("overlayPlayer") && (l.isIphone() && parseInt(l.getIOSVersion()) < 10 || l.isIos() && n.isFullscreen()) && i.dispatchEventToAdunit({
                        name: "video_resume"
                    })
                }), n.on("error", function(e) {
                    r("error in video js");
                    var t = s.browser.name.toLowerCase();
                    e && e.target && i.options && (i.options.vpaid || "ie" === t && i.options.isWaterfall) && (0 < e.target.toString().indexOf('poster="null"') || "video" === e.target.nodeName.toLowerCase() && e.target.networkState <= 2 || "div" === e.target.nodeName.toLowerCase()) || (a("destroying due to error in video js"), o.destroyWithoutSkip(!0, i.CONST_MESSAGE_GENERAL_ERROR, null, 900))
                }), !1 === i.options.vpaid && n.one("loadedmetadata", function(e) {
                    var e = e.currentTarget,
                        t = (o.videoObjectId = e.id, o.isReadyToExpandForMobile = !0, r("loadedmetadata video.js is ready to play"), n.tech.removeControlsListeners(), e.videoWidth),
                        e = e.videoHeight;
                    0 < t ? (o.resizeVideo(t / e), "function" == typeof i.callbackForAdUnit.cbWhenReady && i.callbackForAdUnit.cbWhenReady(o)) : (o.resizeVideo(0), i.callbackForAdUnit.cbWhenReady(o)), o.verificationManager && o.verificationManager.dispatchEvent("loaded")
                })
            }
        }
    }
}, function(e, t, r) {
    var a = r(2);
    e.exports = function(i, o) {
        return {
            init: function(e, t, n) {
                a.debug("[PlayerManager_PostProcess]", "init"), r(41)(i, o).init(e, t, n), i.isMobile() && i.options.hasOwnProperty("overlayPlayer") && ("click" === i.options.initialPlayback || "mouseover" === i.options.initialPlayback) ? e && (e.controlBar.el_.style.setProperty("display", "none", "important"), i.options.hiddenControls = !0) : i.options.hasOwnProperty("overlayPlayer") && i.isIos() && parseInt(t.getIOSVersion()) < 10 && "auto" === i.options.initialPlayback && e && (e.controlBar.el_.style.setProperty("display", "none", "important"), i.options.hiddenControls = !0)
            }
        }
    }
}, function(e, t, n) {
    var p = n(2),
        h = n(42);
    e.exports = function(c, u) {
        return {
            init: function(n, e, t) {
                p.debug("[PlayerManager_SettingAdIcons]", "init");
                var i, o, r, a, s = u.options.playerSkin.controlBarHeight,
                    l = new h,
                    d = (l.init(u.options.data.adIcons), l.getIcons());
                d && 0 !== d.length && (i = u.options.disableTopBar ? 0 : t, o = e.isMobile() || "below" === u.options.controlBarPosition ? s : 0, n.controlBar.el_.style.zIndex = 10, e.isMobile() || (e = (u.iframeVideoWrapper || document.getElementById(c.options.iframeVideoWrapperId)).contentWindow.document.getElementById(c.an_video_ad_player_id), r = function() {
                    var e;
                    u.isExpanded && "below" !== u.options.controlBarPosition && (e = u.getFinalSize().height - t - s - 10, l.redraw(0, e))
                }, a = function() {
                    var e;
                    u.isExpanded && "below" !== u.options.controlBarPosition && (e = u.getFinalSize().height - t - s - 10, l.redraw(s, e))
                }, n.on("useractive", function() {
                    a()
                }), n.on("userinactive", function() {
                    !1 === n.paused() && r()
                }), n.on("handleManualUserActive", function() {
                    a()
                }), n.on("handleManualUserInActive", function() {
                    !1 === n.paused() && r()
                }), e.addEventListener("mouseenter", function() {
                    a()
                }), e.addEventListener("mousemove", function() {
                    a()
                })), n.on("timeupdate", function() {
                    var e, t;
                    u.options.vpaid && !u.options.showVpaidIcons || (e = 1e3 * Math.round(n.player().currentTime()), t = 1e3 * Math.round(n.player().duration()), d && 0 < d.length && l.renderIcons(function(e) {
                        var t = {};
                        t.name = e, u.dispatchEventToAdunit(t)
                    }, function(e) {
                        u.click(e, !1)
                    }, n.player().el_, i, o, e, t))
                }))
            }
        }
    }
}, function(e, t, n) {
    function E(e) {
        o.debug(i, e)
    }
    var i = "[AdIcon]",
        S = n(11),
        o = n(2);
    e.exports = function() {
        function g(e) {
            var t = 0;
            return e && 0 <= Number(e) && (t = Number(e)), t = e && "string" == typeof e && e.toLowerCase() && e.indexOf("px") ? 0 < (t = Number(e.replace("px", ""))) ? t : 0 : t
        }
        this.icons = [], this.init = function(e) {
            E("initalize ad icon"), e && (this.icons = function(e) {
                for (var t = 0; t < e.length; t++) {
                    var n, i, o = e[t].StaticResource;
                    o && o.type && (E("setContents for " + e[t].program), n = e[t].width, i = e[t].height, 0 <= ["image/gif", "image/jpeg", "image/png"].indexOf(o.type.toLowerCase()) && (e[t].content = "<img src='" + o.src + "' width='" + n + "' height='" + i + "'", e[t].altText && (e[t].content += " alt='" + e[t].altText + "'"), e[t].hoverText && (e[t].content += " title='" + e[t].hoverText + "'"), e[t].content += ">"), e[t].isDisplay = !1)
                }
                return e
            }(e))
        }, this.getIcons = function() {
            return this.icons
        }, this.renderIcons = function(t, n, e, i, o, r, a) {
            var s = this.getIcons(),
                l = this;
            if (o = 0 !== o ? o + 5 : o, s && !(s.length < 1))
                for (var d = 0; d < s.length; d++) {
                    var c, u, p, h, m, f, v, g, y, A, b = s[d],
                        w = b.htmlReference;
                    if (b && (b.duration && (c = S.getMsecTime(b.duration)), b.offset && (u = S.getMsecTime(b.offset))), !(c <= 0) && (!(r < u) && 0 !== r)) {
                        if (0 < a && a <= r) {
                            for (p = 0; p < s.length; p++) {
                                var k = s[p],
                                    T = k.htmlReference;
                                T && (T.style.display = "none", k.isDisplay = !1)
                            }
                            return void E("hide whole ad icons because video is finished by " + r + "ms")
                        }
                        u + c < r && b.isDisplay && w ? w.style.display = "none" : b.isDisplay || (h = "left", m = Number(m) < 0 ? 0 : m, f = "top", v = Number(m) < 0 ? 0 : m, g = 0 < Number(i) ? i : 0, y = 0 < Number(o) ? o : 0, b && "left" === b.xPosition && (h = "left", m = 0), b && "right" === b.xPosition && (h = "right", m = 0), b && 0 <= Number(b.xPosition) && (h = "left", m = Number(b.xPosition)), b && "bottom" === b.yPosition && (f = "bottom", v = 0, v += y), b && "top" === b.yPosition && (f = "top", v = 0, v += g), b && 0 <= Number(b.yPosition) && (f = "top", v = Number(b.yPosition), v += g), w ? (A = w, E("reuse ad icon for " + b.program)) : (A = e.ownerDocument.createElement("div"), E("create ad icon for " + b.program)), e.appendChild(A), A.setAttribute("name", "adicon"), A.id = "adicon_" + b.program, A.innerHTML = b.content, A.style.position = "fixed", A.style.cursor = "hand", A.style[h] = m + "px", A.style[f] = v + "px", A.style.zIndex = 2147483647, A.style.display = "block", A.style.width = b.width + "px", A.style.height = b.height + "px", b.isDisplay = !0, b.htmlReference = A, b.document = e.ownerDocument, b.originalStyle = {}, b.originalStyle[h] = m, b.originalStyle[f] = v, b.clickRegisterd || (A.addEventListener("click", function(e) {
                            return function() {
                                n(e.IconClickThrough), t("IconClickTracking_" + e.program), E("fire IconClickTracking for " + e.program)
                            }
                        }(b)), b.clickRegisterd = !0, E("ad icon click handler registered for " + b.program)), s[d] = b, t && "function" == typeof t && (t("IconViewTracking_" + b.program), E("check and fire IconViewTracking for " + b.program)), d === s.length - 1 && function(e) {
                            setTimeout(function() {
                                l.resolveCollision(e), E("start to check a collision of ad icon")
                            }, 500)
                        }(s))
                    }
                }
        }, this.elementsFromPoint = function(e, t, n) {
            try {
                if (n.elementsFromPoint) return n.elementsFromPoint(e, t);
                for (var i = [], o = void 0; o !== n.elementFromPoint(e, t) ? (o = n.elementFromPoint(e, t), i.push(o), o && o.style && (o.style.pointerEvents = "none")) : o = !1, o;);
                return i.forEach(function(e) {
                    var t;
                    return t = e && e.style ? e.style.pointerEvents = "all" : t
                }), i
            } catch (e) {
                return E(e), null
            }
        };
        this.resolveCollision = function(e) {
            function t(e, t, n, i, o, r, a, s, l) {
                "left" === e && (d = t - r - 1, c = n - r - 1), "right" === e && (d = t + r + 1, c = n + r + 1);
                var d, c, e = u.elementsFromPoint(d, i, s),
                    t = u.elementsFromPoint(c, i, s),
                    n = u.elementsFromPoint(c, o, s),
                    r = u.elementsFromPoint(d, o, s);
                return {
                    newSpaceOwner_topLeft: p(e, l),
                    newSpaceOwner_topRight: p(t, l),
                    newSpaceOwner_bootomRight: p(n, l),
                    newSpaceOwner_bootomLeft: p(r, l),
                    next_left: d,
                    next_right: c
                }
            }
            for (var u = this, p = function(e, t) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        if (i && "adicon" === i.getAttribute("name") && t != i) return {
                            result: !0,
                            width: g(i.clientWidth),
                            height: g(i.clientHeight),
                            left: g(i.style.left),
                            right: g(i.style.right)
                        }
                    }
                    return {
                        result: !1,
                        width: 0,
                        height: 0,
                        left: 0,
                        right: 0
                    }
                }, n = 1; n < e.length; n++) {
                var i, o, r, a, s, l, d, c, h, m, f, v = e[n];
                v.htmlReference && (i = (a = v.htmlReference.getBoundingClientRect()).left, o = a.top, r = a.right, a = a.bottom, f = u.elementsFromPoint(i, o, v.document), s = u.elementsFromPoint(r, o, v.document), l = u.elementsFromPoint(r, a, v.document), d = u.elementsFromPoint(i, a, v.document), f = p(f, v.htmlReference), s = p(s, v.htmlReference), l = p(l, v.htmlReference), d = p(d, v.htmlReference), c = v.program, (f.result || l.result || s.result || d.result) && (E("collision detection starts for ad icon program - " + c), h = f.width || l.width || s.width || d.width, f.height || l.height || s.height || d.height, m = !1, f = t("left", i, r, o, a, h += f.left || l.left || s.left || d.left, 0, v.document, v.htmlReference), !1 === m && !1 === f.newSpaceOwner_topLeft.result && !1 === f.newSpaceOwner_topRight.result && !1 === f.newSpaceOwner_bootomRight.result && !1 === f.newSpaceOwner_bootomLeft.result && 0 <= f.next_left && (E("collision resolved by moving icon to left for ad icon program - " + c), v.htmlReference.style.left = f.next_left + "px", m = !0), f = t("right", i, r, o, a, h, 0, v.document, v.htmlReference), !1 === m && !1 === f.newSpaceOwner_topLeft.result && !1 === f.newSpaceOwner_topRight.result && !1 === f.newSpaceOwner_bootomRight.result && !1 === f.newSpaceOwner_bootomLeft.result && (E("collision resolved by moving icon to right for ad icon program - " + c), v.htmlReference.style.left = f.next_left + "px", m = !0), !1 === m && (E("hide ad-icon due to no way to avoid collision for ad icon program - " + c), v.htmlReference.style.display = "none"), E("collision detection end for ad icon program - " + c)))
            }
        }, this.redraw = function(e) {
            for (var t = 0; t < this.icons.length; t++) {
                var n = this.icons[t],
                    i = n.htmlReference,
                    n = n.originalStyle;
                !n || !(n = n.bottom) && 0 !== n || ("bottom" === n && (n = 0), i.style.bottom = n + e + "px")
            }
        }
    }
}, function(e, t, n) {
    var i = n(2);
    e.exports = function(e) {
        return i.debug("Video Player: init: displayVolumeControls"), {
            displayVolumeControls: function() {
                return !e.isAndroid() || "boolean" == typeof e.options.enableAndroidVolumeControls && !0 === e.options.enableAndroidVolumeControls
            }
        }
    }
}, function(e, t, r) {
    var a = r(45),
        s = r(11),
        l = r(2);
    e.exports = function(e, t) {
        var n = this,
            i = (this.options = e.options, this.topChromeHeight = 24, this.iOSVideoPlayer = new a, this.videojsOrigin = e.videoPlayerObj, this.dispatchEventToAdunit = e.dispatchEventToAdunit.bind(e), this.callbackForAdUnit = e.callbackForAdUnit, this.UUID = (new Date).getTime() + Math.floor(1e4 * Math.random()), "an_video_ad_player_" + n.UUID),
            o = "an_video_ad_player_" + n.UUID + "_html5_api",
            i = (this.an_video_ad_player_id = i, this.an_video_ad_player_html5_api_id = o, e.divIdForVideo = i, e.videoId = o, this.refreshVideoLookAndFeel = s.refreshVideoLookAndFeel, this.shouldConsiderHeightOfDevice = !0, this.isDoneiOSInitialPlay = !1, this.isTogglePaused = !1, this.enabledAudio = !1, this.isFullscreen = !1, this.enableFullscreen = !0, this.fromFullscreen = !1, this.isAlreadyDoneVideoComplete = !1, this.customPlayToggle = {}, this.customFullscreenBtn = {}, this.eventSizeChange = {}, this.eventOrientationChange = {}, this.floatingAdIndicator = null, this.floatingSkipButton = null, this.floatingAdSkipText = null, this.readyForSkip = !1, this.videojsPlayer = null, r(46)(n, e)),
            o = r(47)(n, e, t),
            t = r(49)(n, e);
        this.createIframeAndRequiredObject = t.createIframeAndRequiredObject, this.fnMainProcess = o.fnMainProcess, this.handleFullScreen = i.handleFullScreen, this.handleNormalScreen = i.handleNormalScreen, this.resizeIosCanvas = i.resizeIosCanvas, this.cbWhenVideoComplete = i.cbWhenVideoComplete, this.savedBackgroundForBottomBar = "", this.savedBackgroundColorForBottomBar = "", this.start = function() {
            var e;
            l.debug("iOSInlineVideoPlayer: start"), !1 === n.test() ? l.error("iOSInlineVideoPlayer: initialize error") : (e = (new Date).getTime() + Math.floor(1e4 * Math.random()), n.options.iframeVideoWrapperId = "iframeVideoWrapper_" + e, n.options.techOrder = ["html5"], n.createIframeAndRequiredObject(n.fnMainProcess))
        }, this.test = function() {
            return !!(this.createIframeAndRequiredObject && this.fnMainProcess && this.handleFullScreen && this.handleNormalScreen && this.resizeIosCanvas && this.cbWhenVideoComplete)
        }
    }
}, function(e, t, n) {
    function F(e) {
        W.debug("iOSInlineVideoPlayer :: iOSInlineCore: " + e)
    }

    function H(e) {
        W.verbose("iOSInlineVideoPlayer :: iOSInlineCore: " + e)
    }
    var W = n(2);
    const z = n(11);
    e.exports = function() {
        function e(e) {
            H("saveCSS");
            var t, n = {};
            for (t in {
                    position: "",
                    width: "",
                    height: "",
                    top: "",
                    left: "",
                    marginRight: "",
                    transform: "",
                    background: ""
                }) n[t] = e.style[t];
            return n
        }

        function i(e) {
            var t, n, i = l.videoWidth / l.videoHeight,
                o = 0,
                r = 0,
                a = C.sideStream && C.sideStream.enabled && C.sideStreamObject && C.sideStreamObject.isActivated,
                r = !e && a ? (e = C.sideStream.width, a = C.sideStream.height, n = 0, a -= 30 + (n = C.disableTopBar ? n : 24), e || a || (e = C.width, a = C.mediaHeight), n = e && a ? (t = e, a) : (t = e || a / i, a || e / i), o = Math.round(Math.min(n * i, t)), Math.round(Math.min(t / i, n))) : (o = s.parentElement.parentElement.style.width.replace("px", ""), s.parentElement.parentElement.style.height.replace("px", ""));
            return {
                width: o,
                height: r
            }
        }
        var s, l, n, o, r, a, d, c, u, p, h, m, f, v, g, y, A, t, b, w, k, T, E, S, C, I = !1,
            P = !1,
            j = 0,
            x = {
                keepWidth: null,
                keepHeight: null
            },
            V = (this.setPubOptions = function(e) {
                C = e
            }, this.renderVideo = function(e, t) {
                W.log("iOSInlineVideoPlayer: renderVideo"), -1 < navigator.appVersion.indexOf("Mobile") ? (S = e.cbTimeUpdate, a = e.mediaUrl, y = e.divArea, g = e.cbWhenVideoComplete, A = e.targetElement, b = e.iframeVideoWrapper, k = e.el_wholeArea, H("generating initial canvas object"), (s = document.createElement("canvas")).style["image-rendering"] = "auto", y.appendChild(s), y.style.width = "100%", y.style.height = "100%", x.keepWidth = s.style.width, x.keepHeight = s.style.height, void 0 !== e.videoElement ? l = e.videoElement : (H("creating video tag"), l = document.createElement("video"), n = document.createElement("source"), l.style.display = "none", l.autoplay = !1, l.preload = "auto", l.controls = !0, n.src = a, l.appendChild(n), y.appendChild(l)), H("preparing audio tag"), o = document.createElement("audio"), r = document.createElement("source"), C.preloadInlineAudioForIos && !C.vpaid && this.activateAudio(), d = s.getContext("2d"), Date.now(), p = !(u = !1), h = .3, f = m = !.1, v = 99999999, H("renderVideo callback"), t(!0)) : t(!1)
            }, function(e, t) {
                for (var n in H("loadCSS"), t) e.style[n] = t[n]
            }),
            _ = function(e) {
                var t = i(e).width,
                    n = i(e).height;
                e ? (s.width = t, s.height = n) : (s.width = t, s.height = C.mediaHeight)
            },
            M = function() {
                var e, t = s.height / l.videoHeight * l.videoWidth,
                    n = s.height,
                    i = (s.width - t) / 2,
                    o = 0;
                t > s.width ? (e = s.width / l.videoWidth * l.videoHeight, i = 0, o = Math.abs(s.height - e) / 2, d.drawImage(l, i, o, s.width, e)) : d.drawImage(l, i, o, t, n)
            };

        function N(e) {
            var t = 0,
                n = e - j,
                t = (P = !0, t = 0 === j || 500 < n ? 0 : n, j = e, n = t /= 1e3, l.currentTime = l.currentTime + n, _(f), e = Math.abs(o.currentTime - l.currentTime), !1 === p && h <= e && e <= v && (l.currentTime = o.currentTime + n), M(), S(), l.currentTime);
            if (l.duration <= t) {
                if (H("close checking by iOSInlinePlayer"), !1 !== p) return H("closed by iOSInlinePlayer"), g(), P = !1, void window.cancelAnimationFrame(c);
                e = o.currentTime;
                if (o.duration <= e) return H("closed with audio by iOSInlinePlayer"), g(), P = !1, void window.cancelAnimationFrame(c)
            }!1 === u ? c = window.requestAnimationFrame(N) : (P = !1, window.cancelAnimationFrame(c))
        }

        function D() {
            this.resumeVideo()
        }

        function O() {
            A.style.backgroundColor = "black", A.style.width = "100%", A.style.height = "100%", A.style.position = "fixed", A.style.top = "0px", A.style.left = "0px", A.style.zIndex = "999999", A.style.background = "rgba(0,0,0,1)", A.style.transition = "height 0s ease", k.style.background = "rgba(0,0,0,1)", s.style.background = "rgba(0,0,0,1)", b.style.background = "rgba(0,0,0,1)"
        }

        function R() {
            V(A, t), A.style.height = B().height + "px"
        }

        function U() {
            var e = z.isPortrait(),
                t = (o = B(e)).width,
                n = o.height,
                i = o.top,
                o = o.left,
                r = 0;
            const a = b.contentWindow.document.getElementById("top_chrome");
            if (a) {
                const s = a.nextSibling,
                    l = s.getElementsByClassName("top-bar-text")[0],
                    d = s.getElementsByClassName("top-bar-text")[1],
                    c = s.getElementsByClassName("top-bar-text")[2];
                r = parseInt(a.style.height), a.style.display = "none", l.style.display = "block", d.style.display = "block", c.style.display = "block", e || (l.style.display = "none", d.style.display = "none", c.style.display = "none", a.style.display = "block", a.style.width = t + "px")
            }
            b.style.position = "absolute", b.style.width = "100%", b.style.height = "100%", b.style.top = i + "px", b.style.left = o + "px", b.style.marginRight = "", b.style.transform = "", k.style.width = t + "px", k.style.height = e ? String(n) + "px" : String(n - r) + "px", k.style.marginLeft = "", k.style.marginRight = ""
        }

        function L() {
            f = !1, A.ontouchmove = function() {
                return !0
            }, s.ontouchmove = function() {
                return !0
            }, k.ontouchmove = function() {
                return !0
            }, R(), V(A, t), V(b, w), V(k, T), V(s, E)
        }
        var B = function() {
            return {
                width: window.innerWidth,
                height: window.innerHeight - C.playerSkin.controlBarHeight,
                top: 0,
                left: 0
            }
        };
        this.exitFullscreeenAsCanvas = function() {
            L(), !0 === u && this.resizeAndRedraw()
        }, this.enterFullscreenAsCanvas = function() {
            A.ontouchmove = function() {
                return !1
            }, s.ontouchmove = function() {
                return !1
            }, k.ontouchmove = function() {
                return !1
            }, t = e(A), w = e(b), T = e(k), E = e(s), A.style.marginLeft = "0px", A.style.marginRight = "0px", A.style.marginTop = "0px", A.style.marginBottom = "0px", f = !0, O(), U(), !0 === u && this.resizeAndRedraw()
        }, this.resizeAndRedraw = function() {
            _(f), M()
        }, this.initialPlay = function(e) {
            this.play(e)
        }, this.play = function(e) {
            P || (u = !1, e && o && o.play && o.play(), c = window.requestAnimationFrame(N))
        }, this.resumeVideo = function() {
            u = !1, o && o.play && o.play(), c = window.requestAnimationFrame(N)
        }, this.pauseVideo = function() {
            u = !0, o.pause(), window.cancelAnimationFrame(c), P = !1
        }, this.activateAudio = function() {
            F("activateAudio : " + l.src), o.style.display = "none", o.autoplay = !1, o.preload = "auto", o.controls = !0, r.src = l.src, o.appendChild(r), y.appendChild(o), o.load()
        }, this.hearAudio = function() {
            m ? (F("resume audio"), p = !1) : (o.addEventListener("playing", function() {
                F("first playing audio"), o.currentTime = l.currentTime + h, m = !(p = !1)
            }), !1 === C.preloadInlineAudioForIos && this.activateAudio()), o.currentTime = l.currentTime, u || o.play()
        }, this.stopAudio = function() {
            F("pausing audio"), o.pause(), p = !0
        }, this.checkOrientation = function() {
            I && !C.disableCollapse.enabled || (f ? (R(), O(), U(), !0 === u && this.resizeAndRedraw()) : (_(f), M()))
        }, this.initiate = function() {
            l.addEventListener("canplaythrough", function(t) {
                if (t.target.videoWidth, t.target.videoHeight, b.hasOwnProperty("iOS14ResumeTime")) try {
                    var e = b.iOS14ResumeTime;
                    t.target.currentTime = e, o.currentTime = e
                } catch (e) {
                    t.target.currentTime = 0, F(e)
                } finally {
                    b.iOS14ResumeTime = 0
                }
            }.bind(this)), l.addEventListener("webkitendfullscreen", D, !1), l.load(), l.pause()
        }, this.getCanvas = function() {
            return s
        }, this.destroy = function() {
            window.cancelAnimationFrame(c), f && L(), I = !0
        }, this.resizeCanvas = _, this.redrawCanvas = M
    }
}, function(e, t, n) {
    function s(e) {
        i.debug("iOSInlineVideoPlayer :: EmulateHtml5Video: " + e)
    }

    function l(e) {
        i.verbose("iOSInlineVideoPlayer :: EmulateHtml5Video: " + e)
    }
    var d = n(11),
        i = n(2),
        c = n(33);
    e.exports = function(r, a) {
        return {
            handleFullScreen: function(e) {
                a.isFullscreen = !0, s("handleFullScreen");
                e = e.contentWindow.document.getElementById("top_chrome");
                r.dispatchEventToAdunit({
                    name: "fullscreenchange",
                    fullscreenStatus: "enter"
                }), r.iOSVideoPlayer.enterFullscreenAsCanvas(), r.isFullscreen = !0, e && (e.style.display = "none"), r.options.disableTopBar || (l("Hiding ad text for fullscreen"), r.floatingAdIndicator.style.display = "block", r.floatingSkipButton && (r.readyForSkip ? (r.floatingSkipButton.style.display = "block", r.floatingAdSkipText.style.display = "none") : (r.floatingSkipButton.style.display = "none", r.floatingAdSkipText.style.display = "block")))
            },
            handleNormalScreen: function(e) {
                a.isFullscreen = !1, s("handleNormalScreen");
                e = e.contentWindow.document.getElementById("top_chrome");
                r.dispatchEventToAdunit({
                    name: "fullscreenchange",
                    fullscreenStatus: "exit"
                }), e && (e.style.display = "block"), r.options.disableTopBar || (l("Showing ad text for fullscreen"), r.floatingAdIndicator.style.display = "none", r.floatingSkipButton && (r.floatingSkipButton.style.display = "none", r.floatingAdSkipText.style.display = "none")), r.iOSVideoPlayer.exitFullscreeenAsCanvas();
                (r.isFullscreen = !1) === (a.options.sideStream && a.options.sideStream.enabled && a.options.sideStreamObject && a.options.sideStreamObject.isActivated) && r.refreshVideoLookAndFeel(r.options, a), r.resizeIosCanvas(r.isFullscreen);
                var e = document.getElementById(a.videoObjectId),
                    e = (e && void 0 !== e && (e.style.width = r.options.width, e.style.height = r.options.height), a.options.sideStream && a.options.sideStream.enabled),
                    t = a.options.sideStreamObject && "function" == typeof a.options.sideStreamObject.moveAdUnitBack;
                e && t && a.options.sideStreamObject.moveAdUnitBack(), !1 === a.options.sideStreamObject.isActivated && d.makeIframeFlexbileSize(a)
            },
            resizeIosCanvas: function(e) {
                r.iOSVideoPlayer.resizeCanvas(e), r.iOSVideoPlayer.redrawCanvas(e)
            },
            cbWhenVideoComplete: function(e, t) {
                if (s("cbWhenVideoComplete"), r.isFullscreen && (r.fromFullscreen = !0, r.handleNormalScreen(e)), !0 === r.options.disableCollapse.enabled && (a.options.sideStreamObject && a.options.sideStreamObject.isActivated && a.options.sideStreamObject.moveAdUnitBack(), a.options.sideStream.wasEnabled = a.options.sideStream.enabled, a.options.sideStream.enabled = !1), !0 !== r.options.disableCollapse.enabled || !0 !== r.options.disableCollapse.replay && !0 !== r.options.endCard.enabled) {
                    if (r.isAlreadyDoneVideoComplete) return;
                    r.isAlreadyDoneVideoComplete = !0, "below" === r.options.controlBarPosition && (r.videojsPlayer.controlBar.el().style.bottom = c.getBottomMarginForControlbar(r.options, !1) + "em"), l("removing control bar items"), r.videojsPlayer.trigger("concealControls"), l("destroying iOSVideoPlayer"), r.iOSVideoPlayer.destroy(), r.resizeIosCanvas(r.isFullscreen), r.options.disableCollapse.enabled || (window.removeEventListener("orientationchange", r.eventOrientationChange), window.removeEventListener("resize", r.eventSizeChange));
                    r.dispatchEventToAdunit({
                        name: "video_complete"
                    }, function() {
                        var e;
                        r.options.disableCollapse.enabled || (e = a.options.sideStream && a.options.sideStream.enabled && a.options.sideStreamObject && a.options.sideStreamObject.isActivated, a.isFullscreen = !e, a.destroyWithoutSkip()), a.isCompleted = !0, r.options.vpaid && d.fireEvent(t, "ended")
                    })
                } else {
                    var n, i, o;
                    r.options.endCard.enabled && a.endCard ? (!0 === r.options.disableCollapse.hideControlBar && (e = Number(a.adVideoPlayer.controlBar.el_.offsetHeight), r.videojsPlayer.trigger("concealControls"), r.dispatchEventToAdunit({
                        name: "video_complete"
                    }), a.adVideoPlayer.controlBar.hide(), "below" === a.options.controlBarPosition && (n = a.options.targetElement, i = parseInt(n.style.height, 10), n.style.height = String(i - e) + "px", r.options.sideStreamObject.enabled && (i = 1 < parseInt(n.childNodes[0].style.height) ? 0 : 1, o = parseInt(n.childNodes[i].style.height), n.childNodes[i].style.height = String(o - e) + "px"))), a.endCard.show(), a.adVideoPlayer.controlBar.show()) : (r.videojsPlayer.bigPlayButton.addClass("vjs-big-play-button-replay"), a.explicitPause(), r.videojsPlayer.currentTime(0), r.videojsPlayer.bigPlayButton.show(), r.videojsPlayer.player().bigPlayButton.el().style.display = "block", r.dispatchEventToAdunit({
                        name: "video_complete"
                    }))
                }
                a.isEnded = !0
            }
        }
    }
}, function(e, t, g) {
    function y(e) {
        k.debug("iOSInlineVideoPlayer :: Events: " + e)
    }

    function A(e) {
        k.error("iOSInlineVideoPlayer :: Events: " + e)
    }
    var b = g(11),
        w = g(18),
        k = g(2),
        T = g(42),
        E = g(25);
    e.exports = function(m, f, v) {
        return {
            fnMainProcess: function(i) {
                k.log("iOSInlineVideoPlayer: fnMainProcess");
                var t, e = i.contentWindow.document.getElementById(m.an_video_ad_player_id);
                if (f.iframeVideoWrapper = i, m.options.vpaid) try {
                    f.options.showVpaidIcons = !1, w(f)
                } catch (e) {
                    A(e)
                } else m.options.isWaterfall && m.options.plugins && (m.options.plugins = null);
                m.options.nativeControlsForTouch = !1, m.options.customControlsOnMobile = !1, m.videojsPlayer = m.videojsOrigin(e, m.options, function() {}), g(48)(m, f, v, m.videojsPlayer, i).run(), f.adVideoPlayer = m.videojsPlayer;

                function n() {
                    m.videojsPlayer.player().bigPlayButton.hide(), m.videojsPlayer.player().loadingSpinner.hide(), m.videojsPlayer.player().addClass("vjs-has-started"), m.videojsPlayer.player().removeClass("vjs-paused"), m.videojsPlayer.player().addClass("vjs-playing");
                    try {
                        h(!1);
                        var e = m.enabledAudio;
                        m.iOSVideoPlayer.initialPlay(e), y("override play method"), m.isDoneiOSInitialPlay ? (b.fireEvent(u, "play"), b.fireEvent(u, "playing")) : (b.fireEvent(u, "play"), b.fireEvent(u, "playing"), m.isDoneiOSInitialPlay = !0), f.isPlayingVideo = !0, m.isTogglePaused = !1
                    } catch (e) {
                        A(e)
                    }
                }

                function o() {
                    m.isTogglePaused || f.isCompleted || f.isEnded || (!1 === m.options.showBigPlayButton || !0 === (f.options.sideStream && f.options.sideStream.enabled && f.options.sideStreamObject && f.options.sideStreamObject.isActivated) && !0 === f.options.showPlayToggle && 1 == f.options.sideStream.dynamicBigPlayButtonOnSideStream || (m.videojsPlayer.bigPlayButton.show(), m.videojsPlayer.player().bigPlayButton.el().style.display = "block"), m.iOSVideoPlayer.pauseVideo(), y("override pause method"), h(!0), f.isPlayingVideo = !1, m.isTogglePaused = !0, b.fireEvent(u, "pause"))
                }
                var r, a, s, l, d, e = m.options.wcElement && m.options.wcElement instanceof Element ? m.options.wcElement.querySelector("#" + String(m.options.iframeVideoWrapperId)) : document.getElementById(m.options.iframeVideoWrapperId),
                    c = e.contentWindow.document.getElementById(m.an_video_ad_player_id),
                    u = e.contentWindow.document.getElementById(m.an_video_ad_player_html5_api_id),
                    e = (!0 === m.options.enableInlineVideoForIos && (u.style.width = "0.1px", u.style.height = "0.1px"), document.createElement("div")),
                    e = (e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", m.options.vpaid || (e.className = "vjs-tech"), e.style.textAlign = "center", c.insertBefore(e, u), m.options.targetElement.addEventListener("IOS_INLINE_RESIZE", function() {
                        m.resizeIosCanvas(!1)
                    }), m.options.targetElement.addEventListener("IOS_INLINE_REFERESH", function() {
                        m.refreshVideoLookAndFeel(m.options, f), m.iOSVideoPlayer.checkOrientation(), m.customFullscreenBtn.style.visibility = "hidden"
                    }), {
                        mediaUrl: m.options.videoUrl,
                        divArea: e,
                        width: m.options.width,
                        height: m.options.height,
                        videoElement: u,
                        cbWhenVideoComplete: function() {
                            m.cbWhenVideoComplete(i, u)
                        },
                        targetElement: m.options.targetElement,
                        iframeVideoWrapper: i,
                        el_wholeArea: c,
                        cbTimeUpdate: function() {
                            m.videojsPlayer.trigger("timeupdate")
                        }
                    }),
                    p = m.options.isWaterfall ? m.options.waterfallStepId : null,
                    h = (m.iOSVideoPlayer.setPubOptions(m.options), m.iOSVideoPlayer.renderVideo(e, function(e) {
                        e ? (m.eventOrientationChange = function() {
                            p && p !== m.options.waterfallStepId || !f.isReadyToExpandForMobile || f.options.sideStreamObject && "function" == typeof f.options.sideStreamObject.shouldNotResizeWhenSideStreamActivated && f.options.sideStreamObject.shouldNotResizeWhenSideStreamActivated() || (m.refreshVideoLookAndFeel(m.options, f), m.iOSVideoPlayer.checkOrientation())
                        }, m.eventSizeChange = function() {
                            p && p !== m.options.waterfallStepId || m.isFullscreen && (f.resizeVideo(-1, m.shouldConsiderHeightOfDevice), m.iOSVideoPlayer.checkOrientation())
                        }, window.addEventListener("resize", m.eventSizeChange), window.addEventListener("orientationchange", function() {
                            (f.isCompleted || f.isEnded) && !1 === m.options.disableCollapse.enabled || (clearTimeout(t), t = setTimeout(function() {
                                m.eventOrientationChange()
                            }, 250))
                        }), u.onseeked = function() {
                            return !1
                        }, "auto" === m.options.initialPlayback ? m.videojsPlayer.player().loadingSpinner.show() : m.videojsPlayer.player().loadingSpinner.hide(), m.videojsPlayer.player().off("seeked"), m.iOSVideoPlayer.initiate(), "click" === m.options.initialPlayback && u.addEventListener("canplay", function() {
                            m.iOSVideoPlayer.checkOrientation()
                        })) : y("only works in iOS")
                    }), m.videojsPlayer.controlBar.fullscreenToggle.dispose(), !0 === m.options.allowFullscreen && m.enableFullscreen && (m.customFullscreenBtn = m.videojsOrigin.createEl("div", {
                        id: "customFullscreenToggle",
                        role: "button",
                        innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">Fullscreen</span></div>'
                    }), m.customFullscreenBtn.style.cssText = "text-align:right;float:right;margin-right:0em;font-size:1em;line-height:3em;outline:0;position:relative;padding:0;height:3em", m.customFullscreenBtn.className = "vjs-fullscreen-control vjs-control", m.videojsPlayer.controlBar.addChild("button", {
                        el: m.customFullscreenBtn
                    }), m.customFullscreenBtn.addEventListener("touchend", function(n) {
                        setTimeout(function() {
                            var e, t;
                            m.isFullscreen ? (e = document.getElementById(m.options.iframeVideoWrapperId).contentWindow.document.getElementById(m.an_video_ad_player_html5_api_id), t = e.style.visibility, e.style.visibility = "hidden", setTimeout(function() {
                                m.handleNormalScreen(i), e.style.visibility = t
                            }, 0)) : m.handleFullScreen(i), n.preventDefault()
                        }, 200)
                    })), m.iOSVideoPlayer.getCanvas().onclick = function() {
                        !1 === m.options.learnMore.enabled ? (f.options.expandable || f.explicitPause(), f.click()) : !0 === m.options.learnMore.clickToPause && (!1 === m.isTogglePaused ? f.explicitPause() : f.explicitPlay())
                    }, function(e) {
                        m.customPlayToggle.innerHTML = e ? "<div><span>&#xe001;</span></div>" : "<div><span>&#xe002;</span></div>"
                    });
                m.options.vpaid ? function() {
                    function e(e) {
                        e && 0 === e.readyState && e.load()
                    }
                    u.play = function() {
                        e(u), n()
                    }, u.pause = function() {
                        o()
                    }, m.videojsPlayer.one("vpaid.AdStarted", function() {
                        e(u)
                    }), m.videojsPlayer.one("an.readytogovpaid", function() {
                        m.iOSVideoPlayer.activateAudio(), e(u)
                    })
                }() : (u.play = n, u.pause = o), m.videojsPlayer.controlBar.el().ontouchend = function() {}, m.videojsPlayer.controlBar.playToggle.dispose(), m.customPlayToggle = m.videojsOrigin.createEl("div", {
                    id: "customPlayToggle",
                    role: "button",
                    "aria-live": "polite",
                    tabindex: "0",
                    innerHTML: "<div><span>&#xe002;</span></div>",
                    width: "5em"
                }), m.customPlayToggle.style.cssText = "float:left;font-family:VideoJS;font-size:1.5em;line-height:2;width:3em;height:100%;text-align:center", m.videojsPlayer.controlBar.addChild("button", {
                    el: m.customPlayToggle
                }), m.videojsPlayer.controlBar.el().insertBefore(m.customPlayToggle, m.videojsPlayer.controlBar.currentTimeDisplay.el()), m.customPlayToggle.ontouchend = function(e) {
                    !1 === m.isTogglePaused ? f.explicitPause() : f.explicitPlay(), e.preventDefault()
                }, m.customPlayToggle.onclick = function() {
                    !1 === m.isTogglePaused ? f.explicitPause() : f.explicitPlay()
                }, m.videojsPlayer.controlBar.muteToggle.el().ontouchend = function() {
                    m.enabledAudio ? (m.iOSVideoPlayer.stopAudio(), m.enabledAudio = !1, m.videojsPlayer.controlBar.muteToggle.el_.style.opacity = "0.3", f.dispatchEventToAdunit({
                        name: "video_mute"
                    })) : (m.iOSVideoPlayer.hearAudio(), m.enabledAudio = !0, m.videojsPlayer.controlBar.muteToggle.el_.style.opacity = "1", f.dispatchEventToAdunit({
                        name: "video_unmute"
                    }), !0 === m.isTogglePaused && f.explicitPause())
                }, m.videojsPlayer.controlBar.muteToggle.el().onclick = function() {
                    m.enabledAudio ? (m.iOSVideoPlayer.stopAudio(), m.enabledAudio = !1, m.videojsPlayer.controlBar.muteToggle.el_.style.opacity = "0.3") : (m.iOSVideoPlayer.hearAudio(), m.enabledAudio = !0, m.videojsPlayer.controlBar.muteToggle.el_.style.opacity = "1", !0 === m.isTogglePaused && f.explicitPause())
                }, m.videojsPlayer.one("loadedmetadata", function(e) {
                    var t;
                    !1 === m.options.showPlayToggle && m.videojsPlayer.controlBar.playToggle.hide(), !1 === m.options.showBigPlayButton && m.videojsPlayer.bigPlayButton.hide(), !1 === m.options.showMute ? m.videojsPlayer.controlBar.muteToggle.hide() : (m.videojsPlayer.controlBar.muteToggle.show(), m.videojsPlayer.controlBar.muteToggle.el_.style.opacity = "0.3"), !0 === m.options.allowFullscreen && (m.customFullscreenBtn.style.display = "none"), !0 === m.options.showMute && m.videojsPlayer.controlBar.muteToggle.show(), m.options.targetElement.addEventListener("outstream-impression", function() {
                        !0 === m.options.allowFullscreen && (m.customFullscreenBtn.style.display = "block"), !0 === m.options.showMute && m.videojsPlayer.controlBar.muteToggle.show()
                    }), f.options.vpaid || (f.isReadyToExpandForMobile = !0, f.videoObjectId = e.currentTarget.id, y("loadedmetadata"), y("video.js is ready to play"), m.videojsPlayer.tech.removeControlsListeners(), t = e.currentTarget.videoWidth, e = e.currentTarget.videoHeight, 0 < t ? (f.resizeVideo(t / e, m.shouldConsiderHeightOfDevice), "function" == typeof m.callbackForAdUnit.cbWhenReady && m.callbackForAdUnit.cbWhenReady(f)) : (f.resizeVideo(0, m.shouldConsiderHeightOfDevice), m.callbackForAdUnit.cbWhenReady(f)))
                }), f.customSkinning.render(m, m.videojsPlayer, i.contentWindow.document, !0);
                v(c, u), e = f.options.playerSkin.controlBarHeight, s = m.videojsPlayer, (l = new T).init(f.options.data.adIcons), (d = l.getIcons()) && 0 !== d.length && (r = f.options.disableTopBar ? 0 : 24, a = e, s.controlBar.el_.style.zIndex = 10, s.on("timeupdate", function() {
                    var e, t;
                    f.options.vpaid && !f.options.showVpaidIcons || (e = 1e3 * Math.round(s.player().currentTime()), t = 1e3 * Math.round(s.player().duration()), d && 0 < d.length && l.renderIcons(function(e) {
                        var t = {};
                        t.name = e, f.dispatchEventToAdunit(t)
                    }, function(e) {
                        f.options.expandable || f.explicitPause(), f.click(e, !1)
                    }, s.player().el_, r, a, e, t))
                })), m.options.vpaid && m.videojsPlayer.trigger("an.doneInitialize"), m.options.endCard.enabled && (f.endCard = new E(m.options.endCard, m.videojsPlayer, f)), m.videojsPlayer.on("concealControls", function() {
                    var e, t, n = m.videojsPlayer.player().controlBar;
                    !0 === m.options.disableCollapse.enabled && !0 === m.options.disableCollapse.hideControlBar && !1 === m.options.disableCollapse.replay && (n.hide(), m.options.sideStreamObject.isActivated && (e = 1 < parseInt(m.options.targetElement.childNodes[0].style.height) ? 0 : 1, t = parseInt(m.options.targetElement.childNodes[e].style.height), m.options.targetElement.childNodes[e].style.height = t - 30 + "px")), n && !n.concealed && (n.currentTimeDisplay && n.currentTimeDisplay.hide(), n.durationDisplay && n.durationDisplay.hide(), n.timeDivider && n.timeDivider.hide(), n.muteToggle && n.muteToggle.hide(), n.playToggle && n.playToggle.hide(), n.fullscreenToggle && n.fullscreenToggle.hide(), n.progressControl && n.progressControl.hide(), n.volumeControl && n.volumeControl.hide(), !1 === b.isEmptyAndObject(m.customPlayToggle) && (m.customPlayToggle.style.display = "none"), !1 === b.isEmptyAndObject(m.customFullscreenBtn) && (m.customFullscreenBtn.style.display = "none"), m.savedBackgroundColorForBottomBar = n.el_.style.backgroundColor, m.savedBackgroundForBottomBar = n.el_.style.background, n.concealed = !0)
                }), m.videojsPlayer.on("revealControls", function() {
                    var e = m.videojsPlayer.player().controlBar;
                    e && e.concealed && ("bar" !== m.options.showProgressBar && !1 !== m.options.showProgressBar && (e.currentTimeDisplay && e.currentTimeDisplay.show(), e.durationDisplay && e.durationDisplay.show(), e.timeDivider && e.timeDivider.show()), e.muteToggle && m.options.showMute && e.muteToggle.show(), e.playToggle && m.options.showPlayToggle && e.playToggle.show(), e.fullscreenToggle && m.options.allowFullscreen && e.fullscreenToggle.show(), !1 !== m.options.showProgressBar && "text" !== m.options.showProgressBar && e.progressControl && e.progressControl.show(), !1 === b.isEmptyAndObject(m.customPlayToggle) && (m.customPlayToggle.style.display = "block"), !1 === b.isEmptyAndObject(m.customFullscreenBtn) && (m.customFullscreenBtn.style.display = "block"), e.el_.style.backgroundColor = m.savedBackgroundColorForBottomBar, e.el_.style.background = m.savedBackgroundForBottomBar, e.concealed = !1)
                })
            }
        }
    }
}, function(e, t, n) {
    function y(e) {
        A.verbose("Video Player: " + e)
    }
    var A = n(2),
        b = n(11);
    e.exports = function(m, f, e, v, g) {
        return {
            run: function() {
                function t() {
                    f.isEnded && m.options.disableCollapse.replay && (f.replay(), !1 === m.options.showBigPlayButton && v.player().bigPlayButton.hide(), v.player().bigPlayButton.removeClass("vjs-big-play-button-replay")), f.isDoneInitialPlay && (f.isPlayingVideo = !1), f.explicitPlay()
                }
                A.debug("iOSInlineVideoPlayer :: CustomizeVideoArea: run"), m.options.isWaterfall && m.options.vpaid && (v.controlBar.hide(), m.options.firstAdAttempted && v.bigPlayButton.hide()), "boolean" == typeof m.options.customButton.enabled && !0 === m.options.customButton.enabled && (n = m.options.playerSkin.controlBarHeight || 30, e = Math.min(50, m.options.customButton.imgWidth), i = Math.min(n, m.options.customButton.imgHeight), n = Math.floor((n - i) / 2), (i = m.videojsOrigin.createEl("div", {
                    innerHTML: '<span ><img style="height:' + i + "px;width:" + e + "px;margin-top:" + n + 'px" class="home-button-image" src="' + m.options.customButton.imageSrc + '" alt="' + m.options.customButton.altText + '"></span>',
                    role: "button",
                    "aria-live": "polite",
                    tabindex: "0"
                })).style.cssText = "float:right;font-family:VideoJS;font-size:1.5em;line-height:2;width:50px;height:100%;text-align:center", v.controlBar.addChild("button", {
                    el: i
                }), v.controlBar.el().insertBefore(i, v.controlBar.fullscreenToggle.el())), v.controlBar.progressControl.seekBar.seekHandle.hide(), v.controlBar.progressControl.seekBar.el_.style.pointerEvents = "none", "boolean" == typeof m.options.showProgressBar ? (!1 === m.options.showProgressBar && (y("removing progress bar"), v.controlBar.currentTimeDisplay.hide(), v.controlBar.timeDivider.hide(), v.controlBar.durationDisplay.hide()), v.controlBar.progressControl.seekBar.hide()) : "text" === m.options.showProgressBar ? (y("removing progress text"), v.controlBar.progressControl.seekBar.hide()) : "bar" === m.options.showProgressBar && (y("removing progress bar"), v.controlBar.currentTimeDisplay.hide(), v.controlBar.timeDivider.hide(), v.controlBar.durationDisplay.hide()), !1 === m.options.showVolume && v.controlBar.volumeControl.dispose();
                var o, r, a, s, l, d, c, u, p, e = m.videojsOrigin.createEl("div"),
                    n = (e.className = "vjs-control-bar-divider", e.style.position = "absolute", e.style.left = "0", e.style.right = "0", v.controlBar.addChild("button", {
                        el: e
                    }), g.contentWindow.document.getElementById("top_chrome")),
                    h = g.contentWindow.document.createElement("div"),
                    i = (h.id = "ad_indicator_text", m.options.adText),
                    e = m.options.learnMore.enabled;
                (e = m.options.clickUrls[0] ? e : !1) && ("top-right" === m.options.skippable.skipLocation ? i = m.options.learnMore.text + " " + m.options.learnMore.separator + " " + i : i += " " + m.options.learnMore.separator + " " + m.options.learnMore.text), h.innerHTML = i, h.className = "top-bar-text", h.role = "button", h.style["text-align"] = "right", h.style["margin-right"] = "1em", h.style["margin-left"] = "1em", h.style["font-size"] = "1em", h.style.right = "0px", h.style.left = "", h.style["line-height"] = "24px", h.style.outline = "0", h.style.position = "absolute", h.style.padding = "0", h.style.height = "auto", h.style.width = "auto", h.style["max-width"] = "35%", h.style["white-space"] = "nowrap", h.style.overflow = "hidden", h.style["text-overflow"] = "ellipsis", m.floatingAdIndicator = m.videojsOrigin.createEl("div", {
                    role: "button",
                    innerHTML: i,
                    className: "top-bar-text"
                }), m.floatingAdIndicator.style["text-align"] = "right", m.floatingAdIndicator.style["margin-right"] = "1em", m.floatingAdIndicator.style["margin-left"] = "1em", m.floatingAdIndicator.style["font-size"] = "1em", m.floatingAdIndicator.style.right = "0px", m.floatingAdIndicator.style.left = "", m.floatingAdIndicator.style["line-height"] = "3em", m.floatingAdIndicator.style.outline = "0", m.floatingAdIndicator.style.position = "absolute", m.floatingAdIndicator.style.padding = "0", m.floatingAdIndicator.style.height = "3em", m.floatingAdIndicator.style["max-width"] = "35%", m.floatingAdIndicator.style.width = "auto", m.floatingAdIndicator.style["text-overflow"] = "ellipsis", m.floatingAdIndicator.style["white-space"] = "nowrap", m.floatingAdIndicator.style.overflow = "hidden", m.floatingAdIndicator.style.display = "none", v.addChild("button", {
                    el: m.floatingAdIndicator
                }), e && (h.addEventListener("click", i = function(e) {
                    m.iOSVideoPlayer.pauseVideo(), f.click(), e.stopPropagation(), e.preventDefault()
                }), m.floatingAdIndicator.addEventListener("click", i)), !0 === m.options.skippable.enabled && (r = m.options.skippable.videoThreshold, a = m.options.skippable.skipText, e = m.options.skippable.skipButtonText, (s = g.contentWindow.document.createElement("div")).id = "skip_button", s.innerHTML = e, s.className = "top-bar-text", s.role = "button", s.style.display = "none", s.style.cursor = "pointer", s.style["font-weight"] = "bold", s.style["margin-right"] = "1em", s.style["margin-left"] = "1em", s.style["font-size"] = "1em", s.style.right = "", s.style.left = "0px", s.style["line-height"] = "24px", s.style.outline = "0", s.style.position = "absolute", s.style.padding = "0", s.style.height = "5em", s.style.width = "auto", s.style["min-width"] = "5em", s.style["text-align"] = "left", m.floatingSkipButton = m.videojsOrigin.createEl("div", {
                    className: "top-bar-text",
                    role: "button",
                    innerHTML: e
                }), m.floatingSkipButton.style.display = "none", m.floatingSkipButton.style.cursor = "pointer", m.floatingSkipButton.style["font-weight"] = "bold", m.floatingSkipButton.style["margin-right"] = "1em", m.floatingSkipButton.style["margin-left"] = "1em", m.floatingSkipButton.style["font-size"] = "1em", m.floatingSkipButton.style.right = "", m.floatingSkipButton.style.left = "0px", m.floatingSkipButton.style["line-height"] = "3em", m.floatingSkipButton.style.outline = "0", m.floatingSkipButton.style.position = "absolute", m.floatingSkipButton.style.padding = "0", m.floatingSkipButton.style.height = "5em", m.floatingSkipButton.style["min-width"] = "5em", m.floatingSkipButton.style.width = "auto", m.floatingSkipButton.style.display = "none", m.floatingSkipButton.style["text-align"] = "left", v.addChild("button", {
                    el: m.floatingSkipButton
                }), s.addEventListener("touchend", i = function(e) {
                    window.removeEventListener("orientationchange", m.eventOrientationChange), window.removeEventListener("resize", m.eventSizeChange), m.iOSVideoPlayer.destroy(), f.pause(), f.isFullscreen = m.isFullscreen, f.forceToSkip = !0, f.destroy(), f.isCompleted = !0, e.stopPropagation(), e.preventDefault()
                }), s.addEventListener("click", i), m.floatingSkipButton.addEventListener("touchend", i), m.floatingSkipButton.addEventListener("click", i), (o = g.contentWindow.document.createElement("div")).id = "ad_skip_text", o.innerHTML = e, o.className = "top-bar-text", o.role = "button", o.style["margin-left"] = "1em", o.style["margin-right"] = "1em", o.style.right = "", o.style.left = "0px", o.style["font-size"] = "1em", o.style["line-height"] = "24px", o.style.outline = "0", o.style.position = "absolute", o.style["text-align"] = "left", o.style.padding = "0", o.style.height = "3em", o.style.width = "auto", o.style["pointer-events"] = "none", o.style.display = "none", m.floatingAdSkipText = m.videojsOrigin.createEl("div", {
                    role: "button",
                    className: "top-bar-text",
                    innerHTML: ""
                }), m.floatingAdSkipText.style["margin-left"] = "1em", m.floatingAdSkipText.style["margin-right"] = "1em", m.floatingAdSkipText.style.right = "", m.floatingAdSkipText.style.left = "0px", m.floatingAdSkipText.style["font-size"] = "1em", m.floatingAdSkipText.style["line-height"] = "3em", m.floatingAdSkipText.style.outline = "0", m.floatingAdSkipText.style.position = "absolute", m.floatingAdSkipText.style["text-align"] = "left", m.floatingAdSkipText.style.padding = "0", m.floatingAdSkipText.style.height = "3em", m.floatingAdSkipText.style.width = "auto", m.floatingAdSkipText.style["pointer-events"] = "none", m.floatingAdSkipText.style.display = "none", v.addChild("button", {
                    el: m.floatingAdSkipText
                }), "top-right" === m.options.skippable.skipLocation && (s.style.right = "0px", s.style.left = "", s.style["text-align"] = "right", o.style.right = "0px", o.style.left = "", m.floatingSkipButton.style.right = "0px", m.floatingSkipButton.style.left = "", m.floatingSkipButton.style["text-align"] = "right", m.floatingAdSkipText.style.right = "0px", m.floatingAdSkipText.style.left = ""), c = d = l = !1, u = {}, p = function() {
                    var e = Math.round(v.player().duration()),
                        t = Math.round(v.player().currentTime()),
                        n = f.options.skippable.allowOverride ? Math.round(m.options.data.skipOffsetMsec / 1e3) : m.options.skippable.videoOffset,
                        t = n - t,
                        i = !m.options.skippable.allowOverride || m.options.data.isVastVideoSkippable,
                        i = !(e < n) && i;
                    r < e && !m.options.disableTopBar && i && (0 < t && !f.startedReplay && !f.isEnded ? (m.floatingAdSkipText.innerHTML = a.replace("%%TIME%%", t), s.style.display = "none", o.innerHTML = a.replace("%%TIME%%", t), o.style.display = "block", b.elementsOverlap(o, h) && (o.style.display = "none")) : (m.readyForSkip = !0, m.isFullscreen && (m.floatingAdSkipText.style.display = "none", b.isPortrait() && (m.floatingSkipButton.style.display = "block")), o.style.display = "none", s.style.display = "block"))
                }, v.on("resize", function() {
                    p()
                }), v.on("timeupdate", function() {
                    var e = f.options.data.vastProgressEvent;
                    if (!m.options.isWaterfall || !m.options.vpaid || m.options.vpaidImpressionFired) {
                        var t = 1e3 * Math.round(v.player().currentTime());
                        if (e && "object" == typeof e) {
                            function n() {}
                            for (var i in e) {
                                var o = e[i];
                                o && 0 <= o && o <= t && -1 === Object.keys(u).indexOf(i) && (u[i] = o, (o = {}).name = i, o.name && f.dispatchEventToAdunit(o, n))
                            }
                        }
                        p()
                    }
                })), m.options.skippable && m.options.skippable.skipLocation && "top-right" === m.options.skippable.skipLocation && (h.style.right = "", h.style.left = "0px", m.floatingAdIndicator.style.right = "", m.floatingAdIndicator.style.left = "0px"), !m.options.disableTopBar && n && (!0 === m.options.skippable.enabled && (n.appendChild(s), n.appendChild(o)), n.appendChild(h)), v.on("timeupdate", function() {
                    var e, t, n, i;
                    m.options.vpaid || (e = Math.round(v.player().currentTime()), n = (t = v.player().duration()) / 4 * 2, i = t / 4 * 3, !l && t / 4 <= e && e < n && (m.dispatchEventToAdunit({
                        name: "video-first-quartile"
                    }), l = !0), !d && n <= e && e < i && (m.dispatchEventToAdunit({
                        name: "video-mid"
                    }), d = !0), !c && i <= e && (m.dispatchEventToAdunit({
                        name: "video-third-quartile"
                    }), c = !0))
                });
                v.player().bigPlayButton.on("touchend", function(e) {
                    t(), e.preventDefault()
                }), v.player().bigPlayButton.on("click", function() {
                    t()
                }), v.on("error", function() {
                    f.destroyWithoutSkip(!0, "General error reported from HTML5 video player (iOS inline)", null, 900)
                }), v.on("loadstart", function() {
                    m.dispatchEventToAdunit({
                        name: "loadstart"
                    })
                }), v.on("pause", function() {
                    !0 === (f.options.sideStream && f.options.sideStream.enabled && f.options.sideStreamObject && f.options.sideStreamObject.isActivated) && !0 === f.options.showPlayToggle && 1 == f.options.sideStream.dynamicBigPlayButtonOnSideStream || f.isFullscreen || (v.player().bigPlayButton.el().style.display = "block")
                })
            }
        }
    }
}, function(e, t, n) {
    function c(e) {
        u.debug("Video Player: " + e)
    }
    var u = n(2),
        p = n(13);
    e.exports = function(l, d) {
        return {
            createIframeAndRequiredObject: function(e) {
                u.log("Video Player: createIframeAndRequiredObject");
                var t, n = l.options,
                    i = document.createElement("iframe"),
                    o = (i.src = "about:blank", n.targetElement.appendChild(i), i.style.width = n.width + "px", i.style.height = n.height + "px", i.id = n.iframeVideoWrapperId, i.setAttribute("allowfullscreen", "true"), i.setAttribute("webkitallowfullscreen", "true"), i.setAttribute("mozallowfullscreen", "true"), i.contentWindow.document.open(), i.contentWindow.document.write("<html></html>"), i.contentWindow.document.close(), void 0 !== n.enableInlineVideoFullscreenButton && (l.enableFullscreen = n.enableInlineVideoFullscreenButton), i.contentWindow.document),
                    r = i.contentWindow.window,
                    a = (c("Creating and styling top chrome bar"), o.createElement("div")),
                    s = (a.id = "top_chrome", a.style.height = n.playerSkin && "number" == typeof n.playerSkin.dividerHeight ? l.topChromeHeight - n.playerSkin.dividerHeight + "px" : l.topChromeHeight - 1 + "px", a.style.width = n.width + "px", a.style.marginRight = "auto", a.style.marginLeft = "auto", a.className = "video-js vjs-default-skin", c("Generating and styling video object"), o.createElement("video"));
                s.id = l.an_video_ad_player_id, s.className = "video-js vjs-default-skin", s.style.marginRight = "auto", s.style.marginLeft = "auto", a.style["z-index"] = s.style["z-index"] + 1, n.vpaid || (c("Generating source object"), (t = o.createElement("source")).type = "video/mp4", t.src = n.videoUrl, s.appendChild(t)), c("Injecting required elements into iframe"), n.disableTopBar || o.body.appendChild(a), o.body.appendChild(s), r.videojs = l.videojsOrigin, o.body.style.margin = "0px", o.body.style.overflow = "hidden", n.vpaid && ((t = o.createElement("script")).innerHTML = d.videojs_vpaid, o.head.appendChild(t)), l.options.verifications && (d.verificationManager = new p(l.options.verifications, {
                    parentDoc: o,
                    videoElement: s,
                    viewableImpression: l.options.viewableImpression,
                    adServingId: l.options.adServingId,
                    player: d
                }), d.verificationManager.init(), d.verificationManager.start()), e(i)
            }
        }
    }
}, function(e, t, n) {
    function i() {
        a("initiated"), this.isComplete = !1, this.run = function(e) {
            a("start UserSync");
            try {
                var t;
                this.isComplete ? a("stop UserSync because it's already done") : (t = e.userSyncTargetElement || e.targetElement, e && e.usersync_url && "string" == typeof e.usersync_url && "" !== e.usersync_url && t && "object" == typeof t ? (this.executeUserSync(e, t), this.isComplete = !0, a("done")) : a("stop UserSync because it needs proper options.usersync_url and options.targetElement/options.userSyncTargetElement"))
            } catch (e) {
                a("error: " + e)
            }
        }, this.executeUserSync = function(e, t) {
            t.ownerDocument && t.ownerDocument.getElementById("apn_user_sync") ? a("stop UserSync because it's already done") : (a("decode UserSync url"), e = decodeURIComponent(e.usersync_url), this.prepareIframeAndScript(e, t))
        }, this.prepareIframeAndScript = function(e, t) {
            a("prepareIframeAndScript: " + e);
            var n = document.createElement("iframe");
            n.id = "apn_user_sync", n.src = e, n.width = "1", n.height = "1", n.frameborder = "0", n.scrolling = "no", n.marginheight = "0", n.marginwidth = "0", n.topmargin = "0", n.leftmargin = "0", n.style.position = "absolute", n.style.overflow = "hidden", n.style.clip = "rect(0 0 0 0)", n.style.height = "1px", n.style.width = "1px", n.style.margin = "-1px", n.style.padding = "0", n.style.border = "0", t.appendChild(n), a("UserSync iframe injected into target element: " + t.id)
        }
    }
    var o, r = n(2),
        a = function(e) {
            r.debug("[UserSync]", e)
        };
    e.exports = {
        sharedInstance: function() {
            return o = o || new i
        }
    }
}, function(e, t, n) {
    function b(e) {
        o.verbose(e, i)
    }

    function w(e) {
        o.warn(e, i)
    }
    var k = n(11),
        i = "PlayerManager_VideoSizeHandler",
        o = n(2);
    e.exports = {
        resizeVideo: function(e, t, n, i) {
            b("resizeVideo");
            Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

            function o() {
                return k.isAndroid() || c() || "below" === d.controlBarPosition
            }
            var r, a, s, l = 0,
                l = k.isMobile() && 13 <= parseInt(k.getIOSVersion()) ? Math.max(document.documentElement.clientHeight || 0) : Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
                d = (n.options.safeFrame && n.options.safeFrameAutoInitialSize && !n.isExpanded && (l = Math.max(l, n.options.height)), b("viewportHeight: " + l), n.options),
                c = n.isIosInlineRequired.bind(n),
                u = (n.decidePlayer.bind(n), n.iframeVideoWrapper),
                p = n.adVideoPlayer,
                h = d.width,
                m = 0,
                f = 0,
                v = d.fixedSizePlayer,
                g = d.video.width,
                y = d.video.height;
            if (d.autoInitialSize && (d.sideStream && !0 === d.sideStream.enabled && d.emptyDiv ? h = d.emptyDiv.offsetWidth : 0 === (h = d.targetElement.offsetWidth) && (h = d.width, w("AutoInitialSize could not find parent element width, using tag width"))), s = d.aspectRatio || d.playerAspectRatio, b("options.height : " + d.height), k.isEmpty(s) && (s = k.isEmpty(d.height) ? "16:9" : "none"), b("aspectRatioOption : " + s), a = void 0 === g || void 0 === y || 0 === g || 0 === y ? 16 / 9 : g / y, d.disableTopBar || (m = 24), o() && (!0 === d.disableCollapse.hideControlBar && !0 === n.isEnded ? f = 0 : f += d.playerSkin.controlBarHeight), d.safeFrame && 0 < d.player_height && !d.safeFrameAutoInitialSize && a !== d.player_width / d.player_height && (h = d.width, a = d.player_width / d.player_height), b("initial VAST width : " + g), b("initial VAST height : " + y), b("initial topOffset : " + m), b("initial bottomOffset : " + f), b("initial mediaAspectRatio : " + a), v) A = d.height, h = d.width, r = d.height - m - f;
            else {
                var g = s.split(":");
                if (2 === g.length) try {
                    a = g[0] / g[1]
                } catch (e) {
                    b(e)
                }
                r = Math.round(h / a), b("pure : " + h + "," + a), b("pure mediaHeight: " + r);
                var A = +r + m + f;
                d.maxHeight.enabled && 0 < d.maxHeight.height ? h = ((A = Math.min(A, d.maxHeight.height, 1 < l ? l : r)) - m - f) * a : l < A && a < 1 && 1 < l && (h = ((A = d.safeFrame && d.safeFrameAutoInitialSize ? l : Math.min(l, document.documentElement.clientHeight)) - m - f) * a), r = A + 0 - m - f
            }
            d.height = A, d.mediaHeight = r, d.safeFrame && d.safeFrameAutoInitialSize && (d.width = h), k.isMobile() && (d.isWaterfall || d.safeFrame) && (d.targetElement.style.height = d.height + "px"), u && "object" == typeof u && u.style && (u.style.border = "none", u.style.width = h + "px", u.style.height = A + "px", u.contentWindow && (y = u.contentWindow.document && u.contentWindow.document.getElementById("top_chrome")) && (y.style.width = h + "px", y.style.marginLeft = "auto", y.style.marginRight = "auto"), n.adVideoPlayer.el_.style.marginLeft = "auto", n.adVideoPlayer.el_.style.marginRight = "auto", b("final wrapper width for html5 : " + h), b("final wrapper height for html5 : " + A)), p.width(h), d.sideStream && !0 === d.sideStream.enabled && d.emptyDiv ? d.targetElement.style.width = h + "px" : d.targetElement.style.width = "", b("resize video.js width to : " + h), k.isMobile() && 13 <= parseInt(k.getIOSVersion()) && (t = !0), b("shouldConsiderHeightOfDevice : " + t), b("hasStaticHeight : " + !1), b("mediaHeight + bottomOffset + topOffset : " + (r + f + m)), t && l < r + f + m ? (s = (v = l) - f - m, l <= 1 && (v = d.height + f + m, s = d.height), p.height(s), b("mobile set video.js height to : " + s), d.height = v, b("mobile options.height to : " + d.height), d.mediaHeight = s, b("mobile options.mediaHeight to : " + d.mediaHeight), parseInt(k.getIOSVersion()) < 13 && (u.style.height = s + "px"), b("mobile set iframeVideoWrapper to : " + u.style.height)) : (g = r, o() || (g += f), p.height(g), b("desktop set video.js height to : " + g)), n.isEnded && n.endCard && n.endCard.onVideoResized(h, r), d.targetElement.style.visibility = "visible", "function" == typeof i && i()
        },
        setSizeForInitialRender: function(e) {
            b("setSizeForInitialRender");
            var t = e.width;
            e.autoInitialSize && (t = e.targetElement.offsetWidth) <= 0 && (t = e.width, w("Width of target element was not set or zero, using tag width for player instead")), b("setSizeForInitialRender using width: " + t), e.width = t
        },
        getFinalSize: function(e) {
            e = e.options.wcElement && e.options.wcElement instanceof Element ? e.options.wcElement.querySelector("#" + String(e.options.iframeVideoWrapperId)) : document.getElementById(e.options.iframeVideoWrapperId);
            return {
                width: e.offsetWidth,
                height: e.offsetHeight
            }
        },
        resizePlayer: function(e, t, n) {
            var i;
            b("resizePlayer"), n.overlayPlayer && n.adVideoPlayer && (n.resizeVideoWithDimensions(e, t), n.iframeVideoWrapper && "object" == typeof n.iframeVideoWrapper && (n.iframeVideoWrapper.style.border = "none", n.iframeVideoWrapper.style.width = e + "px", n.iframeVideoWrapper.style.height = t + "px", (i = n && n.iframeVideoWrapper && n.iframeVideoWrapper.contentWindow && n.iframeVideoWrapper.contentWindow.document && n.iframeVideoWrapper.contentWindow.document.getElementById("top_chrome")) && (i.style.width = e + "px", k.isIos() && (i.style.marginLeft = "", i.style.marginRight = "")), k.isIos() && (n.adVideoPlayer.el_.style.marginLeft = "", n.adVideoPlayer.el_.style.marginRight = "")), n.adVideoPlayer.width(e), i = 0, n.options.disableTopBar || (i = 24), (k.isAndroid() || n.isIosInlineRequired() || "below" === n.options.controlBarPosition) && (i += n.options.playerSkin.controlBarHeight, n.adVideoPlayer.controlBar && n.adVideoPlayer.controlBar.progressControl && (i += n.adVideoPlayer.controlBar.progressControl.el_.offsetHeight)), n.adVideoPlayer.height(t - i))
        },
        resizeVideoForSideStream: function(e, t, n, i) {
            function o() {
                return k.isAndroid() || a() || "below" === r.controlBarPosition
            }
            b("resizeVideo-sidestream");
            var r = e.options,
                a = e.isIosInlineRequired.bind(e),
                s = (e.decidePlayer.bind(e), e.iframeVideoWrapper),
                l = e.adVideoPlayer,
                d = t,
                c = 0,
                u = 0,
                p = r.video.width,
                h = r.video.height,
                m = r.aspectRatio || r.playerAspectRatio;
            b("options.height : " + n), k.isEmpty(m) && (m = k.isEmpty(n) ? "16:9" : "none"), b("aspectRatioOption : " + m), m = void 0 === p || void 0 === h || 0 === p || 0 === h ? 16 / 9 : p / h, r.disableTopBar || (c = 24), o() && (u += r.playerSkin.controlBarHeight), b("initial VAST width : " + p), b("initial VAST height : " + h), b("initial topOffset : " + c), b("initial bottomOffset : " + u), b("initial mediaAspectRatio : " + m);
            d = t, h = (p = n) - c - u;
            n && t && (r.mediaHeight = h), s && "object" == typeof s && s.style && (s.style.border = "none", s.style.width = d + "px", s.style.height = p + "px", s.contentWindow && (m = s.contentWindow.document && s.contentWindow.document.getElementById("top_chrome")) && (m.style.width = d, m.style.marginLeft = "", m.style.marginRight = ""), e.adVideoPlayer.el_.style.marginLeft = "", e.adVideoPlayer.el_.style.marginRight = "", b("final wrapper width for html5 : " + d), b("final wrapper height for html5 : " + p)), l.width(d), r.sideStream && !0 === r.sideStream.enabled && r.emptyDiv ? r.targetElement.style.width = d + "px" : r.targetElement.style.width = "", b("resize video.js width to : " + d), b("shouldConsiderHeightOfDevice : " + !1), b("mediaHeight + bottomOffset + topOffset : " + (h + u + c)), b("window.innerHeight : " + window.innerHeight);
            n = h;
            o() || (n += u), l.height(n), b("desktop set video.js height to : " + n), e.isEnded && e.endCard && e.endCard.onVideoResized(d, h), "function" == typeof i && i()
        }
    }
}, function(e, t) {
    e.exports = "/* jshint ignore:start */\n(function(window, document, vjs, undefined) {\n    /*jshint unused:false */\n    \"use strict\";\n\n    var NODE_TYPE_ELEMENT = 1;\n\n    function noop() {}\n\n    function isNull(o) {\n        return o === null;\n    }\n\n    function isDefined(o) {\n        return o !== undefined;\n    }\n\n    function isUndefined(o) {\n        return o === undefined;\n    }\n\n    function isObject(obj) {\n        return typeof obj === 'object';\n    }\n\n    function isFunction(str) {\n        return typeof str === 'function';\n    }\n\n    function isNumber(num) {\n        return typeof num === 'number';\n    }\n\n    function isWindow(obj) {\n        return isObject(obj) && obj.window === obj;\n    }\n\n    function isArray(array) {\n        return Object.prototype.toString.call(array) === '[object Array]';\n    }\n\n    function isArrayLike(obj) {\n        if (obj === null || isWindow(obj) || isFunction(obj) || isUndefined(obj)) {\n            return false;\n        }\n\n        var length = obj.length;\n\n        if (obj.nodeType === NODE_TYPE_ELEMENT && length) {\n            return true;\n        }\n\n        return isString(obj) || isArray(obj) || length === 0 ||\n            typeof length === 'number' && length > 0 && (length - 1) in obj;\n    }\n\n    function isString(str) {\n        return typeof str === 'string';\n    }\n\n    function isEmptyString(str) {\n        return isString(str) && str.length === 0;\n    }\n\n    function isNotEmptyString(str) {\n        return isString(str) && str.length !== 0;\n    }\n\n    function arrayLikeObjToArray(args) {\n        return Array.prototype.slice.call(args);\n    }\n\n    function forEach(obj, iterator, context) {\n        var key, length;\n        if (obj) {\n            if (isFunction(obj)) {\n                for (key in obj) {\n                    // Need to check if hasOwnProperty exists,\n                    // as on IE8 the result of querySelectorAll is an object without a hasOwnProperty function\n                    if (key !== 'prototype' && key !== 'length' && key !== 'name' && (!obj.hasOwnProperty || obj.hasOwnProperty(key))) {\n                        iterator.call(context, obj[key], key, obj);\n                    }\n                }\n            } else if (isArray(obj)) {\n                var isPrimitive = typeof obj !== 'object';\n                for (key = 0, length = obj.length; key < length; key++) {\n                    if (isPrimitive || key in obj) {\n                        iterator.call(context, obj[key], key, obj);\n                    }\n                }\n            } else if (obj.forEach && obj.forEach !== forEach) {\n                obj.forEach(iterator, context, obj);\n            } else {\n                for (key in obj) {\n                    if (obj.hasOwnProperty(key)) {\n                        iterator.call(context, obj[key], key, obj);\n                    }\n                }\n            }\n        }\n        return obj;\n    }\n\n    var SNAKE_CASE_REGEXP = /[A-Z]/g;\n\n    function snake_case(name, separator) {\n        separator = separator || '_';\n        return name.replace(SNAKE_CASE_REGEXP, function(letter, pos) {\n            return (pos ? separator : '') + letter.toLowerCase();\n        });\n    }\n\n    function isValidEmail(email) {\n        if (!isString(email)) {\n            return false;\n        }\n        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/i;\n        return EMAIL_REGEXP.test(email.trim());\n    }\n\n    function extend(obj) {\n        var arg, i, k;\n        for (i = 1; i < arguments.length; i++) {\n            arg = arguments[i];\n            for (k in arg) {\n                if (arg.hasOwnProperty(k)) {\n                    if (isObject(obj[k]) && !isNull(obj[k]) && isObject(arg[k])) {\n                        obj[k] = extend({}, obj[k], arg[k]);\n                    } else {\n                        obj[k] = arg[k];\n                    }\n                }\n            }\n        }\n        return obj;\n    }\n\n    function capitalize(s) {\n        return s.charAt(0).toUpperCase() + s.slice(1);\n    }\n\n    function decapitalize(s) {\n        return s.charAt(0).toLowerCase() + s.slice(1);\n    }\n\n    /**\n     * This method works the same way array.prototype.map works but if the transformer returns undefine, then\n     * it won't be added to the transformed Array.\n     */\n    function transformArray(array, transformer) {\n        var transformedArray = [];\n\n        array.forEach(function(item, index) {\n            var transformedItem = transformer(item, index);\n            if (isDefined(transformedItem)) {\n                transformedArray.push(transformedItem);\n            }\n        });\n\n        return transformedArray;\n    }\n\n    function toFixedDigits(num, digits) {\n        var formattedNum = num + '';\n        digits = isNumber(digits) ? digits : 0;\n        num = isNumber(num) ? num : parseInt(num, 10);\n        if (isNumber(num) && !isNaN(num)) {\n            formattedNum = num + '';\n            while (formattedNum.length < digits) {\n                formattedNum = '0' + formattedNum;\n            }\n            return formattedNum;\n        }\n        return NaN + '';\n    }\n\n    function debounce(callback, wait) {\n        var timeoutId;\n\n        return function() {\n            if (timeoutId) {\n                clearTimeout(timeoutId);\n            }\n            timeoutId = setTimeout(function() {\n                callback.apply(this, arguments);\n                timeoutId = undefined;\n            }, wait);\n        };\n    }\n\n    // a function designed to blow up the stack in a naive way\n    // but it is ok for videoJs children components\n    function treeSearch(root, getChildren, found) {\n        var children = getChildren(root);\n        for (var i = 0; i < children.length; i++) {\n            if (found(children[i])) {\n                return children[i];\n            } else {\n                var el = treeSearch(children[i], getChildren, found);\n                if (el) {\n                    return el;\n                }\n            }\n        }\n    }\n\n    function echoFn(val) {\n        return function() {\n            return val;\n        };\n    }\n\n    //Note: Supported formats come from http://www.w3.org/TR/NOTE-datetime\n    // and the iso8601 regex comes from http://www.pelagodesign.com/blog/2009/05/20/iso-8601-date-validation-that-doesnt-suck/\n    function isISO8601(value) {\n        if (isNumber(value)) {\n            value = value + ''; //we make sure that we are working with strings\n        }\n\n        if (!isString(value)) {\n            return false;\n        }\n\n        /*jslint maxlen: 500 */\n        var iso8086Regex = /^([\\+-]?\\d{4}(?!\\d{2}\\b))((-?)((0[1-9]|1[0-2])(\\3([12]\\d|0[1-9]|3[01]))?|W([0-4]\\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\\d|[12]\\d{2}|3([0-5]\\d|6[1-6])))([T\\s]((([01]\\d|2[0-3])((:?)[0-5]\\d)?|24\\:?00)([\\.,]\\d+(?!:))?)?(\\17[0-5]\\d([\\.,]\\d+)?)?([zZ]|([\\+-])([01]\\d|2[0-3]):?([0-5]\\d)?)?)?)?$/;\n        return iso8086Regex.test(value.trim());\n    }\n\n    /**\n     * Checks if the Browser is IE9 and below\n     * @returns {boolean}\n     */\n    function isOldIE() {\n        var version = getInternetExplorerVersion(navigator);\n        if (version === -1) {\n            return false;\n        }\n\n        return version < 10;\n    }\n\n    /**\n     * Returns the version of Internet Explorer or a -1 (indicating the use of another browser).\n     * Source: https://msdn.microsoft.com/en-us/library/ms537509(v=vs.85).aspx\n     * @returns {number} the version of Internet Explorer or a -1 (indicating the use of another browser).\n     */\n    function getInternetExplorerVersion(navigator) {\n        var rv = -1;\n\n        if (navigator.appName == 'Microsoft Internet Explorer') {\n            var ua = navigator.userAgent;\n            var re = new RegExp(\"MSIE ([0-9]{1,}[\\.0-9]{0,})\");\n            var res = re.exec(ua);\n            if (res !== null) {\n                rv = parseFloat(res[1]);\n            }\n        }\n\n        return rv;\n    }\n\n    /*** Mobile Utility functions ***/\n    var _UA = navigator.userAgent;\n\n    function isIDevice() {\n        return /iP(hone|ad)/.test(_UA);\n    }\n\n    function isMobile() {\n        return /iP(hone|ad|od)|Android|Windows Phone/.test(_UA);\n    }\n\n    function isIPhone() {\n        return /iP(hone|od)/.test(_UA);\n    }\n\n    function isAndroid() {\n        return /Android/.test(_UA);\n    }\n\n    ;\n    (function e(t, n, r) {\n        function s(o, u) {\n            if (!n[o]) {\n                if (!t[o]) {\n                    var a = typeof require == \"function\" && require;\n                    if (!u && a) return a(o, !0);\n                    if (i) return i(o, !0);\n                    var f = new Error(\"Cannot find module '\" + o + \"'\");\n                    throw f.code = \"MODULE_NOT_FOUND\", f }\n                var l = n[o] = { exports: {} };\n                t[o][0].call(l.exports, function(e) {\n                    var n = t[o][1][e];\n                    return s(n ? n : e) }, l, l.exports, e, t, n, r) }\n            return n[o].exports }\n        var i = typeof require == \"function\" && require;\n        for (var o = 0; o < r.length; o++) s(r[o]);\n        return s })({\n        1: [function(require, module, exports) {\n            'use strict';\n\n            var METHODS = [\n                'handshakeVersion',\n                'initAd',\n                'startAd',\n                'stopAd',\n                'skipAd', // VPAID 2.0 new method\n                'resizeAd',\n                'pauseAd',\n                'resumeAd',\n                'expandAd',\n                'collapseAd',\n                'subscribe',\n                'unsubscribe'\n            ];\n\n            var EVENTS = [\n                'AdLoaded',\n                'AdStarted',\n                'AdStopped',\n                'AdSkipped',\n                'AdSkippableStateChange', // VPAID 2.0 new event\n                'AdSizeChange', // VPAID 2.0 new event\n                'AdLinearChange',\n                'AdDurationChange', // VPAID 2.0 new event\n                'AdExpandedChange',\n                'AdRemainingTimeChange', // [Deprecated in 2.0] but will be still fired for backwards compatibility\n                'AdVolumeChange',\n                'AdImpression',\n                'AdVideoStart',\n                'AdVideoFirstQuartile',\n                'AdVideoMidpoint',\n                'AdVideoThirdQuartile',\n                'AdVideoComplete',\n                'AdClickThru',\n                'AdInteraction', // VPAID 2.0 new event\n                'AdUserAcceptInvitation',\n                'AdUserMinimize',\n                'AdUserClose',\n                'AdPaused',\n                'AdPlaying',\n                'AdLog',\n                'AdError'\n            ];\n\n            var GETTERS = [\n                'getAdLinear',\n                'getAdWidth', // VPAID 2.0 new getter\n                'getAdHeight', // VPAID 2.0 new getter\n                'getAdExpanded',\n                'getAdSkippableState', // VPAID 2.0 new getter\n                'getAdRemainingTime',\n                'getAdDuration', // VPAID 2.0 new getter\n                'getAdVolume',\n                'getAdCompanions', // VPAID 2.0 new getter\n                'getAdIcons' // VPAID 2.0 new getter\n            ];\n\n            var SETTERS = [\n                'setAdVolume'\n            ];\n\n\n            /**\n             * This callback is displayed as global member. The callback use nodejs error-first callback style\n             * @callback NodeStyleCallback\n             * @param {string|null}\n             * @param {undefined|object}\n             */\n\n\n            /**\n             * IVPAIDAdUnit\n             *\n             * @class\n             *\n             * @param {object} creative\n             * @param {HTMLElement} el\n             * @param {HTMLVideoElement} video\n             */\n            function IVPAIDAdUnit(creative, el, video) {}\n\n\n            /**\n             * handshakeVersion\n             *\n             * @param {string} VPAIDVersion\n             * @param {nodeStyleCallback} callback\n             */\n            IVPAIDAdUnit.prototype.handshakeVersion = function(VPAIDVersion, callback) {};\n\n            /**\n             * initAd\n             *\n             * @param {number} width\n             * @param {number} height\n             * @param {string} viewMode can be 'normal', 'thumbnail' or 'fullscreen'\n             * @param {number} desiredBitrate indicates the desired bitrate in kbps\n             * @param {object} [creativeData] used for additional initialization data\n             * @param {object} [environmentVars] used for passing implementation-specific of js version\n             * @param {NodeStyleCallback} callback\n             */\n            IVPAIDAdUnit.prototype.initAd = function(width, height, viewMode, desiredBitrate, creativeData, environmentVars, callback) {};\n\n            /**\n             * startAd\n             *\n             * @param {nodeStyleCallback} callback\n             */\n            IVPAIDAdUnit.prototype.startAd = function(callback) {};\n\n            /**\n             * stopAd\n             *\n             * @param {nodeStyleCallback} callback\n             */\n            IVPAIDAdUnit.prototype.stopAd = function(callback) {};\n\n            /**\n             * skipAd\n             *\n             * @param {nodeStyleCallback} callback\n             */\n            IVPAIDAdUnit.prototype.skipAd = function(callback) {};\n\n            /**\n             * resizeAd\n             *\n             * @param {nodeStyleCallback} callback\n             */\n            IVPAIDAdUnit.prototype.resizeAd = function(width, height, viewMode, callback) {};\n\n            /**\n             * pauseAd\n             *\n             * @param {nodeStyleCallback} callback\n             */\n            IVPAIDAdUnit.prototype.pauseAd = function(callback) {};\n\n            /**\n             * resumeAd\n             *\n             * @param {nodeStyleCallback} callback\n             */\n            IVPAIDAdUnit.prototype.resumeAd = function(callback) {};\n\n            /**\n             * expandAd\n             *\n             * @param {nodeStyleCallback} callback\n             */\n            IVPAIDAdUnit.prototype.expandAd = function(callback) {};\n\n            /**\n             * collapseAd\n             *\n             * @param {nodeStyleCallback} callback\n             */\n            IVPAIDAdUnit.prototype.collapseAd = function(callback) {};\n\n            /**\n             * subscribe\n             *\n             * @param {string} event\n             * @param {nodeStyleCallback} handler\n             * @param {object} context\n             */\n            IVPAIDAdUnit.prototype.subscribe = function(event, handler, context) {};\n\n            /**\n             * startAd\n             *\n             * @param {string} event\n             * @param {function} handler\n             */\n            IVPAIDAdUnit.prototype.unsubscribe = function(event, handler) {};\n\n\n\n            /**\n             * getAdLinear\n             *\n             * @param {nodeStyleCallback} callback\n             */\n            IVPAIDAdUnit.prototype.getAdLinear = function(callback) {};\n\n            /**\n             * getAdWidth\n             *\n             * @param {nodeStyleCallback} callback\n             */\n            IVPAIDAdUnit.prototype.getAdWidth = function(callback) {};\n\n            /**\n             * getAdHeight\n             *\n             * @param {nodeStyleCallback} callback\n             */\n            IVPAIDAdUnit.prototype.getAdHeight = function(callback) {};\n\n            /**\n             * getAdExpanded\n             *\n             * @param {nodeStyleCallback} callback\n             */\n            IVPAIDAdUnit.prototype.getAdExpanded = function(callback) {};\n\n            /**\n             * getAdSkippableState\n             *\n             * @param {nodeStyleCallback} callback\n             */\n            IVPAIDAdUnit.prototype.getAdSkippableState = function(callback) {};\n\n            /**\n             * getAdRemainingTime\n             *\n             * @param {nodeStyleCallback} callback\n             */\n            IVPAIDAdUnit.prototype.getAdRemainingTime = function(callback) {};\n\n            /**\n             * getAdDuration\n             *\n             * @param {nodeStyleCallback} callback\n             */\n            IVPAIDAdUnit.prototype.getAdDuration = function(callback) {};\n\n            /**\n             * getAdVolume\n             *\n             * @param {nodeStyleCallback} callback\n             */\n            IVPAIDAdUnit.prototype.getAdVolume = function(callback) {};\n\n            /**\n             * getAdCompanions\n             *\n             * @param {nodeStyleCallback} callback\n             */\n            IVPAIDAdUnit.prototype.getAdCompanions = function(callback) {};\n\n            /**\n             * getAdIcons\n             *\n             * @param {nodeStyleCallback} callback\n             */\n            IVPAIDAdUnit.prototype.getAdIcons = function(callback) {};\n\n            /**\n             * setAdVolume\n             *\n             * @param {number} volume\n             * @param {nodeStyleCallback} callback\n             */\n            IVPAIDAdUnit.prototype.setAdVolume = function(volume, callback) {};\n\n            addStaticToInterface(IVPAIDAdUnit, 'METHODS', METHODS);\n            addStaticToInterface(IVPAIDAdUnit, 'GETTERS', GETTERS);\n            addStaticToInterface(IVPAIDAdUnit, 'SETTERS', SETTERS);\n            addStaticToInterface(IVPAIDAdUnit, 'EVENTS', EVENTS);\n\n\n            var VPAID1_METHODS = METHODS.filter(function(method) {\n                return ['skipAd'].indexOf(method) === -1;\n            });\n\n            addStaticToInterface(IVPAIDAdUnit, 'checkVPAIDInterface', function checkVPAIDInterface(creative) {\n                var result = VPAID1_METHODS.every(function(key) {\n                    return typeof creative[key] === 'function';\n                });\n                return result;\n            });\n\n            module.exports = IVPAIDAdUnit;\n\n            function addStaticToInterface(Interface, name, value) {\n                Object.defineProperty(Interface, name, {\n                    writable: false,\n                    configurable: false,\n                    value: value\n                });\n            }\n\n\n        }, {}],\n        2: [function(require, module, exports) {\n            'use strict';\n\n            var IVPAIDAdUnit = require('./IVPAIDAdUnit');\n            var Subscriber = require('./subscriber');\n            var checkVPAIDInterface = IVPAIDAdUnit.checkVPAIDInterface;\n            var utils = require('./utils');\n            var METHODS = IVPAIDAdUnit.METHODS;\n            var ERROR = 'AdError';\n            var AD_CLICK = 'AdClickThru';\n            var FILTERED_EVENTS = IVPAIDAdUnit.EVENTS.filter(function(event) {\n                return event != AD_CLICK;\n            });\n\n            /**\n             * This callback is displayed as global member. The callback use nodejs error-first callback style\n             * @callback NodeStyleCallback\n             * @param {string|null}\n             * @param {undefined|object}\n             */\n\n\n            /**\n             * VPAIDAdUnit\n             * @class\n             *\n             * @param VPAIDCreative\n             * @param {HTMLElement} [el] this will be used in initAd environmentVars.slot if defined\n             * @param {HTMLVideoElement} [video] this will be used in initAd environmentVars.videoSlot if defined\n             */\n            function VPAIDAdUnit(VPAIDCreative, el, video, iframe) {\n                this._isValid = checkVPAIDInterface(VPAIDCreative);\n                if (this._isValid) {\n                    this._creative = VPAIDCreative;\n                    this._el = el;\n                    this._videoEl = video;\n                    this._iframe = iframe;\n                    this._subscribers = new Subscriber();\n                    $addEventsSubscribers.call(this);\n                }\n            }\n\n            VPAIDAdUnit.prototype = Object.create(IVPAIDAdUnit.prototype);\n\n            /**\n             * isValidVPAIDAd will return if the VPAIDCreative passed in constructor is valid or not\n             *\n             * @return {boolean}\n             */\n            VPAIDAdUnit.prototype.isValidVPAIDAd = function isValidVPAIDAd() {\n                return this._isValid;\n            };\n\n            IVPAIDAdUnit.METHODS.forEach(function(method) {\n                //NOTE: this methods arguments order are implemented differently from the spec\n                var ignores = [\n                    'subscribe',\n                    'unsubscribe',\n                    'initAd'\n                ];\n\n                if (ignores.indexOf(method) !== -1) return;\n\n                VPAIDAdUnit.prototype[method] = function() {\n                    var ariaty = IVPAIDAdUnit.prototype[method].length;\n                    // TODO avoid leaking arguments\n                    // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments\n                    var args = Array.prototype.slice.call(arguments);\n                    var callback = (ariaty === args.length) ? args.pop() : undefined;\n\n                    setTimeout(function() {\n                        var result, error = null;\n                        try {\n                            result = this._creative[method].apply(this._creative, args);\n                        } catch (e) {\n                            error = e;\n                        }\n\n                        callOrTriggerEvent(callback, this._subscribers, error, result);\n                    }.bind(this), 0);\n                };\n            });\n\n\n            /**\n             * initAd concreate implementation\n             *\n             * @param {number} width\n             * @param {number} height\n             * @param {string} viewMode can be 'normal', 'thumbnail' or 'fullscreen'\n             * @param {number} desiredBitrate indicates the desired bitrate in kbps\n             * @param {object} [creativeData] used for additional initialization data\n             * @param {object} [environmentVars] used for passing implementation-specific of js version, if el & video was used in constructor slot & videoSlot will be added to the object\n             * @param {NodeStyleCallback} callback\n             */\n            VPAIDAdUnit.prototype.initAd = function initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars, callback) {\n                creativeData = creativeData || {};\n                environmentVars = utils.extend({\n                    slot: this._el,\n                    videoSlot: this._videoEl\n                }, environmentVars || {});\n\n                setTimeout(function() {\n                    var error;\n                    try {\n                        this._creative.initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars);\n                    } catch (e) {\n                        error = e;\n                    }\n\n                    callOrTriggerEvent(callback, this._subscribers, error);\n                }.bind(this), 0);\n            };\n\n            /**\n             * subscribe\n             *\n             * @param {string} event\n             * @param {nodeStyleCallback} handler\n             * @param {object} context\n             */\n            VPAIDAdUnit.prototype.subscribe = function subscribe(event, handler, context) {\n                this._subscribers.subscribe(handler, event, context);\n            };\n\n\n            /**\n             * unsubscribe\n             *\n             * @param {string} event\n             * @param {nodeStyleCallback} handler\n             */\n            VPAIDAdUnit.prototype.unsubscribe = function unsubscribe(event, handler) {\n                this._subscribers.unsubscribe(handler, event);\n            };\n\n            //alias\n            VPAIDAdUnit.prototype.on = VPAIDAdUnit.prototype.subscribe;\n            VPAIDAdUnit.prototype.off = VPAIDAdUnit.prototype.unsubscribe;\n\n            IVPAIDAdUnit.GETTERS.forEach(function(getter) {\n                VPAIDAdUnit.prototype[getter] = function(callback) {\n                    setTimeout(function() {\n\n                        var result, error = null;\n                        try {\n                            result = this._creative[getter]();\n                        } catch (e) {\n                            error = e;\n                        }\n\n                        callOrTriggerEvent(callback, this._subscribers, error, result);\n                    }.bind(this), 0);\n                };\n            });\n\n            /**\n             * setAdVolume\n             *\n             * @param volume\n             * @param {nodeStyleCallback} callback\n             */\n            VPAIDAdUnit.prototype.setAdVolume = function setAdVolume(volume, callback) {\n                setTimeout(function() {\n\n                    var self = this;\n                    var result, error = null;\n                    try {\n                        this._creative.setAdVolume(volume);\n                    } catch (e) {\n                        error = e;\n                    }\n                    // Wait for creative volume to be set\n                    setTimeout(function() {\n                        result = self._creative.getAdVolume();\n                        if (!error) {\n                            error = utils.validate(result === volume, 'failed to apply volume: ' + volume);\n                        }\n                        callOrTriggerEvent(callback, self._subscribers, error, result);\n                    }, 200)\n                }.bind(this), 0);\n            };\n\n            VPAIDAdUnit.prototype._destroy = function destroy() {\n                this.stopAd();\n                this._subscribers.unsubscribeAll();\n            };\n\n            function $addEventsSubscribers() {\n                // some ads implement\n                // so they only handle one subscriber\n                // to handle this we create our one\n                FILTERED_EVENTS.forEach(function(event) {\n                    this._creative.subscribe($trigger.bind(this, event), event);\n                }.bind(this));\n\n                // map the click event to be an object instead of depending of the order of the arguments\n                this._creative.subscribe($clickThruHook.bind(this), AD_CLICK);\n\n                // because we are adding the element inside the iframe\n                // the user is not able to click in the video\n                if (this._videoEl) {\n                    var documentElement = this._iframe.contentDocument.documentElement;\n                    var videoEl = this._videoEl;\n                    documentElement.addEventListener('click', function(e) {\n                        if (e.target === documentElement) {\n                            videoEl.click();\n                        }\n                    });\n                }\n            }\n\n            function $clickThruHook(url, id, playerHandles) {\n                this._subscribers.triggerSync(AD_CLICK, { url: url, id: id, playerHandles: playerHandles });\n            }\n\n            function $trigger(event) {\n                // TODO avoid leaking arguments\n                // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments\n                this._subscribers.trigger(event, Array.prototype.slice.call(arguments, 1));\n            }\n\n            function callOrTriggerEvent(callback, subscribers, error, result) {\n                if (callback) {\n                    callback(error, result);\n                } else if (error) {\n                    subscribers.trigger(ERROR, error);\n                }\n            }\n\n            module.exports = VPAIDAdUnit;\n\n\n        }, { \"./IVPAIDAdUnit\": 1, \"./subscriber\": 4, \"./utils\": 5 }],\n        3: [function(require, module, exports) {\n            'use strict';\n\n\n            var utils = require('./utils');\n            var unique = utils.unique('vpaidIframe');\n            var VPAIDAdUnit = require('./VPAIDAdUnit');\n            //var defaultTemplate = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n</head>\\n<body>\\n    <script type=\\\"text/javascript\\\" src=\\\"{{iframeURL_JS}}\\\"><\/script>\\n    <script>\\n        parent.postMessage('{\\\"event\\\": \\\"ready\\\", \\\"id\\\": \\\"{{iframeID}}\\\"}', window.location.origin);\\n    <\/script>\\n    <div class=\\\"ad-element\\\">\\n    </div>\\n</body>\\n</html>\\n\";\n            var defaultTemplate = \"<!DOCTYPE html>\\n<html>\\n <head>\\n </head>\\n <body style=\\\"margin:0px;overflow:hidden;\\\">\\n    <script type=\\\"text/javascript\\\" src=\\\"{{iframeURL_JS}}\\\"><\/script>\\n    <script>\\n        //parent.postMessage('{\\\"event\\\": \\\"ready\\\", \\\"id\\\": \\\"{{iframeID}}\\\"}', window.location.origin);\\n        //minthe : this should have proper logic for dynamic iframe generates on runtime.\\n        console.log(\\\"send postmessage\\\");\\n        parent.postMessage('{\\\"event\\\": \\\"ready\\\", \\\"id\\\": \\\"{{iframeID}}\\\"}', \\\"*\\\");\\n    <\/script>\\n    <div class=\\\"ad-element\\\">\\n    </div>\\n</body>\\n</html>\\n\";\n\n            var AD_STOPPED = 'AdStopped';\n\n            /**\n             * This callback is displayed as global member. The callback use nodejs error-first callback style\n             * @callback NodeStyleCallback\n             * @param {string|null}\n             * @param {undefined|object}\n             */\n\n            /**\n             * VPAIDHTML5Client\n             * @class\n             *\n             * @param {HTMLElement} el that will contain the iframe to load adUnit and a el to add to adUnit slot\n             * @param {HTMLVideoElement} video default video element to be used by adUnit\n             * @param {object} [templateConfig] template: html template to be used instead of the default, extraOptions: to be used when rendering the template\n             * @param {object} [vpaidOptions] timeout: when loading adUnit\n             */\n            function VPAIDHTML5Client(el, video, templateConfig, vpaidOptions) {\n                templateConfig = templateConfig || {};\n\n                this._id = unique();\n                this._destroyed = false;\n\n                this._frameContainer = utils.createElementInEl(el, 'div');\n                this._videoEl = video;\n                this._vpaidOptions = vpaidOptions || { timeout: 10000 };\n\n                this._templateConfig = {\n                    template: templateConfig.template || defaultTemplate,\n                    extraOptions: templateConfig.extraOptions || {}\n                };\n\n            }\n\n            /**\n             * destroy\n             *\n             */\n            VPAIDHTML5Client.prototype.destroy = function destroy() {\n                if (this._destroyed) {\n                    return;\n                }\n                this._destroyed = true;\n                $unloadPreviousAdUnit.call(this);\n            };\n\n            /**\n             * isDestroyed\n             *\n             * @return {boolean}\n             */\n            VPAIDHTML5Client.prototype.isDestroyed = function isDestroyed() {\n                return this._destroyed;\n            };\n\n            /**\n             * loadAdUnit\n             *\n             * @param {string} adURL url of the js of the adUnit\n             * @param {nodeStyleCallback} callback\n             */\n            VPAIDHTML5Client.prototype.loadAdUnit = function loadAdUnit(adURL, callback) {\n                $throwIfDestroyed.call(this);\n                $unloadPreviousAdUnit.call(this);\n\n                var frame = utils.createIframeWithContent(\n                    this._frameContainer,\n                    this._templateConfig.template,\n                    utils.extend({\n                        iframeURL_JS: adURL,\n                        iframeID: this.getID()\n                    }, this._templateConfig.extraOptions)\n                );\n                this._frame = frame;\n\n                this._onLoad = utils.callbackTimeout(\n                    this._vpaidOptions.timeout,\n                    onLoad.bind(this),\n                    onTimeout.bind(this)\n                );\n\n                // Set up user activity detection Hook for the iframe;\n                handleUserActivityIframeEvents(this._frame);\n\n                window.addEventListener('message', this._onLoad);\n\n                function onLoad(e) {\n\n                    console.log(\"got postMessage from container\");\n\n                    //minthe : this should have proper logic for dynamic iframe generates on runtime.\n                    //don't clear timeout\n                    //if (e.origin !== window.location.origin) return;\n                    var result = JSON.parse(e.data);\n\n                    //don't clear timeout\n                    if (result.id !== this.getID()) return;\n\n                    var adUnit, error, createAd;\n                    if (!this._frame.contentWindow) {\n\n                        error = 'the iframe is not anymore in the DOM tree';\n\n                    } else {\n                        createAd = this._frame.contentWindow.getVPAIDAd;\n                        error = utils.validate(typeof createAd === 'function', 'the ad didn\\'t return a function to create an ad');\n                    }\n\n                    if (!error) {\n                        var adEl = this._frame.contentWindow.document.querySelector('.ad-element');\n                        adUnit = new VPAIDAdUnit(createAd(), adEl, this._videoEl, this._frame);\n                        adUnit.subscribe(AD_STOPPED, $adDestroyed.bind(this));\n                        error = utils.validate(adUnit.isValidVPAIDAd(), 'the add is not fully complaint with VPAID specification');\n                    }\n\n                    this._adUnit = adUnit;\n                    $destroyLoadListener.call(this);\n                    callback(error, error ? null : adUnit);\n\n                    //clear timeout\n                    return true;\n                }\n\n                function onTimeout() {\n                    callback('timeout', null);\n                }\n\n                // VIDLA 1106 + VIDLA 601:\n                // Root cause for video JS not detecting UserActivity.\n                // if mousemove and touch events happens inside an iframe,\n                // then it is not automatically propogated to the player element.\n                // This code is forcing the mouse and touch event up to video js\n                // so that useractivity logic works just as for Vast mp4s\n                function handleUserActivityIframeEvents(iframe){\n                    // Save any previous handler\n                    var existingOnMouseMove = iframe.contentWindow.onmousemove;\n                    var existingOnMouseOver = iframe.contentWindow.onmouseover;\n\n                    var existingOnTouchStart = iframe.contentWindow.ontouchstart;\n                    var existingOnTouchEnd = iframe.contentWindow.ontouchend;\n\n                    iframe.contentWindow.onmousemove = function(e) {\n                        if (existingOnMouseMove) existingOnMouseMove(e);\n                        forwardMouseEvent(e, \"mousemove\");\n                    };\n\n                    iframe.contentWindow.onmouseover = function(e) {\n                        if (existingOnMouseOver) existingOnMouseOver(e);\n                        forwardMouseEvent(e, \"mouseover\");\n                    };\n\n                    function forwardMouseEvent(e, nameOfEvent){\n                        var evt = document.createEvent(\"MouseEvents\");\n                        // We'll need this to offset the mouse move appropriately\n                        var boundingClientRect = iframe.getBoundingClientRect();\n                        // Initialize the event, copying exiting event values\n                        // for the most part\n                        evt.initMouseEvent(\n                            nameOfEvent,\n                            true, // bubbles\n                            false, // not cancelable\n                            window,\n                            e.detail,\n                            e.screenX,\n                            e.screenY,\n                            e.clientX + boundingClientRect.left,\n                            e.clientY + boundingClientRect.top,\n                            e.ctrlKey,\n                            e.altKey,\n                            e.shiftKey,\n                            e.metaKey,\n                            e.button,\n                            null // no related element\n                        );\n                        iframe.dispatchEvent(evt);\n                    };\n\n                    iframe.contentWindow.ontouchstart = function(e) {\n                        if (existingOnTouchStart) existingOnTouchStart(e);\n                        forwardTouch(e);\n                    };\n\n                    iframe.contentWindow.ontouchend = function(e) {\n                        if (existingOnTouchEnd) existingOnTouchEnd(e);\n                        forwardTouch(e);\n                    };\n\n                    function forwardTouch(e){\n                        var evt = document.createEvent(\"HTMLEvents\");\n                        evt.initEvent(\n                            e.type,\n                            true, // bubbles\n                            false, // not cancelable\n                            window);\n                        iframe.dispatchEvent(evt);\n                    };\n                };\n            };\n\n            /**\n             * unloadAdUnit\n             *\n             */\n            VPAIDHTML5Client.prototype.unloadAdUnit = function unloadAdUnit() {\n                $unloadPreviousAdUnit.call(this);\n            };\n\n            /**\n             * getID will return the unique id\n             *\n             * @return {string}\n             */\n            VPAIDHTML5Client.prototype.getID = function() {\n                return this._id;\n            };\n\n\n            /**\n             * $removeEl\n             *\n             * @param {string} key\n             */\n            function $removeEl(key) {\n                var el = this[key];\n                if (el) {\n                    el.remove();\n                    delete this[key];\n                }\n            }\n\n            function $adDestroyed() {\n                $removeAdElements.call(this);\n                delete this._adUnit;\n            }\n\n            function $unloadPreviousAdUnit() {\n                $removeAdElements.call(this);\n                $destroyAdUnit.call(this);\n            }\n\n            function $removeAdElements() {\n                $removeEl.call(this, '_frame');\n                $destroyLoadListener.call(this);\n            }\n\n            /**\n             * $destroyLoadListener\n             *\n             */\n            function $destroyLoadListener() {\n                if (this._onLoad) {\n                    window.removeEventListener('message', this._onLoad);\n                    utils.clearCallbackTimeout(this._onLoad);\n                    delete this._onLoad;\n                }\n            }\n\n\n            function $destroyAdUnit() {\n                if (this._adUnit) {\n                    this._adUnit.stopAd();\n                    delete this._adUnit;\n                }\n            }\n\n            /**\n             * $throwIfDestroyed\n             *\n             */\n            function $throwIfDestroyed() {\n                if (this._destroyed) {\n                    throw new Error('VPAIDHTML5Client already destroyed!');\n                }\n            }\n\n            module.exports = VPAIDHTML5Client;\n            window.VPAIDHTML5Client = VPAIDHTML5Client;\n\n\n        }, { \"./VPAIDAdUnit\": 2, \"./utils\": 5 }],\n        4: [function(require, module, exports) {\n            'use strict';\n\n            function Subscriber() {\n                this._subscribers = {};\n            }\n\n            Subscriber.prototype.subscribe = function subscribe(handler, eventName, context) {\n                this.get(eventName).push({ handler: handler, context: context });\n            };\n\n            Subscriber.prototype.unsubscribe = function unsubscribe(handler, eventName) {\n                this._subscribers[eventName] = this.get(eventName).filter(function(subscriber) {\n                    return handler === subscriber.handler;\n                });\n            };\n\n            Subscriber.prototype.unsubscribeAll = function unsubscribeAll() {\n                this._subscribers = {};\n            };\n\n            Subscriber.prototype.trigger = function(eventName, data) {\n                var that = this;\n                that.get(eventName).forEach(function(subscriber) {\n                    setTimeout(function() {\n                        if (that.get(eventName)) {\n                            subscriber.handler.call(subscriber.context, data);\n                        }\n                    }, 0);\n                });\n            };\n\n            Subscriber.prototype.triggerSync = function(eventName, data) {\n                this.get(eventName).forEach(function(subscriber) {\n                    subscriber.handler.call(subscriber.context, data);\n                });\n            };\n\n            Subscriber.prototype.get = function get(eventName) {\n                if (!this._subscribers[eventName]) {\n                    this._subscribers[eventName] = [];\n                }\n                return this._subscribers[eventName];\n            };\n\n            module.exports = Subscriber;\n\n\n        }, {}],\n        5: [function(require, module, exports) {\n            'use strict';\n\n            /**\n             * noop a empty function\n             */\n            function noop() {}\n\n            /**\n             * validate if is not validate will return an Error with the message\n             *\n             * @param {boolean} isValid\n             * @param {string} message\n             */\n            function validate(isValid, message) {\n                return isValid ? null : new Error(message);\n            }\n\n            var timeouts = {};\n            /**\n             * clearCallbackTimeout\n             *\n             * @param {function} func handler to remove\n             */\n            function clearCallbackTimeout(func) {\n                var timeout = timeouts[func];\n                if (timeout) {\n                    clearTimeout(timeout);\n                    delete timeouts[func];\n                }\n            }\n\n            /**\n             * callbackTimeout if the onSuccess is not called and returns true in the timelimit then onTimeout will be called\n             *\n             * @param {number} timer\n             * @param {function} onSuccess\n             * @param {function} onTimeout\n             */\n            function callbackTimeout(timer, onSuccess, onTimeout) {\n                var callback, timeout;\n\n                timeout = setTimeout(function() {\n                    onSuccess = noop;\n                    if (!timeouts[callback]) {\n                        // Timeout has already been resolved.\n                        return;\n                    }\n                    delete timeout[callback];\n                    onTimeout();\n                }, timer);\n\n                callback = function() {\n                    // TODO avoid leaking arguments\n                    // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments\n                    if (onSuccess.apply(this, arguments)) {\n                        clearCallbackTimeout(callback);\n                    }\n                };\n\n                timeouts[callback] = timeout;\n\n                return callback;\n            }\n\n\n            /**\n             * createElementInEl\n             *\n             * @param {HTMLElement} parent\n             * @param {string} tagName\n             * @param {string} id\n             */\n            function createElementInEl(parent, tagName, id) {\n                var nEl = document.createElement(tagName);\n                if (id) nEl.id = id;\n                parent.appendChild(nEl);\n                return nEl;\n            }\n\n            /**\n             * createIframeWithContent\n             *\n             * @param {HTMLElement} parent\n             * @param {string} template simple template using {{var}}\n             * @param {object} data\n             */\n            function createIframeWithContent(parent, template, data) {\n                var iframe = createIframe(parent);\n                if (!setIframeContent(iframe, simpleTemplate(template, data))) return;\n                return iframe;\n            }\n\n            /**\n             * createIframe\n             *\n             * @param {HTMLElement} parent\n             * @param {string} url\n             */\n            function createIframe(parent, url) {\n                var nEl = document.createElement('iframe');\n                nEl.src = url || 'about:blank';\n                nEl.width = '100%';\n                nEl.height = '100%';\n                nEl.style.position = 'absolute';\n                nEl.style.left = '0';\n                nEl.style.top = '0';\n                nEl.style.border = '0';\n                parent.innerHTML = '';\n                parent.appendChild(nEl);\n                return nEl;\n            }\n\n            /**\n             * simpleTemplate\n             *\n             * @param {string} template\n             * @param {object} data\n             */\n            function simpleTemplate(template, data) {\n                Object.keys(data).forEach(function(key) {\n                    var value = (typeof value === 'object') ? JSON.stringify(data[key]) : data[key];\n                    template = template.replace(new RegExp('{{' + key + '}}', 'g'), value);\n                });\n                return template;\n            }\n\n            /**\n             * setIframeContent\n             *\n             * @param {HTMLIframeElement} iframeEl\n             * @param content\n             */\n            function setIframeContent(iframeEl, content) {\n                var iframeDoc = iframeEl.contentWindow && iframeEl.contentWindow.document;\n                if (!iframeDoc) return false;\n\n                iframeDoc.write(content);\n\n                return true;\n            }\n\n\n            /**\n             * extend object with keys from another object\n             *\n             * @param {object} toExtend\n             * @param {object} fromSource\n             */\n            function extend(toExtend, fromSource) {\n                Object.keys(fromSource).forEach(function(key) {\n                    toExtend[key] = fromSource[key];\n                });\n                return toExtend;\n            }\n\n\n            /**\n             * unique will create a unique string everytime is called, sequentially and prefixed\n             *\n             * @param {string} prefix\n             */\n            function unique(prefix) {\n                var count = -1;\n                return function() {\n                    return prefix + '_' + (++count);\n                };\n            }\n\n            module.exports = {\n                noop: noop,\n                validate: validate,\n                clearCallbackTimeout: clearCallbackTimeout,\n                callbackTimeout: callbackTimeout,\n                createElementInEl: createElementInEl,\n                createIframeWithContent: createIframeWithContent,\n                createIframe: createIframe,\n                simpleTemplate: simpleTemplate,\n                setIframeContent: setIframeContent,\n                extend: extend,\n                unique: unique\n            };\n\n\n        }, {}]\n    }, {}, [3])\n\n\n    ;\n    //Small subset of async\n    var async = {};\n\n    async.setImmediate = function(fn) {\n        setTimeout(fn, 0);\n    };\n\n    async.iterator = function(tasks) {\n        var makeCallback = function(index) {\n            var fn = function() {\n                if (tasks.length) {\n                    tasks[index].apply(null, arguments);\n                }\n                return fn.next();\n            };\n            fn.next = function() {\n                return (index < tasks.length - 1) ? makeCallback(index + 1) : null;\n            };\n            return fn;\n        };\n        return makeCallback(0);\n    };\n\n\n    async.waterfall = function(tasks, callback) {\n        callback = callback || function() {};\n        if (!isArray(tasks)) {\n            var err = new Error('First argument to waterfall must be an array of functions');\n            return callback(err);\n        }\n        if (!tasks.length) {\n            return callback();\n        }\n        var wrapIterator = function(iterator) {\n            return function(err) {\n                if (err) {\n                    callback.apply(null, arguments);\n                    callback = function() {};\n                } else {\n                    var args = Array.prototype.slice.call(arguments, 1);\n                    var next = iterator.next();\n                    if (next) {\n                        args.push(wrapIterator(next));\n                    } else {\n                        args.push(callback);\n                    }\n                    async.setImmediate(function() {\n                        iterator.apply(null, args);\n                    });\n                }\n            };\n        };\n        wrapIterator(async.iterator(tasks))();\n    };\n\n    async.when = function(condition, callback) {\n        if (!isFunction(callback)) {\n            throw new Error(\"async.when error: missing callback argument\");\n        }\n\n        var isAllowed = isFunction(condition) ? condition : function() {\n            return !!condition;\n        };\n\n        return function() {\n            var args = arrayLikeObjToArray(arguments);\n            var next = args.pop();\n\n            if (isAllowed.apply(null, args)) {\n                return callback.apply(this, arguments);\n            }\n\n            args.unshift(null);\n            return next.apply(null, args);\n        };\n    };\n\n\n\n    ;\n    \"use strict\";\n\n    var dom = {};\n\n    dom.isVisible = function isVisible(el) {\n        var style = window.getComputedStyle(el);\n        return style.visibility !== 'hidden';\n    };\n\n    dom.isHidden = function isHidden(el) {\n        var style = window.getComputedStyle(el);\n        return style.display === 'none';\n    };\n\n    dom.isShown = function isShown(el) {\n        return !dom.isHidden(el);\n    };\n\n    dom.hide = function hide(el) {\n        el.__prev_style_display_ = el.style.display;\n        el.style.display = 'none';\n    };\n\n    dom.show = function show(el) {\n        if (dom.isHidden(el)) {\n            el.style.display = el.__prev_style_display_;\n        }\n        el.__prev_style_display_ = undefined;\n    };\n\n    dom.hasClass = function hasClass(el, cssClass) {\n        var classes, i, len;\n\n        if (isNotEmptyString(cssClass)) {\n            if (el.classList) {\n                return el.classList.contains(cssClass);\n            }\n\n            classes = isString(el.getAttribute('class')) ? el.getAttribute('class').split(/\\s+/) : [];\n            cssClass = (cssClass || '');\n\n            for (i = 0, len = classes.length; i < len; i += 1) {\n                if (classes[i] === cssClass) {\n                    return true;\n                }\n            }\n        }\n        return false;\n    };\n\n    dom.addClass = function(el, cssClass) {\n        var classes;\n\n        if (isNotEmptyString(cssClass)) {\n            if (el.classList) {\n                return el.classList.add(cssClass);\n            }\n\n            classes = isString(el.getAttribute('class')) ? el.getAttribute('class').split(/\\s+/) : [];\n            if (isString(cssClass) && isNotEmptyString(cssClass.replace(/\\s+/, ''))) {\n                classes.push(cssClass);\n                el.setAttribute('class', classes.join(' '));\n            }\n        }\n    };\n\n    dom.removeClass = function(el, cssClass) {\n        var classes;\n\n        if (isNotEmptyString(cssClass)) {\n            if (el.classList) {\n                return el.classList.remove(cssClass);\n            }\n\n            classes = isString(el.getAttribute('class')) ? el.getAttribute('class').split(/\\s+/) : [];\n            var newClasses = [];\n            var i, len;\n            if (isString(cssClass) && isNotEmptyString(cssClass.replace(/\\s+/, ''))) {\n\n                for (i = 0, len = classes.length; i < len; i += 1) {\n                    if (cssClass !== classes[i]) {\n                        newClasses.push(classes[i]);\n                    }\n                }\n                el.setAttribute('class', newClasses.join(' '));\n            }\n        }\n    };\n\n    dom.addEventListener = function addEventListener(el, type, handler) {\n        if (isArray(el)) {\n            forEach(el, function(e) {\n                dom.addEventListener(e, type, handler);\n            });\n            return;\n        }\n\n        if (isArray(type)) {\n            forEach(type, function(t) {\n                dom.addEventListener(el, t, handler);\n            });\n            return;\n        }\n\n        if (el.addEventListener) {\n            el.addEventListener(type, handler, false);\n        } else if (el.attachEvent) {\n            // WARNING!!! this is a very naive implementation !\n            // the event object that should be passed to the handler\n            // would not be there for IE8\n            // we should use \"window.event\" and then \"event.srcElement\"\n            // instead of \"event.target\"\n            el.attachEvent(\"on\" + type, handler);\n        }\n    };\n\n    dom.removeEventListener = function removeEventListener(el, type, handler) {\n        if (isArray(el)) {\n            forEach(el, function(e) {\n                dom.removeEventListener(e, type, handler);\n            });\n            return;\n        }\n\n        if (isArray(type)) {\n            forEach(type, function(t) {\n                dom.removeEventListener(el, t, handler);\n            });\n            return;\n        }\n\n        if (el.removeEventListener) {\n            el.removeEventListener(type, handler, false);\n        } else if (el.detachEvent) {\n            el.detachEvent(\"on\" + type, handler);\n        } else {\n            el[\"on\" + type] = null;\n        }\n    };\n\n    dom.dispatchEvent = function dispatchEvent(el, event) {\n        if (el.dispatchEvent) {\n            el.dispatchEvent(event);\n        } else {\n            el.fireEvent(\"on\" + event.eventType, event);\n        }\n    };\n\n    dom.isDescendant = function isDescendant(parent, child) {\n        var node = child.parentNode;\n        while (node !== null) {\n            if (node === parent) {\n                return true;\n            }\n            node = node.parentNode;\n        }\n        return false;\n    };\n\n    dom.getTextContent = function getTextContent(el) {\n        return el.textContent || el.text;\n    };\n\n    dom.prependChild = function prependChild(parent, child) {\n        if (child.parentNode) {\n            child.parentNode.removeChild(child);\n        }\n        return parent.insertBefore(child, parent.firstChild);\n    };\n\n    dom.remove = function removeNode(node) {\n        if (node && node.parentNode) {\n            node.parentNode.removeChild(node);\n        }\n    };\n\n    dom.isDomElement = function isDomElement(o) {\n        return o instanceof Element;\n    };\n\n    dom.click = function(el, handler) {\n        dom.addEventListener(el, 'click', handler);\n    };\n\n    dom.once = function(el, type, handler) {\n        function handlerWrap() {\n            handler.apply(null, arguments);\n            dom.removeEventListener(el, type, handlerWrap);\n        }\n\n        dom.addEventListener(el, type, handlerWrap);\n    };\n\n    //Note: there is no getBoundingClientRect on iPad so we need a fallback\n    dom.getDimension = function getDimension(element) {\n        var rect;\n        var parentNode = element.parentNode;\n        // VIDLA-910 Always initializing with 1x1 for creative to better deal with falsy cases.\n        // some creatives do not like 0x0 initializations specially inside iframe.\n        var width = 1;\n        var height = 1;\n        if (parentNode) {\n            width = parentNode.clientWidth ? parentNode.clientWidth : width;\n            height = parentNode.clientHeight ? parentNode.clientHeight : height;\n        }else {\n            width = element.offsetWidth ? element.offsetWidth : width;\n            height = element.offsetHeight ? element.offsetHeight : height;\n        }\n        return {\n            width: width,\n            height: height\n        };\n    };\n\n    \"use strict\";\n\n    var logger = {};\n\n    ;\n    \"use strict\";\n\n    //minthe2 profile\n    var profile = {};\n\n    profile.timeout = 0;\n    profile.initAdTimestamp = 0;\n    profile.adLoadedTimestamp = 0;\n\n    profile.startAdTimestamp = 0;\n    profile.adStartedTimestamp = 0;\n\n    profile.adImpressionTimestamp = 0;\n\n    profile.getState = function() {\n        if (profile.adImpressionTimestamp) {\n            return 'adImpression';\n        }\n        if (profile.startAdTimestamp) {\n            return 'startAd';\n        }\n        if (profile.initAdTimestamp) {\n            return 'initAd';\n        }\n        return 'pluginInit';\n    };\n\n    profile.getRemainingTime = function(type) {\n        var offset = 0;\n        var currTime = new Date().getTime();\n        switch (type) {\n            case 'initAd':\n                offset = currTime - profile.initAdTimestamp;\n                break;\n            case 'AdLoaded':\n                offset = profile.getInitTime();\n                break;\n            case 'startAd':\n                offset = profile.getInitTime();\n                break;\n            case 'AdStarted':\n                offset = profile.getInitTime() + profile.getStartTime();\n                break;\n            case 'AdImpression':\n                offset = profile.getTotalTime();\n                break;\n            default:\n                break;\n        }\n        var remainingTime = profile.timeout - offset;\n        return remainingTime;\n    };\n\n    profile.getInitTime = function() {\n        var interval = profile.adLoadedTimestamp - profile.initAdTimestamp;\n        return interval;\n    };\n\n    profile.getStartTime = function() {\n        var interval = profile.adStartedTimestamp - profile.startAdTimestamp;\n        return interval;\n    };\n\n    profile.getAdImpressionTime = function() {\n        var interval = profile.adImpressionTimestamp - profile.startAdTimestamp;\n        return interval;\n    };\n\n    profile.getTotalTime = function() {\n\n        var interval = profile.getInitTime();\n\n        if (profile.adStartedTimestamp > profile.adImpressionTimestamp) {\n            interval = interval + profile.getStartTime();\n        } else {\n            interval = interval + profile.getAdImpressionTime();\n        }\n\n        // if (profile.adImpressionTimestamp) {\n        //     interval = interval + profile.getAdImpressionTime();\n        // }\n        return interval;\n    };\n\n    ;\n    \"use strict\";\n\n    //minthe2 timer\n    var timer = {};\n\n    timer.killUnresponsiveCreative = false;\n    timer.responseWaitingTime = 1000;\n    timer.killTimeout = null;\n    timer.adCancelTimeout = 5000;\n    timer.adLoadTimeout = null;\n    timer.adStartTimeout = null;\n    // timer.adImpressionTimeout = null;\n    timer.adStartedResponseTime = 0;\n    timer.adImpressionResponseTime = 0;\n\n\n    timer.startKillTimeout = function(adUnit) {\n        if (timer.killUnresponsiveCreative) {\n            // if already timeout is set . cleanup\n            if (timer.killTimeout) {\n                timer.stopKillTimeout();\n            }\n            timer.killTimeout = setTimeout(function() {\n                if (timer.killTimeout) {\n                    logger.log('killUnresponsiveCreative Timeout reached ');\n                    adUnit.stopAd();\n                }\n            }, timer.responseWaitingTime);\n        }\n    };\n\n    timer.stopKillTimeout = function() {\n        if (!timer.killTimeout) {\n            return;\n        }\n        timer.clearTimeout(timer.killTimeout);\n        timer.killTimeout = null;\n    };\n\n    timer.handleAdTimeout = function(cb, state) {\n        logger.error('VPAID AD TIMED OUT :: AFTER ' + state + ' ,timeout value : ' + timer.adCancelTimeout);\n        if (cb) {\n            cb(new VASTError('timeout while waiting for the video to start playing', 402));\n        }\n    };\n\n    timer.clearTimeout = function(timeout) {\n        if (timeout) {\n            clearTimeout(timeout);\n            timeout = null;\n        }\n    };\n\n    timer.startInitAdTimeout = function(cb) {\n        profile.timeout = timer.adCancelTimeout;\n        profile.initAdTimestamp = new Date().getTime();\n        timer.adLoadTimeout = setTimeout(function() {\n            timer.handleAdTimeout(cb, \"initAd\");\n        }, timer.adCancelTimeout);\n    };\n\n    timer.stopInitAdTimeout = function() {\n        profile.adLoadedTimestamp = new Date().getTime();\n        timer.adStartedResponseTime = timer.adCancelTimeout - profile.getInitTime();\n        timer.clearTimeout(timer.adLoadTimeout);\n\n    };\n\n    timer.startStartAdTimeout = function(cb) {\n        profile.startAdTimestamp = new Date().getTime();\n        var timeoutFunction;\n\n        timeoutFunction = function() {\n            if (profile.adStartedTimestamp > 0) {\n                timer.handleAdTimeout(cb, \"AdStarted\");\n            } else {\n                timer.handleAdTimeout(cb, \"startAd\");\n            }\n        }\n\n        timer.adStartTimeout = setTimeout(timeoutFunction, timer.adStartedResponseTime);\n    };\n\n    timer.stopStartAdTimeout = function() {\n        timer.clearTimeout(timer.adStartTimeout);\n        logger.debug(\"stopStartAdTimeout\");\n    };\n\n    // timer.startAdImpressionTimeout =  function(cb) {\n    //     profile.adImpressionTimestamp = new Date().getTime();\n    //     timer.adImpressionTimeout = setTimeout(function(){\n    //         timer.handleAdTimeout(cb,\"AdStarted\");\n    //     }, timer.adImpressionResponseTime);\n    // };\n\n    // timer.stopAdImpressionTimeout =  function() {\n    //     profile.adImpressionTimestamp = new Date().getTime();\n    //     timer.clearTimeout(timer.adImpressionTimeout);\n    // };\n\n    timer.stopAdTimeouts = function() {\n        logger.debug(\"stopAdTimeouts\");\n        timer.clearTimeout(timer.adLoadTimeout);\n        timer.clearTimeout(timer.adStartTimeout);\n        // timer.clearTimeout(timer.adImpressionTimeout);\n    };\n\n    ;\n    \"use strict\";\n\n    function HttpRequestError(message) {\n        this.message = 'HttpRequest Error: ' + (message || '');\n    }\n    HttpRequestError.prototype = new Error();\n    HttpRequestError.prototype.name = \"HttpRequest Error\";\n\n    function HttpRequest(createXhr) {\n        if (!isFunction(createXhr)) {\n            throw new HttpRequestError('Missing XMLHttpRequest factory method');\n        }\n\n        this.createXhr = createXhr;\n    }\n\n    HttpRequest.prototype.run = function(method, url, callback, options) {\n        sanityCheck(url, callback, options);\n        var timeout, timeoutId;\n        var xhr = this.createXhr();\n        options = options || {};\n        timeout = isNumber(options.timeout) ? options.timeout : 0;\n\n        xhr.open(method, urlParts(url).href, true);\n\n        if (options.headers) {\n            setHeaders(xhr, options.headers);\n        }\n\n        if (options.withCredentials) {\n            xhr.withCredentials = true;\n        }\n\n        xhr.onload = function() {\n            var statusText, response, status;\n\n            /**\n             * The only way to do a secure request on IE8 and IE9 is with the XDomainRequest object. Unfortunately, microsoft is\n             * so nice that decided that the status property and the 'getAllResponseHeaders' method where not needed so we have to\n             * fake them. If the request gets done with an XDomainRequest instance, we will assume that there are no headers and\n             * the status will always be 200. If you don't like it, DO NOT USE ANCIENT BROWSERS!!!\n             *\n             * For mor info go to: https://msdn.microsoft.com/en-us/library/cc288060(v=vs.85).aspx\n             */\n            if (!xhr.getAllResponseHeaders) {\n                xhr.getAllResponseHeaders = function() {\n                    return null;\n                };\n            }\n\n            if (!xhr.status) {\n                xhr.status = 200;\n            }\n\n            if (isDefined(timeoutId)) {\n                clearTimeout(timeoutId);\n                timeoutId = undefined;\n            }\n\n            statusText = xhr.statusText || '';\n\n            // responseText is the old-school way of retrieving response (supported by IE8 & 9)\n            // response/responseType properties were introduced in XHR Level2 spec (supported by IE10)\n            response = ('response' in xhr) ? xhr.response : xhr.responseText;\n\n            // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)\n            status = xhr.status === 1223 ? 204 : xhr.status;\n\n            callback(\n                status,\n                response,\n                xhr.getAllResponseHeaders(),\n                statusText);\n        };\n\n        xhr.onerror = requestError;\n        xhr.onabort = requestError;\n\n        xhr.send();\n\n        if (timeout > 0) {\n            timeoutId = setTimeout(function() {\n                xhr && xhr.abort();\n            }, timeout);\n        }\n\n        function sanityCheck(url, callback, options) {\n            if (!isString(url) || isEmptyString(url)) {\n                throw new HttpRequestError(\"Invalid url '\" + url + \"'\");\n            }\n\n            if (!isFunction(callback)) {\n                throw new HttpRequestError(\"Invalid handler '\" + callback + \"' for the http request\");\n            }\n\n            if (isDefined(options) && !isObject(options)) {\n                throw new HttpRequestError(\"Invalid options map '\" + options + \"'\");\n            }\n        }\n\n        function setHeaders(xhr, headers) {\n            forEach(headers, function(value, key) {\n                if (isDefined(value)) {\n                    xhr.setRequestHeader(key, value);\n                }\n            });\n        }\n\n        function requestError() {\n            callback(-1, null, null, '');\n        }\n    };\n\n    HttpRequest.prototype.get = function(url, callback, options) {\n        this.run('GET', url, processResponse, options);\n\n        function processResponse(status, response, headersString, statusText) {\n            if (isSuccess(status)) {\n                callback(null, response, status, headersString, statusText);\n            } else {\n                callback(new HttpRequestError(statusText), response, status, headersString, statusText);\n            }\n        }\n\n        function isSuccess(status) {\n            return 200 <= status && status < 300;\n        }\n    };\n\n    function createXhr() {\n        var xhr = new XMLHttpRequest();\n        if (!(\"withCredentials\" in xhr)) {\n            // XDomainRequest for IE.\n            xhr = new XDomainRequest();\n        }\n        return xhr;\n    }\n\n    var http = new HttpRequest(createXhr);\n\n    ;\n    var playerUtils = {};\n\n    /**\n     * Returns an object that captures the portions of player state relevant to\n     * video playback. The result of this function can be passed to\n     * restorePlayerSnapshot with a player to return the player to the state it\n     * was in when this function was invoked.\n     * @param {object} player The videojs player object\n     */\n    playerUtils.getPlayerSnapshot = function getPlayerSnapshot(player) {\n        var tech = player.el().querySelector('.vjs-tech');\n        var snapshot = {\n            ended: player.ended(),\n            src: player.currentSrc(),\n            currentTime: player.currentTime(),\n            type: player.currentType(),\n            playing: !player.paused(),\n            suppressedTracks: getSuppressedTracks(player)\n        };\n\n        if (tech) {\n            snapshot.nativePoster = tech.poster;\n            snapshot.style = tech.getAttribute('style');\n        }\n\n        return snapshot;\n\n        /**** Local Functions ****/\n        function getSuppressedTracks(player) {\n            var tracks = player.remoteTextTracks ? player.remoteTextTracks() : [];\n\n            if (tracks && isArray(tracks.tracks_)) {\n                tracks = tracks.tracks_;\n            }\n\n            if (!isArray(tracks)) {\n                tracks = [];\n            }\n\n            var suppressedTracks = [];\n            tracks.forEach(function(track) {\n                suppressedTracks.push({\n                    track: track,\n                    mode: track.mode\n                });\n                track.mode = 'disabled';\n            });\n\n            return suppressedTracks;\n        }\n    };\n\n    /**\n     * Attempts to modify the specified player so that its state is equivalent to\n     * the state of the snapshot.\n     * @param {object} snapshot - the player state to apply\n     */\n    playerUtils.restorePlayerSnapshot = function restorePlayerSnapshot(player, snapshot) {\n        var tech = player.el().querySelector('.vjs-tech');\n        var attempts = 20; // the number of remaining attempts to restore the snapshot\n\n        if (snapshot.nativePoster) {\n            tech.poster = snapshot.nativePoster;\n        }\n\n        if ('style' in snapshot) {\n            // overwrite all css style properties to restore state precisely\n            tech.setAttribute('style', snapshot.style || '');\n        }\n\n        if (hasSrcChanged(player, snapshot)) {\n            // on ios7, fiddling with textTracks too early will cause safari to crash\n            player.one('contentloadedmetadata', restoreTracks);\n\n            player.one('canplay', tryToResume);\n            ensureCanplayEvtGetsFired();\n\n            // if the src changed for ad playback, reset it\n            player.src({ src: snapshot.src, type: snapshot.type });\n\n            // safari requires a call to `load` to pick up a changed source\n            player.load();\n\n        } else {\n            restoreTracks();\n\n            if (snapshot.playing) {\n                player.play();\n            }\n        }\n\n        /*** Local Functions ***/\n\n        /**\n         * Sometimes firefox does not trigger the 'canplay' evt.\n         * This code ensure that it always gets triggered triggered.\n         */\n        function ensureCanplayEvtGetsFired() {\n            var timeoutId = setTimeout(function() {\n                player.trigger('canplay');\n            }, 1000);\n\n            player.one('canplay', function() {\n                clearTimeout(timeoutId);\n            });\n        }\n\n        /**\n         * Determine whether the player needs to be restored to its state\n         * before ad playback began. With a custom ad display or burned-in\n         * ads, the content player state hasn't been modified and so no\n         * restoration is required\n         */\n        function hasSrcChanged(player, snapshot) {\n            if (player.src()) {\n                return player.src() !== snapshot.src;\n            }\n            // the player was configured through source element children\n            return player.currentSrc() !== snapshot.src;\n        }\n\n        function restoreTracks() {\n            var suppressedTracks = snapshot.suppressedTracks;\n            suppressedTracks.forEach(function(trackSnapshot) {\n                trackSnapshot.track.mode = trackSnapshot.mode;\n            });\n        }\n\n        /**\n         * Determine if the video element has loaded enough of the snapshot source\n         * to be ready to apply the rest of the state\n         */\n        function tryToResume() {\n            if (playerUtils.isReadyToResume(tech)) {\n                // if some period of the video is seekable, resume playback\n                return resume();\n            }\n\n            // delay a bit and then check again unless we're out of attempts\n            if (attempts--) {\n                setTimeout(tryToResume, 50);\n            } else {\n                (function() {\n                    try {\n                        resume();\n                    } catch (e) {\n                        videojs.log.warn('Failed to resume the content after an advertisement', e);\n                    }\n                })();\n            }\n\n\n            /*** Local functions ***/\n            function resume() {\n                player.currentTime(snapshot.currentTime);\n\n                if (snapshot.playing) {\n                    player.play();\n                }\n            }\n\n        }\n    };\n\n    playerUtils.isReadyToResume = function(tech) {\n        if (tech.readyState > 1) {\n            // some browsers and media aren't \"seekable\".\n            // readyState greater than 1 allows for seeking without exceptions\n            return true;\n        }\n\n        if (tech.seekable === undefined) {\n            // if the tech doesn't expose the seekable time ranges, try to\n            // resume playback immediately\n            return true;\n        }\n\n        if (tech.seekable.length > 0) {\n            // if some period of the video is seekable, resume playback\n            return true;\n        }\n\n        return false;\n    };\n\n    /**\n     * This function prepares the player to display ads.\n     * Adding convenience events like the 'vast.firsPlay' that gets fired when the video is first played\n     * and ads the blackPoster to the player to prevent content from being displayed before the preroll ad.\n     *\n     * @param player\n     */\n    playerUtils.prepareForAds = function(player, disableMonkeyPatchPlayerApi) {\n\n        var blackPoster = player.addChild('blackPoster');\n        var _firstPlay = true;\n        var volumeSnapshot;\n\n        // VID-1955 Causes Interference with Waterfall playback\n        // VIDLA-853 Causes Interference with Mobile App playback\n        if (!disableMonkeyPatchPlayerApi) {\n            monkeyPatchPlayerApi();\n        }\n\n        player.on('play', tryToTriggerFirstPlay);\n        player.on('vast.reset', resetFirstPlay); //Every time we change the sources we reset the first play.\n        player.on('vast.firstPlay', restoreContentVolume);\n        player.on('error', hideBlackPoster); //If there is an error in the player we remove the blackposter to show the err msg\n        player.on('vast.adStart', hideBlackPoster);\n        player.on('vast.adsCancel', hideBlackPoster);\n        player.on('vast.adError', hideBlackPoster);\n        player.on('vast.adStart', addStyles);\n        player.on('vast.adEnd', removeStyles);\n        player.on('vast.adsCancel', removeStyles);\n\n        /*** Local Functions ***/\n\n        /**\n         What this function does is ugly and horrible and I should think twice before calling myself a good developer. With that said,\n         it is the best solution I could find to mute the video until the 'play' event happens (on mobile devices) and the plugin can decide whether\n         to play the ad or not.\n\n         We also need this monkeypatch to be able to pause and resume an ad using the player's API\n\n         If you have a better solution please do tell me.\n         */\n        function monkeyPatchPlayerApi() {\n\n            /**\n             * Monkey patch needed to handle firstPlay and resume of playing ad.\n             *\n             * @param prepareForAds necessary flag to prevent infinite loop when you are restoring a VAST ad.\n             * @returns {player}\n             */\n            var origPlay = player.play;\n            player.play = function(callOrigPlay) {\n\n\n\n\n                if (isFirstPlay()) {\n                    firstPlay.call(this);\n                } else {\n                    resume.call(this, callOrigPlay);\n                }\n\n                return this;\n\n                /*** local functions ***/\n                function firstPlay() {\n\n\n                    if (!isIPhone()) {\n                        volumeSnapshot = saveVolumeSnapshot();\n                        player.muted(true);\n                    }\n                    // Do not call play on the video element instead just trigger startAd and the creative will call play as it is suppose to.\n                    // VID-2515 Force the enabling of the spinner. As we do not call actual play the wait state to trigger spinner never gets activated until its too late.\n                    player.addClass('vjs-waiting');\n                    player.trigger('firstplay');\n                    player.trigger('play');\n                }\n\n                function resume(callOrigPlay) {\n                    if (isAdPlaying() && !callOrigPlay) {\n                        player.vast.adUnit.resumeAd();\n                    } else {\n                        origPlay.apply(this, arguments);\n                    }\n                }\n            };\n\n\n            /**\n             * Needed monkey patch to handle pause of playing ad.\n             *\n             * @param callOrigPlay necessary flag to prevent infinite loop when you are pausing a VAST ad.\n             * @returns {player}\n             */\n            var origPause = player.pause;\n            player.pause = function(callOrigPause) {\n                if (isAdPlaying() && !callOrigPause) {\n                    player.vast.adUnit.pauseAd();\n                } else {\n                    origPause.apply(this, arguments);\n                }\n                return this;\n            };\n\n\n            /**\n             * Needed monkey patch to handle paused state of the player when ads are playing.\n             *\n             * @param callOrigPlay necessary flag to prevent infinite loop when you are pausing a VAST ad.\n             * @returns {player}\n             */\n            var origPaused = player.paused;\n            player.paused = function(callOrigPaused) {\n                if (isAdPlaying() && !callOrigPaused) {\n                    return player.vast.adUnit.isPaused();\n                }\n                return origPaused.apply(this, arguments);\n            };\n        }\n\n        function isAdPlaying() {\n            return player.vast && player.vast.adUnit;\n        }\n\n        function tryToTriggerFirstPlay() {\n\n            if (isFirstPlay()) {\n                _firstPlay = false;\n                player.trigger('vast.firstPlay');\n            }\n        }\n\n        function resetFirstPlay() {\n            _firstPlay = true;\n            blackPoster.show();\n            restoreContentVolume();\n        }\n\n        function isFirstPlay() {\n            return _firstPlay;\n        }\n\n        function saveVolumeSnapshot() {\n            return {\n                muted: player.muted(),\n                volume: player.volume()\n            };\n        }\n\n        function restoreContentVolume() {\n            if (volumeSnapshot) {\n                player.currentTime(0);\n                restoreVolumeSnapshot(volumeSnapshot);\n                volumeSnapshot = null;\n            }\n        }\n\n        function restoreVolumeSnapshot(snapshot) {\n            if (isObject(snapshot)) {\n                player.volume(snapshot.volume);\n                player.muted(snapshot.muted);\n            }\n        }\n\n        function hideBlackPoster() {\n            if (!dom.hasClass(blackPoster.el(), 'vjs-hidden')) {\n                blackPoster.hide();\n            }\n        }\n\n        function addStyles() {\n            dom.addClass(player.el(), 'vjs-ad-playing');\n        }\n\n        function removeStyles() {\n            dom.removeClass(player.el(), 'vjs-ad-playing');\n        }\n    };\n\n    /**\n     * Remove the poster attribute from the video element tech, if present. When\n     * reusing a video element for multiple videos, the poster image will briefly\n     * reappear while the new source loads. Removing the attribute ahead of time\n     * prevents the poster from showing up between videos.\n     * @param {object} player The videojs player object\n     */\n    playerUtils.removeNativePoster = function(player) {\n        var tech = player.el().querySelector('.vjs-tech');\n        if (tech) {\n            tech.removeAttribute('poster');\n        }\n    };\n\n    /**\n     * Helper function to listen to many events until one of them gets fired, then we\n     * execute the handler and unsubscribe all the event listeners;\n     *\n     * @param player specific player from where to listen for the events\n     * @param events array of events\n     * @param handler function to execute once one of the events fires\n     */\n    playerUtils.once = function once(player, events, handler) {\n        function listener() {\n            handler.apply(null, arguments);\n\n            events.forEach(function(event) {\n                player.off(event, listener);\n            });\n        }\n\n        events.forEach(function(event) {\n            player.on(event, listener);\n        });\n    };\n\n    ;\n    'use strict';\n\n    /**\n     * documentMode is an IE-only property\n     * http://msdn.microsoft.com/en-us/library/ie/cc196988(v=vs.85).aspx\n     */\n    var msie = document.documentMode;\n\n    /**\n     *\n     * IMPORTANT NOTE: This function comes from angularJs and was originally called urlResolve\n     *                 you can take a look at the original code here https://github.com/angular/angular.js/blob/master/src/ng/urlUtils.js\n     *\n     * Implementation Notes for non-IE browsers\n     * ----------------------------------------\n     * Assigning a URL to the href property of an anchor DOM node, even one attached to the DOM,\n     * results both in the normalizing and parsing of the URL.  Normalizing means that a relative\n     * URL will be resolved into an absolute URL in the context of the application document.\n     * Parsing means that the anchor node's host, hostname, protocol, port, pathname and related\n     * properties are all populated to reflect the normalized URL.  This approach has wide\n     * compatibility - Safari 1+, Mozilla 1+, Opera 7+,e etc.  See\n     * http://www.aptana.com/reference/html/api/HTMLAnchorElement.html\n     *\n     * Implementation Notes for IE\n     * ---------------------------\n     * IE >= 8 and <= 10 normalizes the URL when assigned to the anchor node similar to the other\n     * browsers.  However, the parsed components will not be set if the URL assigned did not specify\n     * them.  (e.g. if you assign a.href = \"foo\", then a.protocol, a.host, etc. will be empty.)  We\n     * work around that by performing the parsing in a 2nd step by taking a previously normalized\n     * URL (e.g. by assigning to a.href) and assigning it a.href again.  This correctly populates the\n     * properties such as protocol, hostname, port, etc.\n     *\n     * IE7 does not normalize the URL when assigned to an anchor node.  (Apparently, it does, if one\n     * uses the inner HTML approach to assign the URL as part of an HTML snippet -\n     * http://stackoverflow.com/a/472729)  However, setting img[src] does normalize the URL.\n     * Unfortunately, setting img[src] to something like \"javascript:foo\" on IE throws an exception.\n     * Since the primary usage for normalizing URLs is to sanitize such URLs, we can't use that\n     * method and IE < 8 is unsupported.\n     *\n     * References:\n     *   http://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement\n     *   http://www.aptana.com/reference/html/api/HTMLAnchorElement.html\n     *   http://url.spec.whatwg.org/#urlutils\n     *   https://github.com/angular/angular.js/pull/2902\n     *   http://james.padolsey.com/javascript/parsing-urls-with-the-dom/\n     *\n     * @kind function\n     * @param {string} url The URL to be parsed.\n     * @description Normalizes and parses a URL.\n     * @returns {object} Returns the normalized URL as a dictionary.\n     *\n     *   | member name   | Description    |\n     *   |---------------|----------------|\n     *   | href          | A normalized version of the provided URL if it was not an absolute URL |\n     *   | protocol      | The protocol including the trailing colon                              |\n     *   | host          | The host and port (if the port is non-default) of the normalizedUrl    |\n     *   | search        | The search params, minus the question mark                             |\n     *   | hash          | The hash string, minus the hash symbol\n     *   | hostname      | The hostname\n     *   | port          | The port, without \":\"\n     *   | pathname      | The pathname, beginning with \"/\"\n     *\n     */\n\n    var urlParsingNode = document.createElement(\"a\");\n\n    function urlParts(url) {\n        var href = url;\n\n        if (msie) {\n            // Normalize before parse.  Refer Implementation Notes on why this is\n            // done in two steps on IE.\n            urlParsingNode.setAttribute(\"href\", href);\n            href = urlParsingNode.href;\n        }\n\n        urlParsingNode.setAttribute('href', href);\n\n        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils\n        return {\n            href: urlParsingNode.href,\n            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',\n            host: urlParsingNode.host,\n            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\\?/, '') : '',\n            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',\n            hostname: urlParsingNode.hostname,\n            port: isNotEmptyString(urlParsingNode.port) ? urlParsingNode.port : 80,\n            pathname: (urlParsingNode.pathname.charAt(0) === '/') ? urlParsingNode.pathname : '/' + urlParsingNode.pathname\n        };\n    }\n\n\n    /**\n     * This function accepts a query string (search part of a url) and returns a dictionary with\n     * the different key value pairs\n     * @param {string} qs queryString\n     */\n    function queryStringToObj(qs, cond) {\n        var pairs, qsObj;\n\n        cond = isFunction(cond) ? cond : function() {\n            return true;\n        };\n\n        qs = qs.trim().replace(/^\\?/, '');\n        pairs = qs.split('&');\n        qsObj = {};\n\n        forEach(pairs, function(pair) {\n            var keyValue, key, value;\n            if (pair !== '') {\n                keyValue = pair.split('=');\n                key = keyValue[0];\n                value = keyValue[1];\n                if (cond(key, value)) {\n                    qsObj[key] = value;\n                }\n            }\n        });\n\n        return qsObj;\n    }\n\n    /**\n     * This function accepts an object and serializes it into a query string without the leading '?'\n     * @param obj\n     * @returns {string}\n     */\n    function objToQueryString(obj) {\n        var pairs = [];\n        forEach(obj, function(value, key) {\n            pairs.push(key + '=' + value);\n        });\n        return pairs.join('&');\n    }\n\n\n    ;\n    var xml = {};\n\n    xml.strToXMLDoc = function strToXMLDoc(stringContainingXMLSource) {\n        //IE 8\n        if (typeof window.DOMParser === 'undefined') {\n            var xmlDocument = new ActiveXObject('Microsoft.XMLDOM');\n            xmlDocument.async = false;\n            xmlDocument.loadXML(stringContainingXMLSource);\n            return xmlDocument;\n        }\n\n        return parseString(stringContainingXMLSource);\n\n        function parseString(stringContainingXMLSource) {\n            var parser = new DOMParser();\n            var parsedDocument;\n\n            //Note: This try catch is to deal with the fact that on IE parser.parseFromString does throw an error but the rest of the browsers don't.\n            try {\n                parsedDocument = parser.parseFromString(stringContainingXMLSource, \"application/xml\");\n\n                if (isParseError(parsedDocument) || isEmptyString(stringContainingXMLSource)) {\n                    throw new Error();\n                }\n            } catch (e) {\n                throw new Error(\"xml.strToXMLDOC: Error parsing the string: '\" + stringContainingXMLSource + \"'\");\n            }\n\n            return parsedDocument;\n        }\n\n        function isParseError(parsedDocument) {\n            try { // parser and parsererrorNS could be cached on startup for efficiency\n                var parser = new DOMParser(),\n                    errorneousParse = parser.parseFromString('INVALID', 'text/xml'),\n                    parsererrorNS = errorneousParse.getElementsByTagName(\"parsererror\")[0].namespaceURI;\n\n                if (parsererrorNS === 'http://www.w3.org/1999/xhtml') {\n                    // In PhantomJS the parseerror element doesn't seem to have a special namespace, so we are just guessing here :(\n                    return parsedDocument.getElementsByTagName(\"parsererror\").length > 0;\n                }\n\n                return parsedDocument.getElementsByTagNameNS(parsererrorNS, 'parsererror').length > 0;\n            } catch (e) {\n                //Note on IE parseString throws an error by itself and it will never reach this code. Because it will have failed before\n            }\n        }\n    };\n\n    xml.parseText = function parseText(sValue) {\n        if (/^\\s*$/.test(sValue)) {\n            return null; }\n        if (/^(?:true|false)$/i.test(sValue)) {\n            return sValue.toLowerCase() === \"true\"; }\n        if (isFinite(sValue)) {\n            return parseFloat(sValue); }\n        if (isISO8601(sValue)) {\n            return new Date(sValue); }\n        return sValue.trim();\n    };\n\n    xml.JXONTree = function JXONTree(oXMLParent) {\n        var parseText = xml.parseText;\n\n        //The document object is an especial object that it may miss some functions or attrs depending on the browser.\n        //To prevent this problem with create the JXONTree using the root childNode which is a fully fleshed node on all supported\n        //browsers.\n        if (oXMLParent.documentElement) {\n            return new xml.JXONTree(oXMLParent.documentElement);\n        }\n\n        if (oXMLParent.hasChildNodes()) {\n            var sCollectedTxt = \"\";\n            for (var oNode, sProp, vContent, nItem = 0; nItem < oXMLParent.childNodes.length; nItem++) {\n                oNode = oXMLParent.childNodes.item(nItem);\n                /*jshint bitwise: false*/\n                if ((oNode.nodeType - 1 | 1) === 3) { sCollectedTxt += oNode.nodeType === 3 ? oNode.nodeValue.trim() : oNode.nodeValue; } else if (oNode.nodeType === 1 && !oNode.prefix) {\n                    sProp = decapitalize(oNode.nodeName);\n                    vContent = new xml.JXONTree(oNode);\n                    if (this.hasOwnProperty(sProp)) {\n                        if (this[sProp].constructor !== Array) { this[sProp] = [this[sProp]]; }\n                        this[sProp].push(vContent);\n                    } else { this[sProp] = vContent; }\n                }\n            }\n            if (sCollectedTxt) { this.keyValue = parseText(sCollectedTxt); }\n        }\n\n        //IE8 Stupid fix\n        var hasAttr = typeof oXMLParent.hasAttributes === 'undefined' ? oXMLParent.attributes.length > 0 : oXMLParent.hasAttributes();\n        if (hasAttr) {\n            var oAttrib;\n            for (var nAttrib = 0; nAttrib < oXMLParent.attributes.length; nAttrib++) {\n                oAttrib = oXMLParent.attributes.item(nAttrib);\n                this[\"@\" + decapitalize(oAttrib.name)] = parseText(oAttrib.value.trim());\n            }\n        }\n    };\n\n    xml.JXONTree.prototype.attr = function(attr) {\n        return this['@' + decapitalize(attr)];\n    };\n\n    xml.toJXONTree = function toJXONTree(xmlString) {\n        var xmlDoc = xml.strToXMLDoc(xmlString);\n        return new xml.JXONTree(xmlDoc);\n    };\n\n    /**\n     * Helper function to extract the keyvalue of a JXONTree obj\n     *\n     * @param xmlObj {JXONTree}\n     * return the key value or undefined;\n     */\n    xml.keyValue = function getKeyValue(xmlObj) {\n        if (xmlObj) {\n            return xmlObj.keyValue;\n        }\n        return undefined;\n    };\n\n    xml.attr = function getAttrValue(xmlObj, attr) {\n        if (xmlObj) {\n            return xmlObj['@' + decapitalize(attr)];\n        }\n        return undefined;\n    };\n\n    xml.encode = function encodeXML(str) {\n        return str.replace(/&/g, '&amp;')\n            .replace(/</g, '&lt;')\n            .replace(/>/g, '&gt;')\n            .replace(/\"/g, '&quot;')\n            .replace(/'/g, '&apos;');\n    };\n\n    xml.decode = function decodeXML(str) {\n        return str.replace(/&apos;/g, \"'\")\n            .replace(/&quot;/g, '\"')\n            .replace(/&gt;/g, '>')\n            .replace(/&lt;/g, '<')\n            .replace(/&amp;/g, '&');\n    };;\n\n    //minthe : initalize vastClient\n    vjs.plugin('vastClient', function VASTPlugin(options) {\n\n        var snapshot;\n        var player = this;\n        var vast = new VASTClient();\n        var adsCanceled = false;\n        var defaultOpts = {\n            // maximum amount of time in ms to wait to receive `adsready` from the ad\n            // implementation after play has been requested. Ad implementations are\n            // expected to load any dynamic libraries and make any requests to determine\n            // ad policies for a video during this time.\n            timeout: 500,\n\n            //TODO:finish this IOS FIX\n            //Whenever you play an add on IOS, the native player kicks in and we loose control of it. On very heavy pages the 'play' event\n            // May occur after the video content has already started. This is wrong if you want to play a preroll ad that needs to happen before the user\n            // starts watching the content. To prevent this usec\n            iosPrerollCancelTimeout: 2000,\n\n            // maximun amount of time for the ad to actually start playing. If this timeout gets\n            // triggered the ads will be cancelled\n            adCancelTimeout: 5000,\n\n            // Boolean flag that configures the player to play a new ad before the user sees the video again\n            // the current video\n            playAdAlways: false,\n\n            // Flag to enable or disable the ads by default.\n            adsEnabled: true,\n\n            // Boolean flag to enable or disable the resize with window.resize or orientationchange\n            autoResize: true,\n\n            //Boolean flag to enable/disable Controls on mouse over/out.\n            disableControlsOnMouseover: false,\n\n            initialAudio: 'off',\n\n            overlayPlayer: false,\n\n            mobileSDK: false,\n\n            controlBarPosition: \"below\"\n        };\n\n        var settings = extend({}, defaultOpts, options || {});\n\n        if (isUndefined(settings.adTagUrl) && isDefined(settings.url)) {\n            settings.adTagUrl = settings.url;\n        }\n\n        if (isString(settings.adTagUrl)) {\n            settings.adTagUrl = echoFn(settings.adTagUrl);\n        }\n\n        if (isDefined(settings.adTagXML) && !isFunction(settings.adTagXML)) {\n            return trackAdError(new VASTError('on VideoJS VAST plugin, the passed adTagXML option does not contain a function'));\n        }\n\n        if (!isDefined(settings.adTagUrl) && !isFunction(settings.adTagXML)) {\n            return trackAdError(new VASTError('on VideoJS VAST plugin, missing adTagUrl on options object'));\n        }\n        //VIDLA-1491 Disabling for iOS. Few creatives such as Mediamind(Bemruda) and Moat create playback problems\n        var disableForOverlay = settings.overlayPlayer && isIDevice();\n        var disableMonkeyPatchPlayerApi =  disableForOverlay || settings.mobileSDK ;\n        playerUtils.prepareForAds(player, disableMonkeyPatchPlayerApi);\n        if (settings.playAdAlways) {\n            // No matter what happens we play a new ad before the user sees the video again.\n            player.on('vast.contentEnd', function() {\n                setTimeout(function() {\n                    player.trigger('vast.reset');\n                }, 0);\n            });\n        }\n\n        player.on('vast.firstPlay', tryToPlayPrerollAd);\n\n        player.on('vast.reset', function() {\n            //If we are reseting the plugin, we don't want to restore the content\n            snapshot = null;\n            cancelAds();\n        });\n\n        player.vast = {\n            isEnabled: function() {\n                return settings.adsEnabled;\n            },\n\n            enable: function() {\n                settings.adsEnabled = true;\n            },\n\n            disable: function() {\n                settings.adsEnabled = false;\n            }\n        };\n\n        if (settings.loggerCallback) {\n            logger = settings.loggerCallback;\n        } else {\n            logger = console;\n        }\n        if (settings.terminateUnresponsiveVPAIDCreative) {\n            timer.killUnresponsiveCreative = true;\n        }\n        if (settings.adCancelTimeout) {\n            timer.adCancelTimeout = settings.adCancelTimeout;\n        }\n\n        var vastResponse = getAnVastXml();\n        var adIntegrator = isVPAID(vastResponse) ? new VPAIDIntegrator(player, settings) : new VASTIntegrator(player);\n\n        if (settings.delayExpandUntilVPAIDInit) {\n            checkAd(); //minthe : invoke init method of vpaid creative here in order to check valid ad, at the end of this checkAd process it will dispatch custom event which is called \"an.readytogovpaid\"\n        }\n\n        return player.vast;\n\n\n\n        /**** Local functions ****/\n        function tryToPlayPrerollAd() {\n            //We remove the poster to prevent flickering whenever the content starts playing\n            playerUtils.removeNativePoster(player);\n\n            playerUtils.once(player, ['vast.adsCancel', 'vast.adEnd'], function() {\n                removeAdUnit();\n                restoreVideoContent();\n            });\n\n            async.waterfall([\n                checkAdsEnabled,\n                preparePlayerForAd,\n                playPrerollAd\n            ], function(error, response) {\n                if (error) {\n                    trackAdError(error, response);\n                } else {\n                    player.trigger('vast.adEnd');\n                }\n            });\n\n            /*** Local functions ***/\n\n            function removeAdUnit() {\n                if (player.vast && player.vast.adUnit) {\n                    player.vast.adUnit = null; //We remove the adUnit\n                }\n            }\n\n            function restoreVideoContent() {\n                setupContentEvents();\n                if (snapshot) {\n                    playerUtils.restorePlayerSnapshot(player, snapshot);\n                    snapshot = null;\n                }\n            }\n\n            function setupContentEvents() {\n                playerUtils.once(player, ['playing', 'vast.reset', 'vast.firstPlay'], function(evt) {\n                    if (evt.type !== 'playing') {\n                        return;\n                    }\n\n                    player.trigger('vast.contentStart');\n\n                    playerUtils.once(player, ['ended', 'vast.reset', 'vast.firstPlay'], function(evt) {\n                        if (evt.type === 'ended') {\n                            player.trigger('vast.contentEnd');\n                        }\n                    });\n                });\n            }\n\n            function checkAdsEnabled(next) {\n                if (settings.adsEnabled) {\n                    return next(null);\n                }\n                next(new VASTError('Ads are not enabled'));\n            }\n\n            function preparePlayerForAd(next) {\n                if (canPlayPrerollAd()) {\n                    snapshot = playerUtils.getPlayerSnapshot(player);\n                    addSpinnerIcon();\n                    next(null);\n                } else {\n                    next(new VASTError('video content has been playing before preroll ad'));\n                }\n            }\n\n            function canPlayPrerollAd() {\n                return !isIPhone() || player.currentTime() <= settings.iosPrerollCancelTimeout;\n            }\n\n            function addSpinnerIcon() {\n                dom.addClass(player.el(), 'vjs-vast-ad-loading');\n                playerUtils.once(player, ['vast.adStart', 'vast.adsCancel'], removeSpinnerIcon);\n            }\n\n            function removeSpinnerIcon() {\n                //IMPORTANT NOTE: We remove the spinnerIcon asynchronously to give time to the browser to start the video.\n                // If we remove it synchronously we see a flash of the content video before the ad starts playing.\n                setTimeout(function() {\n                    dom.removeClass(player.el(), 'vjs-vast-ad-loading');\n                }, 100);\n            }\n\n        }\n\n        function cancelAds() {\n            player.trigger('vast.adsCancel');\n            adsCanceled = true;\n        }\n\n        function playPrerollAd(callback) {\n            async.waterfall([\n                //getVastResponse,//minthe : comment out, we're not using mail online's vast parser and loader\n                playAd\n            ], callback);\n        }\n\n        function getVastResponse(callback) {\n            vast.getVASTResponse(settings.adTagUrl ? settings.adTagUrl() : settings.adTagXML, callback);\n        }\n\n        function getAnVastXml() { //minthe : override vast response to use jsVpaidUrl coming from videoplayer framework\n            var vastResponse = new VASTResponse();\n            vastResponse._linearAdded = true;\n            vastResponse.ads = [{\n                \"id\": 1234567,\n                \"inLine\": {\n                    \"adTitle\": \"\",\n                    \"adSystem\": \"\",\n                    \"impressions\": [],\n                    \"creatives\": [{\n                        \"sequence\": 1,\n                        \"linear\": {\n                            \"duration\": 13000,\n                            \"mediaFiles\": [{\n                                \"src\": settings.jsVpaidUrl,\n                                \"type\": \"application/javascript\",\n                                \"apiFramework\": \"VPAID\"\n                            }],\n                            \"skipoffset\": null,\n                        }\n                    }, { \"sequence\": 1 }],\n                    \"description\": \"Vpaid Linear Video Ad\",\n                    \"surveys\": []\n                }\n            }];\n            vastResponse.errorURLMacros = [];\n            vastResponse.impressions = [];\n            vastResponse.customClicks = [];\n            vastResponse.mediaFiles = [{\n                \"src\": settings.jsVpaidUrl,\n                \"type\": \"application/javascript\",\n                \"apiFramework\": \"VPAID\"\n            }];\n            vastResponse.clickThrough = settings.clickUrl;\n            vastResponse.adTitle = \"\";\n            vastResponse.adParameters = settings.adParameters;\n\n            return vastResponse;\n        }\n\n        function playAd(vastResponse, callback) {\n\n            //minthe : override vast response to use jsVpaidUrl coming from videoplayer framework\n            vastResponse = getAnVastXml();\n\n            //TODO: Find a better way to stop the play. The 'playPrerollWaterfall' ends in an inconsistent situation\n            //If the state is not 'preroll?' it means the ads were canceled therefore, we break the waterfall\n            if (adsCanceled) {\n                return;\n            }\n\n            var adFinished = false;\n\n            //comment out for VID-1359\n            //if (isIDevice()) {\n            //preventManualProgress();\n            //}\n            callback = callback || trackAdError;\n            player.vast.adUnit = adIntegrator.playAd(vastResponse, callback);\n\n            //comment out for VID-1359\n            //function preventManualProgress() {\n            //    //IOS video clock is very unreliable and we need a 3 seconds threshold to ensure that the user forwarded/rewound the ad\n            //    var PROGRESS_THRESHOLD = 3;\n            //    var previousTime = 0;\n            //    var tech = player.el().querySelector('.vjs-tech');\n            //    var skipad_attempts = 0;\n            //\n            //    player.on('timeupdate', adTimeupdateHandler);\n            //    playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel', 'vast.adError'], stopPreventManualProgress);\n            //\n            //    /*** Local functions ***/\n            //    function adTimeupdateHandler() {\n            //        var currentTime = player.currentTime();\n            //        var progressDelta = Math.abs(currentTime - previousTime);\n            //\n            //        if (progressDelta > PROGRESS_THRESHOLD) {\n            //            skipad_attempts += 1;\n            //            if (skipad_attempts >= 2) {\n            //                player.pause();\n            //            }\n            //            player.currentTime(previousTime);\n            //        } else {\n            //            previousTime = currentTime;\n            //        }\n            //    }\n            //\n            //    function stopPreventManualProgress() {\n            //        player.off('timeupdate', adTimeupdateHandler);\n            //    }\n            //}\n        }\n\n        //minthe : checkAd to check vpaid ad is ready to go\n        function checkAd(vastResponse, callback) {\n            vastResponse = getAnVastXml();\n            callback = callback || trackAdError;\n            player.vast.adUnit = adIntegrator.playAd(vastResponse, callback, true);\n        }\n\n        function trackAdError(error, vastResponse) {\n            if (!error) return;\n            player.trigger({ type: 'vast.adError', error: error });\n            cancelAds();\n            if (console && console.log) {\n                console.log('AD ERROR:', error.message, error, vastResponse);\n            }\n        }\n\n        function isVPAID(vastResponse) {\n            var i, len;\n            var mediaFiles = vastResponse.mediaFiles;\n            for (i = 0, len = mediaFiles.length; i < len; i++) {\n                if (vastUtil.isVPAID(mediaFiles[i])) {\n                    return true;\n                }\n            }\n            return false;\n        }\n    });\n\n    ;\n    vjs.AdsLabel = vjs.Component.extend({\n        /** @constructor */\n        init: function(player, options) {\n            vjs.Component.call(this, player, options);\n\n            var that = this;\n\n            // We asynchronously reposition the ads label element\n            setTimeout(function() {\n                var currentTimeComp = player.controlBar && (player.controlBar.getChild(\"timerControls\") || player.controlBar.getChild(\"currentTimeDisplay\"));\n                if (currentTimeComp) {\n                    player.controlBar.el().insertBefore(that.el(), currentTimeComp.el());\n                }\n                dom.removeClass(that.el(), 'vjs-label-hidden');\n            }, 0);\n        }\n    });\n\n    vjs.AdsLabel.prototype.createEl = function() {\n        return vjs.Component.prototype.createEl.call(this, 'div', {\n            className: 'vjs-ads-label vjs-control vjs-label-hidden',\n            innerHTML: 'Advertisement'\n        });\n    };;\n    /**\n     * The component that shows a black screen until the ads plugin has decided if it can or it can not play the ad.\n     *\n     * Note: In case you wonder why instead of this black poster we don't just show the spinner loader.\n     *       IOS devices do not work well with animations and the browser chrashes from time to time That is why we chose to\n     *       have a secondary black poster.\n     *\n     *       It also makes it much more easier for the users of the plugin since it does not change the default behaviour of the\n     *       spinner and the player works the same way with and without the plugin.\n     *\n     * @param {vjs.Player|Object} player\n     * @param {Object=} options\n     * @constructor\n     */\n    vjs.BlackPoster = vjs.Component.extend({\n        /** @constructor */\n        init: function(player, options) {\n            vjs.Component.call(this, player, options);\n\n            var posterImg = player.getChild('posterImage');\n\n            //We need to do it asynchronously to be sure that the black poster el is on the dom.\n            setTimeout(function() {\n                if (posterImg) {\n                    player.el().insertBefore(this.el(), posterImg.el());\n                }\n            }.bind(this), 0);\n        }\n    });\n\n    /**\n     * Create the black poster div element\n     * @return {Element}\n     */\n    vjs.BlackPoster.prototype.createEl = function() {\n        return vjs.createEl('div', {\n            className: 'vjs-black-poster'\n        });\n    };;\n\n    function VPAIDAdUnitWrapper(vpaidAdUnit, opts) {\n        if (!(this instanceof VPAIDAdUnitWrapper)) {\n            return new VPAIDAdUnitWrapper(vpaidAdUnit, opts);\n        }\n        sanityCheck(vpaidAdUnit, opts);\n\n        this.options = extend({}, opts);\n\n        this._adUnit = vpaidAdUnit;\n        this._adLoaded = false;\n        this._adStopped = false;\n        this._adStarted = false;\n        this._adSkipped = false;\n\n        /*** Local Functions ***/\n        function sanityCheck(adUnit, opts) {\n            if (!adUnit || !VPAIDAdUnitWrapper.checkVPAIDInterface(adUnit)) {\n                throw new VASTError('on VPAIDAdUnitWrapper, the passed VPAID adUnit does not fully implement the VPAID interface');\n            }\n\n            if (!isObject(opts)) {\n                throw new VASTError(\"on VPAIDAdUnitWrapper, expected options hash  but got '\" + opts + \"'\");\n            }\n\n            if (!(\"adCancelTimeout\" in opts) || !isNumber(opts.adCancelTimeout)) {\n                throw new VASTError(\"on VPAIDAdUnitWrapper, expected adCancelTimeout in options\");\n            }\n        }\n    }\n\n    VPAIDAdUnitWrapper.checkVPAIDInterface = function checkVPAIDInterface(VPAIDAdUnit) {\n        //NOTE: skipAd is not part of the method list because it only appears in VPAID 2.0 and we support VPAID 1.0\n        var VPAIDInterfaceMethods = [\n            'handshakeVersion', 'initAd', 'startAd', 'stopAd', 'resizeAd', 'pauseAd', 'expandAd', 'collapseAd'\n        ];\n\n        for (var i = 0, len = VPAIDInterfaceMethods.length; i < len; i++) {\n            if (!VPAIDAdUnit || !isFunction(VPAIDAdUnit[VPAIDInterfaceMethods[i]])) {\n                return false;\n            }\n        }\n\n\n        return canSubscribeToEvents(VPAIDAdUnit) && canUnsubscribeFromEvents(VPAIDAdUnit);\n\n        /*** Local Functions ***/\n\n        function canSubscribeToEvents(adUnit) {\n            return isFunction(adUnit.subscribe) || isFunction(adUnit.addEventListener) || isFunction(adUnit.on);\n        }\n\n        function canUnsubscribeFromEvents(adUnit) {\n            return isFunction(adUnit.unsubscribe) || isFunction(adUnit.removeEventListener) || isFunction(adUnit.off);\n\n        }\n    };\n\n    VPAIDAdUnitWrapper.prototype.adUnitAsyncCall = function() {\n        var args = arrayLikeObjToArray(arguments);\n        var method = args.shift();\n        var cb = args.pop();\n        var timeoutId;\n\n        sanityCheck(method, cb, this._adUnit);\n        args.push(wrapCallback());\n\n        this._adUnit[method].apply(this._adUnit, args);\n        timeoutId = setTimeout(function() {\n            timeoutId = null;\n            cb(new VASTError(\"on VPAIDAdUnitWrapper, timeout while waiting for a response on call '\" + method + \"'\"));\n            cb = noop;\n        }, this.options.adCancelTimeout);\n\n        /*** Local functions ***/\n        function sanityCheck(method, cb, adUnit) {\n            if (!isString(method) || !isFunction(adUnit[method])) {\n                throw new VASTError(\"on VPAIDAdUnitWrapper.adUnitAsyncCall, invalid method name\");\n            }\n\n            if (!isFunction(cb)) {\n                throw new VASTError(\"on VPAIDAdUnitWrapper.adUnitAsyncCall, missing callback\");\n            }\n        }\n\n        function wrapCallback() {\n            return function() {\n                if (timeoutId) {\n                    clearTimeout(timeoutId);\n                }\n                cb.apply(this, arguments);\n            };\n        }\n    };\n\n    VPAIDAdUnitWrapper.prototype.on = function(evtName, handler) {\n        var addEventListener = this._adUnit.addEventListener || this._adUnit.subscribe || this._adUnit.on;\n        addEventListener.call(this._adUnit, evtName, handler);\n    };\n\n    VPAIDAdUnitWrapper.prototype.off = function(evtName, handler) {\n        var removeEventListener = this._adUnit.removeEventListener || this._adUnit.unsubscribe || this._adUnit.off;\n        removeEventListener.call(this._adUnit, evtName, handler);\n    };\n\n    //minthe : waitForEvent\n    VPAIDAdUnitWrapper.prototype.waitForEvent = function(evtName, cb, context) {\n        var timeoutId;\n        sanityCheck(evtName, cb);\n        context = context || null;\n\n        this.on(evtName, responseListener);\n\n        timeoutId = setTimeout(function() {\n            cb(new VASTError(\"on VPAIDAdUnitWrapper.waitForEvent, timeout while waiting for event '\" + evtName + \"'\"));\n            timeoutId = null;\n            cb = noop;\n        }, this.options.adCancelTimeout);\n\n        /*** Local functions ***/\n        function sanityCheck(evtName, cb) {\n            if (!isString(evtName)) {\n                throw new VASTError(\"on VPAIDAdUnitWrapper.waitForEvent, missing evt name\");\n            }\n\n            if (!isFunction(cb)) {\n                throw new VASTError(\"on VPAIDAdUnitWrapper.waitForEvent, missing callback\");\n            }\n        }\n\n        function responseListener() {\n            var args = arrayLikeObjToArray(arguments);\n            if (timeoutId) {\n                clearTimeout(timeoutId);\n                timeoutId = null;\n            }\n\n            args.unshift(null);\n            cb.apply(context, args);\n        }\n    };\n\n    // VPAID METHODS\n    VPAIDAdUnitWrapper.prototype.handshakeVersion = function(version, cb) {\n        this.adUnitAsyncCall('handshakeVersion', version, cb);\n    };\n\n    /* jshint maxparams:6 */\n    VPAIDAdUnitWrapper.prototype.initAd = function(width, height, viewMode, desiredBitrate, adUnitData, environmentVars, cb) {\n        //minthe : AdLoaded\n        logger.info('Calling VPAID initAd, time remaining =' + profile.getRemainingTime('initAd'));\n        this.waitForEvent('AdLoaded', cb);\n\n        //minthe VID-1580\n        this._adUnit.initAd(width, height, viewMode, desiredBitrate, adUnitData, environmentVars);\n\n    };\n\n    VPAIDAdUnitWrapper.prototype.resizeAd = function(width, height, viewMode, cb) {\n        // NOTE: AdSizeChange event is only supported on VPAID 2.0 so for the moment we are not going to use it\n        // and will assume that everything is fine after the async call\n        this.adUnitAsyncCall('resizeAd', width, height, viewMode, cb);\n    };\n\n    VPAIDAdUnitWrapper.prototype.startAd = function(cb) {\n        logger.info('Calling VPAID startAd, time remaining =' + profile.getRemainingTime('startAd'));\n        this.waitForEvent('AdStarted', cb);\n        this._adUnit.startAd();\n    };\n\n    VPAIDAdUnitWrapper.prototype.stopAd = function(cb) {\n        logger.info(' Calling VPAID stopAd');\n        this.waitForEvent('AdStopped', cb);\n        this._adUnit.stopAd();\n    };\n\n    VPAIDAdUnitWrapper.prototype.pauseAd = function(cb) {\n        if (this._adStopped || !this._adStarted) return;\n        logger.log(' Calling VPAID pauseAd');\n        this._adUnit.pauseAd();\n        timer.startKillTimeout(this._adUnit);\n    };\n\n    VPAIDAdUnitWrapper.prototype.resumeAd = function(cb) {\n        if (this._adStopped || !this._adStarted) return;\n        logger.log(' Calling VPAID resumeAd');\n        this.waitForEvent('AdPlaying', cb);\n        this._adUnit.resumeAd();\n        timer.startKillTimeout(this._adUnit);\n    };\n\n    VPAIDAdUnitWrapper.prototype.expandAd = function(cb) {\n        if (this._adStopped) return;\n        this.waitForEvent('AdExpandedChange', cb);\n        this._adUnit.expandAd();\n    };\n\n    VPAIDAdUnitWrapper.prototype.collapseAd = function(cb) {\n        if (this._adStopped) return;\n        this.waitForEvent('AdExpandedChange', cb);\n        this._adUnit.collapseAd();\n    };\n\n    VPAIDAdUnitWrapper.prototype.skipAd = function(cb) {\n        var skipAnyway = function() {\n            if(!this._adSkipped){\n                logger.debug('VPAID Creative has ' + ((this._adStopped) ? 'already stopped' : 'not responded with AdSkipped') + ': Forcing AdSkipped');\n                this._adSkipped = true;\n                this.player.trigger('vpaid.AdSkipped');\n            }\n        }\n\n        if (this._adStopped) {\n            // VIDLA-990 VPAID Ads that have already stopped should be skipped anyway (to support collapsing ad unit when disableCollapse is on)\n            skipAnyway.apply(this);\n            return;\n        }\n        logger.log('Calling VPAID skipAd');\n        if (cb) {\n            this.waitForEvent('AdSkipped', cb);\n        }\n        this._adUnit.skipAd();\n        //VIDLA-442 VPAID Ads that don't respond to skipAd should be skipped anyway\n        setTimeout(function() {\n            skipAnyway.apply(this);\n        }.bind(this), 500);\n    };\n\n    //VPAID property getters\n    [\n        'adLinear',\n        'adWidth',\n        'adHeight',\n        'adExpanded',\n        'adSkippableState',\n        'adRemainingTime',\n        'adDuration',\n        'adVolume',\n        'adCompanions',\n        'adIcons'\n    ].forEach(function(property) {\n        var getterName = 'get' + capitalize(property);\n\n        VPAIDAdUnitWrapper.prototype[getterName] = function(cb) {\n            this.adUnitAsyncCall(getterName, cb);\n        };\n    });\n\n    //VPAID property setters\n    VPAIDAdUnitWrapper.prototype.setAdVolume = function(volume, cb) {\n        if (this._adStopped) return;\n        logger.debug('Calling VPAID setAdVolume :: volume :' + volume);\n        this.adUnitAsyncCall('setAdVolume', volume, cb);\n    };\n\n    ;\n\n    function VPAIDHTML5Tech(mediaFile) {\n\n        if (!(this instanceof VPAIDHTML5Tech)) {\n            return new VPAIDHTML5Tech(mediaFile);\n        }\n\n        sanityCheck(mediaFile);\n\n        this.name = 'vpaid-html5';\n        this.containerEl = null;\n        this.videoEl = null;\n        this.vpaidHTMLClient = null;\n\n        this.mediaFile = mediaFile;\n\n        function sanityCheck(mediaFile) {\n            if (!mediaFile || !isString(mediaFile.src)) {\n                throw new VASTError(VPAIDHTML5Tech.INVALID_MEDIA_FILE);\n            }\n        }\n    }\n\n    VPAIDHTML5Tech.supports = function(type) {\n        return !isOldIE() && type === 'application/javascript';\n    };\n\n    VPAIDHTML5Tech.prototype.loadAdUnit = function loadAdUnit(containerEl, videoEl, callback) {\n        sanityCheck(containerEl, videoEl, callback);\n\n        this.containerEl = containerEl;\n        this.videoEl = videoEl;\n        this.vpaidHTMLClient = new VPAIDHTML5Client(containerEl, videoEl, {});\n        this.vpaidHTMLClient.loadAdUnit(this.mediaFile.src, callback);\n\n\n\n        function sanityCheck(container, video, cb) {\n            if (!dom.isDomElement(container)) {\n                throw new VASTError(VPAIDHTML5Tech.INVALID_DOM_CONTAINER_EL);\n            }\n\n            if (!dom.isDomElement(video) || video.tagName.toLowerCase() !== 'video') {\n                throw new VASTError(VPAIDHTML5Tech.INVALID_DOM_CONTAINER_EL);\n            }\n\n            if (!isFunction(cb)) {\n                throw new VASTError(VPAIDHTML5Tech.MISSING_CALLBACK);\n            }\n        }\n    };\n\n    VPAIDHTML5Tech.prototype.unloadAdUnit = function unloadAdUnit() {\n        if (this.vpaidHTMLClient) {\n            try {\n                this.vpaidHTMLClient.destroy();\n            } catch (e) {\n                if (console && isFunction(console.log)) {\n                    console.log('VAST ERROR: trying to unload the VPAID adunit');\n                }\n            }\n\n            this.vpaidHTMLClient = null;\n        }\n\n        if (this.containerEl) {\n            dom.remove(this.containerEl);\n            this.containerEl = null;\n        }\n    };\n\n    var PREFIX = 'on VPAIDHTML5Tech';\n    VPAIDHTML5Tech.INVALID_MEDIA_FILE = PREFIX + ', invalid MediaFile';\n    VPAIDHTML5Tech.INVALID_DOM_CONTAINER_EL = PREFIX + ', invalid container HtmlElement';\n    VPAIDHTML5Tech.INVALID_DOM_VIDEO_EL = PREFIX + ', invalid HTMLVideoElement';\n    VPAIDHTML5Tech.MISSING_CALLBACK = PREFIX + ', missing valid callback';\n\n\n    ;\n\n    function VPAIDIntegrator(player, settings) {\n        if (!(this instanceof VPAIDIntegrator)) {\n            return new VPAIDIntegrator(player);\n        }\n\n        this.VIEW_MODE = {\n            NORMAL: 'normal',\n            FULLSCREEN: \"fullscreen\",\n            THUMBNAIL: \"thumbnail\"\n        };\n        this.player = player;\n        this.containerEl = createVPAIDContainerEl(player);\n        this.options = {\n            adCancelTimeout: 5000,\n            VPAID_VERSION: '2.0'\n        };\n        this.settings = settings;\n        this.volume = 1;\n        this.initVolume = 1;\n        if (this.settings.initialAudio === 'off') {\n            logger.log(\"Initial audio off\");\n            this.initVolume = 0;\n        }\n        this.initAdUnitCalled = false;\n        this.initialisedAdUnit = null;\n        this.initAdTimeout = false;\n        /*** Local functions ***/\n\n        function createVPAIDContainerEl() {\n            var containerEl = document.createElement('div');\n            dom.addClass(containerEl, 'VPAID-container');\n            player.el().insertBefore(containerEl, player.controlBar.el());\n            return containerEl;\n\n        }\n        this.EVENTS = [\n            'AdLoaded', 'AdStarted', 'AdStopped', 'AdSkipped', 'AdSkippableStateChange',\n            'AdSizeChange', 'AdLinearChange', 'AdDurationChange', 'AdExpandedChange',\n            'AdRemainingTimeChange', 'AdVolumeChange', 'AdImpression', 'AdVideoStart',\n            'AdVideoFirstQuartile', 'AdVideoMidpoint', 'AdVideoThirdQuartile',\n            'AdVideoComplete', 'AdClickThru', 'AdInteraction', 'AdUserAcceptInvitation',\n            'AdUserMinimize', 'AdUserClose', 'AdPaused', 'AdPlaying', 'AdLog', 'AdError'\n        ];\n    }\n\n    //List of supported VPAID technologies\n    VPAIDIntegrator.techs = [\n        VPAIDHTML5Tech\n    ];\n\n    //minthe : protoype.playAd\n    VPAIDIntegrator.prototype.playAd = function playVPaidAd(vastResponse, callback, isTestPlay) {\n        //flag to sperate logic for checking vpaid ad is valid\n        isTestPlay = (isTestPlay && isTestPlay !== undefined ? isTestPlay : false);\n\n        var that = this;\n        var tech;\n        var player = this.player;\n\n        callback = callback || noop;\n        if (!(vastResponse instanceof VASTResponse)) {\n            return callback(new VASTError('on VASTIntegrator.playAd, missing required VASTResponse'));\n        }\n\n        tech = this._findSupportedTech(vastResponse, this.settings);\n        dom.addClass(player.el(), 'vjs-vpaid-ad');\n\n        player.on('vast.adsCancel', triggerVpaidAdEnd);\n        player.one('vpaid.adEnd', function() {\n            player.off('vast.adsCancel', triggerVpaidAdEnd);\n            removeAdUnit();\n        });\n\n        if (tech) {\n\n            //if it's test-play this routine will invoke initAd and return result to notify the creative is ready to go\n            if (isTestPlay) {\n                async.waterfall([\n                    function(next) {\n                        next(null, tech, vastResponse);\n                    },\n                    this._loadAdUnit.bind(this),\n                    this._initAdUnit.bind(this)\n                ], function(error, adUnit, vastResponse) {\n                    if (error) {\n                        that._trackError(vastResponse);\n                    } else {\n                        player.trigger('an.readytogovpaid');\n                    }\n                    callback(error, vastResponse);\n                });\n            } else {\n                var errorCallback = function(error, adUnit, vastResponse) {\n                    if (error) {\n                        that._trackError(vastResponse);\n                    }\n                    player.trigger('vpaid.adEnd');\n                    callback(error, vastResponse);\n                };\n                var taskList = [\n                    function(next) {\n                        next(null, that.initialisedAdUnit, vastResponse, true);\n                    },\n                    this._playAdUnit.bind(this)\n                ];\n                if (this.initialisedAdUnit) {\n                    async.waterfall(taskList, errorCallback);\n                } else {\n                    if (this.initAdUnitCalled) {\n                        player.one(\"an.readytogovpaid\", function() {\n                            async.waterfall(taskList, errorCallback);\n                        });\n                    } else {\n                        async.waterfall([\n                            function(next) {\n                                next(null, tech, vastResponse);\n                            },\n                            this._loadAdUnit.bind(this),\n                            this._initAdUnit.bind(this),\n                            this._playAdUnit.bind(this)\n                        ], errorCallback);\n                    }\n                }\n            }\n\n            this._adUnit = {\n                _paused: true,\n                _completed: false,\n                type: 'VPAID',\n                pauseAd: function() {\n                    player.trigger('vpaid.pauseAd');\n                    // VIDLA-1327-1329 Reverting back the pause which caused the regression.\n                    player.pause(true);\n                },\n                resumeAd: function() {\n                    player.trigger('vpaid.resumeAd');\n                },\n                isPaused: function() {\n                    return that.player.paused(true);\n                },\n                getSrc: function() {\n                    return tech.mediaFile;\n                }\n            };\n\n            return this._adUnit;\n        }\n\n        callback(new VASTError('on VPAIDIntegrator.playAd, could not find a supported mediaFile'));\n\n        return null;\n        /*** Local functions ***/\n        function triggerVpaidAdEnd() {\n            player.trigger('vpaid.adEnd');\n        }\n\n        function removeAdUnit() {\n            if (tech) {\n                tech.unloadAdUnit();\n            }\n            dom.removeClass(player.el(), 'vjs-vpaid-ad');\n        }\n    };\n\n    VPAIDIntegrator.prototype._findSupportedTech = function(vastResponse, settings) {\n        if (!(vastResponse instanceof VASTResponse)) {\n            return null;\n        }\n\n        var vpaidMediaFiles = vastResponse.mediaFiles.filter(vastUtil.isVPAID);\n        var i, len, mediaFile, VPAIDTech;\n\n        for (i = 0, len = vpaidMediaFiles.length; i < len; i += 1) {\n            mediaFile = vpaidMediaFiles[i];\n            VPAIDTech = findSupportedTech(mediaFile);\n            if (VPAIDTech) {\n                return new VPAIDTech(mediaFile, settings);\n            }\n        }\n\n        return null;\n\n        /*** Local functions ***/\n        function findSupportedTech(mediafile) {\n            var type = mediafile.type;\n            var i, len, VPAIDTech;\n\n            for (i = 0, len = VPAIDIntegrator.techs.length; i < len; i += 1) {\n                VPAIDTech = VPAIDIntegrator.techs[i];\n                if (VPAIDTech.supports(type)) {\n                    return VPAIDTech;\n                }\n            }\n            return null;\n        }\n    };\n\n    //minthe : loadAdUnit\n    VPAIDIntegrator.prototype._loadAdUnit = function(tech, vastResponse, next) {\n        if (this.initAdUnitCalled) {\n            return;\n        }\n        var player = this.player;\n        var vjsTechEl = player.el().querySelector('.vjs-tech');\n        var adCancelTimeout = this.settings.adCancelTimeout || this.options.adCancelTimeout;\n        var overlayPlayer = this.settings.overlayPlayer;\n        var initialPlayback = this.settings.initialPlayback;\n        var controlBarPosition = this.settings.controlBarPosition;\n        tech.loadAdUnit(this.containerEl, vjsTechEl, function(error, adUnit) {\n            if (error) {\n                return next(error, adUnit, vastResponse);\n            }\n\n            try {\n                var WrappedAdUnit = new VPAIDAdUnitWrapper(adUnit, { src: tech.mediaFile.src, adCancelTimeout: adCancelTimeout, overlayPlayer: overlayPlayer, initialPlayback: initialPlayback, controlBarPosition: controlBarPosition });\n                WrappedAdUnit.player = player;\n                var techClass = 'vjs-' + tech.name + '-ad';\n                dom.addClass(player.el(), techClass);\n                player.one('vpaid.adEnd', function() {\n                    dom.removeClass(player.el(), techClass);\n                });\n                //Entry point for player's skip button which trigger 'skip' event;\n                player.on('skip', function() {\n                    WrappedAdUnit.skipAd();\n                });\n                next(null, WrappedAdUnit, vastResponse);\n            } catch (e) {\n                next(e, adUnit, vastResponse);\n            }\n        });\n    };\n\n\n    //minthe : _testAdUnit\n    VPAIDIntegrator.prototype._initAdUnit = function(adUnit, vastResponse, callback) {\n        if (this.initAdUnitCalled) {\n            return;\n        }\n        this.initAdUnitCalled = true;\n        async.waterfall([\n            function(next) {\n                next(null, adUnit, vastResponse);\n            },\n            this._handshake.bind(this),\n            this._setupEvents.bind(this),\n            this._initAd.bind(this)\n        ], callback);\n    };\n\n    //minthe : _playAdUnit\n    VPAIDIntegrator.prototype._playAdUnit = function(adUnit, vastResponse, callback) {\n        async.waterfall([\n            function(next) {\n                next(null, adUnit, vastResponse);\n            },\n            this._linkPlayerControls.bind(this),\n            this._startAd.bind(this)\n        ], callback);\n    };\n\n    VPAIDIntegrator.prototype._handshake = function handshake(adUnit, vastResponse, next) {\n        adUnit.handshakeVersion(this.options.VPAID_VERSION, function(error, version) {\n            if (error) {\n                return next(error, adUnit, vastResponse);\n            }\n\n            if (version && isSupportedVersion(version)) {\n                return next(null, adUnit, vastResponse);\n            }\n\n            return next(new VASTError('on VPAIDIntegrator._handshake, unsupported version \"' + version + '\"'), adUnit, vastResponse);\n        });\n\n        function isSupportedVersion(version) {\n            var majorNum = major(version);\n            return majorNum >= 1 && majorNum <= 2;\n        }\n\n        function major(version) {\n            var parts = version.split('.');\n            return parseInt(parts[0], 10);\n        }\n    };\n\n    //minthe : _initAd\n    VPAIDIntegrator.prototype._initAd = function(adUnit, vastResponse, next) {\n        var self = this;\n        var tech = this.player.el().querySelector('.vjs-tech');\n        var dimension = dom.getDimension(tech);\n        // Reset the timeout flag\n        self.initAdTimeout = false;\n\n        timer.startInitAdTimeout(function(error) {\n            self.initAdTimeout = true;\n            self._reportTimeout(adUnit, error);\n        });\n        /*\n        adUnit.initAd(dimension.width, dimension.height, this.VIEW_MODE.NORMAL, -1, {AdParameters: vastResponse.adParameters || ''}, function (error) {\n            self.initialisedAdUnit = adUnit;\n            next(error, adUnit, vastResponse);\n        });\n        */\n\n        adUnit.initAd(dimension.width, dimension.height, this.VIEW_MODE.NORMAL, -1, { AdParameters: vastResponse.adParameters || '' }, self.settings.vpaidEnvironmentVars, function(error) {\n            self.initialisedAdUnit = adUnit;\n            next(error, adUnit, vastResponse);\n        });\n    };\n\n    VPAIDIntegrator.prototype._setupEvents = function(adUnit, vastResponse, next) {\n        var adUnitSrc = adUnit.options.src;\n        var tracker = new VASTTracker(adUnitSrc, vastResponse);\n        var player = this.player;\n        var that = this;\n\n        function setupEventCallbacks() {\n            var cb = that.settings.vpaidEventCallback;\n            if (!cb) return;\n            that.EVENTS.forEach(function(event) {\n                adUnit.on(event, function(data) {\n                    cb.call(this, event, data);\n                });\n            });\n        };\n\n        setupEventCallbacks();\n\n        adUnit.on('AdLoaded', function() {\n            adUnit._adLoaded = true;\n            timer.stopInitAdTimeout();\n            logger.info('VPAID event received :: AdLoaded, time = ' + profile.getInitTime() + ', time remaining = ' + profile.getRemainingTime('AdLoaded'));\n        });\n\n        //minthe2 AdStarted Handler\n        //fix for VID-1525\n        adUnit.on('AdStarted', function() {\n\n            adUnit._adStarted = true;\n            profile.adStartedTimestamp = new Date().getTime();\n\n            if (that.settings.delayExpandUntilVPAIDImpression) {\n                if (profile.adImpressionTimestamp !== 0 && profile.adStartedTimestamp !== 0) {\n                    timer.stopStartAdTimeout();\n                }\n            } else {\n                timer.stopStartAdTimeout();\n            }\n\n            // if (profile.adImpressionTimestamp !== 0) {//if AdImpression is deliverd without AdStarted\n            //     profile.adLoadedTimestamp = profile.adImpressionTimestamp;\n            // }\n\n\n            if (!adUnit._adLoaded) {\n                var remainingTime = profile.timeout - (profile.adStartedTimestamp - profile.initAdTimestamp);\n                logger.info('VPAID event received :: AdStarted, time = ' + 0 + ', time remaining = ' + remainingTime + ', Out of order AdStarted');\n            } else {\n                if (that.settings.delayExpandUntilVPAIDImpression && profile.adImpressionTimestamp === 0) {\n                    logger.info('VPAID event received :: AdStarted');\n                } else {\n                    logger.info('VPAID event received :: AdStarted, time = ' + profile.getStartTime() + ', total time = ' + profile.getTotalTime() + ', time remaining = ' + profile.getRemainingTime('AdStarted'));\n                }\n            }\n            player.trigger('vpaid.AdStarted');\n            tracker.trackCreativeView();\n            notifyPlayToPlayer();\n\n\n            //activate impression timer if it's not already started\n            if (that.settings.delayExpandUntilVPAIDImpression && profile.adImpressionTimestamp === 0) {\n                profile.adImpressionTimestamp = new Date().getTime();\n                // timer.startAdImpressionTimeout(function (error) {\n                //     that._reportTimeout(adUnit, error);\n                // });\n            }\n            if (isAndroid()) {\n                ChiveFacebookHack();\n            }\n        });\n\n        // For creatives that do not use the video tag provided by the player.\n        function handleAdPlayPause() {\n            // Ad creatives do not creative their own video tags on devices so no need to handle AdProgess timer\n            // TODO : find  more reliable way to figure out the video src set.\n            if (isIDevice() || isAndroid()) {\n                // VIDLA-421 (do not ignore pause/resume event handlers for overlay player)\n                if (!adUnit.options.overlayPlayer) {\n                    return;\n                }\n            }\n\n            // Ad uses video JS Slot\n            if (isVideoSlotUsed()) {\n                return;\n            }\n            var creative = adUnit._adUnit ? adUnit._adUnit._creative : null;\n\n            if (adUnit.options.overlayPlayer) {\n                // since no monkeypatch api is activated.\n                player.on('pause', function() {\n                    if (adUnit._adUnit && creative) {\n                        that._adUnit.pauseAd();\n                    }\n                });\n                player.on('play', function() {\n                    if (adUnit._adUnit && creative) {\n                        that._adUnit.resumeAd();\n                    }\n                });\n            }\n\n            //IE11 has an issue to not listen this pause event - VID-2405, VID-2406\n            //video.js has their own event pooling sytem for video element and parent div of video element, the \"pause event\" area is so crowded for now - when vpaid player injects \"pause\" listener to player object on IE11, the video.js doesn't handle as well. looks like incorrect GUID setting problem in order to get events unique\n            //for handling this vpaid-creative.pause by \"pause\" signal from video.js we don't have to stick with the crowded \"pause\" signal. we can do samething with differnet signal for this\n            // player.on('pause', function(){\n            //     if(creative){\n            //         that._adUnit.pauseAd();\n            //     }\n            // });\n            player.on('apn-vpaid-pause', function() { //this \"apn-vpaid-pause\" will be dispatch from video.js pause.\n                if (creative) {\n                    // that._adUnit.pauseAd();//no need to dispatch pause again to video.js because video.js already dispatch pause before triggered \"apn-vpaid-pause\". this will also cover a case showing pause button on the UI\n                    player.trigger('vpaid.pauseAd'); //vpaid video pause\n                }\n            });\n        };\n\n        // For creatives that do not use the video tag provided by the player.\n        function handleAdProgress() {\n\n            // Ad creatives do not creative their own video tags on devices so no need to handle AdProgess timer\n            // TODO : find  more reliable way to figure out the video src set.\n            //if(isIDevice() || isAndroid()){\n            if (isIDevice()) { //for VID-2597\n                return;\n            }\n\n            // Ad uses video JS Slot\n            if (isVideoSlotUsed()) {\n                return;\n            }\n\n            // Ad is using its own Video slot.\n            var creative = adUnit._adUnit._creative;\n            var remainingTimeUnknown = false;\n\n            var lastTime = -1;\n            function updateProgress() {\n                var duration = creative.getAdDuration ? creative.getAdDuration() : 0;\n                var remainingTime = creative.getAdRemainingTime ? creative.getAdRemainingTime() : -1;\n                remainingTime = isNumber(remainingTime) ? remainingTime : -1;\n                remainingTime = (remainingTime > duration) ? duration : remainingTime;//fix VIDLA-429\n                var currentTime = duration - remainingTime;\n\n                switch (remainingTime) {\n                    case -2:\n                        // If time is not currently known\n                        remainingTimeUnknown = true;\n                        player.controlBar.currentTimeDisplay.hide();\n                        player.controlBar.timeDivider.hide();\n                        player.controlBar.durationDisplay.hide();\n                        break;\n                    case -1:\n                        // If time is not implemeneted\n                        clearInterval(progressHandler);\n                        player.controlBar.currentTimeDisplay.hide();\n                        player.controlBar.timeDivider.hide();\n                        player.controlBar.durationDisplay.hide();\n                        break;\n                    case 0:\n                        clearInterval(progressHandler);\n                        break;\n                    default:\n                        if (remainingTimeUnknown) {\n                            remainingTimeUnknown = false;\n                            player.controlBar.currentTimeDisplay.show();\n                            player.controlBar.timeDivider.show();\n                            player.controlBar.durationDisplay.show();\n                        }\n                        // because time in control bar is second base, we don't have to update it very often\n                        if (currentTime - lastTime > 0.4) {\n                            // Fix for VSSPP-2189 (Freezing or choppy playing Celtra VPAID creatives). \n                            // Commented the setting new player time for VPAID, because it forces vjs to seeking\n                            // for the new video position on video slot. The seeking moves video position to the\n                            // closer key-frame, which generates very choppy experience. Also, moving to the new \n                            // video position forces some VPAID creatives (for example: celtra VPAID creative)\n                            // to do its own work and to fire unneeded VPAID events.\n                            // player.currentTime(currentTime);\n                            player.controlBar.currentTimeDisplay.updateContent();\n                            player.duration(duration);\n                            player.controlBar.durationDisplay.updateContent();\n                            lastTime = currentTime;\n                        }\n                        break;\n                }\n            }\n            var progressHandler = setInterval(updateProgress, 200);\n            updateProgress();\n        }\n\n        adUnit.on('AdSkipped', function() {\n            logger.log('VPAID event received :: AdSkipped');\n            if(!adUnit._adSkipped) {\n                adUnit._adSkipped = true;\n                player.trigger('vpaid.AdSkipped');\n                tracker.trackSkip();\n            }\n        });\n\n\n        //minthe2 AdImpression Handler\n        adUnit.on('AdImpression', function() {\n\n            profile.adImpressionTimestamp = new Date().getTime();\n\n\n            if (that.settings.delayExpandUntilVPAIDImpression) {\n                if (profile.adImpressionTimestamp !== 0 && profile.adStartedTimestamp !== 0) {\n                    timer.stopStartAdTimeout();\n                }\n            }\n\n            // if (profile.adImpressionTimestamp !== 0) {//if AdImpression is deliverd without AdStarted\n            //     profile.adLoadedTimestamp = profile.adImpressionTimestamp;\n            // }\n            // if (profile.adStartedTimestamp === 0) {//if AdImpression is deliverd without AdStarted\n            //     profile.adStartedTimestamp = profile.adLoadedTimestamp;\n            // }\n\n            if (that.settings.delayExpandUntilVPAIDImpression && profile.adStartedTimestamp === 0) {\n                logger.info('VPAID event received :: AdImpression');\n            } else {\n                logger.info('VPAID event received :: AdImpression, time = ' + profile.getAdImpressionTime() + ', total time = ' + profile.getTotalTime() + ', time remaining = ' + profile.getRemainingTime('AdImpression'));\n            }\n\n\n            player.trigger('vpaid.AdImpression');\n            tracker.trackImpressions();\n            if(adUnit._adUnit && adUnit._adUnit._creative){\n                var creative = adUnit._adUnit._creative;\n                var creativeIcons = false;\n                if(creative.getAdIcons){\n                    creativeIcons = creative.getAdIcons();\n                }\n                player.trigger({type: 'vpaid.AdIcons', adIcons: creativeIcons});\n            }\n        });\n\n        adUnit.on('AdVideoStart', function() {\n            logger.info('VPAID event received :: AdVideoStart');\n\n            // VIDLA-441 This is definitely when the Ad video has started and all the metadata is ready. AdStarted event may be too early\n            handleAdPlayPause();\n            handleAdProgress();\n\n            player.trigger('vpaid.AdVideoStart');\n            tracker.trackStart();\n            notifyPlayToPlayer();\n            if (that.settings.initialAudio === 'off') {\n                player.muted(true);\n            } else {\n                player.muted(false);\n            }\n            linkVolumeControl();\n\n\n            var controlBarPosition = adUnit.options.controlBarPosition ? adUnit.options.controlBarPosition : \"over\";\n            if (controlBarPosition === \"over\") {\n                var handleUserActive = function() {\n                    logger.debug(\"caught useractive\");\n                    resizeAd(player, adUnit, that.VIEW_MODE, true);\n                    logger.debug(\"did resizeAd\");\n                };\n                var handleUserInActive = function() {\n                    logger.debug(\"caught userinactive\");\n                    if (player.hasClass(\"vjs-paused\") === false || player.paused() === false || that._adUnit._completed === true) {//fix unnecessary resize after pause which can cause bad user experience with transparent controlbar color\n                        resizeAd(player, adUnit, that.VIEW_MODE, true);\n                        logger.debug(\"did resizeAd\");\n                    }\n                };\n                var handleManualUserActive = function() {\n                    logger.debug(\"caught handleManualUserActive\");\n                    setTimeout(function() {\n                        resizeAd(player, adUnit, that.VIEW_MODE, true, \"useractive\");\n                        logger.debug(\"did resizeAd\");\n                    },0);\n                };\n                var handleManualUserInActive = function(e) {\n                    logger.debug(\"caught handleManualUserInActive\");\n                    setTimeout(function() {\n                        resizeAd(player, adUnit, that.VIEW_MODE, true, \"userinactive\");\n                        logger.debug(\"did resizeAd\");\n                    },0);\n                };\n\n                //handle VPAID resize by useractive event from video.js\n                player.on(\"useractive\", handleUserActive);\n\n                //handle VPAID resize by userinactive event from video.js\n                player.on(\"userinactive\", handleUserInActive);\n\n                //handle VPAID resize by useractive event from video.js\n                player.on(\"handleManualUserActive\", handleManualUserActive);\n\n                //handle VPAID resize by userinactive event from video.js\n                player.on(\"handleManualUserInActive\", handleManualUserInActive);\n\n            }\n\n            //VIDLA-2143\n            //to figure out specific creative issue which has 1px of height after AdVideoStart\n            //details here: https://stash.corp.appnexus.com/projects/VIDEO/repos/resources_video-ad-video-player-html5-plugin-vpaid/pull-requests/14/overview\n            resizeAd(player, adUnit, that.VIEW_MODE, true);\n\n            if (isIDevice()) {\n                ChiveFacebookHack();\n            }\n        });\n\n        // VID-3052 This is a temporary hack for FB creative autoplay on chive pages. Please see ticket for details.\n        function ChiveFacebookHack() {\n            var videoSlot = adUnit._adUnit._videoEl;\n            if (adUnit.options.overlayPlayer && adUnit.options.initialPlayback === 'auto' && videoSlot.paused) {\n                setTimeout(function() {\n                    // Overlay Chive hack for Facebook Creative\n                    logger.log('Applying Facebook Chive Hack');\n                    player.muted(true);\n                    that._adUnit.resumeAd();\n                }, 1000);\n            }\n        };\n\n        adUnit.on('AdPlaying', function() {\n            logger.log('VPAID event received :: AdPlaying');\n            timer.stopKillTimeout();\n            player.trigger('vpaid.AdPlaying');\n            tracker.trackResume();\n            notifyPlayToPlayer();\n            player.trigger(\"handleManualUserInActive\");\n        });\n\n        adUnit.on('AdPaused', function() {\n            logger.log('VPAID event received :: AdPaused');\n            timer.stopKillTimeout();\n            player.trigger('vpaid.AdPaused');\n            tracker.trackPause();\n            notifyPauseToPlayer();\n            player.trigger(\"handleManualUserActive\");\n        });\n\n        function notifyPlayToPlayer() {\n            if (that._adUnit && that._adUnit.isPaused()) {\n                that._adUnit._paused = false;\n            }\n            player.trigger('play');\n\n        }\n\n        function notifyPauseToPlayer() {\n            if (that._adUnit) {\n                that._adUnit._paused = true;\n            }\n            player.trigger('pause');\n        }\n\n        adUnit.on('AdVideoFirstQuartile', function() {\n            logger.info('VPAID event received :: AdVideoFirstQuartile');\n            player.trigger('vpaid.AdVideoFirstQuartile');\n            tracker.trackFirstQuartile();\n        });\n\n        adUnit.on('AdVideoMidpoint', function() {\n            logger.info('VPAID event received :: AdVideoMidpoint');\n            player.trigger('vpaid.AdVideoMidpoint');\n            tracker.trackMidpoint();\n        });\n\n        adUnit.on('AdVideoThirdQuartile', function() {\n            logger.info('VPAID event received :: AdVideoThirdQuartile');\n            player.trigger('vpaid.AdVideoThirdQuartile');\n            tracker.trackThirdQuartile();\n        });\n\n        adUnit.on('AdVideoComplete', function() {\n            logger.info('VPAID event received :: AdVideoComplete');\n            player.trigger('vpaid.AdVideoComplete');\n            tracker.trackComplete();\n            that._adUnit._completed = true;\n        });\n\n        adUnit.on('AdClickThru', function(data) {\n            player.trigger('vpaid.AdClickThru');\n        });\n\n        adUnit.on('AdUserAcceptInvitation', function() {\n            player.trigger('vpaid.AdUserAcceptInvitation');\n            tracker.trackAcceptInvitation();\n            tracker.trackAcceptInvitationLinear();\n        });\n\n        adUnit.on('AdUserClose', function() {\n            player.trigger('vpaid.AdUserClose');\n            tracker.trackClose();\n            tracker.trackCloseLinear();\n        });\n\n        adUnit.on('AdUserMinimize', function() {\n            player.trigger('vpaid.AdUserMinimize');\n            tracker.trackCollapse();\n        });\n\n        adUnit.on('AdError', function(message) {\n            timer.stopAdTimeouts();\n            logger.error('VPAID event received :: AdError : message : ' + message);\n            //player.trigger('vast.adError');//TODO jeff's change for VID-583\n            player.trigger('vpaid.AdError');\n            //NOTE: we track errors code 901, as noted in VAST 3.0\n            tracker.trackErrorWithCode(901);\n        });\n\n        adUnit.on('AdVolumeChange', function() {\n            logger.debug('VPAID event received :: AdVolumeChange');\n            player.trigger('vpaid.AdVolumeChange');\n        });\n\n        adUnit.on('AdStopped', function() {\n            logger.info('VPAID event received :: AdStopped');\n            adUnit._adStopped = true;\n            player.trigger('vpaid.AdStopped');\n        });\n\n        var updateViewSize = resizeAd.bind(this, player, adUnit, this.VIEW_MODE);\n        var autoResize = this.settings.autoResize;\n\n        if (autoResize) {\n            dom.addEventListener(window, 'resize', updateViewSize);\n            dom.addEventListener(window, 'orientationchange', updateViewSize);\n        }\n\n        player.on('vast.resize', updateViewSize);\n        player.on('vpaid.pauseAd', pauseAdUnit);\n        player.on('vpaid.resumeAd', resumeAdUnit);\n\n        player.one('vpaid.adEnd', function() {\n            player.off('vast.resize', updateViewSize);\n            player.off('vpaid.pauseAd', pauseAdUnit);\n            player.off('vpaid.resumeAd', resumeAdUnit);\n\n            if (autoResize) {\n                dom.removeEventListener(window, 'resize', updateViewSize);\n                dom.removeEventListener(window, 'orientationchange', updateViewSize);\n            }\n        });\n\n        next(null, adUnit, vastResponse);\n\n        /*** Local Functions ***/\n        function pauseAdUnit() {\n            adUnit.pauseAd(noop);\n        }\n\n        function resumeAdUnit() {\n            adUnit.resumeAd(noop);\n        }\n\n        function isVideoSlotUsed() {\n            var videoSlot = adUnit._adUnit._videoEl;\n            var creative = adUnit._adUnit._creative;\n            var hasSource = videoSlot && videoSlot.src;\n\n            if (videoSlot && !hasSource) {\n                var sources = videoSlot.getElementsByTagName('source');\n                for (var i = 0; i < sources; i++) {\n                    if (sources[i].src) {\n                        hasSource = true;\n                    }\n                }\n            }\n\n            // Ad uses video JS Slot\n            if (!creative || !videoSlot || hasSource) {\n                return true;\n            }\n\n            return false;\n        }\n\n        function linkVolumeControl() {\n            // Ad uses video JS slot. Volume be controlled via Player Framework\n            if (isVideoSlotUsed()) {\n                return;\n            }\n            // for creatives that create own tag set initial volume appropriately\n            adUnit.setAdVolume(that.initVolume, function(error, result) {\n                if (error) {\n                    logger.log('The volume change is not implemented as part of the ad unit');\n                } else {\n                    logger.debug('The volume change is implemented as part of the ad unit');\n                }\n            });\n            // Ad is using its own Video slot. Volume be controlled by setAdVolume\n            player.on('volumechange', updateAdUnitVolume);\n\n            player.one('vpaid.adEnd', function() {\n                player.off('volumechange', updateAdUnitVolume);\n            });\n\n            /*** local functions ***/\n            function updateAdUnitVolume() {\n                var vol;\n                if (player.muted()) {\n                    vol = 0;\n                } else {\n                    that.volume = player.volume() ? player.volume() : that.volume;\n                    vol = that.volume;\n                }\n                adUnit.setAdVolume(vol, logError);\n            }\n        }\n    };\n\n    VPAIDIntegrator.prototype._linkPlayerControls = function(adUnit, vastResponse, next) {\n        var that = this;\n        linkFullScreenControl(this.player, adUnit, this.VIEW_MODE);\n\n        next(null, adUnit, vastResponse);\n\n        /*** Local functions ***/\n\n        function linkFullScreenControl(player, adUnit, VIEW_MODE) {\n            var updateViewSize = resizeAd.bind(this, player, adUnit, VIEW_MODE);\n\n            player.on('fullscreenchange', updateViewSize);\n\n            player.on('fullscreenchange', function() {\n                if (player.paused() || player.hasClass(\"vjs-paused\")) {\n                    player.trigger(\"handleManualUserActive\");\n                }\n            });\n\n            player.one('vpaid.adEnd', function() {\n                player.off('fullscreenchange', updateViewSize);\n            });\n        }\n    };\n\n    //minthe : _startAd\n    VPAIDIntegrator.prototype._startAd = function(adUnit, vastResponse, next) {\n        var self = this;\n        var player = this.player;\n\n        if (self.initAdTimeout) {\n            return;\n        }\n        // VIDLA-245 IAS hack: If AdStarted is received before calling startAd then do not cap it with a timer.\n        if (!adUnit._adStarted) {\n            timer.startStartAdTimeout(function(error) {\n                self._reportTimeout(adUnit, error);\n            });\n        } else {\n            //Just set the timestamp correctly for VIDLA-245\n            profile.startAdTimestamp = new Date().getTime();\n        }\n        adUnit.startAd(function(error) {\n            if (!error) {\n                player.trigger('vast.adStart');\n            }\n        });\n    };\n\n\n    VPAIDIntegrator.prototype._trackError = function trackError(response) {\n        vastUtil.track(response.errorURLMacros, { ERRORCODE: 901 });\n    };\n\n    VPAIDIntegrator.prototype._reportTimeout = function(adUnit, error) {\n        var player = this.player;\n        player.trigger({ type: 'vast.adTimeout', error: error });\n        try {\n            if (adUnit && adUnit._adUnit) {\n                logger.log(\"Calling VPAID stopAd on TIMEOUT\");\n                adUnit._adUnit.stopAd();\n            }\n        } catch (e) {\n            logger.log('VPAID error in calling stopAd on Timeout');\n        }\n    };\n\n    var lastSize = {\n        width: 0,\n        height: 0\n    };\n    function resizeAd(player, adUnit, VIEW_MODE, isAdVideoStart, manualUserActive) {\n\n        var tech = player.el().querySelector('.vjs-tech');\n        var dimension = dom.getDimension(tech);\n        var width = dimension.width;\n        var height = dimension.height;\n        var MODE = player.isFullscreen() ? VIEW_MODE.FULLSCREEN : VIEW_MODE.NORMAL;\n\n        var slot = adUnit._adUnit._el;\n        var videoSlot = adUnit._adUnit._videoEl;\n        var controlBar = player.controlBar;\n        var needToUserActive = player.hasClass(\"vjs-controls-enabled\") && player.hasClass(\"vjs-has-started\") && player.hasClass(\"vjs-paused\");\n\n        if (needToUserActive || player.userActive() || manualUserActive != undefined) {//if video.js's useractive status is true by mousemove\n\n            if (needToUserActive) {\n                manualUserActive = \"useractive\";\n            }\n\n            var controlBarPosition = adUnit.options.controlBarPosition ? adUnit.options.controlBarPosition : \"over\";\n            var currentControlBarHeight = (manualUserActive === \"userinactive\") ? 0 : controlBar.height();\n            var controlBarHeight = (controlBar && controlBarPosition === \"over\") ? currentControlBarHeight : 0;\n\n            if (controlBar && controlBarHeight && player.hasClass(\"vjs-ended\") === false) {\n                height = dimension.height - controlBarHeight;\n            }\n        }\n\n        // (optimization) do nothing if size did not changed\n        if (lastSize.width != width || lastSize.height != height) {\n            // save current size\n            lastSize.width = width;\n            lastSize.height = height;\n\n            //Resize both slot and video slot (Ads could use either or both)\n            if (slot && videoSlot) {\n                slot.style.height = height + 'px';\n                videoSlot.style.height = height + 'px';\n            }\n\n            //VIDLA-2143\n            //To figure out specific creative issue which has 1px of height after AdVideoStart\n            //details here: https://stash.corp.appnexus.com/projects/VIDEO/repos/resources_video-ad-video-player-html5-plugin-vpaid/pull-requests/14/overview\n            if (isAdVideoStart && isAdVideoStart === true) {\n                adUnit.resizeAd(width + 1, height + 1, MODE, logError);\n                adUnit.resizeAd(width, height, MODE, logError);\n            } else {\n                adUnit.resizeAd(width, height, MODE, logError);\n            }\n        }\n    };\n\n    function logError(error) {\n        if (error) {\n            logger.log('ERROR: ' + error.message);\n        }\n    };\n\n    function Ad(adJTree) {\n        if (!(this instanceof Ad)) {\n            return new Ad(adJTree);\n        }\n\n        this.id = adJTree.attr('id');\n        this.sequence = adJTree.attr('sequence');\n\n        if (adJTree.inLine) {\n            this.inLine = new InLine(adJTree.inLine);\n        }\n\n        if (adJTree.wrapper) {\n            this.wrapper = new Wrapper(adJTree.wrapper);\n        }\n    };\n\n    function Creative(creativeJTree) {\n        if (!(this instanceof Creative)) {\n            return new Creative(creativeJTree);\n        }\n\n        this.id = creativeJTree.attr('id');\n        this.sequence = creativeJTree.attr('sequence');\n        this.adId = creativeJTree.attr('adId');\n        this.apiFramework = creativeJTree.attr('apiFramework');\n\n        if (creativeJTree.linear) {\n            this.linear = new Linear(creativeJTree.linear);\n        }\n    };\n\n    function InLine(inlineJTree) {\n        if (!(this instanceof InLine)) {\n            return new InLine(inlineJTree);\n        }\n\n        //Required Fields\n        this.adTitle = xml.keyValue(inlineJTree.adTitle);\n        this.adSystem = xml.keyValue(inlineJTree.adSystem);\n        this.impressions = vastUtil.parseImpressions(inlineJTree.impression);\n        this.creatives = vastUtil.parseCreatives(inlineJTree.creatives);\n\n        //Optional Fields\n        this.description = xml.keyValue(inlineJTree.description);\n        this.advertiser = xml.keyValue(inlineJTree.advertiser);\n        this.surveys = parseSurveys(inlineJTree.survey);\n        this.error = xml.keyValue(inlineJTree.error);\n        this.pricing = xml.keyValue(inlineJTree.pricing);\n        this.extensions = inlineJTree.extensions;\n\n        /*** Local Functions ***/\n        function parseSurveys(inlineSurveys) {\n            if (inlineSurveys) {\n                return transformArray(isArray(inlineSurveys) ? inlineSurveys : [inlineSurveys], function(survey) {\n                    if (isNotEmptyString(survey.keyValue)) {\n                        return {\n                            uri: survey.keyValue,\n                            type: survey.attr('type')\n                        };\n                    }\n\n                    return undefined;\n                });\n            }\n            return [];\n        }\n    };\n\n    function Linear(linearJTree) {\n        if (!(this instanceof Linear)) {\n            return new Linear(linearJTree);\n        }\n\n        //Required Elements\n        this.duration = vastUtil.parseDuration(xml.keyValue(linearJTree.duration));\n        this.mediaFiles = parseMediaFiles(linearJTree.mediaFiles && linearJTree.mediaFiles.mediaFile);\n\n        //Optional fields\n        this.trackingEvents = parseTrackingEvents(linearJTree.trackingEvents && linearJTree.trackingEvents.tracking, this.duration);\n        this.skipoffset = vastUtil.parseOffset(xml.attr(linearJTree, 'skipoffset'), this.duration);\n\n        if (linearJTree.videoClicks) {\n            this.videoClicks = new VideoClicks(linearJTree.videoClicks);\n        }\n\n        if (linearJTree.adParameters) {\n            this.adParameters = xml.keyValue(linearJTree.adParameters);\n\n            if (xml.attr(linearJTree.adParameters, 'xmlEncoded')) {\n                this.adParameters = xml.decode(this.adParameters);\n            }\n        }\n\n        /*** Local functions ***/\n        function parseTrackingEvents(trackingEvents, duration) {\n            var trackings = [];\n            if (isDefined(trackingEvents)) {\n                trackingEvents = isArray(trackingEvents) ? trackingEvents : [trackingEvents];\n                trackingEvents.forEach(function(trackingData) {\n                    trackings.push(new TrackingEvent(trackingData, duration));\n                });\n            }\n            return trackings;\n        }\n\n        function parseMediaFiles(mediaFilesJxonTree) {\n            var mediaFiles = [];\n            if (isDefined(mediaFilesJxonTree)) {\n                mediaFilesJxonTree = isArray(mediaFilesJxonTree) ? mediaFilesJxonTree : [mediaFilesJxonTree];\n\n                mediaFilesJxonTree.forEach(function(mfData) {\n                    mediaFiles.push(new MediaFile(mfData));\n                });\n            }\n            return mediaFiles;\n        }\n    };\n\n    function MediaFile(mediaFileJTree) {\n        if (!(this instanceof MediaFile)) {\n            return new MediaFile(mediaFileJTree);\n        }\n\n        //Required attributes\n        this.src = xml.keyValue(mediaFileJTree);\n        this.delivery = mediaFileJTree.attr('delivery');\n        this.type = mediaFileJTree.attr('type');\n        this.width = mediaFileJTree.attr('width');\n        this.height = mediaFileJTree.attr('height');\n\n        //Optional attributes\n        this.codec = mediaFileJTree.attr('codec');\n        this.id = mediaFileJTree.attr('id');\n        this.bitrate = mediaFileJTree.attr('bitrate');\n        this.minBitrate = mediaFileJTree.attr('minBitrate');\n        this.maxBitrate = mediaFileJTree.attr('maxBitrate');\n        this.scalable = mediaFileJTree.attr('scalable');\n        this.maintainAspectRatio = mediaFileJTree.attr('maintainAspectRatio');\n        this.apiFramework = mediaFileJTree.attr('apiFramework');\n    };\n\n    function TrackingEvent(trackingJTree, duration) {\n        if (!(this instanceof TrackingEvent)) {\n            return new TrackingEvent(trackingJTree, duration);\n        }\n\n        this.name = trackingJTree.attr('event');\n        this.uri = xml.keyValue(trackingJTree);\n\n        if ('progress' === this.name) {\n            this.offset = vastUtil.parseOffset(trackingJTree.attr('offset'), duration);\n        }\n    }\n\n    ;\n\n    //minthe : VASTClient initialize\n    function VASTClient(options) {\n\n        if (!(this instanceof VASTClient)) {\n            return new VASTClient(options);\n        }\n        var defaultOptions = {\n            WRAPPER_LIMIT: 5\n        };\n\n        options = options || {};\n        this.settings = extend({}, options, defaultOptions);\n        this.errorURLMacros = [];\n    }\n\n    VASTClient.prototype.getVASTResponse = function getVASTResponse(adTagUrl, callback) {\n        var that = this;\n\n        var error = sanityCheck(adTagUrl, callback);\n        if (error) {\n            if (isFunction(callback)) {\n                return callback(error);\n            }\n            throw error;\n        }\n\n        async.waterfall([\n                this._getVASTAd.bind(this, adTagUrl),\n                buildVASTResponse\n            ],\n            callback);\n\n        /*** Local functions ***/\n        function buildVASTResponse(adsChain, cb) {\n            try {\n                var response = that._buildVASTResponse(adsChain);\n                cb(null, response);\n            } catch (e) {\n                cb(e);\n            }\n        }\n\n        function sanityCheck(adTagUrl, cb) {\n            if (!adTagUrl) {\n                return new VASTError('on VASTClient.getVASTResponse, missing ad tag URL');\n            }\n\n            if (!isFunction(cb)) {\n                return new VASTError('on VASTClient.getVASTResponse, missing callback function');\n            }\n        }\n    };\n\n    VASTClient.prototype._getVASTAd = function(adTagUrl, callback) {\n        var that = this;\n\n        getAdWaterfall(adTagUrl, function(error, vastTree) {\n            var waterfallAds = vastTree && isArray(vastTree.ads) ? vastTree.ads : null;\n            if (error) {\n                that._trackError(error, waterfallAds);\n                return callback(error, waterfallAds);\n            }\n\n            getAd(waterfallAds.shift(), [], waterfallHandler);\n\n            /*** Local functions ***/\n            function waterfallHandler(error, adChain) {\n                if (error) {\n                    that._trackError(error, adChain);\n                    if (waterfallAds.length > 0) {\n                        getAd(waterfallAds.shift(), [], waterfallHandler);\n                    } else {\n                        callback(error, adChain);\n                    }\n                } else {\n                    callback(null, adChain);\n                }\n            }\n        });\n\n        /*** Local functions ***/\n        function getAdWaterfall(adTagUrl, callback) {\n            var requestVastXML = that._requestVASTXml.bind(that, adTagUrl);\n            async.waterfall([\n                requestVastXML,\n                buildVastWaterfall\n            ], callback);\n        }\n\n        function buildVastWaterfall(xmlStr, callback) {\n            var vastTree;\n            try {\n                vastTree = xml.toJXONTree(xmlStr);\n                vastTree.ads = isArray(vastTree.ad) ? vastTree.ad : [vastTree.ad];\n                callback(validateVASTTree(vastTree), vastTree);\n            } catch (e) {\n                callback(new VASTError(\"on VASTClient.getVASTAd.buildVastWaterfall, error parsing xml\", 100), null);\n            }\n        }\n\n        function validateVASTTree(vastTree) {\n            var vastVersion = xml.attr(vastTree, 'version');\n\n            if (!vastTree.ad) {\n                return new VASTError('on VASTClient.getVASTAd.validateVASTTree, no Ad in VAST tree', 303);\n            }\n\n            if (vastVersion && (vastVersion != 3 && vastVersion != 2)) {\n                return new VASTError('on VASTClient.getVASTAd.validateVASTTree, not supported VAST version \"' + vastVersion + '\"', 102);\n            }\n\n            return null;\n        }\n\n        function getAd(adTagUrl, adChain, callback) {\n            if (adChain.length >= that.WRAPPER_LIMIT) {\n                return callback(new VASTError(\"on VASTClient.getVASTAd.getAd, players wrapper limit reached (the limit is \" + that.WRAPPER_LIMIT + \")\", 302), adChain);\n            }\n\n            async.waterfall([\n                function(next) {\n                    if (isString(adTagUrl)) {\n                        requestVASTAd(adTagUrl, next);\n                    } else {\n                        next(null, adTagUrl);\n                    }\n                },\n                buildAd\n            ], function(error, ad) {\n                if (ad) {\n                    adChain.push(ad);\n                }\n\n                if (error) {\n                    return callback(error, adChain);\n                }\n\n                if (ad.wrapper) {\n                    return getAd(ad.wrapper.VASTAdTagURI, adChain, callback);\n                }\n\n                return callback(null, adChain);\n            });\n        }\n\n        function buildAd(adJxonTree, callback) {\n            try {\n                var ad = new Ad(adJxonTree);\n                callback(validateAd(ad), ad);\n            } catch (e) {\n                callback(new VASTError('on VASTClient.getVASTAd.buildAd, error parsing xml', 100), null);\n            }\n        }\n\n        function validateAd(ad) {\n            var wrapper = ad.wrapper;\n            var inLine = ad.inLine;\n            var errMsgPrefix = 'on VASTClient.getVASTAd.validateAd, ';\n\n            if (inLine && wrapper) {\n                return new VASTError(errMsgPrefix + \"InLine and Wrapper both found on the same Ad\", 101);\n            }\n\n            if (!inLine && !wrapper) {\n                return new VASTError(errMsgPrefix + \"nor wrapper nor inline elements found on the Ad\", 101);\n            }\n\n            if (inLine && inLine.creatives.length === 0) {\n                return new VASTError(errMsgPrefix + \"missing creative in InLine element\", 101);\n            }\n\n            if (wrapper && !wrapper.VASTAdTagURI) {\n                return new VASTError(errMsgPrefix + \"missing 'VASTAdTagURI' in wrapper\", 101);\n            }\n        }\n\n        function requestVASTAd(adTagUrl, callback) {\n            that._requestVASTXml(adTagUrl, function(error, xmlStr) {\n                if (error) {\n                    return callback(error);\n                }\n                try {\n                    var vastTree = xml.toJXONTree(xmlStr);\n                    callback(validateVASTTree(vastTree), vastTree.ad);\n                } catch (e) {\n                    callback(new VASTError(\"on VASTClient.getVASTAd.requestVASTAd, error parsing xml\", 100));\n                }\n            });\n        }\n    };\n\n    VASTClient.prototype._requestVASTXml = function requestVASTXml(adTagUrl, callback) {\n        try {\n            if (isFunction(adTagUrl)) {\n                adTagUrl(requestHandler);\n            } else {\n                http.get(adTagUrl, requestHandler, {\n                    withCredentials: true\n                });\n            }\n        } catch (e) {\n            callback(e);\n        }\n\n        /*** Local functions ***/\n        function requestHandler(error, response, status) {\n            if (error) {\n                var errMsg = isDefined(status) ?\n                    \"on VASTClient.requestVastXML, HTTP request error with status '\" + status + \"'\" :\n                    \"on VASTClient.requestVastXML, Error getting the the VAST XML with he passed adTagXML fn\";\n                return callback(new VASTError(errMsg, 301), null);\n            }\n\n            callback(null, response);\n        }\n    };\n\n    VASTClient.prototype._buildVASTResponse = function buildVASTResponse(adsChain) {\n        var response = new VASTResponse();\n        addAdsToResponse(response, adsChain);\n        validateResponse(response);\n\n        return response;\n\n        //*** Local function ****\n        function addAdsToResponse(response, ads) {\n            ads.forEach(function(ad) {\n                response.addAd(ad);\n            });\n        }\n\n        function validateResponse(response) {\n            var progressEvents = response.trackingEvents.progress;\n\n            if (!response.hasLinear()) {\n                throw new VASTError(\"on VASTClient._buildVASTResponse, Received an Ad type that is not supported\", 200);\n            }\n\n            if (response.duration === undefined) {\n                throw new VASTError(\"on VASTClient._buildVASTResponse, Missing duration field in VAST response\", 101);\n            }\n\n            if (progressEvents) {\n                progressEvents.forEach(function(progressEvent) {\n                    if (!isNumber(progressEvent.offset)) {\n                        throw new VASTError(\"on VASTClient._buildVASTResponse, missing or wrong offset attribute on progress tracking event\", 101);\n                    }\n                });\n            }\n        }\n    };\n\n    VASTClient.prototype._trackError = function(error, adChain) {\n        if (!isArray(adChain) || adChain.length === 0) { //There is nothing to track\n            return;\n        }\n\n        var errorURLMacros = [];\n        adChain.forEach(addErrorUrlMacros);\n        vastUtil.track(errorURLMacros, { ERRORCODE: error.code || 900 }); //900 <== Undefined error\n\n        /*** Local functions  ***/\n        function addErrorUrlMacros(ad) {\n            if (ad.wrapper && ad.wrapper.error) {\n                errorURLMacros.push(ad.wrapper.error);\n            }\n\n            if (ad.inLine && ad.inLine.error) {\n                errorURLMacros.push(ad.inLine.error);\n            }\n        }\n    };\n\n    ;\n    var VAST = {};\n\n    function VASTError(message, code) {\n        this.message = 'VAST Error: ' + (message || '');\n        if (code) {\n            this.code = code;\n        }\n    }\n\n    VASTError.prototype = new Error();\n    VASTError.prototype.name = \"VAST Error\";;\n    /**\n     * Inner helper class that deals with the logic of the individual steps needed to setup an ad in the player.\n     *\n     * @param player {object} instance of the player that will play the ad. It assumes that the videojs-contrib-ads plugin\n     *                        has been initialized when you use its utility functions.\n     *\n     * @constructor\n     */\n    function VASTIntegrator(player) {\n        if (!(this instanceof VASTIntegrator)) {\n            return new VASTIntegrator(player);\n        }\n\n        this.player = player;\n    }\n\n    VASTIntegrator.prototype.playAd = function playAd(vastResponse, callback) {\n        var that = this;\n        callback = callback || noop;\n\n        if (!(vastResponse instanceof VASTResponse)) {\n            return callback(new VASTError('On VASTIntegrator, missing required VASTResponse'));\n        }\n\n        async.waterfall([\n            function(next) {\n                next(null, vastResponse);\n            },\n            this._selectAdSource.bind(this),\n            this._createVASTTracker.bind(this),\n            this._addClickThrough.bind(this),\n            this._setupEvents.bind(this),\n            this._playSelectedAd.bind(this)\n        ], function(error, response) {\n            if (error && response) {\n                that._trackError(error, response);\n            }\n            callback(error, response);\n        });\n\n        this._adUnit = {\n            _src: null,\n            type: 'VAST',\n            pauseAd: function() {\n                that.player.pause(true); //video.js player pause\n            },\n\n            resumeAd: function() {\n                that.player.play(true);\n            },\n\n            isPaused: function() {\n                return that.player.paused(true);\n            },\n\n            getSrc: function() {\n                return this._src;\n            }\n        };\n\n        return this._adUnit;\n    };\n\n    VASTIntegrator.prototype._selectAdSource = function selectAdSource(response, callback) {\n        var source;\n\n        var playerWidth = dom.getDimension(this.player.el()).width;\n        response.mediaFiles.sort(function compareTo(a, b) {\n            var deltaA = Math.abs(playerWidth - a.width);\n            var deltaB = Math.abs(playerWidth - b.width);\n            return deltaA - deltaB;\n        });\n\n        source = this.player.selectSource(response.mediaFiles).source;\n\n        if (source) {\n            if (this._adUnit) {\n                this._adUnit._src = source;\n            }\n            return callback(null, source, response);\n        }\n\n        // code 403 <== Couldn't find MediaFile that is supported by this video player\n        callback(new VASTError(\"Could not find Ad mediafile supported by this player\", 403), response);\n    };\n\n    VASTIntegrator.prototype._createVASTTracker = function createVASTTracker(adMediaFile, response, callback) {\n        try {\n            callback(null, adMediaFile, new VASTTracker(adMediaFile.src, response), response);\n        } catch (e) {\n            callback(e, response);\n        }\n    };\n\n    VASTIntegrator.prototype._setupEvents = function setupEvents(adMediaFile, tracker, response, callback) {\n        var previouslyMuted;\n        var player = this.player;\n        player.on('fullscreenchange', trackFullscreenChange);\n        player.on('vast.adStart', trackImpressions);\n        player.on('pause', trackPause);\n        player.on('timeupdate', trackProgress);\n        player.on('volumechange', trackVolumeChange);\n\n        playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], unbindEvents);\n        playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel', 'vast.adSkip'], function(evt) {\n            if (evt.type === 'vast.adEnd') {\n                tracker.trackComplete();\n            }\n        });\n\n        return callback(null, adMediaFile, response);\n\n        /*** Local Functions ***/\n        function unbindEvents() {\n            player.off('fullscreenchange', trackFullscreenChange);\n            player.off('vast.adStart', trackImpressions);\n            player.off('pause', trackPause);\n            player.off('timeupdate', trackProgress);\n            player.off('volumechange', trackVolumeChange);\n        }\n\n        function trackFullscreenChange() {\n            if (player.isFullscreen()) {\n                tracker.trackFullscreen();\n            } else {\n                tracker.trackExitFullscreen();\n            }\n        }\n\n        function trackPause() {\n            //NOTE: whenever a video ends the video Element triggers a 'pause' event before the 'ended' event.\n            //      We should not track this pause event because it makes the VAST tracking confusing again we use a\n            //      Threshold of 2 seconds to prevent false positives on IOS.\n            if (Math.abs(player.duration() - player.currentTime()) < 2) {\n                return;\n            }\n\n            tracker.trackPause();\n            playerUtils.once(player, ['play', 'vast.adEnd', 'vast.adsCancel'], function(evt) {\n                if (evt.type === 'play') {\n                    tracker.trackResume();\n                }\n            });\n        }\n\n        function trackProgress() {\n            var currentTimeInMs = player.currentTime() * 1000;\n            tracker.trackProgress(currentTimeInMs);\n        }\n\n        function trackImpressions() {\n            tracker.trackImpressions();\n            tracker.trackCreativeView();\n        }\n\n        function trackVolumeChange() {\n            var muted = player.muted();\n            if (muted) {\n                tracker.trackMute();\n            } else if (previouslyMuted) {\n                tracker.trackUnmute();\n            }\n            previouslyMuted = muted;\n        }\n    };\n\n    VASTIntegrator.prototype._addClickThrough = function addClickThrough(mediaFile, tracker, response, callback) {\n        var player = this.player;\n        var blocker = createClickThroughBlocker(player, tracker, response);\n        var updateBlocker = updateBlockerURL.bind(this, blocker, response, player);\n\n        player.el().insertBefore(blocker, player.controlBar.el());\n        player.on('timeupdate', updateBlocker);\n        playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], removeBlocker);\n\n        return callback(null, mediaFile, tracker, response);\n\n        /*** Local Functions ***/\n\n        function createClickThroughBlocker(player, tracker, response) {\n            var blocker = window.document.createElement(\"a\");\n            var clickThroughMacro = response.clickThrough;\n\n            dom.addClass(blocker, 'vast-blocker');\n            blocker.href = generateClickThroughURL(clickThroughMacro, player);\n\n            if (isString(clickThroughMacro)) {\n                blocker.target = \"_blank\";\n            }\n\n            blocker.onclick = function(e) {\n                if (player.paused()) {\n                    player.play();\n\n                    //We prevent event propagation to avoid problems with the player's normal pause mechanism\n                    if (window.Event.prototype.stopPropagation !== undefined) {\n                        e.stopPropagation();\n                    }\n                    return false;\n                }\n\n                player.pause();\n                tracker.trackClick();\n            };\n\n            return blocker;\n        }\n\n        function updateBlockerURL(blocker, response, player) {\n            blocker.href = generateClickThroughURL(response.clickThrough, player);\n        }\n\n        function generateClickThroughURL(clickThroughMacro, player) {\n            var variables = {\n                ASSETURI: mediaFile.src,\n                CONTENTPLAYHEAD: vastUtil.formatProgress(player.currentTime() * 1000)\n            };\n\n            return clickThroughMacro ? vastUtil.parseURLMacro(clickThroughMacro, variables) : '#';\n        }\n\n        function removeBlocker() {\n            player.off('timeupdate', updateBlocker);\n            dom.remove(blocker);\n        }\n    };\n\n    VASTIntegrator.prototype._playSelectedAd = function playSelectedAd(source, response, callback) {\n        var player = this.player;\n\n        player.preload(\"auto\"); //without preload=auto the durationchange event is never fired\n        player.src(source);\n\n        playerUtils.once(player, ['durationchange', 'error', 'vast.adsCancel'], function(evt) {\n            if (evt.type === 'durationchange') {\n                playAd();\n            } else if (evt.type === 'error') {\n                callback(new VASTError(\"on VASTIntegrator, Player is unable to play the Ad\", 400), response);\n            }\n            //NOTE: If the ads get canceled we do nothing/\n        });\n\n        /**** local functions ******/\n        function playAd() {\n            player.play();\n            playerUtils.once(player, ['playing', 'vast.adsCancel'], function(evt) {\n                if (evt.type === 'vast.adsCancel') {\n                    return;\n                }\n\n                player.trigger('vast.adStart');\n\n                playerUtils.once(player, ['ended', 'vast.adsCancel', 'vast.adSkip'], function(evt) {\n                    if (evt.type === 'ended' || evt.type === 'vast.adSkip') {\n                        callback(null, response);\n                    }\n                    //NOTE: if the ads get cancel we do nothing\n                });\n            });\n        }\n    };\n\n    VASTIntegrator.prototype._trackError = function trackError(error, response) {\n        vastUtil.track(response.errorURLMacros, { ERRORCODE: error.code || 900 });\n    };\n\n    ;\n    (function(window) {\n        \"use strict\";\n\n\n        function VASTResponse() {\n            if (!(this instanceof VASTResponse)) {\n                return new VASTResponse();\n            }\n\n            this._linearAdded = false;\n            this.ads = [];\n            this.errorURLMacros = [];\n            this.impressions = [];\n            this.clickTrackings = [];\n            this.customClicks = [];\n            this.trackingEvents = {};\n            this.mediaFiles = [];\n            this.clickThrough = undefined;\n            this.adTitle = '';\n            this.duration = undefined;\n            this.skipoffset = undefined;\n        }\n\n        VASTResponse.prototype.addAd = function(ad) {\n            var inLine, wrapper;\n\n            if (ad instanceof Ad) {\n                inLine = ad.inLine;\n                wrapper = ad.wrapper;\n\n                this.ads.push(ad);\n\n                if (inLine) {\n                    this._addInLine(inLine);\n                }\n\n                if (wrapper) {\n                    this._addWrapper(wrapper);\n                }\n            }\n        };\n\n        VASTResponse.prototype._addErrorTrackUrl = function(error) {\n            var errorURL = error instanceof xml.JXONTree ? xml.keyValue(error) : error;\n            if (errorURL) {\n                this.errorURLMacros.push(errorURL);\n            }\n        };\n\n        VASTResponse.prototype._addImpressions = function(impressions) {\n            isArray(impressions) && appendToArray(this.impressions, impressions);\n        };\n\n        VASTResponse.prototype._addClickThrough = function(clickThrough) {\n            if (isNotEmptyString(clickThrough)) {\n                this.clickThrough = clickThrough;\n            }\n        };\n\n        VASTResponse.prototype._addClickTrackings = function(clickTrackings) {\n            isArray(clickTrackings) && appendToArray(this.clickTrackings, clickTrackings);\n        };\n\n        VASTResponse.prototype._addCustomClicks = function(customClicks) {\n            isArray(customClicks) && appendToArray(this.customClicks, customClicks);\n        };\n\n        VASTResponse.prototype._addTrackingEvents = function(trackingEvents) {\n            var eventsMap = this.trackingEvents;\n\n            if (trackingEvents) {\n                trackingEvents = isArray(trackingEvents) ? trackingEvents : [trackingEvents];\n                trackingEvents.forEach(function(trackingEvent) {\n                    if (!eventsMap[trackingEvent.name]) {\n                        eventsMap[trackingEvent.name] = [];\n                    }\n                    eventsMap[trackingEvent.name].push(trackingEvent);\n                });\n            }\n        };\n\n        VASTResponse.prototype._addTitle = function(title) {\n            if (isNotEmptyString(title)) {\n                this.adTitle = title;\n            }\n        };\n\n        VASTResponse.prototype._addDuration = function(duration) {\n            if (isNumber(duration)) {\n                this.duration = duration;\n            }\n        };\n\n        VASTResponse.prototype._addVideoClicks = function(videoClicks) {\n            if (videoClicks instanceof VideoClicks) {\n                this._addClickThrough(videoClicks.clickThrough);\n                this._addClickTrackings(videoClicks.clickTrackings);\n                this._addCustomClicks(videoClicks.customClicks);\n            }\n        };\n\n        VASTResponse.prototype._addMediaFiles = function(mediaFiles) {\n            isArray(mediaFiles) && appendToArray(this.mediaFiles, mediaFiles);\n        };\n\n        VASTResponse.prototype._addSkipoffset = function(offset) {\n            if (offset) {\n                this.skipoffset = offset;\n            }\n        };\n\n        VASTResponse.prototype._addAdParameters = function(adParameters) {\n            if (adParameters) {\n                this.adParameters = adParameters;\n            }\n        };\n\n        VASTResponse.prototype._addLinear = function(linear) {\n            if (linear instanceof Linear) {\n                this._addDuration(linear.duration);\n                this._addTrackingEvents(linear.trackingEvents);\n                this._addVideoClicks(linear.videoClicks);\n                this._addMediaFiles(linear.mediaFiles);\n                this._addSkipoffset(linear.skipoffset);\n                this._addAdParameters(linear.adParameters);\n                this._linearAdded = true;\n            }\n        };\n\n        VASTResponse.prototype._addInLine = function(inLine) {\n            var that = this;\n\n            if (inLine instanceof InLine) {\n                this._addTitle(inLine.adTitle);\n                this._addErrorTrackUrl(inLine.error);\n                this._addImpressions(inLine.impressions);\n\n                inLine.creatives.forEach(function(creative) {\n                    if (creative.linear) {\n                        that._addLinear(creative.linear);\n                    }\n                });\n            }\n        };\n\n        VASTResponse.prototype._addWrapper = function(wrapper) {\n            var that = this;\n\n            if (wrapper instanceof Wrapper) {\n                this._addErrorTrackUrl(wrapper.error);\n                this._addImpressions(wrapper.impressions);\n\n                wrapper.creatives.forEach(function(creative) {\n                    var linear = creative.linear;\n                    if (linear) {\n                        that._addVideoClicks(linear.videoClicks);\n                        that.clickThrough = undefined; //We ensure that no clickThrough has been added\n                        that._addTrackingEvents(linear.trackingEvents);\n                    }\n                });\n            }\n        };\n\n        VASTResponse.prototype.hasLinear = function() {\n            return this._linearAdded;\n        };\n\n        function appendToArray(array, items) {\n            items.forEach(function(item) {\n                array.push(item);\n            });\n        }\n\n        window.VASTResponse = VASTResponse;\n    })(window);\n\n    ;\n\n    function VASTTracker(assetURI, vastResponse) {\n        if (!(this instanceof VASTTracker)) {\n            return new VASTTracker(assetURI, vastResponse);\n        }\n\n        sanityCheck(assetURI, vastResponse);\n        this.response = vastResponse;\n        this.assetURI = assetURI;\n        this.progress = 0;\n        this.quartiles = {\n            firstQuartile: { tracked: false, time: Math.round(25 * vastResponse.duration) / 100 },\n            midpoint: { tracked: false, time: Math.round(50 * vastResponse.duration) / 100 },\n            thirdQuartile: { tracked: false, time: Math.round(75 * vastResponse.duration) / 100 }\n        };\n\n        /*** Local Functions ***/\n        function sanityCheck(assetURI, vastResponse) {\n            if (!isString(assetURI) || isEmptyString(assetURI)) {\n                throw new VASTError('on VASTTracker constructor, missing required the URI of the ad asset being played');\n            }\n\n            if (!(vastResponse instanceof VASTResponse)) {\n                throw new VASTError('on VASTTracker constructor, missing required VAST response');\n            }\n        }\n    }\n\n    VASTTracker.prototype.trackURLs = function trackURLs(urls, variables) {\n        if (isArray(urls) && urls.length > 0) {\n            variables = extend({\n                ASSETURI: this.assetURI,\n                CONTENTPLAYHEAD: vastUtil.formatProgress(this.progress)\n            }, variables || {});\n\n            vastUtil.track(urls, variables);\n        }\n    };\n\n    VASTTracker.prototype.trackEvent = function trackEvent(eventName, trackOnce) {\n        this.trackURLs(getEventUris(this.response.trackingEvents[eventName]));\n        if (trackOnce) {\n            this.response.trackingEvents[eventName] = undefined;\n        }\n\n        /*** Local function ***/\n        function getEventUris(trackingEvents) {\n            var uris;\n\n            if (trackingEvents) {\n                uris = [];\n                trackingEvents.forEach(function(event) {\n                    uris.push(event.uri);\n                });\n            }\n            return uris;\n        }\n    };\n\n    VASTTracker.prototype.trackProgress = function trackProgress(newProgressInMs) {\n        var events = [];\n        var ONCE = true;\n        var ALWAYS = false;\n        var trackingEvents = this.response.trackingEvents;\n\n        if (isNumber(newProgressInMs)) {\n            addTrackEvent('start', ONCE, newProgressInMs > 0);\n            addTrackEvent('rewind', ALWAYS, hasRewound(this.progress, newProgressInMs));\n            addQuartileEvents.call(this, newProgressInMs);\n            trackProgressEvents.call(this, newProgressInMs);\n            trackEvents.call(this);\n            this.progress = newProgressInMs;\n        }\n\n        /*** Local function ***/\n        function hasRewound(currentProgress, newProgress) {\n            var REWIND_THRESHOLD = 3000; //IOS video clock is very unreliable and we need a 3 seconds threshold to ensure that there was a rewind an that it was on purpose.\n            return currentProgress > newProgressInMs && Math.abs(newProgress - currentProgress) > REWIND_THRESHOLD;\n        }\n\n        function addTrackEvent(eventName, trackOnce, canBeAdded) {\n            if (trackingEvents[eventName] && canBeAdded) {\n                events.push({\n                    name: eventName,\n                    trackOnce: !!trackOnce\n                });\n            }\n        }\n\n        function addQuartileEvents(progress) {\n            var quartiles = this.quartiles;\n            var firstQuartile = this.quartiles.firstQuartile;\n            var midpoint = this.quartiles.midpoint;\n            var thirdQuartile = this.quartiles.thirdQuartile;\n\n            if (!firstQuartile.tracked) {\n                trackQuartile('firstQuartile', progress);\n            } else if (!midpoint.tracked) {\n                trackQuartile('midpoint', progress);\n            } else {\n                trackQuartile('thirdQuartile', progress);\n            }\n\n            /*** Local function ***/\n            function trackQuartile(quartileName, progress) {\n                var quartile = quartiles[quartileName];\n                if (canBeTracked(quartile, progress)) {\n                    quartile.tracked = true;\n                    addTrackEvent(quartileName, ONCE, true);\n                }\n            }\n        }\n\n        function canBeTracked(quartile, progress) {\n            var quartileTime = quartile.time;\n            //We only fire the quartile event if the progress is bigger than the quartile time by 5 seconds at most.\n            return progress >= quartileTime && progress <= (quartileTime + 5000);\n        }\n\n        function trackProgressEvents(progress) {\n            if (!isArray(trackingEvents.progress)) {\n                return; //Nothing to track\n            }\n\n            var pendingProgressEvts = [];\n            var that = this;\n\n            trackingEvents.progress.forEach(function(evt) {\n                if (evt.offset <= progress) {\n                    that.trackURLs([evt.uri]);\n                } else {\n                    pendingProgressEvts.push(evt);\n                }\n            });\n            trackingEvents.progress = pendingProgressEvts;\n        }\n\n        function trackEvents() {\n            events.forEach(function(event) {\n                this.trackEvent(event.name, event.trackOnce);\n            }, this);\n        }\n    };\n\n    [\n        'rewind',\n        'fullscreen',\n        'exitFullscreen',\n        'pause',\n        'resume',\n        'mute',\n        'unmute',\n        'acceptInvitation',\n        'acceptInvitationLinear',\n        'collapse',\n        'expand'\n    ].forEach(function(eventName) {\n        VASTTracker.prototype['track' + capitalize(eventName)] = function() {\n            this.trackEvent(eventName);\n        };\n    });\n\n    [\n        'start',\n        'skip',\n        'close',\n        'closeLinear'\n    ].forEach(function(eventName) {\n        VASTTracker.prototype['track' + capitalize(eventName)] = function() {\n            this.trackEvent(eventName, true);\n        };\n    });\n\n    [\n        'firstQuartile',\n        'midpoint',\n        'thirdQuartile'\n    ].forEach(function(quartile) {\n        VASTTracker.prototype['track' + capitalize(quartile)] = function() {\n            this.quartiles[quartile].tracked = true;\n            this.trackEvent(quartile, true);\n        };\n    });\n\n    VASTTracker.prototype.trackComplete = function() {\n        if (this.quartiles.thirdQuartile.tracked) {\n            this.trackEvent('complete', true);\n        }\n    };\n\n    VASTTracker.prototype.trackErrorWithCode = function trackErrorWithCode(errorcode) {\n        if (isNumber(errorcode)) {\n            this.trackURLs(this.response.errorURLMacros, { ERRORCODE: errorcode });\n        }\n    };\n\n    VASTTracker.prototype.trackImpressions = function trackImpressions() {\n        this.trackURLs(this.response.impressions);\n    };\n\n    VASTTracker.prototype.trackCreativeView = function trackCreativeView() {\n        this.trackEvent('creativeView');\n    };\n\n    VASTTracker.prototype.trackClick = function trackClick() {\n        this.trackURLs(this.response.clickTrackings);\n    };\n\n    ;\n\n    function VideoClicks(videoClickJTree) {\n        if (!(this instanceof VideoClicks)) {\n            return new VideoClicks(videoClickJTree);\n        }\n\n        this.clickThrough = xml.keyValue(videoClickJTree.clickThrough);\n        this.clickTrackings = parseClickTrackings(videoClickJTree.clickTracking);\n        this.customClicks = parseClickTrackings(videoClickJTree.customClick);\n\n        /*** Local functions ***/\n        function parseClickTrackings(trackingData) {\n            var clickTrackings = [];\n            if (trackingData) {\n                trackingData = isArray(trackingData) ? trackingData : [trackingData];\n                trackingData.forEach(function(clickTrackingData) {\n                    clickTrackings.push(xml.keyValue(clickTrackingData));\n                });\n            }\n            return clickTrackings;\n        }\n    };\n\n    function Wrapper(wrapperJTree) {\n        if (!(this instanceof Wrapper)) {\n            return new Wrapper(wrapperJTree);\n        }\n\n        //Required elements\n        this.adSystem = xml.keyValue(wrapperJTree.adSystem);\n        this.impressions = vastUtil.parseImpressions(wrapperJTree.impression);\n        this.VASTAdTagURI = xml.keyValue(wrapperJTree.vASTAdTagURI);\n\n        //Optional elements\n        this.creatives = vastUtil.parseCreatives(wrapperJTree.creatives);\n        this.error = xml.keyValue(wrapperJTree.error);\n        this.extensions = wrapperJTree.extensions;\n\n        //Optional attrs\n        this.followAdditionalWrappers = isDefined(xml.attr(wrapperJTree, 'followAdditionalWrappers')) ? xml.attr(wrapperJTree, 'followAdditionalWrappers') : true;\n        this.allowMultipleAds = xml.attr(wrapperJTree, 'allowMultipleAds');\n        this.fallbackOnNoAd = xml.attr(wrapperJTree, 'fallbackOnNoAd');\n    }\n\n\n    ;\n    \"use strict\";\n\n    var vastUtil = {\n\n        track: function track(URLMacros, variables) {\n            var sources = vastUtil.parseURLMacros(URLMacros, variables);\n            var trackImgs = [];\n            sources.forEach(function(src) {\n                var img = new Image();\n                img.src = src;\n                trackImgs.push(img);\n            });\n            return trackImgs;\n        },\n\n        parseURLMacros: function parseMacros(URLMacros, variables) {\n            var parsedURLs = [];\n\n            variables = variables || {};\n\n            if (!(variables[\"CACHEBUSTING\"])) {\n                variables[\"CACHEBUSTING\"] = Math.round(Math.random() * 1.0e+10);\n            }\n\n            URLMacros.forEach(function(URLMacro) {\n                parsedURLs.push(vastUtil._parseURLMacro(URLMacro, variables));\n            });\n\n            return parsedURLs;\n        },\n\n        parseURLMacro: function parseMacro(URLMacro, variables) {\n            variables = variables || {};\n\n            if (!(variables[\"CACHEBUSTING\"])) {\n                variables[\"CACHEBUSTING\"] = Math.round(Math.random() * 1.0e+10);\n            }\n\n            return vastUtil._parseURLMacro(URLMacro, variables);\n        },\n\n        _parseURLMacro: function parseMacro(URLMacro, variables) {\n            variables = variables || {};\n\n            forEach(variables, function(value, key) {\n                URLMacro = URLMacro.replace(new RegExp(\"\\\\[\" + key + \"\\\\\\]\", 'gm'), value);\n            });\n\n            return URLMacro;\n        },\n\n        parseDuration: function parseDuration(durationStr) {\n            var durationRegex = /(\\d\\d):(\\d\\d):(\\d\\d)(\\.(\\d\\d\\d))?/;\n            var match, durationInMs;\n\n            if (isString(durationStr)) {\n                match = durationStr.match(durationRegex);\n                if (match) {\n                    durationInMs = parseHoursToMs(match[1]) + parseMinToMs(match[2]) + parseSecToMs(match[3]) + parseInt(match[5] || 0);\n                }\n            }\n\n            return isNaN(durationInMs) ? null : durationInMs;\n\n            /*** local functions ***/\n            function parseHoursToMs(hourStr) {\n                return parseInt(hourStr, 10) * 60 * 60 * 1000;\n            }\n\n            function parseMinToMs(minStr) {\n                return parseInt(minStr, 10) * 60 * 1000;\n            }\n\n            function parseSecToMs(secStr) {\n                return parseInt(secStr, 10) * 1000;\n            }\n        },\n\n        parseImpressions: function parseImpressions(impressions) {\n            if (impressions) {\n                impressions = isArray(impressions) ? impressions : [impressions];\n                return transformArray(impressions, function(impression) {\n                    if (isNotEmptyString(impression.keyValue)) {\n                        return impression.keyValue;\n                    }\n                    return undefined;\n                });\n            }\n            return [];\n        },\n\n        parseCreatives: function parseCreatives(creativesJTree) {\n            var creatives = [];\n            var creativesData;\n            if (isDefined(creativesJTree) && isDefined(creativesJTree.creative)) {\n                creativesData = isArray(creativesJTree.creative) ? creativesJTree.creative : [creativesJTree.creative];\n                creativesData.forEach(function(creative) {\n                    creatives.push(new Creative(creative));\n                });\n            }\n            return creatives;\n        },\n\n        //We assume that the progress is going to arrive in milliseconds\n        formatProgress: function formatProgress(progress) {\n            var hours, minutes, seconds, milliseconds;\n            hours = progress / (60 * 60 * 1000);\n            hours = Math.floor(hours);\n            minutes = (progress / (60 * 1000)) % 60;\n            minutes = Math.floor(minutes);\n            seconds = (progress / 1000) % 60;\n            seconds = Math.floor(seconds);\n            milliseconds = progress % 1000;\n            return toFixedDigits(hours, 2) + ':' + toFixedDigits(minutes, 2) + ':' + toFixedDigits(seconds, 2) + '.' + toFixedDigits(milliseconds, 3);\n        },\n\n        parseOffset: function parseOffset(offset, duration) {\n            if (isPercentage(offset)) {\n                return calculatePercentage(offset, duration);\n            }\n            return vastUtil.parseDuration(offset);\n\n            /*** Local function ***/\n            function isPercentage(offset) {\n                var percentageRegex = /^\\d+(\\.\\d+)?%$/g;\n                return percentageRegex.test(offset);\n            }\n\n            function calculatePercentage(percentStr, duration) {\n                if (duration) {\n                    return calcPercent(duration, parseFloat(percentStr.replace('%', '')));\n                }\n                return null;\n            }\n\n            function calcPercent(quantity, percent) {\n                return quantity * percent / 100;\n            }\n        },\n\n        isVPAID: function isVPAIDMediaFile(mediaFile) {\n            return !!mediaFile && mediaFile.apiFramework === 'VPAID';\n        }\n    };\n})(window, document, videojs);\n\n/* jshint ignore:end */\n"
}, function(e, t) {
    e.exports = function(e, t) {
        function r(e) {
            return "object" == typeof e
        }
        e = function e(t) {
            for (var n, i, o = 1; o < arguments.length; o++)
                for (i in n = arguments[o]) n.hasOwnProperty(i) && (r(t[i]) && null !== t[i] && r(n[i]) ? t[i] = e({}, t[i], n[i]) : t[i] = n[i]);
            return t
        }({}, e, t || {});
        return void 0 !== e.playerTechnology && 0 !== e.playerTechnology.length || (e.playerTechnology = ["html5"]), e.width && void 0 !== e.width && "" !== e.width && 0 !== e.width || (e.autoInitialSize = !0), e.safeFrame && e.safeFrameAutoInitialSize && (e.autoInitialSize = !1), "number" == typeof e.disableCollapse && (0 <= e.disableCollapse && (e.disableCollapseForDelay = e.disableCollapse), e.disableCollapse = !1), e.enableExplicitPause = !0, e
    }
}, function(e, t, n) {
    function m(e, t) {
        if (t) try {
            e += " / " + JSON.stringify(t)
        } catch (e) {
            y.error(g, e, t)
        }
        y.verbose(g, e)
    }

    function f(e, t) {
        if (t) try {
            e += " / " + JSON.stringify(t)
        } catch (e) {
            y.error(g, e, t)
        }
        y.info(g, e)
    }
    var v = n(55),
        g = "[PlayerManager_ANVideoViewabilityTracker]",
        y = n(2);
    e.exports = function() {
        function c(e, t, n) {
            var i;
            u && t && (i = /notifyEvent.*\[(.[^\]]+)\]/.exec(t), (i = Array.isArray(i) && 1 < i.length ? i[1] : null) && u("VIEW", i, p, t)), (e && "debug" === e ? m : f)(t, n)
        }
        var u, p, h = null,
            t = {
                video_start: "start",
                expand: "expand",
                collapse: "collapse",
                video_unmute: "sound_on",
                video_mute: "sound_off",
                video_pause: "pause",
                video_resume: "resume",
                "ad-click": "click",
                video_skip: "stop",
                video_complete: "stop",
                fullscreen: "fullscreen",
                exitFullscreen: "exitFullscreen"
            },
            n = {
                video_start: !1,
                video_skip: !1,
                video_complete: !1
            };
        this.init = function(e, t, n, i, o, r, a) {
            f("initialize with duration: " + t + ", width: " + n + ", height: " + i + ", event: " + o), e && (u = e.cbNotification, p = e.ASTadId);
            try {
                var s = {
                        loggerCallback: c,
                        getViewModeCallback: function() {
                            return r() ? v.VIEW_MODE.FULL_SCREEN : v.VIEW_MODE.NORMAL
                        },
                        getVolumeCallback: a
                    },
                    l = (h = new v((d = e) && d.viewability, s), {
                        errorCallback: function(t, e) {
                            if (t) try {
                                e += " / " + JSON.stringify(t)
                            } catch (e) {
                                y.error(g, e, t)
                            }
                            y.error(g, e)
                        }
                    });
                h.initAppNexus(e.targetElement, {
                    duration: t,
                    w: n,
                    h: i
                }, function(e) {
                    if (e) return e.playerContextId
                }(e), l), this.isReady = !0
            } catch (e) {
                m("error on viewability library: "), m(e)
            }
            var d
        }, this.invokeEvent = function(e) {
            if (e && t[e]) try {
                if (n.hasOwnProperty(e)) {
                    if (n[e]) return void f("supressing fireOnceEvents event as it is already fired once by viewability library: " + t[e]);
                    n[e] = !0
                }
                f("event invoked by viewability library: " + t[e]), h.notifyEvent(t[e])
            } catch (e) {
                m("error on viewability library: "), m(e)
            }
        }, this.isReady = !1
    }
}, function(t, e, n) {
    ! function() {
        "use strict";
        var e = n(56);
        t.exports = e
    }()
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        p.call(this, e, t)
    }

    function o() {
        this._debug = !1, this._viewabilityParams = {}, this._viewabilityModules = {}, this._service = {}
    }
    var s = n(57),
        r = n(59),
        l = n(58).LOG_LEVEL,
        a = n(58).VIEW_EVENT,
        d = n(58).VPAID_EVENT,
        c = n(58).VIEW_MODE,
        u = n(58).MODULE,
        p = (i.prototype = {
            initAppNexus: function(e, t, n, i) {
                try {
                    this._private.initAppNexus(e, t, n, i)
                } catch (e) {
                    this._private, _debug && console.error("exception in initAppNexus", e)
                }
                return this
            },
            initMoat: function(e, t, n, i) {
                try {
                    this._private.initMoat(e, t, n, i)
                } catch (e) {
                    this._private._debug && console.error("exception in initMoat", e)
                }
                return this
            },
            notifyEvent: function(e) {
                try {
                    this._private.notifyEvent(e)
                } catch (e) {
                    this._private._debug && console.error("exception in notifyEvent", e)
                }
                return this
            }
        }, e.exports = i, e.exports.LOG_LEVEL = l, e.exports.VIEW_EVENT = a, e.exports.VPAID_EVENT = d, e.exports.VIEW_MODE = c, e.exports.MODULE = u, e.exports.AppNexus = s, e.exports.Moat = r, function(e, t) {
            try {
                this._private = new o, this._private._service = t, e && this._private.configure(e)
            } catch (e) {
                this.log(l.ERROR, "'_init' failed:", e)
            }
        });
    o.prototype = {
        log: function(e, t, n) {
            try {
                if (this._service.loggerCallback) try {
                    this._service.loggerCallback(e, "[VVAdaptor] " + t, n)
                } catch (e) {
                    this._debug && console.trace(e)
                } else this._debug && console.log(e + ": " + t, n)
            } catch (e) {
                this._debug && console.trace(e)
            }
        },
        configure: function(e) {
            this._viewabilityParams = {}, this._viewabilityModules = {};
            try {
                e.hasOwnProperty("config") && "" !== e.config && (this._viewabilityParams[u.APPNEXUS] = e.config)
            } catch (e) {
                this.log(l.ERROR, "'configure' failed for MODULE.APPNEXUS: ", e)
            }
            try {
                var t;
                !e.hasOwnProperty("marketplace_clearing_event_addon") || (t = e.marketplace_clearing_event_addon).hasOwnProperty("name") && "ETV_Moat_Video_AddOn" === t.name && t.hasOwnProperty("config") && "" !== t.config && (this._viewabilityParams[u.MOAT_ETMP] = t.config)
            } catch (e) {
                this.log(l.ERROR, "'configure' failed for MODULE.MOAT_ETMP: ", e)
            }
            if (!this._viewabilityParams[u.MOAT_ETMP]) try {
                if (e.hasOwnProperty("third_party_providers")) {
                    var n, i = e.third_party_providers;
                    for (n in i) i[n].hasOwnProperty("code") && "moat" === i[n].code && i[n].hasOwnProperty("config") && "" !== i[n].config && (this._viewabilityParams[u.MOAT_ANALYTICS] = i[n].config)
                }
            } catch (e) {
                this.log(l.ERROR, "'configure' failed for MODULE.MOAT_ANALYTICS: ", e)
            }
        },
        initAppNexus: function(e, t, n, i) {
            try {
                this._viewabilityModules[u.APPNEXUS] = null;
                var o, r, a = this._viewabilityParams[u.APPNEXUS];
                a && i && (i.loggerCallback = this._service.loggerCallback, o = this.getVolume(), r = this.getViewMode(), this._viewabilityModules[u.APPNEXUS] = new s(a, e, t, n, o, r, i), o && (this.lastKnownVolume = o), r && (this.lastKnownViewMode = r))
            } catch (e) {
                this.log(l.ERROR, "'initAppNexus' failed:", e)
            }
        },
        initMoat: function(e, t, n, i) {
            var o;
            this._viewabilityModules[u.MOAT_ANALYTICS] = null, this._viewabilityModules[u.MOAT_ETMP] = null;
            try {
                (o = this._viewabilityParams[u.MOAT_ANALYTICS]) && i && (i.loggerCallback = this._service.loggerCallback, i.getVolumeCallback = this._service.getVolumeCallback, this._viewabilityModules[u.MOAT_ANALYTICS] = new r(t ? t.duration : 0, n, e, o, r.MODE.ANALYTICS, i, this._debug))
            } catch (e) {
                this.log(l.ERROR, "'initMoat' failed for MODULE.MOAT_ANALYTICS: ", e)
            }
            try {
                (o = this._viewabilityParams[u.MOAT_ETMP]) && i && (i.loggerCallback = this._service.loggerCallback, i.getVolumeCallback = this._service.getVolumeCallback, this._viewabilityModules[u.MOAT_ETMP] = new r(t ? t.duration : 0, n, e, o, r.MODE.ETMP, i, this._debug))
            } catch (e) {
                this.log(l.ERROR, "'initMoat' failed for MODULE.MOAT_ETMP: ", e)
            }
        },
        notifyEvent: function(t) {
            var e = null,
                n = null;
            if (this._viewabilityModules[u.APPNEXUS]) try {
                var i = null;
                switch (t) {
                    case d.Ad_Video_Start:
                        i = a.START;
                        break;
                    case d.Ad_Stopped:
                    case d.Ad_Skipped:
                        i = a.STOP;
                        break;
                    case d.Ad_Paused:
                        i = a.PAUSE;
                        break;
                    case d.Ad_Playing:
                        i = a.RESUME;
                        break;
                    case d.Ad_Click_Thru:
                        i = a.CLICK;
                        break;
                    case d.Ad_Size_Change:
                    case d.Ad_Expanded_Change:
                    case d.Ad_User_Minimize:
                        null !== (n = null !== n ? n : this.getNewViewMode()) && this._viewabilityModules[u.APPNEXUS].onViewModeChange(n);
                        break;
                    case d.Ad_Volume_Change:
                        null !== (e = null !== e ? e : this.getNewVolume()) && this._viewabilityModules[u.APPNEXUS].onVolumeChange(e);
                        break;
                    case a.START:
                    case a.STOP:
                    case a.PAUSE:
                    case a.RESUME:
                    case a.CLICK:
                        i = t;
                        break;
                    case a.FULL_SCREEN:
                    case a.EXIT_FULL_SCREEN:
                        null !== (n = null !== n ? n : this.getNewViewMode()) && this._viewabilityModules[u.APPNEXUS].onViewModeChange(n);
                        break;
                    case a.SOUND_OFF:
                    case a.SOUND_ON:
                        null !== (e = null !== e ? e : this.getNewVolume()) && this._viewabilityModules[u.APPNEXUS].onVolumeChange(e)
                }
                null !== i && this._viewabilityModules[u.APPNEXUS].notifyEvent(i)
            } catch (e) {
                this.log(l.ERROR, "'notifyEvent' failed for event '" + t + "' with MODULE.APPNEXUS: " + e.message, e.stack)
            }
            if (this._viewabilityModules[u.MOAT_ANALYTICS] || this._viewabilityModules[u.MOAT_ETMP]) {
                var o = null;
                switch (t) {
                    case a.START:
                        o = d.Ad_Video_Start;
                        break;
                    case a.STOP:
                        o = d.Ad_Stopped;
                        break;
                    case a.PAUSE:
                        o = d.Ad_Paused;
                        break;
                    case a.RESUME:
                        o = d.Ad_Playing;
                        break;
                    case a.FULL_SCREEN:
                    case a.EXIT_FULL_SCREEN:
                        null !== (n = null !== n ? n : this.getNewViewMode()) && (o = d.Ad_Expanded_Change);
                        break;
                    case a.CLICK:
                        o = d.Ad_Click_Thru;
                        break;
                    case a.SOUND_OFF:
                    case a.SOUND_ON:
                        null !== (e = null !== e ? e : this.getNewVolume()) && (o = d.Ad_Volume_Change);
                        break;
                    case d.Ad_Loaded:
                    case d.Ad_Started:
                    case d.Ad_Stopped:
                    case d.Ad_Skipped:
                    case d.Ad_Skippable_State_Change:
                    case d.Ad_Linear_Change:
                    case d.Ad_Duration_Change:
                    case d.Ad_Remaining_Time_Change:
                    case d.Ad_Impression:
                    case d.Ad_Video_Start:
                    case d.Ad_Video_First_Quartile:
                    case d.Ad_Video_Midpoint:
                    case d.Ad_Video_Third_Quartile:
                    case d.Ad_Video_Complete:
                    case d.Ad_Click_Thru:
                    case d.Ad_Interaction:
                    case d.Ad_User_Accept_Invitation:
                    case d.Ad_User_Close:
                    case d.Ad_Paused:
                    case d.Ad_Playing:
                    case d.Ad_Log:
                    case d.Ad_Error:
                        o = t;
                        break;
                    case d.Ad_Volume_Change:
                        null !== (e = null !== e ? e : this.getNewVolume()) && (o = t);
                        break;
                    case d.Ad_Size_Change:
                    case d.Ad_Expanded_Change:
                    case d.Ad_User_Minimize:
                    case a.EXIT_FULL_SCREEN:
                        null !== (n = null !== n ? n : this.getNewViewMode()) && (o = t)
                }
                try {
                    null !== o && this._viewabilityModules[u.MOAT_ANALYTICS] && this._viewabilityModules[u.MOAT_ANALYTICS].notifyVPAIDEvent(o)
                } catch (e) {
                    this.log(l.ERROR, "'notifyEvent' failed for event '" + o + "' with MODULE.MOAT_ANALYTICS: ", e)
                }
                try {
                    null !== o && this._viewabilityModules[u.MOAT_ETMP] && this._viewabilityModules[u.MOAT_ETMP].notifyVPAIDEvent(o)
                } catch (e) {
                    this.log(l.ERROR, "'notifyEvent' failed for event '" + o + "' with MODULE.MOAT_ETMP: ", e)
                }
            }
            null !== e && (this.lastKnownVolume = e), null !== n && (this.lastKnownViewMode = n)
        },
        lastKnownVolume: -1,
        getVolume: function() {
            var e = this._service.getVolumeCallback();
            return "number" == typeof e ? e : null
        },
        getNewVolume: function() {
            var e = this.getVolume();
            return null !== e && e !== this.lastKnownVolume ? e : null
        },
        lastKnownViewMode: c.NORMAL,
        getViewMode: function() {
            var e = this._service.getViewModeCallback();
            if ("string" != typeof e) return null;
            switch (e) {
                case c.NORMAL:
                case c.FULL_SCREEN:
                    break;
                default:
                    e = c.NORMAL
            }
            return e
        },
        getNewViewMode: function() {
            var e = this.getViewMode();
            return null !== e && e !== this.lastKnownViewMode ? e : null
        }
    }
}, function(e, t, n) {
    function i(e, t, n, i, o, r, a) {
        "use strict";
        if (this.contextKey = i, this.service = a || {}, this.adUID = "WR_" + (new Date).getTime() + Math.round(1e3 * Math.random()), this.viewabilityMeasurementActive = !0, this.viewabilityData = this.decodePayload(e), this.viewabilityData)
            if (this.contextKey && "" !== this.contextKey && (this.log(l.INFO, "contextKey is set in this app, checking contextKey in viewability config"), !this.viewabilityData.hasOwnProperty("contextKey") || -1 === this.viewabilityData.contextKey.indexOf(this.contextKey))) this.log(l.INFO, "contextKey doesn't match, disabling viewability measurement"), this.viewabilityMeasurementActive = !1;
            else {
                i = "";
                try {
                    "object" == typeof t ? (this.videoNodeDocument = t.ownerDocument, this.videoNodeWindow = this.videoNodeDocument.defaultView || this.videoNodeDocument.videoNodeWindow, "" === t.id && (t.id = "an_video_" + this.adUID), i = t.id) : (i = t, this.videoNodeDocument = document, this.videoNodeWindow = window)
                } catch (e) {
                    this.videoNodeDocument = document, this.videoNodeWindow = window
                }
                var s, a = {},
                    t = ("function" == typeof this.service.videoElementsCallback && (a = this.service.videoElementsCallback()), this.videoInfo = this.decodeVideoInfos(n), {
                        DomID: i,
                        adUID: this.adUID,
                        Duration: this.videoInfo.duration,
                        Payload: e,
                        Dimension: {
                            w: this.videoInfo.w,
                            h: this.videoInfo.h
                        },
                        Position: {
                            x: this.videoInfo.x,
                            y: this.videoInfo.y
                        }
                    });
                void 0 !== a.videoElement && (t.videoElement = a.videoElement), void 0 !== a.videoContainer && (t.videoContainer = a.videoContainer), this.log(l.INFO, "ANVideoViewabilityTracker start with parameters", t);
                try {
                    void 0 === this.videoNodeWindow.anxVVAPICache && (this.videoNodeWindow.anxVVAPICache = {
                        events: Array(),
                        init: Array()
                    }, (s = this.videoNodeDocument.createElement("script")).type = "text/javascript", s.async = !0, s.src = this.viewabilityData.vjs, s.readyState && (s.onreadystatechange = function() {
                        "loaded" != s.readyState && "complete" != s.readyState || (s.onreadystatechange = null)
                    }), s.onerror = function() {
                        this.log(l.DEBUG, "script load onerror"), this.error(d.FAILED_TO_LOAD_VIEWABILITY_JS, "ANVideoViewabilityTracker failed to load viewability script (" + s.src + ")."), this.viewabilityMeasurementActive = !1
                    }.bind(this), this.videoNodeDocument.getElementsByTagName("head")[0].appendChild(s))
                } catch (e) {
                    this.error(d.INITIALIZATION_FAILED, {
                        message: "ANVideoViewabilityTracker initialization failed",
                        exception: e
                    })
                }
                this.extractVersionModule(this.viewabilityData), void 0 === this.videoNodeWindow.anxVVAPI ? (n = {
                    a: this.adUID,
                    params: this.viewabilityData.viewParams,
                    id: i,
                    v: this.VIEWABILITY_MODULE_VERSION,
                    dur: this.videoInfo.duration,
                    w: this.videoInfo.w,
                    h: this.videoInfo.h,
                    x: this.videoInfo.x,
                    y: this.videoInfo.y
                }, void 0 !== a.videoElement && (n.videoElement = a.videoElement), void 0 !== a.videoContainer && (n.videoContainer = a.videoContainer), this.videoNodeWindow.anxVVAPICache.init.push(n)) : this.videoNodeWindow.anxVVAPI.initializeFromParams(this.viewabilityData.viewParams, i, this.adUID, this.VIEWABILITY_MODULE_VERSION, this.videoInfo.duration, this.videoInfo.w, this.videoInfo.h, this.videoInfo.x, this.videoInfo.y, a.videoElement, a.videoContainer), null !== o && this.onVolumeChange(o), null !== r && this.onViewModeChange(r)
            } else this.viewabilityMeasurementActive = !1
    }
    var l = n(58).LOG_LEVEL,
        o = n(58).VIEW_MODE,
        d = {
            NO_VIEWABILITY_DATA: 100,
            MISSING_MANDATORY_PARAMETER_JS: 101,
            FAILED_TO_LOAD_VIEWABILITY_JS: 102,
            INITIALIZATION_FAILED: 103,
            MISSING_MANDATORY_PARAMETER_CB: 104,
            MISSING_MANDATORY_PARAMETER_RDCB: 105,
            MISSING_MANDATORY_PARAMETER_VC: 106
        };
    i.prototype = {
        VIEWABILITY_MODULE_VERSION: 1,
        log: function(e, t, n) {
            "use strict";
            if (this.service.loggerCallback) try {
                this.service.loggerCallback(e, "[AppNexus] " + t, n)
            } catch (e) {
                console.trace(e)
            }
        },
        error: function(e, t, n) {
            "use strict";
            if (this.service.errorCallback) try {
                this.service.errorCallback(e, t, n)
            } catch (e) {
                console.trace(e)
            } else this.log(l.ERROR, "ERR-" + e + ": " + t, n)
        },
        parseUrl: function(e) {
            "use strict";
            var t = {
                http: "",
                params: ""
            };
            try {
                if (e && "string" == typeof e) {
                    var n = e.split(/:/);
                    if (2 === n.length && (e = n[1], t.http = n[0]), 2 === (n = e.split(/\?/)).length ? t.params = n[1] : ("" === t.http || "//" !== e.substr(0, 2)) && -1 < e.indexOf("=") && (t.params = n[0]), "" !== t.params)
                        for (var i in n = t.params.split(/&/), t.params = {}, n) {
                            var o = n[i].split(/=/);
                            if (2 === o.length) t.params[o[0]] = decodeURIComponent(o[1]);
                            else if (2 < o.length) {
                                for (var r = "", a = 1; a < o.length; a++) r += "=" + o[a];
                                t.params[o[0]] = decodeURIComponent(r.substr(1))
                            } else t.params[o[0]] = ""
                        }
                }
            } catch (e) {
                this.log(l.DEBUG, e)
            }
            return t
        },
        parseConfigs: function(t) {
            "use strict";
            try {
                if (t && "string" == typeof t) {
                    "<![CDATA[" === t.substring(0, 9) && (t = t.substring(9, t.length - 3));
                    var e = this.parseUrl(t);
                    if (e.hasOwnProperty("params") && "" !== e.params) return e.params
                }
            } catch (e) {
                return this.log(l.DEBUG, "Error parsing config:" + t), void this.log(l.DEBUG, e)
            }
            return this.error(d.NO_VIEWABILITY_DATA, "No viewability data provided"), null
        },
        createViewabilityConfig: function(e) {
            var t, n = [],
                i = !1;
            for (t in e) {
                var o = e[t];
                switch (t) {
                    case "cb":
                        o || (this.error(d.MISSING_MANDATORY_PARAMETER_CB, "Missing mandatory parameter: " + t + "."), i = !0);
                        break;
                    case "rdcb":
                        o || (this.error(d.MISSING_MANDATORY_PARAMETER_RDCB, "Missing mandatory parameter: " + t + "."), i = !0);
                        break;
                    case "vc":
                        o || (this.error(d.MISSING_MANDATORY_PARAMETER_VC, "Missing mandatory parameter: " + t + "."), i = !0);
                        var r = o.split(/;/);
                        n.push("vc=" + encodeURIComponent(r[0]));
                        for (var a = 1; a < r.length; a++) n.push(r[a]);
                        continue
                }
                n.push(t + "=" + encodeURIComponent(o))
            }
            return !0 === i ? null : (n.sort(), n.join("&"))
        },
        decodePayload: function(e) {
            "use strict";
            var t, e = this.parseConfigs(e);
            return e && (t = this.createViewabilityConfig(e)) ? (t = {
                viewParams: t
            }, e.hasOwnProperty("vjs") && "" !== e.vjs ? (t.vjs = e.vjs, e.hasOwnProperty("vid_context") && (t.contextKey = e.vid_context), t) : (this.error(d.MISSING_MANDATORY_PARAMETER_JS, "no viewability script js to load"), this.viewabilityMeasurementActive = !1, null)) : null
        },
        decodeVideoInfos: function(e) {
            "use strict";
            var t = {
                duration: 0,
                w: 0,
                h: 0,
                x: 0,
                y: 0
            };
            return ("number" == typeof e.duration || 0 < e.duration) && (t.duration = e.duration), ("number" == typeof e.w || 0 < e.w) && (t.w = e.w), ("number" == typeof e.h || 0 < e.h) && (t.h = e.h), ("number" == typeof e.x || 0 < e.x) && (t.x = e.x), ("number" == typeof e.y || 0 < e.y) && (t.y = e.y), t
        },
        extractVersionModule: function(e) {
            "use strict";
            !e || (e = /.+\/(\d+)\/trk\.js/.exec(e.viewJS)) && e[1] && (this.VIEWABILITY_MODULE_VERSION = e[1])
        },
        notifyEvent: function(e) {
            "use strict";
            if (this.viewabilityMeasurementActive) {
                switch (this.log(l.INFO, "notifyEvent: [" + e + "]"), e = "an_outstream" == this.contextKey && "sound_off" == e ? "sound_on" : e) {
                    case "fullscreen":
                        e = "expand";
                        break;
                    case "exitFullscreen":
                        e = "collapse";
                        break;
                    case "expand":
                    case "collapse":
                        return
                }
                var t, n = (new Date).getTime();
                try {
                    void 0 === this.videoNodeWindow.anxVVAPI ? (t = {
                        a: this.adUID,
                        c: e,
                        d: n
                    }, this.videoNodeWindow.anxVVAPICache.events.push(t)) : this.videoNodeWindow.anxVVAPI.notifyEvent(this.adUID, e)
                } catch (e) {
                    this.log(l.DEBUG, {
                        message: "notifyEvent failed",
                        exception: e
                    })
                }
            } else this.log(l.INFO, "notifyEvent cancelled because viewability is not active")
        },
        lastKnownVolume: -1,
        onVolumeChange: function(e) {
            "use strict";
            this.viewabilityMeasurementActive ? (e = (e = 1 < e ? 1 : e) < 0 ? 0 : e) !== this.lastKnownVolume && (0 < e ? this.notifyEvent("sound_on") : this.notifyEvent("sound_off"), this.lastKnownVolume = e) : this.log(l.INFO, "onVolumeChange cancelled because viewability is not active")
        },
        onViewModeChange: function(e) {
            "use strict";
            this.viewabilityMeasurementActive ? e == o.NORMAL ? this.notifyEvent("exitFullscreen") : this.notifyEvent("fullscreen") : this.log(l.INFO, "onViewModeChange cancelled because viewability is not active")
        }
    }, e.exports = i, e.exports.LOG_LEVEL = l, e.exports.ERROR_CODE = d
}, function(e, t) {
    e.exports.LOG_LEVEL = {
        DEBUG: "debug",
        INFO: "info",
        ERROR: "error"
    }, e.exports.VIEW_EVENT = {
        START: "start",
        STOP: "stop",
        PAUSE: "pause",
        RESUME: "resume",
        FULL_SCREEN: "fullscreen",
        EXIT_FULL_SCREEN: "exitFullscreen",
        CLICK: "click",
        SOUND_OFF: "sound_off",
        SOUND_ON: "sound_on"
    }, e.exports.VPAID_EVENT = {
        Ad_Loaded: "AdLoaded",
        Ad_Started: "AdStarted",
        Ad_Stopped: "AdStopped",
        Ad_Skipped: "AdSkipped",
        Ad_Skippable_State_Change: "AdSkippableStateChange",
        Ad_Size_Change: "AdSizeChange",
        Ad_Linear_Change: "AdLinearChange",
        Ad_Duration_Change: "AdDurationChange",
        Ad_Expanded_Change: "AdExpandedChange",
        Ad_Remaining_Time_Change: "AdRemainingTimeChange",
        Ad_Volume_Change: "AdVolumeChange",
        Ad_Impression: "AdImpression",
        Ad_Video_Start: "AdVideoStart",
        Ad_Video_First_Quartile: "AdVideoFirstQuartile",
        Ad_Video_Midpoint: "AdVideoMidpoint",
        Ad_Video_Third_Quartile: "AdVideoThirdQuartile",
        Ad_Video_Complete: "AdVideoComplete",
        Ad_Click_Thru: "AdClickThru",
        Ad_Interaction: "AdInteraction",
        Ad_User_Accept_Invitation: "AdUserAcceptInvitation",
        Ad_User_Minimize: "AdUserMinimize",
        Ad_User_Close: "AdUserClose",
        Ad_Paused: "AdPaused",
        Ad_Playing: "AdPlaying",
        Ad_Log: "AdLog",
        Ad_Error: "AdError"
    }, e.exports.VIEW_MODE = {
        NORMAL: "normal",
        FULL_SCREEN: "fullscreen"
    }, e.exports.MODULE = {
        APPNEXUS: 1,
        MOAT_ANALYTICS: 2,
        MOAT_ETMP: 3
    }
}, function(e, t, n) {
    function i(e, t, n, i, o, r, a) {
        "use strict";
        this.debug = a, this.hasError = !1, this.config = {}, this.service = r || {}, this.modeName = "-";
        var s, l = {
            container: n,
            param: i,
            mode: o,
            service: r
        };
        for (s in l) !l.hasOwnProperty(s) || l[s] || (this.hasError = !0, this.log(m.ERROR, "Invalid parameter '" + s + "'='" + l[s] + "'"));
        if (o) switch (o.id) {
            case f.ANALYTICS.id:
            case f.ETMP.id:
                this.modeName = o.name;
                break;
            default:
                this.hasError = !0, this.log(m.ERROR, "Invalid 'mode' value='" + o.id + "'")
        }
        r && (r.loggerCallback && "function" == typeof r.loggerCallback || (this.hasError = !0, this.log(m.ERROR, "Service do not implement 'loggerCallback' API")), r.getVolumeCallback && "function" == typeof r.getVolumeCallback || (this.hasError = !0, this.log(m.ERROR, "Service do not implement 'getVolumeCallback' API")), !r.errorCallback || "function" != typeof r.errorCallback) ? (this.hasError = !0, this.log(m.ERROR, "Service do not implement 'errorCallback' API")) : this.hasError ? this.service.errorCallback(d.BAD_CONFIG, {
            mode: this.modeName,
            message: "Invalid parameter"
        }) : (this.container = n, this.duration = e, this.mediaUrl = t, this.config = this.parseParams(i, o), this.moatApiInstance = null, this.log(m.INFO, "MoatViewabilityTracker start with parameters", {
            Dom: this.container ? this.container.id : "undefined",
            mediaUrl: this.mediaUrl,
            duration: this.duration,
            config: this.config
        }), this.config && this.config.hasOwnProperty("partnerCode") ? (this.init(), this.log(m.DEBUG, "Module initialized")) : (this.log(m.ERROR, "Unable to initialize module (missing config)"), this.service.errorCallback(d.BAD_CONFIG, {
            mode: this.modeName,
            message: "Unable to initialize module (missing config)",
            config: i
        })))
    }
    var m = n(58).LOG_LEVEL,
        d = {
            BAD_CONFIG: 1,
            LIBRARY_LOADING_ERROR: 2,
            INITIALIZATION_ERROR: 3
        },
        f = {
            ANALYTICS: {
                id: 1,
                name: "analytics",
                parameters: {
                    advid: "level1",
                    cpgid: "level2",
                    cpid: "level3",
                    crid: "level4",
                    buyid: "zMoatMBRID",
                    selid: "zMoatSELL",
                    pubid: "zMoatPUB",
                    tagid: "zMoatTAG"
                }
            },
            ETMP: {
                id: 2,
                name: "ETMP",
                parameters: {
                    buyid: "level1",
                    advid: "level2",
                    cpgid: "level3",
                    cpid: "level4",
                    selid: "slicer1",
                    pubid: "slicer2",
                    tagid: "slicer3",
                    crid: "zMoatCRID",
                    aet: "zMoatAET",
                    aecb: "zMoatAECB"
                }
            }
        };
    i.prototype = {
        log: function(e, t, n) {
            "use strict";
            if (this.service.loggerCallback) try {
                this.service.loggerCallback(e, "[MOAT/" + this.modeName + "] " + t, n)
            } catch (e) {
                this.debug && console.trace(e)
            } else this.debug && console.log(e + ": " + t, n)
        },
        init: function() {
            "use strict";
            try {
                this.moatApiInstance = this.initMoatTracking(this.container, this.config.moatConfig, this.duration, this.config.partnerCode, this.mediaUrl), this.moatApiInstance ? this.log(m.DEBUG, "Module loading done") : (this.log(m.ERROR, "Module loading failed"), this.service.errorCallback(d.LIBRARY_LOADING_ERROR, {
                    mode: this.modeName,
                    message: "Module loading failed"
                }))
            } catch (e) {
                this.log(m.ERROR, "Module initialization failed:", e), this.service.errorCallback(d.INITIALIZATION_ERROR, {
                    mode: this.modeName,
                    message: e.message
                })
            }
        },
        notifyVPAIDEvent: function(e) {
            "use strict";
            this.moatApiInstance && (this.log(m.INFO, "notifyVPAIDEvent: [" + e + "]"), this.moatApiInstance.dispatchEvent({
                type: e,
                adVolume: this.service.getVolumeCallback()
            }))
        },
        parseParams: function(e, t) {
            "use strict";
            if (this.debug && this.log(m.DEBUG, "Received params", {
                    params: e,
                    mode: t.name
                }), e && "string" == typeof e) {
                var n, i = {},
                    o = e.split(/&/);
                for (n in o) {
                    var r = o[n].split(/=/);
                    2 == r.length ? i[r[0]] = r[1] : i[r[0]] = ""
                }
                for (var a = !0, s = {
                        partnerCode: null,
                        mode: t,
                        moatConfig: {}
                    }, e = "partnercode", e = (this.sanityCheck(e, i) ? s.partnerCode = i[e] : t.id == f.ANALYTICS.id ? (s.partnerCode = "appnexusvpaidvideo274177211956", s.moatConfig.slicer1 = "", s.moatConfig.slicer2 = "") : (a = !1, this.log(m.ERROR, "Invalid parameter detected '" + e + "'='" + i[e] + "'")), "mbrid"), l = (this.sanityCheck(e, i) && (i.buyid = i[e]), {}), d = Object.keys(t.parameters), c = 0; c < d.length; c++) l[d[c]] = t.parameters[d[c]];
                for (var d = Object.keys(l), u = 0; u < d.length; u++) {
                    var p = d[u],
                        h = l[p];
                    this.sanityCheck(p, i) ? s.moatConfig[h] = decodeURIComponent(i[p]) : (this.log(m.ERROR, "Invalid parameter detected: '" + p + "', value='" + i[p] + "'"), a = !1)
                }
                if (a) return s
            }
            return this.log(m.ERROR, "Invalid parameters received/parsed"), null
        },
        sanityCheck: function(e, t) {
            "use strict";
            return t.hasOwnProperty(e) && "" !== t[e]
        },
        initMoatTracking: function(e, t, n, i, o, r) {
            var a, s, l = document.createElement("script"),
                d = [];
            t = {
                adData: {
                    ids: t,
                    duration: n,
                    url: o
                },
                dispatchEvent: function(e) {
                    this.sendEvent ? (d && (d.push(e), e = d, d = !1), this.sendEvent(e)) : d && d.push(e)
                },
                clientCallback: r
            }, n = "_moatApi" + Math.floor(1e8 * Math.random());
            try {
                s = (a = e.ownerDocument).defaultView || a.parentWindow
            } catch (e) {
                a = document, s = window
            }
            return s[n] = t, l.type = "text/javascript", e && e.insertBefore(l, e.childNodes[0] || null), l.src = "https://z.moatads.com/" + i + "/moatvideo.js#" + n, t
        }
    }, e.exports = i, e.exports.LOG_LEVEL = m, e.exports.ERROR_CODE = d, e.exports.MODE = f, e.exports.MODE_PARAMETERS = {
        partnerCode: ""
    }
}, function(e, t, n) {
    function r(e) {
        l.error(c, e)
    }

    function p(e) {
        l.warn(c, e)
    }

    function i() {
        var e = navigator.appVersion.indexOf("Mobile"),
            t = navigator.appVersion.indexOf("Android");
        return -1 < e || -1 < t
    }

    function f(e, t, n, i) {
        return !1 !== P() && (e = e && "auto" === e, t = t && "on" === t, 53 <= j() ? !(!t || !e || n) || !(!e || !i || n) : j() <= 52 ? !(!e || n) : void 0)
    }

    function o(t) {
        function n(e) {
            try {
                e && document.body.removeChild(e)
            } catch (e) {
                g(e)
            }
        }
        y("Start to detect Android Data Saver option in this device");
        var e, i = window.document.createElement("video");
        try {
            i.src = m, i.muted = !0, document.body.appendChild(i), void 0 !== (e = i.play()) && e.then(function() {
                y("Android Data Saver option isn't detected in this device"), n(i), t(!1)
            }).catch(function() {
                y("Android Data Saver option is detected in this device, so auto-play will be initiated by user's activity like touch"), n(i), t(!0)
            })
        } catch (e) {
            g(e), y("failed to detect Android Data Saver option in this device, so auto-play will be initiated by user's activity like touch"), n(i), t(!0)
        }
    }

    function v(e, t, n, i, o, r) {
        if (!A) {
            g("create iframes for Android autoplay by " + e);
            var a = 1;
            g("total " + (a = n && -1 !== n ? n + 1 : i) + " iframes will be made by waterfall structure with " + e + " event");
            for (var s = [], l = 0; l < a; l++) {
                var d = "",
                    d = 0 === l ? u : u + "_Waterfall_" + l,
                    c = document.createElement("iframe");
                (r && r instanceof Element ? r.querySelector("#" + String(o)) : document.getElementById(o)).appendChild(c);
                c.contentWindow.document.open(), c.contentWindow.document.write("<html></html>"), c.contentWindow.document.close(), c.name = d, c.style.display = "none", g("iframes injected for waterfall steps #" + (l + 1) + " by " + e), s.push(c)
            }
            s && Array.isArray(s) && 1 <= s.length && "general" !== e ? I(s, e, t, o) : "function" == typeof t && t()
        }
    }

    function a(e, i, o, r) {
        var t = T.browser.name.toLowerCase(),
            n = !(!T.os || "Android" !== T.os.name || !parseInt || "function" != typeof parseInt || 5 !== parseInt(T.os.version));
        g("hasMaxLimitOnVideo: " + n), S() ? (w[r] = !0, i(o)) : (("firefox" === t ? ((s = document.createElement("video")).style.width = "1px", s.style.height = "1px", s.src = e, s.id = r, s.setAttribute("playsinline", ""), document) : ((t = document.createElement("iframe")).style.display = "none", t.id = "iframe_" + r, document.body.appendChild(t), (s = n && s || document.createElement("video")).style.width = "1px", s.style.height = "1px", s.src = e, s.id = r, s.setAttribute("playsinline", ""), t.contentWindow.document)).body.appendChild(s), !1 === (s.muted = o) && s.volume && (s.volume = .001), void 0 !== (n = s.play()) ? n.then(function() {
            w[r] = !0, g("video promise succeeded: " + r + ", muted=" + o), i(!0)
        }).catch(function(e) {
            var t = e.code,
                n = e.name,
                e = e.message;
            g("video promise failed: " + r + ", muted=" + o + "," + t + "," + n + "," + e), w[r] = !0, i(!1)
        }) : (w[r] = !0, i(!0)))
    }
    var s, l = n(2),
        d = "https:" === document.location.protocol ? "https:" : "http:",
        h = "apn_mobile_video_placements",
        u = "iframeVideoWrapper",
        m = d + "//acdn.adnxs-simple.com/video/static/res/b2.mp4",
        c = "[AutoplayHandler]",
        g = function(e) {
            l.verbose(c, e)
        },
        y = function(e) {
            l.info(c, e)
        },
        A = !1,
        b = d + "//acdn.adnxs-simple.com/video/static/res/av2.mp4",
        w = {},
        k = {
            stopMediaWithSound: 1,
            neverAutoplay: 2,
            allowAutoplay: 3
        },
        T = n(19)(),
        E = function() {
            var t = "safari";
            try {
                var e, n = navigator.platform,
                    i = navigator.userAgent,
                    o = navigator.appVersion;
                return /CriOS/.test(i) && (t = "chrome"), /iP(hone|od|ad)/.test(n) ? (e = o.match(/OS (\d+)_(\d+)_?(\d+)?/), [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3] || 0, 10), t]) : [0, 0, 0, t]
            } catch (e) {
                return r(e), [0, 0, 0, t]
            }
        },
        S = function() {
            return /iphone/i.test(navigator.userAgent.toLowerCase()) || /ipad/i.test(navigator.userAgent.toLowerCase())
        },
        C = function() {
            var e = -1;
            if (S()) try {
                var t = navigator.userAgent.match(/CriOS\/([0-9]+)\./);
                t && Array.isArray(t) && 1 < t.length && (e = parseInt(t[1]))
            } catch (e) {
                g(e)
            }
            return e
        },
        I = function(e, n, t, d) {
            function i(o, r, a) {
                try {
                    var e, s, l = o.contentWindow;
                    l[h] || (s = l.document.createElement("video"), l.document.body.appendChild(s), s.src = m, s.muted = !0, e = s.play(), s.pause(), void 0 !== e && e.then(function() {
                        g("video promise done successfully by " + a), c++, u("promise done")
                    }).catch(function(e) {
                        var t = e.code,
                            n = e.name,
                            i = e.message;
                        0 === t ? (p("playback failed : " + t + "," + n + "," + i + " by " + a), t = o, p("removing failed iframe #" + (r + 1) + " by " + a), document.getElementById(d).removeChild(t)) : (p("waterfall steps #" + (Number(c) + 1) + " by " + a + " : autoplay trick's possible due to video promise be caught with " + e.name), n = s, i = a, t = l, A || (p("successfully performed autoplay trick by " + i), t[h] = n, c++, u(i)))
                    }))
                } catch (e) {
                    g(e)
                }
            }
            var o = e.length,
                c = 0,
                u = function(e) {
                    c === o && "function" == typeof t && (A = !0, p("set hasDoneFakingAutoStartForAndroid = true by " + e), t())
                };
            e.forEach(function(e, t) {
                i(e, t, n)
            })
        },
        P = function() {
            return /android/i.test(navigator.userAgent.toLowerCase())
        },
        j = function() {
            var e = -1;
            if (P()) try {
                var t = navigator.userAgent.match(/Chrome\/([0-9]+)\./);
                t && Array.isArray(t) && 1 < t.length && (e = parseInt(t[1]))
            } catch (e) {
                g(e)
            }
            return e
        };
    e.exports = {
        APN_MOBILE_VIDEO_PLACEMENT_ID: h,
        APN_MOBILE_IFRAME_NAME: u,
        initialize: function(t) {
            try {
                var r = t.targetElementId,
                    a = t.windowForPublisher,
                    s = t.callbackAdUnitEntryPoint,
                    e = t.callbackPatchForIOSChrome,
                    l = t.waterfallSteps,
                    d = t.maxWaterfallIframes,
                    c = t.initialPlayback,
                    u = t.initialAudio,
                    p = t.automatedTestingOnlyAndroidSkipTouchStart,
                    h = t.androidDSOverride,
                    m = t.wcElement;
                i() ? P() ? (g("intialize for Android"), o(function(e) {
                    var t, n, i, o = e;
                    !1 === h && e && j() <= 55 && "on" === u && "auto" === c ? s(!1, !0) : (!1 === h && (e = !1), j() < 56 && f(c, u, p, e) ? (t = function(e) {
                        v(e, function() {
                            s(!1, !1)
                        }, l, d, r, m)
                    }, a.addEventListener("touchstart", function() {
                        t("touchstart")
                    }, {
                        passive: !0
                    }), a.addEventListener("touchend", function() {
                        setTimeout(function() {
                            t("touchend")
                        }, 1)
                    }, {
                        passive: !0
                    })) : (56 <= j() && (n = "on" === u && "auto" === c && !1 === o), i = "auto" === c && !0 === o, v("general", function() {
                        s(n, i)
                    }, l, d, r, m)))
                })) : (g("intialize for iOS and etc"), s(!1), function() {
                    var e, t = E();
                    if (t && Array.isArray(t) && 4 <= t.length) return e = t[0], "chrome" === t[3] && 10 === e && 53 === C()
                }() && e && "function" == typeof e && a.addEventListener("touchstart", e)) : (g("initialize for general html5 browsers"), s(!1))
            } catch (e) {
                g(e), t.callbackAdUnitEntryPoint && "function" == typeof t.callbackAdUnitEntryPoint && t.callbackAdUnitEntryPoint(!1)
            }
        },
        iOSversion: E,
        isIOS: S,
        isIosInlineRequired: function(e) {
            var t;
            try {
                t = 8 <= E()[0] && !0 === e
            } catch (e) {
                r(e)
            }
            return t
        },
        isRequiredFakeAndroidAutoStart: f,
        isMobile: i,
        testDataSaverForAndroid: o,
        getAutoplayPolicy: function(n, i) {
            function e() {
                document.removeEventListener("onFocus", e), setTimeout(function() {
                    var e = document,
                        t = document.getElementById("iframe_" + o),
                        t = (e = t ? t.contentWindow.document : e).getElementById(o),
                        e = e.getElementById(r);
                    t && t.parentNode && (t.parentNode.removeChild(t), g("remove test video placement :" + o)), e && e.parentNode && (e.parentNode.removeChild(e), g("remove test video placement for sound on case :" + r)), i ? !1 === w[o] && !1 === w[r] && (g("timeout video test"), g("decided to neverAutoplay"), n(k.neverAutoplay)) : !1 === w[r] && (g("timeout video test"), g("decided to neverAutoplay"), n(k.neverAutoplay))
                }, 5e3)
            }
            var o, r;
            void 0 === i && (i = !1), o = "videoPlacementTest_" + (new Date).getTime() + Math.floor(1e4 * Math.random()), r = "videoPlacementTest_" + (new Date).getTime() + Math.floor(1e4 * Math.random()), (w = {})[o] = !1, w[r] = !1, i ? a(b, function(e) {
                !0 === e ? (g("decided to allowAutoplay"), n(k.allowAutoplay)) : a(b, function(e) {
                    !0 === e ? (g("decided to stopMediaWithSound"), n(k.stopMediaWithSound)) : (g("decided to neverAutoplay"), n(k.neverAutoplay))
                }, !0, r)
            }, !1, o) : a(b, function(e) {
                !0 === e ? (g("decided to stopMediaWithSound"), n(k.stopMediaWithSound)) : (g("decided to neverAutoplay"), n(k.neverAutoplay))
            }, !0, r);
            document.hasFocus() ? e() : document.addEventListener("onFocus", e)
        },
        videoPolicy: k
    }
}, function(e, t, n) {
    function oe(e) {
        i.debug(e, "AdHandler")
    }
    var r = n(62),
        re = n(27),
        ae = n(70),
        se = n(71),
        i = n(8),
        le = n(73),
        de = n(75),
        ce = n(74),
        ue = n(29),
        pe = n(77),
        he = "https://rb.adnxs-simple.com/pack?log=log_rb_video_waterfall_events&format=json",
        me = 0,
        fe = 1,
        ve = 2,
        ge = 3,
        ye = 0,
        Ae = 1,
        be = 2,
        we = 3,
        ke = 4,
        Te = 5,
        Ee = 11,
        Se = 12;
    e.exports = function(s, g, l) {
        g._vastObjArr && Array.isArray(g._vastObjArr) || (g._vastObjArr = []);

        function d() {
            return e() || /ipad/i.test(navigator.userAgent.toLowerCase())
        }

        function a(e, t, n) {
            var i, o, r, a, s;
            E && A && (i = A.notImpbusWaterfall ? "fb" : A.rtb ? "rtb" : "csm", A.hasOwnProperty("fallbackIndex") && (i = "fallback-rtb"), o = A.notifyurl, s = (new Date).getTime(), r = 1, a = {
                adId: A.adId,
                step: I,
                totalAvailableSteps: q,
                stepLimit: j,
                maxTime: S,
                timeRemaining: S,
                auction_id: g.auction_id,
                creative_id: A.creative_id,
                productVersion: g.productVersion
            }, h && (a.timeRemaining = S - (s - h)), e && (r = 1, a.status = "stepStart", g.waterfallStepId = "Waterfall_Step_" + (new Date).getTime() + Math.floor(1e4 * Math.random()), oe("Waterfall Step #" + I + " , type=" + i + ", adId=" + a.adId + ", timeout=" + S + ("fb" === i ? "" : ", notifyurl=" + o + ", creativeId=" + a.creative_id))), t && (r = 4, a.status = "stepSuccess", oe("Waterfall outcome, Step #" + I + ": ACCEPTED, type= " + i + ", adId=" + a.adId + ", timeout=" + S + ("fb" === i ? "" : ", notifyurl=" + o + ", creativeId=" + a.creative_id))), n && (r = 2, a.status = "stepFail", n.code && 402 === n.code && (r = 3), oe("Waterfall outcome, Step #" + I + ": REJECTED, type= " + i + ", adId=" + a.adId + ", timeout=" + S + ", reason=" + n.message + ("fb" === i ? "" : ", creativeId=" + a.creative_id))), C && (r = 5, a.status = "timeout", oe("Waterfall outcome, Step #" + I + ": TIMED-OUT, type= " + i + ", timeout=" + S + ", ads processed=" + I + ("fb" === i ? "" : ", creativeId=" + a.creative_id))), F(A, r, a.step), s = a, l.cbWhenWaterfall && l.cbWhenWaterfall(s))
        }

        function c() {
            if (g._vastObjArr && 0 < g._vastObjArr.length)
                for (var e = 0; e < g._vastObjArr.length; e++) ae.addTrackingEvents(g._vastObjArr[e].trackingUrls, g._vastObjArr[e].adId), ae.requestTracking("notUsed", g._vastObjArr[e].adId);
            y && (ae.addTrackingEvents(y.trackingUrls, y.adId), ae.requestTracking("notUsed", y.adId))
        }

        function u() {
            if (g._vastObjArr && 0 < g._vastObjArr.length)
                for (var e = 0; e < g._vastObjArr.length; e++) pe.reportFallbackTracker(g._vastObjArr[e], pe.AD_NOT_REACHED)
        }

        function t(e) {
            var t, n;
            try {
                if (e.hasOwnProperty("fallbackIndex") && 0 === e.mediaFiles.length) return n = ie(e.errorUrls, 0), te(e), v = !0, l.cbWhenDestroy({
                    type: 1,
                    code: n,
                    message: "VAST parsing failed",
                    failedBeforeRenderer: !0
                });
                te(e), re.init(e.mediaFiles);
                var i = re.getUrl(g.width, g.height, null, g);
                if (null === i || !0 !== i.success) return v = !0, l.cbWhenDestroy({
                    type: 1,
                    code: i.errorCode,
                    message: "Unable to select rendition"
                });
                g.finalVastUri = e.finalVastUri, g.video = {}, g.video.url = i.url, g.video.width = i.width, g.video.height = i.height, K || (e.viewabilityConfig ? g.viewability = {
                    config: e.viewabilityConfig
                } : g.viewability = null), e.userSyncUrl && (g.usersync_url = e.userSyncUrl), g.verifications = e && e.adVerifications ? e.adVerifications : null, g.viewableImpression = e && e.viewableImpression ? e.viewableImpression : null, g.adServingId = e && e.adServingId ? e.adServingId : null, g.universalAdId = e && e.universalAdId ? e.universalAdId : null, "preview" === g.adType && g.onlyAudio && (e.icons = null, e.hasOwnProperty("companionAds") && delete e.companionAds, g.disableTopBar = !1, g.controlBarPosition = "below", g.disableCollapse = {
                    enabled: !0,
                    replay: !0
                }, g.width, o = 24 + (g.playerSkin && g.playerSkin.controlBarHeight ? g.playerSkin.controlBarHeight : 30), s.style.height = o + "px", g.height = o), g.data.adIcons = e && e.icons ? e.icons : null, g.data.skipOffset = e && e.skipOffset ? e.skipOffset : "";
                var o, r, a = {};
                for (r in e.trackingUrls) 0 <= r.indexOf("progress_") && (a[r] = null);
                return g.data.vastProgressEvent = a, i.maintainAspectRatio && void 0 !== i.maintainAspectRatio ? (g.video.maintainAspectRatio = i.maintainAspectRatio, g.maintainAspectRatio = i.maintainAspectRatio) : (g.video.maintainAspectRatio = !0, g.maintainAspectRatio = !0), i.scalable && void 0 !== i.scalable ? (g.video.scalable = i.scalable, g.canScale = i.scalable) : (g.video.scalable = !0, g.canScale = !0), g.video.apiFramework = i.apiFramework, g.video.type = i.type, g.requiredPlayer = i.requiredPlayer, g.videoUrl = i.url, g.clickUrls = e.clickUrls, g.adParameters = e.adParameters, g.extensions = e.extensions, g.data.vastDurationMsec = e.durationMsecs, g.endCard && g.endCard.showCompanion && e.companionAds && (g.endCard.companionAds = e.companionAds.companions, g.endCard.companionCallback = $), g.video.apiFramework && 0 <= g.video.apiFramework.toLowerCase().indexOf("vpaid") ? g.vpaid = !0 : g.vpaid = !1, G && "native" !== g.adType && "preview" !== g.adType && (g.disableCollapse.replay = !g.vpaid && z), g.targetElement = s, l.cbForHandlingDispatchedEvent = Z, l.cbDelayEventsTracking = ee, l.cbWhenReady = function(e) {
                    var t, n, i;
                    e.setVastAttribute(), Z({
                        name: "loaded",
                        player: e
                    }), "bannerstreamtest" === g.adType && (L = new de(s, g)).start(e), "preview" === g.adType && g.onlyAudio && (e.adVideoPlayer.bigPlayButton.el_.style.opacity = 0, e.adVideoPlayer.bigPlayButton.el_.style.transform = "scale(0.01,0.01)", e.adVideoPlayer.controlBar.el_.style.cursor = "default"), m = e, U && (f && (s.contains(f) && s.removeChild(f), f = null), f = U.beforePlayVideo(g.adType, e), "native" === g.adType && (V.isSafari() && V.inIframe() ? (s.style.opacity = 0, t = s.style.position, s.style.position = "fixed", setTimeout(function() {
                        s.style.position = t, s.style.opacity = 1
                    }, 0)) : s.style.opacity = 1, e.isDoneInitialPlay = !1, e.options.hideTopBar && (n = e.options.disableTopBar, i = e.options.playerSkin.controlBarHeight, e.options.disableTopBar = !0, e.options.playerSkin.controlBarHeight = 0, e.resizeVideo(), e.options.disableTopBar = n, e.options.playerSkin.controlBarHeight = i, e.adVideoPlayer.bigPlayButton.el_.style.display = "none", f || (f = V.createNativeStartButton(s), s.appendChild(f), f.addEventListener("click", function() {
                        e.play(), s.contains(f) && s.removeChild(f), f = null
                    }), f.onmouseover = function() {
                        f.style.cursor = "pointer"
                    }, f.onmouseout = function() {
                        f.style.cursor = "auto"
                    }, e.adVideoPlayer.controlBar.el_.style.display = "none")))), Q(e)
                }, "native" !== g.adType || s.style.backgroundImage || (s.style.opacity = 0), l.cbRenderVideo(l, g, ne), v = !0, R = e, B = {}, g.vpaid && (B.options = Object.assign({}, g))
            } catch (e) {
                oe(e), t = "Exception error: " + e
            }
            v = !0, l.cbWhenDestroy({
                type: 0,
                code: 0,
                message: t
            })
        }

        function H(e) {
            v = !1, e && t(e)
        }

        function n(e) {
            var t = null;
            return I < e ? t = g._vastObjArr.shift() : (t = i(), X = !0), t
        }

        function W() {
            v = !1;
            var e, t = null;
            if (g._vastObjArr && E) {
                switch (j) {
                    case 0:
                        0 === I ? t = (t = g._vastObjArr.shift()) || i() : g._vastObjArr.length && (e = g._vastObjArr.shift(), F(e, 6, I));
                        break;
                    case -1:
                        t = n(P);
                        break;
                    default:
                        t = n(j < P ? j : P)
                }
                t || c()
            } else t = g._vastObjArr.shift();
            return A = t, I++, a(!0, null, null), t ? w = t.adId : v = !0, t
        }
        var y, A, p, h, z, m, f, v = !1,
            b = "2.0",
            w = (new Date).getTime() + Math.floor(1e4 * Math.random()),
            k = !1,
            T = !1,
            E = !1,
            S = g.waterfallTimeout,
            C = !1,
            I = 0,
            P = 0,
            q = 0,
            j = g.waterfallSteps,
            G = g.disableCollapse && void 0 !== g.disableCollapse.replay,
            J = "",
            X = !1,
            x = !1,
            V = new ce,
            Q = (G && (z = g.disableCollapse.replay), l.cbWhenReady),
            o = l.cbWhenDestroy,
            _ = l.cbWhenImpression,
            M = {
                loaded: "loaded",
                "creative-view": "creativeView",
                "video-start": "start",
                "video-mid": "midpoint",
                "video-first-quartile": "firstQuartile",
                "video-third-quartile": "thirdQuartile",
                "video-complete": "complete",
                "audio-mute": "mute",
                "audio-unmute": "unmute",
                "video-pause": "pause",
                rewind: "rewind",
                "video-resume": "resume",
                "video-fullscreen": "fullscreen",
                "ad-expand": "expand",
                "ad-collapse": "collapse",
                "video-stopped": "close",
                "video-exit-fullscreen": "exitFullscreen",
                "video-skip": "skip",
                "ad-progress": "progress",
                acceptInvitation: "acceptInvitation",
                acceptInvitationLinear: "acceptInvitationLinear",
                closeLinear: "closeLinear",
                impression: "impression",
                error: "error",
                "video-failed": "error",
                "ad-click": "ClickTracking",
                "volume-change": "volumeChange"
            },
            Y = !1,
            N = [],
            O = [],
            D = null,
            R = null,
            U = null,
            L = null,
            K = !!(g && g.viewability && g.viewability.config),
            B = {},
            e = function() {
                return /iphone/i.test(navigator.userAgent.toLowerCase())
            },
            F = function(e, t, n) {
                try {
                    if (g.hasOwnProperty("clientUA"))
                        if (0 === g.clientUA.indexOf("Vast Video Player")) return void oe("Do not report to Ratbait for all endpoints in Xandr Vast Player");
                    if (!e) throw new Error("vastObj required to track waterfall step");
                    if (e.notImpbusWaterfall) oe("Do not report to Ratbait for non-impbus waterfall");
                    else if (e.hasOwnProperty("fallbackIndex")) oe("Do not report waterfall data to RATBAIT in fallback mode");
                    else {
                        var i = e.creative_id,
                            o = "",
                            r = "",
                            a = "",
                            s = !1;
                        if (A && ue && ue.loadPost && "function" == typeof ue.loadPost) {
                            if (!g) throw new Error("options required to track waterfall steps");
                            switch (t) {
                                case 1:
                                    o = me, A.startWFStepTimer = (new Date).getTime();
                                    break;
                                case 7:
                                    o = ve;
                                    break;
                                case 8:
                                    o = ge, r = Ee;
                                    break;
                                case 9:
                                    o = ge, r = Se, s = !0;
                                    break;
                                case 10:
                                    o = ve, r = Te;
                                    break;
                                case 11:
                                    o = fe, r = Te;
                                    break;
                                case 6:
                                    o = ve, r = we, s = !0;
                                    break;
                                case 2:
                                    o = fe, r = Ae;
                                    break;
                                default:
                                    o = fe
                            }
                            if (o === fe) switch (A.startWFStepTimer && (a = (new Date).getTime() - A.startWFStepTimer), t) {
                                case 4:
                                    r = ye, s = !0;
                                    break;
                                case 3:
                                    r = Te;
                                    break;
                                case 5:
                                    r = be, s = !0
                            }
                            if (o === ve) switch (J) {
                                case 4:
                                    r = ke;
                                    break;
                                case 5:
                                    r = be;
                                    break;
                                case 6:
                                    r = we;
                                    break;
                                case 9:
                                    o = ge, r = Se
                            }
                            var l = g.auction_id,
                                d = g && g.waterfallTimeout ? g.waterfallTimeout : 15e3,
                                c = g && (g.waterfallSteps || 0 === g.waterfallSteps) ? g.waterfallSteps : -1,
                                u = {
                                    auction_id_64: l,
                                    event_type: o,
                                    version: g.productVersion,
                                    timestamp: (new Date).getTime(),
                                    timeout: d,
                                    waterfall_steps: c,
                                    mediation_timeout: 2e3,
                                    waterfall_position: e.waterfallPosition
                                },
                                p = ("" !== a && (u.latency = a), "" !== r && (u.result_code = r), i && (u.creative_id = i), JSON.stringify(u).replace(/"auction_id_64":"(\d+)"/, '"auction_id_64":$1'));
                            if (oe("Waterfall RATBAIT POST tracker fired path :" + he + " -- " + p), 0 === u.event_type && x ? oe("Preventing Waterfall RATBAIT POST tracker (already tracked) :" + he + " -- " + p) : ue.loadPost(he, p), (s = X ? !0 : s) && !x) {
                                J = -1 === g.waterfallSteps || n <= g.waterfallSteps ? t : 6;
                                var h = n,
                                    m = (x = !0, g._vastObjArr.slice(0));
                                if (y && m.push(y), m.length)
                                    for (var f = 0; f < m.length; f++) {
                                        var v = m[f];
                                        v.rtb && A.rtb || F(v, 7, h + 1)
                                    }
                            }
                        }
                    }
                } catch (e) {
                    oe("Error in reporting to RATBAIT " + e)
                }
            },
            $ = function(e) {
                if (e && e.command && e.uniqueId) {
                    var t = e.command;
                    switch (oe("Companion callback command: " + t + ", unique companion id: " + e.uniqueId), t) {
                        case "addTrackingEvents":
                            var n = e.data;
                            if (n) {
                                var i;
                                if (ae.init(["error", "creative-view", "companion-click"], e.uniqueId), n.CompanionClickTracking && 0 < n.CompanionClickTracking.length)
                                    for (i = 0; i < n.CompanionClickTracking.length; i++) ae.addTrackingEvent("companion-click", n.CompanionClickTracking[i], e.uniqueId);
                                if (n.TrackingEvents && 0 < n.TrackingEvents.length)
                                    for (i = 0; i < n.TrackingEvents.length; i++) "creativeView" === n.TrackingEvents[i].eventType && ae.addTrackingEvent("creative-view", n.TrackingEvents[i].url, e.uniqueId)
                            }
                            break;
                        case "requestTracking":
                            var o = e.data;
                            o && ae.requestTracking(o, e.uniqueId)
                    }
                }
            },
            Z = function(e, t) {
                t = !!B.doingVpaidReplay || t, (t = "rewind" === e.name ? !1 : t) || oe("TM>requesting - dispatch : " + e.name);
                var n, i = e.name,
                    o = {
                        video_start: "video-start",
                        video_impression: "impression",
                        video_mute: "audio-mute",
                        video_click: "video-click",
                        video_complete: "video-complete",
                        video_fullscreen: "video-fullscreen",
                        quartile_event: "quartile-event",
                        video_pause: "video-pause",
                        video_unmute: "audio-unmute",
                        video_failed: "video-failed",
                        video_time: "video-time",
                        video_resume: "video-resume",
                        video_stopped: "video-stopped",
                        fullscreenchange: "video-fullscreen",
                        video_skip: "video-skip"
                    }[i],
                    r = !1;
                if (Y && -1 !== N.indexOf(o) && (r = !0), "video-fullscreen" === o && ("3.0" === b || "4.0" === b || "4.1" === b)) switch (e.fullscreenStatus) {
                    case "enter":
                        o = "video-fullscreen";
                        break;
                    case "exit":
                        o = "video-exit-fullscreen";
                        break;
                    default:
                        o = "video-fullscreen"
                }
                void 0 === o && (o = i), e.player && ae.setPlayer(e.player), "replay-vpaid" === o ? B.options && (B.doingVpaidReplay = !0, (g = Object.assign(g, B.options)).initialPlayback = "auto", g.disableCollapse = {
                    enabled: !0,
                    replay: !0
                }, l.cbRenderVideo(l, g, ne)) : e && e.name && "ad-click" === e.name && !e.trackClick || (t || (r ? O.push(o) : ae.requestTracking(o, w)), g.hasOwnProperty("cbNotification") && ("AdUnit" === e.eventType ? g.cbNotification(e.eventType, o, g.targetId, e.obj, e.obj ? {
                    adUnitEventData: e.obj
                } : null) : (i = o, t = e.obj, (r = M[i]) && (g.cbNotification("VAST", r, g.targetId, t, t ? {
                    vastEventData: t
                } : null), "impression" !== i && "video-complete" !== i && "video-start" !== i || M.hasOwnProperty(i) && delete M[i]))), g.cbApnVastPlayer && g.cbApnVastPlayer(o), "canplay" === o && e.companionAds && (R.companionAds = se.parse(e.companionAds)), "impression" === o && (k = !0, _ && "function" == typeof _ && _(), E && !T ? (p && clearTimeout(p), a(!1, !0), ae.requestTracking("notifyurl", w), c(), A && A.hasOwnProperty("fallbackIndex") && (pe.reportFallbackTracker(A, pe.AD_PLAYED), u())) : g.overlayPlayer && ae.requestTracking("notifyurl", w), R.hasOwnProperty("companionAds") && 0 < R.companionAds.companions.length && g.hasOwnProperty("companionContainers") && Array.isArray(g.companionContainers) && (n = [], g.companionContainers.forEach(function(e) {
                    var t;
                    "string" == typeof e ? (t = document.getElementById(e)) && n.push(t) : n.push(e)
                }), 0 < n.length && (g.companionContainers = n, D = se.renderCompanions(R.companionAds, g, $)))), "video-start" === o && ("native" === g.adType && (m.adVideoPlayer.controlBar.el_.style.display = "block", m.iframeVideoWrapper.style.opacity = 1, (r = m && m.iframeVideoWrapper && m.iframeVideoWrapper.contentWindow && m.iframeVideoWrapper.contentWindow.document && m.iframeVideoWrapper.contentWindow.document.getElementById("top_chrome")) ? (r.style.display = "", m.options.hideTopBar && (m.resizeVideo(), delete m.options.hideTopBar)) : m.resizeVideo(), f && (g.targetElement.contains(f) && g.targetElement.removeChild(f), f = null)), T = !0, E && !k && (p && clearTimeout(p), a(!1, !0), ae.requestTracking("notifyurl", w), c(), A && A.hasOwnProperty("fallbackIndex") && (pe.reportFallbackTracker(A, pe.AD_PLAYED), u()))))
            },
            ee = function(e, t) {
                if (Y = e) N = t;
                else {
                    for (var n = 0; n < O.length; n++) ae.requestTracking(O[n], w);
                    N = [], O = []
                }
            },
            te = function(e) {
                b = e.vastVersion;
                var t, n = ["video-pause", "video-play", "video-fullscreen", "ad-click", "rewind", "video-resume", "audio-mute", "audio-unmute", "video-fullscreen", "video-exit-fullscreen", "ad-expand", "ad-collapse", "ad-progress", "creative-view"];
                if (e && e.icons && 0 < e.icons.length)
                    for (var i = 0; i < e.icons.length; i++) {
                        var o = e.icons[i];
                        o && o.IconViewTracking && 0 < o.IconViewTracking.length && n.push("IconViewTracking_" + o.program), o && o.IconClickTracking && 0 < o.IconClickTracking.length && n.push("IconClickTracking_" + o.program)
                    }
                ae.init(n, w), ae.addTrackingEvents(e.trackingUrls, w);
                for (var r = e.clickTrackingUrls, a = 0; a < r.length; a++) t = r[a], oe("register clickTrackingUrls : " + t), ae.addTrackingEvent("ad-click", t, w);
                var s = e.errorUrls;
                for (a = 0; a < s.length; a++) t = s[a], oe("register errorUrls  : " + t), ae.addTrackingEvent("error", t, w);
                var l = e.impressionUrls;
                for (a = 0; a < l.length; a++) t = l[a], oe("register impressionUrls  : " + t), ae.addTrackingEvent("impression", t, w);
                var d = e.notifyurl;
                if ((E || g.overlayPlayer) && d && (oe("register notifyurl  : " + d), ae.addTrackingEvent("notifyurl", d, w)), e && e.icons && 0 < e.icons.length)
                    for (var c = 0; c < e.icons.length; c++) {
                        var u = e.icons[c];
                        if (u && u.IconViewTracking && 0 < u.IconViewTracking.length)
                            for (var p = 0; p < u.IconViewTracking.length; p++) {
                                var h = u.IconViewTracking[p];
                                ae.addTrackingEvent("IconViewTracking_" + u.program, h, w), oe("register " + h + "_" + u.program + " for icon IconViewTracking")
                            }
                        if (u && u.IconClickTracking && 0 < u.IconClickTracking.length)
                            for (var m = 0; m < u.IconClickTracking.length; m++) {
                                var f = u.IconClickTracking[m];
                                ae.addTrackingEvent("IconClickTracking_" + u.program, f, w), oe("register " + f + "_" + u.program + " for icon IconClickTracking")
                            }
                    }
            },
            ne = function() {
                E && !p && (h = (new Date).getTime(), p = setTimeout(function() {
                    C = !0
                }, S))
            },
            ie = function(e, t) {
                var n = "&ERRORFORFALLBACK=",
                    i = t;
                if (e && Array.isArray(e) && 0 < e.length)
                    for (var o = 0; o < e.length; o++) {
                        var r = e[o].indexOf(n);
                        if (0 < r) {
                            i = parseInt(e[o].substr(r + n.length)), e[o] = e[o].substr(0, r);
                            break
                        }
                    }
                return i
            },
            i = function() {
                var e = null;
                return y && (e = y, y = null), e
            };
        l.cbWhenDestroy = function(e, t, n) {
            if (n = n || g, "native" !== g.adType && "preview" !== g.adType || (s.style.opacity = 1), n.stopWaterfall && (E && !n.isWaterfall && F(A, 9, I), E = n.isWaterfall), E) {
                if (n && n.waterfallStepId !== g.waterfallStepId) return;
                g = n, a(!1, !1, e)
            }
            if (E && !k && !T && !C) {
                A && A.fallbackOnNoAd && (g.overlayWaterfall || (g.fallbackNotFirstStep = !0, ae.requestTracking("notifyurl", w), ae.requestErrorTracking(e.code, e.type, e.message, w), pe.reportFallbackTracker(A, e.failedBeforeRenderer ? pe.AD_FAILED_BEFORE_RENDERER : pe.AD_FAILED_IN_RENDERER, {
                    code: e.code,
                    message: e.message
                }))), g.overlayPlayer && A.notImpbusWaterfall && (g.fallbackNotFirstStep = !0);
                var i = W();
                if (i) return "native" !== g.adType && "preview" !== g.adType || (g.initialPlayback = "auto"), void H(i)
            }
            e && void 0 !== e.type ? (oe("requesting error in whenDestroy callback : " + e.code + "," + e.type + "," + e.message), !k || 903 === e.code && "preview" === g.adType ? (g.overlayWaterfall || (E || n.stopWaterfall) && ae.requestTracking("notifyurl", w), g.overlayPlayer ? (i = ae.requestErrorTrackingUrls(e.code, e.type, e.message, w), e.errorUrls = i) : ae.requestErrorTracking(e.code, e.type, e.message, w)) : oe("not requesting error tracker because the Ad Impression was already reported")) : oe("requesting error in whenDestroy callback : " + e + "," + !!e), D && (se.stopCompanions(D), D = null), "function" == typeof o && o(e || !1, t), U && U.adFinished(!!e, n), L && L.stop()
        }, g && g.banners && (U = new le(s, g.banners)), void 0 !== g && g && g.vastXml && (setTimeout(function() {
            v || l.cbWhenDestroy({
                type: 0,
                code: 0,
                message: "VAST Parser didn't answer until timeout"
            })
        }, 3e3), oe("Ad XML : " + g.vastXml), r.parse(g.vastXml, function(e, t, n, i, o) {
            g.finalVastXml = n && n.vastXml ? n.vastXml : "";
            var r;
            if (pe.setMessageTemplate(g, Array.isArray(n) ? n.length : 1), e) {
                if (Array.isArray(n))
                    if (n = n.map(function(e, t) {
                            return e.waterfallPosition = t + 1, e.adId += "_Ad#" + e.waterfallPosition, e
                        }), !d() || d() && g.enableInlineVideoForIos) {
                        if (E = !0, g.isWaterfall = !0, g._vastObjArr = n, q = g._vastObjArr.length, 0 < g._vastObjArr.length && !g._vastObjArr[0].fallbackOnNoAd)
                            for (var a = 0; a < g._vastObjArr.length; a++) {
                                var s = g._vastObjArr[a];
                                if (s.rtb) {
                                    y = s, g._vastObjArr.splice(a, 1);
                                    break
                                }
                            }
                        P = g._vastObjArr.length
                    } else E = !1, g._vastObjArr = n;
                else E = !1, g._vastObjArr.push(n);
                e = W();
                e && (e.expires && 0 < e.expires && e.expires < Date.now() ? l.cbWhenDestroy({
                    type: 0,
                    code: 0,
                    message: "Ad has been expired"
                }) : H(e))
            } else {
                if (v = !0, o && 0 < o.length && (ae.addTrackingEvent("notifyurl", o, t), ae.requestTracking("notifyurl", t)), "vast" === n.substr(0, 4)) {
                    r = n.substr(4);
                    try {
                        r = parseInt(r)
                    } catch (e) {
                        r = null
                    }
                }
                e = "Vast Parser error (" + (r || n) + ")";
                "native" === g.adType && g.badVastXml && (e = "Failed to get VAST XML", r = null), i && 0 < i.length ? (i.forEach(function(e) {
                    oe("register errorUrls  : " + e), ae.addTrackingEvent("error", e, w)
                }), l.cbWhenDestroy({
                    type: 1,
                    code: r || 900,
                    message: e
                })) : r ? l.cbWhenDestroy({
                    type: 1,
                    code: r,
                    message: e
                }) : l.cbWhenDestroy({
                    type: 0,
                    code: 0,
                    message: e
                }), "native" === g.adType && U.adFinished(!0, g)
            }
        }, null, 2e3, null, null, g)), void 0 !== g && g && g.useAdObj && g.adObj && t(g.adObj)
    }
}, function(e, t, Ot) {
    function l(e, t, n) {
        var Q, Pe, Y, i, K = {
                PARSING: "100",
                SCHEMA_ERROR: "101",
                VAST_VERSION: "102",
                NO_BID_RESPONSE: "110",
                NOT_EXPECTED_AD_TYPE: "200",
                AD_CATEGORY: "204",
                AD_CATEGORY_VIOLATION: "205",
                WRAPPER_GENERAL: "300",
                WRAPPER_TIMEOUT: "301",
                WRAPPER_LIMIT: "302",
                WRAPPER_NO_RESPONSE: "303",
                MEDIA_INVALID: "403",
                UNDEFINED: "900"
            },
            m = Ot(2),
            f = "VAST Parser",
            $ = null,
            Z = n,
            je = Z && Z.wrapperLimit && 0 < Z.wrapperLimit ? Z.wrapperLimit : 5,
            xe = 0,
            Ve = null,
            ee = e,
            _e = t && 0 < t ? t : 1e3,
            te = [],
            Me = null,
            ne = [],
            ie = [],
            oe = {},
            re = [],
            Ne = [],
            Oe = [],
            De = [],
            Re = [],
            Ue = [],
            Le = "",
            ae = "",
            Be = 0,
            Fe = "",
            g = null,
            v = [],
            se = {},
            He = [],
            le = [],
            We = [],
            ze = [],
            qe = [],
            de = {
                viewable: [],
                notViewable: [],
                undetermined: []
            },
            Ge = [],
            ce = null,
            Je = {},
            Xe = "unknown unknown",
            Qe = "unknown unknown",
            Ye = null,
            ue = {},
            pe = new d(n),
            Ke = !1,
            he = "",
            $e = !1,
            me = "video",
            fe = [],
            ve = -1,
            Ze = !1,
            a = Ot(67),
            ge = Z.fromMediation,
            ye = ge && Z.fromMediation.waterfall,
            Ae = ge && Z.fromMediation.rtbFallback,
            be = [],
            we = !1,
            et = {},
            ke = "",
            tt = {},
            nt = "",
            it = {},
            ot = "",
            rt = {},
            at = "",
            st = {},
            lt = "",
            dt = 0,
            ct = 0,
            ut = n.vmap,
            pt = "";

        function o(e, t) {
            if (e && 0 < e.length)
                for (var n = 0; n < e.length; n++) e[n] = e[n].replace("[ERRORCODE]", t)
        }

        function Te() {
            var e, t, n;
            return i || (i = "-1", e = [], Z && (t = !Z.overlayPlayer, n = !Z.overlayPlayer, Z.hasOwnProperty("skippable") && Z.skippable.enabled && e.push("skippable"), Z.hasOwnProperty("initialPlayback") && (t = "auto" === Z.initialPlayback), Z.hasOwnProperty("initialAudio") && (n = "off" === Z.initialAudio), t ? e.push(n ? "mautoplayed" : "autoplayed") : e.push("optin"), i = e.join())), i
        }

        function Ee(e, t) {
            for (var n = e, e = "AD DETECTED=" + ("SUCCESS" === t.substr(0, 7) ? "SUCCESS" : "NONE") + " :: Reason=" + t + ", playerTechnology=" + (Z.hasOwnProperty("playerTechnology") ? JSON.stringify(Z.playerTechnology) : "unknown") + ", platform=" + a.getPlatformType() + ", Ad tree path=", i = ""; - 1 !== n;) {
                var o = fe[n].children[0];
                o && (i = pe.getNodeAttributeValue(o, "id") + (i = 0 < i.length ? " -> " + i : i)), n = fe[n].parentIdx
            }
            m.info(f, e + i)
        }

        function ht(e) {
            var t = pe.getSubNodes(e, "Extension");
            if (t && 0 < t.length)
                for (var n = 0; n < t.length; n++) {
                    var i = pe.getNodeAttributeValue(t[n], "type");
                    if (i && "waterfall" === i && (i = pe.getNodeAttributeValue(t[n], "fallback_index")) && 0 < i.length) return i = parseInt(i)
                }
            return -1
        }

        function Se(e, t) {
            for (var n = 0; n < e.length; n++)
                if (e[n] === t) return 1
        }

        function mt(e, t, n, i) {
            if (e) {
                e = pe.getSubNode(e, "Linear", 0);
                if (e) {
                    var o = null,
                        e = pe.getSubNode(e, "VideoClicks");
                    if (e) {
                        var r, a = pe.getSubNode(e, "ClickThrough"),
                            s = (a && (o = pe.getNodeValues(a)) && !Se(t, o) && t.push(o), 0 === t.length && ue.url && t.push(ue.url), pe.getSubNodes(e, "ClickTracking"));
                        if (s)
                            for (r = 0; r < s.length; r++) a = s[r], (o = pe.getNodeValues(a)) && !Se(n, o) && (o = pe.resolveMacros(o, !0, {
                                ADTYPE: me,
                                INVENTORYSTATE: Te()
                            }), n.push(o));
                        if (s = pe.getSubNodes(e, "CustomClick"))
                            for (r = 0; r < s.length; r++) a = s[r], (o = pe.getNodeValues(a)) && !Se(i, o) && i.push(o)
                    } else ue.url && t.push(ue.url)
                }
            }
        }

        function ft(e, t) {
            e && (e = function(e) {
                var t, n, i, o = [],
                    e = pe.getSubNode(e, "AdVerifications");
                if (e) {
                    var r = pe.getSubNodes(e, "Verification");
                    if (r && 0 < r.length)
                        for (var a = 0; a < r.length; a++) {
                            var s = r[a],
                                l = pe.getNodeAttributeValue(s, "vendor"),
                                d = [],
                                c = [],
                                u = pe.getSubNodes(s, "JavaScriptResource");
                            if (u && 0 < u.length)
                                for (i = 0; i < u.length; i++) {
                                    t = pe.getNodeValues(u[i]);
                                    var p = pe.getNodeAttributeValue(u[i], "apiFramework"),
                                        h = pe.getNodeAttributeBooleanValue(u[i], "browserOptional");
                                    d.push({
                                        url: t,
                                        framework: p,
                                        browserOptional: h
                                    })
                                }
                            if ((u = pe.getSubNodes(s, "ExecutableResource")) && 0 < u.length)
                                for (i = 0; i < u.length; i++) {
                                    t = pe.getNodeValues(u[i]), n = pe.getNodeAttributeValue(u[i], "apiFramework");
                                    var m = pe.getNodeAttributeValue(u[i], "type");
                                    c.push({
                                        content: t,
                                        framework: n,
                                        type: m
                                    })
                                }
                            var f = pe.getSubNodeWholeValue(s, "ViewableImpression"),
                                v = {},
                                g = !1,
                                y = pe.getSubNode(s, "TrackingEvents");
                            if (y) {
                                var A = pe.getSubNodes(y, "Tracking");
                                if (A && 0 < A.length)
                                    for (i = 0; i < A.length; i++) {
                                        t = pe.getNodeValues(A[i]);
                                        var b = pe.getNodeAttributeValue(A[i], "event");
                                        b && t && (g = !0, t = pe.resolveMacros(t, !0, {
                                            ADTYPE: me,
                                            INVENTORYSTATE: Te()
                                        }), v.hasOwnProperty(b) ? v[b].push(t) : v[b] = [t])
                                    }
                            }
                            y = pe.getSubNodeWholeValue(s, "VerificationParameters"), s = {};
                            l && (s.vendor = l), 0 < d.length && (s.jsResources = d), 0 < c.length && (s.executableResources = c), f && (s.viewableImpression = f), g && (s.trackingEvents = v), y && (s.verificationParameters = y), o.push(s)
                        }
                }
                return 0 < o.length ? o : null
            }(e)) && 0 < e.length && e.forEach(function(e) {
                t.push(e)
            })
        }

        function y(e, t, n, i) {
            var o = null;
            if (e) {
                if ((o = {}).type = pe.getNodeAttributeValue(e, "type"), -1 === i.indexOf(o.type) && i.push(o.type), !o.type || 0 === o.type.length) return null;
                var i = pe.getNodeAttributeValue(e, "codec");
                if (i && 0 < i.length && 0 < (i = 2 < (i = i.trim()).length ? i : "").length && (o.codec = i), r = o.type, i = i, !a.canPlay(r, i)) return null;
                if (Z && ! function(e) {
                        if (Z.playerTechnology && Array.isArray(Z.playerTechnology) && 0 < Z.playerTechnology.length) {
                            for (var t = !1, n = 0; n < Z.playerTechnology.length; n++) {
                                Z.playerTechnology[n].toLowerCase();
                                if ("video/x-flv" !== (i = e.toLowerCase()) && "video/x-f4v" !== i && "video/f4v" !== i && "application/x-shockwave-flash" !== i) {
                                    t = !0;
                                    break
                                }
                            }
                            if (!t) return
                        }
                        var i, o;
                        return !(Z.hasOwnProperty("supportVpaid") && !Z.supportVpaid && ("application/javascript" === (o = e.toLowerCase()) || "application/x-javascript" === o))
                    }(o.type)) return null;
                o.url = t, o.variation = "Media#" + n, o.delivery = pe.getNodeAttributeValue(e, "delivery");
                var r = pe.getNodeAttributeNumberValue(e, "bitrate", -1); - 1 !== r ? o.bitrate = r : (-1 !== (r = pe.getNodeAttributeNumberValue(e, "minBitrate", -1)) && (o.minBitrate = r), -1 !== (r = pe.getNodeAttributeNumberValue(e, "maxBitrate", -1)) && (o.maxBitrate = r)), o.width = pe.getNodeAttributeNumberValue(e, "width"), o.height = pe.getNodeAttributeNumberValue(e, "height");
                0 < pe.getNodeAttributeValue(e, "scalable").length && (o.scalable = pe.getNodeAttributeBooleanValue(e, "scalable", !0)), 0 < pe.getNodeAttributeValue(e, "maintainAspectRatio").length && (o.maintainAspectRatio = pe.getNodeAttributeBooleanValue(e, "maintainAspectRatio", !0));
                i = pe.getNodeAttributeValue(e, "apiFramework"), t = (i && 0 < i.length && (o.apiFramework = i.toUpperCase()), pe.getNodeAttributeValue(e, "id")), n = (t && 0 < t.length && (o.id = t), pe.getNodeAttributeNumberValue(e, "fileSize", -1)), r = (-1 !== n && (o.fileSize = n), pe.getNodeAttributeNumberValue(e, "mediaType", -1)); - 1 !== r && (o.mediaType = r)
            }
            return o
        }

        function vt(e) {
            Be = 0, ae = Fe = "", te = [], ne = [], ie = [];
            var t = Me = null,
                n = [];
            if (e) {
                e = pe.getSubNode(e, "Linear", 0);
                if (e) {
                    (c = pe.getSubNode(e, "Duration")) && (o = pe.getNodeValue(c), i = -1, r = (o = o).indexOf("%"), Be = 0 < r ? i && 0 < i ? Number(o.substring(0, r)) : 0 : (i = 0 < (r = o.indexOf(".")) ? Number(o.substring(r + 1)) : 0, 3 === (r = (o = 0 < r ? o.substring(0, r) : o).split(":")).length ? 1e3 * (3600 * Number(r[0]) + 60 * Number(r[1]) + Number(r[2])) + i : 0));
                    var i, o = pe.getNodeAttributeValue(e, "skipoffset"),
                        r = (Fe = o, ae = "", pe.getSubNode(e, "AdParameters"));
                    if (r && (ae = pe.getNodeValues(r), pe.getNodeAttributeBooleanValue(r, "xmlEncoded", !1) && ((i = document.createElement("textarea")).innerHTML = ae, ae = i.value)), c = pe.getSubNode(e, "MediaFiles")) {
                        var a = pe.getSubNodes(c, "MediaFile");
                        if (a) {
                            for (var s = 0; s < a.length; s++) {
                                var l, d, c = a[s];
                                0 < (d = pe.getNodeValues(c)).length && ((l = y(c, d, s, n)) && te.push(l))
                            }
                            if (0 === te.length) t = {
                                code: K.MEDIA_INVALID,
                                message: "INCOMPATIBLE MEDIA TYPE, Available = " + JSON.stringify(n)
                            };
                            else {
                                c = pe.getSubNode(e, "MediaFiles"), Me = pe.getSubNodeWholeValue(c, "Mezzanine", "");
                                var u = pe.getSubNodes(c, "InteractiveCreativeFile");
                                if (u && 0 < u.length)
                                    for (var p = 0; p < u.length; p++) {
                                        var h, m, f = u[p];
                                        (d = pe.getNodeValues(f)) && (h = pe.getNodeAttributeValue(f, "type"), m = pe.getNodeAttributeValue(f, "apiFramework"), f = pe.getNodeAttributeBooleanValue(f, "variableDuration"), ne.push({
                                            url: d,
                                            type: h,
                                            apiFramework: m,
                                            variableDuration: f
                                        }))
                                    }
                                e = pe.getSubNode(c, "ClosedCaptionFiles");
                                if (e) {
                                    var v = pe.getSubNode(e, "ClosedCaptionFile");
                                    if (v && 0 < v.length)
                                        for (s = 0; s < v.length; s++) ie.push({
                                            uri: pe.getNodeValues(v[s]),
                                            type: pe.getNodeAttributeValue(v[s], "type"),
                                            language: pe.getNodeAttributeValue(v[s], "language")
                                        })
                                }
                            }
                        } else t = {
                            code: K.MEDIA_INVALID,
                            message: "MISSING MEDIA FILES"
                        }
                    } else t = {
                        code: K.MEDIA_INVALID,
                        message: "MISSING MEDIA FILES"
                    }
                } else t = {
                    code: K.PARSING,
                    message: "INVALID VAST STRUCTURE"
                }
            }
            return t
        }

        function r(e, t) {
            var n = Date.now(),
                n = '<VAST version="' + he + '"><Ad id="' + n + '"><InLine></InLine></Ad></VAST>',
                e = {
                    errorFlag: !0,
                    vastVersion: he,
                    errorUrls: 0 < ve ? Et(ve) : e,
                    vastXml: n,
                    adId: Mt(Y && Y.parentNode ? Y.parentNode.id : "unknown"),
                    sequence: fe && 0 < fe.length ? fe[0].state.sequence : 1,
                    finalVastUri: pt,
                    extClickTrackingUrls: "",
                    extClickUrls: "",
                    extCustomClicks: "",
                    extErrorUrls: "",
                    extImpressionUrls: "",
                    extTrackingUrls: ""
                };
            e.errorUrls || (e.errorUrls = []), t && (o(e.errorUrls, t), e.errorUrls && 0 < e.errorUrls.length && (e.errorUrls[0] += "&ERRORFORFALLBACK=" + t)), "3" < he.substr(0, 1) && (Y && (e.universalAdId = Vt(Y), e.adServingId = pe.getSubNode(Y, "AdServingId"), (n = pe.getSubNode(Y, "AdSystem")) && (e.adSystem = {
                name: pe.getNodeValue(n),
                version: pe.getNodeAttributeValue(n, "version")
            }), (t = Pt(Y)) && (e.categories = t)), e.contentId = _t(), e.conditionalAd = $e), null != Q && (e.fallbackOnNoAd = Q), ye && 0 < ke.length && (e.notifyurl = ke), 0 < lt.length && (e.creative_id = lt), e.rtb = !0, Ee(ve, "SUCCESS"), e.clickTrackingUrls = [], e.clickUrls = [], e.customClicks = [], e.impressionUrls = [], Nt(e), be.push(e), ct++, -1 === ve && (s(), 0 < be.length && (be.sort(function(e, t) {
                return e.fallbackIndex - t.fallbackIndex
            }), delete be[be.length - 1].fallbackOnNoAd))
        }

        function Ce(e, t) {
            o(i = Re.concat(Ue), e), v && 0 < v.length && (o(v, K.WRAPPER_NO_RESPONSE), i = i.concat(v));
            var n = {
                    UNIVERSALADID: Xe,
                    ADSERVINGID: Ye,
                    BREAKPOSITION: Z.breakPosition
                },
                i = pe.resolveMacrosArray(i, ["UNIVERSALADID", "ADSERVINGID", "BREAKPOSITION"], n, -1);
            m.error(f, "Error " + e + " - " + t), Ae ? (r(i), $(!0, ee, ye ? be : be[0], null)) : $(!1, ee, "vast" + e, i, ke)
        }

        function s() {
            for (var e = 0; e < be.length;)
                if (be[e].hasOwnProperty("fallbackIndex")) e++;
                else {
                    if (!(1 < be.length)) break;
                    be.splice(e, 1)
                }
        }

        function Ie(e) {
            var t = fe[ve].state;
            if (t && Array.isArray(t.arrErrorUrls) && t.arrErrorUrls.forEach(function(e) {
                    Ue.push(e)
                }), 0 <= ve) {
                if (fe[ve].children[0] = null, fe[ve].children.splice(0, 1), 0 === fe[ve].children.length) return t = fe[ve].parentIdx, fe.splice(ve, 1), -1 === (ve = t) ? void((ye || Ae) && 0 < be.length ? (t = "rtb", ge && ee && ee.content_source && (t = ee.content_source), Ae ? (s(), ge ? m.info(f, "Fallback: Vast XML ad count detected for " + t + " node: # ads: " + be.length) : m.info(f, "Fallback: Vast XML ad count detected: # fallback-" + t + " ads: " + be.length), 0 < be.length && (be.sort(function(e, t) {
                    return e.fallbackIndex - t.fallbackIndex
                }), delete be[be.length - 1].fallbackOnNoAd)) : ge ? m.info(f, "Waterfall: Vast XML ad count detected for " + t + " node: # ads: " + ("rtb" === t ? ct : dt)) : Pe ? m.info(f, "Waterfall: Vast XML ad count detected: " + (dt + ct)) : m.info(f, "Waterfall: Vast XML ad count detected: # csm ads: " + dt + ", # rtb ads: " + ct), $(!0, ee, be, null)) : ut && 0 < be.length ? (m.info(f, "VMAP: Ad XML node count detected: " + be.length), $(!0, ee, be, null)) : (t = K.UNDEFINED, e && (t = e.toString()), 1 === be.length && be[0].errorFlag ? $(!0, ee, be[0], null) : Ce(t, "no Ad available"))) : ((we = 0 === ve) && Ae && e && r(Ue, e), void Ie(e));
                we = 0 === ve, fe[xe = ve].state = A(), b(fe[ve].children[0])
            }
        }

        function A() {
            return {
                arrTrackings: {},
                arrImpressions: [],
                arrClickUrls: [],
                arrCustomClicks: [],
                arrClickTrackings: [],
                arrErrorUrls: [],
                sExtensions: "",
                sequence: ut ? 0 : 1,
                companions: {
                    required: "unknown",
                    companions: []
                },
                icons: [],
                arrViewableImpressions: {
                    viewable: [],
                    notViewable: [],
                    undetermined: []
                },
                arrVerifications: [],
                fallback: {
                    enabled: !1,
                    index: -1
                }
            }
        }

        function gt() {
            if (g && 0 < g.length)
                for (var e = 0; e < g.length; e++) {
                    var t = g[e],
                        t = pe.getNodeValues(t);
                    t && !Se(v, t) && v.push(t)
                }
        }

        function yt(e) {
            (new Date).getTime(), v = [];
            t = (e = Ve = e).indexOf("<"), e = e.substr(-1 === t ? 0 : t);
            var t = (e = -1 !== (t = e.lastIndexOf(">")) ? e.substr(0, t + 1) : e).trim();
            if (0 === t.length) Ee(ve, "EMPTY VAST"), 0 === fe.length ? Ae ? Ce(K.PARSING, "empty VAST") : Ce(K.NO_BID_RESPONSE, "no bid response for mediation") : Ie(Ae ? K.PARSING : K.NO_BID_RESPONSE);
            else {
                e = null;
                if (void 0 !== window.DOMParser) {
                    var n = !1;
                    if ("parsererror" === (e = (new DOMParser).parseFromString(t, "text/xml")).documentElement.nodeName) {
                        n = !0;
                        try {
                            m.error(f, "Error reason = " + e.documentElement.childNodes[0].nodeValue)
                        } catch (e) {}
                    } else {
                        var i = pe.getSubNode(e, "parsererror");
                        if (i) {
                            n = !0;
                            try {
                                m.error(f, "Error reason = " + i.innerText)
                            } catch (e) {}
                        }
                    }
                    if (n) return Ee(ve, "INVALID VAST STRUCTURE"), void(0 === fe.length ? Ce(K.PARSING, "VAST XML parsing error") : Ie(K.PARSING))
                } else {
                    if (void 0 === window.ActiveXObject) return m.error(f, "Failed to parse vast xml by window.ActiveXObject(Microsoft.XMLDOM)"), Ee(ve, "INVALID VAST STRUCTURE"), void(0 === fe.length ? Ce(K.PARSING, "Failed to get vast xml") : Ie(K.PARSING));
                    try {
                        if ((e = new window.ActiveXObject("Microsoft.XMLDOM")).loadXML(t), 0 !== e.parseError.errorCode) return m.error(f, e.parseError), Ee(ve, "INVALID VAST STRUCTURE"), void(0 === fe.length ? Ce(K.PARSING, e.parseError.errorCode + ", Error reason = " + e.parseError.reason) : Ie(K.PARSING))
                    } catch (e) {
                        return m.error(f, "Failed to parse vast xml by window.ActiveXObject(Microsoft.XMLDOM)", e), Ee(ve, "INVALID VAST STRUCTURE"), void(0 === fe.length ? Ce(K.PARSING, "Failed to parse vast xml by window.ActiveXObject(Microsoft.XMLDOM)") : Ie(K.PARSING))
                    }
                }
                if (e) {
                    i = pe.getSubNode(e, "VAST");
                    if (i && i.firstChild) {
                        var o, r, a, s, n = pe.getSubNodes(i, "Error"),
                            l = (g = pe.returnOnlyChildren(i, n), t = "unknown", t = (e = i) && 3 < (t = (t = pe.getNodeAttributeValue(e, "version")).trim()).length ? t.substr(0, 3) : t);
                        if ("2.0" === (n = l) || "3.0" === n || "4.0" === n || "4.1" === n || "4.2" === n) {
                            we && (ge || ((ye = pe.getNodeAttributeBooleanValue(i, "apn_waterfall")) && (Z.waterfall = !0), Ae = pe.getNodeAttributeBooleanValue(i, "apn_fallback")), ue = {});
                            var d = pe.getSubNodes(i, "Ad");
                            if (d && 0 !== d.length) {
                                for (var c = [], u = K.UNDEFINED, p = 0; p < d.length; p++) {
                                    if (we ? ((h = pe.getNodeAttributeValue(d[p], "id")) ? h += "_suffix" + p : h = "unknown_suffix" + p, d[p].id = h) : ge || ye || Ae || 0 <= ht(d[p]) && (ye = !0, Z.waterfall = !0, Pe = !0), "4.1" <= l) {
                                        var h = pe.getNodeAttributeValue(d[p], "adType");
                                        if (("preview" !== Z.adType || !Z.onlyAudio) && "" !== h && "video" !== h) {
                                            m.log(f, "Ignore non-video Ad node"), we && (u = K.NOT_EXPECTED_AD_TYPE);
                                            continue
                                        }
                                    }
                                    if ("4.0" <= l && 0 < ve && !fe[ve].state.allowMultiAds) {
                                        if (pe.getNodeAttributeValue(d[p], "sequence")) continue;
                                        if (0 < c.length) break
                                    }
                                    c.push(d[p]), ye && we && (a = d[p], s = void 0, 0 < (s = pe.getNodeAttributeValue(a, "id")).length && ((a = pe.getNodeAttributeValue(a, "notifyurl")) && 0 < a.length && (et[s] = a))), we && (s = d[p], a = void 0, 0 < (a = pe.getNodeAttributeValue(s, "id")).length && ((s = pe.getNodeAttributeValue(s, "buyerMemberId")) && 0 < s.length && (tt[a] = s)), o = d[p], r = void 0, 0 < (r = pe.getNodeAttributeValue(o, "id")).length && ((o = pe.getNodeAttributeValue(o, "brandCategoryId")) && 0 < o.length && (it[r] = o)), r = d[p], o = void 0, 0 < (o = pe.getNodeAttributeValue(r, "id")).length && ((r = pe.getNodeAttributeValue(r, "creativeId")) && 0 < r.length && (st[o] = r)), o = d[p], r = void 0, 0 < (r = pe.getNodeAttributeValue(o, "id")).length && ((o = pe.getNodeAttributeValue(o, "viewabilityConfig")) && 0 < o.length && (rt[r] = o)))
                                }
                                0 === c.length ? (gt(), Ee(ve, "NO VALID AD NODES"), 0 === fe.length ? Ce(u, "no Ad available") : Ie(u)) : (e = {
                                    parentIdx: ve,
                                    currentIdx: 0,
                                    children: c,
                                    state: A()
                                }, fe.push(e), e.currentIdx = fe.length - 1, ve = e.currentIdx, b(fe[ve].children[0], l))
                            } else gt(), Ee(ve, "NO AD NODE"), 0 === fe.length ? Ce(K.SCHEMA_ERROR, "no Ad available") : Ie(K.SCHEMA_ERROR)
                        } else Ee(ve, "INVALID VAST VERSION: " + l), 0 === fe.length ? Ce(K.VAST_VERSION, "VAST version not supported") : Ie(K.VAST_VERSION)
                    } else Ee(ve, "EMPTY VAST"), ee ? 0 === fe.length ? Ae ? Ce(K.PARSING, "empty VAST") : Ce(K.NO_BID_RESPONSE, "no bid response for mediation") : Ie(Ae ? K.PARSING : K.NO_BID_RESPONSE) : 0 === fe.length ? Ce(K.WRAPPER_NO_RESPONSE, "no Ad found in VAST response") : Ie(K.WRAPPER_NO_RESPONSE)
                } else Ee(ve, "INVALID VAST STRUCTURE"), 0 === fe.length ? Ce(K.PARSING, "VAST XML parsing error") : Ie(K.PARSING)
            }
        }

        function At(e) {
            for (var t in fe[e].state.arrTrackings)
                for (var n = 0; n < fe[e].state.arrTrackings[t].length; n++) se.hasOwnProperty(t) ? Se(se[t], fe[e].state.arrTrackings[t][n]) || se[t].push(fe[e].state.arrTrackings[t][n]) : (se[t] = [], se[t].push(fe[e].state.arrTrackings[t][n]));
            return se
        }

        function bt(e) {
            for (var t = 0; t < fe[e].state.arrImpressions.length; t++) Se(He, fe[e].state.arrImpressions[t]) || He.push(fe[e].state.arrImpressions[t]);
            return He
        }

        function wt(e) {
            for (var t = 0; t < fe[e].state.arrClickUrls.length; t++) Se(le, fe[e].state.arrClickUrls[t]) || le.push(fe[e].state.arrClickUrls[t]);
            return le
        }

        function kt(e) {
            for (var t = 0; t < fe[e].state.arrCustomClicks.length; t++) Se(We, fe[e].state.arrCustomClicks[t]) || We.push(fe[e].state.arrCustomClicks[t]);
            return We
        }

        function Tt(e) {
            for (var t = 0; t < fe[e].state.arrClickTrackings.length; t++) Se(ze, fe[e].state.arrClickTrackings[t]) || ze.push(fe[e].state.arrClickTrackings[t]);
            return ze
        }

        function Et(e) {
            for (var t = 0; t < fe[e].state.arrErrorUrls.length; t++) Se(qe, fe[e].state.arrErrorUrls[t]) || qe.push(fe[e].state.arrErrorUrls[t]);
            return qe
        }

        function St(e) {
            return 0 < fe[e].state.sExtensions.length && (Le += fe[e].state.sExtensions), Le
        }

        function Ct(e, t) {
            for (var n = 0; n < e.length; n++)
                if (e[n].program.toLowerCase() === t.toLowerCase()) return 1
        }

        function It(e) {
            for (var t = e; 0 < t;) {
                for (var n = fe[t].parentIdx, i = 0; i < fe[t].state.icons.length; i++) Ct(fe[n].state.icons, fe[t].state.icons[i].program) && ! function(e, t) {
                    for (var n = 0; n < e.length; n++)
                        if (e[n].program.toLowerCase() === t.toLowerCase()) return e.splice(n, 1)
                }(fe[n].state.icons, fe[t].state.icons[i].program), fe[n].state.icons.push(fe[t].state.icons[i]);
                t = n
            }
            return fe[t].state.icons
        }

        function Pt(e) {
            var t = [],
                n = pe.getSubNodes(e, "Category");
            if (n && 0 < n.length)
                for (var i = 0; i < n.length; i++) {
                    var o, r = pe.getNodeValues(n[i]);
                    r && 0 < r.length && (o = pe.getNodeAttributeValue(n[i], "authority"), t.push({
                        category: r,
                        authority: o
                    }))
                }
            return 0 < t.length ? t : null
        }

        function jt(e) {
            for (var t = 0; t < fe[e].state.arrViewableImpressions.viewable.length; t++) Se(de.viewable, fe[e].state.arrViewableImpressions.viewable[t]) || de.viewable.push(fe[e].state.arrViewableImpressions.viewable[t]);
            for (t = 0; t < fe[e].state.arrViewableImpressions.notViewable.length; t++) Se(de.notViewable, fe[e].state.arrViewableImpressions.notViewable[t]) || de.notViewable.push(fe[e].state.arrViewableImpressions.notViewable[t]);
            for (t = 0; t < fe[e].state.arrViewableImpressions.undetermined.length; t++) Se(de.undetermined, fe[e].state.arrViewableImpressions.undetermined[t]) || de.undetermined.push(fe[e].state.arrViewableImpressions.undetermined[t]);
            return de
        }

        function xt(e) {
            for (var t = 0; t < fe[e].state.arrVerifications.length; t++) Ge.push(fe[e].state.arrVerifications[t]);
            return Ge
        }

        function Vt(e) {
            function t() {
                return a + " " + s
            }
            var n, i, o, r = "",
                a = "unknown",
                s = "unknown",
                l = pe.getSubNodes(e, "Creative");
            if (!l || 0 === l.length) return t();
            for (n = 0; n < l.length && !(pe.getSubNode(l[n], "Linear") && (i = pe.getSubNodes(l[n], "UniversalAdId")) && 0 < i.length); n++);
            if (!i) return t();
            for (n = 0; n < i.length; n++) o = i[n], a = pe.getNodeAttributeValue(o, "idRegistry") || "unknown", s = pe.getNodeValue(o) || "unknown", 0 < r.length && (r += ","), r += t();
            return r
        }

        function _t() {
            var e = "unknown",
                t = "unknown";
            return Z.content && (Z.content.registryId && (e = Z.content.registryId), Z.content.contentId && (t = Z.content.contentId)), e + " " + t
        }

        function Mt(e) {
            var t = e.indexOf("_suffix");
            return e = 0 < t ? e.substring(0, t) : e
        }

        function b(e, t) {
            Y = null;
            var n = pe.getSubNode(e, "Wrapper"),
                i = null !== n;
            if (i || (n = pe.getSubNode(e, "InLine")), Y = n)
                if (je < ++xe) Ee(ve, "Reach Wrapper limit"), Ie(K.WRAPPER_LIMIT);
                else {
                    he < t && (he = t);
                    var o, r, t = pe.getNodeAttributeValue(e, "id"),
                        a = (et.hasOwnProperty(t) && (ke = et[t]), st.hasOwnProperty(t) && (lt = st[t]), tt.hasOwnProperty(t) && (nt = tt[t]), it.hasOwnProperty(t) && (ot = it[t]), rt.hasOwnProperty(t) && (at = rt[t]), 0 === ve && ((a = pe.getNodeAttributeValue(e, "sequence")) && (fe[ve].state.sequence = parseInt(a)), pe.getNodeAttributeValue(e, "conditionalAd") && ($e = pe.getNodeAttributeBooleanValue(e, "conditionalAd")), (me = pe.getNodeAttributeValue(e, "adType")) && "" !== me || (me = "video"), ge || Ae || ye || 0 <= ht(n) && (Ae = !0)), n),
                        D = fe[ve].state.arrErrorUrls;
                    if (a) {
                        var s = pe.getSubNodes(a, "Error"),
                            l = pe.returnOnlyChildren(a, s);
                        if (l)
                            for (var R = 0; R < l.length; R++) {
                                var d = l[R],
                                    d = pe.getNodeValues(d);
                                (d = pe.resolveMacros(d, !0, {
                                    ADTYPE: me,
                                    INVENTORYSTATE: Te()
                                })) && !Se(D, d) && D.push(d)
                            }
                    }
                    var s = n,
                        U = fe[ve].state.arrImpressions;
                    if (s) {
                        var L = pe.getSubNodes(s, "Impression");
                        if (L)
                            for (var B = 0; B < L.length; B++) {
                                var c = L[B],
                                    c = pe.getNodeValues(c);
                                (c = pe.resolveMacros(c, !0, {
                                    ADTYPE: me,
                                    INVENTORYSTATE: Te()
                                })) && !Se(U, c) && U.push(c)
                            }
                    }
                    var u = n,
                        p = fe[ve].state.arrTrackings;
                    if (u) {
                        u = pe.getSubNode(u, "Linear", 0);
                        if (u)
                            if (m = pe.getSubNode(u, "TrackingEvents")) {
                                var F = pe.getSubNodes(m, "Tracking");
                                if (F)
                                    for (var H = 0; H < F.length; H++) {
                                        var W, h, m = F[H],
                                            f = pe.getNodeValues(m);
                                        f && (f = pe.resolveMacros(f, !0, {
                                            ADTYPE: me,
                                            INVENTORYSTATE: Te()
                                        }), (h = "progress" === (h = pe.getNodeAttributeValue(m, "event")) ? (W = pe.getNodeAttributeValue(m, "offset")) ? "progress_" + W : "" : h) && (p.hasOwnProperty(h) ? Se(p[h], f) || p[h].push(f) : (p[h] = [], p[h].push(f))))
                                    }
                            }
                    }
                    mt(n, fe[ve].state.arrClickUrls, fe[ve].state.arrClickTrackings, fe[ve].state.arrCustomClicks), u = ve, (w = n) && ((w = pe.getSubNode(w, "Extensions")) && w.innerHTML && 0 < w.innerHTML.length ? fe[u].state.sExtensions = fe[u].state.sExtensions + w.innerHTML.toString() : w && w.textContent && 0 < w.textContent.length && (fe[u].state.sExtensions = fe[u].state.sExtensions + w.textContent.toString())), u = ve, (w = (w = n) && pe.getSubNode(w, "CompanionAds")) && (w.innerHTML && 0 < w.innerHTML.length || w.textContent && 0 < w.textContent.length) && Dt.parse(fe[u].state.companions, w, pe), u = ve, (w = (w = n) && pe.getSubNode(w, "Icons")) && (w.innerHTML && 0 < w.innerHTML.length || w.textContent && 0 < w.textContent.length) && Rt.parse(fe[u].state.icons, w, pe);
                    var u = n,
                        v = fe[ve].state.arrViewableImpressions;
                    if (u) {
                        u = pe.getSubNode(u, "ViewableImpression", 0);
                        if (u) {
                            var g, y = null,
                                A = null,
                                b = pe.getSubNodes(u, "Viewable");
                            if (b && 0 < b.length)
                                for (g = 0; g < b.length; g++) A = b[g], (y = pe.getNodeValues(A)) && !Se(v.viewable, y) && v.viewable.push(y);
                            if ((b = pe.getSubNodes(u, "NotViewable")) && 0 < b.length)
                                for (g = 0; g < b.length; g++) A = b[g], (y = pe.getNodeValues(A)) && !Se(v.notViewable, y) && v.notViewable.push(y);
                            if ((b = pe.getSubNodes(u, "ViewUndetermined")) && 0 < b.length)
                                for (g = 0; g < b.length; g++) A = b[g], (y = pe.getNodeValues(A)) && !Se(v.undetermined, y) && v.undetermined.push(y)
                        }
                    }
                    if (ft(n, fe[ve].state.arrVerifications), Ue = [], i)
                        if ("4.0" <= he && 0 < ve && fe[ve - 1].state.hasOwnProperty("followAdditionalWrappers") && !1 === fe[ve - 1].state.followAdditionalWrappers) Ee(ve, "Additional Wrappers are not allowed"), Ie(K.WRAPPER_GENERAL);
                        else {
                            var w = n,
                                k = (ce = null, Je = {}, pe.getSubNodes(w, "BlockedAdCategories"));
                            if (k && 0 < k.length) {
                                ce = [];
                                for (var T = 0; T < k.length; T++) {
                                    var z = pe.getNodeValues(k[T]),
                                        q = (ce.push(z), pe.getNodeAttributeValue(k[T], "authority"));
                                    q && 0 < q.length && (Je[q] = z)
                                }
                                ce = ce.toString()
                            }
                            o = n, Q = null, (u = pe.getSubNode(o, "VASTAdTagURI")) ? (r = pe.getNodeValues(u)) && 0 !== r.length ? Ze ? (Ee(ve, "terminated"), $(!1, ee, "terminated", null, ke)) : (Ke = !0, "4.0" <= he && (S = pe.getNodeAttributeBooleanValue(o, "followAdditionalWrappers", !0), fe[ve].state.followAdditionalWrappers = S, S = pe.getNodeAttributeBooleanValue(o, "allowMultipleAds", !1), fe[ve].state.allowMultipleAds = S), Ae && 0 <= (u = ht(o)) && ("" !== (S = pe.getNodeAttributeValue(o, "fallbackOnNoAd")) ? (Q = pe.getNodeAttributeBooleanValue(o, "fallbackOnNoAd"), fe[ve].state.fallback.enabled = Q) : fe[ve].state.fallback.enabled = !1, fe[ve].state.fallback.index = u), pt = r, S = Z.overlayPlayer ? 1 : Z.expandable ? 3 : -1, r = pe.resolveMacros(r, !1, {
                                BLOCKEDADCATEGORIES: ce ? ce.toString() : -1,
                                ADTYPE: me,
                                ADCOUNT: 1,
                                PLACEMENTTYPE: S,
                                INVENTORYSTATE: Te()
                            }), Ot(29).load(r, function(e, t) {
                                Ze ? (Ee(ve, "terminated"), $(!1, ee, "terminated", null, ke)) : e || 0 === t.length ? "Timeout" === e ? (Ee(ve, "VASTAdTagURI TIMED OUT: " + r), 0 === fe.length ? Ce(K.WRAPPER_TIMEOUT, "Timeout of VAST URI provided in wrapper element") : Ie(K.WRAPPER_TIMEOUT)) : (Ee(ve, "No response for VASTAdTagURI: " + r), 0 === fe.length ? Ce(K.WRAPPER_NO_RESPONSE, "No VAST response for VAST URI provided in wrapper element") : Ie(K.WRAPPER_NO_RESPONSE)) : (we = !1, mt(o, e = [], [], []), 0 < e.length && (ue.url = e[0]), yt(t))
                            }, Z.adServerTimeout || _e)) : (Ee(ve, "EMPTY VASTAdTagURI"), 0 === fe.length ? Ce(K.WRAPPER_GENERAL, "Invalid VASTAdTagURI node value") : Ie(K.WRAPPER_GENERAL)) : (Ee(ve, "INVALID WRAPPER NODE"), 0 === fe.length ? Ce(K.WRAPPER_GENERAL, "invalid wrapper node") : Ie(K.WRAPPER_GENERAL))
                        } else {
                        var E, i = !1,
                            w = (Ae && 0 <= (E = ht(n)) && (fe[ve].state.fallback.enabled = i = !0, fe[ve].state.fallback.index = E), vt(n));
                        if (0 !== te.length && null === w || i) {
                            se = JSON.parse(JSON.stringify(oe)), He = re.slice(0), le = Ne.slice(0), We = Oe.slice(0), ze = De.slice(0), qe = Re.slice(0), Le = "";
                            var u = JSON.stringify(function(e) {
                                    for (var t = e; 0 <= t;) At(t), t = fe[t].parentIdx;
                                    return se
                                }(fe[ve].parentIdx)),
                                S = JSON.stringify(function(e) {
                                    for (var t = e; 0 <= t;) bt(t), t = fe[t].parentIdx;
                                    return He
                                }(fe[ve].parentIdx)),
                                i = JSON.stringify(function(e) {
                                    for (var t = e; 0 <= t;) wt(t), t = fe[t].parentIdx;
                                    return le.reverse(), le
                                }(fe[ve].parentIdx)),
                                C = JSON.stringify(function(e) {
                                    for (var t = e; 0 <= t;) Tt(t), t = fe[t].parentIdx;
                                    return ze
                                }(fe[ve].parentIdx)),
                                I = JSON.stringify(function(e) {
                                    for (var t = e; 0 <= t;) kt(t), t = fe[t].parentIdx;
                                    return We
                                }(fe[ve].parentIdx)),
                                P = JSON.stringify(function(e) {
                                    for (var t = e; 0 <= t;) Et(t), t = fe[t].parentIdx;
                                    return qe
                                }(fe[ve].parentIdx)),
                                G = function(e) {
                                    for (var t = e; 0 <= t;) St(t), t = fe[t].parentIdx;
                                    return Le
                                }(fe[ve].parentIdx),
                                J = JSON.stringify(function(e) {
                                    for (var t = {
                                            required: "unknown",
                                            companions: []
                                        }, n = e; 0 <= n;) Dt.mergeCompanions(t, fe[n].state.companions), n = fe[n].parentIdx;
                                    return t
                                }(fe[ve].parentIdx)),
                                j = JSON.stringify(function(e) {
                                    for (var t = [], n = e; 0 <= n;) {
                                        for (var i = 0; i < fe[n].state.icons.length; i++) Ct(t, fe[n].state.icons[i].program) || t.push(fe[n].state.icons[i]);
                                        n = fe[n].parentIdx
                                    }
                                    return t
                                }(fe[ve].parentIdx));
                            Le = "";
                            var x = function(e) {
                                    var t, n, i = [],
                                        o = [],
                                        r = e.companions;
                                    if (!e.companions) return e;
                                    for (n = r.length - 1; 0 <= n; n--)
                                        if ((t = r[n]).StaticResource || t.IFrameResource || t.HTMLResource) {
                                            for (var a = !1, s = 0; s < i.length; s++)
                                                if (t.width === i[s].width && t.height === i[s].height) {
                                                    a = !0;
                                                    break
                                                }
                                            a || i.push(t)
                                        } else o.push(t);
                                    for (n = 0; n < o.length; n++)
                                        for (s = 0; s < i.length; s++) o[n].width === i[s].width && o[n].height === i[s].height && (o[n].id && o[n].id === i[s].id || !o[n].id) && (o[n].CompanionClickTracking && (i[s].CompanionClickTracking || (i[s].CompanionClickTracking = []), i[s].CompanionClickTracking = i[s].CompanionClickTracking.concat(o[n].CompanionClickTracking)), o[n].TrackingEvents && (i[s].TrackingEvents || (i[s].TrackingEvents = []), i[s].TrackingEvents = i[s].TrackingEvents.concat(o[n].TrackingEvents)));
                                    var l = {
                                        companions: i
                                    };
                                    return e.required && (l.required = e.required), l
                                }(function(e) {
                                    for (var t = e; 0 < t;) {
                                        var n = fe[t].parentIdx;
                                        Dt.mergeCompanions(fe[n].state.companions, fe[t].state.companions), t = n
                                    }
                                    return "unknown" === fe[t].state.companions.required && delete fe[t].state.companions.required, fe[t].state.companions
                                }(ve)),
                                V = {
                                    vastVersion: he,
                                    withWrapper: Ke,
                                    mediaFiles: te,
                                    trackingUrls: At(ve),
                                    impressionUrls: bt(ve),
                                    clickUrls: wt(ve),
                                    clickTrackingUrls: Tt(ve),
                                    customClicks: kt(ve),
                                    errorUrls: Et(ve),
                                    durationMsecs: Be,
                                    skipOffset: Fe,
                                    extensions: St(ve),
                                    adParameters: ae,
                                    vastXml: Ve,
                                    extTrackingUrls: u,
                                    extImpressionUrls: S,
                                    extClickUrls: i,
                                    extCustomClicks: I,
                                    extClickTrackingUrls: C,
                                    extErrorUrls: P,
                                    extExtensions: G,
                                    adId: Mt(t),
                                    sequence: fe[0].state.sequence,
                                    companionAds: x,
                                    extCompanions: J,
                                    icons: It(ve),
                                    extIcons: j,
                                    finalVastUri: pt
                                },
                                u = (Pe && (V.notImpbusWaterfall = !0), JSON.stringify(function(e) {
                                    for (var t = e; 0 <= t;) xt(t), t = fe[t].parentIdx;
                                    return Ge
                                }(fe[ve].parentIdx))),
                                i = xt(ve);
                            if (i && 0 < i.length && (V.extVerifications = u, V.adVerifications = i), "3" < he.substr(0, 1)) {
                                Xe = Vt(n), V.universalAdId = Xe, Qe = _t(), V.contentId = Qe;
                                var I = pe.getSubNode(n, "AdServingId"),
                                    C = (I && (Ye = pe.getNodeValue(I)), V.adServingId = Ye, pe.getSubNode(n, "AdSystem")),
                                    P = (C && (V.adSystem = {
                                        name: pe.getNodeValue(C),
                                        version: pe.getNodeAttributeValue(C, "version")
                                    }), pe.getSubNode(n, "AdTitle")),
                                    G = (P && (V.adTitle = pe.getNodeValue(P)), pe.getSubNode(n, "Description")),
                                    t = (G && (V.description = pe.getNodeValue(G)), pe.getSubNode(n, "Advertiser")),
                                    x = (t && (V.advertiser = {
                                        name: pe.getNodeValue(t),
                                        id: pe.getNodeAttributeValue(t, "id")
                                    }), pe.getSubNode(n, "Pricing")),
                                    _ = (x && (V.pricing = {
                                        price: pe.getNodeAttributeNumberValue(x, "price"),
                                        model: pe.getNodeAttributeValue(x, "model"),
                                        currency: pe.getNodeAttributeValue(x, "currency")
                                    }), pe.getSubNodes(n, "Survey"));
                                if (_ && 0 < _.length)
                                    for (V.surveys = [], O = 0; O < _.length; O++) V.surveys.push({
                                        uri: pe.getNodeValue(_[O]),
                                        type: pe.getNodeAttributeValue(_[O], "type")
                                    });
                                var J = pe.getSubNode(n, "Expires"),
                                    u = (J && (j = parseInt(pe.getNodeValue(J)), !isNaN(j) && 0 < j && (V.expires = Date.now() + 1e3 * j)), function(e) {
                                        var t = pe.getSubNodes(e, "Creative");
                                        if (t && 0 < t.length)
                                            for (var n = 0; n < t.length; n++)
                                                if (pe.getSubNode(t[n], "Linear")) {
                                                    var i = pe.getSubNode(t[n], "CreativeExtensions");
                                                    if (i) {
                                                        var o = pe.getSubNodes(i, "CreativeExtension");
                                                        if (o && 0 < o.length) {
                                                            for (var r = [], a = 0; a < o.length; a++) {
                                                                var s = pe.getSubNodeValue(o[a]);
                                                                s && r.push(s)
                                                            }
                                                            if (0 < r.length) return r
                                                        }
                                                    }
                                                    return null
                                                }
                                        return null
                                    }(n)),
                                    M = (u && 0 < u.length && (V.creativeExtensions = u), V.conditionalAd = $e, Pt(n));
                                if (M) {
                                    for (var N = 0; N < M.length; N++) {
                                        if (!M[N].category || !M[N].authority) return Ee(ve, "invalid Category node"), void Ie(K.AD_CATEGORY);
                                        if (function(t) {
                                                return ce && Je && Je.hasOwnProperty(t.authority) && ce.split(",").find(function(e) {
                                                    return e === t.category
                                                })
                                            }(M[N])) return Ee(ve, "ad is skipped due category violation"), void Ie(K.AD_CATEGORY_VIOLATION)
                                    }
                                    V.categories = M
                                }
                                i = JSON.stringify(function(e) {
                                    for (var t = e; 0 <= t;) jt(t), t = fe[t].parentIdx;
                                    return de
                                }(fe[ve].parentIdx)), I = jt(ve);
                                I && 0 < I.viewable.length + I.notViewable.length + I.undetermined.length && (V.extViewableImpression = i, V.viewableImpression = I), Me && (V.mezzanine = Me), ne && 0 < ne.length && (V.interactiveCreativeFiles = ne), ie && 0 < ie.length && (V.closedCaptionFiles = ie)
                            }
                            null != Q && (V.fallbackOnNoAd = Q), ye && 0 < ke.length && (V.notifyurl = ke), 0 < lt.length && (V.creative_id = lt), 0 < nt.length && (V.buyerMemberId = nt), 0 < ot.length && (V.brandCategoryId = ot), 0 < at.length && (V.viewabilityConfig = at);
                            C = !1;
                            if (ge ? ee.content_source && "rtb" === ee.content_source && (V.rtb = C = !0) : ye && !Ae && (P = pe.getNodeAttributeValue(e, "rtb")) && "true" === P && (V.rtb = C = !0), Ze) Ee(ve, "terminated"), $(!1, ee, "terminated", null, ke);
                            else {
                                for (var X = [], O = 0; O < te.length; O++) - 1 === X.indexOf(te[O].type) && X.push(te[O].type);
                                Ee(ve, "SUCCESS, Available=" + JSON.stringify(X)), Nt(V), ye || Ae ? (Ae && (!(E = function() {
                                    for (var e = -1, t = ve; 0 <= t;) {
                                        var n = fe[t].state;
                                        0 <= n.fallback.index && (e = n.fallback.index), t = fe[t].parentIdx
                                    }
                                    return e
                                }()) && we && ht(n), 0 <= E && (V.fallbackIndex = E, V.fallbackOnNoAd = !0)), be.push(V), C ? ct++ : dt++, Ie()) : ut ? (V.vastXml = function(e, t) {
                                    for (var e = (new DOMParser).parseFromString(e, "text/xml"), n = pe.getSubNode(e, "VAST"), i = pe.getSubNodes(n, "Ad"), o = 0; o < i.length;) {
                                        var r = pe.getNodeAttributeValue(i[o], "sequence");
                                        r && parseInt(r) !== t ? n.removeChild(i[o]) : o++
                                    }
                                    e = "ie" === Ut.browser.name.toLowerCase() ? (new XMLSerializer).serializeToString(e.childNodes[0]) : e.childNodes[0].outerHTML;
                                    return e
                                }(V.vastXml, V.sequence), be.push(V), Ie()) : $(!0, ee, V, null)
                            }
                        } else Ee(ve, w.message), Ie(w.code)
                    }
                } else gt(), Ee(ve, "MISSING WRAPPER / INLINE NODE"), Ie("101")
        }

        function Nt(e) {
            var t, n = Z.mainContentURI || "-1",
                i = ["UNIVERSALADID", "CONTENTID", "ADSERVINGID", "CONTENTURI"],
                o = {
                    UNIVERSALADID: e.universalAdId,
                    CONTENTID: e.contentId,
                    ADSERVINGID: e.adServingId,
                    CONTENTURI: n
                };
            for (t in pe.resolveMacrosArray(e.clickTrackingUrls, i, o, -1), pe.resolveMacrosArray(e.clickUrls, i, o, -1), pe.resolveMacrosArray(e.customClicks, i, o, -1), pe.resolveMacrosArray(e.errorUrls, i, o, -1), pe.resolveMacrosArray(e.impressionUrls, i, o, -1), e.trackingUrls) pe.resolveMacrosArray(e.trackingUrls[t], i, o, -1);
            if (e.icons && 0 < e.icons.length)
                for (a = 0; a < e.icons.length; a++) e.icons[a].IconClickTracking && pe.resolveMacrosArray(e.icons[a].IconClickTracking, i, o, -1), e.icons[a].IconViewTracking && pe.resolveMacrosArray(e.icons[a].IconViewTracking, i, o, -1);
            if (e.companionAds && e.companionAds.companions && 0 < e.companionAds.companions.length) {
                for (var r = e.companionAds.companions, a = 0; a < r.length; a++)
                    if (r[a].CompanionClickTracking && 0 < r[a].CompanionClickTracking.length && (r[a].CompanionClickTracking = pe.resolveMacrosArray(r[a].CompanionClickTracking, i, o, -1)), r[a].TrackingEvents && 0 < r[a].TrackingEvents.length)
                        for (var s = 0; s < r[a].TrackingEvents.length; s++) r[a].TrackingEvents[s].url = pe.resolveMacros(r[a].TrackingEvents[s].url, i, o);
                e.companionAds.companions = r
            }
            e.extClickTrackingUrls = pe.replaceMacrosWithValues(e.extClickTrackingUrls, i, o, -1), e.extClickUrls = pe.replaceMacrosWithValues(e.extClickUrls, i, o, -1), e.extCustomClicks = pe.replaceMacrosWithValues(e.extCustomClicks, i, o, -1), e.extErrorUrls = pe.replaceMacrosWithValues(e.extErrorUrls, i, o, -1), e.extImpressionUrls = pe.replaceMacrosWithValues(e.extImpressionUrls, i, o, -1), e.extTrackingUrls = pe.replaceMacrosWithValues(e.extTrackingUrls, i, o, -1)
        }
        m.always(f, "Version 3.2.16"), this.parse = function(e, t, n, i) {
            $ = i;
            var o, r, a, s, l = t,
                i = n;
            if (i && re.push(i.trim()), l)
                if (Array.isArray(l) && 1 === l.length) {
                    var d = l[0];
                    if (d.impression_urls)
                        for (r = 0; r < d.impression_urls.length; r++) o = d.impression_urls[r].trim(), re.push(o);
                    if (d.error_urls)
                        for (r = 0; r < d.error_urls.length; r++) o = d.error_urls[r].trim(), Re.push(o);
                    if (d.video_click_urls)
                        for (r = 0; r < d.video_click_urls.length; r++) o = d.video_click_urls[r].trim(), De.push(o);
                    for (s in d.video_events)
                        for (a = d.video_events[s], r = 0; r < a.length; r++) o = a[r].trim(), oe.hasOwnProperty(s) ? Se(oe[s], o) || oe[s].push(o) : oe[s] = [o]
                } else
                    for (s in l)
                        if ("service" !== s)
                            if (Array.isArray(l[s]))
                                for (a = l[s], r = 0; r < a.length; r++) o = a[r].trim(), "click" === s ? De.push(o) : "error" === s ? Re.push(o) : "impression" === s ? re.push(o) : oe.hasOwnProperty(s) ? Se(oe[s], o) || oe[s].push(o) : oe[s] = [o];
                            else o = l[s].trim(), "click" === s ? De.push(o) : "error" === s ? Re.push(o) : "impression" === s ? re.push(o) : oe.hasOwnProperty(s) ? Se(oe[s], o) || oe[s].push(o) : oe[s] = [o];
            we = !0, yt(e)
        }, this.terminate = function() {
            Ze = !0
        }
    }
    var d = Ot(63),
        Dt = Ot(64),
        Rt = Ot(65),
        Ut = Ot(66)(),
        c = Ot(68),
        n = Ot(69);
    e.exports = {
        parse: function(e, r, t, n, i, o, a) {
            var s = new l(t, n, a);
            return s.parse(e, i, o, function(e, t, n, i, o) {
                r && r(e, t, n, i, o), s = null
            }), s
        },
        getUnwrappedVastTag: function(e, t, n, i, o, r, a, s, l) {
            return e && e.vastXml ? new c(e, t, n, i, o, r, a, s, l).addTrackers() : null
        },
        getMergedVastTag: function(e, t) {
            return e && 0 !== e.length ? new n(e, t).getVastXml() : null
        }
    }
}, function(e, t, n) {
    e.exports = function(e) {
        var a = n(2),
            s = e;
        this.getSubNodes = function(e, t) {
            e = e.getElementsByTagName(t);
            return 0 < e.length ? e : null
        }, this.getSubNode = function(e, t, n) {
            n = n || 0;
            e = e.getElementsByTagName(t);
            return e.length > n ? e[n] : null
        }, this.getNodeValue = function(e) {
            return 0 !== e.childNodes.length && (e = e.childNodes[0].nodeValue) ? e.trim() : ""
        }, this.getNodeValues = function(e) {
            if (0 === e.childNodes.length) return "";
            for (var t = "", n = 0; n < e.childNodes.length; n++) {
                var i = e.childNodes[n].nodeValue;
                i && (t += i)
            }
            return t.trim()
        }, this.getNodeAttributeValue = function(e, t) {
            e = e.getAttribute(t);
            return e = null === e ? "" : e
        }, this.getNodeAttributeNumberValue = function(e, t, n) {
            n = n || 0, e = this.getNodeAttributeValue(e, t);
            return n = 0 < e.length ? (0 <= e.indexOf(".") ? parseFloat : parseInt)(e) : n
        }, this.getNodeAttributeBooleanValue = function(e, t, n) {
            n = n || !1, e = this.getNodeAttributeValue(e, t);
            return n = 0 < e.length ? "t" === e.toLowerCase().charAt(0) : n
        }, this.getSubNodeValue = function(e, t, n) {
            n = void 0 === n ? "" : n;
            e = this.getSubNode(e, t);
            return null !== e ? this.getNodeValue(e) : n
        }, this.getSubNodeWholeValue = function(e, t, n) {
            n = void 0 === n ? "" : n;
            e = this.getSubNode(e, t);
            return null !== e ? this.getNodeValues(e) : n
        }, this.getSubNodeBooleanValue = function(e, t, n) {
            n = void 0 === n ? "false" : n;
            e = this.getSubNodeValue(e, t);
            return 0 < e.length && "t" === e.toLowerCase().charAt(0) || !(0 < e.length && "f" === e.toLowerCase().charAt(0)) && n
        }, this.returnOnlyChildren = function(e, t) {
            var n = [];
            if (t && 0 < t.length)
                for (var i = 0; i < t.length; i++) t[i].parentNode === e && n.push(t[i]);
            return n
        }, this.resolveMacros = function(e, t, n) {
            var i, o = {
                    TIMESTAMP: function() {
                        return (new Date).toISOString()
                    },
                    CACHEBUSTING: function() {
                        return Math.floor(1e8 * Math.random()).toString()
                    },
                    DEVICEUA: function() {
                        return s && !s.enforcePrivacy ? navigator.userAgent : -2
                    },
                    SERVERSIDE: function() {
                        return 0
                    },
                    DOMAIN: function() {
                        try {
                            return top && top.location ? top.location.hostname : -1
                        } catch (e) {
                            return -1
                        }
                    },
                    VASTVERSIONS: function() {
                        return "2,3,5,6,7,8,310,311"
                    },
                    ADCATEGORIES: function() {
                        return -1
                    },
                    GDPRCONSENT: function() {
                        return -1
                    },
                    SERVERUA: function() {
                        return -1
                    },
                    MEDIAMIME: function() {
                        return "video/mp4,video/webm,video/ogg,application/javascript,application/x-javascript"
                    },
                    EXTENSIONS: function() {
                        return -1
                    },
                    APIFRAMEWORKS: function() {
                        return "1,2"
                    },
                    VERIFICATIONVENDORS: function() {
                        return "appnexus.com-omid"
                    },
                    APPBUNDLE: function() {
                        return -1
                    },
                    REGULATIONS: function() {
                        return -1
                    },
                    OMIDPARTNER: function() {
                        return "unknown"
                    },
                    BREAKMAXDURATION: function() {
                        return -1
                    },
                    BREAKMINDURATION: function() {
                        return -1
                    },
                    BREAKMAXADS: function() {
                        return -1
                    },
                    BREAKMINADLENGTH: function() {
                        return -1
                    },
                    BREAKMAXADLENGTH: function() {
                        return -1
                    },
                    IFA: function() {
                        return -1
                    },
                    IFATYPE: function() {
                        return -1
                    },
                    DEVICEIP: function() {
                        return -1
                    },
                    LATLONG: function() {
                        return -1
                    },
                    PAGEURL: function() {
                        var e;
                        try {
                            e = top && top.location && top.location.href ? top.location.href : null
                        } catch (e) {
                            a.info("VAST Parser", "Xandr VAST parser is unable to resolve PAGEURL macro because top window is not accessible. A value of -1 will be used to resolve this macro.")
                        }
                        return e || -1
                    }
                },
                r = e;
            for (i in o) r = r.split("[" + i + "]").join(encodeURIComponent(o[i]()));
            return r = t ? this.replaceMacrosWithValues(r, ["ADTYPE", "INVENTORYSTATE"], n, -1) : this.replaceMacrosWithValues(r, ["BLOCKEDADCATEGORIES", "ADTYPE", "ADCOUNT", "PLACEMENTTYPE", "INVENTORYSTATE"], n, -1)
        }, this.resolveMacrosArray = function(e, t, n, i) {
            for (var o = 0; o < e.length; o++) e[o] = this.replaceMacrosWithValues(e[o], t, n, i);
            return e
        }, this.replaceMacrosWithValues = function(e, t, n, i) {
            for (var o, r = 0, a = t.length, s = i || -1, r = 0; r < a; r++) o = t[r], 0 <= e.indexOf(o) && (e = e.split("[" + o + "]").join(encodeURIComponent(n.hasOwnProperty(o) && n[o] ? n[o] : s)));
            return e
        }
    }
}, function(e, t) {
    e.exports = {
        parse: function(e, t, l) {
            var n = l.getNodeAttributeValue(t, "required"),
                i = (n && 0 < n.length && (e.required = n), l.getSubNodes(t, "Companion"));
            if (i)
                for (var o = 0; o < i.length; o++) {
                    var r = i[o],
                        a = {},
                        s = l.getNodeAttributeNumberValue(r, "width", -1),
                        d = l.getNodeAttributeNumberValue(r, "height", -1);
                    if (!(s <= 0 || d <= 0)) {
                        a.width = s, a.height = d;
                        (s = l.getNodeAttributeValue(r, "id")) && (a.id = s), 0 < (s = l.getNodeAttributeNumberValue(r, "assetWidth", -1)) && (a.assetWidth = s), 0 < (s = l.getNodeAttributeNumberValue(r, "assetHeight", -1)) && (a.assetHeight = s), 0 < (s = l.getNodeAttributeNumberValue(r, "expandedWidth", -1)) && (a.expandedWidth = s), 0 < (s = l.getNodeAttributeNumberValue(r, "expandedHeight", -1)) && (a.expandedHeight = s), (s = l.getNodeAttributeValue(r, "apiFramework")) && (a.apiFramework = s), (s = l.getNodeAttributeValue(r, "adSlotID")) && (a.adSlotID = s);
                        d = l.getNodeAttributeNumberValue(r, "pxratio", 1), d = (1 !== d && (a.pxratio = d), (s = l.getNodeAttributeValue(r, "required")) && (a.required = s), (s = l.getNodeAttributeValue(r, "renderingMode")) && (a.renderingMode = s), (s = l.getSubNodeValue(r, "AltText")) && (a.AltText = s), (s = l.getSubNodeValue(r, "AdParameters")) && (a.AdParameters = s), l.getSubNode(r, "StaticResource"));
                        if (d && (s = l.getNodeAttributeValue(d, "creativeType"))) {
                            if ("video/x-flv" === s || "video/x-f4v" === s || "video/f4v" === s || "application/x-shockwave-flash" === s) continue;
                            var c = {
                                type: s
                            };
                            (s = l.getNodeValues(d)) && (c.src = s, a.StaticResource = c)
                        }(s = l.getSubNodeWholeValue(r, "IFrameResource")) && (a.IFrameResource = s), (s = l.getSubNodeWholeValue(r, "HTMLResource")) && (a.HTMLResource = s), (s = l.getSubNodeValue(r, "CompanionClickThrough")) && (a.CompanionClickThrough = s);
                        var u, p = ["UNIVERSALADID"],
                            h = {
                                UNIVERSALADID: function(e) {
                                    function t() {
                                        return a + " " + s
                                    }
                                    var n, i, o, e = e.parentNode && e.parentNode.parentNode ? e.parentNode.parentNode : null,
                                        r = "",
                                        a = "unknown",
                                        s = "unknown";
                                    if (!e) return t();
                                    if (!(i = l.getSubNodes(e, "UniversalAdId"))) return t();
                                    for (n = 0; n < i.length; n++) o = i[n], a = l.getNodeAttributeValue(o, "idRegistry") || "unknown", s = l.getNodeValue(o) || "unknown", 0 < r.length && (r += ","), r += t();
                                    return r
                                }(r)
                            },
                            m = l.getSubNodes(r, "CompanionClickTracking");
                        if (m)
                            for (a.CompanionClickTracking = [], u = 0; u < m.length; u++) v = m[u], (y = l.getNodeValues(v)) && (y = l.replaceMacrosWithValues(y, p, h, -1), a.CompanionClickTracking.push(y));
                        var f = l.getSubNodes(r, "Tracking");
                        if (f)
                            for (a.TrackingEvents = [], u = 0; u < f.length; u++) {
                                var v = f[u],
                                    g = l.getNodeAttributeValue(v, "event"),
                                    y = l.getNodeValues(v);
                                g && y && (y = l.replaceMacrosWithValues(y, p, h, -1), a.TrackingEvents.push({
                                    eventType: g,
                                    url: y
                                }))
                            }
                        e.companions.push(a)
                    }
                }
        },
        mergeCompanions: function(e, t) {
            "unknown" === e.required && (e.required = t.required), e.companions = e.companions.concat(t.companions)
        },
        createCompanionNode: function(e, t) {
            for (var n, i = e.createElement("Companion"), o = ["id", "width", "height", "assetWidth", "assetHeight", "expandedWidth", "expandedHeight", "apiFramework", "adSlotID", "required"], r = 0; r < o.length; r++) t.hasOwnProperty(o[r]) && ((d = e.createAttribute(o[r])).value = t[o[r]], i.setAttributeNode(d));
            t.hasOwnProperty("StaticResource") && (n = e.createElement("StaticResource"), (d = e.createAttribute("creativeType")).value = t.StaticResource.type, n.setAttributeNode(d), l = e.createCDATASection(t.StaticResource.src), n.appendChild(l), i.appendChild(n));
            var a = ["AdParameters", "IFrameResource", "HTMLResource", "CompanionClickThrough"];
            for (r = 0; r < a.length; r++) t.hasOwnProperty(a[r]) && (n = e.createElement(a[r]), l = e.createCDATASection(t[a[r]]), n.appendChild(l), i.appendChild(n));
            if (t.hasOwnProperty("AltText")) {
                n = e.createElement("AltText");
                try {
                    n.innerHTML = t.AltText
                } catch (e) {
                    try {
                        n.textContent = t.AltText
                    } catch (e) {}
                }
                i.appendChild(n)
            }
            if (t.hasOwnProperty("CompanionClickTracking"))
                for (r = 0; r < t.CompanionClickTracking.length; r++) {
                    var s = e.createElement("CompanionClickTracking"),
                        l = e.createCDATASection(t.CompanionClickTracking[r]);
                    s.appendChild(l), i.appendChild(s)
                }
            if (t.hasOwnProperty("TrackingEvents")) {
                for (n = e.createElement("TrackingEvents"), r = 0; r < t.TrackingEvents.length; r++) {
                    var d, c = e.createElement("Tracking");
                    (d = e.createAttribute("event")).value = t.TrackingEvents[r].eventType, c.setAttributeNode(d), l = e.createCDATASection(t.TrackingEvents[r].url), c.appendChild(l), n.appendChild(c)
                }
                i.appendChild(n)
            }
            return i
        }
    }
}, function(e, t) {
    e.exports = {
        parse: function(e, t, n) {
            var i = n.getSubNodes(t, "Icon");
            if (i)
                for (var o = 0; o < i.length; o++) {
                    var r = i[o],
                        a = {},
                        s = n.getNodeAttributeNumberValue(r, "width", -1),
                        l = n.getNodeAttributeNumberValue(r, "height", -1),
                        d = n.getNodeAttributeValue(r, "program"),
                        c = n.getNodeAttributeValue(r, "xPosition"),
                        u = n.getNodeAttributeValue(r, "yPosition");
                    if (!(s <= 0 || l <= 0 || 0 === d.length || 0 === c.length || 0 === u.length)) {
                        a.width = s, a.height = l, a.program = d, a.xPosition = c, a.yPosition = u;
                        (p = n.getNodeAttributeValue(r, "apiFramework")) && (a.apiFramework = p);
                        s = n.getNodeAttributeNumberValue(r, "pxratio", 1);
                        if (1 !== s && (a.pxratio = s), p = n.getNodeAttributeValue(r, "offset")) {
                            if (isNaN(Date.parse("January 1, 1970 " + p))) continue;
                            a.offset = p
                        }
                        if (p = n.getNodeAttributeValue(r, "duration")) {
                            if (isNaN(Date.parse("January 1, 1970 " + p))) continue;
                            a.duration = p
                        }(p = n.getNodeAttributeValue(r, "altText")) && (a.altText = p), (p = n.getNodeAttributeValue(r, "hoverText")) && (a.hoverText = p);
                        l = n.getSubNode(r, "StaticResource");
                        if (l && (p = n.getNodeAttributeValue(l, "creativeType"))) {
                            if ("video/x-flv" === p || "video/x-f4v" === p || "video/f4v" === p || "application/x-shockwave-flash" === p) continue;
                            var p, c = {
                                type: p
                            };
                            (p = n.getNodeValues(l)) && (c.src = p, a.StaticResource = c)
                        }
                        if ((p = n.getSubNodeWholeValue(r, "IFrameResource")) && (a.IFrameResource = p), (p = n.getSubNodeWholeValue(r, "HTMLResource")) && (a.HTMLResource = p), a.StaticResource || a.IFrameResource || a.HTMLResource) {
                            u = n.getSubNode(r, "IconClicks");
                            if (u && ((p = n.getSubNodeValue(r, "IconClickThrough")) && (a.IconClickThrough = p), p = n.getSubNodes(u, "IconClickTracking"))) {
                                a.IconClickTracking = [];
                                for (var h = 0; h < p.length; h++) a.IconClickTracking.push(n.getNodeValues(p[h]))
                            }
                            var m = n.getSubNodes(r, "IconViewTracking");
                            if (m) {
                                a.IconViewTracking = [];
                                for (var f = 0; f < m.length; f++) a.IconViewTracking.push(n.getNodeValues(m[f]))
                            }
                            y = void 0;
                            for (var v = e, g = d, y = 0; y < v.length; y++) v[y].program === g && v.splice(y, 1);
                            e.push(a)
                        }
                    }
                }
        },
        createIconNode: function(e, t) {
            for (var n, i, o, r = e.createElement("Icon"), a = ["width", "height", "program", "xPosition", "yPosition", "apiFramework", "offset", "duration"], s = 0; s < a.length; s++) t.hasOwnProperty(a[s]) && ((i = e.createAttribute(a[s])).value = t[a[s]], r.setAttributeNode(i));
            t.hasOwnProperty("StaticResource") && (n = e.createElement("StaticResource"), (i = e.createAttribute("creativeType")).value = t.StaticResource.type, n.setAttributeNode(i), o = e.createCDATASection(t.StaticResource.src), n.appendChild(o), r.appendChild(n));
            var l, d = ["IFrameResource", "HTMLResource", "IconViewTracking"];
            for (s = 0; s < d.length; s++) t.hasOwnProperty(d[s]) && (n = e.createElement(d[s]), o = e.createCDATASection(t[d[s]]), n.appendChild(o), r.appendChild(n));
            return (t.hasOwnProperty("IconClickThrough") || t.hasOwnProperty("IconClickTracking")) && (l = e.createElement("IconClicks"), t.hasOwnProperty("IconClickThrough") && (n = e.createElement("IconClickThrough"), o = e.createCDATASection(t.IconClickThrough), n.appendChild(o), l.appendChild(n)), t.hasOwnProperty("IconClickTracking") && (n = e.createElement("IconClickTracking"), o = e.createCDATASection(t.IconClickTracking), n.appendChild(o), l.appendChild(n)), r.appendChild(l)), r
        }
    }
}, function(e, t, n) {
    function g(e, t) {
        var n, i, u = "object",
            o = "model",
            r = "name",
            a = "type",
            s = "vendor",
            l = "version",
            d = "console",
            c = "mobile",
            p = "tablet",
            h = "smarttv",
            m = {
                extend: function(e, t) {
                    var n, i = {};
                    for (n in e) t[n] && t[n].length % 2 == 0 ? i[n] = t[n].concat(e[n]) : i[n] = e[n];
                    return i
                },
                has: function(e, t) {
                    return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                },
                lowerize: function(e) {
                    return e.toLowerCase()
                },
                major: function(e) {
                    return "string" == typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0
                },
                trim: function(e) {
                    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                }
            },
            f = {
                rgx: function() {
                    for (var e, t, n, i, o = {}, r = 0, a = arguments, s = 0; s < a[1].length; s++) o[typeof(t = a[1][s]) == u ? t[0] : t] = void 0;
                    for (; r < a.length && !n;) {
                        for (var l = a[r], d = a[r + 1], c = e = 0; c < l.length && !n;)
                            if (n = l[c++].exec(this.getUA()))
                                for (s = 0; s < d.length; s++) i = n[++e], typeof(t = d[s]) == u && 0 < t.length ? 2 === t.length ? "function" == typeof t[1] ? o[t[0]] = t[1].call(this, i) : o[t[0]] = t[1] : 3 === t.length ? "function" != typeof t[1] || t[1].exec && t[1].test ? o[t[0]] = i ? i.replace(t[1], t[2]) : void 0 : o[t[0]] = i ? t[1].call(this, i, t[2]) : void 0 : 4 === t.length && (o[t[0]] = i ? t[3].call(this, i.replace(t[1], t[2])) : void 0) : o[t] = i || void 0;
                        r += 2
                    }
                    return o
                },
                str: function(e, t) {
                    for (var n in t)
                        if (typeof t[n] == u && 0 < t[n].length) {
                            for (var i = 0; i < t[n].length; i++)
                                if (m.has(t[n][i], e)) return "?" === n ? void 0 : n
                        } else if (m.has(t[n], e)) return "?" === n ? void 0 : n;
                    return e
                }
            },
            v = {
                browser: {
                    oldsafari: {
                        version: {
                            "1.0": "/8",
                            1.2: "/1",
                            1.3: "/3",
                            "2.0": "/412",
                            "2.0.2": "/416",
                            "2.0.3": "/417",
                            "2.0.4": "/419",
                            "?": "/"
                        }
                    }
                },
                device: {
                    amazon: {
                        model: {
                            "Fire Phone": ["SD", "KF"]
                        }
                    },
                    sprint: {
                        model: {
                            "Evo Shift 4G": "7373KT"
                        },
                        vendor: {
                            HTC: "APA",
                            Sprint: "Sprint"
                        }
                    }
                },
                os: {
                    windows: {
                        version: {
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        }
                    }
                }
            },
            d = {
                browser: [
                    [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                    [r, l],
                    [/(opios)[\/\s]+([\w\.]+)/i],
                    [
                        [r, "Opera Mini"], l
                    ],
                    [/\s(opr)\/([\w\.]+)/i],
                    [
                        [r, "Opera"], l
                    ],
                    [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],
                    [r, l],
                    [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                    [
                        [r, "IE"], l
                    ],
                    [/(edge)\/((\d+)?[\w\.]+)/i],
                    [r, l],
                    [/(yabrowser)\/([\w\.]+)/i],
                    [
                        [r, "Yandex"], l
                    ],
                    [/(comodo_dragon)\/([\w\.]+)/i],
                    [
                        [r, /_/g, " "], l
                    ],
                    [/(micromessenger)\/([\w\.]+)/i],
                    [
                        [r, "WeChat"], l
                    ],
                    [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                    [l, [r, "MIUI Browser"]],
                    [/\swv\).+(chrome)\/([\w\.]+)/i],
                    [
                        [r, /(.+)/, "$1 WebView"], l
                    ],
                    [/android.+samsungbrowser\/([\w\.]+)/i, /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                    [l, [r, "Android Browser"]],
                    [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i],
                    [r, l],
                    [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /juc.+(ucweb)[\/\s]?([\w\.]+)/i],
                    [
                        [r, "UCBrowser"], l
                    ],
                    [/(dolfin)\/([\w\.]+)/i],
                    [
                        [r, "Dolphin"], l
                    ],
                    [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                    [
                        [r, "Chrome"], l
                    ],
                    [/;fbav\/([\w\.]+);/i],
                    [l, [r, "Facebook"]],
                    [/fxios\/([\w\.-]+)/i],
                    [l, [r, "Firefox"]],
                    [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                    [l, [r, "Mobile Safari"]],
                    [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                    [l, r],
                    [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                    [r, [l, f.str, v.browser.oldsafari.version]],
                    [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                    [r, l],
                    [/(navigator|netscape)\/([\w\.-]+)/i],
                    [
                        [r, "Netscape"], l
                    ],
                    [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                    [r, l]
                ],
                device: [
                    [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                    [o, s, [a, p]],
                    [/applecoremedia\/[\w\.]+ \((ipad)/],
                    [o, [s, "Apple"],
                        [a, p]
                    ],
                    [/(apple\s{0,1}tv)/i],
                    [
                        [o, "Apple TV"],
                        [s, "Apple"]
                    ],
                    [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                    [s, o, [a, p]],
                    [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
                    [o, [s, "Amazon"],
                        [a, p]
                    ],
                    [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
                    [
                        [o, f.str, v.device.amazon.model],
                        [s, "Amazon"],
                        [a, c]
                    ],
                    [/\((ip[honed|\s\w*]+);.+(apple)/i],
                    [o, s, [a, c]],
                    [/\((ip[honed|\s\w*]+);/i],
                    [o, [s, "Apple"],
                        [a, c]
                    ],
                    [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                    [s, o, [a, c]],
                    [/\(bb10;\s(\w+)/i],
                    [o, [s, "BlackBerry"],
                        [a, c]
                    ],
                    [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
                    [o, [s, "Asus"],
                        [a, p]
                    ],
                    [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                    [
                        [s, "Sony"],
                        [o, "Xperia Tablet"],
                        [a, p]
                    ],
                    [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],
                    [
                        [s, "Sony"],
                        [o, "Xperia Phone"],
                        [a, c]
                    ],
                    [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                    [s, o, [a, d]],
                    [/android.+;\s(shield)\sbuild/i],
                    [o, [s, "Nvidia"],
                        [a, d]
                    ],
                    [/(playstation\s[34portablevi]+)/i],
                    [o, [s, "Sony"],
                        [a, d]
                    ],
                    [/(sprint\s(\w+))/i],
                    [
                        [s, f.str, v.device.sprint.vendor],
                        [o, f.str, v.device.sprint.model],
                        [a, c]
                    ],
                    [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                    [s, o, [a, p]],
                    [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],
                    [s, [o, /_/g, " "],
                        [a, c]
                    ],
                    [/(nexus\s9)/i],
                    [o, [s, "HTC"],
                        [a, p]
                    ],
                    [/(nexus\s6p)/i],
                    [o, [s, "Huawei"],
                        [a, c]
                    ],
                    [/(microsoft);\s(lumia[\s\w]+)/i],
                    [s, o, [a, c]],
                    [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                    [o, [s, "Microsoft"],
                        [a, d]
                    ],
                    [/(kin\.[onetw]{3})/i],
                    [
                        [o, /\./g, " "],
                        [s, "Microsoft"],
                        [a, c]
                    ],
                    [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                    [o, [s, "Motorola"],
                        [a, c]
                    ],
                    [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                    [o, [s, "Motorola"],
                        [a, p]
                    ],
                    [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                    [
                        [s, m.trim],
                        [o, m.trim],
                        [a, h]
                    ],
                    [/hbbtv.+maple;(\d+)/i],
                    [
                        [o, /^/, "SmartTV"],
                        [s, "Samsung"],
                        [a, h]
                    ],
                    [/\(dtv[\);].+(aquos)/i],
                    [o, [s, "Sharp"],
                        [a, h]
                    ],
                    [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                    [
                        [s, "Samsung"], o, [a, p]
                    ],
                    [/smart-tv.+(samsung)/i],
                    [s, [a, h], o],
                    [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i],
                    [
                        [s, "Samsung"], o, [a, c]
                    ],
                    [/sie-(\w+)*/i],
                    [o, [s, "Siemens"],
                        [a, c]
                    ],
                    [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
                    [
                        [s, "Nokia"], o, [a, c]
                    ],
                    [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                    [o, [s, "Acer"],
                        [a, p]
                    ],
                    [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                    [
                        [s, "LG"], o, [a, p]
                    ],
                    [/(lg) netcast\.tv/i],
                    [s, o, [a, h]],
                    [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i],
                    [o, [s, "LG"],
                        [a, c]
                    ],
                    [/android.+(ideatab[a-z0-9\-\s]+)/i],
                    [o, [s, "Lenovo"],
                        [a, p]
                    ],
                    [/linux;.+((jolla));/i],
                    [s, o, [a, c]],
                    [/((pebble))app\/[\d\.]+\s/i],
                    [s, o, [a, "wearable"]],
                    [/android.+;\s(glass)\s\d/i],
                    [o, [s, "Google"],
                        [a, "wearable"]
                    ],
                    [/android.+;\s(pixel c)\s/i],
                    [o, [s, "Google"],
                        [a, p]
                    ],
                    [/android.+;\s(pixel xl|pixel)\s/i],
                    [o, [s, "Google"],
                        [a, c]
                    ],
                    [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i],
                    [
                        [o, /_/g, " "],
                        [s, "Xiaomi"],
                        [a, c]
                    ],
                    [/android.+a000(1)\s+build/i],
                    [o, [s, "OnePlus"],
                        [a, c]
                    ],
                    [/\s(tablet)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                    [
                        [a, m.lowerize], s, o
                    ]
                ],
                engine: [
                    [/windows.+\sedge\/([\w\.]+)/i],
                    [l, [r, "EdgeHTML"]],
                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                    [r, l],
                    [/rv\:([\w\.]+).*(gecko)/i],
                    [l, r]
                ],
                os: [
                    [/microsoft\s(windows)\s(vista|xp)/i],
                    [r, l],
                    [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                    [r, [l, f.str, v.os.windows.version]],
                    [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                    [
                        [r, "Windows"],
                        [l, f.str, v.os.windows.version]
                    ],
                    [/\((bb)(10);/i],
                    [
                        [r, "BlackBerry"], l
                    ],
                    [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i],
                    [r, l],
                    [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                    [
                        [r, "Symbian"], l
                    ],
                    [/\((series40);/i],
                    [r],
                    [/mozilla.+\(mobile;.+gecko.+firefox/i],
                    [
                        [r, "Firefox OS"], l
                    ],
                    [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
                    [r, l],
                    [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                    [
                        [r, "Chromium OS"], l
                    ],
                    [/(sunos)\s?([\w\.]+\d)*/i],
                    [
                        [r, "Solaris"], l
                    ],
                    [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                    [r, l],
                    [/(haiku)\s(\w+)/i],
                    [r, l],
                    [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],
                    [
                        [r, "iOS"],
                        [l, /_/g, "."]
                    ],
                    [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
                    [
                        [r, "Mac OS"],
                        [l, /_/g, "."]
                    ],
                    [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i],
                    [r, l]
                ]
            };
        return this instanceof g ? (n = e || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : ""), i = t ? m.extend(d, t) : d, this.getBrowser = function() {
            var e = f.rgx.apply(this, i.browser);
            return e.major = m.major(e.version), e
        }, this.getDevice = function() {
            return f.rgx.apply(this, i.device)
        }, this.getEngine = function() {
            return f.rgx.apply(this, i.engine)
        }, this.getOS = function() {
            return f.rgx.apply(this, i.os)
        }, this.getResult = function() {
            return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice()
            }
        }, this.getUA = function() {
            return n
        }, this) : new g(e, t).getResult()
    }
    n(2).always("UserAgentParser", "Version 0.0.1");
    e.exports = g
}, function(e, t, n) {
    function r(e) {
        o.debug(i, e)
    }
    var i = "CapabilityDetection",
        o = n(2);

    function a() {
        return !!/Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)
    }

    function s() {
        return /iphone/i.test(navigator.userAgent.toLowerCase()) || /ipad/i.test(navigator.userAgent.toLowerCase())
    }

    function l() {
        var e, t = navigator.userAgent,
            n = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(n[1])) return e = /\brv[ :]+(\d+)/g.exec(t) || [], "IE";
        if ("Chrome" === n[1]) {
            if (null !== (e = t.match(/\bOPR\/(\d+)/))) return "Opera";
            if (null !== (e = t.match(/\bEdg\/(\d+)/))) return "Edge"
        }
        return n = n[2] ? [n[1], n[2]] : [navigator.appName, navigator.appVersion, "-?"], null !== (e = t.match(/version\/(\d+)/i)) && n.splice(1, 1, e[1]), n[0]
    }
    e.exports = {
        supportsFlash: function() {
            return !1
        },
        isBrowserOnMobile: a,
        getBrowserName: l,
        canPlay: function(e, t) {
            function n(e, t, n) {
                return r("invoke canPlayType with video(" + e + ") and type(" + t + ") and codec(" + n + ")"), e && e.canPlayType ? (n = n && "" !== n ? e.canPlayType(t + ';codecs="' + n + '"') : e.canPlayType(t), r("result : " + n), n) : (r("result : failed to invoke canPlayType with " + e), "")
            }
            var i = null;
            if ("video/x-flv" === (o = e.toLowerCase()) || "video/x-f4v" === o || "video/f4v" === o || "application/x-shockwave-flash" === o) return !1;
            if ("application/javascript" !== (o = e.toLowerCase()) && "application/x-javascript" !== o) {
                var o = e.toLowerCase();
                if (!t || "" === t)
                    if ("video/mp4" === o) t = "avc1.42E01E,mp4a.40.2", i = "avc1.42E01E";
                    else if ("video/webm" === o) t = "vp8,vorbis";
                else if ("video/ogg" === o) t = "theora,vorbis";
                else if ("audio/mpeg" !== (e = o) && "audio/mp4" !== e && "audio/ogg" !== e && "audio/x-pn-realaudio" !== e && ("video/x-ms-wmv" !== (e = o) && "video/x-msvideo" !== e && "video/mpeg" !== e && "video/quicktime" !== e && "video/3gpp" !== e && "video/3gpp2" !== e && "video/x-m4v" !== e)) return !1;
                e = document.createElement("video"), t = n(e, o, t);
                if ("probably" !== t) {
                    if ("maybe" !== t) return !1;
                    if (i) return "probably" === n(e, o, i);
                    t = o;
                    if ("video/3gpp" === t) {
                        t = l();
                        if ("Chrome" === t || "Edge" === t) return !1
                    }
                }
            }
            return !0
        },
        getPlatformType: function() {
            return a() ? /android/i.test(navigator.userAgent.toLowerCase()) ? "mobile-Android" : s() ? "mobile-iOS" : "mobile-unknown" : "desktop-no-flash"
        }
    }
}, function(e, t, _) {
    var E = _(63),
        M = _(64),
        N = _(65);
    e.exports = function(e, t, n, i, o, r, a, s, l) {
        var d = _(2),
            c = "VAST Parser",
            S = e,
            C = t,
            u = n,
            p = l,
            h = o,
            m = r,
            f = i,
            v = a,
            I = s,
            P = new E;
        var j = function(e) {
            t = (e = e).indexOf("<"), e = e.substr(-1 === t ? 0 : t);
            var t = e = -1 !== (t = e.lastIndexOf(">")) ? e.substr(0, t + 1) : e,
                e = null;
            if (void 0 !== window.DOMParser) {
                if ("parsererror" === (e = (new DOMParser).parseFromString(t, "text/xml")).documentElement.nodeName) {
                    try {
                        d.error(c, "Error reason = " + e.documentElement.childNodes[0].nodeValue)
                    } catch (e) {}
                    return null
                }
            } else {
                if (void 0 === window.ActiveXObject) return d.error(c, "Failed to get vast xml parser"), null;
                try {
                    if ((e = new window.ActiveXObject("Microsoft.XMLDOM")).loadXML(t), 0 !== e.parseError.errorCode) return d.error(c, e.parseError), null
                } catch (e) {
                    return d.error(c, "Failed to parse vast xml by window.ActiveXObject(Microsoft.XMLDOM)", e), null
                }
            }
            return e
        }(e.vastXml);
        if (t = e.vastVersion, j && (n = P.getSubNode(j, "VAST")) && ((l = j.createAttribute("version")).value = t, n.setAttributeNode(l)), j) {
            o = P.getSubNode(j, "VAST");
            if (o) {
                var g = P.getSubNodes(o, "Ad");
                if (g && 0 < g.length)
                    for (var y = 0; y < g.length; y++) {
                        u && ((A = j.createAttribute("notifyurl")).value = u, g[y].setAttributeNode(A)), f && "rtb" === f && ((A = j.createAttribute("rtb")).value = "true", g[y].setAttributeNode(A));
                        var A, b = j.createAttribute("sequence");
                        b.value = S.sequence.toString(), g[y].setAttributeNode(b), h && ((b = j.createAttribute("buyerMemberId")).value = h, g[y].setAttributeNode(b)), v && ((b = j.createAttribute("viewabilityConfig")).value = v, g[y].setAttributeNode(b)), p && ((b = j.createAttribute("creativeId")).value = p, g[y].setAttributeNode(b)), m && ((b = j.createAttribute("brandCategoryId")).value = m, g[y].setAttributeNode(b))
                    }
            }
        }

        function x(e, t) {
            t = j.createCDATASection(t);
            e.appendChild(t)
        }
        var V = null;

        function w() {
            C && (b = P.getSubNode(j, "VAST"), (n = j.createAttribute("adtoken")).value = C, b.setAttributeNode(n));
            var n, e, t, i = P.getSubNode(j, "InLine");
            if (!i) return null;
            if (S.extImpressionUrls && "string" == typeof S.extImpressionUrls) {
                var o = JSON.parse(S.extImpressionUrls);
                if (Array.isArray(o) && 0 < o.length)
                    for (h = 0; h < o.length; h++) x(e = j.createElement("Impression"), o[h]), i.appendChild(e);
                delete S.extImpressionUrls
            }
            if (I && I.impressions)
                for (h = 0; h < I.impressions.length; h++) I.impressions[h] && (x(e = j.createElement("Impression"), I.impressions[h]), i.appendChild(e));
            if (S.extErrorUrls && "string" == typeof S.extErrorUrls) {
                var r = JSON.parse(S.extErrorUrls);
                if (Array.isArray(r) && 0 < r.length)
                    for (h = 0; h < r.length; h++) x(t = j.createElement("Error"), r[h]), i.appendChild(t);
                delete S.extErrorUrls
            }
            if (I && I.errors)
                for (h = 0; h < I.errors.length; h++) I.errors[h] && (x(t = j.createElement("Error"), I.errors[h]), i.appendChild(t));
            if (S.extViewableImpression && "string" == typeof S.extViewableImpression) {
                var a = JSON.parse(S.extViewableImpression),
                    s = j.createElement("ViewableImpression");
                if (Array.isArray(a.viewable) && 0 < a.viewable.length)
                    for (h = 0; h < a.viewable.length; h++) {
                        var l = j.createElement("Viewable");
                        x(l, a.viewable[h]), s.appendChild(l)
                    }
                if (Array.isArray(a.notViewable) && 0 < a.notViewable.length)
                    for (h = 0; h < a.notViewable.length; h++) {
                        var d = j.createElement("NotViewable");
                        x(d, a.notViewable[h]), s.appendChild(d)
                    }
                if (Array.isArray(a.undetermined) && 0 < a.undetermined.length)
                    for (h = 0; h < a.undetermined.length; h++) {
                        var c = j.createElement("ViewUndetermined");
                        x(c, a.undetermined[h]), s.appendChild(c)
                    }
                i.appendChild(s), delete S.extViewableImpression
            }
            if (S.extVerifications && "string" == typeof S.extVerifications) {
                function u(e) {
                    var t = j.createElement("JavaScriptResource");
                    x(t, e.url), v.appendChild(t), e.apiFramework && ((n = j.createAttribute("apiFramework")).value = e.apiFramework, t.setAttributeNode(n)), e.browserOptional && ((n = j.createAttribute("browserOptional")).value = e.browserOptional, t.setAttributeNode(n))
                }
                for (var p = JSON.parse(S.extVerifications), h = (P.getSubNode(i, "AdVerifications") || (b = j.createElement("AdVerifications"), i.appendChild(b)), 0); h < p.length; h++) {
                    var m, f = p[h],
                        v = j.createElement("Verification");
                    if (f.vendor && ((n = j.createAttribute("vendor")).value = f.vendor, v.setAttributeNode(n)), f.jsResources && f.jsResources.forEach(u), f.trackingEvents) {
                        var g, y = j.createElement("TrackingEvents");
                        for (g in f.trackingEvents) {
                            var A = j.createElement("Tracking");
                            (n = j.createAttribute("event")).value = g, A.setAttributeNode(n), x(A, f.trackingEvents[g]), y.appendChild(A)
                        }
                        v.appendChild(y)
                    }
                    f.verificationParameters && (x(m = j.createElement("VerificationParameters"), f.verificationParameters), v.appendChild(m)), i.appendChild(v)
                }
            }
            var b = _(66)().browser.name.toLowerCase();
            if (S.extExtensions && "string" == typeof S.extExtensions && (0 < (E = S.extExtensions).length && ((T = P.getSubNode(i, "Extensions")) ? "ie" === b ? T.textContent = T.textContent.toString() + E : T.innerHTML = T.innerHTML.toString() + E : (T = j.createElement("Extensions"), i.appendChild(T), "ie" === b ? T.textContent = E : T.innerHTML = E)), delete S.extExtensions), S.hasOwnProperty("fallbackIndex")) {
                (T = P.getSubNode(i, "Extensions")) || (T = j.createElement("Extensions"), i.appendChild(T));
                var w = !1,
                    k = P.getSubNodes(T, "Extension");
                if (k && 0 < k.length)
                    for (h = 0; h < k.length; h++)
                        if ("waterfall" === P.getNodeAttributeValue(k[h], "type")) {
                            w = !0, k[h].setAttribute("fallback_index", S.fallbackIndex);
                            break
                        }
                w || (b = j.createElement("Extension"), (n = j.createAttribute("type")).value = "waterfall", b.setAttributeNode(n), (E = j.createAttribute("fallback_index")).value = S.fallbackIndex, b.setAttributeNode(E), T.appendChild(b))
            }(V = P.getSubNode(i, "Creatives")) || (V = j.createElement("Creatives"), i.appendChild(V));
            var T, E = P.getSubNode(V, "Linear");
            return E || (T = j.createElement("Creative"), V.appendChild(T), E = j.createElement("Linear"), T.appendChild(E)), E
        }

        function k(e) {
            var t, n, i;
            if (S.extTrackingUrls && "string" == typeof S.extTrackingUrls && 5 < S.extTrackingUrls.length) {
                var o, r = JSON.parse(S.extTrackingUrls),
                    a = P.getSubNode(e, "TrackingEvents");
                for (o in a || (a = j.createElement("TrackingEvents"), e.appendChild(a)), r)
                    for (var s = r[o], l = 0; l < s.length; l++) {
                        var d = j.createElement("Tracking"),
                            c = j.createAttribute("event");
                        c.value = o, d.setAttributeNode(c), x(d, s[l]), a.appendChild(d)
                    }
                delete S.extTrackingUrls
            }
            if (S.extClickUrls && "string" == typeof S.extClickUrls && (t = JSON.parse(S.extClickUrls), Array.isArray(t) && 0 < t.length && ((i = P.getSubNode(e, "VideoClicks")) || (i = j.createElement("VideoClicks"), e.appendChild(i)), P.getSubNode(i, "ClickThrough") || (x(n = j.createElement("ClickThrough"), t[0]), i.appendChild(n))), delete S.extClickUrls), S.extCustomClicks && "string" == typeof S.extCustomClicks) {
                var u = JSON.parse(S.extCustomClicks);
                if (Array.isArray(u) && 0 < u.length)
                    for ((i = P.getSubNode(e, "VideoClicks")) || (i = j.createElement("VideoClicks"), e.appendChild(i)), l = 0; l < u.length; l++) {
                        var p = j.createElement("CustomClick");
                        x(p, u[l]), i.appendChild(p)
                    }
                delete S.extCustomClicks
            }
            if (S.extClickTrackingUrls && "string" == typeof S.extClickTrackingUrls) {
                var h = JSON.parse(S.extClickTrackingUrls);
                if (Array.isArray(h) && 0 < h.length)
                    for ((i = P.getSubNode(e, "VideoClicks")) || (i = j.createElement("VideoClicks"), e.appendChild(i)), l = 0; l < h.length; l++) {
                        var m = j.createElement("ClickTracking");
                        x(m, h[l]), i.appendChild(m)
                    }
                delete S.extClickTrackingUrls
            }
            if (S.extIcons && "string" == typeof S.extIcons) {
                var f = JSON.parse(S.extIcons);
                if (Array.isArray(f) && 0 < f.length) {
                    var v, g = P.getSubNode(e, "Icons");
                    for (g || (g = j.createElement("Icons"), e.appendChild(g)), l = 0; l < f.length; l++) ! function(e, t) {
                        var n = P.getSubNodes(e, "Icon");
                        if (n && 0 < n.length)
                            for (var i = 0; i < n.length; i++)
                                if (P.getNodeAttributeValue(n[i], "program").toLowerCase() === t.toLowerCase()) return 1
                    }(g, f[l].program) && (v = N.createIconNode(j, f[l])) && g.appendChild(v)
                }
                delete S.extIcons
            }
        }

        function T() {
            if (S.extCompanions && "string" == typeof S.extCompanions) {
                var e = JSON.parse(S.extCompanions);
                if (Array.isArray(e.companions) && 0 < e.companions.length) {
                    var t, n = P.getSubNode(V, "CompanionAds");
                    n || (n = j.createElement("CompanionAds"), V.appendChild(n)), "unknown" !== e.required && ((t = j.createAttribute("required")).value = e.required, n.setAttributeNode(t));
                    for (var i = 0; i < e.companions.length; i++) {
                        p = u = d = l = s = c = o = a = r = void 0;
                        var o, r = n,
                            a = e.companions[i],
                            s = {
                                companions: []
                            },
                            l = (M.parse(s, r, P), s.companions);
                        if (a.StaticResource || a.IFrameResource || a.HTMLResource) {
                            for (var d = !1, c = 0; c < l.length; c++)
                                if (a.width === l[c].width && a.height === l[c].height) {
                                    d = !0;
                                    break
                                }
                            d || (o = M.createCompanionNode(j, a), r.appendChild(o))
                        } else {
                            var u = !1;
                            for (c = 0; c < l.length; c++)
                                if (a.width === l[c].width && a.height === l[c].height && (a.id && a.id === l[c].id || !a.id)) {
                                    a.CompanionClickTracking && (l[c].CompanionClickTracking || (l[c].CompanionClickTracking = []), l[c].CompanionClickTracking = l[c].CompanionClickTracking.concat(a.CompanionClickTracking)), a.TrackingEvents && (l[c].TrackingEvents || (l[c].TrackingEvents = []), l[c].TrackingEvents = l[c].TrackingEvents.concat(a.TrackingEvents)), u = !0;
                                    break
                                }
                            if (u) {
                                for (; r.firstChild;) r.removeChild(r.firstChild);
                                for (var p = 0; p < l.length; p++) o = M.createCompanionNode(j, l[p]), r.appendChild(o)
                            }
                        }
                    }
                }
            }
        }
        this.addTrackers = function() {
            if (!j) return "";
            var e, t = w();
            if (!t) return "";
            k(t), V && T();
            t = _(66)().browser.name.toLowerCase();
            if ("edge" === t) e = j.childNodes[0].outerHTML;
            else if ("ie" === t) {
                for (var n = j.getElementsByTagName("AdParameters"), i = 0; i < n.length; i++) 0 < n[i].textContent.indexOf("]]>") && "<![CDATA[" !== n[i].textContent.substr(0, 9) && (n[i].textContent = n[i].textContent.replace(/]]>/g, "]]]]><![CDATA[>"), n[i].textContent = "<![CDATA[" + n[i].textContent + "]]>");
                e = (e = (e = (new XMLSerializer).serializeToString(j)).replace(/&lt;/g, "<")).replace(/&gt;/g, ">")
            } else e = (new XMLSerializer).serializeToString(j);
            return e
        }
    }
}, function(e, t, f) {
    var v = f(63);
    e.exports = function(e, t) {
        var n = f(2),
            i = "VAST Parser",
            o = e,
            r = new v;

        function a(e) {
            t = (e = e).indexOf("<"), e = e.substr(-1 === t ? 0 : t);
            var t = e = -1 !== (t = e.lastIndexOf(">")) ? e.substr(0, t + 1) : e,
                e = null;
            if (void 0 !== window.DOMParser) {
                if ("parsererror" === (e = (new DOMParser).parseFromString(t, "text/xml")).documentElement.nodeName) {
                    try {
                        n.error(i, "Error reason = " + e.documentElement.childNodes[0].nodeValue)
                    } catch (e) {}
                    return null
                }
            } else {
                if (void 0 === window.ActiveXObject) return n.error(i, "Failed to get vast xml parser"), null;
                try {
                    if ((e = new window.ActiveXObject("Microsoft.XMLDOM")).loadXML(t), 0 !== e.parseError.errorCode) return n.error(i, e.parseError), null
                } catch (e) {
                    return n.error(i, "Failed to parse vast xml by window.ActiveXObject(Microsoft.XMLDOM)", e), null
                }
            }
            return e
        }
        var s = a(o[0]);
        if (s) {
            for (var l = r.getSubNode(s, "VAST"), e = s.createAttribute("apn_waterfall"), d = (e.value = !0, l.setAttributeNode(e), t && ((e = s.createAttribute("apn_fallback")).value = !0, l.setAttributeNode(e)), []), c = 0; c < o.length; c++) {
                var u = a(o[c]),
                    u = r.getSubNode(u, "VAST"),
                    p = r.getSubNodes(u, "Ad");
                if (p && 0 < p.length)
                    for (var h = 0; h < p.length; h++) d.push(p[h])
            }
            d.sort(function(e, t) {
                return r.getNodeAttributeNumberValue(e, "sequence") - r.getNodeAttributeNumberValue(t, "sequence")
            });
            var m = f(66)().browser.name.toLowerCase();
            for ("ie" === m ? l.textContent = "" : l.innerHTML = "", c = 0; c < d.length; c++) l.appendChild(d[c]);
            this.getVastXml = function() {
                if (!s) return "";
                var e;
                if ("edge" === m) e = s.childNodes[0].outerHTML;
                else if ("ie" === m) {
                    for (var t = s.getElementsByTagName("AdParameters"), n = 0; n < t.length; n++) 0 < t[n].textContent.indexOf("]]>") && "<![CDATA[" !== t[n].textContent.substr(0, 9) && (t[n].textContent = t[n].textContent.replace(/]]>/g, "]]]]><![CDATA[>"), t[n].textContent = "<![CDATA[" + t[n].textContent + "]]>");
                    e = (e = (e = (new XMLSerializer).serializeToString(s)).replace(/&lt;/g, "<")).replace(/&gt;/g, ">")
                } else e = (new XMLSerializer).serializeToString(s);
                return e
            }
        }
    }
}, function(e, t, n) {
    function d(e) {
        o.warn(i, e)
    }

    function c(e) {
        o.info(i, e)
    }
    var u = "[ERRORCODE]",
        p = "[CACHEBUSTING]",
        h = "AN_DEFAULT",
        m = n(29),
        f = n(8),
        i = "TM",
        v = {},
        o = n(2),
        g = function(e) {
            o.log(i, e)
        },
        a = function(e) {
            o.verbose(i, e)
        },
        r = (a("Tracking Manager Version 1.0.14"), null);

    function s(e, t) {
        (v = v || {})[t = t || h] || (v[t] = {});
        var n = {
            isImpression: !1,
            reportOnce: !0,
            reported: !1,
            urls: []
        };
        v[t][e] = n, a("tracking data created, adId=" + t + ", event=" + e)
    }

    function l(e) {
        var t = e;
        switch (e) {
            case "impressionUrls":
                t = "impression";
                break;
            case "clickTrackingUrls":
            case "click":
                t = "ad-click";
                break;
            case "errorUrls":
                t = "error";
                break;
            case "imp_tracking_url":
                t = "bid-impression";
                break;
            case "init_cb":
                t = "ad-request";
                break;
            case "result_cb":
                t = "ad-response";
                break;
            case "start":
                t = "video-start";
                break;
            case "firstQuartile":
                t = "video-first-quartile";
                break;
            case "midpoint":
                t = "video-mid";
                break;
            case "thirdQuartile":
            case "thirdQuartile":
                t = "video-third-quartile";
                break;
            case "complete":
                t = "video-complete";
                break;
            case "unmute":
                t = "audio-unmute";
                break;
            case "mute":
                t = "audio-mute";
                break;
            case "pause":
                t = "video-pause";
                break;
            case "rewind":
                t = "rewind";
                break;
            case "resume":
                t = "video-resume";
                break;
            case "fullscreen":
                t = "video-fullscreen";
                break;
            case "exitFullscreen":
                t = "video-exit-fullscreen";
                break;
            case "creativeView":
                t = "creative-view";
                break;
            case "expand":
                t = "ad-expand";
                break;
            case "collapse":
                t = "ad-collapse";
                break;
            case "acceptInvitation":
                t = "user-accept-invitation";
                break;
            case "close":
                t = "user-close";
                break;
            case "progress":
                t = "ad-progress";
                break;
            case "skip":
                t = "video-skip"
        }
        return t
    }

    function y(e, t, n) {
        n = n || h, e = l(e), v.hasOwnProperty(n) && v[n].hasOwnProperty(e) || s(e, n), v[n][e].urls.push(t), a("Tracking added, adId=" + n + ", event=" + e + ", url=" + t)
    }

    function A(e, t) {
        var n = "";
        return n = f.isNotEmpty(e) && f.isNotEmpty(t) ? (e = l(e)) + "_" + t : n
    }

    function b(e, t, n) {
        n = n || h, f.isNotEmpty(e) && (v.hasOwnProperty(n) && v[n].hasOwnProperty(e) || s(e, n), v[n][e].reportOnce = t, a("setting report once, adId=" + n + ", event=" + e + ", setting=" + t))
    }

    function w(e, t) {
        var n, i, o, r;
        if (t = t || h, v && v.hasOwnProperty(t))
            for (n in v[t]) i = n, r = !1, o = v[o = (o = t) || h][i], (r = o && o.hasOwnProperty("isImpression") ? !0 === o.isImpression : r) && !e ? a("reset history skipping impression event=" + n + ", adId=" + t) : (v[t][n].reported = !1, a("reset history for adId= " + t + ", event=" + n))
    }

    function k(e, t, n) {
        n = n || h, e = l(e), v.hasOwnProperty(n) && v[n].hasOwnProperty(e) || s(e, n), v[n][e].isImpression = t
    }

    function T(e, t) {
        var n, i, o, r;
        return t && (n = (n = t.value) && "number" == typeof n ? n.toString() : n, f.isNotEmpty(n) && (t = t.macro, f.isNotEmpty(t) ? -1 < e.indexOf(t) && (o = n, t = t, e = r = -1 < (r = i = e).indexOf(t) ? i.replace(t, o) : r) : (i = n, t = "?", -1 < (o = e).indexOf("?") && (t = "&"), e = o + t + i))), e
    }
    var E, S = {
        TIMESTAMP: (new Date).toISOString(),
        MEDIAPLAYHEAD: null,
        BREAKPOSITION: null,
        ADCOUNT: null,
        TRANSACTIONID: (E = (new Date).getTime(), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = (E + 16 * Math.random()) % 16 | 0;
            return E = Math.floor(E / 16), ("x" === e ? t : 3 & t | 8).toString(16)
        })),
        PLACEMENTTYPE: null,
        IFA: -1,
        IFATYPE: -1,
        CLIENTUA: null,
        DEVICEIP: null,
        LATLONG: -1,
        PAGEURL: function() {
            try {
                return top && top.location && top.location.href ? top.location.href : -1
            } catch (e) {
                return -1
            }
        }(),
        APPNAME: -1,
        APIFRAMEWORKS: "2,7",
        EXTENSIONS: -1,
        PLAYERCAPABILITIES: null,
        CLICKTYPE: null,
        PLAYERSTATE: null,
        PLAYERSIZE: null,
        ADPLAYHEAD: null,
        ASSETURI: null,
        PODSEQUENCE: null,
        CLICKPOS: -1,
        LIMITADTRACKING: null
    };

    function C(e) {
        for (var t in S) {
            var n;
            0 <= e.indexOf("[" + t + "]") && (null === (n = S[t]) && (n = r ? r.resolveMacro(t) : -1), e = e.split("[" + t + "]").join(encodeURIComponent(n)))
        }
        return e
    }

    function I(e, t, n) {
        var i = !1;
        if (v.hasOwnProperty(n = n || h) && v[n].hasOwnProperty(e)) {
            var o = v[n][e];
            if (o)
                if (o.reportOnce && o.reported) c("Cannot report event - event has already been reported: " + e + " for adId=" + n), i = !0;
                else {
                    var r = o.urls;
                    if (r) {
                        o.reported = !0;
                        for (var a = 0; a < r.length; a++) {
                            var s, l = r[a];
                            f.isNotEmpty(l) && (i = !0, t && (l = T(l, t)), s = "" + Math.floor(1e7 * Math.random()), -1 < l.indexOf(p) ? l = T(l, {
                                macro: p,
                                value: s
                            }) : o.reportOnce || "ad-click" === e || (l = T(l, {
                                value: "apn_rnd=" + s
                            })), l = C(l), g("requesting tracking for " + (s = e) + ", url=" + (l = l)), m.trackPixel(l, s))
                        }
                    }
                }
        }
        i || d("No tracking urls found for adId=" + n + ", event = " + e)
    }

    function P(e, t, n, i) {
        I(A(e, t), function(e) {
            a("Creating params for mediation tracking from obj: " + f.objectToString(e));
            var t = {},
                n = "";
            if (e)
                for (var i in e) null !== e[i] && "undefined" !== e[i] && (0 < n.length && (n += "&"), n += i + "=" + e[i]);
            return t.value = n, t
        }(n), i)
    }

    function j(e) {
        return "progress>" + e
    }

    function x(e) {
        if (e = e || h, v && v.hasOwnProperty(e)) {
            var t, n = v[e];
            for (t in delete v[e], n) a("Removing event: " + t + " for adId=" + e)
        }
    }
    e.exports = {
        init: function(e, t) {
            if (x(t), e)
                for (var n = 0; n < e.length; n++) b(e[n], !1, t)
        },
        setPlayer: function(e) {
            r = e
        },
        addTrackingEvent: function(e, t, n) {
            y(e, t, n)
        },
        addTrackingEvents: function(e, t) {
            if (e)
                for (var n in e) {
                    var i = e[n];
                    if (f.isNotEmpty(i))
                        for (var o = 0; o < i.length; o++) y(n, i[o], t)
                }
        },
        addMediationTrackingEvent: function(e, t, n, i) {
            var o = A(e, t);
            a("creating event name for adId=" + (i || h) + ", event=" + e + ", networkName=" + t + " =>" + o), y(o, n, i)
        },
        addProgressTrackingEvent: function(e, t, n) {
            y(j(e), t, n)
        },
        markAsImpressionEvent: function(e, t, n) {
            a("marking event as impression: " + e + ", adId=" + (n || h) + ", value=" + t), k(e, t, n)
        },
        markAsMediationImpressionEvent: function(e, t, n, i) {
            f.isNotEmpty(n) && (e = A(e, n)), a("marking event as impression: " + e + ", adId=" + (i || h) + ", value=" + t), k(e, t, i)
        },
        reportOnlyOnce: function(e, t, n) {
            b(e, t, n)
        },
        reportMediationOnlyOnce: function(e, t, n, i) {
            e = e, t = t, n = n, i = (i = i) || h, f.isNotEmpty(e) && (e = l(e), f.isNotEmpty(n) && (e = A(e, n)), v.hasOwnProperty(i) && v[i].hasOwnProperty(e) || s(e, i), v[i][e].reportOnce = t, a("setting report once, adId=" + i + ", event=" + e + ", setting=" + t))
        },
        resetTrackingHistory: function(e, t) {
            w(e, t)
        },
        requestTracking: function(e, t) {
            c("tracking requested for " + e + ", adId=" + (t || h)), I(e, null, t)
        },
        getTrackingUrls: function(e, t) {
            c("URLs requested for " + e + ", adId=" + (t || h));
            var n = [],
                i = !1;
            if (v.hasOwnProperty(t = t || h) && v[t].hasOwnProperty(e)) {
                var o = v[t][e];
                if (o) {
                    var r = o.urls;
                    if (r)
                        for (var a = 0; a < r.length; a++) {
                            var s = r[a];
                            f.isNotEmpty(s) && (i = !0, s = C(s), n.push(s))
                        }
                }
            }
            return i || d("No tracking urls found for adId=" + t + ", event = " + e), n
        },
        requestParamTracking: function(e, t, n) {
            c("tracking requested for " + e + " with param=" + f.objectToString(t) + ", adId=" + (n || h)), I(e, t, n)
        },
        requestMediationTracking: function(e, t, n, i) {
            c("tracking requested for mediation event: " + e + ", network=" + t + " , params=" + f.objectToString(n) + ", adId=" + (i || h)), P(e, t, n, i)
        },
        requestErrorTracking: function(e, t, n, i) {
            c("error reported: " + e + ", type=" + t + ", desc=" + n);
            var n = {},
                o = "",
                o = (1 === t ? (n.macro = u, n.value = e) : n.value = "error=" + e, "error");
            this.requestParamTracking(o, n, i)
        },
        requestErrorTrackingUrls: function(e, t, n, i) {
            var o = {};
            1 === t ? (o.macro = u, o.value = e) : o.value = "error=" + e;
            var t = "error",
                r = o,
                e = i,
                a = [];
            if (v.hasOwnProperty(e = e || h) && v[e].hasOwnProperty(t)) {
                e = v[e][t];
                if (e) {
                    var s = e.urls;
                    if (s)
                        for (var l = 0; l < s.length; l++) {
                            var d, c = s[l];
                            f.isNotEmpty(c) && (-1 < (c = r ? T(c, r) : c).indexOf(p) && (d = "" + Math.floor(1e7 * Math.random()), c = T(c, {
                                macro: p,
                                value: d
                            })), c = C(c), a.push(c))
                        }
                }
            }
            return a
        },
        requestProgressTracking: function(e, t) {
            var n = j(e);
            c("Tracking requested for progress event, adId=" + (t || h) + ", offset=" + e), this.requestTracking(n, t)
        },
        removeEvents: function(e) {
            x(e)
        },
        removeEventsForKey: function(e, t) {
            var n = e,
                i = t;
            if (i = i || h, v && v.hasOwnProperty(i)) {
                for (var o in v[i]) - 1 < o.indexOf(n) && (delete v[i][o], a("Removing event: " + o + " for key=" + n + " and adId=" + i));
                0 === v[i].length && delete v[i]
            }
        },
        removeAllEvents: function() {
            v = {}
        }
    }
}, function(e, t, p) {
    function u(e, t, n, i, o) {
        function r() {
            l.CompanionClickTracking && d({
                command: "requestTracking",
                uniqueId: u,
                data: "companion-click"
            }), l.hasOwnProperty("StaticResource") && l.CompanionClickThrough && window.open(l.CompanionClickThrough)
        }

        function a() {
            l.TrackingEvents && 0 < l.TrackingEvents.length && d({
                command: "requestTracking",
                uniqueId: u,
                data: "creative-view"
            })
        }
        var s = e,
            l = i,
            d = o,
            c = {
                width: t,
                height: n
            },
            u = (new Date).getTime() + Math.floor(1e4 * Math.random()),
            e = (d({
                command: "addTrackingEvents",
                uniqueId: u,
                data: l
            }), !0);
        l.hasOwnProperty("StaticResource") ? "application/x-javascript" === (i = l.StaticResource.type) ? ((o = document.createElement("script")).src = l.StaticResource.src, o.onload = a(), s.appendChild(o)) : 0 === i.indexOf("image") && ((t = document.createElement("img")).src = l.StaticResource.src, t.style.maxWidth = "100%", t.style.maxHeight = "100%", t.style.width = "auto", t.style.height = "auto", t.style.margin = "auto", t.style.display = "block", t.style.top = 0, t.style.bottom = 0, t.style.left = 0, t.style.right = 0, t.style.position = "absolute", t.onload = a(), t.onclick = r, e = !1, t.style.cursor = "pointer", s.innerHTML = "", s.style.position = "relative", s.appendChild(t)) : l.hasOwnProperty("IFrameResource") ? ((n = document.createElement("iframe")).src = l.IFrameResource, n.scrolling = "no", n.style.width = "100%", n.style.height = "100%", n.style.border = "none", n.style.overflow = "hidden", n.onload = a(), e = !1, s.appendChild(n)) : l.hasOwnProperty("HTMLResource") && (0 === l.HTMLResource.indexOf("http") ? p(29).load(l.HTMLResource, function(e, t) {
            e || 0 === t.length || (s.style.display = "inline-block", s.style.position = "relative", s.innerHTML = t, a())
        }) : (s.style.display = "inline-block", s.style.position = "relative", s.innerHTML = l.HTMLResource, a())), e && (l.hasOwnProperty("StaticResource") && l.CompanionClickThrough && (s.style.cursor = "pointer"), s.onclick = r), this.stop = function() {
            "concurrent" === l.renderingMode && (s.innerHTML = "")
        }, this.getData = function() {
            return {
                container: s,
                companionData: l,
                size: c
            }
        }
    }

    function i(e, t, n) {
        for (var i, o = t, r = n, a = [], s = (m.always(f, "Version: 0.1.11"), []), l = 0; l < o.companionContainers.length; l++) try {
            var d = window.getComputedStyle(o.companionContainers[l], null),
                c = {
                    id: l,
                    width: parseInt(d.width),
                    height: parseInt(d.height),
                    companion: null
                };
            s.push(c)
        } catch (e) {}
        for (h.selectCompanionsForContainers(e, s), l = 0; l < s.length; l++) s[l].companion && (i = new u(o.companionContainers[l], s[l].width, s[l].height, s[l].companion, r), a.push(i));
        this.stop = function() {
            for (l = 0; l < a.length; l++) a[l].stop();
            a.length = 0
        }, this.getCompanionsData = function() {
            var e = [];
            for (l = 0; l < a.length; l++) e.push(a[l].getData());
            return e
        }
    }
    var h = p(27),
        m = p(2),
        f = "CompanionsHandler > ";
    e.exports = {
        renderCompanions: function(e, t, n) {
            return m.log(f, "renderCompanions called."), new i(e, t, n)
        },
        stopCompanions: function(e) {
            e && e.stop()
        },
        parse: function(e) {
            if (0 === e.length) return m.warn(f, "parseCompanions > empty companions xml"), null;
            n = (t = e).indexOf("<"), t = t.substr(-1 === n ? 0 : n), "<CompanionAds" !== (e = (t = -1 !== (n = t.lastIndexOf(">")) ? t.substr(0, n + 1) : t).trim()).substr(0, 13) && (e = "<CompanionAds>" + e + "</CompanionAds>");
            var t, n = null;
            if (void 0 !== window.DOMParser) {
                if ("parsererror" === (n = (new DOMParser).parseFromString(e, "text/xml")).documentElement.nodeName) {
                    try {
                        m.error(f, "parseCompanions > Error reason = " + n.documentElement.childNodes[0].nodeValue)
                    } catch (e) {}
                    return m.warn(f, "parseCompanions > invalide xml structure"), null
                }
            } else {
                if (void 0 === window.ActiveXObject) return m.error(f, "parseCompanions > Failed to parse vast xml by window.ActiveXObject(Microsoft.XMLDOM)"), null;
                try {
                    if ((n = new window.ActiveXObject("Microsoft.XMLDOM")).loadXML(e), 0 !== n.parseError.errorCode) return m.error(f, n.parseError), null
                } catch (e) {
                    return m.error(f, "parseCompanions > Failed to parse vast xml by window.ActiveXObject(Microsoft.XMLDOM)", e), null
                }
            }
            return n ? p(72).parse(n) : (m.error(f, "parseCompanions > invalid xml structure"), null)
        }
    }
}, function(e, t) {
    e.exports = {
        parse: function(e) {
            var t = {
                    companions: []
                },
                n = new function() {
                    this.getSubNodes = function(e, t) {
                        e = e.getElementsByTagName(t);
                        return 0 < e.length ? e : null
                    }, this.getSubNode = function(e, t, n) {
                        n = n || 0;
                        e = e.getElementsByTagName(t);
                        return e.length > n ? e[n] : null
                    }, this.getNodeValue = function(e) {
                        return 0 === e.childNodes.length ? "" : e.childNodes[0].nodeValue.trim()
                    }, this.getNodeValues = function(e) {
                        if (0 === e.childNodes.length) return "";
                        for (var t = "", n = 0; n < e.childNodes.length; n++) t += e.childNodes[n].nodeValue;
                        return t.trim()
                    }, this.getNodeAttributeValue = function(e, t) {
                        e = e.getAttribute(t);
                        return e = null === e ? "" : e
                    }, this.getNodeAttributeNumberValue = function(e, t, n) {
                        n = n || 0, e = this.getNodeAttributeValue(e, t);
                        return n = 0 < e.length ? (0 <= e.indexOf(".") ? parseFloat : parseInt)(e) : n
                    }, this.getNodeAttributeBooleanValue = function(e, t, n) {
                        n = n || !1, e = this.getNodeAttributeValue(e, t);
                        return n = 0 < e.length ? "t" === e.toLowerCase().charAt(0) : n
                    }, this.getSubNodeValue = function(e, t, n) {
                        n = void 0 === n ? "" : n;
                        e = this.getSubNode(e, t);
                        return null !== e ? this.getNodeValue(e) : n
                    }, this.getSubNodeWholeValue = function(e, t, n) {
                        n = void 0 === n ? "" : n;
                        e = this.getSubNode(e, t);
                        return null !== e ? this.getNodeValues(e) : n
                    }, this.getSubNodeBooleanValue = function(e, t, n) {
                        n = void 0 === n ? "false" : n;
                        e = this.getSubNodeValue(e, t);
                        return 0 < e.length && "t" === e.toLowerCase().charAt(0) || !(0 < e.length && "f" === e.toLowerCase().charAt(0)) && n
                    }
                },
                e = n.getSubNode(e, "CompanionAds"),
                i = n.getNodeAttributeValue(e, "required"),
                o = (i && 0 < i.length && (t.required = i), n.getSubNodes(e, "Companion"));
            if (o)
                for (var r = 0; r < o.length; r++) {
                    var a = o[r],
                        s = {},
                        l = n.getNodeAttributeNumberValue(a, "width", -1),
                        d = n.getNodeAttributeNumberValue(a, "height", -1);
                    if (!(l <= 0 || d <= 0)) {
                        s.width = l, s.height = d;
                        (l = n.getNodeAttributeValue(a, "id")) && (s.id = l), 0 < (l = n.getNodeAttributeNumberValue(a, "assetWidth", -1)) && (s.assetWidth = l), 0 < (l = n.getNodeAttributeNumberValue(a, "assetHeight", -1)) && (s.assetHeight = l), 0 < (l = n.getNodeAttributeNumberValue(a, "expandedWidth", -1)) && (s.expandedWidth = l), 0 < (l = n.getNodeAttributeNumberValue(a, "expandedHeight", -1)) && (s.expandedHeight = l), (l = n.getNodeAttributeValue(a, "apiFramework")) && (s.apiFramework = l), (l = n.getNodeAttributeValue(a, "adSlotId")) && (s.adSlotId = l), (l = n.getNodeAttributeValue(a, "required")) && (s.required = l), (l = n.getNodeAttributeValue(a, "renderingMode")) && (s.renderingMode = l), (l = n.getSubNodeValue(a, "AltText")) && (s.AltText = l), (l = n.getSubNodeValue(a, "AdParameters")) && (s.AdParameters = l);
                        var c, d = n.getSubNode(a, "StaticResource");
                        if (d && (l = n.getNodeAttributeValue(d, "creativeType"))) {
                            if ("video/x-flv" === l || "video/x-f4v" === l || "video/f4v" === l || "application/x-shockwave-flash" === l) continue;
                            var u = {
                                type: l
                            };
                            (l = n.getNodeValues(d)) && (u.src = l, s.StaticResource = u)
                        }(l = n.getSubNodeWholeValue(a, "IFrameResource")) && (s.IFrameResource = l), (l = n.getSubNodeWholeValue(a, "HTMLResource")) && (s.HTMLResource = l), (l = n.getSubNodeValue(a, "CompanionClickThrough")) && (s.CompanionClickThrough = l);
                        var p = n.getSubNodes(a, "CompanionClickTracking");
                        if (p)
                            for (s.CompanionClickTracking = [], c = 0; c < p.length; c++) m = p[c], (v = n.getNodeValues(m)) && s.CompanionClickTracking.push(v);
                        var h = n.getSubNodes(a, "Tracking");
                        if (h)
                            for (s.TrackingEvents = [], c = 0; c < h.length; c++) {
                                var m = h[c],
                                    f = n.getNodeAttributeValue(m, "event"),
                                    v = n.getNodeValues(m);
                                f && v && s.TrackingEvents.push({
                                    eventType: f,
                                    url: v
                                })
                            }
                        t.companions.push(s)
                    }
                }
            return t
        }
    }
}, function(e, t, n) {
    var f = n(2),
        v = "[AdHandler_PrePostCovers]",
        i = n(74);
    e.exports = function(e, t) {
        var s, l, d = e,
            c = t.preShow,
            u = t.postShow,
            o = t.fallback,
            r = t.postShowClickUrl,
            a = t.fallbackClickUrl,
            p = t.postShowTrackUrl,
            h = !1,
            m = new i;
        d && c && (d.style.backgroundImage = "url(" + c + ")", d.style.backgroundRepeat = "no-repeat", d.style.backgroundSize = "100% 100%", f.log(v, "Preshow banner created")), this.beforePlayVideo = function(e, t) {
            if ("native" === e) {
                var n, i = (s = t).iframeVideoWrapper;
                if (l = i.style.width, d.style.width = l, c && (i.style.width = "1px"), !h) {
                    h = !0;
                    var o = function() {
                            d.removeEventListener("click", o), d.removeEventListener("mouseover", r), d.removeEventListener("mouseout", a), s.play(), s.iframeVideoWrapper.style.width = l, d.style.width = "", n && d.contains(n) && d.removeChild(n)
                        },
                        r = function() {
                            d.style.cursor = "pointer"
                        },
                        a = function() {
                            d.style.cursor = "auto"
                        };
                    if (c) return d.addEventListener("click", o), d.addEventListener("mouseover", r), d.addEventListener("mouseout", a), n = m.createNativeStartButton(d), d.appendChild(n), n;
                    s.options.hideTopBar = !0, u || (s.options.disableCollapse.enabled = !0, s.options.disableCollapse.replay = !0)
                }
            } else "preview" === e && ((s = t).options.disableCollapse.enabled = !0, s.options.disableCollapse.replay = !0)
        }, this.adFinished = function(e, t) {
            var n, i;
            d && ((n = e && o || u) && (d.style.width = t.width + "px", d.style.height = t.height + "px", d.style.backgroundImage = "url(" + n + ")", d.style.backgroundRepeat = "no-repeat", d.style.backgroundSize = "100% 100%", f.log(v, "Postshow/fallback banner created")), (d.style.backgroundImage || t.badVastXml) && (i = e && a || r) && (d.onclick = function() {
                window.open(i, "_blank"), p && (new Image(1, 1).src = p)
            }, d.onmouseover = function() {
                d.style.cursor = "pointer"
            }, d.onmouseout = function() {
                d.style.cursor = "auto"
            }))
        }, f.log(v, "object has been instatiated")
    }
}, function(e, t) {
    e.exports = function() {
        this.checkIsTopWindowAccessible = function() {
            var t = !0;
            try {
                function e() {}
                var n = top.window,
                    i = n.innerHeight || n.documentElement.clientHeight;
                n.addEventListener("scroll", e), n.removeEventListener("scroll", e), n && "object" == typeof n && "function" == typeof n.addEventListener && "number" == typeof i || (t = !1)
            } catch (e) {
                t = !1
            }
            return t
        }, this.isFullScreen = function(e) {
            return !!e.isFullscreen || !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) && (!window.screenTop && !window.screenY)
        }, this.isMobile = function() {
            var e = navigator.appVersion.indexOf("Mobile"),
                t = navigator.appVersion.indexOf("Android");
            return -1 < e || -1 < t
        }, this.isAndroid = function() {
            return /android/i.test(navigator.userAgent.toLowerCase())
        }, this.isChrome = function() {
            return -1 < navigator.userAgent.indexOf("Chrome")
        }, this.isSafari = function() {
            return /version\/([\w\.]+).+?(mobile\s?safari|safari)/i.test(navigator.userAgent.toLowerCase())
        }, this.clearDiv = function(e) {
            for (; e.hasChildNodes();) e.removeChild(e.lastChild)
        }, this.inIframe = function() {
            try {
                return window.self !== window.top
            } catch (e) {
                return !0
            }
        }, this.createNativeStartButton = function(e) {
            var e = e.offsetWidth ? Math.min(48, e.offsetWidth / 4) : e.offsetHeight ? Math.min(48, e.offsetHeight / 3) : 48,
                t = document.createElement("div"),
                n = (t.style.margin = "0 auto", t.style.top = "25%", t.style.left = "30%", t.style.position = "absolute", t.style.width = "0px", t.style.height = "0px", t.style.borderStyle = "solid", .8 * e / 3),
                n = (t.style.borderWidth = n + "px 0px " + n + "px " + 2 * n + "px", t.style.borderColor = "transparent transparent transparent #ffffff", t.style.opacity = "0.85", document.createElement("div"));
            return n.style.margin = "0 auto", n.style.backgroundColor = "black", n.style.width = e + "px", n.style.height = e + "px", n.style.position = "absolute", n.style.right = "0px", n.style.bottom = "0px", n.appendChild(t), n
        }
    }
}, function(e, t, n) {
    var _ = n(2),
        M = n(76),
        N = n(74),
        O = "[AdHandler_Viewability_Observer]",
        D = "adLoaded",
        R = "ended",
        U = "adError",
        L = "impression";
    e.exports = function(e, i) {
        function t(e) {
            var t, n;
            o.forceToSkip && (u = !1, o.forceToSkip = !1), u || (_.log(O, "terminate all"), m.clearInterval(v), f.removeEventListener("resize", E), h && (f.removeEventListener("scroll", C), f.removeEventListener("touchmove", C)), r && f.clearInterval(r), t = 0, n = function() {
                o.delayEventHandler.lazyTerminate(), d.isFullScreen(o) ? t <= 3e3 ? setTimeout(function() {
                    t += 500, n()
                }, 500) : (o.isCompleted = !0, o.explicitPause(), b(p, e ? U : R, i, e)) : (a && (a.textContent = ""), b(p, e ? U : R, s, e))
            }, d.isFullScreen(o) ? document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen() : (o.isCompleted = !0, j()), u = !0, setTimeout(function() {
                n()
            }, 500))
        }
        var o, r, a = e,
            s = i,
            n = this,
            l = new M,
            d = new N,
            c = !1,
            u = !1,
            p = i.ASTadId,
            h = d.checkIsTopWindowAccessible(),
            m = window.self,
            f = (h ? top : n).window,
            v = null,
            g = !1,
            y = !1,
            A = !1,
            b = (this.getCurrentEventFromCrossDomainWindow = function() {}, this.getIsExpanded = function() {
                return "bannerstreamtest" === s.adType
            }, this.getRWindowForPublisher = function() {
                return f
            }, this.getIsWindowTopAccessible = function() {
                return h
            }, this.getOptions = function() {
                return s
            }, function(e, t, n) {
                _.log(O, "============= eventCB:" + t);
                try {
                    s && "function" == typeof s.eventCB && s.eventCB(e, t, n)
                } catch (e) {
                    _.error(O, e)
                }
            }),
            w = function() {
                if ("auto" === s.initialPlayback && (o.isPlayingVideo = !1), !A) try {
                    o.load(), A = !0
                } catch (e) {
                    _.error(O, e)
                }
                b(p, L, s), b(p, D, s), o.pausedByViewability = !0
            },
            k = function() {
                !d.isFullScreen(o) && o.isPlayingVideo && (x(), _.log(O, "screen : blur"))
            },
            T = function() {
                var e = l.isElementVisible(a, n);
                (o.isViewable = e) && P(), _.log(O, "screen : focus")
            },
            E = function() {
                s.autoInitialSize && (s.width = s.targetElement.offsetWidth), o.isIosInlineRequired && o.isIosInlineRequired() || (o.resizeVideo(-1), S())
            },
            S = function() {
                var e;
                o.isFullscreen && o.isCompleted && d.isAndroid() || (a.style.height = s.height + "px", (e = document.getElementById(o.videoObjectId)) && (e.style.width = s.width, e.style.height = s.height))
            },
            C = function() {
                var e = l.isElementVisible(a, n);
                o.isViewable = e, o.isFullscreen && o.isMuted ? (o.unmute(), c = !1) : "mute" !== s.nonViewableBehavior || o.isFullscreen || o.isPaused || (e && !0 === c ? (o.unmute(), c = !1, "auto" === s.initialPlayback && o.delayEventHandler.suppress(!1)) : !1 !== e || !1 !== c || o.isMuted || (o.mute(), c = !0), y && (e = !0)), e ? o.pausedByViewability && ("auto" === s.initialPlayback && o.delayEventHandler.suppress(!1), I(), o.pausedByViewability = !1, _.log(O, "set pausedByViewability false"), y = !0, d.isAndroid() && (f.removeEventListener("touchmove", C), r = setInterval(C, 50))) : d.isFullScreen(o) || o.isDoneInitialPlay && !1 === o.pausedByViewability && !o.explicitPaused && (j(), _.log(O, "set pausedByViewability true"), o.pausedByViewability = !0)
            },
            I = function() {
                _.log(O, "send explicit play from pause"), "auto" !== s.initialPlayback && !o.isDoneInitialPlay || V() || "function" == typeof o.explicitPlay && (o.explicitPlay(), _.log(O, "sendPlaySignalToVideoPlayerExplicit"))
            },
            P = function() {
                _.log(O, "send play from pause"), "auto" !== s.initialPlayback && !o.isDoneInitialPlay || V() || "function" != typeof o.play || o.explicitPaused || (o.play(), _.log(O, "sendPlaySignalToVideoPlayer"))
            },
            j = function() {
                _.log(O, "send explicit pause signal"), V() && ("function" == typeof o.explicitPause && o.explicitPause(), _.log(O, "sendPauseSignalToVideoPlayerExplicit"))
            },
            x = function() {
                V() && ("function" == typeof o.pause && o.pause(), _.log(O, "sendPauseSignalToVideoPlayer"))
            },
            V = function() {
                return !!o && o.isPlayingVideo
            };
        this.start = function(e) {
            var t;
            o = e, d.isAndroid() && f.addEventListener("touchmove", C), r = setInterval(C, 100), d.isMobile() && f.addEventListener("resize", E), w(), e = f !== n.window, (e = !h || e) ? (void 0 !== document.hidden ? t = "hidden" : void 0 !== document.mozHidden ? t = "mozHidden" : void 0 !== document.msHidden ? t = "msHidden" : void 0 !== document.webkitHidden && (t = "webkitHidden"), document.addEventListener("visibilitychange", function() {
                (document[t] ? k : T)()
            }, !1)) : v = m.setInterval(function() {
                document.hasFocus() && !1 === g ? (T(), g = !0) : document.hasFocus() || !0 !== g || (k(), g = !1)
            }, 500)
        }, this.stop = function(e) {
            t(e)
        }, _.log(O, "object has been instatiated")
    }
}, function(e, t) {
    e.exports = function() {
        this.isElementVisible = function(e, t) {
            var n, a, i, o, r, s, l, d, c, u, p, h;
            return !!e && (h = t.getCurrentEventFromCrossDomainWindow(), n = t.getIsExpanded(), a = t.getRWindowForPublisher(), r = t.getIsWindowTopAccessible(), l = (t = t.getOptions()).playVideoVisibleThreshold / 100, s = t.height * l, t = Number(t.height) - t.height * l, d = {
                top: l = 0
            }, c = r ? a.innerHeight || a.documentElement.clientHeight : h.windowHeight, p = a !== window.self, h = (p = !r || p) ? (r ? (u = function(e, t) {
                if (!(e === a || t <= 0))
                    for (var n = e.parent.document.getElementsByTagName("iframe"), i = 0; i < n.length; i++) {
                        var o = n[i],
                            r = o.contentWindow;
                        r === e && (o = o.getBoundingClientRect().top, d.top += o, u(r.parent, --t))
                    }
            })(window.self, 100) : d.top = h.offsetTop, o = (i = (l = d.top - c) + (p = e.getBoundingClientRect().top)) + s, l + p + t) : (o = (i = r = e.getBoundingClientRect().top - c) + s, r + t), !n && i < 0 || !(h < -1 * c) && o < 0)
        }
    }
}, function(e, t, n) {
    function a(e) {
        i.debug(e, "AdHandler->RatbaitFallback")
    }
    var s, i = n(8),
        l = n(29),
        d = "https://rb.adnxs-simple.com/pack?log=log_rb_video_outstream&format=json",
        c = 1,
        u = 2,
        p = 3,
        h = 4;
    e.exports = {
        AD_PLAYED: c,
        AD_FAILED_IN_RENDERER: u,
        AD_FAILED_BEFORE_RENDERER: p,
        AD_NOT_REACHED: h,
        setMessageTemplate: function(e, t) {
            var n;
            !s && e.rbFallbackData && (n = JSON.stringify(e.rbFallbackData), (s = JSON.parse(n)).version = e.productVersion, s.total_rtbs = t, s.message_type = 0)
        },
        reportFallbackTracker: function(e, t, n) {
            try {
                if (!e) throw new Error("vastObj required to track waterfall step");
                if (!(s && s.hasOwnProperty("auction_id_64") && s.hasOwnProperty("tag_id") && s.hasOwnProperty("version") && s.hasOwnProperty("total_rtbs"))) throw new Error("Ratbait fallback message template does not exist or not contains required properties");
                if (!e.hasOwnProperty("fallbackIndex")) throw new Error("vastObj does not present fallback ad");
                if (!t || t < c || h < t) throw new Error("Invalid action code");
                var i = JSON.stringify(s),
                    o = JSON.parse(i);
                switch (o.buyer_member_id = parseInt(e.buyerMemberId), o.brand_category_id = parseInt(e.brandCategoryId), o.creative_id = parseInt(e.creative_id), o.fallback_ad_index = e.fallbackIndex, o.action = t, o.error_code = 0, o.message = "", t) {
                    case u:
                        n && (n.code && (o.error_code = n.code), n.message && (o.message = n.message));
                        break;
                    case p:
                        n && (n.code && (o.error_code = n.code), n.message ? o.message = n.message : o.message = "Error during processing ut response")
                }
                o.timestamp = Date.now();
                var r = JSON.stringify(o).replace(/"auction_id_64":"(\d+)"/, '"auction_id_64":$1');
                a("Fallback RATBAIT POST tracker fired path :" + d + " -- " + r), l.loadPost(d, r)
            } catch (e) {
                a("Error in reporting to RATBAIT " + e)
            }
        }
    }
}, function(e, t) {
    e.exports = {
        alignment: "center",
        autoInitialSize: !1,
        initialPlayback: "auto",
        initialAudio: "off",
        playOnMouseover: !1,
        audioOnMouseover: !0,
        aspectRatio: "16:9",
        playVideoVisibleThreshold: 50,
        enableExplicitPause: !0,
        skippable: {
            enabled: !0,
            allowOverride: !1,
            videoThreshold: 15,
            videoOffset: 5,
            skipLocation: "top-left",
            skipText: "Video can be skipped in %%TIME%% seconds",
            skipButtonText: "SKIP"
        },
        adText: "Ad",
        showMute: !0,
        showVolume: !0,
        showProgressBar: "both",
        allowFullscreen: !0,
        expandTime: 1e3,
        enableInlineVideoForIos: !0,
        disableCollapse: {
            enabled: !1,
            replay: !1,
            hideControlBar: !1
        },
        endCard: {
            enabled: !1,
            clickable: !0,
            color: "",
            imageUrl: "",
            imageWidth: "",
            imageHeight: "",
            showCompanion: !0
        },
        topDividerColor: "#606060",
        bottomDividerColor: "#606060",
        topDividerWidth: 1,
        bottomDividerWidth: 1,
        delayExpandUntilVPAIDInit: !0,
        delayExpandUntilVPAIDImpression: !1,
        delayStartUntilNotified: !1,
        nonViewableBehavior: "mute",
        waterfallTimeout: 15e3,
        waterfallSteps: -1,
        maxWaterfallIframes: 6,
        adAttempt: 0,
        fixedSizePlayer: !1,
        sideStream: {
            startInSideStream: !1,
            enabled: !1,
            position: "bottom-right",
            xOffset: 0,
            yOffset: 0,
            space: "empty",
            dynamicBigPlayButtonOnSideStream: !0,
            maxPageOverlay: 30,
            returnToPage: !0
        },
        maxHeight: {
            enabled: !1,
            height: 0
        },
        sideStreamObject: {},
        enableNativeInline: !1,
        androidDSOverride: !1,
        topMostViewableCheck: {
            enabled: !0,
            checkVerticalOnly: !0,
            rateOfBeacons: 10
        },
        intervals: {
            playAndPause: 250,
            focusAndBlur: 500
        },
        cbNotification: function() {},
        parentIframeIsModal: !1,
        playerContextId: "anoutstream",
        data: {
            skipOffset: "",
            durationMsec: null,
            skipOffsetMsec: null,
            isVastVideoSkippable: !1,
            vastProgressEvent: {},
            vastDurationMsec: null,
            adIcons: null
        },
        test: function() {},
        safeFrame: !1,
        wcViewabilityDepth: 5
    }
}, function(e, t, n) {
    function i(e) {
        r.debug("[Outstream_Initialize]", e)
    }
    var o = n(80),
        r = n(2),
        a = n(61),
        s = n(81),
        l = n(82),
        d = n(83),
        c = n(3),
        u = n(3).autoplayHandler;
    e.exports = function(r) {
        return {
            start: function() {
                var e, t, n;
                e = {
                    cbWhenDestroy: r.terminateAll,
                    cbWhenReady: function(e) {
                        r.renderVideo();
                        var t = (r.playerManager = e).adVideoPlayer,
                            n = {
                                initialVastXml: "",
                                creativeUrl: "",
                                duration: 0,
                                finalVastXml: "",
                                finalVastUri: ""
                            };
                        n.initialVastXml = e && e.options && e.options.vastXml ? e.options.vastXml : "", n.creativeUrl = e && e.options && e.options.video && e.options.video.url ? e.options.video.url : "", n.duration = e && e.options && e.options.data && e.options.data.vastDurationMsec ? e.options.data.vastDurationMsec : 0, n.finalVastXml = e && e.options && e.options.finalVastXml ? e.options.finalVastXml : "", n.finalVastUri = e && e.options && e.options.finalVastUri ? e.options.finalVastUri : "", r.cbNotification(r.cbNotificationType.vastData, !1, n), !1 === e.options.vpaid && (r.videoPlayerObjectElement = t.player().el()), r.playerManager.adVideoPlayer.on && r.playerManager.adVideoPlayer.on("fullscreenchange", r.handleFullscreen), r.videoIsreadyToPlay = !0, r.firstAdAttempted && r.cleanupPreviousElement(), o.isAndroid() || r.isWindowTopAccessible && r.detectAndPlay()
                    },
                    cbWhenImpression: function() {
                        if (r.options.impressionSent = !0, r.options.isWaterfall && o.isAndroid() && (r.targetElement.style.background = ""), o.fireCustomEvent(r.options.targetElement, "outstream-impression"), r.options.isWaterfall && o.isAndroid())
                            for (var e = r.options.wcElement && r.options.wcElement instanceof Element ? r.options.wcElement.querySelector("#" + String(r.options.iframeVideoWrapperId)) : document.getElementById(r.options.iframeVideoWrapperId), t = r.playerManager.options.targetElement.getElementsByTagName("iframe"), n = 0; n < t.length; n++) {
                                var i = t[n];
                                i && i.id && 0 <= i.id.indexOf("iframeVideoWrapper") && i.id != e.id && (i.style.display = "none")
                            }
                        r.whenImpression()
                    },
                    cbWhenWaterfall: function(e) {
                        r.cbNotification(r.cbNotificationType.waterfall, !1, e)
                    },
                    cbRenderVideo: function(e, t, n) {
                        var i;
                        r.firstAdAttempted && (i = r.options.adAttempt, r.playerManager = Object.create(c), r.videoIsreadyToPlay = !1, t.isExpanded = r.isExpanded, !r.isExpanded || "mouseover" !== t.initialPlayback && "click" !== t.initialPlayback || (t.initialPlayback = "auto"), r.options = r.playerManager.init(t), r.options.firstAdAttempted = !0, r.options.adAttempt = ++i, r.cleanupTargetElement()), n && r.isExpanded && n(), r.firstAdAttempted = !0, r.playerManager.buildPlayer(e, r.options), r.sideStream = new s(r, r.playerManager), r.playerManager.options.sideStreamObject = r.sideStream
                    }
                }, a(r.targetElement, r.options, e), i("setWindowEvents"), i("start out-stream-ad"), !0 !== r.isVideoRendered && (i("video renderer is about to start"), r.animationSpeed = (n = r.options.sideStream.startInSideStream ? 0 : r.options.expandTime) < 0 ? 0 : n / 1e3, r.animationSpeed = r.animationSpeed <= 0 ? .001 : r.animationSpeed, (o.isMac() && o.isSafari() || o.isIos()) && (r.targetElement.style.willChange = "transform"), o.isMac() && o.isSafari() ? (r.targetElement.style.overflow = "hidden", window.$sf && window.$sf.ext && (r.targetElement.style.position = "fixed")) : (r.targetElement.style.overflow = "auto", r.targetElement.style.overflowY = "hidden", o.isEdgeOrIE() && (r.targetElement.style.overflowX = "hidden")), r.targetElement.style.height = "0.1px", r.options.isWaterfall && o.isAndroid() && "click" != r.options.initialPlayback && (r.targetElement.style.background = "#000000"), o.isAndroid() ? r.targetElement.style.webkitTransition = "height " + r.animationSpeed + "s ease" : r.targetElement.style.transition = "height " + r.animationSpeed + "s ease"), o.isAndroid() && r.rWindowForPublisher.addEventListener("touchmove", r.detectAndPlay), r.intervalIdForDetectAndPlay = setInterval(r.detectAndPlay, r.options.intervals.playAndPause), r.isMobile && r.rWindowForPublisher.addEventListener("resize", r.fnRotationChange), n = r.rWindowForPublisher !== window.self, (n = !r.isWindowTopAccessible || n) && !r.options.safeFrame ? (void 0 !== document.hidden ? t = "hidden" : void 0 !== document.mozHidden ? t = "mozHidden" : void 0 !== document.msHidden ? t = "msHidden" : void 0 !== document.webkitHidden && (t = "webkitHidden"), document.addEventListener("visibilitychange", function() {
                    document[t] ? r.listenerBlur() : r.listenerFocus()
                }, !1)) : r.triggerCheckFocus = r.rWindow.setInterval(function() {
                    var e = r.options.safeFrame ? r.$sf.winHasFocus() : document.hasFocus();
                    e && !1 === r.hasFocus ? (r.listenerFocus(), r.hasFocus = !0) : e || !0 !== r.hasFocus || (r.listenerBlur(), r.hasFocus = !1)
                }, r.options.intervals.focusAndBlur)
            },
            init: function(e) {
                e.expandable = !0;
                o.isAMP() && window.addEventListener("message", function(e) {
                    try {
                        var t, n, i;
                        e && e.data && "ampParentFrameGeometryChange" === e.data.event && e.data.scrollY && e.data.offsetTop && e.data.windowHeight && (r.ampParentSeen || (r.ampParentSeen = !0), t = e.data.windowHeight, n = e.data.scrollY, i = e.data.offsetTop, isNaN(t) || isNaN(n) || isNaN(i) || r.parentIframeGeometryUpdate({
                            windowHeight: t,
                            scrollY: n,
                            offsetTop: i
                        }))
                    } catch (e) {
                        error("Unable to process message from AMP-AD Parent " + e.message)
                    }
                }), o.isIos() && (r.DEFAULT_OPTIONS_FOR_OUTSTREAM.showVolume = !1, e.showVolume && (e.showVolume = !1)), r.options = r.playerManager.init(r.playerManager.ExtendDefaultOption(r.DEFAULT_OPTIONS_FOR_OUTSTREAM, e)), o.isAMP() && (i("outstreamSelf.options.cbNotification = " + r.options.cbNotification), r.options.cbNotificationOriginalForAMP = r.options.cbNotification, r.options.cbNotification = function(e, t, n, i) {
                    var o = {
                        event: "ampOutstreamCbNotifcation"
                    };
                    o.eventType = e || "", o.eventName = t || "", o.eventTargetId = n || "", o.eventObject = i || "", o.cbNotification = r.options.cbNotificationOriginalForAMP || "";
                    try {
                        console.log("Outstream AMP sending cbNotification via postMessage to AMP-AD Parent..." + JSON.stringify(o)), window.parent.postMessage(JSON.stringify(o), "*")
                    } catch (e) {
                        error("Unable to send Outstream AMP cbNotification " + e.message)
                    }
                }), o.isMobile() && (r.isMobile = !0), r.options.alignment || (r.options.alignment = "center"), r.originalSize.width = r.options.width, r.originalSize.height = r.options.height, r.disableCollapse = r.options.disableCollapse, "boolean" == typeof r.disableCollapse && (r.disableCollapse = {
                    enabled: r.disableCollapse,
                    replay: !1
                }), r.targetElementId = r.options.targetId, r.ASTadId = r.options.ASTadId, r.isOkToPlayFromPublisher = !r.options.delayStartUntilNotified, r.isWindowTopAccessible = r.checkTopWindow(), r.rWindowForPublisher = r.getTargetWindow(), r.endCard = r.options.endCard || {
                    enabled: !1
                }, r.endCard.enabled && !r.disableCollapse.enabled && (i("EndCard was enabled without disableCollapse, so the end card will not show!"), r.endCard.enabled = !1), r.parentIframeIsModal = !(!r.options || !r.options.parentIframeIsModal || !0 !== r.options.parentIframeIsModal), r.viewableDetector = d, r.setInitialVariable(e.wcElement) ? (r.$sf = new l(r), u.isMobile() ? (e = {
                    targetElementId: r.targetElementId,
                    windowForPublisher: r.rWindowForPublisher,
                    wcElement: r.options.wcElement,
                    maxWaterfallIframes: r.options.maxWaterfallIframes,
                    waterfallSteps: r.options.waterfallSteps,
                    initialPlayback: r.options.initialPlayback,
                    initialAudio: r.options.initialAudio,
                    automatedTestingOnlyAndroidSkipTouchStart: r.options.automatedTestingOnlyAndroidSkipTouchStart,
                    androidDSOverride: r.options.androidDSOverride,
                    callbackAdUnitEntryPoint: function(e, t) {
                        !0 === e && (r.options.initialAudio = "off"), !0 === t && (r.options.initialPlayback = "click", r.options.initialAudio = "on"), r.start()
                    },
                    callbackPatchForIOSChrome: function() {
                        !1 === r.doneUserActionForInitiateOutstream && (r.playerManager.adVideoPlayer.one("loadedmetadata", function() {
                            r.doneUserActionForInitiateOutstream = !0, i("doneUserActionForInitiateOutstream by touchstart event for Chrome on iOS")
                        }), !1 === r.videoIsreadyToPlay && (r.playerManager.load(), i("forcing load a video to dispatch loadedmetadata event for Chrome on iOS")))
                    }
                }, u.initialize(e)) : r.start()) : i("failed setInitialVariable")
            },
            setInitialVariable: function(e) {
                return r.targetElementId && "string" == typeof r.targetElementId && (e = e && e instanceof Element ? e : document.getElementById(r.targetElementId), r.options.safeFrame && (e = document.body), r.targetElementId = r.targetElementId + "_apn_expandable_" + (new Date).getTime() + Math.floor(1e4 * Math.random()), e) ? (r.targetElement = document.createElement("div"), r.targetElement.id = r.targetElementId, r.targetElement.style.cssText = "margin: 0;padding: 0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline;", e.appendChild(r.targetElement), r.options.alignment && void 0 !== r.options.alignment && (r.targetElement.style.textAlign = r.options.alignment), !0) : (r.terminateAll(!0), !1)
            },
            getTargetWindow: function() {
                return r.isWindowTopAccessible ? top.window : window.self
            },
            checkTopWindow: function() {
                var t = !0;
                try {
                    function e() {}
                    var n = top.window,
                        i = n.innerHeight || (n.documentElement ? n : n.document).documentElement.clientHeight;
                    n.addEventListener("scroll", e), n.removeEventListener("scroll", e), n && "object" == typeof n && "function" == typeof n.addEventListener && "number" == typeof i || (t = !1)
                } catch (e) {
                    t = !1
                }
                return t
            }
        }
    }
}, function(e, t, n) {
    function i(e) {
        a.error(e, r)
    }

    function o() {
        for (var e = {}, t = 0; t < arguments.length; t++) {
            n = void 0;
            var n, i = arguments[t];
            for (n in i) Object.prototype.hasOwnProperty.call(i, n) && ("[object Object]" === Object.prototype.toString.call(i[n]) ? e[n] = o(e[n], i[n]) : e[n] = i[n])
        }
        return e
    }
    var r = "Outstream_Utils",
        a = n(2);
    e.exports = {
        isMobile: function() {
            var e = navigator.appVersion.indexOf("Mobile"),
                t = navigator.appVersion.indexOf("Android");
            return -1 < e || -1 < t
        },
        isAndroid: function() {
            return /android/i.test(navigator.userAgent.toLowerCase())
        },
        isChrome: function() {
            return -1 < navigator.userAgent.indexOf("Chrome")
        },
        isAMP: function() {
            try {
                if (window.ampSeen || window.AMP_LISTENING) return !0
            } catch (e) {
                i("AMP Detection " + e.message)
            }
            return !1
        },
        isMac: function() {
            return -1 < navigator.platform.indexOf("Mac")
        },
        isSafari: function() {
            return -1 < navigator.userAgent.indexOf("Safari") && navigator.userAgent.indexOf("Chrome") < 0
        },
        isEdgeOrIE: function() {
            return -1 < navigator.userAgent.indexOf("edge") || -1 < navigator.userAgent.indexOf("MSIE")
        },
        isFullScreen: function(e) {
            return !!e.isFullscreen || !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) && (!window.screenTop && !window.screenY)
        },
        isValidNumberForHTML: function(e) {
            return "number" == typeof e || void 0 !== e && (e = e.replace(/ /g, ""), !isNaN(Number(e)) && "" !== e)
        },
        fireCustomEvent: function(e, t) {
            try {
                var n = new CustomEvent(t);
                e.dispatchEvent(n)
            } catch (e) {
                i(e)
            }
        },
        isIos: function() {
            return /iphone/i.test(navigator.userAgent.toLowerCase()) || /ipad/i.test(navigator.userAgent.toLowerCase())
        },
        getIOSVersion: function() {
            var e = navigator.userAgent.match(/OS (\d+)_/i);
            if (e && e[1]) return e[1]
        },
        extend: o
    }
}, function(e, t, n) {
    function l(e) {
        o.verbose(e, i)
    }
    var i = "SideStream",
        o = n(2),
        d = n(80);
    e.exports = function(r, a) {
        var s = this;
        this.options = r.options, this.playerManager = a;
        this.isActivated = !1, this.targetElementForSideStream = s.options.targetElement.firstChild, this.originalCSS = {
            position: "",
            top: "",
            bottom: "",
            left: "",
            right: "",
            marginLeft: "",
            marginRight: "",
            marginTop: "",
            marginBottom: "",
            offsetWidth: "",
            offsetHeight: "",
            transition: "",
            webkitTransition: "",
            height: "",
            width: ""
        }, this.saveOriginalCss = function(e) {
            var t = e.style;
            this.originalCSS = {
                position: t.position,
                top: t.top,
                bottom: t.bottom,
                left: t.left,
                right: t.right,
                marginLeft: t.marginLeft,
                marginRight: t.marginRight,
                marginTop: t.marginTop,
                marginBottom: t.marginBottom,
                offsetWidth: e.offsetWidth,
                offsetHeight: e.offsetHeight,
                transition: t.transition,
                webkitTransition: t.webkitTransition,
                height: t.height,
                width: t.width
            }
        }, this.loadOriginalCss = function(e) {
            e = e.style;
            e.position = this.originalCSS.position, e.top = this.originalCSS.top, e.bottom = this.originalCSS.bottom, e.left = this.originalCSS.left, e.right = this.originalCSS.right, e.marginLeft = this.originalCSS.marginLeft, e.marginRight = this.originalCSS.marginRight, e.marginTop = this.originalCSS.marginTop, e.marginBottom = this.originalCSS.marginBottom, e.transition = this.originalCSS.transition, e.webkitTransition = this.originalCSS.webkitTransition, e.height = this.originalCSS.height, e.width = this.originalCSS.width
        }, this.shouldCloseAdUnit = function() {
            var e = !0 === a.options.disableCollapse.enabled && !0 === a.isSkipped,
                t = !1 === a.options.disableCollapse.enabled && !0 === a.isCompleted;
            return e || t
        }, this.moveAdUnitBack = function() {
            l("moveAdUnitBack"), s.targetElementForSideStream = s.playerManager.options.wcElement && s.playerManager.options.wcElement instanceof Element ? s.playerManager.options.wcElement.querySelector("#" + String(s.playerManager.options.iframeVideoWrapperId)) : document.getElementById(s.playerManager.options.iframeVideoWrapperId), s.shouldCloseAdUnit() && s.targetElementForSideStream && (s.targetElementForSideStream.style.height = "0px");
            !1 === s.options.sideStream.returnToPage ? (r.targetElement.style.height = "1px", s.shouldCloseAdUnit() && (s.isActivated = !1, a.destroyWithoutSkip())) : (s.isActivated = !1, s.loadOriginalCss(s.targetElementForSideStream), s.hasSizeForSideStream() && (s.targetElementForSideStream.style.height = "", s.targetElementForSideStream.style.width = ""), s.playerManager.resizeVideo(!1, !1, function() {
                d.fireCustomEvent(s.options.targetElement, "IOS_INLINE_RESIZE"), s.loadOriginalCss(s.targetElementForSideStream), s.shouldCloseAdUnit() || (s.targetElementForSideStream.style.height = s.options.height + "px")
            }), s.options.autoInitialSize && !d.isMobile() && d.fireCustomEvent(window, "resize"), s.options.sideStream.dynamicBigPlayButtonOnSideStream && !0 === s.options.sideStream.dynamicBigPlayButtonOnSideStream && s.options.showBigPlayButton && (!0 === s.options.showPlayToggle ? s.playerManager.adVideoPlayer && s.playerManager.adVideoPlayer.bigPlayButton && s.playerManager.adVideoPlayer.bigPlayButton.show && !s.playerManager.isEnded && (s.playerManager.isIosInlineRequired() ? s.playerManager.isPlayingVideo || (s.playerManager.adVideoPlayer.bigPlayButton.show(), s.playerManager.isFullscreen || (s.playerManager.adVideoPlayer.player().bigPlayButton.el().style.display = "block")) : s.playerManager.adVideoPlayer.bigPlayButton.show()) : s.playerManager.adVideoPlayer && s.playerManager.adVideoPlayer.bigPlayButton && s.playerManager.adVideoPlayer.bigPlayButton.el_ && (s.playerManager.adVideoPlayer.bigPlayButton.el_.style.fontSize = "3em")), setTimeout(function() {
                !0 !== r.playerManager.isCompleted && (r.haveVideoThresholdForSideStream = !1, s.playerManager.resizeVideo(!1, !1, function() {
                    d.isIos() && d.fireCustomEvent(s.options.targetElement, "IOS_INLINE_RESIZE")
                }), r.resizeOutstreamArea())
            }, 250))
        }, this.moveAdUnit = function() {
            if (l("moveAdUnit to sidestream"), !1 !== a.options.sideStream.enabled) {
                s.targetElementForSideStream = s.playerManager.options.wcElement && s.playerManager.options.wcElement instanceof Element ? s.playerManager.options.wcElement.querySelector("#" + String(s.playerManager.options.iframeVideoWrapperId)) : document.getElementById(s.playerManager.options.iframeVideoWrapperId), s.isActivated = !0;

                function e() {
                    d.isIos() && d.fireCustomEvent(s.options.targetElement, "IOS_INLINE_RESIZE")
                }
                var t = s.getWidthHeightConsideredByAspectRatio(s.getAspectRatioByPlayerSize()).width,
                    n = s.getWidthHeightConsideredByAspectRatio(s.getAspectRatioByPlayerSize()).height,
                    i = (this.saveOriginalCss(s.targetElementForSideStream), s.targetElementForSideStream.style.position = "fixed", s.targetElementForSideStream.style.transition = "", s.targetElementForSideStream.style.webkitTransition = "", s.options.sideStream.xOffset),
                    o = s.options.sideStream.yOffset,
                    i = d.isValidNumberForHTML(i) ? i + "px" : "0px",
                    o = d.isValidNumberForHTML(o) ? o + "px" : "0px";
                switch (s.hasSizeForSideStream() ? (s.playerManager.resizeVideoForSideStream(t, n, e), s.targetElementForSideStream.style.width = t + "px", s.targetElementForSideStream.style.height = n + "px") : s.playerManager.resizeVideo(!1, !1, e), s.targetElementForSideStream.style.zIndex = 2147483647, s.options.sideStream.position.toLowerCase()) {
                    case "top-left":
                        s.targetElementForSideStream.style.top = "0px", s.targetElementForSideStream.style.bottom = "", s.targetElementForSideStream.style.left = "0px", s.targetElementForSideStream.style.right = "", s.targetElementForSideStream.style.marginLeft = i, s.targetElementForSideStream.style.marginTop = o;
                        break;
                    case "top-right":
                        s.targetElementForSideStream.style.top = "0px", s.targetElementForSideStream.style.bottom = "", s.targetElementForSideStream.style.left = "", s.targetElementForSideStream.style.right = "0px", s.targetElementForSideStream.style.marginRight = i, s.targetElementForSideStream.style.marginTop = o;
                        break;
                    case "bottom-left":
                        s.targetElementForSideStream.style.top = "", s.targetElementForSideStream.style.bottom = "0px", s.targetElementForSideStream.style.left = "0px", s.targetElementForSideStream.style.right = "", s.targetElementForSideStream.style.marginLeft = i, s.targetElementForSideStream.style.marginBottom = o;
                        break;
                    default:
                        s.targetElementForSideStream.style.top = "", s.targetElementForSideStream.style.bottom = "0px", s.targetElementForSideStream.style.left = "", s.targetElementForSideStream.style.right = "0px", s.targetElementForSideStream.style.marginRight = i, s.targetElementForSideStream.style.marginBottom = o
                }
                s.options.sideStream.dynamicBigPlayButtonOnSideStream && !0 === s.options.sideStream.dynamicBigPlayButtonOnSideStream && s.options.showBigPlayButton && (!0 === s.options.showPlayToggle ? s.playerManager.adVideoPlayer && s.playerManager.adVideoPlayer.bigPlayButton && (s.playerManager.isIosInlineRequired() && s.playerManager.isPlayingVideo || s.playerManager.adVideoPlayer.bigPlayButton.hide()) : (3 < (n = t / 200) ? n = 3 : n < 1 && (n = 1), s.playerManager.adVideoPlayer.bigPlayButton && s.playerManager.adVideoPlayer.bigPlayButton.el_ && (s.playerManager.adVideoPlayer.bigPlayButton.el_.style.fontSize = n + "em"))), s.options.sideStream.enabled && s.options.sideStream.startInSideStream ? ("click" !== s.options.initialPlayback && "mouseover" !== s.options.initialPlayback || s.playerManager.adVideoPlayer.bigPlayButton.show(), s.options.playVideoVisibleThreshold = 0, r.targetElement.style.height = "1px") : s.startDetection()
            }
        }, this.hasSizeForSideStream = function() {
            return !(!d.isValidNumberForHTML(s.options.sideStream.width) && !d.isValidNumberForHTML(s.options.sideStream.height))
        }, this.startDetection = function() {
            r.playerManager.isCompleted || (r.isElementVisible(s.options.targetElement) && !1 === s.playerManager.isFullscreen ? s.moveAdUnitBack() : setTimeout(s.startDetection, 250))
        }, this.checkPageOverlay = function() {
            var e, t, n = !1,
                i = 100;
            return s.options.sideStream && s.options.sideStream.maxPageOverlay && (i = "" + s.options.sideStream.maxPageOverlay, i = Number(i.replace("%", ""))), e = window.innerWidth * window.innerHeight, t = s.hasSizeForSideStream() ? s.getWidthHeightConsideredByAspectRatio(s.getAspectRatioByPlayerSize()).width * s.getWidthHeightConsideredByAspectRatio(s.getAspectRatioByPlayerSize()).height : r && r.sizeObj && r.sizeObj.finalSize ? r.sizeObj.finalSize.width * r.sizeObj.finalSize.height : 0, t = Math.round(t / e * 100), n = null !== i && t <= i ? !0 : n
        }, this.shouldNotResizeWhenSideStreamActivated = function() {
            return a.options.sideStream && s.isActivated
        }, this.getAspectRatioByPlayerSize = function() {
            var e = 16 / 9,
                t = r && r.sizeObj && r.sizeObj.finalSize ? r.sizeObj.finalSize.width : 0,
                n = r && r.sizeObj && r.sizeObj.finalSize ? r.sizeObj.finalSize.height : 0;
            return e = 0 < n && 0 < t ? t / n : e
        }, this.getWidthHeightConsideredByAspectRatio = function(e) {
            var t = 0,
                n = 0;
            return e <= 0 ? (l("aspectRatio is inappropriate"), null) : (n = s.options.sideStream.width && s.options.sideStream.height ? (t = s.options.sideStream.width, s.options.sideStream.height) : (t = s.options.sideStream.width || s.options.sideStream.height / e, s.options.sideStream.height || s.options.sideStream.width / e), {
                width: t,
                height: n
            })
        }
    }
}, function(e, t, n) {
    function r(e) {
        i.verbose(e, o)
    }
    var i = n(2),
        o = "Outstream_SafeFrame";
    e.exports = function(n) {
        return n && n.options.safeFrame ? window.$sf && window.$sf.ext ? (this.outstream = n, this.$ext = window.$sf && window.$sf.ext, this.$ext.register(this.outstream.width, this.outstream.height, function(e, t) {
            switch (e) {
                case "geom-update":
                    this.updateGeometry(t);
                    break;
                case "expanded":
                    n.finishedExpanding();
                    break;
                case "collapsed":
                case "failed":
                    n.handleMessage("terminate");
                    break;
                case "focus-change":
                    this.winHasFocus() ? n.listenerFocus() : n.listenerBlur()
            }
        }.bind(this)), this.collapse = function() {
            this.$ext.collapse({
                ext: {
                    width: 0,
                    height: 0
                }
            })
        }, this.isViewable = function() {
            return 90 < this.$ext.inViewPercentage()
        }, this.winHasFocus = function() {
            return this.$ext.winHasFocus()
        }, this.expand = function() {
            var e;
            this.outstream.isExpanded || (e = !(!(e = this.$ext.supports()) || !0 !== e["exp-push"]), this.updateGeometry(), this.outstream.options.safeFrameAutoInitialSize || (this.outstream.options.width = this.outstream.options.player_width, this.outstream.options.height = this.outstream.options.player_height), this.$ext.expand({
                push: e,
                t: 0,
                r: this.outstream.options.width,
                b: this.outstream.options.height,
                l: 0,
                ext: {
                    tweenTime: this.outstream.options.expandTime
                }
            }), this.outstream.isMobile && this.outstream.playerManager.resizeVideo(-1))
        }, this.updateGeometry = function(e, t) {
            var n, i, o, e = e || this.$ext.geom();
            e && (n = e.win && e.win.h, i = e.anx && e.anx.scrollTop, o = e.self && e.self.t, isNaN(n) || isNaN(i) || isNaN(o) || (this.outstream.options.safeFrameAutoInitialSize && !this.outstream.isExpanded && t && this.outstream.options.width !== e.par.w && (this.outstream.options.width = e.par.w, this.outstream.options.height = e.par.h, r("safeFrameAutoInitialSize is set to true using dimensions from parent sf", this.outstream.options.height, this.outstream.options.width)), this.outstream.parentIframeGeometryUpdate({
                windowHeight: n,
                scrollY: i,
                offsetTop: o
            })))
        }, void this.updateGeometry(null, !0)) : r("Cannot initialize outstream safeframe without sf_ext library") : r("Cannot initialize SafeFrame without outstream instance")
    }
}, function(e, t) {
    e.exports = function(e, n, t, i, o, r, a, s, y, A, l, d, b, c, w, k) {
        !0 === c && (r = 0, o = window.self.innerHeight || (window.self.documentElement ? window.self : window.self.document).documentElement.clientHeight);
        var u, p, h, m, f, v, g, c = void 0 !== s ? s : l,
            T = void 0 !== a ? a / 100 : d / 100,
            s = c * T,
            l = Number(c) - c * T,
            E = {
                top: 0
            };
        if (void 0 === e || e instanceof Element == !1) return !1;

        function S(e, t) {
            for (var n = e, i = null; 0 < t && n.parentNode;) n = "[object ShadowRoot]" === n.parentNode.toString() ? (i = n.parentNode, --t, n.parentNode.host) : n.parentNode;
            return i
        }
        a = i ? n.innerHeight || (n.documentElement ? n : n.document).documentElement.clientHeight : o, d = n !== window.self;
        r = (d = !i || d) ? (i ? (v = function(e, t) {
            if (!(e === n || t <= 0))
                for (g = e.parent.document.getElementsByTagName("iframe"), f = 0; f < g.length; f++) m = g[f], (h = m.contentWindow) === e && (m = m.getBoundingClientRect().top, E.top += m, v(h.parent, --t))
        })(window.self, 100) : E.top = r, p = (u = (o = E.top - a) + (d = e.getBoundingClientRect().top)) + s, o + d + l) : (p = (u = i = e.getBoundingClientRect().top - a) + s, i + l);
        return !t && u < 0 && -1 * c < u || !(y && A && 0 < A && t && !1 === function() {
            var t = !0;
            try {
                var e, n = y,
                    i = n.getBoundingClientRect().top,
                    o = n.getBoundingClientRect().bottom,
                    r = n.getBoundingClientRect().left,
                    a = n.getBoundingClientRect().right,
                    s = n.getBoundingClientRect().width,
                    l = n.getBoundingClientRect().height,
                    d = window.self.innerHeight || (window.self.documentElement ? window.self : window.self.document).documentElement.clientHeight,
                    c = isNaN(Number(k)) ? 5 : k,
                    o = (i = (i = i && i < -1 * l ? -1 * l : i) && d < i ? d : i, (o = o && o < 0 ? 0 : o) && d + l < o ? d + l : o),
                    u = s * (A / 100),
                    p = l * (A / 100),
                    h = 0,
                    m = 0,
                    f = 0,
                    v = 0;
                if (!0 === b) {
                    for (v = (r + a) / 2, f = i; f <= o - 1; f += p)((e = document.elementFromPoint(v, f)) === n || w && w instanceof Element && e === (S(w, c) && S(w, c).host)) && m++, h++;
                    e = document.elementFromPoint(v, o - 1), h++, (e === n || w && w instanceof Element && e === (S(w, c) && S(w, c).host)) && m++
                } else
                    for (f = i; f <= o - 1; f += p)
                        for (v = r; v <= a - 1; v += u)((e = document.elementFromPoint(v, f)) === n || w && w instanceof Element && e === (S(w, c) && S(w, c).host)) && m++, h++;
                var g = (l - l * (1 - m / h)) / l;
                g <= T && g < 1 && (t = !1)
            } catch (e) {
                console.log("PlayerManager : ViewableDetector : " + e), t = !0
            }
            return t
        }()) && (!(r < -1 * a) && (!t && p < 0 || p < 0))
    }
}, function(e, t, n) {
    var s = n(2),
        l = n(80);
    e.exports = function(a) {
        return function(e) {
            var t, n, i, o, r;
            !0 === a.options.sideStream.enabled && a.sideStream && !0 === a.sideStream.isActivated && (a.playerManager.isCompleted = !0), a.playerManager.forceToSkip && (a.isAreadyTerminated = !1, a.playerManager.forceToSkip = !1), a.isAreadyTerminated || (s.info("terminate all elements", "Outstream_Events"), a.rWindow.clearInterval(a.triggerCheckFocus), a.rWindowForPublisher.removeEventListener("resize", a.fnRotationChange), a.isWindowTopAccessible && (a.rWindowForPublisher.removeEventListener("scroll", a.detectAndPlay), a.rWindowForPublisher.removeEventListener("touchmove", a.detectAndPlay)), a.intervalIdForDetectAndPlay && a.rWindowForPublisher.clearInterval(a.intervalIdForDetectAndPlay), t = 3e3, n = 0, a.disableCollapse.enabled = a.disableCollapse.enabled && !a.playerManager.isSkipped && !a.isTerminatedByPublisher, i = function() {
                a.playerManager && a.playerManager.delayEventHandler.lazyTerminate(), l.isFullScreen(a.playerManager) ? n <= t ? setTimeout(function() {
                    n += 500, i()
                }, 500) : (a.playerManager.isCompleted = !0, a.playerManager.explicitPause(), a.targetElement = null, a.eventCB(a.ASTadId, e ? a.cbType.error : a.cbType.ended, a.options, e)) : (a.targetElement && (a.targetElement.textContent = "", a.targetElement = void 0), a.eventCB(a.ASTadId, e ? a.cbType.error : a.cbType.ended, a.options, e))
            }, o = function() {
                a.cbNotification(a.cbNotificationType.collapseEnd), i(), a.isAlreadyCompleted || e || a.isTerminatedByPublisher || a.cbNotification(a.cbNotificationType.adComplete)
            }, r = function(e) {
                e.target.removeEventListener(e.type, arguments.callee), o()
            }, l.isFullScreen(a.playerManager) ? (document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(), a.disableCollapse.enabled ? a.eventCB(a.ASTadId, e ? a.cbType.error : a.cbType.ended, a.options, e) : (a.isExpanded && (a.cbNotification(a.cbNotificationType.collapseStart), a.options.safeFrame || (a.targetElement.style.overflow = "hidden", a.targetElement.style.height = "0px", a.targetElement.style.display = "none"), a.cbNotification(a.cbNotificationType.collapseEnd)), i()), e || a.cbNotification(a.cbNotificationType.adComplete)) : (a && a.targetElement && a.targetElement.style && (l.isAndroid() ? a.targetElement.style.webkitTransition = "height " + a.animationSpeed + "s ease" : a.targetElement.style.transition = "height " + a.animationSpeed + "s ease"), a.playerManager.isCompleted = !0, a.sendPauseSignalToVideoPlayerExplicit(), a.disableCollapse.enabled ? (e || a.isTerminatedByPublisher || a.cbNotification(a.cbNotificationType.adComplete), a.isAlreadyCompleted = !0) : a.isExpanded && (a.cbNotification(a.cbNotificationType.collapseStart), a.targetElement.addEventListener("transitionend", r), a.targetElement.addEventListener("mozTransitionEnd", r), a.targetElement.addEventListener("webkitTransitionEnd", r), a.targetElement.addEventListener("oTransitionEnd", r), a.options.safeFrame || (a.targetElement.style.height = "0px"))), a.isAreadyTerminated = !0, setTimeout(function() {
                !a.isCollapseEnd && a.isCollapseStart && a.cbNotification(a.cbNotificationType.collapseEnd), a.isAdComplete || e || a.isTerminatedByPublisher || a.cbNotification(a.cbNotificationType.adComplete)
            }, a.options.expandTime + a.TIME_TO_REVERIFY))
        }
    }
}, function(e, t, n) {
    function i(e) {
        o.verbose("[Outstream_Mobile]", e)
    }
    var o = n(2),
        r = n(80);
    e.exports = function(t) {
        return {
            handleFullscreen: function() {
                i("handleFullscreen"), t.shouldResizeByFullscreenChange && setTimeout(function() {
                    t.playerManager.isCompleted || t.playerManager.resizeVideo(-1), t.resizeOutstreamArea(), r.isAndroid() || t.playerManager.play(), t.shouldResizeByFullscreenChange = !1
                }, 500)
            },
            fnRotationChange: function() {
                i("fnRotationChange"), (!t.playerManager.options.sideStreamObject || "function" != typeof t.playerManager.options.sideStreamObject.shouldNotResizeWhenSideStreamActivated || !t.playerManager.options.sideStreamObject.shouldNotResizeWhenSideStreamActivated()) && !0 === t.isExpanded && (t.playerManager && t.playerManager.isCompleted && r.isAndroid() && !1 === t.options.disableCollapse.hideControlBar ? (t.playerManager.resizeVideo(-1), t.resizeOutstreamArea()) : t.videoIsreadyToPlay && (t.options.autoInitialSize && (t.options.width = t.options.targetElement.offsetWidth), r.isMobile() && !t.playerManager.isIosInlineRequired() && r.isFullScreen(t.playerManager) ? t.shouldResizeByFullscreenChange = !0 : t.playerManager && t.playerManager.isIosInlineRequired && t.playerManager.isIosInlineRequired() || (t.playerManager.resizeVideo(-1), t.resizeOutstreamArea())))
            },
            resizeOutstreamArea: function() {
                var e;
                i("resizeOutstreamArea"), t.options.safeFrame || t.playerManager && t.playerManager.isFullscreen && t.playerManager.isCompleted && r.isAndroid() || (t.targetElement.style.height = t.options.height + "px", (e = document.getElementById(t.playerManager.videoObjectId)) && (e.style.width = t.options.width, e.style.height = t.options.height))
            }
        }
    }
}, function(e, t, n) {
    function u(e) {
        i.verbose(e, "Outstream_Waterfall")
    }
    var i = n(2),
        p = n(80),
        h = n(3).autoplayHandler;
    e.exports = function(c) {
        return {
            cleanupTargetElement: function() {
                u("cleanupTargetElement");
                var e = c.options.targetElement;
                if (p.isAndroid()) {
                    if (e && e.hasChildNodes())
                        for (var t = e.getElementsByTagName("iframe"), n = h.APN_MOBILE_IFRAME_NAME + "_Waterfall_" + c.options.adAttempt, i = 0; i < t.length; i++) {
                            var o, r = t[i];
                            r && r.name && r.name === n && (o = r.parentNode.firstChild, r.parentNode.removeChild(o))
                        }
                } else if (e && e.hasChildNodes()) {
                    for (var a = c.options.wcElement && c.options.wcElement instanceof Element ? c.options.wcElement.querySelector("#waterfall_mask") : document.getElementById("waterfall_mask"), s = e.clientWidth, l = e.clientHeight, d = 0; d < e.childNodes.length; d++) "waterfall_mask" !== e.childNodes[d].id && "apn_user_sync" !== e.childNodes[d].id && (s = e.childNodes[d].clientWidth, l = e.childNodes[d].clientHeight, e.removeChild(e.childNodes[d]));
                    a || c.isExpanded || ((a = document.createElement("div")).id = "waterfall_mask", a.style.cssText = "display:inline-block; margin: 0;padding: 0;border: 0; background-color: #000;", e.appendChild(a), a.style.width = s + "px", a.style.height = l + "px")
                }
            },
            cleanupPreviousElement: function() {
                u("cleanupPreviousElement");
                var e, t = c.options.targetElement;
                t && t.hasChildNodes() && 1 < t.childNodes.length && ((e = c.options.wcElement && c.options.wcElement instanceof Element ? c.options.wcElement.querySelector("#waterfall_mask") : document.getElementById("waterfall_mask")) && t.removeChild(e))
            }
        }
    }
}, function(e, t, n) {
    function r(e) {
        i.debug(e, "Outstream_ExternalInterface")
    }
    var a = n(80),
        i = n(2),
        s = ["sideStream"];
    e.exports = function(o) {
        return {
            handleMessage: function(e, n) {
                switch (r("messageName : " + e), r("messagePayload : " + n), e) {
                    case "okToPlayAd":
                        o.handleOkToPlayAd();
                        break;
                    case "terminate":
                        r("Ad terminated by external AST message"), o.isTerminatedByPublisher = !0, o.terminateAll(!1);
                        break;
                    case "updateOptions":
                        if ("object" == typeof n) {
                            var t, i = Object.keys(n).reduce(function(e, t) {
                                return -1 !== s.indexOf(t) && (e[t] = n[t]), e
                            }, {});
                            for (t in i) "[object Object]" === Object.prototype.toString.call(i[t]) ? o.options[t] = a.extend(o.options[t], i[t]) : o.options[t] = i[t]
                        }
                        break;
                    case "pause":
                        o.playerManager.pausedByAPI = !0, o.playerManager.explicitPause();
                        break;
                    case "play":
                        o.playerManager.pausedByAPI = !1, o.playerManager.explicitPlay()
                }
            },
            parentIframeGeometryUpdate: function(e) {
                e && e.isModal && !0 === e.isModal && (o.parentIframeIsModal = !0), !e || isNaN(e.offsetTop) || isNaN(e.scrollY) || isNaN(e.windowHeight) || (o.currentEventFromCrossDomainWindow.offsetTop = e.offsetTop - e.scrollY, o.currentEventFromCrossDomainWindow.windowHeight = e.windowHeight)
            },
            handleOkToPlayAd: function() {
                o.isOkToPlayFromPublisher = !0, o.detectAndPlay()
            },
            cbNotification: function(e, t, n) {
                t ? o.playerManager.delayEventHandler.push(function() {
                    o.cbNotification_internal(e, t, n)
                }) : o.cbNotification_internal(e, t, n)
            },
            eventCB: function(e, t, n, i) {
                o.eventCB_internal(e, t, n, i)
            },
            cbNotification_internal: function(e, t, n) {
                o.options.hasOwnProperty("cbNotification") && (t ? o.options.cbNotification("VAST", e, o.options.targetId, null, n ? {
                    vastEventData: n
                } : null) : (o.options.cbNotification("AdUnit", e, o.options.targetId, n, n ? {
                    adUnitEventData: n
                } : null), "collapseStart" === e && (o.isCollapseStart = !0, o.options.safeFrame && o.$sf.collapse()), "collapseEnd" === e && (o.isCollapseEnd = !0), "adComplete" === e && (o.isAdComplete = !0), "expandStart" === e && (o.options.safeFrame && o.$sf.expand(), o.playerManager.dispatchEventToAdunit({
                    name: "expand"
                })), "collapseEnd" === e && o.playerManager.dispatchEventToAdunit({
                    name: "collapse"
                })))
            },
            eventCB_internal: function(e, t, n, i) {
                r("invoke eventCB to " + e + " with '" + t + "' event");
                try {
                    n && "function" == typeof n.eventCB && n.eventCB(e, t, n), t === o.cbType.error && (i && 1 === i.code && o.cbNotification(o.cbNotificationType.timeout, !1), o.cbNotification(o.cbNotificationType.error, !0))
                } catch (e) {
                    r(e)
                }
            },
            reportFinalSize: function() {
                var e = o.playerManager.getFinalSize();
                o.sizeObj = {
                    originalSize: {
                        width: o.originalSize.width,
                        height: o.originalSize.height
                    },
                    finalSize: {
                        width: e.width,
                        height: e.height
                    }
                }, r("options delivered from impbus : autoInitialSize=" + o.options.autoInitialSize + ", playerAspectRatio=" + o.options.playerAspectRatio + ", playerHeight(deprecated)=" + o.options.playerHeight), r("size delivered from impbus (width,height) : " + o.sizeObj.originalSize.width + "," + o.sizeObj.originalSize.height), r("size finalized by player (width,height) : " + o.sizeObj.finalSize.width + "," + o.sizeObj.finalSize.height), o.cbNotification(o.cbNotificationType.size, !1, o.sizeObj)
            }
        }
    }
}, function(e, t, n) {
    function i(e) {
        o.debug(e, "Outstream_Media")
    }
    var o = n(2);
    e.exports = function(e) {
        return {
            isPlayingVideo: function() {
                return !!e.playerManager && e.playerManager.isPlayingVideo
            },
            sendPlaySignalToVideoPlayerExplicit: function() {
                "auto" !== e.options.initialPlayback && !e.playerManager.isDoneInitialPlay || e.isPlayingVideo() || "function" == typeof e.playerManager.play && (e.playerManager.explicitPlay(), i("sendPlaySignalToVideoPlayerExplicit"))
            },
            sendPlaySignalToVideoPlayer: function() {
                "auto" !== e.options.initialPlayback && !e.playerManager.isDoneInitialPlay || e.isPlayingVideo() || "function" != typeof e.playerManager.play || e.playerManager.explicitPaused || (e.playerManager.play(), i("sendPlaySignalToVideoPlayer"))
            },
            sendPauseSignalToVideoPlayerExplicit: function() {
                e.isPlayingVideo() && ("function" == typeof e.playerManager.explicitPause && e.playerManager.explicitPause(), i("sendPauseSignalToVideoPlayerExplicit"))
            },
            sendPauseSignalToVideoPlayer: function() {
                e.isPlayingVideo() && ("function" == typeof e.playerManager.pause && e.playerManager.pause(), i("sendPauseSignalToVideoPlayer"))
            }
        }
    }
}, function(e, t, n) {
    function a(e) {
        r.verbose(e, o)
    }

    function s(e) {
        r.error(e, o)
    }

    function i(e) {
        r.info(e, o)
    }
    var o = "Outstream_Events",
        r = n(2),
        l = n(80),
        d = n(78);
    e.exports = function(r) {
        return {
            listenerBlur: function() {
                !1 !== r.playerManager.toggleWindowFocus && r.playerManager.isPlayingVideo && (!0 !== r.isElementVisible(r.targetElement) && !0 !== r.sideStream.isActivated || r.sendPauseSignalToVideoPlayer(), r.playerManager.toggleWindowFocus = !1, i("pause a video by leaving a focus from the window"))
            },
            listenerFocus: function() {
                var e;
                !0 !== r.playerManager.toggleWindowFocus && (e = (r.options.sideStream && r.options.sideStream.height && r.haveVideoThresholdForSideStream ? r.options.sideStream : r.options).height, e = r.isElementVisible(r.targetElement, 1, e), r.playerManager && (r.playerManager.isViewable = e), r.isExpanded && (e || !0 === r.sideStream.isActivated) && (l.isIos() && 14 <= parseInt(l.getIOSVersion()) && !0 === r.options.enableInlineVideoForIos ? (e = r.playerManager.adVideoPlayer.player().currentTime(), r.playerManager.iframeVideoWrapper.iOS14ResumeTime = e, r.playerManager.load(), r.playerManager.pause(), r.playerManager.adVideoPlayer.bigPlayButton.hide(), setTimeout(r.sendPlaySignalToVideoPlayer, 500)) : r.sendPlaySignalToVideoPlayer(), r.playerManager.toggleWindowFocus = !0), i("resume a video by having a focus on the window"))
            },
            setIsExpanded: function(e) {
                r.isExpanded = e, r.playerManager.isExpanded = e
            },
            finishedExpanding: function() {
                r.isExpandTransitionCompleted || (r.isExpandTransitionCompleted = !0, r.cbNotification(r.cbNotificationType.expandEnd), "auto" !== r.options.initialPlayback && r.playerManager.delayEventHandler.suppress(!1), r && r.targetElement && r.targetElement.style && (l.isAndroid() ? r.targetElement.style.webkitTransition = "" : r.targetElement.style.transition = "")), r.reportFinalSize()
            },
            expandArea: function() {
                i("expand outstream area"), r.options.sideStream.enabled && r.options.sideStream.startInSideStream ? (r.sideStream.isActivated || ((l.isIos() || l.isSafari()) && (r.targetElement.style.willChange = "unset"), r.sideStream.moveAdUnit()), r.cbNotification(r.cbNotificationType.expandStart), r.setIsExpanded(!0)) : (l.isMobile() && r.playerManager.isIosInlineRequired() && !r.isWindowTopAccessible && !r.options.safeFrame && l.fireCustomEvent(r.options.targetElement, "IOS_INLINE_REFERESH"), r.options.safeFrame ? (r.targetElement.style.width = "100%", r.isMobile ? r.targetElement.style.height = Math.max(r.options.height, r.options.player_height) + "px" : r.targetElement.style.height = r.options.height + "px") : (r.targetElement.addEventListener("transitionend", function(e) {
                    (l.isMac() && l.isSafari() || l.isIos()) && (r.targetElement.style.willChange = "unset"), r.finishedExpanding(), e.target.removeEventListener(e.type, arguments.callee)
                }), l.isIos() && (r.targetElement.style.willChange = "unset"), r.targetElement.style.height = r.options.height + "px"), r.cbNotification(r.cbNotificationType.expandStart), setTimeout(function() {
                    r.isExpandTransitionCompleted || r.targetElement.style.height !== r.options.height + "px" || r.finishedExpanding()
                }, 1e3 * r.animationSpeed + 500), r.setIsExpanded(!0), r.options.vpaid && r.playerManager.dispatchEventToAdunit({
                    name: "creative-view"
                }))
            },
            detectAndPlay: function() {
                if (r.options.aspectRatio) {
                    var e = r.options.aspectRatio.split(":");
                    if (2 === e.length && ("0" === e[0] || "0" === e[1])) return
                } else r.options.aspectRatio = d.aspectRatio, r.playerManager.resizeVideo(-1);
                if (!(!0 !== r.videoIsreadyToPlay || r.isAreadyTerminated || Object.keys && 0 === Object.keys(r.playerManager).length)) {
                    if (!r.isDoneLoadVideo) try {
                        !1 === (l.isIos() && !0 === r.options.enableInlineVideoForIos) && r.playerManager.load(), r.isDoneLoadVideo = !0
                    } catch (e) {
                        s(e)
                    }
                    e = r.isElementVisible(r.targetElement);
                    if (r.playerManager && (r.playerManager.isViewable = e), !1 === r.isExpanded && r.videoIsreadyToPlay && e && r.isOkToPlayFromPublisher) "auto" === r.options.initialPlayback && (r.playerManager.isPlayingVideo = !1), r.expandArea(), r.eventCB(r.ASTadId, r.cbType.impression, r.options), r.eventCB(r.ASTadId, r.cbType.loaded, r.options), r.setIsExpanded(!0), r.playerManager.pausedByViewability = !0, i("ready to start to play a video by videopausedByViewability true");
                    else if (r.isExpanded) {
                        if (e = r.isElementVisible(r.targetElement), !1 === r.playerManager.isFullscreen && !1 === e && !1 === r.playerManager.isCompleted && r.doneInitialPlayback && !0 === r.options.sideStream.enabled && r.sideStream && !1 === r.haveVideoThresholdForSideStream && !0 === r.sideStream.checkPageOverlay() && r.options.impressionSent) {
                            if (!0 === r.playerManager.isFullscreenToggled && !1 === l.isMobile()) return;
                            if (!l.isIos() || !1 !== r.options.enableInlineVideoForIos) return r.haveVideoThresholdForSideStream = !0, void r.sideStream.moveAdUnit()
                        }!0 === r.haveVideoThresholdForSideStream && !0 === r.sideStream.checkPageOverlay() ? r.playerManager.isViewable = !0 : (r.playerManager.isFullscreen && r.playerManager.isMuted && r.playerManager.hasBeenUnmuted ? (r.playerManager.unmute(), r.isMutedByViewability = !1, r.playerManager.mutedByViewability = !1) : "mute" === r.options.nonViewableBehavior && r.playerManager && !1 === r.playerManager.isFullscreen && !r.playerManager.isPaused && (e && !0 === r.isMutedByViewability ? (r.playerManager.unmute(), r.isMutedByViewability = !1, r.playerManager.mutedByViewability = !1, "auto" === r.options.initialPlayback && r.playerManager.delayEventHandler.suppress(!1)) : !1 === e && !1 === r.isMutedByViewability && !1 === r.playerManager.isMuted && (r.playerManager.mute(), r.isMutedByViewability = !0, r.playerManager.mutedByViewability = !0), r.doneInitialPlayback && (e = !0)), r.playerManager && (r.playerManager.isViewable = e), e ? r.playerManager.pausedByViewability ? ("auto" === r.options.initialPlayback && r.playerManager.delayEventHandler.suppress(!1), r.sendPlaySignalToVideoPlayerExplicit(), r.playerManager.pausedByViewability = !1, a("set pausedByViewability false"), r.doneInitialPlayback = !0, l.isAndroid() && (r.rWindowForPublisher.removeEventListener("touchmove", r.detectAndPlay), r.intervalIdForDetectAndPlay = setInterval(r.detectAndPlay, r.options.intervals.playAndPause))) : r.firstAdAttempted && r.videoIsreadyToPlay && !r.playerManager.isDoneInitialPlay && r.sendPlaySignalToVideoPlayerExplicit() : l.isFullScreen(r.playerManager) || !r.playerManager.isDoneInitialPlay || r.playerManager.pausedByViewability || r.playerManager.explicitPaused || !0 == !r.sideStream.isActivated && (r.sendPauseSignalToVideoPlayerExplicit(), a("set pausedByViewability true"), r.playerManager.pausedByViewability = !0))
                    }
                }
            },
            whenImpression: function() {},
            isElementVisible: function(e, t, n) {
                if (!0 === r.options.topMostViewableCheck.enabled) {
                    if (e && e.children && 0 < e.children.length && e.children[0])
                        if (r.playerManager && r.playerManager.options && r.playerManager.options.iframeVideoWrapperId && "string" == typeof r.playerManager.options.iframeVideoWrapperId && "" !== r.playerManager.options.iframeVideoWrapperId && document.getElementById(r.playerManager.options.iframeVideoWrapperId)) r.elementToCheckTopMost = document.getElementById(r.playerManager.options.iframeVideoWrapperId);
                        else
                            for (var i = 0; i < e.children.length; i++) {
                                var o = e.children[i];
                                if (o && o.id && "string" == typeof o.id && -1 < o.id.indexOf("iframeVideoWrapper_")) {
                                    r.elementToCheckTopMost = o;
                                    break
                                }
                            } else r.elementToCheckTopMost = e;
                    r.rateOfBeaconsForTopMostCheck = r.options.topMostViewableCheck.rateOfBeacons
                }
                if (l.isAMP() && 0 == r.currentEventFromCrossDomainWindow.windowHeight && 0 == r.currentEventFromCrossDomainWindow.offsetTop) return a("Outstream AMP is assuming visibity due to offsetTop is zero..."), !0;
                if (!l.isAMP() || r.ampParentSeen) return r.viewableDetector(e, r.rWindowForPublisher, r.isExpanded, r.isWindowTopAccessible, r.currentEventFromCrossDomainWindow.windowHeight, r.currentEventFromCrossDomainWindow.offsetTop, t, n, r.elementToCheckTopMost, r.rateOfBeaconsForTopMostCheck, r.options.height, r.options.playVideoVisibleThreshold, r.options.topMostViewableCheck.checkVerticalOnly, r.parentIframeIsModal, r.options.wcElement, r.options.wcViewabilityDepth);
                try {
                    a("Outstream requesting Geometry from Parent..."), window.parent.postMessage("ampParentFrameGeometryRequest", "*")
                } catch (e) {
                    s("Unable to send Geometry Request to AMP-AD Parent " + e.message)
                }
                return !1
            },
            renderVideo: function() {
                r && r.options && r.options.sideStream && r.options.sideStream.startInSideStream && r.isElementVisible(r.targetElement) && ((l.isIos() || l.isSafari()) && (r.targetElement.style.willChange = "unset"), r.sideStream.moveAdUnit())
            }
        }
    }
}, function(e, t, n) {
    function d(e) {
        o.warn(i, e)
    }

    function c(e) {
        o.info(i, e)
    }
    var u = "[ERRORCODE]",
        p = "[CACHEBUSTING]",
        h = "AN_DEFAULT",
        m = n(29),
        f = n(8),
        i = "TM",
        v = {},
        o = n(2),
        g = function(e) {
            o.log(i, e)
        },
        a = function(e) {
            o.verbose(i, e)
        },
        r = (a("Tracking Manager Version 1.0.14"), null);

    function s(e, t) {
        (v = v || {})[t = t || h] || (v[t] = {});
        var n = {
            isImpression: !1,
            reportOnce: !0,
            reported: !1,
            urls: []
        };
        v[t][e] = n, a("tracking data created, adId=" + t + ", event=" + e)
    }

    function l(e) {
        var t = e;
        switch (e) {
            case "impressionUrls":
                t = "impression";
                break;
            case "clickTrackingUrls":
            case "click":
                t = "ad-click";
                break;
            case "errorUrls":
                t = "error";
                break;
            case "imp_tracking_url":
                t = "bid-impression";
                break;
            case "init_cb":
                t = "ad-request";
                break;
            case "result_cb":
                t = "ad-response";
                break;
            case "start":
                t = "video-start";
                break;
            case "firstQuartile":
                t = "video-first-quartile";
                break;
            case "midpoint":
                t = "video-mid";
                break;
            case "thirdQuartile":
            case "thirdQuartile":
                t = "video-third-quartile";
                break;
            case "complete":
                t = "video-complete";
                break;
            case "unmute":
                t = "audio-unmute";
                break;
            case "mute":
                t = "audio-mute";
                break;
            case "pause":
                t = "video-pause";
                break;
            case "rewind":
                t = "rewind";
                break;
            case "resume":
                t = "video-resume";
                break;
            case "fullscreen":
                t = "video-fullscreen";
                break;
            case "exitFullscreen":
                t = "video-exit-fullscreen";
                break;
            case "creativeView":
                t = "creative-view";
                break;
            case "expand":
                t = "ad-expand";
                break;
            case "collapse":
                t = "ad-collapse";
                break;
            case "acceptInvitation":
                t = "user-accept-invitation";
                break;
            case "close":
                t = "user-close";
                break;
            case "progress":
                t = "ad-progress";
                break;
            case "skip":
                t = "video-skip"
        }
        return t
    }

    function y(e, t, n) {
        n = n || h, e = l(e), v.hasOwnProperty(n) && v[n].hasOwnProperty(e) || s(e, n), v[n][e].urls.push(t), a("Tracking added, adId=" + n + ", event=" + e + ", url=" + t)
    }

    function A(e, t) {
        var n = "";
        return n = f.isNotEmpty(e) && f.isNotEmpty(t) ? (e = l(e)) + "_" + t : n
    }

    function b(e, t, n) {
        n = n || h, f.isNotEmpty(e) && (v.hasOwnProperty(n) && v[n].hasOwnProperty(e) || s(e, n), v[n][e].reportOnce = t, a("setting report once, adId=" + n + ", event=" + e + ", setting=" + t))
    }

    function w(e, t) {
        var n, i, o, r;
        if (t = t || h, v && v.hasOwnProperty(t))
            for (n in v[t]) i = n, r = !1, o = v[o = (o = t) || h][i], (r = o && o.hasOwnProperty("isImpression") ? !0 === o.isImpression : r) && !e ? a("reset history skipping impression event=" + n + ", adId=" + t) : (v[t][n].reported = !1, a("reset history for adId= " + t + ", event=" + n))
    }

    function k(e, t, n) {
        n = n || h, e = l(e), v.hasOwnProperty(n) && v[n].hasOwnProperty(e) || s(e, n), v[n][e].isImpression = t
    }

    function T(e, t) {
        var n, i, o, r;
        return t && (n = (n = t.value) && "number" == typeof n ? n.toString() : n, f.isNotEmpty(n) && (t = t.macro, f.isNotEmpty(t) ? -1 < e.indexOf(t) && (o = n, t = t, e = r = -1 < (r = i = e).indexOf(t) ? i.replace(t, o) : r) : (i = n, t = "?", -1 < (o = e).indexOf("?") && (t = "&"), e = o + t + i))), e
    }
    var E, S = {
        TIMESTAMP: (new Date).toISOString(),
        MEDIAPLAYHEAD: null,
        BREAKPOSITION: null,
        ADCOUNT: null,
        TRANSACTIONID: (E = (new Date).getTime(), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = (E + 16 * Math.random()) % 16 | 0;
            return E = Math.floor(E / 16), ("x" === e ? t : 3 & t | 8).toString(16)
        })),
        PLACEMENTTYPE: null,
        IFA: -1,
        IFATYPE: -1,
        CLIENTUA: null,
        DEVICEIP: null,
        LATLONG: -1,
        PAGEURL: function() {
            try {
                return top && top.location && top.location.href ? top.location.href : -1
            } catch (e) {
                return -1
            }
        }(),
        APPNAME: -1,
        APIFRAMEWORKS: "2,7",
        EXTENSIONS: -1,
        PLAYERCAPABILITIES: null,
        CLICKTYPE: null,
        PLAYERSTATE: null,
        PLAYERSIZE: null,
        ADPLAYHEAD: null,
        ASSETURI: null,
        PODSEQUENCE: null,
        CLICKPOS: -1,
        LIMITADTRACKING: null
    };

    function C(e) {
        for (var t in S) {
            var n;
            0 <= e.indexOf("[" + t + "]") && (null === (n = S[t]) && (n = r ? r.resolveMacro(t) : -1), e = e.split("[" + t + "]").join(encodeURIComponent(n)))
        }
        return e
    }

    function I(e, t, n) {
        var i = !1;
        if (v.hasOwnProperty(n = n || h) && v[n].hasOwnProperty(e)) {
            var o = v[n][e];
            if (o)
                if (o.reportOnce && o.reported) c("Cannot report event - event has already been reported: " + e + " for adId=" + n), i = !0;
                else {
                    var r = o.urls;
                    if (r) {
                        o.reported = !0;
                        for (var a = 0; a < r.length; a++) {
                            var s, l = r[a];
                            f.isNotEmpty(l) && (i = !0, t && (l = T(l, t)), s = "" + Math.floor(1e7 * Math.random()), -1 < l.indexOf(p) ? l = T(l, {
                                macro: p,
                                value: s
                            }) : o.reportOnce || "ad-click" === e || (l = T(l, {
                                value: "apn_rnd=" + s
                            })), l = C(l), g("requesting tracking for " + (s = e) + ", url=" + (l = l)), m.trackPixel(l, s))
                        }
                    }
                }
        }
        i || d("No tracking urls found for adId=" + n + ", event = " + e)
    }

    function P(e, t, n, i) {
        I(A(e, t), function(e) {
            a("Creating params for mediation tracking from obj: " + f.objectToString(e));
            var t = {},
                n = "";
            if (e)
                for (var i in e) null !== e[i] && "undefined" !== e[i] && (0 < n.length && (n += "&"), n += i + "=" + e[i]);
            return t.value = n, t
        }(n), i)
    }

    function j(e) {
        return "progress>" + e
    }

    function x(e) {
        if (e = e || h, v && v.hasOwnProperty(e)) {
            var t, n = v[e];
            for (t in delete v[e], n) a("Removing event: " + t + " for adId=" + e)
        }
    }
    e.exports = {
        init: function(e, t) {
            if (x(t), e)
                for (var n = 0; n < e.length; n++) b(e[n], !1, t)
        },
        setPlayer: function(e) {
            r = e
        },
        addTrackingEvent: function(e, t, n) {
            y(e, t, n)
        },
        addTrackingEvents: function(e, t) {
            if (e)
                for (var n in e) {
                    var i = e[n];
                    if (f.isNotEmpty(i))
                        for (var o = 0; o < i.length; o++) y(n, i[o], t)
                }
        },
        addMediationTrackingEvent: function(e, t, n, i) {
            var o = A(e, t);
            a("creating event name for adId=" + (i || h) + ", event=" + e + ", networkName=" + t + " =>" + o), y(o, n, i)
        },
        addProgressTrackingEvent: function(e, t, n) {
            y(j(e), t, n)
        },
        markAsImpressionEvent: function(e, t, n) {
            a("marking event as impression: " + e + ", adId=" + (n || h) + ", value=" + t), k(e, t, n)
        },
        markAsMediationImpressionEvent: function(e, t, n, i) {
            f.isNotEmpty(n) && (e = A(e, n)), a("marking event as impression: " + e + ", adId=" + (i || h) + ", value=" + t), k(e, t, i)
        },
        reportOnlyOnce: function(e, t, n) {
            b(e, t, n)
        },
        reportMediationOnlyOnce: function(e, t, n, i) {
            e = e, t = t, n = n, i = (i = i) || h, f.isNotEmpty(e) && (e = l(e), f.isNotEmpty(n) && (e = A(e, n)), v.hasOwnProperty(i) && v[i].hasOwnProperty(e) || s(e, i), v[i][e].reportOnce = t, a("setting report once, adId=" + i + ", event=" + e + ", setting=" + t))
        },
        resetTrackingHistory: function(e, t) {
            w(e, t)
        },
        requestTracking: function(e, t) {
            c("tracking requested for " + e + ", adId=" + (t || h)), I(e, null, t)
        },
        getTrackingUrls: function(e, t) {
            c("URLs requested for " + e + ", adId=" + (t || h));
            var n = [],
                i = !1;
            if (v.hasOwnProperty(t = t || h) && v[t].hasOwnProperty(e)) {
                var o = v[t][e];
                if (o) {
                    var r = o.urls;
                    if (r)
                        for (var a = 0; a < r.length; a++) {
                            var s = r[a];
                            f.isNotEmpty(s) && (i = !0, s = C(s), n.push(s))
                        }
                }
            }
            return i || d("No tracking urls found for adId=" + t + ", event = " + e), n
        },
        requestParamTracking: function(e, t, n) {
            c("tracking requested for " + e + " with param=" + f.objectToString(t) + ", adId=" + (n || h)), I(e, t, n)
        },
        requestMediationTracking: function(e, t, n, i) {
            c("tracking requested for mediation event: " + e + ", network=" + t + " , params=" + f.objectToString(n) + ", adId=" + (i || h)), P(e, t, n, i)
        },
        requestErrorTracking: function(e, t, n, i) {
            c("error reported: " + e + ", type=" + t + ", desc=" + n);
            var n = {},
                o = "",
                o = (1 === t ? (n.macro = u, n.value = e) : n.value = "error=" + e, "error");
            this.requestParamTracking(o, n, i)
        },
        requestErrorTrackingUrls: function(e, t, n, i) {
            var o = {};
            1 === t ? (o.macro = u, o.value = e) : o.value = "error=" + e;
            var t = "error",
                r = o,
                e = i,
                a = [];
            if (v.hasOwnProperty(e = e || h) && v[e].hasOwnProperty(t)) {
                e = v[e][t];
                if (e) {
                    var s = e.urls;
                    if (s)
                        for (var l = 0; l < s.length; l++) {
                            var d, c = s[l];
                            f.isNotEmpty(c) && (-1 < (c = r ? T(c, r) : c).indexOf(p) && (d = "" + Math.floor(1e7 * Math.random()), c = T(c, {
                                macro: p,
                                value: d
                            })), c = C(c), a.push(c))
                        }
                }
            }
            return a
        },
        requestProgressTracking: function(e, t) {
            var n = j(e);
            c("Tracking requested for progress event, adId=" + (t || h) + ", offset=" + e), this.requestTracking(n, t)
        },
        removeEvents: function(e) {
            x(e)
        },
        removeEventsForKey: function(e, t) {
            var n = e,
                i = t;
            if (i = i || h, v && v.hasOwnProperty(i)) {
                for (var o in v[i]) - 1 < o.indexOf(n) && (delete v[i][o], a("Removing event: " + o + " for key=" + n + " and adId=" + i));
                0 === v[i].length && delete v[i]
            }
        },
        removeAllEvents: function() {
            v = {}
        }
    }
}]);