var gameState="start"
var getStarted,start_image,tought,tought_image;
var quiz,quiz_image,ye1,yesImage,no1,noImage,yes2,no2,yes3,no3,yes4,no4,yes5,no5;
var count=0 , score=0,display,display_image
var image1,image1_img,image2,image2_img,image3,image3_img;
var image4,image4_img,image5,image5_img;
var display1,display_image1,prevent,prevent_image,chat,chat_image,input1,chat1
var database, chatofperson2,message,message2
var advice,advice_image;
var CHATOFPERSON1,ok,pointer;
var back,back_img;
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
display_image1=loadImage("roseimage.png")
prevent_image=loadImage("prevent1.png");
chat_image=loadImage("pen.png");
advice_image=loadImage("advice.png")
back_img=loadImage("back.jpg");

}

function setup() {
  database=firebase.database();

  createCanvas(displayWidth-20,displayHeight-80);

tought=createSprite(displayWidth/2,displayHeight/2,1,1)

 getStarted= createSprite(displayWidth/1-400,displayHeight/2+200,1,1);
  quiz=createSprite(displayWidth/2-350,500,1,1);
pointer=createSprite(100,100,1,1)

image1=createSprite(displayWidth/2-40,displayHeight/2-40,1,1)
yes1=createSprite(displayWidth/2-170,displayHeight/2+40,1,1)
no1=createSprite(displayWidth/2+150,displayHeight/2+40,1,1)
  
 image2=createSprite(displayWidth/2-40,displayHeight/2-40,1,1)
  yes2=createSprite(displayWidth/2-50,displayHeight/2+40,1,1)
  no2=createSprite(displayWidth/2+50,displayHeight/2+40,1,1)

image3=createSprite(displayWidth/2-40,displayHeight/2-40,1,1)
  yes3=createSprite(displayWidth/2-150,displayHeight/2+40,1,1)
  no3=createSprite(displayWidth/2+150,displayHeight/2+40,1,1)

image4=createSprite(displayWidth/2-40,displayHeight/2-40,1,1)
  yes4=createSprite(displayWidth/2-50,displayHeight/2+40,1,1)
  no4=createSprite(displayWidth/2+50,displayHeight/2+40,1,1)


  image5=createSprite(displayWidth/2-40,displayHeight/2-40,1,1)
  yes5=createSprite(displayWidth/2-150,displayHeight/2+40,1,1)
  no5=createSprite(displayWidth/2+150,displayHeight/2+40,1,1)

  prevent=createSprite(displayWidth/2-200,displayHeight/2-70,1,1)
 chat=createSprite(displayWidth/2-50,500,1,1)

 input1=createInput();

 back=createSprite(800,650,1,1);
 

}

