var player1,player2, playerImg, player2Img
var bullets, bulletsImg
var skyImg
var bg
var nukeImg
var score = 0
var nukes
var titleImg
var gameState
var form, game, player
var playerCount

function preload() {
  playerImg = loadImage('./assets/player.png')
  skyImg = loadImage('./assets/sky.jpg')
  bulletsImg = loadImage('./assets/bullets.png')
  nukeImg = loadImage('./assets/nuke.png')
  player2Img =loadImage('./assets/player2.png')
  titleImg = loadImage('./assets/title.png')
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  

  //bg = createSprite(width / 2, height / 2, windowWidth, windowHeight)
  //bg.addImage(skyImg)
  //bg.scale = 3
  
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
  


}

function draw() {
  background(skyImg);

  

  imageMode(CENTER)
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
  
}



