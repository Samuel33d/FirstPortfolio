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
    <nav className="mx-auto w-full max-w-[1024px]">
      <div className="absolute top-[1rem] z-50">
        <h2
          className="flex items-center justify-center bg-gradient-to-r 
          from-blue-500 
          to-purple-500 bg-clip-text text-3xl font-bold text-[#42446E] transition-all hover:animate-pulse  dark:text-transparent "
        >
          <span className="text-4xl">{"<"}</span> S / B{" "}
          <span className="text-4xl">{">"}</span>
        </h2>
      </div>

      {/*Nav Mobile */}
      <div className=" fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-5 rounded-full bg-black/30 p-5  backdrop-blur-sm transition-all dark:text-white sm:hidden">
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
        }  fixed z-30 hidden w-full max-w-[1024px] items-center justify-end gap-5 bg-white p-5 transition-all dark:bg-[#191919] sm:flex`}
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
          className="transition-all hover:scale-125"
        >
          {isDarkMode ? <IconSun /> : <IconMoon />}
        </button>

        <div
          className="relative cursor-pointer transition-all hover:scale-110"
          onClick={() => setIsModalShow(!isModalShow)}
        >
          <IconWorld />
          <div
            className={`${
              isModalShow ? "opacity-100 " : "opacity-0 "
            } absolute right-0 mt-2 grid w-20 cursor-default gap-2 rounded-lg border  border-black bg-white p-1 text-sm transition-all dark:border-white dark:bg-[#363535]`}
          >
            <button
              disabled={isEnglish}
              onClick={() => {
                handleLngButton("en");
                setIsEnglish(true);
              }}
              className={`${
                isModalShow ? "block" : "hidden"
              } flex items-center justify-center gap-1 rounded-lg p-1 text-black transition-all hover:bg-gray-300 
              dark:text-white dark:hover:bg-gray-600`}
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
              } flex items-center justify-center gap-1 rounded-lg p-1 text-black transition-all hover:bg-gray-300 
              dark:text-white dark:hover:bg-gray-600`}
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
