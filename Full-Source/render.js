renderer: {
    url: 'bundle.js',   // URL of the renderer
    render: function (bid) {
        bid.renderer.push(function() {
            try {
                // Object to configure the behaviour of outstream renderer from HTML page.
                var obj = {
                    width: 640,
                    height: 480,
                    vastTimeout: 5000,
                    maxAllowedVastTagRedirects: 3,
                    allowVpaid: false,
                    autoPlay: true,
                    preload: true,
                    mute: false,
                    adText: 'This is sample adtext.'
                }
                // Call to Global object of renderer.
                // Takes bid, element ID and configuration object as parameters
                window.outstreamPlayer.player(bid, 'video1', obj);
            } catch (e) {
                console.error(e);
                console.error("Error in ad rendering!");
            }
        })
    }
}       












