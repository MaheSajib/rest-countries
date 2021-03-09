import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const {flag, name} = props.country;
    const history = useHistory();
    const handleClick = (name) => {
        const url = `/country/${name}`;
        history.push(url);
    }
    const countryStyle = {
        border: '1px solid gray',
        borderShadow: '20px',
        height: '350px',
        width: '300px',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
        backgroundColor: 'pink',
    }
    return (
        <div style={countryStyle}>
            <img className="flag" src={flag} alt=""/>
            <h2>{name}</h2>
            <p><Link to={`/country/${name}`}> {name} </Link></p>
            <button onClick={() => handleClick(name)}>Full Details</button>
        </div>
    );
};

export default Country;