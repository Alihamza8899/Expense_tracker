import { useState } from "react";
import style from "./style/navbar.module.css";

let Navbar = () => {
  let [navBtn, setNavBtn] = useState(false);
  return (
    <div className="flex justify-between item-center text-white p-4 bg-[#101a37] shadow-[9px_9px_6px_rgba(0,0,0,0.2)] min-h-[9rem] md:min-h-[4rem]">
      <h1 className="text-4xl w-[45%] break-words text-[#b8982a] font-bold drop-shadow-[5px_8px_2px_rgb(0,0,0)]">
        Expense Tracker
      </h1>
      <ul
        className={`${style.navbar} flex item-center p-2 text-lg font-bold leading-8`}
      >
        <li className="px-2 hover:bg-[#b8982a] ">Home</li>
        <li className="px-2">About App</li>
        <li className="px-2">App features</li>
        <li className="px-2">Created By</li>
      </ul>
      <div>
        <button
          onClick={() => setNavBtn(!navBtn)}
          className={`${navBtn ? "tz" : " "} ${
            style.btn
          } px-4 rounded-lg`}
        >
          {navBtn ? "&time;" : "#&2717;"}
        </button>
      </div>
    </div>
  );
};
export default Navbar;
