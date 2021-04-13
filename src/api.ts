import axios from 'axios';
import { Countries } from './types';

const url = 'https://restcountries.eu/rest/v2/all';

async function getAllCountries() {
  const resp = await axios.get<Countries>(url);
  return resp?.data;
}

export { getAllCountries };
