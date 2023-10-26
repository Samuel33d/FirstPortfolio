import TechUnit from "./TechUnit";

const TechStack = () => {
  return (
    <section
      id="techStack"
      className="max-w-[1024px] mx-auto  min-h-screen text-center py-1 sm:py-20 flex flex-col justify-center"
    >
      <div className="flex flex-col ">
        <h2 className="text-2xl font-bold text-[#42446E] dark:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 sm:text-4xl transition-all">
          Mi Stack de Tecnologías
        </h2>

        <span className="text-sm sm:text-lg mt-1">
          Tecnologías con las que he trabajado
        </span>

        <section className="grid grid-cols-2 sm:grid-cols-3 sm:gap-5 mt-10 transition-all place-items-center ">
          <TechUnit image={"/TechStack/html.png"} />
          <TechUnit image={"/TechStack/css.png"} />
          <TechUnit image={"/TechStack/js.png"} />
          <TechUnit image={"/TechStack/react.png"} />
          <TechUnit image={"/TechStack/tailwind.png"} />
          <TechUnit image={"/TechStack/vscode.png"} />
        </section>
      </div>
    </section>
  );
};
export default TechStack;
