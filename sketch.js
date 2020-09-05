var gameState="start"
var getStarted,start_image,tought,tought_image;
var quiz,quiz_image,ye1,yesImage,no1,noImage,yes2,no2,yes3,no3,yes4,no4,yes5,no5;
var count , score,display,display_image
var image1,image1_img,image2,image2_img,image3,image3_img;
var image4,image4_img,image5,image5_img;


function preload(){
  start_image=loadImage("getstarted.png");
  tought_image=loadImage("tought1.png");
  quiz_image=loadImage("quiz.png");
  yesImage=loadImage("yes.png")
  noImage=loadImage("no.png");
  display_image=loadImage("display.png")
image1_img=loadImage("image1.png")
image2_img=loadImage("image2.png")
image3_img=loadImage("image3.png")
image4_img=loadImage("image4.png")
image5_img=loadImage("image5.png")


}

function setup() {
  createCanvas(displayWidth-20,displayHeight-80);
tought=createSprite(displayWidth/2,displayHeight/2,1,1)

 getStarted= createSprite(displayWidth/1-400,displayHeight/2+200,1,1);
  quiz=createSprite(displayWidth/2-50,150,1,1);


image1=createSprite(displayWidth/2-40,displayHeight/2-40,1,1)
yes1=createSprite(displayWidth/2-80,displayHeight/2+40,1,1)
no1=createSprite(displayWidth/2+30,displayHeight/2+40,1,1)
  
 image2=createSprite(displayWidth/2-40,displayHeight/2-40,1,1)
  yes2=createSprite(displayWidth/2-140,displayHeight/2+40,1,1)
  no2=createSprite(displayWidth/2+80,displayHeight/2+40,1,1)

image3=createSprite(displayWidth/2-40,displayHeight/2-40,1,1)
  yes3=createSprite(displayWidth/2-80,displayHeight/2+40,1,1)
  no3=createSprite(displayWidth/2+30,displayHeight/2+40,1,1)

image4=createSprite(displayWidth/2-40,displayHeight/2-40,1,1)
  yes4=createSprite(displayWidth/2-140,displayHeight/2+40,1,1)
  no4=createSprite(displayWidth/2+80,displayHeight/2+40,1,1)


  image5=createSprite(displayWidth/2-40,displayHeight/2-40,1,1)
  yes5=createSprite(displayWidth/2-80,displayHeight/2+40,1,1)
  no5=createSprite(displayWidth/2+30,displayHeight/2+40,1,1)
}

function draw() {
  background(222); 
  if(gameState==="start"){
    getStarted.addImage(start_image);
    tought.addImage(tought_image)
    if(mousePressedOver(getStarted)){
      gameState="screen1"
    }
  }
  if(gameState==="screen1"){
    getStarted.destroy();
    tought.destroy();
    quiz.addImage(quiz_image);
    quiz.scale=0.1
    if(mousePressedOver(quiz)){
      gameState="quiz"
    }

  }
  if(gameState==="quiz"){
    quiz.destroy();
    background(display_image);
    textSize(20);
    
    image1.addImage(image1_img)
    yes1.addImage(yesImage)
    yes1.scale=0.05
    no1.addImage(noImage)
    no1.scale=0.3
    if(mousePressedOver(yes1)){
      yes1.destroy();
      no1.destroy();
      image1.destroy();
      image2.addImage(image2_img)
      yes2.addImage(yesImage)
      yes2.scale=0.05
      no2.addImage(noImage)
      no2.scale=0.3
    }
    if(mousePressedOver(no1)){
      yes1.destroy();
      no1.destroy();
      image1.destroy();
      image2.addImage(image2_img)
      yes2.addImage(yesImage)
      yes2.scale=0.05
      no2.addImage(noImage)
      no2.scale=0.3
    }
    if(mousePressedOver(yes2)){
      yes2.destroy();
      no2.destroy();
      image2.destroy();
      image3.addImage(image3_img)
      yes3.addImage(yesImage)
      yes3.scale=0.05
      no3.addImage(noImage)
      no3.scale=0.3
    }
  
    if(mousePressedOver(no2)){
      yes2.destroy();
      no2.destroy();
      image2.destroy();
      image3.addImage(image3_img)
      yes3.addImage(yesImage)
      yes3.scale=0.05
      no3.addImage(noImage)
      no3.scale=0.3
    }
    if(mousePressedOver(yes3)){
      yes3.destroy();
      no3.destroy();
      image3.destroy();
      image4.addImage(image4_img)
      yes4.addImage(yesImage)
      yes4.scale=0.05
      no4.addImage(noImage)
      no4.scale=0.3
    }
    if(mousePressedOver(no3)){
      yes3.destroy();
      no3.destroy();
      image3.destroy();
      image4.addImage(image4_img)
      yes4.addImage(yesImage)
      yes4.scale=0.05
      no4.addImage(noImage)
      no4.scale=0.3
    }

    if(mousePressedOver(yes4)){
      yes4.destroy();
      no4.destroy();
      image4.destroy();
      image5.addImage(image5_img)
      yes5.addImage(yesImage)
      yes5.scale=0.05
      no5.addImage(noImage)
      no5.scale=0.3
    }

    if(mousePressedOver(no4)){
      yes4.destroy();
      no4.destroy();
      image4.destroy();
      image5.addImage(image5_img)
      yes5.addImage(yesImage)
      yes5.scale=0.05
      no5.addImage(noImage)
      no5.scale=0.3
    }


  }
    //if(mousePressedOver(no1)){
    //  no1.destroy();
    //}



   
    /*if(mousePressedOver(yes2)){
      yes2.destroy();
    }
    if(mousePressedOver(no2)){
      no2.destroy();
    }


    image3.addImage(image3_img)
    yes3.addImage(yesImage)
    yes3.scale=0.05
    no3.addImage(noImage)
    no3.scale=0.3
    if(mousePressedOver(yes3)){
      yes3.destroy();
    }
    if(mousePressedOver(no3)){
      no3.destroy();
    }


   image4.addImage(image4_img)
    yes4.addImage(yesImage)
    yes4.scale=0.05
    no4.addImage(noImage)
    no4.scale=0.3
   
    if(mousePressedOver(yes4)){
      yes4.destroy();
    }
    if(mousePressedOver(no4)){
      no4.destroy();
    }

  }
 
 


 */
  
  drawSprites();
  
}

