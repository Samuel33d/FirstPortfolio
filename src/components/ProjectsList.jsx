import ProjectsCard from "./ProjectsCard";

const ProjectsList = ({ projects }) => {
  return (
    <section className="my-5 grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] place-items-center sm:gap-2">
      {projects.map((project, index) => (
        <ProjectsCard index={index} key={project.siteLink} project={project} />
      ))}
    </section>
  );
};
export default ProjectsList;
