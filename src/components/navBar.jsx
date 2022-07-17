// import { Component } from "react";
const navbar = () => {
  const ulStyle = "w-1/3 flex text-sm";
  return (
    <div className="flex bg-white p-5 pt-6 pb-20 justify-between">
      <ul className={"justify-start hover:cursor-pointer" + ulStyle}>
        <h5 className="text-xl font-bold pr-20">Samsung</h5>
        <li className="px-2 py-2 font-semibold hover:cursor-pointer hover:rounded-3xl hover:bg-black hover:text-white">
          Mobile
        </li>
        <li className="px-2 py-2 font-semibold hover:cursor-pointer hover:rounded-3xl hover:bg-black hover:text-white">
          TC&AV
        </li>
        <li className="px-2 py-2 font-semibold hover:cursor-pointer hover:rounded-3xl hover:bg-black hover:text-white">
          Home Appliances
        </li>
        <li className="px-2 py-2 font-semibold hover:cursor-pointer hover:rounded-3xl hover:bg-black hover:text-white">
          IT
        </li>
        <li className="px-2 py-2 font-semibold hover:cursor-pointer hover:rounded-3xl hover:bg-black hover:text-white">
          Displays
        </li>
        <li className="px-2 py-2 font-semibold hover:cursor-pointer hover:rounded-3xl hover:bg-black hover:text-white">
          Shop
        </li>
      </ul>
      <ul className={"justify-end" + ulStyle}>
        <li className="px-2 py-2 font-semibold hover:cursor-pointer hover:rounded-3xl hover:bg-black hover:text-white">
          Explore
        </li>
        <li className="px-2 py-2 font-semibold hover:cursor-pointer hover:rounded-3xl hover:bg-black hover:text-white">
          Support
        </li>
        <li className="px-2 py-2 font-semibold hover:cursor-pointer hover:rounded-3xl hover:bg-black hover:text-white">
          ForBuisness
        </li>
        <li className="px-2 py-2 font-semibold hover:cursor-pointer hover:rounded-3xl hover:bg-black hover:text-white">
          Search
        </li>
        <li className="px-2 py-2 font-semibold hover:cursor-pointer hover:rounded-3xl hover:bg-black hover:text-white">
          Shop
        </li>
        <li className="px-2 py-2 font-semibold hover:cursor-pointer hover:rounded-3xl hover:bg-black hover:text-white">
          Account
        </li>
      </ul>
    </div>
  );
};

export default navbar;
