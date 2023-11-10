import React from "react";
import "./button.scss";

const Button = ({
  className,
  isLink,
  href,
  onClick,
  children,
}: {
  className?: string;
  isLink?: boolean;
  href?: string;
  onClick?: (e: any) => void;
  children: React.ReactNode;
}) => {
  return (
    <>
      {isLink ? (
        // <div >
        <a className={`at-button ${className || ""}`} href={href}>
          {children}
        </a>
      ) : (
        // </div>
        <button onClick={onClick} className={`at-button ${className || ""}`}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
