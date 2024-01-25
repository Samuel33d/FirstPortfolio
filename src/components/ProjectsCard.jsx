import { IconBrandGithubFilled, IconEye, IconLink } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

const ProjectsCard = ({ project, index }) => {
  const { t } = useTranslation();

  return (
    <article
      data-aos="zoom-in"
      data-aos-once="true"
      className={`${index % 2 ? "glow:border-blue-500/20 glow:bg-blue-500/20" : "glow:border-purple-500/20 glow:bg-purple-500/20"} g relative my-3 h-[387.95px] w-[290px] overflow-hidden rounded-lg border-2 border-black/10  bg-[#F3F8FF] text-left shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-105 dark:border-[#363535] dark:bg-[#363535] sm:w-[300px]`}
    >
      <header className="h-26 relative">
        <img src={project.projectImg} alt="" />
        <a
          href={project.siteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-0 top-0 grid h-full w-full place-items-center bg-black/40 opacity-0 transition-all duration-300 hover:opacity-100"
        >
          <IconEye
            size={50}
            color="white"
            className="animate-bounce duration-500"
          />
        </a>
      </header>
      <section className="flex flex-col gap-4 p-5 pb-0">
        <h4
          className={` ${index % 2 ? "glow:text-blue-500" : "glow:text-purple-500"}  border-none text-xl`}
        >
          {index === 6 ? t("project6Title") : project.name}
        </h4>
        <p className="h-[70px] text-[13px] ">{t(`project${index}`)}</p>
        <span className="text-[12px]">
          Tech stack :{" "}
          <span
            className={` ${index % 2 ? "glow:text-blue-500" : "glow:text-purple-500"}  text-gray-400 `}
          >
            {project.stack}
          </span>
        </span>
      </section>
      <footer className="absolute bottom-0 right-0 mt-1 flex items-center justify-end gap-3 px-6 pb-3">
        <a
          className={` ${index % 2 ? "glow:text-blue-500/60" : "glow:text-purple-500/60"} flex h-7 w-7 items-center justify-center transition-all`}
          href={project.siteLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconLink />
        </a>
        <a
          className={`${index % 2 ? "glow:bg-blue-500/60" : "glow:bg-purple-500/60"} relative h-7 w-7  rounded-full bg-[#191919] p-[2px] transition-all dark:bg-white ${
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
