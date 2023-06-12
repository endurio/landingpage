import React from "react";
import { DerivableLogoMini, Ellipse } from "../icons";
import {
  Reddit,
  Medium,
  Linkedin,
  Youtube,
  TwitterMini,
  DiscordMini,
} from "../icons/socials";
import Link from "next/link";

const Footer = () => {
  const iconsArr = [
    {
      icon: <TwitterMini />,
      link: "a",
    },
    {
      icon: <DiscordMini />,
      link: "b",
    },
    {
      icon: <Reddit />,
      link: "c",
    },
    {
      icon: <Medium />,
      link: "d",
    },
    {
      icon: <Linkedin />,
      link: "e",
    },
    {
      icon: <Youtube />,
      link: "f",
    },
  ];
  return (
    <>
      <div className="footer-border-top flex box-border flex-col justify-center items-center py-8 gap-4 w-full mt-[120px] bottom-0 min-h-[164px] z-[9999]">
        <div className="max-w-[133.71px] max-h-6">
          <DerivableLogoMini />
        </div>
        <div className="flex flex-row items-start gap-6 max-w-[264px]">
          {iconsArr.map((item, idx) => (
            <Link key={idx} href={item.link} target="_blank">
              <div className="max-w-6 max-h-6">{item.icon}</div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-normal text-xs">
          <p>Terms and Conditions</p>
          <Ellipse />
          <p>Copyright © 2023 Derivable. All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
