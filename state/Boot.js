var Runner = {};

Runner.Boot = function (game) {};

Runner.Boot.prototype = {
    preload:function(){
        // load images
        
    },
    create: function () {
        this.input.maxPointer = 1;
        this.stage.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.disableVisibilityChange = false;
        this.scale.minWidth = 480;
        this.scale.minHeight = 270;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.stage.forceLandscape = true;
        this.scale.setScreenSize(true)
        this.input.addPointer();
        this.stage.backgroundColer= '#b2c0d3';
        
        this.state.start('Preloader');
    }
}