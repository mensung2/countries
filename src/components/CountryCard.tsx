import React from 'react'
import { CountriesType } from '../types/countriesType'

interface CountryCardProps {
    country: CountriesType;
    handleSelectCountry: (country : CountriesType) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({country}) => {
  return (
    <div onClick={()=> handleSelectCountry(country)}>
        <img src={country.flags.svg} style={{width: "50px", height: "25px"}}/>
        <h2>{country.name.common}</h2>
    </div>
  )
}

export default CountryCard