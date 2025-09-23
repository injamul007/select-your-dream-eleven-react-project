import React from 'react';
import navImg from "../../assets/logo.png"
import dollarLogo from "../../assets/dollar_1.png"

const Navbar = () => {
  return (
      <div className="navbar lg:max-w-[1200px] max-w-[90%] mx-auto mb-8">
        <div className="flex-1">
          <a className="text-xl">
            <img className="w-[50px]" src={navImg} alt="navbar_logo" />
          </a>
        </div>
        <div className="flex items-center gap-1 font-bold">
          <span>6000000000</span>
          <span>Coin</span>
          <img src={dollarLogo} alt="coin_dollar_logo" />
        </div>
      </div>
  );
};

export default Navbar;