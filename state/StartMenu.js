Runner.StartMenu =function(game) {
    this.background = null;
    this.startBtn = null;
    this.highscore = null;
    this.leaderBoard = null;
    this.characterImage = null;
    this.map = null
    this.logo = null;
    this.tree = null;
}

Runner.StartMenu.prototype = {
    preload: function(){
        this.load.image('score', 'assets/splash/gb_0005_field-2.png');
        this.load.atlasJSONHash('character', 'assets/character/run.png', 'assets/character/run.json');
        this.load.image('score', 'assets/splash/gb_0005_field-2.png');
        this.load.spritesheet('character2','assets/character/jump.png', 53, 81, 1);
    },
    create: function(){
        this.background = this.add.image(this.world.centerX, this.world.centerY, 'background');
        this.background.anchor.setTo(0.5, 0.5)
        this.tree = this.add.image(this.world.width-200, this.world.height -66, 'tree')
        this.tree.anchor.setTo(1,1)
        // map
        this.map = this.add.image(this.world.width, this.world.height, 'map');
        this.map.anchor.setTo(1,1);

        // startbutton
        this.startBtn = this.add.button(this.world.width-50, this.world.height-50, 'startbtn', this.startGame, this, 1, 0, 2);
        this.startBtn.anchor.setTo(1,1);
        this.startBtn.scale.setTo(0.5, 0.5)
        this.characterImage = this.add.image(90, this.world.height-110, 'characterimg');
        this.characterImage.anchor.setTo(0.5,0.5)
        this.logo = this.add.image(this.world.centerX, this.world.centerY-70, 'logo')
        this.logo.anchor.setTo(0.5, 0.5);

    },
    startGame: function (pointer){
        this.state.start("Game");
    },
}