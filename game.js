// define variables
var game;
var player;
var platforms;
var badges;
var items;
var cursors;
var jumpButton;
var text;
var livesText;
var winningMessage;
var loosingMessage;
var won = false;
var lost = false;
var currentScore = 0;
var winningScore = 100;
var currentLives = 3;

// add collectable items to the game
function addItems() {
  items = game.add.physicsGroup();
  createItem(595, 500, 'coin');
  createItem(590, 315, 'coin');
  createItem(550, 315, 'coin');
  createItem(200, 500, 'coin');
  createItem(375, 410, 'coin');
  createItem(100, 500, 'coin');
  createItem(90, 380, 'coin');
  createItem(190, 270, 'coin');
  createItem(330, 165, 'coin');
  createItem(555, 118, 'poison');
  createItem(645, 240, 'coin');
  createItem(120, 130, 'star');
  createItem(42, 360, 'poison');
  createItem(330, 520, 'poison');
}

// add platforms to the game
function addPlatforms() {
  platforms = game.add.physicsGroup();
  platforms.create(450, 360, 'platform2' );
  platforms.create(450, 550, 'platform');
  platforms.create(100, 550, 'platform');
  platforms.create(310, 460, 'platform');
  platforms.create(30, 430, 'platform2');
  platforms.create(150, 320, 'platform');
  platforms.create(260, 220, 'platform');
  platforms.create(500, 160, 'platform2');
  platforms.create(635, 290, 'platform');
  platforms.create(10, 170, 'platform2');
  
  platforms.setAll('body.immovable', true);
}

// create a single animated item and add to screen
function createItem(left, top, image) {
  var item = items.create(left, top, image);
  item.animations.add('spin');
  item.animations.play('spin', 10, true);
}

// create the winning badge and add to screen
function createBadge() {
  badges = game.add.physicsGroup();
  var badge = badges.create(750, 400, 'badge');
  badge.animations.add('spin');
  badge.animations.play('spin', 10, true);
}

// when the player collects an item on the screen
function itemHandler(player, item) {
  item.kill();
  if (item.key === 'coin') {
    currentScore = currentScore + 10;
  } else if (item.key === 'poison') {
    currentLives = currentLives - 1;
  } else {
    currentScore = currentScore + 20;
  }

  if (currentScore === winningScore) {
      createBadge();
  }

  if (currentLives === 0) {
    lost = true;
  }
}

// when the player collects the badge at the end of the game
function badgeHandler(player, badge) {
  badge.kill();
  won = true;
}

// setup game when the web page loads
window.onload = function () {
  game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });
  
  // before the game begins
  function preload() {
    game.stage.backgroundColor = '#5db1ad';
    
    //Load images
    game.load.image('platform', 'platform_1.png');
    game.load.image('platform2', 'platform_2.png');
    
    //Load spritesheets
    game.load.spritesheet('player', 'mikethefrog.png', 32, 32);
    game.load.spritesheet('coin', 'coin.png', 36, 44);
    game.load.spritesheet('badge', 'badge.png', 42, 54);
    game.load.spritesheet('poison', 'poison.png', 32,32);
    game.load.spritesheet('star', 'star.png', 32,32);
  }

  // initial game set up
  function create() {
    player = game.add.sprite(50, 600, 'player');
    player.animations.add('walk');
    player.anchor.setTo(0.5, 1);
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.body.gravity.y = 500;

    addItems();
    addPlatforms();

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    text = game.add.text(16, 16, "SCORE: " + currentScore, { font: "bold 24px Arial", fill: "white" });
    livesText = game.add.text(670, 16, "LIVES: " + currentLives, { font: "bold 24px Arial", fill: "white" });
    winningMessage = game.add.text(game.world.centerX, 275, "", { font: "bold 48px Arial", fill: "white" });
    winningMessage.anchor.setTo(0.5, 1);
    loosingMessage = game.add.text(game.world.centerX, 275, "", { font: "bold 48px Arial", fill: "red" });
    loosingMessage.anchor.setTo(0.5, 1);
  }

  // while the game is running
  function update() {
    text.text = "SCORE: " + currentScore;
    livesText.text = "LIVES: " + currentLives;
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.overlap(player, items, itemHandler);
    game.physics.arcade.overlap(player, badges, badgeHandler);
    player.body.velocity.x = 0;

    // is the left cursor key presssed?
    if (cursors.left.isDown) {
      player.animations.play('walk', 10, true);
      player.body.velocity.x = -300;
      player.scale.x = - 1;
    }
    // is the right cursor key pressed?
    else if (cursors.right.isDown) {
      player.animations.play('walk', 10, true);
      player.body.velocity.x = 300;
      player.scale.x = 1;
    }
    // player doesn't move
    else {
      player.animations.stop();
    }
    
    if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down)) {
      player.body.velocity.y = -400;
    }
    // when the player wins the game
    if (won) {
      winningMessage.text = "YOU WIN!!!";
    }

    // when the player looses the game
    if (lost) {
      loosingMessage.text = "YOU LOST!!!";
    }
  }

  function render() {

  }

};
