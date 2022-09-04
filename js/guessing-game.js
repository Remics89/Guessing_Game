let numGen = function () {
  return Math.ceil(Math.random() * 100);
};

winningNumber = numGen();

console.log(winningNumber);

if (typeof window !== "undefined") {
  let guess = document.getElementById("guessbox");

  let context = document.querySelector(".anynum");

  let wrongGuesses = document.getElementsByClassName("showguess");
  console.log(wrongGuesses);

  console.log(context);

  const submit = document
    .getElementById("guessbutton")
    .addEventListener("click", () => {
      console.log("clicked");
      let win = `You have won! The correct number was ${winningNumber}!`;
      let tooLow = "Too low. Guess higher.";
      let tooHigh = "Too high. Guess lower";

      let playerGuess = guess.value;
      if (playerGuess == winningNumber) {
        context.innerText = win;
      } else {
        if (playerGuess < winningNumber) {
          context.innerText = tooLow;

        } else if (playerGuess > winningNumber) {
          context.innerText = tooHigh;
        }
      }
    });

    let submithelper;
}

// let hint1 = Math.floor(Math.random() * winningNumber + playerGuess);
//         console.log(hint1);
//         let hint2 = Math.floor(Math.random() * winningNumber + playerGuess);
//         console.log(hint2);
//         let hint3 = Math.floor(Math.random() * winningNumber + playerGuess);
//         console.log(hint3);
