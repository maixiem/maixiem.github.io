/*Resources for learning phaser 2:
http://phaser.io/tutorials/making-your-first-phaser-2-game
http://phaser.io/examples
*/
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update },true,false);

function preload() {
    game.load.image('bg', 'bg.png');
}

function create() {
    var s = game.add.sprite(80, 0, 'bg');
    s.scale.setTo(4,4);
}

function update() {
}
