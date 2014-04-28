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

    var playBGM = function(id,params) {
        if(params)
            params.loop = -1;
        else
            params = {loop: -1};
        console.log(params);
        if(!currentBGM) {
            currentBGM = createjs.Sound.createInstance("bgm_"+id);
            currentBGM.play(params);
        } else {
            stopBGM();
            currentBGM = createjs.Sound.createInstance("bgm_"+id);
            currentBGM.play(params);
        }
    }

    var stopBGM = function() {
        currentBGM.stop();
        currentBGM = null;
    }

    var playSFX = function(id,params) {
        if(!params)
            params = {};
        createjs.Sound.createInstance("sfx_"+id).play(params);
    }

    return {
        loadAssets : loadAssets,
        playBGM : playBGM,
        playSFX : playSFX,
        stopBGM : stopBGM
    };
})();
