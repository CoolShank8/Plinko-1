class Division{
    constructor(x, y, width, height, angle) {
        var options = {
            restitution:0.8,
            friction:1.0,
            density:0.1,
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
  
        World.add(world, this.body);
        Sprites.push(this)
      }
      Update(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y)
        rotate(angle);
        rectMode(CENTER);
   
        fill("red")

        rect(0, 0, this.width, this.height);

  
    
        pop();
      }
  }