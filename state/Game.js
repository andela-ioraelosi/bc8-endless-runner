Runner.Game = function (game){
    this.mapGroup = null;
    this.map = null;
    Runner.distance = 0;
    this.character = null;
    this.obstacle = null;
    Runner.score = 0;
    
}

Runner.Game.prototype = {
    create: function (){
        this.spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR ]);
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.arcade.gravity.y = 10;
        this.add.image(this.world.centerX - (this.world.width/2) , this.world.centerY - (this.world.height/2), 'background')
        this.mapGroup = this.add.group()
        this.map = this.add.tileSprite(this.world.centerX, this.world.height, 736, 111, 'map');
        this.map.anchor.setTo(0.5,0.25)
        this.obstacle = this.add.sprite(this.world.width +30, this.world.height+150, 'obstacle')
        this.map.autoScroll(-200,0)
        this.physics.enable(this.map, Phaser.Physics.ARCADE)

        this.map.body.allowGravity = false
//        this.map.body.setCollision(80);

//        this.map.enableBody = true;
        this.map.body.checkCollision.up = true;
//	      this.map.body.checkCollision.up = true;

//        this.mapGroup.add(this.obstacle)
//        this.mapGroup.add(this.map);
//        this.mapGroup.physicsBodyType = Phaser.Physics.ARCADE;
//        this.mapGroup.enableBody = true;
//        this.mapGroup.anchor.setTo(0,1);
//        this.mapGroup.body.checkCollision.up = true;


        this.character = this.add.sprite(10, this.world.height, 'character','gb_0000s_0000_Layer-11.png');
        this.character.animations.add('run',[0,1,2,3,4,5], 10, true);
//        this.character.animations.add('jump',[2,3,4,5,6], false);
        this.character.animations.play('run')
        this.physics.enable(this.character, Phaser.Physics.ARCADE);
        this.character.allowGravity = true;
        this.character.body.collideWorldBounds = true;
        this.character.body.gravity.y = 10;

//        this.character.body.velocity.x = 50;

//        this.game.physics.arcade.collide(this.character, this.map, this.handleCollison, null, this);
//         console.log(this.obstacle.velocity)

         this.physics.enable(this.obstacle, Phaser.Physics.ARCADE)
        this.obstacle.body.allowGravity = false
        this.obstacle.body.collideWorldBounds = true;
//        this.obstacle.body.offset.y = -30;




    },
    update: function () {
        Runner.score += 1
        console.log(Runner.score);
        this.obstacle.body.velocity.x = -100;
        
        this.physics.arcade.collide(this.character, this.obstacle, this.handleCollison, null, this);
        this.map.body.checkCollision.up = true;

        this.physics.arcade.collide(this.character, this.obstacle);

        if (this.spaceKey.isDown){
            this.jump();
        }
    },
    
    jump: function (){
        if (this.character.body.onFloor())
        {           
            this.character.body.gravity.y = 10*3.5;
            this.character.body.velocity.y = -this.obstacle.height *1.5;
            this.character.body.velocity.x *= -2
        }
        this.character.animations.play('run')
    },
    
    handleCollison: function(){
        // game over
//        this.state.start("GameOver")
    }
    
    
    
};