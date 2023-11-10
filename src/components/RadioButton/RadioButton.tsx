import React from "react";
import "./radioButton.scss";

const RadioButton = ({
  data,
  activeElement,
  onChange,
}: {
  data: { id: number; title: string }[];
  activeElement: number;
  onChange: (id: number) => void;
}) => {
  return (
    <div className="at-radio-button">
      {data.map((entry) => (
        <button
          key={`radio-button-${entry.id}`}
          className={`at-radio-button-entry ${
            activeElement === entry.id ? "active" : ""
          }`}
          onClick={(e) => onChange(entry.id)}
        >
          {entry.title}
        </button>
      ))}
    </div>
  );
};

export default RadioButton;
