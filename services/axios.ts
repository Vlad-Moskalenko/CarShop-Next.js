import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
  headers: {
    'X-RapidAPI-Key': 'b1cce14b03msh65abcc7ffd14045p1933a2jsn14ebf62e2fe3',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  },
});

export async function getCars(query: string) {
  try {
    const {data} = await axiosInstance.get('', {params: {model: query}});
    console.log(data);
    return data
  } catch (err) {
    console.log(err)
  }
}

