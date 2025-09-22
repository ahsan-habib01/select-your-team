import React from 'react';
import navImg from '../../assets/logo.png';
import currencyImg from '../../assets/Currency.png';

const NavBar = ({ availableBalance }) => {
  return (
    <div className="navbar mt-2 max-w-6xl mx-auto">
      <div className="flex-1">
        <a className=" text-xl">
          <img className="w-16 h-16" src={navImg} alt="" />
        </a>
      </div>
      <div className="flex items-center gap-2">
        <span>{availableBalance}</span>
        <span>Coin</span>
        <img src={currencyImg} alt="" />
      </div>
    </div>
  );
};

export default NavBar;