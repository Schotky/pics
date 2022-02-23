import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID tbIAoaaeiYGaMrqVf9cu3LKnuGg7XEvOODTdePat3UY",
  },
});
