import { useId } from "react";
import { Text, TextHyperLink } from "../../components";
import { FooterData } from "../../data";
import { BriefCase, Chat, Globe, User } from "../../icons";

const Footer = () => {
  return (
    <footer className="p-10 bg-[#111] flex flex-col ">
      {/* footer-top */}
      <section className=" flex items-stretch justify-evenly ">
        {FooterData.map((data) => {
          return (
            <ul key={useId()} className="flex flex-col">
              <Text styles="text-white uppercase text-xs" text={data.title} />
              {data.lists?.map((list) => (
                <li key={useId()} className="mt-3">
                  <Text
                    text={list}
                    styles="text-white opacity-50 text-sm cursor-pointer transition-all hover:opacity-90 "
                  />
                </li>
              ))}
            </ul>
          );
        })}
      </section>
      {/* footer-bottom */}
      <section className="flex justify-center gap-x-[2em] my-[2em]">
        <User styles="h-7 w-7 p-1 rounded-md text-white cursor-pointer transition-all hover:text-sky-400 hover:bg-[rgba(255,255,255,.12)]" />
        <Globe styles="h-7 w-7 p-1 rounded-md text-white cursor-pointer transition-all hover:text-sky-400 hover:bg-[rgba(255,255,255,.12)]" />
        <BriefCase styles="h-7 w-7 p-1 rounded-md text-white cursor-pointer transition-all hover:text-sky-400 hover:bg-[rgba(255,255,255,.12)]" />
        <Chat styles="h-7 w-7 p-1 rounded-md text-white cursor-pointer transition-all hover:text-sky-400 hover:bg-[rgba(255,255,255,.12)]" />
      </section>
      <TextHyperLink
        href="https://github.com/Noppawat3939"
        text="dev by noppawat3939"
        styles="text-white opacity-70 uppercase text-xs tracking-[2px] text-center"
      />
    </footer>
  );
};

export default Footer;
