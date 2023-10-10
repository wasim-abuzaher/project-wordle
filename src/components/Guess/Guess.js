import React from 'react';
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}`:  "cell";
  return (
      <span className={className}>{letter}</span>
  )
}

function Guess({ guess, answer }) {
  const checkedWord = checkGuess(guess?.guessWord, answer);

  return <p className="guess">
    {range(0, 5).map((v) => (
      <Cell
          key={`${guess?.id}-${crypto.randomUUID()}`}
          letter={checkedWord ? checkedWord[v].letter : undefined}
          status={checkedWord ? checkedWord[v].status : undefined}
      />
    ))}
  </p>;
}

export default Guess;
