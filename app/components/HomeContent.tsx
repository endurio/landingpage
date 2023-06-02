import React from "react";
import {
  HomeContentHeader,
  GroupSocial,
  Twitter,
  Discord,
  Github,
  ScrollSVG,
} from "../icons";
import FunctionPilot from "./FuncPilot";
import Innovation from "./Innovation";
import Avaiable from "./Avaiable";
import Discover from "./Discover";
const HomeContent = () => {
  return (
    <>
      <div className="absolute flex flex-col items-center py-[240px] gap-10 w-full max-h-[894px] top-[277px]">
        <div
          id="home"
          className="flex flex-col max-w-[996px] items-center gap-6"
        >
          <HomeContentHeader />
          <span className="font-['Sora'] text-xl font-normal text-center text-[#CAC6DD] self-stretch leading-[30px]">
            Developers, traders, and liquidity providers participate together in
            a derivatives marketplace that is open and accessible to all.
          </span>
        </div>
        <div className="flex flex-row items-start gap-16 max-w-[384px]">
          <GroupSocial />
          <Twitter />
          <Discord />
          <Github />
        </div>
        <div className="flex flex-col items-center gap-4 max-w-[46px] mt-[100px]">
          <ScrollSVG />
        </div>
        <FunctionPilot />
        <Innovation />
        <Avaiable />
        <Discover />
      </div>
    </>
  );
};

export default HomeContent;
