import React from "react";
import "./slide.scss";

const Slide = ({
  className,
  id,
  children,
}: {
  className?: string;
  id?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`at-slide ${className || ""}`} id={id}>
      {children}
    </div>
  );
};

export default Slide;
