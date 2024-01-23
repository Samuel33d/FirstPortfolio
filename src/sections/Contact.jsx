import {
  IconBrandGithubFilled,
  IconBrandLinkedin,
  IconFileCv,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="relative mx-auto flex min-h-screen max-w-[1024px] flex-col items-center justify-center overflow-hidden pt-20 transition-all"
    >
      <h2 className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 bg-clip-text text-2xl font-bold text-[#42446E] transition-all dark:text-transparent sm:text-4xl">
        {t("contactTitle")}
      </h2>
      <span className="mt-1 text-sm sm:text-lg">{t("contactDescription")}</span>
      <div
        data-aos="fade-in"
        data-aos-once="true"
        className="flex w-full gap-3 px-2 transition-all sm:grid sm:grid-cols-2 sm:place-items-center"
      >
        <ContactForm />
        <div className="hidden sm:block ">
          <img
            className=" hover:animate-pulse "
            src="/memojiContact.png"
            alt=""
          />
        </div>
        <section className="absolute right-5 top-5 flex gap-2 sm:top-20">
          <div className="cursor-pointer  rounded-full bg-[#191919] p-1 hover:bg-cyan-500 dark:bg-white dark:hover:bg-cyan-500">
            <a
              href="https://drive.google.com/file/d/1hdul5Y_xQPAxU8UrubLkJNoGNhP-vaZz/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconFileCv className="text-white transition-all hover:text-[#191919] dark:text-[#191919] dark:hover:text-white" />
            </a>
          </div>
          <div className="cursor-pointer  rounded-full bg-[#191919] p-1 hover:bg-cyan-500 dark:bg-white dark:hover:bg-cyan-500">
            <a
              href="https://github.com/Samuel33d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandGithubFilled className="text-white transition-all hover:text-[#191919] dark:text-[#191919] dark:hover:text-white" />
            </a>
          </div>
          <div className=" cursor-pointer rounded-full bg-[#191919] p-1 hover:bg-cyan-500 dark:bg-white dark:hover:bg-cyan-500">
            <a
              href="https://www.linkedin.com/in/samuelbenedetti33/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandLinkedin className="text-white transition-all hover:text-[#191919] dark:text-[#191919] dark:hover:text-white" />
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};
export default Contact;
