class Drop {
  constructor(x, y,radius) {
    var options = {
        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
     this.radius=radius
    this.body = Bodies.circle(x, y,radius,options);
  
    World.add(world, this.body);
  }

  display(){
    if(this.body.position.y>700){
      Matter.Body.setPosition(this.body,{x:random(0,700),y:random(0,900)})
    }    
    fill("blue")
  ellipseMode(CENTER)
  ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
  }

};
