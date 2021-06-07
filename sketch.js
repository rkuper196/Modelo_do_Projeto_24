const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Crie o Objeto do Arqueiro Jogador

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  
  //Crie um objeto flecha
  
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEARIA ÉPICA", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()


  //Exibir flecha();
  
  //se a tecla Espaço (32) é pressionada, chame a função shoot da flecha do jogador (playerArrow)
  if(keyCode === 32){
    //Chame a função shoot() e passe o ângulo de arqueiro jogador (playerArcher)


  }
}



