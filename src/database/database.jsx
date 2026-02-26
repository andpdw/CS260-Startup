import React from 'react';
import './database.css'

import { DataTable } from './dataEntry';
import { newEntry } from './dataEntry';

export function Database() {
    const [date, setDate] = React.useState("");
    const [time, setTime] = React.useState("");
    const [name, setName] = React.useState("");
    const [state, setState] = React.useState("");
    const [guests, setGuests] = React.useState(false);

    const setFunctions = [
        setDate, setTime, setName, setState, setGuests
    ]

  return (
    <main>
            <div className="table-title">
                <h3>Roomate Tracking</h3>
            </div>
            <div className="data-table-div">
                <DataTable/>
            </div>
            <div className="data-entry-div">
                <div>
                    <h3 id="log-in-title">Log Entry or Exit Below:</h3>
                </div>
                <div className="input-fields">
                    <div id="input-group-1">
                        <div>
                            <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)}></input>
                        </div>
                        <div>
                            <input type="time" placeholder="Time" value={time} onChange={(e) => setTime(e.target.value)}></input>
                        </div>
                        <div>
                            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                        </div>
                    </div>
                    <div id="input-group-2">
                        <div>
                            <input type="radio" id="Entering" name="entering-leaving" value="Entering" checked={state === "Entering"} onChange={(e) => setState(e.target.value)}></input>
                            <label htmlFor="Entering">Entering</label>

                            <input type="radio" id="Leaving" name="entering-leaving" value="Leaving" checked={state === "Leaving"} onChange={(e) => setState(e.target.value)}></input>
                            <label htmlFor="Leaving">Leaving</label>
                        </div>
                        <div>
                            <input type="checkbox" id="guests" name="guests" checked={guests} onChange={(e) => setGuests(e.target.checked)}></input>
                            <label htmlFor="guests">Guests</label>
                        </div>
                    </div>
                    <div id="submit-button">
                        <button type="button" 
                        onClick={() => {
                            const allData = newEntry(date, time, name, state, guests, setFunctions)
                            
                            if (!allData) {
                                alert("Please fill out all fields before submitting")
                            }
                        }}>Submit</button>
                    </div>
                </div>
            </div>
        </main>
  );
}