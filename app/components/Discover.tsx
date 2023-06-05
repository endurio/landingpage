"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowRightIcon,
  RectangleGradient,
  DiscoverBanner,
  DiscoverBannerMobile,
} from "../icons";

const Discover = () => {
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
      {!!matches ? (
        <div className="flex flex-col items-center discover-padding gap-[10px]">
          <div className="relative flex flex-row max-h-[328px] max-w-[996px] rounded-3xl">
            <RectangleGradient />
            <div className="flex flex-row justify-between items-start gap-6 w-full px-[39px] py-10 absolute">
              <div className="flex flex-col items-start gap-4 max-w-[443px]">
                <p className="font-['Sora'] font-semibold text-5xl text-[#FFFFFF]">
                  Be part of us!
                </p>
                <p className="font-['Sora'] font-normal text-base text-[#CAC6DD]">
                  Join the Derivable Forum and drive the discussions shaping the
                  future of DeFi innovation, where you can propose upgrades and
                  contribute to the advancement of Derivable and the broader
                  DeFi ecosystem
                </p>
                <div className="flex flex-row items-start">
                  <div className="box-border flex flex-row justify-center items-center py-[14px] gap-[10px] h-12 min-w-[120px] rounded-lg font-['Sora'] text-xs font-semibold">
                    <div className="border-gradient p-[2px] h-12 w-full rounded-lg">
                      <div className=" h-full w-full bg-[#0E0C15] py-[14px] px-5 rounded-lg uppercase cursor-pointer	gap-[6px] flex flex-row justify-center items-center">
                        Discover
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <DiscoverBanner />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row items-start discover-padding gap-[10px]">
          <div className="box-border flex flex-row items-start p-6 gap-[10px] border-[1px] border-gradient-1 rounded-3xl">
            <div className="flex flex-col items-start gap-6">
              <DiscoverBannerMobile />
              <div className="flex flex-col items-start gap-6 font-['Sora'] max-w-[295px]">
                <span className="font-semibold text-[34px] text-[#FFFFFF]">
                  Be part of us!
                </span>
                <span className="font-normal text-base text-[#CAC6DD]">
                  Join the Derivable Forum and drive the discussions shaping the
                  future of DeFi innovation, where you can propose upgrades and
                  contribute to the advancement of Derivable and the broader
                  DeFi ecosystem
                </span>
                <div className="flex flex-row items-start">
                  <div className="box-border flex flex-row justify-center items-center py-[14px] gap-[10px] h-12 min-w-[120px] rounded-lg font-['Sora'] text-xs font-semibold">
                    <div className="border-gradient p-[2px] h-12 w-full rounded-lg">
                      <div className=" h-full w-full bg-[#0E0C15] py-[14px] px-5 rounded-lg uppercase cursor-pointer	gap-[6px] flex flex-row justify-center items-center">
                        Discover
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Discover;
