const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events = Matter.Events;
 
var particles = [];
var plinkos = [];
var divisions = [];

var engine, world;
var ground1;
var part;
var turn = 0;
var divisionHeight = 300;
var score = 0;
var gameState = "play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+ score,20,30);

  textSize(35);
  fill(255, 255, 255);
  text("500", 10, 550);
  text("500", 90, 550);
  text("500", 170, 550);
  text("500", 250, 550);
  text("100", 330, 550);
  text("100", 410, 550);
  text("100", 490, 550);
  text("200", 570, 550);
  text("200", 650, 550);
  text("200", 730, 550);

  Engine.update(engine);
  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    //return
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount % 60 === 0){
   //}

  //for (var j = 0; j < particles.length; j++) {
   
    // particles[j].display();
   //}
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if (part != null)
   {
     //part.display();
    part.display();
         
         if (part.body.position.y>760)
         {
               if (part.body.position.x < 300) 
               {
                   score=score+500;      
                   part=null;
                   if ( turn>= 5) gameState ="end";                          
               }
 
 
               else if (part.body.position.x < 600 && part.body.position.x > 301 ) 
               {
                     score = score + 100;
                     part=null;
                     if ( turn>= 5) gameState ="end";
 
               }
               else if (part.body.position.x < 900 && part.body.position.x > 601 )
               {
                     score = score + 200;
                     part=null;
                     if ( turn>= 5)  gameState ="end";
 
               }      
               
         }
   
       }
   
    

}

function keyPressed()
{
 if(keyCode === 32) {
   if (gameState !== "end") 
   {
     turn++;
     part = new Particle(mouseX, 10, 10, 10);
   }
  }
}