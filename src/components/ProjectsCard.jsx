import { IconBrandGithubFilled, IconEye, IconLink } from "@tabler/icons-react";
const ProjectsCard = ({ project }) => {
  return (
    <article className="transition-all dark:bg-[#363535] shadow-2xl border-2 w-[290px] sm:w-[300px] dark:border-[#363535]  rounded-lg overflow-hidden text-left my-3 hover:scale-105 hover:-translate-y-3 duration-300">
      <header className="relative h-26">
        <img src={project.projectImg} alt="" />
        <a
          href={project.siteLink}
          className="absolute bg-black/40 top-0 left-0 w-full h-full opacity-0 hover:opacity-100 duration-300 transition-all grid place-items-center"
        >
          <IconEye
            size={50}
            color="white"
            className="animate-bounce duration-500"
          />
        </a>
      </header>
      <section className="p-5 flex flex-col gap-4 pb-0">
        <h4 className="text-xl dark:hover:text-cyan-500 transition-all">
          {project.name}
        </h4>
        <p className="text-[13px] h-[70px] ">{project.description}</p>
        <span className="text-[12px]">
          Tech stack : <span className="text-gray-400">{project.stack}</span>
        </span>
      </section>
      <footer className="flex justify-end gap-3 items-center pb-3 px-6 mt-1">
        <a
          className="w-7 h-7 flex justify-center items-center hover:text-cyan-500 transition-all"
          href={project.siteLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconLink />
        </a>
        <a
          className={`relative w-7 h-7 bg-[#191919]  dark:bg-white p-[2px] rounded-full hover:bg-cyan-500 dark:hover:bg-cyan-500 transition-all ${
            project.githubLink === undefined ? "hidden" : "block"
          }`}
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithubFilled className="absolute -bottom-[0.16rem] text-white dark:text-[#363535]" />
        </a>
      </footer>
    </article>
  );
};
export default ProjectsCard;
