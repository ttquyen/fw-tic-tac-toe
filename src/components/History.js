import React from "react";

function History({ history, jumpTo }) {
  return (
    <div className="history">
      <h4>History</h4>
      <ul>
        {history.map((step, index) => {
          const description = index
            ? "Go to index #" + index
            : "Go to game start";
          return (
            <li key={index}>
              <button onClick={() => jumpTo(index)}>{description}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default History;
