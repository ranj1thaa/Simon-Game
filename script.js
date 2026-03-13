let gameSeq=[];
let userSeq=[];
let started =false; 
let level=0;
let colBtns=["red","blue", "orange", "purple"];

let gameSequence=[];
let userSequence=[];
let gameStarted=false;
let gameLevel=0;
let btnColorsCOl=["red","blue","orange","purple"];

document.addEventListener("keypress",()=>{
  if(!gameStarted){
    gameStarted=true;
    LevelUpGame()
  }
})

let displays=document.querySelector(".display")

const buttonsGameFlash=(btn)=>{
  btn.classList.add("flash")
  setTimeout(()=>{
    btn.classList.remove("flash")
  },250)
}
const buttonsUserFlash=(btn)=>{
  btn.classList.add("usrFlash")
  setTimeout(()=>{
    btn.classList.remove("usrFlash")
  },250)
}
const LevelUpGame=()=>{
  userSequence=[];
  gameLevel++;
  displays.innerText=`Level:${gameLevel}`;
  let RandmonGen=Math.floor(Math.random()*btnColorsCOl.length)

  let randomCol=btnColorsCOl[RandmonGen]
  let randBtn=document.querySelector(`.${randomCol}`);
  gameSequence.push(randomCol)
  buttonsGameFlash(randBtn);
}


const checkAnswer=(index)=>{
  if(userSequence[index]===gameSequence[index]){
    if(userSequence.length===gameSequence.length){
      setTimeout(LevelUpGame,1000)
    }
  }else{
    displays.innerHTML=`Game Over! Score: <b>${gameLevel}</b><br>Press any key to restart`;
    document.body.style.backgroundColor = "red";

    setTimeout(()=>{
      document.querySelector("body").style.backgroundColor="white";
    },500)
    reset()
  }
}

let allBtns=document.querySelectorAll(".btn")

function buttonPressed(){
  let btn=this;
  buttonsUserFlash(btn);

  let userColor=btn.getAttribute("id");
  userSequence.push(userColor)
  checkAnswer(userSequence.length-1)
}

for (let btn of allBtns) {
  btn.addEventListener("click", buttonPressed);
}
 
	function reset(){
  		gameStarted=false;
   		gameSequence=[];
   		userSequence=[];
   		gameLevel=0;
 	}