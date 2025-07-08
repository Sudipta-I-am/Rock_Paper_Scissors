import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

// --- Header Component ---
function Header() {
  return (
    <header className="main-header">
      <div className="header-top">
        <div className="logo-area">
          <img src="/images/kids-logo.png" alt="Kids" className="kids-icon" />
          <span className="logo-text">
            <span className="logo-main">BattleHands</span>
          </span>

        </div>
        <button className="game-box-btn">My Game Box</button>
        <div className="search-bar-area">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-btn">🔍</button>
        </div>
      </div>
      <nav className="header-nav">
        <div className="nav-item">ACTION</div>
        <div className="nav-item">ADVENTURE</div>
        <div className="nav-item">CLASSIC</div>
        <div className="nav-item">FIGHTING</div>
        <div className="nav-item">KIDS</div>
        <div className="nav-item">RACING</div>
        <div className="nav-item">SPORT</div>
        <div className="nav-item">OUR</div>
        <div className="nav-item">2 PLAYERS</div>
        <div className="nav-item">1 PLAYER</div>
        <div className="nav-item">MORE</div>
      </nav>
    </header>
  );
}

// --- Game Logic ---
const choices = ['Rock', 'Paper', 'Scissors'];
const imageMap = {
  Rock: '/images/Rock.jpeg',
  Paper: '/images/Paper.jpeg',
  Scissors: '/images/Scissor.jpeg',
};

function getResult(user, computer) {
  if (user === computer) return "It's a Draw!";
  if (
    (user === 'Rock' && computer === 'Scissors') ||
    (user === 'Paper' && computer === 'Rock') ||
    (user === 'Scissors' && computer === 'Paper')
  ) {
    return 'You Win!';
  }
  return 'You Lose!';
}

function App() {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [score, setScore] = useState({ win: 0, lose: 0, draw: 0 });
  const [champion, setChampion] = useState('');

  const handlePlay = (choice) => {
    if (champion) return;

    const compChoice = choices[Math.floor(Math.random() * choices.length)];
    const res = getResult(choice, compChoice);

    setUserChoice(choice);
    setComputerChoice(compChoice);
    setResult(res);

    setScore((prev) => {
      const newScore = {
        win: prev.win + (res === 'You Win!' ? 1 : 0),
        lose: prev.lose + (res === 'You Lose!' ? 1 : 0),
        draw: prev.draw + (res === "It's a Draw!" ? 1 : 0),
      };

      if (newScore.win === 5) setChampion('You are the Champion!');
      else if (newScore.lose === 5) setChampion('Computer is the Champion!');

      return newScore;
    });
  };

  const handleRestart = () => {
    setChampion('');
    setUserChoice('');
    setComputerChoice('');
    setResult('');
    setScore({ win: 0, lose: 0, draw: 0 });
  };

  // Hand animation variants
  const handVariants = {
    bounce: {
      y: [0, -20, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <>
      <Header />
      <div className="App">
        {/* Intro Section */}
        <div className="intro-section">
          <div className="intro-header">Play Online</div>
          <div className="intro-content">
            <div className="intro-left">
              <h2>Decide Your Destiny—One Throw at a Time!</h2>
              <p>
                Challenge a friend or test your luck against fate! Rock Paper Scissors brings instant fun to any moment—no coins needed.
              </p>
            </div>
            <div className="intro-right">
              <h2>Invite a Friend</h2>
              <p>
                Click <b>Play With a Buddy</b> to create a private room. Share the link and start playing together instantly.
              </p>
              <h3>Or play with the computer:</h3>
              <p>
                Try <b>Play with Computer</b> to test your skills against our AI opponent.
              </p>
            </div>
          </div>
          <div className="intro-buttons">
            {/*<button className="intro-btn">GET STARTED</button>*/}
            <button className="intro-btn"
              onClick={() => {
               navigator.clipboard.writeText(window.location.href);
               alert("Game link copied! Send it to your friend.");
              }}
            >
            PLAY WITH A BUDDY
            </button>
            <div className="intro-or">... or play with ...</div>
            <button className="intro-btn secondary">PLAY WITH COMPUTER</button>
          </div>
        </div>

        {/* Animated Heading */}
        <motion.h1
          className="animated-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ color: "#ff6fa7", scale: 1.05, textShadow: "0px 4px 20px #ff8ecf" }}
        >
          Rock Paper Scissors
        </motion.h1>

        {/* Main Image */}
        <div className="image-container">
          <img
            src="/images/rock-paper-scissors-neon-icons.jpg"
            alt="Rock Paper Scissors"
            className="rps-img"
          />
        </div>

        {/* Game Buttons */}
        <div className="button-row">
          {choices.map((choice) => (
            <motion.button
              key={choice}
              className="rps-btn"
              onClick={() => handlePlay(choice)}
              disabled={!!champion}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {choice}
            </motion.button>
          ))}
        </div>

        {/* Champion Banner */}
        {champion && (
          <motion.div
            className="champion-banner"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {champion}
          </motion.div>
        )}

        {/* Result Section */}
        <div className="result-section">
          {userChoice && computerChoice && (
            <div className="choices-show">
              <div>
                <div className="choice-label">You</div>
                <motion.img 
                  src={imageMap[userChoice]} 
                  alt={userChoice} 
                  className="choice-img"
                  variants={handVariants}
                  animate="bounce"
                />
                <div>{userChoice}</div>
              </div>
              <div>
                <div className="choice-label">Computer</div>
                <motion.img 
                  src={imageMap[computerChoice]} 
                  alt={computerChoice} 
                  className="choice-img"
                  variants={handVariants}
                  animate="bounce"
                />
                <div>{computerChoice}</div>
              </div>
            </div>
          )}

          {result && (
            <motion.div 
              className="result-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className={
                result === "You Win!" ? "result-text-win" :
                result === "You Lose!" ? "result-text-lose" :
                result === "It's a Draw!" ? "result-text-draw" :
                ""
              }>
                {result}
              </div>
            </motion.div>
          )}

          <div className="score-board">
            <span>Won: {score.win}</span>
            <span> | Lost: {score.lose}</span>
            <span> | Draw: {score.draw}</span>
            <motion.button 
              className="rps-btn restart-btn" 
              onClick={handleRestart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Restart
            </motion.button>
          </div>
        </div>

        {/* Description Section */}
        <div className="description-section">
          <h2>How to Play</h2>
          <ul>
            <li>Choose Rock, Paper, or Scissors by clicking a button</li>
            <li>Rock crushes Scissors, Scissors cut Paper, Paper covers Rock</li>
            <li>First to win 5 rounds becomes the champion!</li>
          </ul>
          <p>
            Effortless, lightning-fast, and endlessly entertaining—your go-to for quick fun and friendly challenges.
          </p>
        </div>

        {/* Footer */}
        <footer className="footer">
          <nav className="footer-nav">
            <a href="#help">Help &amp; Support</a>
            <a href="#contact">Contact Us</a>
            <a href="#terms">Terms</a>
            <a href="#privacy">Privacy Policy</a>
          </nav>
          <div className="footer-copy">
            Crafted with ✨ and 🤖 at <b>PaperRockVerse</b> &mdash; 2025
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
