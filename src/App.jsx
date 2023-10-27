import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <main
      className={` ${
        isDarkMode && "dark bg-[#191919] text-white"
      } min-h-screen  px-2 overflow-hidden transition-all`}
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
