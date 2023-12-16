
let boxes=document.querySelectorAll('.box');
let resetBtn=document.querySelector('#reset-btn');
let heading=document.querySelector('.heading');
let playerScoreO=document.querySelector('.playeroneScore');
let playerScoreX=document.querySelector('.playertwoScore');
let turn=true;
let playerO=0;
let playerX=0;


heading.innerText="Current Player 'O'";
const winResult=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box) => {
   box.addEventListener('click',()=>{
    if(turn==true){
        box.innerHTML='O';
        turn=false;
        heading.innerText="Current Player 'X'";
    }else{
        box.innerHTML='X';
        turn=true;
        heading.innerText="Current Player 'O'";
    }
    //box.disabled=true;
    checkWinner();
    
   });
});

const disableBoxes=()=>{
    for (box of boxes){
        box.disabled=true;
    }
};
const checkWinner=()=>{
    for (let petern of winResult){
        let showWinner=()=>{
            let changeDesingOne=boxes[petern[0]];
            let changeDesingTwo= boxes[petern[1]];
            let changeDesingThree= boxes[petern[2]];
            changeDesingOne.classList.add('winner');
            changeDesingTwo.classList.add('winner');
            changeDesingThree.classList.add('winner');
            disableBoxes();
    }

       let positionOne = boxes[petern[0]].innerText;
       let positionTwo= boxes[petern[1]].innerText;
       let positionThree= boxes[petern[2]].innerText;
       

       if(positionOne !='' && positionTwo!='' && positionThree!=''){
            if(positionOne==positionTwo && positionTwo==positionThree){
               showWinner();
               heading.innerText="Player    " + positionOne + "    Is Winner !!" ;
               if(positionOne=='O'){
                playerO+=1;
                playerScoreO.innerText=playerO;
               }else{
                playerX+=1;
                playerScoreX.innerText=playerX;
               }
            }
       }
    }
};
const enableBoxes=()=>{
    for (box of boxes){
        box.disabled=false;
        box.innerText='';
        box.classList.remove('winner');
    }
}
resetBtn.addEventListener('click',()=>{
    turn=true;
    enableBoxes();
    heading.innerText="Current Player 'O'";
});
