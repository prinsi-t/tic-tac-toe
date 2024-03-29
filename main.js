let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.reset')


let turnx = true;//playerX or player0



//Display X/O on click
boxes.forEach(element => {
  element.addEventListener('click', () => {
    //console.log('button clicked');
    if(turnx){
      turnx = false;
      element.innerText = 'X';
      element.disabled = true;
    }else{
      turnx = true;
      element.innerText = '0';
      element.disabled = true;
    }
    checkWinner()
  });
});

let winningPatterns = [
 
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]

];






//check winner
const checkWinner = () => {
  for(pattern of winningPatterns){
    //console.log(pattern[0], pattern[1], pattern[2]);
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;
  }
}

//restarting game
 /* resetBtn.addEventListener("click", () => {
  turnx = 0;
  enableButtons();
}); */

/* restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
}); */
//window.onload = enableButtons;
 