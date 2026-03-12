import React from "react";

export function newEntry(date, time, name, state, guests, setFunctions, addEntry) {

    if (date === "" || time === "" || name === "" || state === "") {
        return false;

    } else {
        let sGuests = "";
        if (guests) {
            sGuests = "Yes";
        } else {
            sGuests = "No";
        }

        const [year, month, day] = date.split("-");
        date = month+"/"+day+"/"+year.slice(-2);

        addEntry({date: date, time: time, name: name, state: state, guests: sGuests});
        
        for (let i = 0; i < 4; i++) {
            setFunctions[i]("");
        }
        setFunctions[4](false);

        return true;
    }
}

export function DataTable({data, getData}) {

    React.useEffect(() => {
        getData();
    }, []);
    

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