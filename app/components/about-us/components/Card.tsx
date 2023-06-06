"use client";
import React, { useState } from "react";
import {
  CardBorderMobile,
  OurVisionIcon,
  OurMissionIcon,
} from "@/app/icons/about-us";
import config from "../../../config/index.json";
const Card = () => {
  const { vision, mission } = config;
  return (
    <>
      <div className="relative">
        <CardBorderMobile />
        <div className="absolute flex flex-col justify-between h-full items-start p-6 gap-6 top-0">
          <div className="flex flex-col items-start max-w-[295px] gap-4">
            <OurVisionIcon />
            {/* <OurMissionIcon /> */}
            <span className="text-heading text-2xl">Our Vision</span>
            <span className="text-normal text-sm">{vision["text-1"]}</span>
            <span className="text-normal text-sm">{vision["text-2"]}</span>
          </div>
        </div>
      </div>
      <div className="relative">
        <CardBorderMobile />
        <div className="absolute flex flex-col justify-between h-full items-start p-6 gap-6 top-0">
          <div className="flex flex-col items-start max-w-[295px] gap-4">
            {/* <OurVisionIcon /> */}
            <OurMissionIcon />
            <span className="text-heading text-2xl">Our Mission</span>
            <span className="text-normal text-sm">{mission["text-1"]}</span>
            <span className="text-normal text-sm">{mission["text-2"]}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
