function StatsBar() {
  const nikkahDate = new Date("2026-04-08");

  const today = new Date();

  const differenceInTime = today.getTime() - nikkahDate.getTime();

  const daysTogether = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
  return (
    <section className="stats-bar">
      <div className="stat">
        <h3>{daysTogether}</h3>
        <p>days together</p>
      </div>

      <div className="stat">
        <h3>∞</h3>
        <p>reasons to smile</p>
      </div>

      <div className="stat">
        <h3>100%</h3>
        <p>my heart → yours</p>
      </div>

      <div className="stat">
        <h3>1</h3>
        <p>favorite person</p>
      </div>
    </section>
  );
}

export default StatsBar;
