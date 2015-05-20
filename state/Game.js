Runner.Game = function (game){
    this.mapGroup = null;
    this.map = null;
}

Runner.Game.prototype = {
    create: function (){
        this.mapGroup = this.add.group()
        this.map = this.add.tileSprite(this.world.width, this.world.height,736, 111, 'map');
        this.mapGroup.add(this.map)

    },
    update: function () {
        
    }
    
};