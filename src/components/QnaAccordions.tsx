"use client";

import { useState } from "react";
import Accordion from "./Accordion";

export function QnaAccordions() {
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
    <div className="flex flex-col gap-6">
      {qnaData.map((qna) => {
        return (
          <div key={`${qna.id}-container`} className="flex flex-col gap-6">
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
          </div>
        );
      })}
    </div>
  );
}
