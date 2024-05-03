let blockSize = 25;
let rows = 20;
let columns = 20;
let board;
let context;

// sounds
const eat = document.getElementById('eatSound')
const gameOverSound = document.getElementById('gameOverSound')
const moveSound = document.getElementById('moveSound')

// score
let scoreBoard = document.getElementById('score')
let points;
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// movement
const directionQueue = [];

let movementInProgress = false;

// Snake 
let speed = 10;
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;
let velocityX = 0;
let velocityY = 0;

const snakeBody = [];

// food
let foodX;
let foodY;

let gameOver = false;


window.onload = function() {
  board = document.getElementById('board');
  board.height = rows * blockSize;
  board.width = columns * blockSize;
  context = board.getContext('2d');

  
  placeFood();
  document.addEventListener('keydown', changeDirection);
  setInterval(update, 1000/speed);
}

function changeDirection(e){
  moveSound.play();
  if((e.key === "u" || e.code === "ArrowUp") && velocityY !== 1){
    directionQueue.push({ x: 0, y: -1 });} 
  else if((e.key === "j" || e.code === "ArrowDown") && velocityY !== -1){
    directionQueue.push({ x: 0, y: 1 });} 
  else if((e.key === "h" || e.code === "ArrowLeft") && velocityX !== 1){
    directionQueue.push({ x: -1, y: 0 });} 
  else if((e.key === "k" || e.code === "ArrowRight") && velocityX !== -1){
    directionQueue.push({ x: 1, y: 0 });
  }
  
  // If no movement is in progress, start processing the queue
  if (!movementInProgress) {
    processDirectionQueue();
  }
}

function processDirectionQueue() {
  if (directionQueue.length > 0) {
    const nextDirection = directionQueue.shift();
    velocityX = nextDirection.x;
    velocityY = nextDirection.y;

    movementInProgress = true;
  }
}

function placeFood(){
  foodX = blockSize * getRandomInt(columns);
  foodY = blockSize * getRandomInt(rows);
}

function update() {
  if(gameOver){
    return 
  }
  context.fillStyle = "#000";
  context.fillRect(0, 0, board.width, board.height);
  // render food
  context.fillStyle = "rgb(241, 10, 10)";
  context.fillRect(foodX, foodY, blockSize, blockSize);

  if (snakeX === foodX && snakeY === foodY){
    placeFood();
    snakeBody.push([foodX, foodY])
    scoreBoard.innerHTML = snakeBody.length;
    eat.play()
  };

   for(let i = snakeBody.length - 1; i > 0; i--){
     snakeBody[i] = snakeBody[i-1];
   };
 
   if(snakeBody.length){
     snakeBody[0] = [snakeX, snakeY];
   }

   // render snake
  context.fillStyle = "rgb(60, 255, 0)";
  snakeX += velocityX * blockSize;
  snakeY += velocityY * blockSize;
  context.fillRect(snakeX, snakeY, blockSize, blockSize);

  movementInProgress = false;
  processDirectionQueue();
 
   // head detached
   for(let i = 0; i < snakeBody.length; i++){
     context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
   };

  if(snakeX < 0 || snakeX > columns * blockSize || snakeY < 0 || snakeY > rows * blockSize){
    gameOver = true;
    gameOverSound.play();
  }

   for (let i = 0; i < snakeBody.length; i++) {
    if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
      gameOver = true;
      gameOverSound.play();
    }
  }

}