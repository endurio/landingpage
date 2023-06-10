"use client";
import React, { useState, useEffect } from "react";
import { AboutUsBanner, AboutUsBannerMobile } from "../../icons/about-us/index";
import Card from "./components/Card";
import Discover from "./components/Discover";
import config from "../../config/index.json";
import useMediaQuery from "../hooks/useMedia";
const AboutUs = () => {
  const { about } = config;
  const matches = useMediaQuery(768);
  return (
    <>
      <div className="flex flex-col justify-between items-center px-4 md:px-0 gap-[56px]">
        <div className="flex flex-col justify-center items-center text-center w-full md:w-[720px] items-center gap-6 break-normal">
          {matches ? <AboutUsBanner /> : <AboutUsBannerMobile />}
          <span className="text-heading text-xl md:text-2xl">
            {about.heading}
          </span>
          <span className="text-normal text-base">{about.explain}</span>
        </div>
        <Card />
        <Discover />
      </div>
    </>
  );
};

export default AboutUs;
