"use client";
import React, { Fragment } from "react";
import { DerivableLogo, DerivableLogoMini } from "../icons/index";
import config from "../config/index.json";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";

const Menu = (props) => {
  const { navigation } = config;
  return (
    <>
      <Popover>
        <div className="flex flex-col items-start fixed w-full h-[80px] bg-[rgba(0, 0, 0, 0.1)] top-0 backdrop-blur-[32px] z-[9999]">
          <nav className="flex flex-row justify-between p-2 lg:px-[120px] py-0 w-full h-full border-b-[1px] border-zinc-700">
            <div className="flex justify-center items-center h-full">
              <a href="#">
                <DerivableLogo />
              </a>
            </div>
            <div className="hidden md:flex flex-row justify-center items-center gap-[56px] self-stretch h-full">
              {navigation.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => props.setUrl(item.href)}
                  className="h-full"
                >
                  <div className="h-full button-link box-border flex flex-row items-center py-2 gap-2 font-['Sora'] text-sm font-semibold text-grey-1">
                    {item.name}
                  </div>
                </a>
              ))}
            </div>
            <div className="hidden md:flex h-full justify-center items-center">
              <div className="box-border flex flex-row justify-center items-center py-[14px] px-5 gap-[10px] h-12 min-w-[120px] rounded-lg font-['Sora'] text-xs font-semibold">
                <div className="border-gradient p-[2px] h-12 w-full rounded-lg">
                  <div className="h-full w-full bg-[#0E0C15] py-[14px] px-5 rounded-lg uppercase cursor-pointer	flex flex-row justify-center items-center">
                    launch app
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center md:hidden">
              <Popover.Button
                className={`bg-background rounded-md inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
              >
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-8 w-8" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div
                  className={`rounded-lg shadow-md bg-[#0E0C15] ring-1 ring-black ring-opacity-5 overflow-hidden`}
                >
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <DerivableLogoMini />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button
                        className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                      >
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <Link
                        spy={true}
                        active="active"
                        smooth={true}
                        duration={1000}
                        key={item.name}
                        to={item.href}
                        className="block px-3 py-2 font-['Sora] font-semibold text-2xl text-grey-1 border-l-[3px] border-transparent button-link-mobile"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="flex h-full justify-start">
                    <div className="box-border flex flex-row justify-center items-center px-3 py-2 gap-[10px] h-12 min-w-[120px] rounded-lg font-['Sora'] text-xs font-semibold">
                      <div className="border-gradient p-[2px] h-12 w-full rounded-lg">
                        <div className=" h-full w-full bg-[#0E0C15] py-[14px] px-5 rounded-lg uppercase cursor-pointer	flex flex-row justify-center items-center">
                          launch app
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </nav>
        </div>
      </Popover>
    </>
  );
};

export default Menu;
