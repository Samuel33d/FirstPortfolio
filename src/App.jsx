import { useState } from "react";
import "./App.css";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Navbar from "./components/Navbar";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(window.localStorage.getItem("theme")),
  );

  return (
    <main
      className={` ${
        isDarkMode ? "dark bg-[#191919] text-white" : " bg-white/40"
      } min-h-screen overflow-hidden bg-white/5  px-2 transition-all`}
    >
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Home />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
