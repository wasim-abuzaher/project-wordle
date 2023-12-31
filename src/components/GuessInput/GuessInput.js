import React from 'react';

const INITIAL_INPUT = '';
function GuessInput({ onGuessSubmit, gameStatus }) {
  const [inputValue, setInputValue] = React.useState(INITIAL_INPUT);

  function onSubmit(e) {
    e.preventDefault();
    onGuessSubmit(inputValue);
    setInputValue(INITIAL_INPUT);
  }

  return <form
      className="guess-input-wrapper"
      onSubmit={onSubmit}
  >
    <label htmlFor="guess-input">Enter guess:</label>
    <input
        required
        id="guess-input"
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value.toUpperCase())}
        maxLength={5}
        pattern="[A-Za-z]{5}"
        title="Guess word should be 5 alphabitical letters"
        disabled={gameStatus !== 'running'}
    />
  </form>;
}

export default GuessInput;
