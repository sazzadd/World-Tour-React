import { useEffect, useState } from "react";

import Country from './../Country/Country';
import './Countries.css';


const Countries = () => {
    const [countries,setCountries]= useState([]);
    const [visitedCountries,setVisitedCountries]= useState([]);
    const [visitedFlag , setVisitedFlag] = useState([]);

    const handleVisitedCountry= country=> {
        console.log('add this is to your visited country');
        // visitedCountries.push(country);
        const NewVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(NewVisitedCountries)
    }
    const handleVisitedFlag =flag=>{
      const  NewVisitedFlugs = [...visitedFlag, flag];
        setVisitedFlag(NewVisitedFlugs);

    }
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data =>setCountries(data))

    },[])
    return (
        <div>
            <h2>Explore Country</h2>
            <h3>Visited Country : {visitedCountries.length}</h3>
            {/* Display Visited Countries */}
            <ul>
                { 
                    visitedCountries.map(xyz => <li key={xyz.ccn3}>{xyz.name.common}</li>)
                }
            </ul>
            {/* Display Visited Countries Flug */}
            <div className="flag-container">
                {
                    visitedFlag.map(flag => <img src={flag}></img>)
                }
            </div>
            {/* Display CountrY Card */}
            <div className="Countries-container">
            {
                countries.map(abc => <Country handleVisitedFlag={handleVisitedFlag} handleVisitedCountry={handleVisitedCountry} key={abc.ccn3} countryProps={abc}></Country>)
            }
            </div>
           
        </div>
    );
};

export default Countries;