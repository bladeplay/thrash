class Paper{
  constructor(x, y, r) {
      var options = {
          'restitution':0.5,
          'friction':0.5,
          'density':1.0,
          isStatic:false
      }
     // paperimg = loadImage('paper.png');
      this.body= Bodies.circle(x, y, r, options);
      this.r=70;
      World.add(world, this.body);
      this.image = loadImage("paper.png");
    }
    display(){
      var pos = this.body.position;
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image,0,0,this.r,this.r);
      pop();
    }
}