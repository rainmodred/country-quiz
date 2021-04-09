import axios from 'axios';
import { Countries } from './types';

const url = 'https://restcountries.eu/rest/v2/all';

async function getAllCountries() {
  try {
    const resp = await axios.get<Countries>(url);
    return resp?.data;
  } catch (error) {
    console.log(error);
  }
  return null;
}

export { getAllCountries };
