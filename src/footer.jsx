import React from "react";

function getWeather() {
    return [50, 25];
}

export function Footer() {
    let [temp, rain] = getWeather();

    return (
        <footer>
            <div className="footer-left">
                <span className="footer-top">Current Temp: {temp}F</span>
                <span>Chance of Rain: {rain}%</span>
            </div>
            <div className="footer-right">
                <div className="made-by">
                    <span className="footer-top">Made By:</span>
                    <span>Andrew Harding</span>
                </div>
                <div>
                    <a className="github-button" href="https://github.com/andpdw/CS260-Startup">GitHub</a>
                </div>
            </div>
        </footer>
    )
}