import axios from 'axios';
import { FilterProps } from '@/types';

export const axiosInstance = axios.create({
  baseURL: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  },
});

export async function getCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  try {
    const {data} = await axiosInstance.get('',
    {params: {
        make: manufacturer,
        year:year,
        model:model,
        limit:limit,
        fuel_type:fuel
      }
    });
    return data
  } catch (err) {
    console.log(err)
  }
}

