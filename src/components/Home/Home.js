import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css';

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])
    return (
        <div className="main">
            <div className="App-header">
                <h1>React Rest Countries List</h1>
            </div>
            <div className="App">
                <h1 >Total Countries: {countries.length}</h1>
            </div>
            <div className="country-container">
                
                {
                    countries.map(country => <Country country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Home;