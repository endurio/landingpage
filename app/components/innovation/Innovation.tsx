"use client";
import React, { useState, useEffect } from "react";
import InnovationCard from "./components/InnovationCard";
import config from "../../config/index.json";
import { Carousel } from "@trendyol-js/react-carousel";
import { EllipseSlider } from "@/app/icons";
import useMediaQuery from "../hooks/useMedia";

const Innovation = () => {
  const { innovation } = config;
  const matches = useMediaQuery(768);
  return (
    <>
      <div
        id="innovation"
        className="flex flex-col items-center gap-6 pb-[120px] md:gap-[56px]"
      >
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="text-heading text-[34px] md:text-5xl">
            OUR INNOVATIONS
          </p>
          <p className="text-normal text-lg text-center">
            Uniswap solves the spot DEX problems. <br /> Derivable solves the
            perpetual futures DEX problems
          </p>
        </div>
        {matches ? (
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-row justify-center max-w-[1200px] flex-wrap items-start gap-8">
              {innovation.map((item, idx) => (
                <InnovationCard key={idx} item={item} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-row justify-center max-w-[343px] items-start gap-8">
              <Carousel show={1.2} slide={3} swiping={true}>
                {innovation.map((item, idx) => (
                  <InnovationCard key={idx} item={item} />
                ))}
              </Carousel>
            </div>
            <EllipseSlider />
          </div>
        )}
      </div>
    </>
  );
};

export default Innovation;
