import { Container } from "react-bootstrap";
import {
  HomeRow,
  HomeTitle,
  HomePageButtonContainer,
  HomePageButton,
} from "../styles/styled";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { tmdb } from "../api/tmdb";
import MovieCard from "../components/movie-card";

const TopRatedMovies = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRatedMovies = async () => {
      try {
        const response = await tmdb.getTopRatedMovies(page);
        setMovies(response?.data?.results || []);
        setLoading(false);
      } catch (error) {
        toast({
          title: "Error",
          description: error.message || "An error occurred",
          variant: "destructive",
        });
      }
    };
    fetchRatedMovies();
  }, [page]);

  return (
    <Container>
      <HomeTitle>Top Rated Movies</HomeTitle>

      {loading && <p>Loading...</p>}

      <HomeRow>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </HomeRow>

      <HomePageButtonContainer>
        <HomePageButton
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous Page
        </HomePageButton>
        <HomePageButton onClick={() => setPage((prev) => prev + 1)}>
          Next Page
        </HomePageButton>
      </HomePageButtonContainer>
    </Container>
  );
};

export default TopRatedMovies;
