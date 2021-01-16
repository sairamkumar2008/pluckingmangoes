class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.image=loadImage("images/tree.png")
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      image(this.image,500,80, 200, 500);
    }
  };