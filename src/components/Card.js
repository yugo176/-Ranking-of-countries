import React from 'react';

const Card = (props) => {
    const {country} = props;
    
    const numberFormat = (x) => {
        return x.toString().replace(/\B(?=(\d{3} + (?!\d)))/g, " ");
    }

    return (
        <li className='card'>
            <img src= {country.flags.png}  alt="flag" srcset="" />
            <div className='data-container'>
                <ul>
                    <li> {country.name.common} </li>
                    <li> {country.capital} </li>
                    <li> Pop {numberFormat(country.population)} </li>

                </ul>
                
            </div>
        </li >
    );
};

export default Card;