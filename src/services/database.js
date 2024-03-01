import axios from 'axios';

// Define base URL for API requests
const baseURL = 'http://localhost:3001/api';

// Function to fetch data from the server
export const fetchData = async () => {
  try {
    const response = await axios.get(`${baseURL}/data`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Function to add data to the server
export const addData = async (newData) => {
  try {
    const response = await axios.post(`${baseURL}/data`, newData);
    return response.data;
  } catch (error) {
    console.error('Error adding data:', error);
    throw error;
  }
};
