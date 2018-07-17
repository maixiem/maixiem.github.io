var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
   game.load.image('bg', 'assets/bg.png');
   game.load.image('couple', 'assets/the-couple.png');
   game.load.image('run', 'assets/run-cycle.gif');
}

function create() {
   var s = game.add.tileSprite(0, 0, 800, 600, 'bg');
   //s.scale.setTo(4,4);
   s.scale.y = 4;
   s.scale.x = 4;
   var couple = game.add.sprite(400-32, 600-64, 'couple');
   couple.scale.y = 1;
   couple.scale.x = 1;
}

function update() {
}
