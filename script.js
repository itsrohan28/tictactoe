let boxer = document.querySelectorAll('.box');
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn")
let winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]
let count =0;
let turnO = true;
const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
  };
boxer.forEach((box) => {
    box.addEventListener('click', () =>{
        
        if(turnO===true){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkwinner();
    
        if (count === 9 && !isWinner) {
          gameDraw();
        }
    })
});
const disableBox = () => {
    for(box in boxer){
        box.diabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxer) {
      box.disabled = false;
      box.innerText = "";
    }
  };
  const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
const showwinner = (winner) => {
  msg.innerText = `Winner is ${winner}`;
  disableBox();
  msgContainer.classList.remove("hide");   
}

const checkwinner = () => {
    for( let x of winCondition){{
        let presVal1 = boxer[x[0]].innerText;
        let presVal2= boxer[x[1]].innerText;
        let presVal3= boxer[x[2]].innerText;
    
    if(presVal1 !="" && presVal2 !="" && presVal3 !=""){
        if(presVal1=== presVal2 && presVal2 === presVal3){
            showwinner(presVal1);
            return true;
        }
    }
    }
    }
}
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);