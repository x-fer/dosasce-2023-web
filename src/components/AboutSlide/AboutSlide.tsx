import React from "react";
import Slide from "../Slide/Slide";
import "./aboutSlide.scss";

const AboutSlide = () => {
  return (
    <Slide className="at-about-slide" id="about">
      <div className="main-title">
        Što je <span className="event-name event-name-dark">ALGO</span>
        <span className="event-name event-name-color">TRADE</span>?
      </div>
      <div className="event-description">
        AlgoTrade je projekt Informatičkog kluba studenata FER-a (X.FER) i
        Financijskog kluba (FK).
        <br />
        Projekt je zamišljen kao hackathon, a ciljana skupina su studenti FER-a
        i Ekonomskog fakulteta jer je zadatak koji će rješavati vezan uz
        područje arbitraže i tradinga.
      </div>
      <div className="subtitle">Predavanja</div>
      <div className="event-description">
        Prije samog natjecanja studenti će imati tematska predavanja u trajanju
        od 4 dana na kojima će steći znanja i kompetencije iz oba područja,
        ekonomije i tehnologije. Predavanja će održavati cijenjeni ekonomisti i
        osobe iz industrije.
      </div>

      <div className="subtitle-smaller">Ukratko o Predavanjima:</div>
      <div className="event-description">
        <ul className="event-description-list">
          <li>
            Mjesto: Fakultet elektrotehnike i računarstva, Unska 3, Zagreb
          </li>
          <li>Vrijeme: od 28. do 31. ožujka 2023.</li>
          <li>Teme: financije, trading, tehnologija</li>
        </ul>
      </div>

      <div className="subtitle">Hackathon</div>
      <div className="event-description">
        Nakon predavanja slijedi hacking dio natjecanja. Timovi dobivaju zadatak
        i rješavaju ga koristeći novostečeno znanjem te osobno iskustvo. Zadatak
        će biti jednostavan za razumjeti no izrazito težak za optimalno
        riješiti. Timovi će imati određeno vrijeme da smisle i implementiraju
        rješenje, a po završetku natjecanja će svoja rješenja i prezentirati.
      </div>
      <div className="at-event-prizes">
        <div className="at-event-prize gold">
          <div className="at-prize-amount">2000€</div>
          <div className="at-prize-description">Nagrada za 1. mjesto</div>
        </div>
        <div className="at-event-prize silver">
          <div className="at-prize-amount">1500€</div>
          <div className="at-prize-description">Nagrada za 2. mjesto</div>
        </div>
        <div className="at-event-prize bronze">
          <div className="at-prize-amount">1000€</div>
          <div className="at-prize-description">Nagrada za 3. mjesto</div>
        </div>
      </div>

      <div className="subtitle-smaller">Ukratko o Hackathonu:</div>
      <div className="event-description">
        <ul className="event-description-list">
          <li>
            Mjesto: Studentski centar Sveučilišta u Zagrebu, Savska cesta 25,
            Zagreb
          </li>
          <li>Početak: 1. travnja 2023. u 9:00h</li>
          <li>Trajanje: 24 sata</li>
          <li>Timovi: do 5 članova</li>
        </ul>
      </div>

      <div className="subtitle">X.FER</div>
      <div className="event-description">
        X.FER je studentska udruga na Fakultetu elektrotehnike i računarstva
        nastala s ciljem provođenja vještine Natjecateljsko programiranje na
        FER-u. Polaznici vještine se upoznaju s primjenom algoritama u
        rješavanju složenih problema te uče optimizirati svoja programska
        rješenja. Osim vještine, organiziramo i programerska natjecanja kroz
        godinu na kojima studenti imaju priliku pokazati usvojena znanja.
        <br />
        Članovi kluba su biviši natjecalji i olimpijci, a udruga trenutno broji
        10-ak aktivnih te preko 50 počasnih članova. Naša misija je omogućiti
        polaznicima vještine strukturirano obrazovanje iz algoritama te ih
        pripremiti za poslovne intervjue karakteristične za ovaj dio IT sektora.
        <br />
        Cilj X.FER-a je okupiti najbolje studente te im omogućiti proširivanje
        znanja i napredak u ovom području. Želimo stvoriti otvorenu zajednicu u
        kojoj će članovi izmjenjivati natjecateljska i poslovna iskustva te
        učiti jedni od drugih.
      </div>
      <div className="subtitle">Financijski klub</div>
      <div className="event-description">
        Financijski klub je studentska udruga osnovana 2005. godine na
        Ekonomskom fakultetu Sveučilišta u Zagrebu. Osnovna djelatnost Kluba je
        širenje i unaprjeđenje znanja svojih članova u području financija te
        pružanje platformi i projekata za njegovo unapređenje kroz zajedničko
        druženje, radionice i brojne druge edukativne sadržaje.
        <br />
        Članovi Financijskog kluba su studenti Ekonomskog fakulteta u Zagrebu
        (EFZG), Fakulteta elektronike i računarstva, visokih i viših poslovnih
        škola (RIT, VERN, ZŠEM, LIBERTAS) te Prirodoslovno-matematičkog
        fakulteta.
        <br />
        Misija Financijskog kluba: Svojim članovima omogućiti dodatno
        obrazovanje u vidu stjecanja teorijskih i praktičnih znanja, iskustava i
        vještina. Želimo da se u tom procesu članovi specijaliziraju te da izađu
        iz naše organizacije sa unaprijeđenim i proširenim financijskim znanjem.
      </div>
    </Slide>
  );
};

export default AboutSlide;
