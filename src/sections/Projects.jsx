import projects from "../db/projects.json";
import ProjectsList from "../components/ProjectsList";
import { useTranslation } from "react-i18next";
import { Glow, GlowCapture } from "@codaworks/react-glow";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <GlowCapture>
      <Glow>
        
        <section
          id="projects"
          className="mx-auto flex  min-h-screen max-w-[1024px] flex-col justify-center py-1 text-center sm:py-20"
        >
          <h2 className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 bg-clip-text text-2xl font-bold text-[#42446E] transition-all dark:text-transparent sm:text-4xl">
            {t("projectsTitle")}
          </h2>

          <span className="mt-1 text-sm sm:text-lg">
            {t("projectsDescription")}
          </span>
          <ProjectsList projects={projects} />
        </section>
      </Glow>
    </GlowCapture>
  );
};
export default Projects;
