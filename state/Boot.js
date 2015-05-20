var Runner = {};

Runner.Boot = function (game) {};

Runner.Boot.prototype = {
    preload:function(){
        // load images
        
    },
    create: function () {
        this.input.maxPointers = 1;
        this.stage.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.disableVisibilityChange = false;
        this.scale.minWidth = 736;
        this.scale.minHeight = 414;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.stage.forceLandscape = true;
        this.scale.setScreenSize(true)
        
        this.input.addPointer();
        this.stage.backgroundColer= '#68d098';
        
        this.state.start('Preloader');
    }
}