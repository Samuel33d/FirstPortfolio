import { useState } from "react";
import "./App.css";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Navbar from "./components/Navbar";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import WhaMeBtn from "./components/WhaMeBtn";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(window.localStorage.getItem("theme")),
  );

  return (
    <main
      className={` ${
        isDarkMode ? "dark bg-[#191919] text-white" : " bg-[#F3F8FF]"
      }  min-h-screen   overflow-hidden px-2 transition-all`}
    >
      <WhaMeBtn />
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
