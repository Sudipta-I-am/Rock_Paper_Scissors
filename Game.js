import React, { useState } from 'react';
import Hand from './Hand';
import './Game.css';

const choices = ['Rock', 'Paper', 'Scissors'];

function getResult(user, computer) {
  if (user === computer) return { msg: "It's a Draw!", detail: `${user} equals ${computer}` };
  if (
    (user === 'Rock' && computer === 'Scissors') ||
    (user === 'Paper' && computer === 'Rock') ||
    (user === 'Scissors' && computer === 'Paper')
  ) {
    return { msg: "You Win!", detail: `${user} beats ${computer}` };
  }
  return { msg: "You Lose!", detail: `${computer} beats ${user}` };
}

const Game = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ win: 0, lose: 0, draw: 0 });
  const [showHands, setShowHands] = useState(false);

  const handlePlay = (choice) => {
    setShowHands(false);
    setTimeout(() => {
      const comp = choices[Math.floor(Math.random() * 3)];
      const res = getResult(choice, comp);
      setUserChoice(choice);
      setComputerChoice(comp);
      setResult(res);
      setShowHands(true);
      setScore(s => ({
        win: s.win + (res.msg === 'You Win!' ? 1 : 0),
        lose: s.lose + (res.msg === 'You Lose!' ? 1 : 0),
        draw: s.draw + (res.msg === "It's a Draw!" ? 1 : 0)
      }));
    }, 400); // short delay for anticipation
  };

  return (
    <div className="game-animated">
      {/*<h2>Rock Paper Scissors</h2>*/}
      <div className="choices">
        {choices.map(choice => (
          <button key={choice} onClick={() => handlePlay(choice)}>
            {choice}
          </button>
        ))}
      </div>
      <div className="hands-row">
        {showHands && (
          <>
            <Hand type={userChoice} side="left" />
            <Hand type={computerChoice} side="right" />
          </>
        )}
      </div>
      {result && (
        <div className="result-box">
          <h2>{result.msg}</h2>
          <p>{result.detail}</p>
        </div>
      )}
      <div className="score-box">
        <span>Won = {score.win}</span>
        <span> | Lost = {score.lose}</span>
        <span> | Draw = {score.draw}</span>
      </div>
    </div>
  );
};

export default Game;
