import React from "react";
import { useState, useEffect } from "react";
import "./scoreboard.scss";


const Scoreboard = () => {

    const [scoreboardData, setScoreboardData] = useState<any[]>([]);

    // fake data
    const fakeScoreboardData = [
        {
            name: "Ivan",
            score: 100
        },
        {
            name: "Marko",
            score: 90
        },
        {
            name: "Ana",
            score: 80
        },
        {
            name: "Ivana",
            score: 70
        },
        {
            name: "Maja",
            score: 60
        },
        {
            name: "Petra",
            score: 50
        },
        {
            name: "Ivana",
            score: 40
        },
        {
            name: "Maja",
            score: 30
        },
        {
            name: "Petra",
            score: 20
        },
        {
            name: "Ivana",
            score: 10
        },
        {
            name: "Maja",
            score: 0
        },
        {
            name: "Petra",
            score: 0
        },
    ]

    /* useEffect(() => {
        fetch("https://api.algotradehack.com/scoreboard")
            .then((response) => response.json())
            .then((data) => setScoreboardData(data));
    }, []); */

    useEffect(() => {
        setScoreboardData(fakeScoreboardData);
    }, []);

    return(
        <div className="at-scoreboard">
            <div className="at-title">Rezultati</div>
            <div className="at-scoreboard-data-wrapper">
                <div className="at-scoreboard-data">
                    <div className="at-scoreboard-data-header">
                        <div className="at-scoreboard-data-header-name">Ime</div>
                        <div className="at-scoreboard-data-header-score">Rezultat</div>
                    </div>
                    {scoreboardData.map((scoreboardData, idx) => (
                        <div className="at-scoreboard-data-row" key={scoreboardData.name + "-" + idx}>
                            <div className="at-scoreboard-data-row-name">{scoreboardData.name}</div>
                            <div className="at-scoreboard-data-row-score">{scoreboardData.score}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Scoreboard;