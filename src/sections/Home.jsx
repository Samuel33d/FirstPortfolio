import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-[1024px] flex-col items-center justify-center  gap-10 transition-all lg:grid lg:grid-cols-[1fr,auto]"
    >
      <div data-aos="fade-in" className="grid gap-1 transition-all">
        <h2 className="flex flex-col self-end text-2xl font-extrabold text-[#42446E] dark:text-white sm:text-4xl md:text-6xl   ">
          {t("welcome")}👋, <span>{t("presentation")}</span>
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent ">
            <span className="transition-all hover:text-red-500">S</span>
            <span className="transition-all hover:text-red-500">a</span>
            <span className="transition-all hover:text-red-500">m</span>
            <span className="transition-all hover:text-red-500">u</span>
            <span className="transition-all hover:text-red-500">e</span>
            <span className="transition-all hover:text-red-500">l</span>
            <span className="ml-3 transition-all hover:text-red-500">B</span>
            <span className="transition-all hover:text-red-500">e</span>
            <span className="transition-all hover:text-red-500">n</span>
            <span className="transition-all hover:text-red-500">e</span>
            <span className="transition-all hover:text-red-500">d</span>
            <span className="transition-all hover:text-red-500">e</span>
            <span className="transition-all hover:text-red-500">t</span>
            <span className="transition-all hover:text-red-500">t</span>
            <span className="transition-all hover:text-red-500">i</span>
          </span>
        </h2>
        <span className="text-xl font-bold text-[#42446E] dark:text-white sm:text-3xl md:text-6xl">
          {t("homePhrase")}
          <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
            {" "}
            {t("homePhraseEnd")}
          </span>
        </span>
      </div>
      <div data-aos="fade-in" className="px-2 transition-all">
        <div className="rounded-full">
          <img
            className="duration-700 hover:scale-105 hover:grayscale"
            src="/memoji.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
export default Home;
