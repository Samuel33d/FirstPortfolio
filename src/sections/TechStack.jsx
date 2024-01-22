import { useTranslation } from "react-i18next";
import TechUnit from "../components/TechUnit";

const TechStack = () => {
  const { t } = useTranslation();

  return (
    <section
      id="techStack"
      className="max-w-[1024px] mx-auto  min-h-screen text-center py-1 sm:py-20 flex flex-col justify-center"
    >
      <div className="flex flex-col ">
        <h2 className="text-2xl font-bold text-[#42446E] dark:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 sm:text-4xl transition-all">
          {t("technologyStackTitle")}
        </h2>

        <span className="text-sm sm:text-lg mt-1">
          {t("technologyStackDescription")}
        </span>

        <section className="grid grid-cols-2 sm:grid-cols-4 sm:gap-5 transition-all place-items-center gap-2 my-16">
          <TechUnit image={"/TechStack/html.png"} skill={"Html"} />
          <TechUnit image={"/TechStack/css.png"} skill={"Css"} />
          <TechUnit image={"/TechStack/js.png"} skill={"javascript"} />
          <TechUnit image={"/TechStack/react.png"} skill={"react js"} />
          <TechUnit image={"/TechStack/tailwind.png"} skill={"tailwind"} />
          <TechUnit image={"/TechStack/node.png"} skill={"Node JS"} />
          <TechUnit image={"/TechStack/npm.png"} skill={"npm"} />
          <TechUnit image={"/TechStack/git.png"} skill={"git"} />
          <TechUnit image={"/TechStack/postgresql.png"} skill={"postgresql"} />
          <TechUnit image={"/TechStack/express.png"} skill={"express"} />
          <TechUnit image={"/TechStack/sequelizejs.png"} skill={"sequelize"} />
        </section>
      </div>
    </section>
  );
};
export default TechStack;
