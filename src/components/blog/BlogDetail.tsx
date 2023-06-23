"use client";
import React, { useState, useEffect } from "react";
import Breadcrumb from "./components/Breadcumb";
import { TwitterLogo, FacebookLogo } from "../../icons/blog";
import config from "../../config/index.json";
import BlogCard from "./components/BlogCard";
import useMediaQuery from "../hooks/useMedia";

const blogDetail = "../../icons/blog/blog-detail-1.png";
const blogDetail2 = "../../icons/blog/blog-detail-2.png";
const blogDetail3 = "../../icons/blog/blog-detail-3.png";

const BlogDetail = (props) => {
  const { blog } = config;
  const matches = useMediaQuery(768);
  return (
    <div className="flex flex-col gap-[40px] md:w-full">
      <Breadcrumb setUrl={props.setUrl} />
      <div className="flex flex-col items-start md:items-center md:justify-center gap-8 md:w-full">
        <div className="flex flex-col items-start gap-8 md:max-w-[846px]">
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
            <img src={blogDetail} alt="blog-detail-1" className="w-full" />
            <div className="w-full text-normal text-base flex flex-col gap-6">
              <div>{blog["blog-detail-1"]["text-1"]}</div>
              <div>{blog["blog-detail-1"]["text-2"]}</div>
              <div>{blog["blog-detail-1"]["text-3"]}</div>
            </div>
            <div className="w-full text-heading text-2xl">
              Lorem ipsum dolor sit amet consectetur
            </div>
            <div className="w-full text-normal text-base flex flex-col gap-6">
              <div>{blog["blog-detail-2"]["text-1"]}</div>
              <div>{blog["blog-detail-2"]["text-2"]}</div>
            </div>
            <img src={blogDetail2} alt="blog-detail-2" className="w-full" />
            <div className="w-full text-normal text-base flex flex-col gap-6">
              <div>{blog["blog-detail-2"]["text-1"]}</div>
              <div>{blog["blog-detail-2"]["text-2"]}</div>
            </div>
          </div>
        </div>
        {!matches && (
          <div className="flex flex-col items-start gap-6 w-full">
            <p className="text-heading text-2xl">Related posts</p>
            <div className="flex flex-col items-start gap-[49px]">
              <BlogCard src={blogDetail3} />
              <BlogCard src={blogDetail3} />
              <BlogCard src={blogDetail3} />
            </div>
          </div>
        )}
      </div>
      {matches && (
        <div className="flex flex-col items-start gap-6 w-full">
          <p className="text-heading text-2xl">Related posts</p>
          <div className="flex flex-row items-start gap-[49px]">
            <BlogCard src={blogDetail3} />
            <BlogCard src={blogDetail3} />
            <BlogCard src={blogDetail3} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
