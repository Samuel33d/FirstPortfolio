import { IconBuildingBank } from "@tabler/icons-react";

const EducationCard = ({ title, institute, date, time }) => {
  return (
    <article
      data-aos="fade-right"
      data-aos-once="true"
      className="flex flex-col gap-3 pb-6 transition-all sm:gap-5 sm:py-6 md:grid md:grid-cols-[auto,auto]"
    >
      <div>
        <h3 className="text-md sm:text-xl">{title}</h3>
        <span className="text-sm text-slate-800 dark:text-slate-400 sm:text-lg">
          {institute}
        </span>
      </div>

      <div className="flex flex-row-reverse justify-between   transition-all sm:justify-self-end md:flex-col ">
        <span className="flex w-fit rounded-full bg-green-200 px-2 font-bold text-green-900 ">
          {time}
        </span>
        <span className="flex items-center gap-2 text-sm text-slate-800 dark:text-slate-400 ">
          <IconBuildingBank /> {date}
        </span>
      </div>
    </article>
  );
};
export default EducationCard;
