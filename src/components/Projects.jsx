import { IconBrandGithubFilled, IconLink } from "@tabler/icons-react";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-[1024px] mx-auto  min-h-screen text-center py-1 sm:py-20 flex flex-col justify-center"
    >
      <h2 className="text-2xl font-bold text-[#42446E] dark:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 sm:text-4xl transition-all">
        Proyectos
      </h2>

      <span className="text-sm sm:text-lg mt-1">Apliaciones que he creado</span>
      <section className="my-5 grid place-items-center grid-cols-[repeat(auto-fit,minmax(290px,1fr))] sm:gap-2">
        <ProjectsCard>
          <header className="relative h-26">
            <img src="/ProjectsImg/proyecto1.png" alt="" />
            <div className="absolute bg-black/40  top-0 transition-all left-0 right-0 bottom-0 "></div>
          </header>
          <section className="p-5 flex flex-col gap-4 pb-0">
            <h4 className="text-xl ">Front-End Store</h4>
            <p className="text-[13px] h-[70px]">
              Proyecto de una tienda especializada en la venta de ropa con
              estampados de distintas tecnologías para FrontEnd.
            </p>
            <span className="text-[12px]">
              Tech stack : <span className="text-gray-400">HTML , CSS.</span>
            </span>
          </section>
          <footer className="flex justify-end gap-3 items-center pb-3 px-6 mt-1">
            <a
              className="w-7 h-7 flex justify-center items-center hover:text-blue-500 "
              href="https://eloquent-booth-963b45.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLink />
            </a>
          </footer>
        </ProjectsCard>

        <ProjectsCard>
          <header className="relative h-26">
            <img src="/ProjectsImg/proyecto2.png" alt="" />
            <div className="absolute bg-black/40  top-0 transition-all left-0 right-0 bottom-0 "></div>
          </header>
          <section className="p-5 flex flex-col gap-4 pb-0">
            <h4 className="text-xl ">Blog de Café</h4>
            <p className="text-[13px] h-[70px]">
              Proyecto sobre un blog en el cual se habla de café, y se venden
              algunos servicios.
            </p>
            <span className="text-[12px]">
              Tech stack : <span className="text-gray-400">HTML , CSS.</span>
            </span>
          </section>
          <footer className="flex justify-end gap-3 items-center pb-3 px-6 mt-1">
            <a
              className="w-7 h-7 flex justify-center items-center hover:text-blue-500 "
              href="https://frosty-kilby-6d48fa.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLink />
            </a>
          </footer>
        </ProjectsCard>

        <ProjectsCard>
          <header className="relative h-26">
            <img src="/ProjectsImg/proyecto5.png" alt="" />
            <div className="absolute bg-black/40  top-0 transition-all left-0 right-0 bottom-0 "></div>
          </header>
          <section className="p-5 flex flex-col gap-4 pb-0">
            <h4 className="text-xl ">Pokedex App</h4>
            <p className="text-[13px] h-[70px]">
              Aplicación sobre pokemon, en el cual puedes ver información sobre
              los distintos tipos de pokemon, así como buscar por tipos y
              nombres.
            </p>
            <span className="text-[12px]">
              Tech stack :{" "}
              <span className="text-gray-400">
                HTML , CSS, ReactJS, Tailwind.
              </span>
            </span>
          </section>
          <footer className="flex justify-end gap-3 items-center pb-3 px-6 mt-1">
            <a
              className="w-7 h-7 flex justify-center items-center hover:text-blue-500 "
              href="https://pokemonappsb.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLink />
            </a>
            <a
              className="relative w-7 h-7 bg-[#191919]  dark:bg-white p-[2px] rounded-full hover:bg-blue-500 dark:hover:bg-purple-500"
              href="https://github.com/Samuel33d/pokemonapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandGithubFilled className="absolute -bottom-[0.16rem] text-white dark:text-[#363535]" />
            </a>
          </footer>
        </ProjectsCard>

        <ProjectsCard>
          <header className="relative h-26">
            <img src="/ProjectsImg/proyecto7.png" alt="" />
            <div className="absolute bg-black/40  top-0 transition-all left-0 right-0 bottom-0 "></div>
          </header>
          <section className="p-5 flex flex-col gap-4 pb-0">
            <h4 className="text-xl ">Huddle</h4>
            <p className="text-[13px] h-[70px]">
              Layout sencillo para la práctica de tecnologías como FlexBox y
              Grid .
            </p>
            <span className="text-[12px]">
              Tech stack : <span className="text-gray-400">HTML , CSS.</span>
            </span>
          </section>
          <footer className="flex justify-end gap-3 items-center pb-3 px-6 mt-1">
            <a
              className="w-7 h-7 flex justify-center items-center hover:text-blue-500 "
              href="https://elegant-phoenix-c337ae.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLink />
            </a>
            <a
              className="relative w-7 h-7 bg-[#191919]  dark:bg-white p-[2px] rounded-full hover:bg-blue-500 dark:hover:bg-purple-500"
              href="https://github.com/Samuel33d/FrontEndMentor5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandGithubFilled className="absolute -bottom-[0.16rem] text-white dark:text-[#363535]" />
            </a>
          </footer>
        </ProjectsCard>

        <ProjectsCard>
          <header className="relative h-26">
            <img src="/ProjectsImg/proyecto8.png" alt="" />
            <div className="absolute bg-black/40  top-0 transition-all left-0 right-0 bottom-0 "></div>
          </header>
          <section className="p-5 flex flex-col gap-4 pb-0">
            <h4 className="text-xl ">Academlo Store</h4>
            <p className="text-[13px] h-[70px]">
              Proyecto de una tienda especializada en la comercialización de
              prendas superiores, como hoddies, sweaters, entre otros, para
              Academlo.
            </p>
            <span className="text-[12px]">
              Tech stack :{" "}
              <span className="text-gray-400">HTML , CSS, JavaScript</span>
            </span>
          </section>
          <footer className="flex justify-end gap-3 items-center pb-3 px-6 mt-1">
            <a
              className="w-7 h-7 flex justify-center items-center hover:text-blue-500 "
              href="https://academlostoresb.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLink />
            </a>
            <a
              className="relative w-7 h-7 bg-[#191919]  dark:bg-white p-[2px] rounded-full hover:bg-blue-500 dark:hover:bg-purple-500"
              href="https://github.com/Samuel33d/EcommerceAcademlo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandGithubFilled className="absolute -bottom-[0.16rem] text-white dark:text-[#363535]" />
            </a>
          </footer>
        </ProjectsCard>

        <ProjectsCard>
          <header className="relative h-26">
            <img src="/ProjectsImg/proyecto9.png" alt="" />
            <div className="absolute bg-black/40  top-0 transition-all left-0 right-0 bottom-0 "></div>
          </header>
          <section className="p-5 flex flex-col gap-4 pb-0">
            <h4 className="text-xl">Weather App</h4>
            <p className="text-[13px] h-[70px]">
              Aplicación para conocer el clima en cualquier parte del mundo ,
              así como también nos da el pronóstico en la ubicación actual.
            </p>
            <span className="text-[12px]">
              Tech stack :{" "}
              <span className="text-gray-400">HTML , CSS, ReactJS.</span>
            </span>
          </section>
          <footer className="flex justify-end gap-3 items-center pb-3 px-6 mt-1">
            <a
              className="w-7 h-7 flex justify-center items-center hover:text-blue-500 "
              href="https://weatherappsbacademlo.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLink />
            </a>
            <a
              className="relative w-7 h-7 bg-[#191919]  dark:bg-white p-[2px] rounded-full hover:bg-blue-500 dark:hover:bg-purple-500"
              href="https://github.com/Samuel33d/WeatherApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandGithubFilled className="absolute -bottom-[0.16rem] text-white dark:text-[#363535]" />
            </a>
          </footer>
        </ProjectsCard>

        <ProjectsCard>
          <header className="relative h-26">
            <img src="/ProjectsImg/proyecto10.png" alt="" />
            <div className="absolute bg-black/40  top-0 transition-all left-0 right-0 bottom-0 "></div>
          </header>
          <section className="p-5 flex flex-col gap-4 pb-0">
            <h4 className="text-xl ">InfoGalax</h4>
            <p className="text-[13px] h-[70px]">
              Aplicación web que nos trae citas aleatorias sobre curiosidades
              del espacio exterior.
            </p>
            <span className="text-[12px]">
              Tech stack :{" "}
              <span className="text-gray-400">HTML , CSS, ReactJS.</span>
            </span>
          </section>
          <footer className="flex justify-end gap-3 items-center pb-3 px-6 mt-1">
            <a
              className="w-7 h-7 flex justify-center items-center hover:text-blue-500 "
              href="https://infogalaxsb.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLink />
            </a>
            <a
              className="relative w-7 h-7 bg-[#191919]  dark:bg-white p-[2px] rounded-full hover:bg-blue-500 dark:hover:bg-purple-500"
              href="https://github.com/Samuel33d/InfoGalax"
            >
              <IconBrandGithubFilled className="absolute -bottom-[0.16rem] text-white dark:text-[#363535]" />
            </a>
          </footer>
        </ProjectsCard>

        <ProjectsCard>
          <header className="relative h-26">
            <img src="/ProjectsImg/proyecto11.png" alt="" />
            <div className="absolute bg-black/40  top-0 transition-all left-0 right-0 bottom-0 "></div>
          </header>
          <section className="p-5 flex flex-col gap-4 pb-0">
            <h4 className="text-xl ">CRUD de usuarios</h4>
            <p className="text-[13px] h-[70px]">
              Aplicación de un sistema CRUD para obtener, crear, actualizar y
              eliminar usuarios.
            </p>
            <span className="text-[12px]">
              Tech stack :{" "}
              <span className="text-gray-400">HTML , CSS, ReactJS.</span>
            </span>
          </section>
          <footer className="flex justify-end gap-3 items-center pb-3 px-6 mt-1">
            <a
              className="w-7 h-7 flex justify-center items-center hover:text-blue-500 "
              href="https://userscrudsb.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLink />
            </a>
            <a
              className="relative w-7 h-7 bg-[#191919]  dark:bg-white p-[2px] rounded-full hover:bg-blue-500 dark:hover:bg-purple-500"
              href="https://github.com/Samuel33d/Users-CRUD"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandGithubFilled className="absolute -bottom-[0.16rem] text-white dark:text-[#363535]" />
            </a>
          </footer>
        </ProjectsCard>

        <ProjectsCard>
          <header className="relative h-26">
            <img src="/ProjectsImg/proyecto12.png" alt="" />
            <div className="absolute bg-black/40  top-0 transition-all left-0 right-0 bottom-0 "></div>
          </header>
          <section className="p-5 flex flex-col gap-4 pb-0">
            <h4 className="text-xl ">Rick & Morty App</h4>
            <p className="text-[13px] h-[70px] ">
              Aplicación sobre Rick & Mory, en el cual puedes ver información
              sobre las locaciones de la serie y cada uno de sus residentes
            </p>
            <span className="text-[12px]">
              Tech stack :{" "}
              <span className="text-gray-400">
                HTML , CSS, ReactJS, Tailwind
              </span>
            </span>
          </section>
          <footer className="flex justify-end gap-3 items-center pb-3 px-6 mt-1">
            <a
              className="w-7 h-7 flex justify-center items-center hover:text-blue-500 "
              href="https://rickandmortyappsbacademlo.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLink />
            </a>
            <a
              className="relative w-7 h-7 bg-[#191919]  dark:bg-white p-[2px] rounded-full hover:bg-blue-500 dark:hover:bg-purple-500 "
              href="https://github.com/Samuel33d/RickAndMortyApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandGithubFilled className="absolute -bottom-[0.16rem] text-white dark:text-[#363535]" />
            </a>
          </footer>
        </ProjectsCard>
      </section>
    </section>
  );
};
export default Projects;
