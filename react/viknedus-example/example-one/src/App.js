import "./App.css";
import { useState } from "react";

// require library
const globalCountries = require("global-countries");
// declare countries
const countries = globalCountries.countries();

function App() {
  const [value, setValue] = useState(countries[0].country);

  return (
    <div className="App">
      <header className="App-header">
        {/* countries dropdown created */}
        <select onChange={(e) => setValue(e.target.value)} value={value}>
          {countries.map(({ country, isoCodes }) => (
            <option key={isoCodes} value={country}>
              {country}
            </option>
          ))}
        </select>
        {/* Selected country */}
        <p>Selected country is {value.toUpperCase()}</p>
      </header>
    </div>
  );
}

export default App;
