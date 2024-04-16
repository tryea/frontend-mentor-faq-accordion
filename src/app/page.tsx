import { QnaAccordions } from "@/components/QnaAccordions";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 h-dvh w-full flex-col bg-light_pink items-center pb-6">
      <div className="w-full aspect-[375/232] sm:aspect-[1440/320] relative bg-header" />
      <div className="w-[327px] flex flex-col gap-6 p-6 -mt-[89.5px] bg-white z-20 rounded-lg sm:rounded-2xl sm:w-[600px] sm:p-10 sm:gap-8 ">
        <div className="flex flex-row items-center gap-6">
          <div className="relative w-6 h-6 sm:w-10 sm:h-10">
            <Image src={"icons/icon-star.svg"} fill alt="star-icon" />
          </div>
          <h2 className="font-bold text-[2rem] leading-[2.375rem] tracking-normal text-dark_purple sm:text-[3.5rem] sm:leading-[4.10625rem]">
            FAQs
          </h2>
        </div>

        <QnaAccordions />
      </div>
    </main>
  );
}
