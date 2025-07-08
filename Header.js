import React from "react";
import "./Header.css";
import { FaBomb, FaHatWizard, FaChessKnight, FaFistRaised, FaSmile, FaCar, FaFutbol, FaHeart, FaUsers, FaUser, FaPlus, FaSearch } from "react-icons/fa";

function Header() {
  return (
    <header className="main-header">
      <div className="header-top">
        <div className="logo-area">
          {/* Replace with your own SVG or image if you like */}
          <img src="/images/kids-logo.png" alt="Kids" className="kids-icon" />
          <span className="logo-text">
            <span className="logo-main">BattleHands</span>
          </span>

        </div>
        <button className="game-box-btn">My Game Box</button>
        <div className="search-bar-area">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-btn"><FaSearch /></button>
        </div>
      </div>
      <nav className="header-nav">
        <div className="nav-item"><FaBomb /><span>ACTION</span></div>
        <div className="nav-item"><FaHatWizard /><span>ADVENTURE</span></div>
        <div className="nav-item"><FaChessKnight /><span>CLASSIC</span></div>
        <div className="nav-item"><FaFistRaised /><span>FIGHTING</span></div>
        <div className="nav-item"><FaSmile /><span>KIDS</span></div>
        <div className="nav-item"><FaCar /><span>RACING</span></div>
        <div className="nav-item"><FaFutbol /><span>SPORT</span></div>
        <div className="nav-item"><FaHeart /><span>OUR</span></div>
        <div className="nav-item"><FaUsers /><span>3-4 PLAYER</span></div>
        <div className="nav-item"><FaUser /><span>1 PLAYER</span></div>
        <div className="nav-item"><FaPlus /><span>MORE</span></div>
      </nav>
    </header>
  );
}

export default Header;
