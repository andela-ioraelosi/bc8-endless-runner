Runner.Game = function (game){
    this.mapGroup = null;
    this.map = null;
    Runner.distance = 0;
    this.character = null;
    this.obstacle = null;
    this.scoreboard = null
    Runner.score = 0;
    
}

Runner.Game.prototype = {
    create: function (){
        this.spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR ]);

        // physics system
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.arcade.gravity.y = 10;
        this.add.image(this.world.centerX - (this.world.width/2) , this.world.centerY - (this.world.height/2), 'background')

        // map 
        this.map = this.add.tileSprite(this.world.centerX, this.world.height, 736, 111, 'map');
        this.map.anchor.setTo(0.5,0.25)
        this.map.autoScroll(-200,0)
        this.physics.enable(this.map, Phaser.Physics.ARCADE)
        this.map.body.allowGravity = false;


        // scoreboard
        this.scoreboard = this.add.image(this.world.width - 182, 20, 'score');
        this.scoreboard.anchor.setTo(0, 0)
        this.scoreboard.scale.setTo(0.5, 0.5);
        this.scoreboard.text = this.add.text(this.scoreboard.position.x+ 20, this.scoreboard.position.y + 20, 'score: 0', { font: "15px Arial", fill: "#ffffff", align: "left" });
        
        // character
        this.character = this.add.sprite(10, this.world.height, 'character','gb_0000s_0000_Layer-11.png');
        this.character.animations.add('run',[0,1,2,3,4,5], 10, true);
        this.character.animations.play('run', 10, true)
        this.physics.enable(this.character, Phaser.Physics.ARCADE);
        this.character.allowGravity = true;
        this.character.body.collideWorldBounds = true;
        this.character.body.gravity.y = 10;

        // obstacle
        this.obstacle = this.add.sprite(this.world.width +30, this.world.height+150, 'obstacle')
        this.physics.enable(this.obstacle, Phaser.Physics.ARCADE)
        this.obstacle.body.allowGravity = false
        this.obstacle.body.collideWorldBounds = true;

    },
    update: function () {
        Runner.score += 0.5
        this.scoreboard.text.text = 'score: '+ Runner.score
        this.obstacle.body.velocity.x = -100;
        this.physics.arcade.collide(this.character, this.obstacle, this.handleCollison, null, this);
        this.map.body.checkCollision.up = true;

        if (this.spaceKey.isDown){
            this.character.body.jump = true;
            this.jump();
        }
        
        
        if(this.obstacle.x == this.world.x){
            this.obstacle.body.x -=1;
            if(this.obstacle.body.x < this.world.x){
                this.obstacle.body.x = this.world.width;
//                console.log(this.obstacle.body.velocity.x)
//                this.obstacle.body.velocity.x = -200: 
            }
        }
    },
    
    jump: function (){
        if (this.character.body.onFloor())
        {   
            this.character.body.gravity.y = 190;
            this.character.body.velocity.y = -160;
        }
    },
    
    handleCollison: function(){
        this.state.shutdown()
           
    }
    
    
    
};