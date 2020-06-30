class Plinko{
    constructor(x, y, Raduis, angle) {
        var options = {
            restitution:0.8,
            friction:1.0,
            density:0.1,
            isStatic: true
        }
        this.Raduis = Raduis;

        this.body = Matter.Bodies.circle(x, y, this.Raduis/2, options);
  
        this.r = random(255)
        this.g = random(255)
        this.b = random(255)
  
  
        World.add(world, this.body);
        Sprites.push(this)
      }
      Update(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y)
        rotate(angle);
        rectMode(CENTER);
        fill(this.r, this.g,this.b)
        
        ellipse(0, 0, this.Raduis);
        pop();
      }
  }