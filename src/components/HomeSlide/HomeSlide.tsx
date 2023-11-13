import React from "react";
import Button from "../Button/Button";
import Slide from "../Slide/Slide";
import "./homeSlide.scss";

const HomeSlide = () => {
  return (
    <Slide className="at-home-slide" id="home">
      <div className="inner-div">
        <div className="slogan">Došašće++</div>
        <div className="slogan-subtitle subtitle-shadow">Natjecanje u programiranju - od 30. studenog do 21. prosinca </div>
        <Button isLink href="#about" className="call-to-action-button">
          Saznaj više!
        </Button>
      </div>
    </Slide>
  );
};

export default HomeSlide;
