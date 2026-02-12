import React from 'react';
import './database.css'

export function Database() {
  return (
    <main>
            <div className="table-title">
                <h3>Roomate Tracking</h3>
            </div>
            <div className="data-table-div">
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
                        <tr>
                            <td>01/25/26</td>
                            <td>5:32 PM</td>
                            <td>Andrew</td>
                            <td>Leaving</td>
                            <td>None</td>
                        </tr>
                        <tr>
                            <td>01/25/26</td>
                            <td>5:39 PM</td>
                            <td>Jacob</td>
                            <td>Entering</td>
                            <td>None</td>
                        </tr>
                        <tr>
                            <td>01/25/26</td>
                            <td>5:59 PM</td>
                            <td>Clayton</td>
                            <td>Leaving</td>
                            <td>None</td>
                        </tr>
                        <tr>
                            <td>01/25/26</td>
                            <td>6:45 PM</td>
                            <td>Andrew</td>
                            <td>Entering</td>
                            <td>Yes</td>
                        </tr>
                    </tbody>
                </table>
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
                            <label for="Entering">Entering</label>

                            <input type="radio" id="Leaving" name="entering-leaving" value="Leaving"></input>
                            <label for="Leaving">Leaving</label>
                        </div>
                        <div>
                            <input type="checkbox" id="guests" name="guests" value="Yes"></input>
                            <label for="guests">Guests</label>
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