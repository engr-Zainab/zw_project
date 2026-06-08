import { motion } from "framer-motion";
import { IoHeartOutline } from "react-icons/io5";
import { useState } from "react";

function Hero() {
  const [isLoved, setIsLoved] = useState(false);
  const [bursts, setBursts] = useState([]);

  const createBurst = () => {
    const newBurst = Array.from({ length: 8 }).map((_, index) => ({
      id: Date.now() + index,
      symbol: ["✿", "✧", "♡", "💌"][Math.floor(Math.random() * 4)],
      x: Math.random() * 120 - 60,
      y: Math.random() * -120 - 20,
    }));

    setBursts(newBurst);

    setTimeout(() => {
      setBursts([]);
    }, 1500);
  };

  return (
    <section className="hero">
      <motion.p
        className="hero-top-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        ✿ a little something for you ✿
      </motion.p>

      <div className="hero-icons">
        <div className="hero-icon">💌</div>

        <div className="hero-icon hero-icon-small">✿</div>
      </div>

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="line-1">to my</span>
        <span className="line-2">favorite human</span>
      </motion.h1>

      <motion.p
        className="hero-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        This little corner of the internet exists for one reason — to tell you
        how much I love you. ♡
      </motion.p>

      <motion.div
        className={`heart-wrapper ${isLoved ? "loved" : ""}`}
        onClick={() => {
          setIsLoved(!isLoved);
          createBurst();
        }}
        animate={{
          scale: isLoved ? [1, 1.3, 1] : [1, 1.08, 1],
        }}
        transition={{
          duration: isLoved ? 0.6 : 2,
          repeat: isLoved ? 0 : Infinity,
        }}
      >
        <IoHeartOutline />

        {bursts.map((item) => (
          <motion.span
            key={item.id}
            className="burst-doodle"
            initial={{
              opacity: 1,
              x: 0,
              y: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 0,
              x: item.x,
              y: item.y,
              scale: 1.4,
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
          >
            {item.symbol}
          </motion.span>
        ))}
      </motion.div>

      <p className="tap-text"> {isLoved ? "forever yours ❤️" : ""}</p>
      <span className="hero-doodle flower-1">✿</span>
      <span className="hero-doodle flower-2">✿</span>

      <span className="hero-doodle star-1">✧</span>
      <span className="hero-doodle star-2">✧</span>

      <span className="hero-doodle heart-1">♡</span>
      <span className="hero-doodle heart-2">♡</span>
    </section>
  );
}

export default Hero;
