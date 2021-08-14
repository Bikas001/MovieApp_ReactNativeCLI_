import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=8ea129b2e714e8057c7cca049b265c25';

export const getPopularMovie = async () => {
  const res = await axios.get(`${baseURL}/movie/popular?${apiKey}`);
  return res.data.results;
};

export const getUpcomingMovie = async () => {
  const res = await axios.get(`${baseURL}/movie/upcoming?${apiKey}`);
  return res.data.results;
};

export const getPopularTV = async () => {
  const res = await axios.get(`${baseURL}/tv/popular?${apiKey}`);
  return res.data.results;
};
