import React, { useState } from "react";
import "./header.scss";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  return (
    <header className="header">
      <a href="https://algotrade.xfer.hr" className="logo">
        <span className="logo-dark">ALGO</span>
        <span className="logo-color">TRADE</span>
      </a>
      <input
        className="side-menu"
        type="checkbox"
        checked={mobileNavOpen}
        onChange={() => setMobileNavOpen(!mobileNavOpen)}
        id="side-menu"
      />
      <label className="hamb" htmlFor="side-menu">
        <span className="hamb-line"></span>
      </label>

      <nav className="nav">
        <ul className="menu">
          <li className="header-menu-element">
            <a href="#home" onClick={(e) => setMobileNavOpen(false)}>
              Naslovna
            </a>
          </li>
          <li className="header-menu-element">
            <a href="#about" onClick={(e) => setMobileNavOpen(false)}>
              O događaju
            </a>
          </li>
          <li className="header-menu-element">
            <a href="#partners" onClick={(e) => setMobileNavOpen(false)}>
              Partneri
            </a>
          </li>
          <li className="header-menu-element">
            <a href="#schedule" onClick={(e) => setMobileNavOpen(false)}>
              Raspored
            </a>
          </li>
          <li className="header-menu-element">
            <a href="#apply" onClick={(e) => setMobileNavOpen(false)}>
              Prijava
            </a>
          </li>
          <li className="header-menu-element">
            <a href="#contact" onClick={(e) => setMobileNavOpen(false)}>
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
