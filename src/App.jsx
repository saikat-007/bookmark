import Contact from "./components/Contact";
import Download from "./components/Download";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Question from "./components/Question";

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Download/>
      <Question/>
      <Contact/>
    </div>
  )
}