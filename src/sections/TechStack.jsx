import { useTranslation } from "react-i18next";
import TechUnit from "../components/TechUnit";

const TechStack = () => {
  const { t } = useTranslation();

  return (
    <section
      id="techStack"
      className="mx-auto flex  min-h-screen max-w-[1024px] flex-col justify-center py-1 text-center sm:py-20"
    >
      <div className="flex flex-col ">
        <h2 className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 bg-clip-text text-2xl font-bold text-[#42446E] transition-all dark:text-transparent sm:text-4xl">
          {t("technologyStackTitle")}
        </h2>

        <span className="mt-1 text-sm sm:text-lg">
          {t("technologyStackDescription")}
        </span>

        <section className="my-16 grid grid-cols-2 place-items-center gap-2 transition-all sm:grid-cols-4 sm:gap-5">
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
