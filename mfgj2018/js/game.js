var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
   game.load.image('bg', 'assets/bg.png');
   game.load.image('couple', 'assets/the-couple.png');
   game.load.image('run', 'assets/run-cycle.gif');
}

var couple;

function create() {
   var s = game.add.tileSprite(0, 0, 800, 600, 'bg');
   s.scale.setTo(4,4);
   couple = game.add.sprite(400-32, 600-64, 'couple');
   couple.scale.setTo(1,1);
}

function update() {
	if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
    	if(couple.x >= 0+2) {
    		couple.x -= 4;
    	}
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
    	if(couple.x <= (800-62)) {
    		couple.x += 4;
    	}
    }
}
