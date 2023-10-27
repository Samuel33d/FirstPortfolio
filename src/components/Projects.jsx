import projects from "../db/projects.json";
import ProjectsList from "./ProjectsList";

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-[1024px] mx-auto  min-h-screen text-center py-1 sm:py-20 flex flex-col justify-center"
    >
      <h2 className="text-2xl font-bold text-[#42446E] dark:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 sm:text-4xl transition-all">
        Proyectos
      </h2>

      <span className="text-sm sm:text-lg mt-1">Apliaciones que he creado</span>
      <ProjectsList projects={projects} />
    </section>
  );
};
export default Projects;
