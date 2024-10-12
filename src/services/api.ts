import axios from 'axios';

const API_URL = 'https://api.stephenking.com/books';

export const getBooks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getBookDetails = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};