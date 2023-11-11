import React from "react";
import "./App.scss";
import AboutSlide from "./components/AboutSlide/AboutSlide";
import ApplySlide from "./components/ApplySlide/ApplySlide";
import ContactSlide from "./components/ContactSlide/ContactSlide";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeSlide from "./components/HomeSlide/HomeSlide";
import PartnersSlide from "./components/PartnersSlide/PartnersSlide";
import ScheduleSlide from "./components/ScheduleSlide/ScheduleSlide";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import SnowContainer from "./components/Snow/SnowContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HomeSlide />
        <SnowContainer />
        <Scoreboard />
        <AboutSlide />
        <PartnersSlide />
        <ScheduleSlide />
        <ApplySlide />
        <ContactSlide />
      </main>
      <Footer />
    </div>
  );
}

export default App;
