var database,canvas,playerCount,form,player,game,gameState,index,x,y;
var allPlayer=[];
var cars=[];
var car1,car2,car3,car4;
var distance;
function setup(){
    canvas=createCanvas(displayWidth,displayHeight);
    database=firebase.database();
    gameState=0;
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
   if(playerCount===4){
       game.update(1);

   }
   if(gameState===1){
       clear();
       game.play();
   }
}