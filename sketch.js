const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


var Sprites= []


function setup() {
  createCanvas(1520,780);
  engine = Engine.create();
  world = engine.world;

  MakeRow(width/2, 15, 100, 80)
  MakeRow(width/2,13,200, 100)
  MakeRow(width/2, 15, 300, 80)
  MakeRow(width/2,13,400, 100)

  GenerateDivisions(75);

  new Particle(width/2,100, 10)

  new Ground(50)
}

function draw() {
  Engine.update(engine)
  background(255,255,255);  
  UpdateAllSprites()

  SpawnParticles(200)

  drawSprites();
}










function UpdateAllSprites()
{
for (var i = 0; i < Sprites.length; i++)
  {
	  Sprites[i].Update()
  }
}

function MakeRow(middlex ,BlocksInRow, FixedY,Gap, BlockRaduis)
{
  if (BlockRaduis === undefined)
    BlockRaduis = 10


  var BlocksRemaining = BlocksInRow

  var StartingX = middlex - ((BlockRaduis * 2 * BlocksInRow) + (Gap * (BlocksInRow - 1)))
 
  new Plinko(middlex, FixedY, BlockRaduis)

  BlocksRemaining = BlocksRemaining - 1
  
  console.log(BlocksRemaining/2)

  for (var i = 1; i <= (BlocksRemaining/2); i ++)
  {
    console.log("new")
    new Plinko(middlex - (Gap * i), FixedY, BlockRaduis)

  }

  for (var i  = 1; i <= (BlocksRemaining/2); i++)
  {
    new Plinko(middlex + (Gap * i), FixedY, BlockRaduis)
  }


}


function GenerateDivisions(Gap)
{
  for (var i = 0; i <= width; i = i + Gap)
  {
    new Division(i, height - 300/2, 10, 300)
  }
}

function SpawnParticles(XOffSet)
{
  if (frameCount%30 === 0)
  {
    new Particle(random(width/2-XOffSet, width/2 + XOffSet), 10, 10)
  }
}