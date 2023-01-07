import Image from "next/image";
import React, { useState } from "react";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState("hidden");
  const toggleHamburger = () => {
    if (showMenu == "hidden") setShowMenu("absolute md:left-[78%]  left-2  text-black w-1/6 top-12");
    else setShowMenu("hidden");
  };
  const toggleHamburgerLeft = () => {
    toggleHamburger()
  }

  return (
    <div className="flex justify-start h-12 w-full pl-6 md:px-6 items-center bg-gradient-to-r from-purple-700 to-red-500 text-white/80">
      
      <div className="flex md:hidden w-[37%]" onClick={toggleHamburgerLeft}>
        <div class="space-y-1.5">
          <div class="w-6 h-0.5 bg-white"></div>
          <div class="w-6 h-0.5 bg-white"></div>
          <div class="w-6 h-0.5 bg-white"></div>
        </div>
      </div>

      <div className="flex space-x-2 md:px-6">
        <Image src="/favicon.ico" alt="logo" width={25} height={25}></Image>
        <div className="align-text-bottom relative top-1 text-lg">america</div>
      </div>
      <div className="w-1/2 lg:w-1/5">
        <ul className={  "md:flex flex-col hidden md:flex-row items-center md:space-x-7 px-6 pr-10 uppercase font-bold text-sm"}>
          <li>book</li>
          <li>check in</li>
          <li>manage</li>
        </ul>
      </div>
      <div className={showMenu + " lg:flex lg:w-[52%] " }  >
        <ul className="flex lg:items-center bg-purple-500/40 md:bg-red-500/20 lg:bg-transparent space-y-1 lg:space-y-0 pt-1 lg:pt-0 pb-3 lg:pb-0 px-2 lg:space-x-4 text-xs capitalize font-semibold flex-col lg:flex-row">
          <li className="cursor-pointer">Deals</li>
          <li className="cursor-pointer">Flying with us</li>
          <li className="cursor-pointer">Where we fly</li>
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">FAQ</li>
          <li className="cursor-pointer">Fees</li>
        </ul>
      </div>
      <div className="flex items-center space-x-2 w-1/4 lg:w-auto">
        <div className="text-lg hidden lg:block">elevate</div>
        <button className="capitalize text-xs px-2 font-semibold">
          sign in
        </button>
        <button className="hidden md:block capitalize text-xs px-2 font-semibold">
          sign up
        </button>
      </div>
      <div className="md:flex hidden lg:hidden" onClick={toggleHamburger}>
        <div class="space-y-1.5">
          <div class="w-6 h-0.5 bg-white"></div>
          <div class="w-6 h-0.5 bg-white"></div>
          <div class="w-6 h-0.5 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
