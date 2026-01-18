import { useState } from "react";
import style from "./style/navbar.module.css";
import { HashLink } from "react-router-hash-link";

let Navbar = () => {
  let [navBtn, setNavBtn] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center sticky top-0 z-50 text-white  bg-[#101a37] shadow-[9px_9px_6px_rgba(0,0,0,0.2)] min-h-[7rem] md:min-h-[4rem]">
        <h1 className="text-4xl w-[45%] p-2 break-words text-[#b8982a] font-bold drop-shadow-[5px_8px_2px_rgb(0,0,0)]">
          Expense Tracker
        </h1>
        <div>
          <button
            onClick={() => setNavBtn(!navBtn)}
            className={` ${style.visible} px-4  rounded-lg text-[2rem]`}
          >
            {navBtn ? "\u00D7" : "\u2630"}
          </button>
        </div>
        <ul
          className={`${style.navbar} ${
            navBtn && style.show
          } flex text-lg font-bold top-[7rem] md:top-0 md:translate-x-0 leading-8 transform transition-transform duration-700 ease-in-out
          ${navBtn ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <HashLink smooth className="md:px-4 md:py-6 hover:bg-[#b8982a] p-2" to="#home">
            Home
          </HashLink>
          <HashLink smooth className="md:px-4 md:py-6 hover:bg-[#b8982a] p-2" to="#about">
            About App
          </HashLink>
          <HashLink smooth className="md:px-4 md:py-6 hover:bg-[#b8982a] p-2" to="#appfeatures">
            App features
          </HashLink>
          <HashLink smooth className="md:px-4 md:py-6 hover:bg-[#b8982a] p-2" to="#createdby">
            Created By
          </HashLink>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
