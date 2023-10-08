import React from 'react';

const INITIAL_INPUT = '';
function GuessInput() {
  const [inputValue, setInputValue] = React.useState(INITIAL_INPUT);

  function onSubmit(e) {
    e.preventDefault();
    console.log({ guess: inputValue })
    setInputValue(INITIAL_INPUT);
  }

  return <form
      className="guess-input-wrapper"
      onSubmit={onSubmit}
  >
    <label htmlFor="guess-input">Enter guess:</label>
    <input
        id="guess-input"
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value.toUpperCase())}
        pattern="[A-Za-z]{5}"
        title="Guess word should be 5 letters"
    />
  </form>;
}

export default GuessInput;
