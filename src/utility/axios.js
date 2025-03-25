import axios from "axios";

export const BASE_URL = "https://api.arjivexports.com"; // BASE URL

export const callApi = async (config) => {
  const request = {
    baseURL: BASE_URL,
    url: config.url,
    method: config.method,
    data: config.payload ?? config.data ?? config.request,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.request(request);
    return [undefined, response.data, response];
  } catch (error) {
    console.warn(error);
    return [error, error.response ? error.response.data : null, error.response];
  }
};
