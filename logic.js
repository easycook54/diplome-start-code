let players = ['x', 'o'];
let activePlayer = 0;
let arr = [];
let size = 5; // задаем размер игрового поля

function startGame() {
  activePlayer = 1;
  for (i = 0; i < size; i ++) {
    arr[i] = []; 
    for (j = 0; j < size; j ++) {
     arr[i].push(""); // создание игрового поля
    }
  } 
  renderBoard(arr);
}

function click(row, column) {
  const playerSymbol = players[activePlayer];
  arr[row][column] = playerSymbol;
  renderBoard(arr);
  
  if (isWinningSituation()) {
    showWinner(activePlayer); 
  }
  activePlayer = (activePlayer + 1) % players.length; 
}

function isWinningSequence(r0, r1, ri, c0, c1, ci) {
  let firstSymbol = null;
  for (let r = r0, c = c0; Math.abs(r1-r) > 0 && Math.abs(c1-c) > 0; r += ri, c += ci  ) { 
   const symbol = arr[r][c]; 
    if (symbol === '') {
      return false;
    }    
    if (firstSymbol === null) {
    firstSymbol = symbol;
    continue;    
    }    
    if (firstSymbol !== symbol) {
    return false;
    }
  }  
    return true;
}

function isWinningSituation() {
  const N = arr.length;  
  for (let i = 0; i < N; ++i) {
    if (isWinningSequence(i, i+1, 0, 0, N, 1) || isWinningSequence(0, N, 1, i, i+1, 0)) {
      return true; 
    }
  }
    if (isWinningSequence(0, N, 1, 0, N, 1) || isWinningSequence(N-1, -1, -1, 0, N, 1)) {
    return true;
    }
  return false;
}


