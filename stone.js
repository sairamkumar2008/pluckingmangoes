class Stone{
    constructor(x,y,radius){
    var options={
      isStatic:false,
      restitution:0,
      friction:1,
      density:1.2
    }
    this.radius=radius;
    this.body=Bodies.circle(x,y,radius)
  } 
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      ellipse(pos.x, pos.y, this.radius,this.radius);
    
  };
}