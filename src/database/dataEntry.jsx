import React from "react";

const databaseEntries = [
    {date:"01/25/26", time:"5:32 PM", name:"Andrew", state:"Leaving", guests:"No"},
    {data:"01/25/26", time:"5:39 PM", name:"Jacob", state:"Entering", guests:"No"},
    {data:"01/25/26", time:"5:59 PM", name:"Clayton", state:"Leaving", guests:"No"},
    {data:"01/25/26", time:"6:45 PM", name:"Andrew", state:"Entering", guests:"Yes"},
]

function getData() {
    return databaseEntries;
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