import React from "react";

const Breadcrumb = (props) => {
  return (
    <>
      <nav
        className="flex flex-row items-center justify-start px-4 py-3 bg-[#252134] w-full"
        aria-label="Breadcrumb"
      >
        <ol className="flex justify-center items-center">
          <li>
            <div className="flex items-center">
              <a
                href="#blog"
                onClick={() => props.setUrl("#blog")}
                className="text-heading text-sm !text-[#757185] hover:text-blue-600"
              >
                Blog
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <a href="#" className="text-heading text-sm hover:text-blue-600">
                Lorem ipsum...
              </a>
            </div>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
