import ProjectsCard from "./ProjectsCard";

const ProjectsList = ({ projects }) => {
  return (
    <section className="my-5 grid place-items-center grid-cols-[repeat(auto-fit,minmax(290px,1fr))] sm:gap-2">
      {projects.map((project) => (
        <ProjectsCard key={project.siteLink} project={project} />
      ))}
    </section>
  );
};
export default ProjectsList;
