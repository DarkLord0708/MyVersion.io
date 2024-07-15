let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;
let win =false;
const wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let x = [-1,-1,-1];
let o = [-1,-1,-1];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turn0){
            let i = -1;
            for(mark of boxes){
                if(mark.classList[1] == x[0]){
                    mark.style.color = "#bf675e";
                }
            }
            box.innerText="O";
            box.style.color= "#057bff";
            turn0 = false;
            // console.log(box.classList[1]);
            i = o.shift();
            for(mark of boxes){
                if(mark.classList[1] == i){
                    mark.innerText = "";
                    mark.disabled=false;
                
                }
            }
            o.push(box.classList[1]);
            console.log(o);
            console.log(x);
        }
        else{
            let i = -1;
            for(mark of boxes){
                if(mark.classList[1] == o[0]){
                    mark.style.color = "#b4d0f0";
                }
            }
            box.innerText="X";
            box.style.color= "#ff1900";
            turn0=true;
            i = x.shift();
            for(mark of boxes){
                if(mark.classList[1] == i){
                    mark.innerText = "";
                    mark.disabled=false;
                }
            }

            x.push(box.classList[1]);
            console.log(o);
            console.log(x);
        }
        box.disabled=true;

        checkWinner();
    })
})

const resetGame = () => {
    turn0 = true;
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
        msgContainer.classList.add("hide");
        resetBtn.classList.remove("hide");
        win = false;
        x = [-1,-1,-1];
        o = [-1,-1,-1];
    } 
}



const disableBoxes = () => {
    for(box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    resetBtn.classList.add("hide");
    win = true;
}



const checkWinner = ()=>{
    for(let pattern of wins){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val == pos2val && pos2val == pos3val){
                showWinner(pos1val);
            }
        }
    }
}


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);