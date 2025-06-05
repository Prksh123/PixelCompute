let result = document.getElementById("result");
let boxes = document.querySelectorAll(".box");
let count = true;
let gameOver = false;
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8],
  [2, 4, 6]  
];

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (gameOver || box.innerText !== "") return;
        if(count){
            box.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
            box.setAttribute("data-value", "X"); 
            box.style.backgroundColor = "lightgreen";
            box.style.pointerEvents = "none";
            result.innerText = "Player O's Turn";
            count = false;
        }
        else{
            box.innerHTML = `<i class="fa-regular fa-circle"></i>`; 
            box.setAttribute("data-value", "O");
            box.style.pointerEvents = "none";
            box.style.backgroundColor = "lightgreen";
            result.innerText = "Player X's Turn";
            count = true;
        }
        checkWinner();
    })
   
})

const checkWinner = () => {
    let winnerFound = false;
 
    winningCombinations.some(val => {
         const [a, b, c] = val;
         console.log("asichi");
         if (
             boxes[a].innerHTML &&
             boxes[a].innerHTML === boxes[b].innerHTML &&
             boxes[a].innerHTML === boxes[c].innerHTML
         ) {
             result.innerText = `Winner is ${boxes[a].getAttribute("data-value")}`; // Show the winner
             gameOver = true;  
             winnerFound = true;
             console.log("asichi");
             return true;  
         }
         return false;
     });
 
     if (winnerFound) {
         boxes.forEach(box => box.style.pointerEvents = "none");
     }
 
     if (!winnerFound && [...boxes].every(box => box.getAttribute("data-value"))) {
        result.innerText = "It's a draw!";
        gameOver = true;
    }
 };

 const resetGame = () => {
    boxes.forEach(box => {
        box.innerHTML = "";
        box.setAttribute("data-value", ""); 
        box.style.backgroundColor = "";
        box.style.pointerEvents = "auto";
    });
    gameOver = false;
    winnerFound = false;
    count = true;
    result.innerText = "Player X turn";
 }