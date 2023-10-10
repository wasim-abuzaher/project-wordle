import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess";

function GuessResults({ guesses, answer }) {
  return <div className="guess-results">
    {range(0, NUM_OF_GUESSES_ALLOWED).map((v) => (
        <Guess key={v} guess={guesses[v]} answer={answer} />
    ))}
  </div>
}

export default GuessResults;
