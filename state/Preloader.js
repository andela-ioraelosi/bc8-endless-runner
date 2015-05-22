Runner.Preloader = function (game) {
    this.ready  = false 
}

Runner.Preloader.prototype = {
    
    preload: function (){
        // add images loaded in boot preload 
        this.load.image('characterimg','assets/splash/gb_0009_Layer-5.png');
        this.load.image('map', 'assets/splash/gb_0007_map.png');
        this.load.image('logo', 'assets/splash/gb_0008_logo.png');
        this.load.image('obstacle', 'assets/splash/gb_0010_spikes.png');
        this.load.image('tree', 'assets/splash/gb_0011_trees-copy.png')
        // load add sprites 
//        this.load.spritesheet('startbtn', 'assets/splash/gb_0003_button-start.png',138,38);
        this.load.spritesheet('startbtn', 'assets/splash/button-start.png',398,144);

    },
    
    create: function(){

    },

    update: function(){
        this.ready = true;
        this.state.start('StartMenu');
    }
}