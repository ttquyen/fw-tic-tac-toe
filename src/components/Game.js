import React, { useState, useEffect } from "react";
import Board from "./Board";
import History from "./History";

function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNum, setStepNum] = useState(0);

  //Declaring a Winner
  useEffect(() => {
    const newWinner = calculateWinner(history[stepNum].squares); //after each square changing, need to check winner
    setWinner(newWinner); //set new winner
  }, [history, stepNum]);

  //function to check if a player has won.
  //If a player has won, we can display text such as “Winner: X” or “Winner: O”.
  //Input: squares: given an array of 9 squares:'X', 'O', or null.
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  //Handle player
  const handleClick = (i) => {
    //check already exist winner (or full squares) and value at i-th square
    if (
      calculateWinner(history[stepNum].squares) ||
      history[stepNum].squares[i]
    ) {
      return;
    }
    const newSquares = [...history[stepNum].squares];
    newSquares[i] = xIsNext ? "X" : "O";
    setHistory([...history, { squares: newSquares }]);
    setStepNum(stepNum + 1);
    setXIsNext((prevState) => !prevState);
  };

  //Restart game
  const handlRestart = () => {
    setXIsNext(true);
    setHistory([{ squares: Array(9).fill(null) }]);
    setStepNum(0);
  };
  const jumpTo = (step) => {
    setStepNum(step);
    setXIsNext(step % 2 === 0);
  };
  return (
    <div className="main">
      <h2 className="result">Winner is: {winner ? winner : "N/N"}</h2>
      <div style={{ display: "flex" }}>
        <div className="game">
          <span className="player">Next player is: {xIsNext ? "X" : "O"}</span>
          <Board squares={history[stepNum].squares} handleClick={handleClick} />
        </div>
        <History history={history} jumpTo={jumpTo} />
      </div>

      <button onClick={handlRestart} className="restart-btn">
        Restart
      </button>
    </div>
  );
}

export default Game;
