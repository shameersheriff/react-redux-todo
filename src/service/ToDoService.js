import axios from "axios";

const baseURL = 'https://jsonplaceholder.typicode.com/todos';

const getToDo = async () => {
    const url = `${baseURL}`;
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };