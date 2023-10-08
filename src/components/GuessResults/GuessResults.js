import React from 'react';

function GuessResults({ guesses }) {
  return <div className="guess-results">
    {guesses.map(({ id, guessWord }) => (
        <p key={id} className="guess">{guessWord}</p>
    ))}
  </div>
}

export default GuessResults;
