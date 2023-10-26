const ProjectsCard = ({ children }) => {
  return (
    <article
      data-aos="zoom-in"
      data-aos-once="true"
      className="hover:scale-110 transition-all dark:bg-[#363535] shadow-2xl border-2 w-[290px] sm:w-[300px] dark:border-[#363535]  rounded-lg overflow-hidden text-left my-3 "
    >
      {children}
    </article>
  );
};
export default ProjectsCard;
