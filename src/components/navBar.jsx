// import { Component } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

const navbar = () => {
  const ulStyle = "w-1/3 flex text-sm";
  return (
    <div className="w-4/6 m-auto flex bg-white p-5 pt-6 pb-20 justify-between">
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
          <BsSearch/>
        </li>
        <li className="px-2 py-2 font-semibold hover:cursor-pointer hover:rounded-3xl hover:bg-black hover:text-white">
          <FiShoppingCart/>
        </li>
        <li className="px-2 py-2 font-semibold hover:cursor-pointer hover:rounded-3xl hover:bg-black hover:text-white">
          <BsPerson/>
        </li>
      </ul>
    </div>
  );
};

export default navbar;
