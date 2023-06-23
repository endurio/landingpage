"use client";
import React, { useState, useEffect } from "react";
import useMediaQuery from "../../hooks/useMedia";

const BlogCard = (props) => {
  const matches = useMediaQuery(768);

  return (
    <>
      {props.isMain && (
        <div
          className="w-full md:flex md:justify-center md:items-center cursor-pointer"
          onClick={() => props.setUrl("#blog-detail")}
        >
          <div className="flex flex-col md:flex-row md:w-[1062px] items-start gap-6">
            <img src={props.src} alt="blog-1" className="md:w-[519px]" />
            <div className="flex flex-col items-start gap-6 md:max-w-[519px] md:h-full">
              <div className="flex flex-col items-start gap-3">
                <span className="text-normal !text-[#4185EC] text-[11px]">
                  {props.topic}
                </span>
                <span className="text-heading text-xl">
                  Lorem ipsum dolor sit amet consect. Sit convallis nulla ipsum
                  augue.
                </span>
                <span className="text-normal text-sm">
                  Lorem ipsum dolor sit amet consectetur. Diam mattis a in
                  convallis eu. Bibendum nec ac magnis nunc facilisis vitae
                  rutrum ultrices.
                </span>
              </div>
              {matches && (
                <span className="text-normal text-xs !text-[#757185]">
                  Last updated: January 30, 2023
                </span>
              )}
            </div>
            {!matches && (
              <span className="text-normal text-xs !text-[#757185]">
                Last updated: January 30, 2023
              </span>
            )}
          </div>
        </div>
      )}
      {!props.isMain && (
        <div
          className="flex flex-col items-start gap-6 cursor-pointer"
          onClick={() => props.setUrl("#blog-detail")}
        >
          <img src={props.src} alt="blog-1" className="md:w-[394px]" />
          <div className="flex flex-col items-start gap-6 md:max-w-[394px]">
            <div className="flex flex-col items-start gap-3">
              <span className="text-normal !text-[#4185EC] text-[11px]">
                {props.topic}
              </span>
              <span className="text-heading text-xl">
                Lorem ipsum dolor sit amet consect. Sit convallis nulla ipsum
                augue.
              </span>
              <span className="text-normal text-sm">
                Lorem ipsum dolor sit amet consectetur. Diam mattis a in
                convallis eu. Bibendum nec ac magnis nunc facilisis vitae rutrum
                ultrices.
              </span>
            </div>
          </div>
          <span className="text-normal text-xs !text-[#757185]">
            Last updated: January 30, 2023
          </span>
        </div>
      )}
    </>
  );
};

export default BlogCard;
