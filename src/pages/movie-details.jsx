import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tmdb } from "../api/tmdb";
import toast from "react-hot-toast";
import SetMovieRate from "../components/set-movie-rate";
import {
  MovieHero,
  HeroContent,
  HeroTitle,
  HeroGenres,
  HeroGenre,
  HeroInfo,
  MovieContainer,
  MovieInfoSection,
  MovieOverview,
  MovieOverviewTitle,
  MovieOverviewText,
  MovieDetailsTitle,
  MovieDetailsItem,
  MovieRatingSection,
} from "../styles/styled";
import { Container } from "react-bootstrap";

const IMAGE_POSTER = import.meta.env.VITE_TMDB_API_MOVIE_IMAGE;

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await tmdb.getMovieDetails(id);
        setMovie(response.data);
      } catch (error) {
        toast.error(error.message || "Erro while fetching movie details");
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <p>Carregando...</p>;

  return (
    <>
      <MovieHero
        style={{
          backgroundImage: `url(${IMAGE_POSTER}${movie.backdrop_path})`,
        }}
      >
        <HeroContent>
          <HeroTitle>{movie.title}</HeroTitle>
          <HeroGenres>
            {movie.genres?.map((genre) => (
              <HeroGenre key={genre.id}>{genre.name}</HeroGenre>
            ))}
          </HeroGenres>
          <HeroInfo>
            {new Date(movie.release_date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            <span>{movie.runtime} min</span>
            <span>Rating: {movie.vote_average.toFixed(1)}</span>
            <span>({movie.vote_count} votes)</span>
          </HeroInfo>
        </HeroContent>
      </MovieHero>

      <MovieContainer>
        <MovieInfoSection>
          <MovieOverview>
            <MovieOverviewTitle>Overview</MovieOverviewTitle>
            <MovieOverviewText>{movie.overview}</MovieOverviewText>
          </MovieOverview>
          <Container>
            <MovieDetailsTitle>Details</MovieDetailsTitle>
            <MovieDetailsItem>
              <strong>Language:</strong> {movie.original_language.toUpperCase()}
              <strong>Budget:</strong> ${movie.budget.toLocaleString("pt-BR")}
              <strong>Revenue:</strong> ${movie.revenue.toLocaleString("pt-BR")}
            </MovieDetailsItem>
          </Container>
        </MovieInfoSection>
        <MovieRatingSection>
          <SetMovieRate movie={movie} />
        </MovieRatingSection>
      </MovieContainer>
    </>
  );
};

export default MovieDetails;
