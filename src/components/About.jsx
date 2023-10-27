import EducationCard from "./EducationCard";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-[1024px] px-2 mx-auto min-h-screen flex sm:justify-center justify-start items-start flex-col gap-5 sm:gap-10  py-5 sm:py-20 transition-all"
    >
      <article className="flex flex-col gap-1 w-full">
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
      </article>

      <article className="flex flex-col gap-1 w-full">
        <h2 className="text-2xl font-bold text-[#42446E] dark:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 sm:text-4xl transition-all">
          Educación
        </h2>

        <EducationCard
          title={
            "Licenciatura en Administración de Empresas mención Informatica"
          }
          institute={"Universidad Nacional Experimental Simón Rodríguez"}
          date={"Oct 2022 - Act"}
          time={"Full Time"}
        />
        <div className="border-b border-blue-500"></div>
        <EducationCard
          title={"Desarrollo Web Full Stack"}
          institute={"Academlo"}
          date={"Ago 2023 - Act"}
          time={"Part time"}
        />
      </article>
    </section>
  );
};
export default About;
