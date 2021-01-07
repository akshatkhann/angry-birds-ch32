const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;
var box1, pig1,score=0;
var backgroundImg,platform;
var gameState="onSling"
function preload() {
 geTtime()
   
 
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(200, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
   

    bird = new Bird(200,50);
    slingshot=new Slingshot(bird.body,{x:200,y:50})


}

function draw(){
if(backgroundImg){
    background(backgroundImg);

}

textSize(35)
  fill("white")
text("score "+score,width-300,50 )

    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
   pig1.score()
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score()
    log3.display();
log5.display()
    box5.display();
    log4.display();
    

    bird.display();
    slingshot.display();
    platform.display();


}
  

function mouseDragged(){
if(gameState==="onSling"){
Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})

}

}
function mouseReleased(){

slingshot.fly()
gameState="launched"






}

 function keyPressed(){
if(keyCode===32){

slingshot.attach(bird.body)



}





 }
async function geTtime(){
var response=await fetch("http://worldclockapi.com/api/json/est/now")
var responsejson=await response.json()
console.log(responsejson)
var datetime=responsejson.currentDateTime
console.log(datetime)
var hour=datetime.slice(11,13)
console.log(hour)
hour=20


if(hour>=06 && hour<=19){
    
backgroundImg=loadImage("sprites/bg.png")


}else{
backgroundImg=loadImage("sprites/bg2.jpg")

}


}






