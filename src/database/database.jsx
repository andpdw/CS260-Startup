import React from 'react';
import './database.css'

import { DataTable } from './dataEntry';

export function Database() {
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
                            <input type="date" placeholder="Date"></input>
                        </div>
                        <div>
                            <input type="time" placeholder="Time"></input>
                        </div>
                        <div>
                            <input type="text" placeholder="Name"></input>
                        </div>
                    </div>
                    <div id="input-group-2">
                        <div>
                            <input type="radio" id="Entering" name="entering-leaving" value="Entering"></input>
                            <label htmlFor="Entering">Entering</label>

                            <input type="radio" id="Leaving" name="entering-leaving" value="Leaving"></input>
                            <label htmlFor="Leaving">Leaving</label>
                        </div>
                        <div>
                            <input type="checkbox" id="guests" name="guests" value="Yes"></input>
                            <label htmlFor="guests">Guests</label>
                        </div>
                    </div>
                    <div id="submit-button">
                        <button type="button">Submit</button>
                    </div>
                </div>
            </div>
        </main>
  );
}