import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { tmdb } from "../api/tmdb";

const IMAGE_POSTER = import.meta.env.VITE_TMDB_API_MOVIE_IMAGE;

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await tmdb.getMovies();
        setMovies(response?.data?.results || []);
      } catch (error) {
        toast({
          title: "Error",
          description: error.message || "An error occurred",
          variant: "destructive",
        });
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <a href={`/movie/${movie.id}`}>
            <img src={IMAGE_POSTER + movie.poster_path} alt="Movie Poster" />
          </a>
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
