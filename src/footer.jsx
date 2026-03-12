import React from "react";

export function Footer() {

    const [weather, setWeather] = React.useState({
        temp: "--",
        rain: "--",
    });

    React.useEffect(() => {
        async function loadWeather() {
            try {
                const response = await fetch("/api/weather");

                if (response.status !== 200) {
                    throw new Error("Weather request failed");
                }

                const data = await response.json();
                setWeather({
                    temp: data.temp,
                    rain: data.rain,
                });
            } catch {
                setWeather({
                    temp: "NA",
                    rain: "NA",
                });
            }
        }

        loadWeather();
    }, [])

    return (
        <footer>
            <div className="footer-left">
                <span className="footer-top">Current Temp: {weather.temp}F</span>
                <span>Rain: {weather.rain} mm</span>
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