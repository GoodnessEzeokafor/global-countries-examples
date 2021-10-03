import { useState } from 'react';
import { countries as allCountries } from 'global-countries';
import './App.css';

function App() {
  const countries = allCountries();
  const [selected, setSelected] = useState('');

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="App">
      <select onChange={handleChange}>
        {countries.map(({ code, country, capital }, index) => (
          <option key={index} value={`${country} ${capital} ${code}`}>
            {`${country} ${capital} ${code}`}
          </option>
        ))}
      </select>

      <p>{selected}</p>
    </div>
  );
}

export default App;
