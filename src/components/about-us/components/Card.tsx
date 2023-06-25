"use client";
import React, { useState, useEffect } from "react";
import {
  CardBorderMobile,
  CardBorder,
  OurVisionIcon,
  OurMissionIcon,
} from "../../../icons/about-us";
import config from "../../../config/index.json";
const Card = (props) => {
  const { vision, mission } = config;
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 md:gap-[40px]">
        <div className="relative">
          {props.matches ? <CardBorder /> : <CardBorderMobile />}
          <div className="absolute flex flex-col justify-between h-full items-start p-[40px] gap-6 top-0">
            <div className="flex flex-col items-start max-w-[295px] md:max-w-[500px] gap-4 md:gap-6">
              <img src="/our-vision.png" alt="" className="w-[64px] h-[64px]" />
              <span className="text-heading text-2xl md:text-[40px]">
                Our Vision
              </span>
              <span className="text-normal text-sm md:text-base">
                {vision["text-1"]}
              </span>
              <span className="text-normal text-sm md:text-base">
                {vision["text-2"]}
              </span>
            </div>
          </div>
        </div>
        <div className="relative">
          {props.matches ? <CardBorder /> : <CardBorderMobile />}
          <div className="absolute flex flex-col justify-between h-full items-start p-[40px] gap-6 top-0">
            <div className="flex flex-col items-start max-w-[295px] md:max-w-[500px] gap-4 md:gap-6">
              <img
                src="/our-mission.png"
                alt=""
                className="w-[56px] h-[56px] md:w-[64px] md:h-[64px]"
              />
              <span className="text-heading text-2xl md:text-[40px]">
                Our Mission
              </span>
              <span className="text-normal text-sm md:text-base">
                {mission["text-1"]}
              </span>
              <span className="text-normal text-sm md:text-base">
                {mission["text-2"]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
