import { IconBuildingBank } from "@tabler/icons-react";

const EducationCard = ({ title, institute, date, time }) => {

  return (
    <article
      data-aos="fade-right"
      data-aos-once="true"
      className="flex flex-col gap-3 md:grid md:grid-cols-[auto,auto] sm:gap-5 transition-all   pb-6 sm:py-6"
    >
      <div>
        <h3 className="text-md sm:text-xl">{title}</h3>
        <span className="text-sm text-slate-800 dark:text-slate-400 sm:text-lg">
          {institute}
        </span>
      </div>

      <div className="flex flex-row-reverse justify-between   transition-all md:flex-col sm:justify-self-end ">
        <span className="flex bg-green-200 w-fit px-2 rounded-full text-green-900 font-bold ">
          {time}
        </span>
        <span className="flex text-sm text-slate-800 dark:text-slate-400 gap-2 items-center ">
          <IconBuildingBank /> {date}
        </span>
      </div>
    </article>
  );
};
export default EducationCard;
