"use client";
import React, { useState, useEffect } from "react";
import { AboutUsBanner, AboutUsBannerMobile } from "../../icons/about-us/index";
import Card from "./components/Card";
import config from "../../config/index.json";
const AboutUs = () => {
  const { about } = config;
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
      <div className="flex flex-col justify-between items-center px-4 md:px-0 gap-[56px]">
        <div className="flex flex-col justify-center items-center text-center w-full items-center gap-6 break-normal">
          {matches ? <AboutUsBanner /> : <AboutUsBannerMobile />}
          <span className="text-heading text-xl">{about.heading}</span>
          <span className="text-normal text-base">{about.explain}</span>
        </div>
        <Card />
      </div>
    </>
  );
};

export default AboutUs;
