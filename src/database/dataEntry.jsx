import React from "react";

const databaseEntries = [
    {date:"01-25-26", time:"5:32", name:"Andrew", state:"Leaving", guests:"No"},
    {date:"01-25-26", time:"5:39", name:"Jacob", state:"Entering", guests:"No"},
    {date:"01-25-26", time:"5:59", name:"Clayton", state:"Leaving", guests:"No"},
    {date:"01-25-26", time:"6:45", name:"Andrew", state:"Entering", guests:"Yes"},
]

function getData() {
    return databaseEntries;
}

export function newEntry(date, time, name, state, guests, setFunctions) {

    if (date === "" || time === "" || name === "" || state === "") {
        return false;
    } else {
        let sGuests = "";
        if (guests) {
            sGuests = "Yes";
        } else {
            sGuests = "No";
        }
        databaseEntries.push({date: date, time: time, name: name, state: state, guests: sGuests});
        
        for (let i = 0; i < 4; i++) {
            setFunctions[i]("");
        }
        setFunctions[4](false);
        
        return true;
    }
}

export function DataTable() {

    let data = getData();

    return (
        <table className="table table-striped table-dark" id="data-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Who</th>
                    <th>Entering or Leaving</th>
                    <th>Other guests</th>
                </tr>
            </thead>
            <tbody>
                {data.map((entry, index) => (
                    <tr key={index}>
                        <td>{entry.date}</td>
                        <td>{entry.time}</td>
                        <td>{entry.name}</td>
                        <td>{entry.state}</td>
                        <td>{entry.guests}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}