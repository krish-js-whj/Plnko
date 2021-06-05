var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  ground1 = new Ground(400, 793.5, 850, 15);
  ground2 = new Ground(2, 400, 15, 810);
  ground3 = new Ground(778, 400, 15, 810);
  //create division objects
  for (var k = 0; k <=800; k = k + 133) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  //create 1st row of plinko objects
  for (var j = 50; j <=width-5; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }
  //create 2nd row of plinko objects
  for (var l = 25; l <=width-10; l=l+50) 
  {
    plinkos.push(new Plinko(l,175));
  }
  //create 3rd row of plinko objects
  for (var m = 50; m <=width-20; m=m+50) 
  {
    plinkos.push(new Plinko(m,275));
  }
  //create 4th row of plinko objects
  for (var n = 25; n <=width-20; n=n+50) 
  {
    plinkos.push(new Plinko(n,375));
  }
  ground1.display();
  ground2.display();
  ground3.display();
  //create particle objects
  
  
      
}
 
function draw() {
  background("black");
  textSize(20)
  var framecount=(frameCount/100).toString()
    var firstDigit=framecount.slice(1,framecount.length)
if (framecount.slice(1,2)==1){
    firstDigit=9
  }if (framecount.slice(1,2)==2){
    firstDigit=8
  }if (framecount.slice(1,2)==3){
    firstDigit=7
  }if (framecount.slice(1,2)==4){
    firstDigit=6
  }if (framecount.slice(1,2)==5){
    firstDigit=5
  }if (framecount.slice(1,2)==6){
    firstDigit=4
  }if (framecount.slice(1,2)==7){
    firstDigit=3
  }if (framecount.slice(1,2)==8){
    firstDigit=2
  }if (framecount.slice(1,2)==9){
    firstDigit=1
  }if (framecount.slice(1,2)==0){
    firstDigit=0
  }
   //text("Next Ball: "+firstDigit,675,40)
  //var remainingDigits=Math.round(int((framecount.slice(2,framecount.length)))*10)
 // var tim=(Math.round((frameCount/90)))+(100-(Math.round((frameCount/90))))
   // text(frameCount,500,200)
  //console.log(remainingDigits);
 // console.log(score);
  //text(".: "+remainingDigits,425,40)
  //text("Time LEft: "+(Math.round((frameCount%90))),25,40)
  text("Score: "+score,25,40)
  Engine.update(engine);
  ground.display();

  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  
    if (frameCount<=(15*7*90*3.5)){
         text("FrameCount "+framecount,575,40)
     if(frameCount%90==0){
      particles.push(new Particle(random(width/2-50,width/2+50),10,10))
    score+=1
    }}
  else 
      text("Out of Particles! Refresh To Restart",250,400);
  
  //display the paricles 
  for (var a = 0; a < particles.length; a++) {
    particles[a].display();
}
}