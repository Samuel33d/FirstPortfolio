import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

const ContactForm = () => {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData);

    e.preventDefault();

    emailjs
      .send("service_7rc7rgm", "template_1", data, "bYXFKzcNawuqmcPK1")
      .then(
        () => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Email enviado con éxito",
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <form
      className="  my-10 grid w-full max-w-[600px] gap-5 rounded-lg border-2 border-black/10  bg-white p-5 shadow-2xl transition-all  dark:border-[#363535] dark:bg-[#363535] sm:gap-7 sm:p-10 [&>label]:grid [&>label]:gap-5 [&>label]:text-xl"
      onSubmit={handleSubmit}
    >
      <label className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text  font-bold text-transparent  ">
        {t("contactName")}
        <input
          className="border-b border-b-black bg-transparent py-1 text-sm font-medium text-black outline-none dark:border-b-white  dark:text-gray-300"
          type="text"
          name="user_name"
          required
        />
      </label>
      <label className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 bg-clip-text font-bold text-transparent   ">
        Email:
        <input
          className="border-b border-b-black bg-transparent py-1 text-sm font-medium text-black outline-none dark:border-b-white  dark:text-gray-300"
          type="email"
          name="user_email"
          required
        />
      </label>
      <label>
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 bg-clip-text font-bold text-transparent">
          {t("contactMessage")}
        </span>
        <textarea
          className="textarea border-b border-b-black bg-transparent py-1 text-sm font-medium text-black outline-none dark:border-b-white  dark:text-gray-300"
          name="message"
          required
        />
      </label>
      <input
        className="mx-auto my-3 cursor-pointer rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 px-8 py-1 font-bold uppercase text-black transition-all hover:tracking-wider dark:text-white sm:w-[40%] sm:px-1 sm:py-1 "
        type="submit"
        value={t("contactBtn")}
      />
    </form>
  );
};

export default ContactForm;
