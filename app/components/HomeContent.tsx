"use client";
import React, { useState, useEffect, useCallback } from "react";
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
import useMediaQuery from "./hooks/useMedia";
import Link from "next/link";

const HomeContent = (props) => {
  const matches = useMediaQuery(768);

  return (
    <>
      <div className="absolute flex flex-col justify-center inset-x-0 items-center py-0 px-4 w-full top-[104px] md:top-[277px]">
        {(props.url === "#home" || props.url === "") && (
          <>
            {matches ? (
              <div className="flex flex-col gap-[40px] items-center pb-[300px]">
                <div id="home" className="flex flex-col items-center gap-6">
                  <div className="flex flex-col items-start gap-3">
                    <div className="relative">
                      <span className="text-heading text-[40px]">
                        The 1<sup className="text-3xl absolute top-0">st</sup>
                      </span>
                    </div>
                    <HomeContentHeader />
                    <div className="text-heading text-[40px] text-right w-full">
                      Ever.
                    </div>
                  </div>
                  <span className="text-normal text-lg md:text-xl text-center self-stretch leading-[30px]">
                    Perpetuals trading and liquidity for any token, with any
                    leverage. By anyone.
                  </span>
                </div>
                <div className="flex flex-row items-start gap-16 max-w-[384px]">
                  <Link href={"forum"} target="_blank">
                    <GroupSocial height={48} width={48} />
                  </Link>
                  <Link
                    href={"https://twitter.com/DerivableLabs"}
                    target="_blank"
                  >
                    <Twitter height={48} width={48} />
                  </Link>
                  <Link href={"https://discord.gg/kAcCdEghte"} target="_blank">
                    <Discord height={48} width={48} />
                  </Link>
                  <Link
                    href={"https://github.com/derivable-labs"}
                    target="_blank"
                  >
                    <Github height={48} width={48} />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-[40px] mt-[160px] pb-[250px] max-w-[343px]">
                <div id="home" className="flex flex-col items-center gap-6">
                  <HomeContentHeaderMobile />
                  <span className="text-normal text-xl text-center self-stretch leading-[30px]">
                    Perpetuals trading and liquidity for any token, with any
                    leverage. By anyone.
                  </span>
                </div>
                <div className="flex flex-row items-start justify-center max-w-[384px] gap-6">
                  <Link href={"forum"} target="_blank">
                    <GroupSocial height={48} width={48} />
                  </Link>
                  <Link
                    href={"https://twitter.com/DerivableLabs"}
                    target="_blank"
                  >
                    <Twitter height={48} width={48} />
                  </Link>
                  <Link href={"https://discord.gg/kAcCdEghte"} target="_blank">
                    <Discord height={48} width={48} />
                  </Link>
                  <Link
                    href={"https://github.com/derivable-labs"}
                    target="_blank"
                  >
                    <Github height={48} width={48} />
                  </Link>
                </div>
              </div>
            )}
            <FunctionPilot />
            <Innovation />
            <Avaiable />
            <Discover />
          </>
        )}
        {props.url === "#about" && <AboutUs />}
        {props.url === "#blog" && <Blog setUrl={props.setUrl} />}
        {props.url === "#blog-detail" && <BlogDetail setUrl={props.setUrl} />}
        <Footer />
      </div>
    </>
  );
};

export default HomeContent;
