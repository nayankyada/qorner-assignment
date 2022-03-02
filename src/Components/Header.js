import React from "react";
import HeaderImage from "../images/Header.png";
import Backarrow from "../images/Backarrow.svg";
import Youtube from "../images/YouTube.png";
import Logo from "../images/Logo.svg";

function Header() {
  return (
    <div
      className="h-1/3 bg-no-repeat bg-cover bg-bottom px-6 py-9 font-encodeSans"
      style={{ backgroundImage: `url(${HeaderImage})` }}
    >
      <div className="relative flex items-center ">
        <div className="text-white absolute ">
          <img src={Backarrow}></img>
        </div>
        <div className="flex justify-center items-center m-auto">
          <div className="text-white text-lg font-semibold   leading-5">
            Youtube State
          </div>
          <img className="pl-3" src={Youtube}></img>
        </div>
      </div>

      <div className="flex justify-center items-center pt-14">
        <div>
          <img  src={Logo}></img>
        </div>
        <div className="pl-2 flex flex-col ">
          <p className="text-white font-semibold">Dude Perfect</p>
          <div className="text-white flex justify-start items-center text-10 font-thin  space-x-1">
            <p >56.9M subscribers</p>
            <div className=" bg-white rounded-full" style={{padding:"1px"}}></div>
            <p>279 videos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
