class Paper{
    constructor(x,y,width,height){
       var options = {
           isStatic : false,
           restitution:0.3,
           friction:0.5,
           density : 1.2
       }
       this.body = bodies.circle(x,y,width,radius,options);
       this.width = width;
       this.height = height;
       World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rect(pos.x,pos.y,this.width,this.height);
    }
};