let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.reset')
let newBtn = document.querySelector('.newBtn');
let msg = document.querySelector('#message')
let popup = document.querySelector('.popup')

let turnx = true;



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
    checkWinner();
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

    if(val1 != '' && (val2 != '') & (val3 != '')){
      if(val1 === val2 && val2 === val3){
        //console.log('winner', val1);
        winFunction();
        
      }
      
    }
  }
}

const winFunction = (element) => {
  msg.innerText = `Congrats, ${element} won!`
  popup.classList.remove('hide')
  disabled();
}

const disabled = () => {
  for (let box of boxes){
    box.disabled = true;
  }
}


//restarting game
 resetBtn.addEventListener("click", () => {
  turnx = true;
  enableButtons();
  popup.classList.add('hide')
});


//new game button
 newBtn.addEventListener("click", () => {
  turnx = true;
  enableButtons();
  popup.classList.add('hide')
});

const enableButtons = () => {
  for (let box of boxes){
    box.disabled = false;
    box.innerText = '';
  }
}



 