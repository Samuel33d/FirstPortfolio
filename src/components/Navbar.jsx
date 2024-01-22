import {
  IconBrandCss3,
  IconBriefcase2,
  IconHome2,
  IconMailBolt,
  IconMoon,
  IconSun,
  IconUser,
} from "@tabler/icons-react";

import { Link } from "react-scroll";
import i18n from "../plugins/i18n";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IconLanguageHiragana } from "@tabler/icons-react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isEnglish, setIsSpanish] = useState(false);

  const { t } = useTranslation();

  const handleChangeTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  window.localStorage.setItem("theme", JSON.stringify(isDarkMode));

  const handleLngButton = () => {
    setIsSpanish(!isEnglish);
    i18n.changeLanguage(isEnglish ? "es" : "en");
  };

  return (
    <nav className="w-full  max-w-[1024px] mx-auto  ">
      <div className="absolute z-50 top-[1rem]">
        <h2
          className="flex   justify-center items-center transition-all 
          text-[#42446E] 
          dark:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 text-3xl font-bold  hover:animate-pulse "
        >
          <span className="text-4xl">{"<"}</span> S / B{" "}
          <span className="text-4xl">{">"}</span>
        </h2>
      </div>

      {/*Nav Mobile */}
      <div className=" flex sm:hidden fixed left-1/2 -translate-x-1/2 p-5 gap-5 bottom-4 bg-black/30 dark:text-white  backdrop-blur-sm rounded-full z-50 transition-all">
        <Link
          to="home"
          offset={-100}
          smooth={true}
          duration={500}
          spy={true}
          activeClass="linkActiveMobile"
          className="cursor-pointer"
        >
          <span>
            <IconHome2 />
          </span>
        </Link>
        <Link
          to="about"
          offset={0}
          smooth={true}
          duration={500}
          spy={true}
          activeClass="linkActiveMobile"
          className="cursor-pointer"
        >
          <span>
            <IconUser to="about" />
          </span>
        </Link>
        <Link
          to="techStack"
          offset={0}
          smooth={true}
          duration={500}
          spy={true}
          activeClass="linkActiveMobile"
          className="cursor-pointer"
        >
          <span>
            <IconBrandCss3 />
          </span>
        </Link>
        <Link
          to="projects"
          offset={0}
          smooth={true}
          duration={500}
          spy={true}
          activeClass="linkActiveMobile"
          className="cursor-pointer"
        >
          <span>
            <IconBriefcase2 />
          </span>
        </Link>
        <Link
          to="contact"
          offset={0}
          smooth={true}
          duration={500}
          spy={true}
          activeClass="linkActiveMobile"
          className="cursor-pointer"
        >
          <span>
            <IconMailBolt to="/" />
          </span>
        </Link>
        <button onClick={handleChangeTheme} className="cursor-pointer">
          {isDarkMode ? <IconSun /> : <IconMoon />}
        </button>
        <button className="hover:text-red-700" onClick={handleLngButton}>
          <IconLanguageHiragana />
        </button>
      </div>

      {/*Nav Desktop */}
      <div
        className={`${
          scroll > 0 && "shadow-lg"
        }  z-30 fixed hidden sm:flex gap-5 justify-end items-center w-full dark:bg-[#191919] p-5 max-w-[1024px] bg-white transition-all`}
      >
        <Link
          to="home"
          offset={-100}
          smooth={true}
          duration={500}
          spy={true}
          activeClass="linkActive"
          className="cursor-pointer"
        >
          <span>{t("navHome")}</span>
        </Link>
        <Link
          to="about"
          offset={0}
          smooth={true}
          duration={500}
          spy={true}
          activeClass="linkActive"
          className="cursor-pointer"
        >
          <span>{t("navAboutMe")}</span>
        </Link>
        <Link
          to="techStack"
          offset={0}
          smooth={true}
          duration={500}
          spy={true}
          activeClass="linkActive"
          className="cursor-pointer"
        >
          <span>Stack</span>
        </Link>
        <Link
          to="projects"
          offset={0}
          smooth={true}
          duration={500}
          spy={true}
          activeClass="linkActive"
          className="cursor-pointer"
        >
          <span>{t("navProjects")}</span>
        </Link>
        <Link
          to="contact"
          offset={0}
          smooth={true}
          duration={500}
          spy={true}
          activeClass="linkActive"
          className="cursor-pointer"
        >
          <span>{t("navContact")}</span>
        </Link>

        <button
          onClick={handleChangeTheme}
          className="hover:scale-125 transition-all"
        >
          {isDarkMode ? <IconSun /> : <IconMoon />}
        </button>

        <button
          className="hover:scale-125 transition-all"
          onClick={handleLngButton}
        >
          <IconLanguageHiragana />
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
