import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-start h-12 w-full px-6 items-center bg-gradient-to-r from-purple-700 to-red-500 text-white/80">
      <div className="flex space-x-2 px-6">
        <Image src="/favicon.ico" alt="logo" width={25} height={25}></Image>
        <div className="align-text-bottom relative top-1 text-lg">america</div></div>
      <div className="">
        <ul className="flex items-center space-x-7 px-6 pr-10 uppercase font-bold text-sm">
          <li>book</li>
          <li>check in</li>
          <li>manage</li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center space-x-4 px-2 text-xs capitalize font-semibold"><li>Deals</li>
        <li>Flying with us</li>
        <li>Where we fly</li>
        <li>Shop</li>
        <li>FAQ</li>
        <li>Fees</li></ul>
      </div>
      <div className="flex items-center space-x-2 items-right absolute right-16">
        <div className="text-lg">elevate</div>
        <button className="capitalize text-xs px-2 font-semibold">sign in</button>
        <button className="capitalize text-xs px-2 font-semibold">sign up</button>
      </div>
    </div>
  );
};

export default NavBar;
