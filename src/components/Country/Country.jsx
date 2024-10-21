import { useState } from 'react';
import './CountryCSS.css';

const Country = ({countryProps,handleVisitedCountry,handleVisitedFlag}) => {
    // console.log(countryProps);
    const {name,flags,population,area,ccn3} =countryProps
    const [visited,setVisited] = useState(false);
    const handleVisited = ()=>{
        
        setVisited(!visited);
    }
    // console.log(handleVisitedCountry);
    return (
        <div className={`country ${visited && 'visited'}`}>
            <img src={flags.png} alt="" />
            <h1>{name?.common}</h1>
            <p>Population: {population}</p>
            <p>Aria : {area}</p>
            <p>code:{ccn3} </p>
            <button onClick={()=>handleVisitedCountry (countryProps)}>Mark Visited</button>
            <br/><br></br>
            <button onClick={()=>handleVisited(countryProps) }>{visited? 'Visited This Country':'Want Going'}</button>
            <br/><br/>
            <button onClick={()=>handleVisitedFlag(countryProps.flags.png)}>Flug add</button>
            {
                visited && ' I have visited this Country'
            }

        </div>
    );
}

export default Country;