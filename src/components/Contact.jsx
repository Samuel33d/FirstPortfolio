import { IconBrandGithubFilled, IconBrandLinkedin } from "@tabler/icons-react";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative max-w-[1024px] mx-auto min-h-screen flex flex-col justify-center items-center transition-all overflow-hidden pt-20"
    >
      <h2 className="text-2xl font-bold text-[#42446E] dark:text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 sm:text-4xl transition-all">
        Contacto
      </h2>
      <span className="text-sm sm:text-lg mt-1">Mandame un mensaje!</span>
      <div
        data-aos="fade-in"
        data-aos-once="true"
        className="flex sm:grid sm:grid-cols-2 gap-3 sm:place-items-center w-full px-2 transition-all"
      >
        <ContactForm />
        <div className="hidden sm:block ">
          <img
            className=" hover:animate-pulse "
            src="/memojiContact.png"
            alt=""
          />
        </div>
        <section className="flex gap-2 absolute top-5 sm:top-20 right-5">
          <div className="bg-[#191919]  dark:bg-white hover:bg-cyan-500 rounded-full p-1 cursor-pointer dark:hover:bg-cyan-500">
            <a
              href="https://github.com/Samuel33d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandGithubFilled className="dark:hover:text-white hover:text-[#191919] transition-all text-white dark:text-[#191919]" />
            </a>
          </div>
          <div className=" dark:bg-white bg-[#191919] hover:bg-cyan-500 rounded-full p-1 cursor-pointer dark:hover:bg-cyan-500">
            <a
              href="https://www.linkedin.com/in/samuelbenedetti33/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandLinkedin className="dark:hover:text-white hover:text-[#191919] transition-all dark:text-[#191919] text-white" />
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  );
};
export default Contact;
