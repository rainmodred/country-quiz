// import axios from 'axios';
// @ts-ignore
import { countries } from './countries';
// import { Countries } from './types';

// const url = 'https://restcountries.eu/rest/v2/all';

async function getCountries() {
  // try {
  //   const resp = await axios.get<Countries>(url);
  //   console.log(resp);
  //   return resp?.data;
  // } catch (error) {
  //   console.log(error);
  // }
  // return null;
  // window
  //   .fetch(countries)
  //   .then(res => {
  //     console.log(res);
  //     return res.json();
  //   })
  //   .then(data => {
  //     console.log(data);
  //     return data;
  //   })
  //   .catch(error => console.log(error));
  // console.log(countries);
  return countries;
}

export { getCountries };
