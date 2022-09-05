let numGen = function () {
  return Math.ceil(Math.random() * 100);
};

winningNumber = numGen();

if (typeof window !== "undefined") {
  let context = document.querySelector(".anynum");

  let wrongGuesses = document.getElementsByClassName("guess-input");

  let inputBox = document.getElementsByClassName("main-content");

  //   let playerGuess;

  let resetValue = `<input id="guessbox" 
  placeholder="Enter your guess here" 
  autofocus="autofocus" 
  maxlength="3"
  />`;

  let inputDisabler = `<input id="guessbox" 
  placeholder="Enter your guess here" 
  autofocus="autofocus" 
  maxlength="3"
  disabled=""
  />`;

  //   console.log(guess.value);

  let counter = 0;

  const submit = document
    .getElementById("guessbutton")
    .addEventListener("click", () => {
      let guess = document.getElementById("guessbox");
      let win = `You have won! The correct number was ${winningNumber}!`;
      let tooLow = "Too low. Guess higher.";
      let tooHigh = "Too high. Guess lower";
      let loser = `Sorry. You did not guess correctly. The correct number was ${winningNumber}.`;

      console.log(guess.value);
        if  (guess.value !== Number)  {
            context.innerText = 'That is not a number. Please input a number.'
            inputBox[0].innerHTML = resetValue;
        }
        if  (guess.value > 100 || guess.value < 1) {
            context.innerText = 'That number is outside of the game parameters. Please choose a number 1 - 100.'
            inputBox[0].innerHTML = resetValue;
        }
      if (guess.value == winningNumber) {
        context.innerText = win;
      } else {
        if (guess.value < winningNumber) {
          context.innerText = tooLow;
          wrongGuesses[counter].innerText = guess.value;
          //   console.log(wrongGuesses);
          //   inputBox[0].innerHTML = resetValue;
          if (counter == 4) {
            context.innerText = loser;
            counter = 0;
            inputBox[0].innerHTML = inputDisabler;
            return;
          }
          counter++;
        } else if (guess.value > winningNumber) {
          context.innerText = tooHigh;
          wrongGuesses[counter].innerText = guess.value;
          //   inputBox[0].innerHTML = resetValue;
          //   console.log(wrongGuesses);
          if (counter == 4) {
            context.innerText = loser;
            counter = 0;
            inputBox[0].innerHTML = inputDisabler;
            return;
          }
          counter++;
        }
      }
    });

  let boardReset = document
    .getElementById("reset")
    .addEventListener("click", () => {
      let guess = document.getElementById("guessbox");
      guess.value = null;
      counter = 0;
      inputBox[0].innerHTML = resetValue;
      console.log(inputBox[0].innerText);
      context.innerText = "Any number 1 - 100";
      for (let i = 0; i < wrongGuesses.length; i++) {
        wrongGuesses[i].innerText = "??";
      }
      winningNumber = numGen();
    });
}

// let hint1 = Math.floor(Math.random() * winningNumber + guess.value);
//         console.log(hint1);
//         let hint2 = Math.floor(Math.random() * winningNumber + guess.value);
//         console.log(hint2);
//         let hint3 = Math.floor(Math.random() * winningNumber + guess.value);
//         console.log(hint3);
