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
import Footer from "./Footer";
import AboutUs from "./about-us/AboutUs";
import Blog from "./blog/Blog";
import BlogDetail from "./blog/BlogDetail";

const HomeContent = (props) => {
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
      <div className="absolute flex flex-col justify-center inset-x-0 items-center py-0 px-4 w-full top-[104px] md:top-[277px]">
        {(props.url === "#home" || props.url === "") && (
          <>
            {matches ? (
              <div className="flex flex-col gap-[40px] items-center">
                <div id="home" className="flex flex-col items-center gap-6">
                  <HomeContentHeader />
                  <span className="text-normal text-lg md:text-xl text-center self-stretch leading-[30px]">
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
              </div>
            ) : (
              <div className="flex flex-col gap-[40px]">
                <div id="home" className="flex flex-col items-center gap-6">
                  <HomeContentHeaderMobile />
                  <span className="text-normal text-xl text-center self-stretch leading-[30px]">
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
              </div>
            )}
            <div className="flex flex-col items-center gap-4 max-w-[46px] mt-[100px]">
              <ScrollSVG />
            </div>
            <FunctionPilot />
            <Innovation />
            <Avaiable />
            <Discover />
          </>
        )}
        {props.url === "#about" && <AboutUs />}
        {props.url === "#blog" && <Blog />}
        {props.url === "#forum" && <BlogDetail setUrl={props.setUrl} />}
        <Footer />
      </div>
    </>
  );
};

export default HomeContent;
