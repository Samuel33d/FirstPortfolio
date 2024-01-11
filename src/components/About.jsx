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
          Soy un apasionado desarrollador Full Stack de 22 años con experiencia
          en tecnologías esenciales como HTML, CSS y JavaScript, así como en
          frameworks modernos como React JS. Mi enfoque se ha expandido hacia el
          desarrollo del lado del servidor, utilizando Node.js, Express y
          Sequelize para construir APIs eficientes y trabajar con bases de datos
          relacionales, especialmente PostgreSQL. Estoy constantemente inmerso
          en el estudio y la actualización de mis habilidades para ofrecer
          soluciones web innovadoras y de vanguardia
        </p>
        <p
          data-aos="fade-right"
          data-aos-once="true"
          className="text-sm sm:text-xl mt-6"
        >
          Mi objetivo es crear experiencias web completas y poderosas que
          cautiven a los usuarios. Estoy ansioso por colaborar en proyectos
          innovadores que impulsen el futuro de la web.
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
