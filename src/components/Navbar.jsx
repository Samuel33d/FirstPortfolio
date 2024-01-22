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
import { IconWorld } from "@tabler/icons-react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isModalShow, setIsModalShow] = useState(false);

  const [isEnglish, setIsEnglish] = useState(false);

  const { t } = useTranslation();

  const handleChangeTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  window.localStorage.setItem("theme", JSON.stringify(isDarkMode));

  const handleLngButton = (lng) => {
    setIsEnglish(!isEnglish);
    i18n.changeLanguage(lng);
  };

  const handleLngButtonMobile = () => {
    if (isEnglish) {
      i18n.changeLanguage("es");
      setIsEnglish(false);
    } else {
      i18n.changeLanguage("en");
      setIsEnglish(true);
    }
  };

  return (
    <nav className="w-full max-w-[1024px] mx-auto">
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
        <button className="" onClick={handleLngButtonMobile}>
          <IconWorld />
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

        <div
          className="relative cursor-pointer hover:scale-110 transition-all"
          onClick={() => setIsModalShow(!isModalShow)}
        >
          <IconWorld />
          <div
            className={`${
              isModalShow ? "opacity-100 " : "opacity-0 "
            } absolute w-20 cursor-default right-0 bg-slate-800 rounded-lg border mt-2 text-sm grid gap-2 p-1 transition-all `}
          >
            <button
              disabled={isEnglish}
              onClick={() => {
                handleLngButton("en");
                setIsEnglish(true);
              }}
              className={`${
                isModalShow ? "block" : "hidden"
              } flex justify-center items-center gap-1 hover:bg-slate-700 p-1 transition-all rounded-lg text-white`}
            >
              <img src="/usa.png" alt="" />
              EN
            </button>
            <button
              disabled={!isEnglish}
              onClick={() => {
                handleLngButton("es");
                setIsEnglish(false);
              }}
              className={`${
                isModalShow ? "block" : "hidden"
              } flex justify-center items-center gap-1 hover:bg-slate-600 transition-all rounded-lg p-1 text-white`}
            >
              <img src="/espana.png" alt="" />
              ES
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
