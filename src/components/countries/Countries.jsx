import React, { use, useState } from 'react';
import Country from '../country/Country';
import './countries.css'

const Countries = ({countriesPromise}) => {

    const[visitedCountries , setvisitedCountries]= useState([]);

    const visitedHandler =(country)=>
    {
        const newVisitedCOuntries = [...visitedCountries,country];
        setvisitedCountries(newVisitedCOuntries)
    }

    const countriesData = use(countriesPromise);
    const countries =countriesData.countries;
    
    return (
        <div >
            <h1>My visited   countriessss : {countries.length}</h1>
            <h3>Total country visited: {visitedCountries.length} </h3>

            <ol>
                {
                    visitedCountries.map(country=><li key={country.ccn3.ccn3}>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
                countries.map(country =><Country country={country} key={country.ccn3.ccn3} visitedHandler={visitedHandler}></Country> )
            }
            </div>
        </div>
    );
};

export default Countries;
