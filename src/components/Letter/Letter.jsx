import "./Letter.css";

function Letter() {
  return (
    <section className="letter-section">
      <span className="letter-subtitle">a note for you 💌</span>

      <h2 className="letter-title">dear husband</h2>

      <div className="paper">
        <span className="doodle flower">✿</span>

        <span className="doodle star">✧</span>

        <h3>My darling,</h3>

        <div className="letter-content">
          <p>
            You make ordinary days feel special without even trying. Just
            knowing you're there brings me a kind of happiness and contentment
            that is hard to put into words.
          </p>

          <p>
            One of my favorite things is simply thinking about you. Sometimes
            I'll be doing something completely random and you cross my mind, and
            suddenly I'm smiling for no reason. And yes... sometimes my cheeks
            still turn red too. Hehe.
          </p>

          <p>Thank you for being so wonderfully you.</p>

          <p>I love you. Not just today. Every day. For all the days.</p>

          <p className="signature">— Yours, always ♡</p>
        </div>
      </div>
    </section>
  );
}

export default Letter;
