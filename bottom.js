class End{ 
        constructor(x, y, w,h) {
            var options = {
                'restitution':0.5,
                'friction':0.5,
                'density':1.0,
                isStatic:true
            }
            this.body= Bodies.rectangle(x, y, w,h, options);
            this.h=h;
            this.w=w;
            World.add(world, this.body);
            
          }
          display(){
            var pos = this.body.position;
            push();
            translate(this.body.position.x, this.body.position.y);
            //image(this.image,0,0,this.w,this.h);
            pop();
          }
}