function draw() {
  background(222); 
  pointer.x=mouseX;
  pointer.y=mouseY;
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
    quiz.scale=0.27
    background(display_image1);
   
    textSize(30)
    text("Hi Friend,Do you feel Depressed ",120,100)
    text("Do not worry, here are  some tips and suggestions to feel better  ",120,150)
    text("Dear Friend please click on Quiz icon to attend our quiz ",120,200)
    text("and get tips acoording to the level of depression ",120,250)
    text("The best way to reduce your pain is express yourself,",120,300)
    text("please click on pen icon and express your feelings you will feel much better ",120,350)
    if(mousePressedOver(quiz)){
      gameState="quiz"
    }
    chat.addImage(chat_image);
    chat.scale=0.382;


    if(mousePressedOver(chat)){
      quiz.visible=false;
      chat.destroy();
    
      gameState="chat"
    }
  }
  if(gameState==="quiz"){
    chat.destroy();
    quiz.destroy();
    background(display_image);
    textSize(20);
    
    image1.addImage(image1_img)
    yes1.addImage(yesImage)
    yes1.scale=0.05
    no1.addImage(noImage)
    no1.scale=0.3

    if(pointer.isTouching(yes1)){
      yes1.destroy();
      no1.destroy();
      image1.destroy();
      image2.addImage(image2_img)
      yes2.addImage(yesImage)
      yes2.scale=0.05
      no2.addImage(noImage)
      no2.scale=0.3
     // string="a"
      
     
        count=count+1
        console.log(count);
      
      
    }
    if(pointer.isTouching(no1)){
      yes1.destroy();
      no1.destroy();
      image1.destroy();
      image2.addImage(image2_img)
      yes2.addImage(yesImage)
      yes2.scale=0.05
      no2.addImage(noImage)
      no2.scale=0.3
      score=score+1
      console.log(score)
    }
    if(pointer.isTouching(yes2)){
      yes2.destroy();
      no2.destroy();
      image2.destroy();
      image3.addImage(image3_img)
      yes3.addImage(yesImage)
      yes3.scale=0.05
      no3.addImage(noImage)
      no3.scale=0.3
    //  string="b"
      
        count=count+1
        console.log(count);
      
     
    }
  
    if(pointer.isTouching(no2)){
      yes2.destroy();
      no2.destroy();
      image2.destroy();
      image3.addImage(image3_img)
      yes3.addImage(yesImage)
      yes3.scale=0.05
      no3.addImage(noImage)
      no3.scale=0.3
      score=score+1
      console.log(score)
    }
    if(pointer.isTouching(yes3)){
      yes3.destroy();
      no3.destroy();
      image3.destroy();
      image4.addImage(image4_img)
      yes4.addImage(yesImage)
      yes4.scale=0.05
      no4.addImage(noImage)
      no4.scale=0.3
     
     
        count=count+1
        console.log(count);
      
     
    }
    if(pointer.isTouching(no3)){
      yes3.destroy();
      no3.destroy();
      image3.destroy();
      image4.addImage(image4_img)
      yes4.addImage(yesImage)
      yes4.scale=0.05
      no4.addImage(noImage)
      no4.scale=0.3
      score=score+1
      console.log(score)
    }

    if(pointer.isTouching(yes4)){
      yes4.destroy();
      no4.destroy();
      image4.destroy();
      image5.addImage(image5_img)
      yes5.addImage(yesImage)
      yes5.scale=0.05
      no5.addImage(noImage)
      no5.scale=0.3
      
     
        count=count+1
        console.log(count);
      
     
    }

    if(pointer.isTouching(no4)){
      yes4.destroy();
      no4.destroy();
      image4.destroy();
      image5.addImage(image5_img);
      yes5.addImage(yesImage);
      yes5.scale=0.05;
      no5.addImage(noImage);
      no5.scale=0.3;
      score=score+1;
      console.log(score);
    }
    if(pointer.isTouching(yes5)){
      yes5.destroy();
      no5.destroy();
      image5.destroy();
     
     
        count=count+1;
        console.log(count);
     
      }
      if(count>=3){
        background(0)
        gameState="tips1"
        
    }

    if(pointer.isTouching(no5)){
      yes5.destroy();
      no5.destroy();
      image5.destroy();
      score=score+1
      console.log(score)
     
     
    }
    if(score>=3){
      background(0)
      gameState="tips2"
    }

  }
  if(gameState==="tips2"){
    text("save life",400,400)
    yes4.destroy();
no4.destroy();
image4.destroy();
    yes5.destroy();
no5.destroy();
image5.destroy();
  }
if(gameState==="tips1"){
prevent.addImage(prevent_image);
prevent.scale=1.5

yes5.destroy();
no5.destroy();
yes4.destroy();
no4.destroy();
image4.destroy();
image5.destroy();

}
if(gameState==="chat"){
  background("chocolate")
input1.position(200,100)

message=input1.value()
textSize(30)
fill("black")

text("expressing my self: ",100,170)
text(message,300,200);

back.addImage(back_img);
back.scale=0.3
if(mousePressedOver(back)){
  gameState="screen1"
  
  quiz.visible=true;

  back.destroy();
  input1.hide();
}


}

 

    
  
  drawSprites();
  
}
 function getchat1(){

  var chatinfo = database.ref('person1/chat');
  chatinfo.on("value",(data)=>{
    CHATOFPERSON1= data.val();
  })

}




  function updateChat(message){
    database.ref('person1').update({
      chat:message
    })
  }

 

