import { useState } from "react";
import "./LoveNotes.css";

function LoveNotes() {
  const [opened, setOpened] = useState(null);
  const loveNotes = [
    {
      question: "If you were a season",
      answer: "Spring",
      note: "Because you bring color to everything.",
    },

    {
      question: "If you were a place",
      answer: "Home",
      note: "Because you're where I belong.",
    },

    {
      question: "If you were a star",
      answer: "The brightest",
      note: "You make every night better.",
    },

    {
      question: "If you were a wish",
      answer: "Already granted",
      note: "Because I found you.♡",
    },
  ];

  return (
    <section className="love-notes">
      <span className="notes-subtitle">little things about you ✿</span>

      <h2>if you were a...</h2>
      <div className="notes-grid">
        {loveNotes.map((item, index) => (
          <div
            className={`note ${opened === index ? "open" : ""}`}
            onClick={() => setOpened(opened === index ? null : index)}
          >
            {opened === index ? (
              <>
                <h3>{item.question}</h3>
                <h4>{item.answer}</h4>
                <p>{item.note}</p>
              </>
            ) : (
              <span className="heart">♡</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default LoveNotes;
