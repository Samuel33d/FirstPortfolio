import { IconBrandWhatsapp, IconSend, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const WhaMeBtn = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const { t } = useTranslation();

  return (
    <div className="hidden sm:block">
      <button
        className="fixed bottom-10 right-52 z-50"
        onClick={() => setIsChatVisible(true)}
      >
        <IconBrandWhatsapp size={50} fill="green" className="text-white" />
      </button>
      <div
        onMouseLeave={() => setIsChatVisible(false)}
        className={`  ${isChatVisible ? "right-40" : "-right-full"} fixed bottom-8  z-50  h-96 w-96 overflow-hidden rounded-3xl bg-[url('/bgwha.jpg')] bg-cover transition-all`}
      >
        <button
          className="absolute right-8 top-8 z-50"
          onClick={() => setIsChatVisible(false)}
        >
          <IconX fill="white" className="text-white" />
        </button>
        <div className="relative h-20 w-full overflow-hidden bg-[#075F55] ">
          <div className="absolute left-8 top-1/2 h-[3.2rem] w-[3.2rem] -translate-y-1/2 overflow-hidden rounded-full">
            <img src="https://i.postimg.cc/c1wgn4jC/img-sb.jpg" alt="" />
          </div>
          <div className="absolute left-24 top-4 ">
            <h4
              className="
          font-sans text-xl font-bold text-white"
            >
              Samuel💻
            </h4>
            <p className="text-sm text-white">{t("whaStatus")}</p>
          </div>
        </div>
        <div className=" relative grid h-full w-full text-black">
          <div className=" absolute left-8 top-8 grid gap-1 rounded-xl bg-white p-4">
            <h4>Samuel💻</h4>
            <p className="text-sm">{t("welcome")}👋</p>
          </div>

          <div className="absolute bottom-24 left-1/2 grid  h-14 w-full -translate-x-1/2 grid-cols-[1fr,auto] items-center justify-center gap-2 rounded-full  border px-7 transition-all ">
            <input
              type="text"
              className="w-full rounded-full bg-white p-3 outline-none"
              placeholder={t("whaMessage")}
            />
            <a
              href="https://wa.me/+584123015489"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-[#1db154]w-full grid h-10 w-10 place-items-center rounded-full bg-[#25D466]"
            >
              <IconSend className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhaMeBtn;
