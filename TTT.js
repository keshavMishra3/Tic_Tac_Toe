let button=document.body.querySelectorAll(".btn")
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
let player="player1";
let winnerMessage=(name)=>{
    document.getElementById("messageId").classList.remove("message")
    document.getElementById("messageId").innerText=`congratulation ${name} you win the game`
    button.forEach(butn=>{
        butn.disabled=true
    })
}
let checkWinner=()=>{
  for(let pattern of winPattern){
    let position1=button[pattern[0]].innerText
    let position2=button[pattern[1]].innerText
    let position3=button[pattern[2]].innerText
    if(position1!="" && position2!="" && position3!=""){
        if(position1===position2 && position2===position3){
            winnerMessage(position1);
        }
    }
   
  }
}
button.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        console.log("box was clicked")
        if(player=="player1"){
            btn.innerText="X"
            btn.style.color="#001f3f"
            player="player2"
        }
        else{
            btn.innerText="O"
            player="player1"
        }
        btn.disabled=true
        checkWinner()
    })
})
let enableBoxes=()=>{
    button.forEach(butn=>{
        butn.disabled=false
    })
}
let resetGame=()=>{
     player="player1"
    enableBoxes();
    button.forEach(butn=>{
        butn.innerText=""
    })
    document.getElementById("messageId").classList.add("message")
}
document.getElementById("rg").addEventListener("click",resetGame)