let boxes = document.querySelectorAll(".ship");
let container = document.getElementsByClassName("container")[0];
let count = 0;
let size = 16;
let totalShips = 5;

let shipPlaced = 0;
while(shipPlaced < totalShips){
    let index = Math.floor(Math.random()*size);
    if(boxes[index].innerHTML == ""){
        boxes[index].innerHTML = `<img style=" height: 100% ; width : 100% ;object-fit: cover; display:none" src ="battleship-image.png">`;
        shipPlaced++;
    } 
}
boxes.forEach(box => {
    if(box.innerHTML == ""){
        box.innerHTML = `<img style=" height: 100% ; width : 100% ;object-fit: cover; display: none" src ="waves_image.webp">`;
    }
    })

boxes.forEach((box,index,boxes) => {
    box.addEventListener("click", () => {
        let child = box.children[0];
        child.style.display = "flex";
        console.log("inside");
        box.style.pointerEvents = "none";
    
   if(count < 8){
     let arr = Array.from(boxes).filter(box => {
        if(box.firstElementChild.getAttribute("src") == "battleship-image.png") {
        if(box.firstElementChild.style.display == "flex"){
             return box;
        }}});  
        count++;    
     console.log(arr);
     if(arr.length == 5){
        showResult();
     }  else{
        if(count == 8) drawResult();
        return;
     }
     }
     else{
        drawResult();
     }
})
})

const showResult = () => {
    boxes.forEach(box => {
        box.style.pointerEvents = "none";
    })
  let div = document.createElement("div");
  div.classList.add("rslt");
  div.innerHTML = `<p>This page says</p>
                   <h2 style=" margin: 0px 8px">You Won</h2>
                   <button style ="width:37px ; height:30px ; background-color:blue; color:white ; margin:auto" onclick="resetGame()">Ok</button>`;
   container.appendChild(div);
  
}
const drawResult = () => {
    boxes.forEach(box => {
        box.style.pointerEvents = "none";
    })
  let div = document.createElement("div");
  div.classList.add("rslt");
  div.innerHTML = `<p>This page says</p>
                   <h2 style=" margin: 0px 8px">You Lost</h2>
                   <button style ="width:37px ; height:30px ; background-color:blue; color:white ; margin:auto" onclick="resetGame()">Ok</button>`;
   container.appendChild(div);
}

const resetGame = () => {
    location.reload(); 
}