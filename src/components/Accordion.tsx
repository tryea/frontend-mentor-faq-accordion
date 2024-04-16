import Image from "next/image";

export default function Accordion({
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
