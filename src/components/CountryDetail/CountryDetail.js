import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CountryDetail.css';

const CountryDetail = () => {
    const {countryName} = useParams();
    const [country, setCountry] = useState({});
    console.log(country)
    useEffect(() =>{
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]));
    },[])
    const {name, flag, population, area, capital} = country;
    return (
        <div className="App">
            <h1>Country Details</h1>
            <h2>{name}</h2>
            <img className="flag" src={flag} alt=""/>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default CountryDetail;