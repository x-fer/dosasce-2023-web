import React from "react";
import './snow.scss'
import Snowfall from "react-snowfall";

const Snow = () => {
    return (
        <div className="snow-container">
            <Snowfall color="white" snowflakeCount={100} />
        </div>
    );
};

export default Snow;