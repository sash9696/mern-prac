import React, { useState } from "react";
import "./index.css";
//tic tac toe

//basic structure -> 3x3 grid
//x turn then o turns
//check for winner or horizontal, diagonal and vertical cases
//each player can take only one turn
//reset
//display moves
//bonus: time travel

//lift the state up

function Square({ value, onSquareClick }) {
  return (
    <button onClick={onSquareClick} className="square">
      {value}
    </button>
  );
}
//[
// [null, null, null, null, null, null, null, null, null] move 0
// [null, null, null, "X", null, null, null, null, null] move 1
// [null, null, null, "X", null, null, null, "O", null] move 2
// [null, "X", null, "X", null, null, null, "O", null] move 3
// ]


function TicTacToe(){

  const [xIsNext, setXIsNext] = useState(true);

  const [history, setHistory] = useState([Array(9).fill(null)])

  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];

  function handlePlay(nextSquares){
    const nextHistory= [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1)
    setXIsNext(!xIsNext)
  }

  function jummToMove(nextMove){
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0)
  }


  const moves = history.map((squares,move) => {
    let desc;
    if(move > 0){
      desc = `Go to the move # ${move}`
    }else{
      desc = `Go to start of the game`
    }
    return (
      <li>
         <button onClick={() => jummToMove(move)} >{desc}</button>
      </li>
    )
  })

  return (
    <div className="tictactoe">
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}  />
      </div>
      <div className="info">
        <ul>{moves}</ul>
      </div>
    </div>

  );
}


function Board({xIsNext, squares, onPlay}) {

  function handleClick(i) {
    if (squares[i] || checkForWinner(squares)) {
      return;
    }
    //never directly manipulate the state
    //immutability
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares); 


    //when the state of parent component changes
    //all of its child components automatically re renders
  }

  const winner = checkForWinner(squares);

  let status;

  if(winner){
    status = `Winner is ${winner}`
  }else{
    status = `Next player is ${xIsNext ? 'X' : 'O'}`
  }

  //if the data depends on the state then u can just use normal variables
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function checkForWinner(squares) {
  const winnerCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winnerCombinations.length; i++) {
    const [a, b, c] = winnerCombinations[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  return (
    <div>
      <TicTacToe />
    </div>
  );
}

export default App;
