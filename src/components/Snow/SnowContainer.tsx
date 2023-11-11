import React from "react";
import "./snow.scss";
import Snow from "./Snow";


const SnowContainer = () => {
    return (
        <div className="snow-container">
            <Snow width={500} height={500} particleCount={100} particleSize={20} particleSpeed={200} particleRotation={30} particleColor={"white"} backgroundColor={"black"} isSquare={false} />
        </div>
    );
};

export default SnowContainer;