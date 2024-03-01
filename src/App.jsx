import './App.css';
import React, {useState} from 'react';
import axios from 'axios'
import makeColourRegion from "./Helpers/MakeColours.jsx";

function App() {

    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');

    const fetchData = async () => {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/independent?status=true');
        setCountries(response.data);

        } catch (error) {
            console.error("Country not found, error");
        }


    };


    const fetchCountryData = async () => {
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/name/${search}`);
            setCountries(Array.isArray(response.data) ? response.data:[response.data]) ;
            setSearch('');
        } catch (error) {
            console.error("Country not found", error);
        }
    };


    return (
        <>
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    fetchCountryData();
                }}>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search for a country"
                        />
                    <button type="submit">Search</button>
                </form>

                <button onClick={fetchData}>Load Countries</button>
                {countries.map((country, index) => (
                    <div key={index}>
                        <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} style={{width: '50px'}}/>
                        <p>{country.name.common}</p>
                        <p style={{color: makeColourRegion(country.region)}}>{country.name.common}</p>
                        <p>Has a population of {country.population} people</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App
