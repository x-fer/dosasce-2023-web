import React from "react";
import Slide from "../Slide/Slide";
import "./partnersSlide.scss";

import { partnersData } from "./partners-data";

const PartnersSlide = () => {
  return (
    <Slide className="at-partners-slide" id="partners">
      <div className="at-title">Partneri</div>
      <div className="at-partners-list">
        {partnersData.map((partner) => (
          <div className="at-partner" key={partner.website}>
            <a href={partner.website} target="_blank" rel="noreferrer">
              <img
                className={`at-partner-logo ${partner.dark ? "dark" : ""}`}
                alt={`${partner.name} logo`}
                title={partner.name}
                src={partner.imgSrc}
              />
            </a>
          </div>
        ))}
      </div>
    </Slide>
  );
};

export default PartnersSlide;
