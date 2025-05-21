import {
  RateContainer,
  RateTitle,
  RateLabel,
  RateValue,
  RateFormGroup,
  StyledFormRange,
  StyledButton,
} from "../styles/styled";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { tmdb } from "../api/tmdb";

const SetMovieRate = ({ movie }) => {
  const [rating, setRating] = useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await tmdb.postMovieRate(movie.id, rating);
      if (response.data.success) {
        toast.success(`You rated ${movie.title} with ${rating}/10`);
      }
    } catch (error) {
      toast.error(error.message || "An error occurred");
    }
  };

  return (
    <RateContainer>
      <RateTitle>Rate this movie</RateTitle>
      <form onSubmit={handleSubmit}>
        <RateFormGroup>
          <RateLabel>Your rating:</RateLabel>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <RateValue>{rating}</RateValue>
            <span style={{ color: "#ccc" }}>/10</span>
          </div>
          <StyledFormRange
            min={0}
            max={10}
            step={0.5}
            value={rating}
            onChange={(e) => setRating(parseFloat(e.target.value))}
          />
        </RateFormGroup>
        <StyledButton type="submit">Rate</StyledButton>
      </form>
    </RateContainer>
  );
};
export default SetMovieRate;
