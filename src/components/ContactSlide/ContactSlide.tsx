import React, { useState } from "react";
import Slide from "../Slide/Slide";
import "./contactSlide.scss";
import { questionsData } from "./questions-data";

const ContactSlide = () => {
  const [activeQuestions, setActiveQuestions] = useState<number[]>([]);

  const handleQuestionToggle = (idx: number) => {
    if (activeQuestions.includes(idx)) {
      setActiveQuestions(activeQuestions.filter((q) => q !== idx));
    } else {
      setActiveQuestions([...activeQuestions, idx]);
    }
  };

  return (
    <Slide className="at-contact-slide" id="contact">
      <div className="at-title">Kontakt i česta pitanja</div>

      <div className="at-contact-subtitle">
        Ako imate bilo kakva pitanja, slobodno nam se obratite!
      </div>

      <div className="at-contact">
        E-mail:{" "}
        <a href="mailto:algo.trade.hackathon@gmail.com">
          algo.trade.hackathon@gmail.com
        </a>
      </div>
      <div className="at-contact">
        Instagram:{" "}
        <a
          href="https://www.instagram.com/algotrade_hackathon/"
          target="_blank"
          rel="noreferrer"
        >
          @algotrade_hackathon
        </a>
      </div>

      {questionsData && questionsData.length > 0 && (
        <div className="at-questions-container">
          {questionsData.map((faqEntry, idx) => (
            <div key={`faq-entry-${idx}`}>
              <button
                onClick={(e) => handleQuestionToggle(idx)}
                className="at-faq-question"
              >
                <div>{faqEntry.question}</div>
                <div>{activeQuestions.includes(idx) ? "-" : "+"}</div>
              </button>
              <div
                className={`at-faq-answer ${
                  activeQuestions.includes(idx) ? "active" : "not-active"
                }`}
              >
                {faqEntry.answer}
              </div>
            </div>
          ))}
        </div>
      )}
    </Slide>
  );
};

export default ContactSlide;
