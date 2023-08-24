import React, { useState } from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">
          {squares.map((sq, i) => {
            if (i < 3) {
              return (
                <Square key={i} value={sq} handleClick={() => handleClick(i)} />
              );
            }
          })}
        </div>
        <div className="board-row">
          {squares.map((sq, i) => {
            if (i >= 3 && i < 6) {
              return (
                <Square key={i} value={sq} handleClick={() => handleClick(i)} />
              );
            }
          })}
        </div>
        <div className="board-row">
          {squares.map((sq, i) => {
            if (i >= 6) {
              return (
                <Square key={i} value={sq} handleClick={() => handleClick(i)} />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
