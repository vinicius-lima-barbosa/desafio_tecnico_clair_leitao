import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tmdb } from "../api/tmdb";
import toast from "react-hot-toast";

const IMAGE_POSTER = import.meta.env.VITE_TMDB_API_MOVIE_IMAGE;

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await tmdb.getMovieDetails(id);
        setMovie(response.data);
      } catch (error) {
        toast.error(error.message || "Erro ao buscar detalhes do filme");
      }
    }

    fetchMovie();
  }, [id]);

  if (!movie) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={IMAGE_POSTER + movie.poster_path} alt={movie.title} />
      <p>{movie.overview}</p>
      <p>
        <strong>Data de lançamento:</strong> {movie.release_date}
      </p>
      <p>
        <strong>Avaliação:</strong> {movie.vote_average}/10
      </p>
    </div>
  );
};

export default MovieDetails;
