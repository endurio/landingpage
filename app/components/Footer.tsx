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

const Footer = () => {
  const icons = [
    <TwitterMini key={0} />,
    <DiscordMini key={1} />,
    <Reddit key={2} />,
    <Medium key={3} />,
    <Linkedin key={4} />,
    <Youtube key={5} />,
  ];
  return (
    <>
      <div className="footer-border-top flex box-border flex-col justify-center items-center py-8 gap-4 w-full mt-[120px] bottom-0 min-h-[164px] z-[9999]">
        <div className="max-w-[133.71px] max-h-6">
          <DerivableLogoMini />
        </div>
        <div className="flex flex-row items-start gap-6 max-w-[264px]">
          {icons.map((item, idx) => (
            <div key={idx} className="max-w-6 max-h-6">
              {item}
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center items-center gap-2 text-normal text-xs">
          <p>Terms and Conditions</p>
          <Ellipse />
          <p>Copyright © 2023 Derivable. All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
