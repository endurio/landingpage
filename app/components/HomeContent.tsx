"use client";
import React, { useState, useEffect } from "react";
import {
  HomeContentHeader,
  HomeContentHeaderMobile,
  ScrollSVG,
} from "../icons";
import { GroupSocial, Twitter, Discord, Github } from "../icons/socials";
import FunctionPilot from "./FuncPilot";
import Innovation from "./innovation/Innovation";
import Avaiable from "./Avaiable";
import Discover from "./Discover";
const HomeContent = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <>
      <div className="absolute flex flex-col justify-center inset-x-0 items-center py-0 md:py-[240px] gap-10 w-full top-[277px]">
        {matches ? (
          <>
            <div id="home" className="flex flex-col items-center gap-6">
              <HomeContentHeader />
              <span className="font-['Sora'] text-lg md:text-xl font-normal text-center text-[#CAC6DD] self-stretch leading-[30px]">
                Developers, traders, and liquidity providers participate
                together in a derivatives marketplace that is open and
                accessible to all.
              </span>
            </div>
            <div className="flex flex-row items-start gap-16 max-w-[384px]">
              <GroupSocial height={48} width={48} />
              <Twitter height={48} width={48} />
              <Discord height={48} width={48} />
              <Github height={48} width={48} />
            </div>
          </>
        ) : (
          <>
            <div id="home" className="flex flex-col items-center gap-6">
              <HomeContentHeaderMobile />
              <span className="font-['Sora'] text-xl font-normal text-center text-[#CAC6DD] self-stretch leading-[30px]">
                Developers, traders, and liquidity providers participate
                together in a derivatives marketplace that is open and
                accessible to all.
              </span>
            </div>
          </>
        )}
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
