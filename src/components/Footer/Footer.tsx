import React from "react";
import Slide from "../Slide/Slide";
import "./footer.scss";

const Footer = () => {
  return (
    <Slide className="at-footer">
      <div>
        <a href="https://xfer.hr" target="_blank" rel="noreferrer">
          X.FER
        </a>
        ,{" "}
        <a href="http://www.eestec.hr/home" target="_blank" rel="noreferrer">
          EESTEC LC Zagreb
        </a>{" "}
        | 2023
      </div>
      {/* <div>
        <a href="/" target="_blank" rel="noreferrer">
          Terms of service
        </a>
        {" | "}
        <a href="/" target="_blank" rel="noreferrer">
          Privacy policy
        </a>
      </div> */}
      <div className="social-links">
        {/* <a
          href="https://www.instagram.com/algotrade_hackathon/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="social-icon"
            alt="Instagram link"
            src={require("../../resources/social-icons/icons8-instagram-50.png")}
          />
        </a> */}
        {/* <a href="https://google.com" target="_blank" rel="noreferrer">
          <img
            className="social-icon"
            alt="LinkedIn link"
            src={require("../../resources/social-icons/icons8-linkedin-50.png")}
          />
        </a> */}
      </div>
    </Slide>
  );
};

export default Footer;
