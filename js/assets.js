CD.Assets = (function() {
    var currentBGM = null;

    var loadAssets = function(assets,callback) {
        var queue = new createjs.LoadQueue();
        createjs.Sound.alternateExtensions = ["mp3"];
        queue.installPlugin(createjs.Sound);

        if(callback)
            queue.addEventListener("complete", callback);

        for(var i=0; i<assets.length; i++)
            queue.loadFile({id: assets[i].type + "_" + assets[i].id, src: "media/"+assets[i].type+"/"+assets[i].fileName});
    }

    var playBGM = function(id) {
        if(!currentBGM) {
            currentBGM = createjs.Sound.createInstance("bgm_"+id);
            currentBGM.play({loop:-1});
        } else {
            stopBGM();
            currentBGM = createjs.Sound.createInstance("bgm_"+id);
            currentBGM.play({loop:-1});
        }
    }

    var stopBGM = function() {
        currentBGM.stop();
        currentBGM = null;
    }

    var playSFX = function(id) {
        createjs.Sound.createInstance("sfx_"+id).play();
    }

    return {
        loadAssets : loadAssets,
        playBGM : playBGM,
        playSFX : playSFX,
        stopBGM : stopBGM
    };
})();
