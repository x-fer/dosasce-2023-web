import React from "react";
import Slide from "../Slide/Slide";
import "./aboutSlide.scss";

const AboutSlide = () => {
  return (
    <Slide className="at-about-slide" id="about">
      <div className="main-title">
        Što je Došašće++?
      </div>
      <div className="event-description">
        Došašće++ je projekt Informatičkog kluba studenata FER-a (X.FER) i
        Europske udruge studenata elektrotehnike (EESTEC LC Zagreb).
        <br />
        Projekt je zamišljen kao hackathon, a ciljana skupina su studenti i
        srednjoškolci koje zanima programiranje i optimizacija. Natjecanje se 
        sastoji od tri zadatka, a svaki od njih će postati dostupan na početku
        svake od tri faze natjecanja. U svakoj fazi natjecatelji će imati
        određeno vrijeme da riješe zadatak u trajanju od tjedan dana. Nakon
        završetka svake faze, najbolji pojedinci će biti nagrađeni.
      </div>
      <div className="subtitle">Predavanja</div>
      <div className="event-description">
        Tokom natjecanja organiziraju se predavanja na kojima će profesori i
        stručnjaci iz različitih područja održati predavanja o idejama i
        mogućim rješenjima za zadatak. Predavanja će se održati u prostorijama
        Fakulteta elektrotehnike i računarstva, a bit će otvorena za sve
        zainteresirane. Termine, lokacije i predavače objavit ćeo na službenoj
        Instagram stranici.
      </div>

      <div className="subtitle-smaller">Ukratko o Predavanjima:</div>
      <div className="event-description">
        <ul className="event-description-list">
          <li>
            Mjesto: Fakultet elektrotehnike i računarstva
          </li>
          <li>
            Učionice: Naknadno ćemo objaviti na Instagramu
          </li>
          <li>Vrijeme: od 30. studenog do 21. prosinca 2023.</li>
        </ul>
      </div>

      <div className="subtitle">Hackathon</div>
      <div className="event-description">
        Svaki zadatak će biti dostupan na početku svake od tri faze natjecanja.
        Na kraju svake faze rješenja koja su predana do 23:59 zadnjeg dana
        faze bit će evaluirana i bodovana. Nakon evaluacije objavit ćemo
        rang-listu s svim sudionicima i njihovim bodovima.
      </div>
      <div className="at-event-prizes">
        <div className="at-event-prize gold">
          <div className="at-prize-amount">BOR!</div>
          <div className="at-prize-description">Nagrada za 1. mjesto</div>
        </div>
        <div className="at-event-prize silver">
          <div className="at-prize-amount">DEKICA</div>
          <div className="at-prize-description">Nagrada za 2. mjesto</div>
        </div>
        <div className="at-event-prize bronze">
          <div className="at-prize-amount">CARAPICE</div>
          <div className="at-prize-description">Nagrada za 3. mjesto</div>
        </div>
      </div>

      <div className="subtitle-smaller">Ukratko o Natjecanju:</div>
      <div className="event-description">
        <ul className="event-description-list">
          <li>
            Mjesto: Online! 😄
          </li>
          <li>Vrijeme: od 30. studenog do 21. prosinca 2023.</li>
            <ul>
              <li>1. faza: 30. studenog - 7. prosinca</li>
              <li>2. faza: 7. prosinca - 14. prosinca</li>
              <li>3. faza: 14. prosinca - 21. prosinca</li>
            </ul>
          <li>Teme: optimizacija, programiranje, tehnologija</li>
        </ul>
      </div>

      <div className="subtitle">X.FER</div>
      <div className="event-description">
        X.FER je studentska udruga na Fakultetu elektrotehnike i računarstva
        nastala s ciljem provođenja vještine Natjecateljsko programiranje na
        FER-u. Polaznici vještine se upoznaju s primjenom algoritama u
        rješavanju složenih problema te uče optimizirati svoja programska
        rješenja. Osim vještine, organiziramo i programerska natjecanja 
        na kojima studenti imaju priliku pokazati usvojena znanja.
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
      <div className="subtitle">EESTEC LC Zagreb</div>
      <div className="event-description">
        EESTEC treba ovdje
      </div>
    </Slide>
  );
};

export default AboutSlide;
