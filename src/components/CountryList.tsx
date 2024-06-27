import React, { useEffect, useState } from 'react'
import { CountriesType } from '../types/countriesType';
import { getCountries } from '../api/countries';
import CountryCard from './CountryCard';

const CountryList: React.FC = () => {
    const [countries, setCountries] = useState<CountriesType[]>([]);

    useEffect(()=>{
        const makeCountries = async() => {
            try {
                const data : CountriesType[] = await getCountries(); 
                setCountries(data)
            } catch (error) {
                console.log(error)
            }
        }
        makeCountries()
    },[])

    console.log("countries :", countries);

  return (
    <div>
        <h1>나라</h1>
        <div>
{countries.map((country:CountriesType) => {
return <CountryCard key={country.name.common} country={country}/>
})}
        </div>
    </div>
  )
}

export default CountryList