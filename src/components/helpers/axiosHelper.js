import axios from "axios";

export const fetchData = async (movieName) => {
  const apiEp = `https://www.omdbapi.com/?apikey=ede2c06&t=${movieName}`;

  try {
    const { data } = await axios.get(apiEp);

    return data;
  } catch (error) {
    console.log(error);
  }
};
