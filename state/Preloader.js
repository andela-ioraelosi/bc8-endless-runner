Runner.Preloader = function (game) {
    this.preloadBar = null;
    this.title.text = null;
    this.ready  = false 
    
}

Runner.Preloader.prototype = {
    
    preload: function (){
        // add images loaded in boot preload as sprite
        // load add sprites 
    },
    
    create: function(){
        // disable crop of image since it will be 100%
        this.preloadBar.setCropEnabled = false;
    },

    update: function(){
        this.ready = true;
    }
}