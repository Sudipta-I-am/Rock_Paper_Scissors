import React from 'react';
import { motion } from 'framer-motion';

// Correct import paths (go up one level to src, then into assets)
import RockImg from '../assets/Rock.jpeg';
import PaperImg from '../assets/Paper.jpeg';
import ScissorImg from '../assets/Scissor.jpeg';

const handImages = {
  Rock: RockImg,
  Paper: PaperImg,
  Scissors: ScissorImg, // Make sure you use "Scissors" in your game logic
};

const shakeAnimation = {
  initial: { x: 0 },
  animate: { x: [0, -20, 20, -10, 10, 0] },
  transition: { duration: 0.6 }
};

const Hand = ({ type, side }) => (
  <motion.img
    src={handImages[type]}
    alt={type}
    className={`hand ${side}`}
    {...shakeAnimation}
    width={180}
    height={180}
    style={{ margin: '0 40px' }}
  />
);

export default Hand;
