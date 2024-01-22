import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const translationEN = {
    "welcome": "Hi!",
    "presentation": "my name is",
    "homePhrase": "I create unique web",
    "homePhraseEnd": "experiences.",
    "navHome": "Home",
    "navAboutMe": "About Me",
    "navProjects": "Projects",
    "navContact": "Contact",
    "aboutTitle1": "About me",
    "aboutParagraph1": "I am a passionate 22-year-old full-stack developer with experience in essential technologies such as HTML, CSS, and JavaScript, as well as modern frameworks like React JS. My focus has expanded to server-side development, using Node.js, Express, and Sequelize to build efficient APIs and work with relational databases, especially PostgreSQL.",
    "aboutParagraph2": "I am constantly immersed in studying and updating my skills to deliver innovative and cutting-edge web solutions. My goal is to create full-featured and powerful web experiences that captivate users. I am eager to collaborate on innovative projects that drive the future of the web.",
    "aboutTitle2": "Education",
    "education1Inst": "National Experimental University Simón Rodríguez",
    "education1Lic": "Bachelor of Business Administration (BBA) with mention in Computer Science",
    "education2Inst": "Academlo",
    "education2Lic": "Full Stack Development",
    "education2Date": "Aug 2023 - Act",
    "technologyStackTitle": "Technology Stack",
    "technologyStackDescription": "Technologies I have worked with",
    "projectsTitle": "Projects",
    "projectsDescription": "Some applications that I have developed",
    "project0": "A web application that allows us to delete, update, and create playlists with our favorite songs to give as gifts.",
    "project1": "Static web page of the Space Tourism project that invites us to explore the universe.",
    "project2": "Application about pokemon, here you can see information about the different types of pokemon, as well as search by types and names.",
    "project3": "Proyecto de una tienda especializada en la comercialización de prendas , como hoddies, sweaters,  para la marca Academlo.",
    "project4": "Application to know the weather anywhere in the world, as well as giving us the forecast for the current location.",
    "project5": "Web application that brings us random quotes about outer space curiosities.",
    "project6Title": "Users CRUD",
    "project6": "Application of a CRUD system to obtain, create, update and delete users.",
    "project7": "Application about Rick & Morty, in which you can see information about the locations of the series and each of its residents.",
    "project8": "Front-end project challenges in order to continue practicing and innovating technologies.",
    "contactTitle": "Contact",
    "contactDescription": "Send me a message!",
    "contactName": "Name:",
    "contactMessage": "Message:",
    "contactBtn": "send",
}

const translationES = {
    "welcome": "Hola",
    "presentation": "mi nombre es",
    "homePhrase": "creo experiencias web",
    "homePhraseEnd": "únicas.",
    "navHome": "Inicio",
    "navAboutMe": "Sobre mí",
    "navProjects": "Proyectos",
    "navContact": "Contacto",
    "aboutTitle1": "Sobre mí",
    "aboutParagraph1": "Soy un apasionado desarrollador Full Stack de 22 años con experiencia en tecnologías esenciales como HTML, CSS y JavaScript, así como en frameworks modernos como React JS. Mi enfoque se ha expandido hacia el desarrollo del lado del servidor, utilizando Node.js, Express y Sequelize para construir APIs eficientes y trabajar con bases de datos relacionales, especialmente PostgreSQL.",
    "aboutParagraph2": "Estoy constantemente inmerso en el estudio y la actualización de mis habilidades para ofrecer soluciones web innovadoras y de vanguardia.  Mi objetivo es crear experiencias web completas y poderosas que cautiven a los usuarios. Estoy ansioso por colaborar en proyectos innovadores que impulsen el futuro de la web.",
    "aboutTitle2": "Educación",
    "education1Lic": "Licenciatura en Administración de Empresas mención Informatica",
    "education1Inst": "Universidad Nacional Experimental Simón Rodríguez",
    "education2Lic": "Desarrollo Web Full Stack",
    "education2Inst": "Academlo",
    "education2Date": "Ago 2023 - Act",
    "technologyStackTitle": "Mi Stack de Tecnologías",
    "technologyStackDescription": "Tecnologías con las que he trabajado",
    "projectsTitle": "Proyectos",
    "projectsDescription": "Algunas aplicaciones que he desarrollado",
    "project0": "Aplicación Web que nos permite eliminar, actualizar y crear playlists con nuestras canciones de preferencia para regalar.",
    "project1": "Página web estática del proyecto Space Tourism que nos invita a explorar el universo.",
    "project2": "Aplicación sobre pokemon, en el cual se puede ver información sobre los distintos tipos de pokemon, así como buscar por tipos y nombres.",
    "project3": "Proyecto de una tienda especializada en la comercialización de prendas superiores, como hoddies, sweaters, entre otros, para Academlo.",
    "project4": "Aplicación para conocer el clima en cualquier parte del mundo , así como también nos da el pronóstico en la ubicación actual.",
    "project5": "Aplicación web que nos trae citas aleatorias sobre curiosidades del espacio exterior.",
    "project6Title": "Sistema CRUD",
    "project6": "Aplicación de un sistema CRUD para obtener, crear, actualizar y eliminar usuarios.",
    "project7": "Aplicación sobre Rick & Morty, en el cual puedes ver información sobre las locaciones de la serie y cada uno de sus residentes.",
    "project8": "Retos de proyectos Front-end con el fin de seguir practicando e innovando tecnologías.",
    "contactTitle": "Contacto",
    "contactDescription": "Mandame un mensaje!",
    "contactName": "Name:",
    "contactMessage": "Message:",
    "contactBtn": "enviar",

}



i18n
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'es',
        resources: {
            en: {
                translation:
                    translationEN,
            },
            es: {
                translation:
                    translationES,
            }
        },
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    })

export default i18n;