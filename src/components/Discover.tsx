"use client";
import {
  ArrowRightIcon,
  RectangleGradient,
  RectangleGradientMobile,
  DiscoverBanner,
  DiscoverBannerMobile,
} from "../icons";
import { getLaunchURL } from "./lib/utils";


const Discover = (props) => {
  return (
    <>
      {props.matches ? (
        <div className="flex flex-col items-center pt-[80px] pb-[120px] gap-[10px]">
          <div className="relative flex flex-row max-h-[328px] max-w-[996px] rounded-3xl background-gray">
            <RectangleGradient />
            <div className="flex flex-row justify-between items-start gap-6 w-full px-[39px] py-10 absolute">
              <div className="flex flex-col items-start gap-4 max-w-[443px]">
                <p className="text-heading text-5xl">Start Mining Now!</p>
                <p className="text-normal text-base">
                  And be one of the first to drive the future of a global brand awareness network.
                </p>
                <a href={getLaunchURL()} target="_blank" rel="noreferrer">
                  <div className="flex flex-row items-start">
                    <div className="box-border flex flex-row justify-center items-center py-[14px] gap-[10px] h-12 min-w-[120px] rounded-lg text-heading text-xs">
                      <div className="border-gradient p-[2px] h-12 w-full rounded-lg">
                        <div className=" h-full w-full bg-[#0E0C15] py-[14px] px-5 rounded-lg uppercase cursor-pointer	gap-[6px] flex flex-row justify-center items-center">
                          LAUNCH
                          <ArrowRightIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div>
                <DiscoverBanner />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative flex flex-col items-start pb-[80px]">
          <RectangleGradientMobile />
          <div className="absolute flex flex-row items-start p-6 gap-[10px] rounded-3xl">
            <div className="flex flex-col items-start gap-6 absolute">
              <DiscoverBannerMobile />
              <div className="flex flex-col items-start gap-6 font-['Sora'] max-w-[295px]">
                <span className="text-heading text-[34px]">Start Mining Now!</span>
                <span className="text-normal text-base">
                  And be one of the first to drive the future of a global brand awareness network.
                </span>
                <a href={getLaunchURL()} target="_blank" rel="noreferrer">
                  <div className="flex flex-row items-start">
                    <div className="box-border flex flex-row justify-center items-center py-[14px] gap-[10px] h-12 min-w-[120px] rounded-lg text-heading text-xs">
                      <div className="border-gradient p-[2px] h-12 w-full rounded-lg">
                        <div className=" h-full w-full bg-[#0E0C15] py-[14px] px-5 rounded-lg uppercase cursor-pointer	gap-[6px] flex flex-row justify-center items-center">
                          LAUNCH
                          <ArrowRightIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Discover;
