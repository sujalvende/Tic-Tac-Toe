let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");
let newGameBtn = document.querySelector("#new-button");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
let clickCount = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let resetGame = () => {
    turn0 = true;
    enableboxes();
    msgContainer.classList.add("hide");
};

boxes.forEach( (box) => {
    box.addEventListener("click",() => {
        if(turn0){
            box.innerText = "O";
            turn0 = false;
            
        } else {
            box.innerText = "X";
            turn0 = true;
            
        }
        clickCount++;
        box.disabled = true;
        cheakWinner();
        console.log(clickCount);
    })
})

const disableboxes = () => {
    for(box of boxes){
        box.disabled = true;
    }
};

const enableboxes = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msgContainer.classList.remove("hide");
    msg.innerText = `Congratulations, winner is ${winner}.`;
    disableboxes();
    clickCount = 0;
};

const drawGame = () => {
    if(clickCount === 9){
        msg.innerText = `The Game is Draw`;
        msgContainer.classList.remove("hide");
        disableboxes();
        clickCount = 0;
    }
};

const cheakWinner = () => {
    for(let pattern of winPatterns){
        
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos1Val === pos3Val){
                showWinner(pos1Val);
            } else {
                drawGame();
            }
        }
        
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);



