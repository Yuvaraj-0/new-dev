const gameboard =document.getElementById("gameboard")
const context = gameboard.getContext("2d"); 
const WIDTH =gameboard.width;
const HEIGHT= gameboard.height;
const UNIT=25;
const scoretext=document.getElementById("scoreval")

let foodx;
let foody;
let xvel=25;
let yvel=0;
let score=0;
let active=true;
let started=false;


let snake =[
    // {x:UNIT*3,y:0},
    // {x:UNIT*2,y:0},
    // {x:UNIT,y:0},
    {x:0,y:0}
];

  //change direction ekey
  window.addEventListener("keydown",keyPress)
  

startgame();



function startgame(){
    context.fillStyle ="#212121";
    // fillRect(xstart, ystart,WIDTH,HEIGHT)
    context.fillRect(0,0,WIDTH,HEIGHT);
    
    createfood();
    displayfood();
    // drawsnake();
    // movesnake();
    drawsnake();
   
    // nexttick();
    
}
function clearboard(){
    context.fillStyle ="#212121";
    // fillRect(xstart, ystart,WIDTH,HEIGHT)
    context.fillRect(0,0,WIDTH,HEIGHT);
}
// create food at random place
function createfood(){
    foodx=Math.floor(Math.random()*WIDTH/UNIT)*UNIT;
    foody=Math.floor(Math.random()*WIDTH/UNIT)*UNIT;
}
// gemerate fod by x axis(width), y axxis (unit) bellow 20 by muliply and divide
function displayfood(){
    context.fillStyle="red";
    context.fillRect(foodx, foody, UNIT, UNIT)
}
function drawsnake(){
    context.fillStyle='aqua';
    context.strokeStyle ="red";
    snake.forEach((snakePart)=>{
         context.fillRect(snakePart.x,snakePart.y,UNIT,UNIT)
         context.strokeRect(snakePart.x,snakePart.y,UNIT,UNIT)
    })
} 
function movesnake(){
    // creating the head 
    const head={x:snake[0].x+xvel,
        y:snake[0].y+yvel
    }
    //this unshift method  shifitng the head forward
    snake.unshift(head)
    if(snake[0].x==foodx && snake[0].y==foody){
        score +=1;
        scoretext.textContent=score;
        createfood()
}
    // this pop remve preciohs head
    else{
        snake.pop()
    }
    
}
function nexttick(){
    if(active){
        setTimeout(()=>{
            clearboard();
            displayfood();
            movesnake();
            drawsnake();
            checkgameover();
            nexttick();
        },200);
    }
    else{
        clearboard();
        context.font="bold 50px serif";
        context.fillStyle="white";
        context.textAlign ="center";
        
        context.fillText("game over!!",WIDTH/2,HEIGHT-200,);
    }
}

//direction key

function keyPress(event){
    if(!started){
        started =true;
        nexttick();
    }
    active=true;
    const LEFT =37;
    const UP= 38;
    const RIGHT = 39;
    const DOWN= 40;

    
    switch(true){
        case(event.keyCode==LEFT && xvel!=UNIT):
        xvel=-UNIT;
        yvel=0;
        break;
        case(event.keyCode==RIGHT && xvel!= -UNIT):
        xvel=UNIT;
        yvel=0;
        break;
        case(event.keyCode==DOWN && yvel!= -UNIT):
        xvel=0;
        yvel=UNIT;
        break;
        case(event.keyCode==UP && yvel!= UNIT):
        xvel=0;
        yvel=-UNIT;
        break;
    }
}
    function checkgameover(){
        switch(true){
            case(snake[0].x<0):
            case(snake[0].x>=WIDTH):
            case(snake[0].y<0):
            case(snake[0].y>=HEIGHT):
                active=false;
                break;
    }
}
