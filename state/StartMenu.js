Runner.StartMenu =function(game) {
    this.background = null;
    this.startBtn = null;
    this.highscore = null;
    this.leaderBoard = null;
    this.characterImage = null;
    this.logo = null;
}

Runner.StartMenu.prototype = {
    create: function(){
        this.background = this.add.image(this.world.centerX, this.world.centerY, 'background');
        this.background.anchor.setTo(0.5,0.5)
        this.startBtn = this.add.button(this.world.width-50, this.world.height-50, 'startbtn', this.startGame, this, 1, 0, 2);
        this.startBtn.anchor.setTo(1,1);
        this.characterImage = this.add.image(90, this.world.height-100, 'characterimg');
        this.characterImage.anchor.setTo(0.5,0.5)
        this.logo = this.add.image(this.world.centerX, this.world.centerY, 'logo')
        this.logo.anchor.setTo(0.5, 0.5);

    },
//    this.startGame: function (){
//        this.state.start('Game');
//    },
}