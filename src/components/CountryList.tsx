import React, { useEffect, useState } from 'react'
import { CountriesType } from '../types/countriesType';
import { getCountries } from '../api/countries';
import CountryCard from './CountryCard';

const CountryList: React.FC = () => {
    const [countries, setCountries] = useState<CountriesType[]>([]);
    const [selectedCountries, setSelectedCountries] = useState<CountriesType[]>([]);

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

    const handleSelectCountry = (country : CountriesType) : void => {
        if (!selectedCountries.find((selectedCountry : CountriesType) => selectedCountry.name.common === country.name.common)) {
            setSelectedCountries([...selectedCountries, country])
        } else {
            setSelectedCountries(selectedCountries.filter((selectedCountry : CountriesType) => 
                selectedCountry.name.common !== country.name.common
            ))
        }
    }

  return (
    <div>
        <h1>선택된 나라</h1>
        <div>
            {selectedCountries.map((country:CountriesType) => {
            return <CountryCard key={country.name.common} country={country} handleSelectCountry={handleSelectCountry}/>
            })}
        </div>
        <h1>나라</h1>
        <div>
            {countries.map((country:CountriesType) => {
            return <CountryCard key={country.name.common} country={country} handleSelectCountry={handleSelectCountry}/>
            })}
        </div>

    </div>
  )
}

export default CountryList