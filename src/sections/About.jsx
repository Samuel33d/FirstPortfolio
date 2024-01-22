import { useTranslation } from "react-i18next";
import EducationCard from "../components/EducationCard";

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="max-w-[1024px] px-2 mx-auto min-h-screen flex sm:justify-center justify-start items-start flex-col gap-5 sm:gap-10  py-5 sm:py-20 transition-all"
    >
      <article className="flex flex-col gap-1 w-full">
        <h2 className="text-2xl font-bold text-[#42446E] dark:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-purple-500 sm:text-4xl transition-all ">
          {t("aboutTitle1")}
        </h2>
        <p
          data-aos="fade-right"
          data-aos-once="true"
          className="text-sm sm:text-xl"
        >
          {t("aboutParagraph1")}
        </p>
        <p
          data-aos="fade-right"
          data-aos-once="true"
          className="text-sm sm:text-xl mt-6"
        >
          {t("aboutParagraph2")}
        </p>
      </article>

      <article className="flex flex-col gap-1 w-full">
        <h2 className="text-2xl font-bold text-[#42446E] dark:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 sm:text-4xl transition-all">
          {t("aboutTitle2")}
        </h2>

        <EducationCard
          title={t("education1Lic")}
          institute={t("education1Inst")}
          date={"Oct 2022 - Act"}
          time={"Full Time"}
        />
        <div className="border-b border-blue-500"></div>
        <EducationCard
          title={t("education2Lic")}
          institute={t("education2Inst")}
          date={t("education2Date")}
          time={"Part time"}
        />
      </article>
    </section>
  );
};
export default About;
