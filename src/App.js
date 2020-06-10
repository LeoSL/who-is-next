import React from "react";
import moment from "moment";

import "./App.css";

const FIRST_WEEK = 24;

function App() {
  const queue = ["Jodi", "Leo", "Tanvir", "David", "Kurt", "Wojtek"];
  const indexes = Object.keys(queue);
  let currentWeek = moment().week();

  while (!indexes.includes(String(currentWeek - FIRST_WEEK))) {
    currentWeek = currentWeek - 6;
  }

  const person = queue[currentWeek - FIRST_WEEK];

  return (
    <div className="App">
      <header className="App-header">
        <p>This week's ({currentWeek}) person is:</p>
        {person}
      </header>
    </div>
  );
}

export default App;
