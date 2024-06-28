import axios from 'axios';
import { CountriesType } from '../types/countriesType';

export const getCountries = async (): Promise<CountriesType[]> => {
  const res = await axios.get('https://restcountries.com/v3.1/all');
  return res.data;
};
