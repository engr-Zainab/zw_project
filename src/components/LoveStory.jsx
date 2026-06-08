import "./LoveStory.css";

import couplePhoto from "../assets/couplepic.jpeg";

function LoveStory() {
  return (
    <section className="love-story">
      <span className="story-subtitle"> home ✿ </span>

      <h2 className="couple-names"> Zainab & Waqas</h2>
      <div className="photo-wrapper">
        <div className="photo-frame">
          <img src={couplePhoto} alt="Our Story" className="main-photo" />
        </div>
      </div>

      <p className="love-caption">Together is my favorite place to be ♡</p>
    </section>
  );
}

export default LoveStory;
