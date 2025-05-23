import axios from "axios";
import toast from "react-hot-toast";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_URL = import.meta.env.VITE_TMDB_API_URL;
const API_ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const api = axios.create({
  baseURL: API_URL,
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    toast({
      title: "Error",
      description: error.response?.data?.status_message || "An error occurred",
      variant: "destructive",
    });
    return Promise.reject(error);
  }
);

export const tmdb = {
  getMovies: (page = 1) => api.get("/movie/popular", { params: { page } }),
  getTopRatedMovies: (page = 1) =>
    api.get("/movie/top_rated", { params: { page } }),
  getMovieDetails: (movieId) => api.get(`/movie/${movieId}`),
  postMovieRate: (movieId, value) =>
    api.post(
      `/movie/${movieId}/rating`,
      { value },
      {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: `Bearer ${API_ACCESS_TOKEN}`,
        },
      }
    ),
};
