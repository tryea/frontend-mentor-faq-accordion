"use client";

import { useMediaQuery } from "@uidotdev/usehooks";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const qnaData = [
    {
      id: 1,
      title: "What is Frontend Mentor, and how will it help me?",
      content:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.",
    },
    {
      id: 2,
      title: "Is Frontend Mentor free?",
      content:
        "Frontend Mentor offer free challenges but there is subscription available to access premium challenge",
    },
    {
      id: 3,
      title: "Can I use Frontend Mentor projects in my portfolio?",
      content:
        "Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!",
    },
    {
      id: 4,
      title: "How can I get help if I'm stuck on a challenge?",
      content: `The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated "help" channel!`,
    },
  ];

  const [qnaActive, setQnaActive] = useState<number | null>(qnaData[0].id);
  return (
    <main className="flex flex-1 h-dvh w-full flex-col bg-light_pink items-center pb-6">
      <div className="w-full aspect-[375/232] sm:aspect-[1440/320] relative">
        {isSmallDevice ? (
          <Image
            src={"/images/background-pattern-mobile.svg"}
            alt="background"
            fill
            className="object-cover"
          />
        ) : (
          <Image
            src={"/images/background-pattern-desktop.svg"}
            alt="background"
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="w-[327px] flex flex-col gap-6 p-6 -mt-[89.5px] bg-white z-20 rounded-lg sm:rounded-2xl sm:w-[600px] sm:p-10 sm:gap-8 ">
        <div className="flex flex-row items-center gap-6">
          <div className="relative w-6 h-6 sm:w-10 sm:h-10">
            <Image src={"icons/icon-star.svg"} fill alt="star-icon" />
          </div>
          <h2 className="font-bold text-[2rem] leading-[2.375rem] tracking-normal text-dark_purple sm:text-[3.5rem] sm:leading-[4.10625rem]">
            FAQs
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {qnaData.map((qna) => {
            return (
              <>
                <Accordion
                  key={qna.id}
                  id={qna.id}
                  open={qnaActive === qna.id}
                  onOpen={(e, id: number) => {
                    e.preventDefault();
                    if (qnaActive === id) {
                      setQnaActive(null);
                      return;
                    }
                    setQnaActive(id);
                  }}
                  title={qna.title}
                  content={qna.content}
                />
                {qna.id !== qnaData[qnaData.length - 1].id && (
                  <hr className="h-px bg-light_pink" />
                )}
              </>
            );
          })}
        </div>
      </div>
    </main>
  );
}

function Accordion({
  id,
  title,
  content,
  open,
  onOpen,
}: {
  id: number;
  title: string;
  content: string;
  open: boolean;
  onOpen: (e: React.MouseEvent<HTMLDivElement>, id: number) => void;
}) {
  return (
    <div
      className={`transition-all duration-1000 h-fit relative overflow-hidden ${
        !open ? "" : ""
      }`}
    >
      <div className="flex flex-row gap-6 items-center">
        <div className="flex-1 text-base font-semibold leading-[19px] text-dark_purple">
          {title}
        </div>
        <div
          className="relative w-[1.875rem] h-[1.875rem] cursor-pointer"
          onClick={(e) => {
            onOpen(e, id);
          }}
        >
          {open ? (
            <Image src={"icons/icon-minus.svg"} fill alt="minus-icon" />
          ) : (
            <Image src={"icons/icon-plus.svg"} fill alt="minus-icon" />
          )}
        </div>
      </div>
      <div
        className={`${
          open ? "h-full  pt-6" : "h-0  pt-0"
        } overflow-hidden group-active: text-sm leading-normal font-normal text-pale_purple`}
      >
        {content}
      </div>
    </div>
  );
}
