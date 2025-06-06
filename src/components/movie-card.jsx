import { Col } from "react-bootstrap";
import {
  MovieCardStyled,
  MovieImage,
  MovieInfo,
  MovieTitle,
  MovieMeta,
  MovieMetaRating,
  MovieLink,
} from "../styles/styled";

const MOVIE_POSTER = import.meta.env.VITE_TMDB_API_MOVIE_IMAGE;

const MovieCard = ({ movie }) => {
  return (
    <Col lg={2} md={2} sm={3} xs={5}>
      <MovieLink to={`/movie/${movie.id}`}>
        <MovieCardStyled>
          <MovieImage
            src={MOVIE_POSTER + movie.poster_path}
            alt={movie.title}
          />
          <MovieInfo>
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieMeta>
              <span>{movie.release_date?.slice(0, 4) || "N/A"}</span>
              <MovieMetaRating>
                {movie.vote_average?.toFixed(1)}
              </MovieMetaRating>
            </MovieMeta>
          </MovieInfo>
        </MovieCardStyled>
      </MovieLink>
    </Col>
  );
};

export default MovieCard;
