import Header from "./Header";
import Button from "./Button";
import { useState, useEffect } from "react";

const easyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const hardNumbers = [...easyNumbers, 10, 11, 12, 13, 14, 15, 16, 17, 18];

const colors = [
  "#96D4E7",
  "#D45F5F",
  "#FFF3B5",
  "#C2A0E0",
  "#F4B26A",
  "#F5B0E2",
  "#467A56",
  "#29659C",
  "#2B2757",
  "#49C144",
];

const Game = () => {
  const [difficulty, setDifficulty] = useState("hard");
  const [currentGuess, setCurrentGuess] = useState("");
  const [numGuesses, setNumGuesses] = useState("4");
  const [highOrLow, setIsHighOrLow] = useState("");

  // Restart the game
  const restartGame = () => {
    window.location.reload();
  };

  // Populate random number for comparison
  const getRandomNum = () => {
    if (difficulty === "easy") {
      return Math.round(Math.random() * easyNumbers.length);
    } else {
      return Math.round(Math.random() * hardNumbers.length);
    }
  };

  // Set random number
  const [currentNum, setCurrentNum] = useState();

  // Set game difficulty
  const setDiff = (e) => {
    if (e.target.id === "easy") {
      setDifficulty("easy");
      setNumGuesses(6);
    } else {
      setDifficulty("hard");
      setNumGuesses(4);
    }
  };

  useEffect(() => {
    setCurrentNum(getRandomNum());
  }, [difficulty]);

  useEffect(() => {
    console.log(currentNum);
  }, [currentNum]);

  // Higher or lower hint feature
  const setHint = () => {
    console.log(currentGuess);
    if (currentGuess === "") {
      setIsHighOrLow("Pick a number first");
    } else if (currentGuess > currentNum) {
      setIsHighOrLow("Guess a lower number");
    } else {
      setIsHighOrLow("Guess a higher number");
    }

    setTimeout(() => {
      setIsHighOrLow("");
    }, 2000);
  };

  // Handle click event and logic for checking win/loss
  const selected = (number, e) => {
    setCurrentGuess(number);
    setNumGuesses(numGuesses > 0 ? numGuesses - 1 : numGuesses);
    e.target.className = numGuesses === 0 ? "btn" : "btn selected";
    if (parseInt(number) === currentNum) {
      const gameContainer = document.getElementById("game-container");
      gameContainer.style.background = "#49C144";
      setTimeout(() => {
        restartGame();
      }, 4000);
    }
  };

  // Render the game html content
  return (
    <div className="container">
      <Header>Guess the number</Header>

      <div className="button-group">
        <Button className={"btn"} onClick={setDiff} id={"hard"}>
          Hard Mode
        </Button>
        <Button className={"btn"} onClick={setDiff} id={"easy"}>
          Easy Mode
        </Button>
      </div>

      <main className="game-container" id="game-container">
        {parseInt(currentGuess) === currentNum && <h2>You Win!</h2>}
        {numGuesses === 0 ? (
          <p>Answer was: {currentNum}</p>
        ) : (
          <small>Pick a number to begin</small>
        )}
        <p>
          Number of guesses remaining: {numGuesses}/
          {difficulty === "easy" ? 6 : 4}
        </p>
        <article className="guess-nums">
          {difficulty === "easy"
            ? easyNumbers.map((number) => (
                <Button
                  type="button"
                  className="btn"
                  key={number}
                  onClick={(e) => selected(number, e)}
                >
                  {number}
                </Button>
              ))
            : hardNumbers.map((number) => (
                <Button
                  type="button"
                  className="btn"
                  key={number}
                  onClick={(e) => selected(number, e)}
                >
                  {number}
                </Button>
              ))}
        </article>
        {numGuesses === 0 && (
          <Button type={"button"} className={"btn"} onClick={restartGame}>
            Play Again?
          </Button>
        )}
        <aside className="hint">
          <Button type={"button"} className={"btn"} onClick={setHint}>
            Get a hint
          </Button>

          {highOrLow === "high" ? <p>{highOrLow}</p> : <p>{highOrLow}</p>}
        </aside>
      </main>
    </div>
  );
};

export default Game;
