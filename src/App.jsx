import Hero from "./components/Hero";
import "./App.css";
import StatsBar from "./components/StatsBar";
import LoveStory from "./components/LoveStory";
import LoveNotes from "./components/LoveNotes/LoveNotes";
import Letter from "./components/Letter/Letter";
import FooterLove from "./components/FooterLove/FooterLove";

function App() {
  return (
    <>
      <Hero />
      <StatsBar />
      <LoveStory />
      <LoveNotes />
      <Letter />
      <FooterLove />
    </>
  );
}

export default App;
