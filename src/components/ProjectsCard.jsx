import { IconBrandGithubFilled, IconLink } from "@tabler/icons-react";

const ProjectsCard = ({ project }) => {
  return (
    <article
      data-aos="zoom-in"
      data-aos-once="true"
      className="transition-all dark:bg-[#363535] shadow-2xl border-2 w-[290px] sm:w-[300px] dark:border-[#363535]  rounded-lg overflow-hidden text-left my-3 "
    >
      <header className="relative h-26">
        <img src={project.projectImg} alt="" />
        <div className="absolute bg-black/40  top-0 transition-all left-0 right-0 bottom-0 "></div>
      </header>
      <section className="p-5 flex flex-col gap-4 pb-0">
        <h4 className="text-xl ">{project.name}</h4>
        <p className="text-[13px] h-[70px] ">{project.description}</p>
        <span className="text-[12px]">
          Tech stack : <span className="text-gray-400">{project.stack}</span>
        </span>
      </section>
      <footer className="flex justify-end gap-3 items-center pb-3 px-6 mt-1">
        <a
          className="w-7 h-7 flex justify-center items-center hover:text-blue-500 "
          href={project.siteLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconLink />
        </a>
        <a
          className={`relative w-7 h-7 bg-[#191919]  dark:bg-white p-[2px] rounded-full hover:bg-blue-500 dark:hover:bg-blue-500 ${
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
