import React, { useState } from "react";
import VideoBgHeader from "./VideoBgHeader";

const Banner = () => {
  const [showmenu, setshowmenu] = useState("notshowmenu");

  const handleMenuBtn = () => {
    showmenu === "notshowmenu"
      ? setshowmenu("showmenu")
      : setshowmenu("notshowmenu");
  };

  return (
    <header className="header">
      <figure className="header__figure">
        <img src="../../img/fuckportal.png" alt="" />
      </figure>
      <figure className="header__figure">
        <img src="../../img/ramlogo.png" alt="" />
      </figure>

      <nav className="header__nav">
        <button
          onClick={handleMenuBtn}
          className={`header__nav--btn ${showmenu}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`header__nav--ul ${showmenu}`}>
          <VideoBgHeader />
          <li>Characters</li>
          <li>Episodes</li>
          <li>Locations</li>
        </ul>
      </nav>
      <VideoBgHeader />
    </header>
  );
};

export default Banner;
