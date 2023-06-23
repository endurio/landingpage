import React from "react";

const Available = (props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-[120px] pb-[120px] gap-[56px]">
        <p className="text-heading text-[48px]">Available on</p>
        <div className="flex flex-wrap flex-row justify-center md:justify-between items-start gap-8 max-w-[584px]">
          <div className="relative background-gray box-border flex flex-col items-center justify-center rounded-3xl gap-[26px] w-[276px] h-[292px]">
            <img
              src="/ethereum.png"
              alt="logo"
              className="absolute -z-[2] top-0"
            />
            <div className="flex flex-col items-center gap-4 max-w-[100px] max-h-[146px]">
              <img src="/ethereum-icon.png" alt="logo" />
              <p className="text-heading text-xl">Ethereum</p>
            </div>
            <div className="flex justify-center items-center">
              <div className="box-border flex flex-row justify-center items-center py-[14px] px-5 gap-[10px] h-12 min-w-[120px] rounded-lg text-heading text-xs">
                <div className="border-gradient p-[2px] h-[36px] w-full rounded-lg">
                  <div className="group relative h-full w-full bg-[#0E0C15] py-[14px] px-5 rounded-lg uppercase cursor-pointer	flex flex-row justify-center items-center">
                    launch app
                    <div className="border-light absolute top-full text-normal !text-black left-1/2 z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded border bg-white py-[6px] px-4 text-sm font-semibold opacity-0 group-hover:opacity-100">
                      <span className="border-light absolute -top-1 left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm border-t border-l bg-white"></span>
                      Coming Soon
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative background-gray box-border flex flex-col items-center justify-center rounded-3xl gap-[26px] w-[276px] h-[292px]">
            <img
              src="/arbitrum.png"
              alt="logo"
              className="absolute -z-[2] top-0"
            />
            <div className="flex flex-col items-center gap-4 max-w-[100px] max-h-[146px]">
              <img src="/arbitrum-icon.png" alt="logo" />
              <p className="text-heading text-xl">Arbitrum</p>
            </div>
            <div className="flex justify-center items-center">
              <div className="box-border flex flex-row justify-center items-center py-[14px] px-5 gap-[10px] h-12 min-w-[120px] rounded-lg text-heading text-xs">
                <div className="border-gradient p-[2px] h-[36px] w-full rounded-lg">
                  <div className="group relative h-full w-full bg-[#0E0C15] py-[14px] px-5 rounded-lg uppercase cursor-pointer	flex flex-row justify-center items-center">
                    launch app
                    <div className="border-light absolute top-full text-normal !text-black left-1/2 z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded border bg-white py-[6px] px-4 text-sm font-semibold opacity-0 group-hover:opacity-100">
                      <span className="border-light absolute -top-1 left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm border-t border-l bg-white"></span>
                      Coming Soon
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Available;
