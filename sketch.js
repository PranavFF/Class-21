var fixedRect, movingRect, box;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  box = createSprite(200,200, 50, 80);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green"
  box.shapeColor = "green"

}

function draw() {
  background("black");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

 
  if(isTouching(movingRect, box))
  {
    movingRect.shapeColor="red";
    box.shapeColor="red";
  }
  else if (isTouching(fixedRect, movingRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  }
  

  else
  {
   movingRect.shapeColor = "green";
   box.shapeColor = "green";
   fixedRect.shapeColor = "green";
  }

  drawSprites();
}

function isTouching(ob1,ob2)
{
  if(ob1.x-ob2.x<ob2.width/2+ob1.width/2 
    && ob2.x-ob1.x<ob2.width/2+ob1.width/2 
    && ob2.y-ob1.y<ob2.height/2+ob1.height/2 
    && ob1.y-ob2.y<ob2.height/2+ob1.height/2)
  {
    return true;  

  }
  else
  {
    return false;
  }
}