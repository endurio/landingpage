"use client";
import { useState, useEffect, useCallback } from "react";
import {
  HomeContentHeader,
  HomeContentHeaderMobile,
} from "../icons";
import { Github, Telegram } from "../icons/socials";
import Economic from "./Economic";
import Innovation from "./innovation/Innovation";
import RefNet from "./RefNet";
import Discover from "./Discover";
import Footer from "./Footer";
import AboutUs from "./about-us/AboutUs";
import Blog from "./blog/Blog";
import BlogDetail from "./blog/BlogDetail";
import { Link } from "react-router-dom";
import { TransactionSVG } from "../icons/transaction";
import { getLaunchURL } from "./lib/utils";

function checkInnerWidth() {
  return typeof window !== "undefined" && window.innerWidth >= 768;
}

const HomeContent = (props) => {
  const [targetReached, setTargetReached] = useState(checkInnerWidth());

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(min-width:768px)`);
    media.addEventListener("change", updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, [updateTarget]);

  return (
    <>
      <div className="absolute flex flex-col justify-center inset-x-0 items-center py-0 px-4 w-full top-[60px] md:top-[100px]">
        {typeof window !== "undefined" &&
          (props.url === "#home" || props.url === "") && (
            <>
              {targetReached ? (
                <div className="flex flex-col gap-[40px] items-center pt-[20px] pb-[300px]">
                  <div className="flex flex-col items-center gap-6">
                    <div className="flex flex-col items-start gap-6">
                      <div className="relative flex flex-row flex-justify-between w-full">
                        <span className="text-heading text-[30px]">
                          &nbsp;
                        </span>
                      </div>
                      <HomeContentHeader />
                      <div className="text-heading text-[30px] text-right w-full">
                        &nbsp;
                      </div>
                    </div>
                    <TransactionSVG width={480}></TransactionSVG>
                    <span className="text-normal text-lg md:text-xl text-center self-stretch leading-[30px] pt-8">
                      Generate brand awareness, transaction by transaction.
                    </span>
                  </div>
                  <div className="flex flex-row items-start gap-10 max-w-[384px]">
                    <Link
                      to={"https://github.com/endurio"}
                      target="_blank"
                    >
                      <Github height={48} width={48} />
                    </Link>
                    <a href={getLaunchURL()} target="_blank" rel="noreferrer">
                      <div className="flex flex-row items-start">
                        <div className="box-border flex flex-row justify-center items-center py-[14px] gap-[10px] h-12 min-w-[120px] rounded-lg text-heading text-xs">
                          <div className="border-gradient p-[2px] h-12 w-full rounded-lg">
                            <div className=" h-full w-full bg-[#0E0C15] py-[14px] px-5 rounded-lg uppercase cursor-pointer	gap-[6px] flex flex-row justify-center items-center">
                              LAUNCH
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <Link
                      to={"https://t.me/endur_io"}
                      target="_blank"
                    >
                      <Telegram height={48} width={48} />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-[60px] mt-[40px] pb-[250px] max-w-[343px]">
                  <div className="flex flex-col items-center gap-8">
                    <div className="flex flex-col items-start gap-[10px]">
                      <div className="relative flex flex-row flex-justify-between w-full">
                        <span className="text-heading text-[16px]">
                          &nbsp;
                        </span>
                      </div>
                      <HomeContentHeaderMobile />
                      <div className="text-heading text-[16px] text-right w-full">
                        &nbsp;
                      </div>
                    </div>
                    <TransactionSVG width={320}></TransactionSVG>
                    <span className="text-normal text-xl text-center self-stretch leading-[30px] pt-4">
                      Generate brand awareness, transaction by transaction.
                    </span>
                  </div>
                  <div className="flex flex-row items-start justify-center max-w-[384px] gap-6">
                  <Link
                      to={"https://github.com/endurio"}
                      target="_blank"
                    >
                      <Github height={48} width={48} />
                    </Link>
                    <a href={getLaunchURL()} target="_blank" rel="noreferrer">
                      <div className="flex flex-row items-start">
                        <div className="box-border flex flex-row justify-center items-center py-[14px] gap-[10px] h-12 min-w-[120px] rounded-lg text-heading text-xs">
                          <div className="border-gradient p-[2px] h-12 w-full rounded-lg">
                            <div className=" h-full w-full bg-[#0E0C15] py-[14px] px-5 rounded-lg uppercase cursor-pointer	gap-[6px] flex flex-row justify-center items-center">
                              LAUNCH
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <Link
                      to={"https://t.me/endur_io"}
                      target="_blank"
                    >
                      <Telegram height={48} width={48} />
                    </Link>
                  </div>
                </div>
              )}
              <Economic matches={targetReached} />
              <Innovation matches={targetReached} />
              <RefNet matches={targetReached} />
              <Discover matches={targetReached} />
            </>
          )}
        {props.url === "#about" && <AboutUs matches={targetReached} />}
        {props.url === "#blog" && <Blog setUrl={props.setUrl} />}
        {props.url === "#blog-detail" && <BlogDetail setUrl={props.setUrl} />}
        <Footer />
      </div>
    </>
  );
};

export default HomeContent;
