"use client";
import React from "react";
import { AboutUsBanner, AboutUsBannerMobile } from "../../icons/about-us/index";
import Card from "./components/Card";
import Discover from "./components/Discover";
import config from "../../config/index.json";

const AboutUs = (props: any) => {
  const { about } = config;

  return (
    <>
      <div className="flex flex-col justify-between items-center px-4 md:px-0 gap-[80px] md:gap-[120px]">
        <div className="flex flex-col justify-center items-center text-center pt-[80px] md:pt-0 w-full md:w-[720px] items-center gap-6 break-normal">
          {props.matches ? <AboutUsBanner /> : <AboutUsBannerMobile />}
          <span className="text-heading text-xl md:text-2xl">
            {about.heading}
          </span>
          <span className="text-normal text-base">{about.explain}</span>
        </div>
        <Card matches={props.matches} />
        <Discover matches={props.matches} />
      </div>
    </>
  );
};

export default AboutUs;
