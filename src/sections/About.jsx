import { useTranslation } from "react-i18next";
import EducationCard from "../components/EducationCard";

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="mx-auto flex min-h-screen max-w-[1024px] flex-col items-start justify-start gap-5 px-2 py-5 transition-all  sm:justify-center sm:gap-10 sm:py-20"
    >
      <article className="flex w-full flex-col gap-1">
        <h2 className="bg-gradient-to-r from-blue-500 via-purple-600 to-purple-500 bg-clip-text text-2xl font-bold text-[#42446E] transition-all dark:text-transparent sm:text-4xl ">
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
          className="mt-6 text-sm sm:text-xl"
        >
          {t("aboutParagraph2")}
        </p>
      </article>

      <article className="flex w-full flex-col gap-1">
        <h2 className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 bg-clip-text text-2xl font-bold text-[#42446E] transition-all dark:text-transparent sm:text-4xl">
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
