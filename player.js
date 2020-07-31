class Player{
    constructor(){
        this.name=null;
        this.index=null;
        this.distance=0;
    }
    getCount(){
        var playercountref=database.ref("playerCount");
        playercountref.on("value",function(data){
            playerCount=data.val();
           //this.index=playerCount;
            
         })
    }
    updateCount(count){
       database.ref("/").update({
          playerCount:count
       } )
    } 
    update(){
     var playerindex="players/player"+this.index;
     database.ref(playerindex).set({
         name:this.name,
         distance:this.distance
     })
    }
    static getplayerinfo(){
        var playerinfo=database.ref("players");
        playerinfo.on("value",(data)=>{
            allPlayer=data.val();
        })
    }
}