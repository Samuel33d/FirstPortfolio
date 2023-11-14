import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm = () => {
  const handleSubmit = (e) => {
    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData);

    e.preventDefault();

    emailjs
      .send("service_7rc7rgm", "template_1", data, "bYXFKzcNawuqmcPK1")
      .then(
        (result) => {
          console.log(result.text);
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
        }
      );
  };

  return (
    <form
      className="w-full max-w-[600px] my-10 [&>label]:grid [&>label]:gap-5 [&>label]:text-xl  dark:bg-[#363535] shadow-2xl border-2 dark:border-[#363535]  p-5 sm:p-10 rounded-lg grid gap-5 sm:gap-7 transition-all"
      onSubmit={handleSubmit}
    >
      <label className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500  to-purple-500 font-bold  ">
        Nombre:
        <input
          className="font-medium text-black dark:text-gray-300 text-sm bg-transparent outline-none border-b border-b-black dark:border-b-white  py-1"
          type="text"
          name="user_name"
          required
        />
      </label>
      <label className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 font-bold   ">
        Email:
        <input
          className="font-medium text-black dark:text-gray-300 text-sm bg-transparent outline-none border-b border-b-black dark:border-b-white  py-1"
          type="email"
          name="user_email"
          required
        />
      </label>
      <label>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 font-bold">
          Mensaje:
        </span>
        <textarea
          className="textarea font-medium text-black dark:text-gray-300 text-sm bg-transparent outline-none border-b border-b-black dark:border-b-white  py-1"
          name="message"
          required
        />
      </label>
      <input
        className="font-bold px-8 py-1 sm:px-1 sm:py-1 sm:w-[40%] my-3 mx-auto rounded-full uppercase bg-gradient-to-r from-blue-500 via-purple-500 to-purple-500 cursor-pointer hover:tracking-wider transition-all text-black dark:text-white "
        type="submit"
        value="Enviar"
      />
    </form>
  );
};

export default ContactForm;
