import React from "react";
import Breadcrumb from "./components/Breadcumb";
import { TwitterLogo, FacebookLogo } from "@/app/icons/blog";

const BlogDetail = (props) => {
  return (
    <div className="flex flex-col gap-[40px]">
      <Breadcrumb setUrl={props.setUrl} />
      <div className="flex flex-col items-start gap-8">
        <div className="flex flex-col items-start gap-8">
          <span className="text-heading text-[34px] !font-bold">
            Lorem ipsum dolor sit amet consect. Sit convallis nulla ipsum augue.
          </span>
          <div className="flex flex-col items-start gap-6 w-full">
            <div className="border-gray-1 w-full"></div>
            <div className="flex items-start gap-2 text-normal text-xs !text-[#757185]">
              Last updated: January 30, 2023
            </div>
            <div className="flex justify-end items-center gap-6 w-full">
              <span className="text-normal text-sm !text-[#757185]">
                Share post
              </span>
              <FacebookLogo />
              <TwitterLogo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
