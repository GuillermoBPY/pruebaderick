import React, { useState } from 'react'
import ParticleHeader from '../Particles/ParticleHeader'
import ParticleMenu from '../Particles/ParticleMenu'

const Banner = () => {
  const [showmenu, setshowmenu] = useState("notshowmenu")

const handleMenuBtn = () => {
  showmenu === "notshowmenu" ? setshowmenu("showmenu") :setshowmenu("notshowmenu")
}

  return (
    <header className="header">
      
      <figure className="header__figure">
        <img src="../../img/ramfy.png" alt="" />
      </figure>
      <figure className="header__figure">
        <img src="../../img/ramlogo.png" alt="" />
      </figure>

      <nav className="header__nav">
        <button onClick={handleMenuBtn} className={`header__nav--btn ${showmenu}`}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`header__nav--ul ${showmenu}`}>
          <ParticleMenu />
          <li>Characters</li>
          <li>Episodes</li>
          <li>Locations</li>
        </ul>
      </nav>
      <ParticleHeader />
    </header>
  )
}

export default Banner