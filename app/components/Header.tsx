import React from "react";
import { DerivableLogo } from "../icons/index";
import config from "../config/index.json";

const Menu = () => {
  const { navigation } = config;
  return (
    <>
      <div className="flex flex-col items-start absolute w-full h-[80px] top-[117px] bg-transparent	 backdrop-blur-[32px]">
        <nav className="flex flex-row justify-between px-[120px] py-0 w-full gap-[265px] h-full border-b-[1px] border-zinc-700">
          <div className="flex justify-center items-center h-full">
            <a href="#">
              <DerivableLogo />
            </a>
          </div>
          <div className="flex flex-row justify-center items-center gap-[56px] self-stretch h-full">
            {navigation.map((item, index) => (
              <a key={index} href={item.href} className="h-full">
                <div className="h-full button-link box-border flex flex-row items-center py-2 gap-2 font-['Sora'] text-sm font-semibold text-grey-1">
                  {item.name}
                </div>
              </a>
            ))}
          </div>
          <div className="h-full flex justify-center items-center">
            <div className="box-border flex flex-row justify-center items-center py-[14px] px-5 gap-[10px] h-12 min-w-[120px] rounded-lg font-['Sora'] text-xs font-semibold">
              <div className="border-gradient p-[2px] h-12 w-full rounded-lg">
                <div className=" h-full w-full bg-[#0E0C15] py-[14px] px-5 rounded-lg uppercase cursor-pointer	flex flex-row justify-center items-center">
                  launch app
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Menu;
