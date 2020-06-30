class Ground{
    constructor(HEIGHT, angle) {
        var options = {
            restitution:0.8,
            friction:1.0,
            density:0.1,
            isStatic: true
        }

        this.x = width/2

        this.width = width

        this.height = HEIGHT

        this.y = height - (this.height/2) 

        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        this.width = width;
  
        World.add(world, this.body);
        Sprites.push(this)
      }
      Update(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y)
        rotate(angle);
        rectMode(CENTER);
   
        fill("black")

        rect(0, 0, this.width, this.height);

    
        pop();
      }
  }