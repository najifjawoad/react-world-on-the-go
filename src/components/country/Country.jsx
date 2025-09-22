import React, { useState } from 'react';
import './country.css'
const Country = ({ country , visitedHandler}) => {
    // console.log(country.area.area)
    
    const [visited, setVisited] = useState(false);

    const handler = () => {

        // console.log('visited')

        // system-01 :

        // if(visited)
        // {
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        // }

        // system-02 :
        // setVisited(visited ? false : true);

        // system-03
        setVisited(!visited);
        visitedHandler(country);
    }


    return (
        <div className={`country ${visited && 'country_visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name : {country.name.common} </h3>
            <p>Population : {country.population.population}</p>

            <p>Area : {country.area.area} {country.area.area > 300000 ? 'Big Country' : 'Small Country'}</p>

            <button onClick={handler}>
                {
                    visited ? 'visited' : 'Not Visited'
                }
            </button>
        </div>
    );
};

export default Country;
/*

*/