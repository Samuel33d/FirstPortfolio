import { IconBuildingBank } from "@tabler/icons-react";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-[1024px] px-2 mx-auto min-h-screen flex sm:justify-center justify-start items-start flex-col gap-5 sm:gap-10  py-5 sm:py-20 transition-all"
    >
      <div className="flex flex-col gap-1 w-full">
        <h2 className="text-2xl font-bold text-[#42446E] dark:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-purple-500 sm:text-4xl transition-all ">
          Sobre mí
        </h2>
        <p
          data-aos="fade-right"
          data-aos-once="true"
          className="text-sm sm:text-xl"
        >
          Soy un apasionado desarrollador Frontend de 21 años, actualmente
          ampliando mis habilidades. Tengo experiencia en tecnologías básicas
          como HTML, CSS y JavaScript, y estoy profundizando en bibliotecas y
          frameworks modernos como React JS. Mi objetivo es crear experiencias
          web atractivas y efectivas que cautiven a los usuarios. Estoy ansioso
          por seguir aprendiendo y colaborar en proyectos innovadores que
          impulsen el futuro de la web.
        </p>
      </div>

      <div className="flex flex-col gap-1 w-full">
        <h2 className="text-2xl font-bold text-[#42446E] dark:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 sm:text-4xl transition-all">
          Educación
        </h2>
        <div
          data-aos="fade-right"
          data-aos-once="true"
          className="flex flex-col gap-3 md:grid md:grid-cols-[auto,auto] sm:gap-5 transition-all   pb-6 sm:py-6"
        >
          <div>
            <h3 className="text-md sm:text-xl">
              Licenciatura en Administración de Empresas mención Informatica
            </h3>
            <span className="text-sm text-slate-800 dark:text-slate-400 sm:text-lg">
              Universidad Nacional Experimental Simón Rodríguez
            </span>
          </div>

          <div className="flex flex-row-reverse justify-between   transition-all md:flex-col sm:justify-self-end ">
            <span className="flex bg-green-200 w-fit px-2 rounded-full text-green-900 font-bold ">
              Full Time
            </span>
            <span className="flex text-sm text-slate-800 dark:text-slate-400 gap-2 items-center ">
              <IconBuildingBank /> Oct 2022 - Act
            </span>
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-once="true"
          className="flex flex-col gap-3 md:grid md:grid-cols-[auto,auto] sm:gap-5 transition-all py-6 border-t border-blue-500"
        >
          <div>
            <h3 className="text-md sm:text-xl">Desarrollo Web Full Stack</h3>
            <span className="text-sm text-slate-800 dark:text-slate-400 sm:text-lg">
              Academlo
            </span>
          </div>
          <div className="flex flex-row-reverse justify-between   transition-all  md:flex-col sm:justify-self-end">
            <span className="flex bg-green-200 w-fit px-2 rounded-full text-green-900 font-bold ">
              Part time
            </span>
            <span className="flex text-sm text-slate-800 dark:text-slate-400 gap-2 items-center">
              <IconBuildingBank /> Ago 2023 - Act
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
