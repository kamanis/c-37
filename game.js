class Game{
    constructor(){

    }
    getState(){
  var gameStateref=database.ref("gameState");
  gameStateref.on("value",function(data){
      gameState=data.val();
  })
    }
    update(state){
     database.ref("/").update({
      gameState:state
     })
    }
    async start(){
        if(gameState===0){
            player=new Player();
      var playerCountref=await database.ref("playerCount").once("value")
            if(playerCountref.exists()){
                playerCount=playerCountref.val();
                
            }
            player.getCount();
            form=new Form();
            form.display();  
               
        }
        car1=createSprite(100,200,20,20);
        car2=createSprite(300,200,20,20);
        car3=createSprite(500,200,20,20);
        car4=createSprite(700,200,20,20);
        cars=[car1,car2,car3,car4];
    }
    play(){
        form.hide();
        textSize(35);
        text("Game Start",120,100);
        Player.getplayerinfo();
        if(allPlayer!==undefined){
            for(var plr in allPlayer){
                index=index+1;
                x=x+200;
                y=displayHeight-allPlayer[plr].distance;
            cars[index-1].x=x;
            cars[index-1].y=y;
            
                if(index===player.index){
                   cars[index-1].shapeColor="red";
                camera.position.x=displayWidth/2
                camera.position.y=cars[index-1].y
                }
                
             
            }
        }
       
        if(keyIsDown(UP_ARROW)){
            player.distance+=100; 
            player.update();
           
        }
        drawSprites();
    }
}