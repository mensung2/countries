import React from 'react';
import { CountriesType } from '../types/countriesType';

interface CountryCardProps {
  country: CountriesType;
  handleSelectCountry: (country: CountriesType) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, handleSelectCountry }) => {
  return (
    <div onClick={() => handleSelectCountry(country)}>
      <img src={country.flags.svg} style={{ width: '50px', height: '25px' }} />
      <h2>{country.name.common}</h2>
    </div>
  );
};

// 왜 handleSelectCountry를 찾을수 없다고 뜨는거임

export default CountryCard;
