"use client";
import { DiscoverBanner, DiscoverBannerMobile } from "../../../icons/about-us";
import { ArrowRightIcon } from "../../../icons";
import React, { useState, useEffect } from "react";

const Discover = (props) => {
  return (
    <>
      {props.matches ? (
        <div className="flex flex-row justify-between items-center p-[40px] gap-[173px] rounded-3xl background-gray max-w-[1200px]">
          <div className="flex flex-col items-start gap-6 max-w-[547px]">
            <div className="flex flex-col items-start gap-4">
              <span className="text-heading text-[40px]">
                Together, Build a Decentralized Derivatives Technology Community
              </span>
              <span className="text-normal text-base">
                Engage with developers, experts, and researchers to exchange
                ideas, mechanisms and designs to contribute to the advancement
                of decentralized finance.
              </span>
              <div className="flex flex-row items-start">
                <div className="box-border flex flex-row justify-center items-center py-[14px] gap-[10px] h-12 min-w-[120px] rounded-lg text-heading text-xs">
                  <div className="border-gradient p-[2px] h-12 w-full rounded-lg">
                    <div className=" h-full w-full bg-[#0E0C15] py-[14px] px-5 rounded-lg uppercase cursor-pointer	gap-[6px] flex flex-row justify-center items-center">
                      JOIN NOW
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DiscoverBanner />
        </div>
      ) : (
        <div className="flex flex-col items-start p-6 gap-[10px] border-[1px] border-gradient-1">
          <DiscoverBannerMobile />
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-4">
              <span className="text-heading text-2xl">
                Together, Build a Decentralized Derivatives Technology Community
              </span>
              <span className="text-normal text-base">
                Engage with developers, experts, and researchers to exchange
                ideas, mechanisms and designs to contribute to the advancement
                of decentralized finance.
              </span>
            </div>
          </div>
          <div className="flex flex-row items-start">
            <div className="box-border flex flex-row justify-center items-center py-[14px] gap-[10px] h-12 min-w-[120px] rounded-lg text-heading text-xs">
              <div className="border-gradient p-[2px] h-12 w-full rounded-lg">
                <div className=" h-full w-full bg-[#0E0C15] py-[14px] px-5 rounded-lg uppercase cursor-pointer	gap-[6px] flex flex-row justify-center items-center">
                  Discover
                  <ArrowRightIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Discover
