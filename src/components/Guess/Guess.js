import React from 'react';
import { range } from "../../utils";

function Guess({ guess }) {
  return <p className="guess">
    {range(0, 5).map((v) => (
        <span key={`${guess?.id}-${crypto.randomUUID()}`} className="cell">{guess ? guess.guessWord[v] : ''}</span>
    ))}
  </p>;
}

export default Guess;
