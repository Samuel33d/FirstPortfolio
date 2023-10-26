import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section
      id="home"
      className="max-w-[1024px] mx-auto min-h-screen flex flex-col lg:grid lg:grid-cols-[1fr,auto]  justify-center items-center gap-10 transition-all"
    >
      <div data-aos="fade-in" className="grid gap-1 transition-all">
        <h2 className="text-[#42446E] dark:text-white font-extrabold flex flex-col text-2xl self-end sm:text-4xl md:text-6xl   ">
          Hola👋, <span>mi nombre es</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 ">
            <span className="hover:text-red-500 transition-all">S</span>
            <span className="hover:text-red-500 transition-all">a</span>
            <span className="hover:text-red-500 transition-all">m</span>
            <span className="hover:text-red-500 transition-all">u</span>
            <span className="hover:text-red-500 transition-all">e</span>
            <span className="hover:text-red-500 transition-all">l</span>
            <span className="ml-3 hover:text-red-500 transition-all">B</span>
            <span className="hover:text-red-500 transition-all">e</span>
            <span className="hover:text-red-500 transition-all">n</span>
            <span className="hover:text-red-500 transition-all">e</span>
            <span className="hover:text-red-500 transition-all">d</span>
            <span className="hover:text-red-500 transition-all">e</span>
            <span className="hover:text-red-500 transition-all">t</span>
            <span className="hover:text-red-500 transition-all">t</span>
            <span className="hover:text-red-500 transition-all">i</span>
          </span>
        </h2>
        <span className="text-[#42446E] dark:text-white font-bold text-xl sm:text-3xl md:text-6xl">
          Creo experiencias web
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
            {" "}
            únicas.
          </span>
        </span>
      </div>
      <div data-aos="fade-in" className="px-2 transition-all">
        <div className="rounded-full overflow-hidden bg-gradient-to-b from-blue-500 via-red-500 to-purple-500  transition-all">
          <img
            className="p-2 rounded-full w-72 h-72 object-cover hover:grayscale hover:scale-105	transition-all "
            src="/portfolioimg.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
export default Home;
