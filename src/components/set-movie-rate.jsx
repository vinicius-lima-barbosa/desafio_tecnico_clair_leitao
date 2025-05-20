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

const SetMovieRate = ({ movie }) => {
  const [rating, setRating] = useState(10);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Avaliação enviada: ${rating}/10`);
  };

  return (
    <RateContainer>
      <RateTitle>Avalie este filme</RateTitle>
      <form onSubmit={handleSubmit}>
        <RateFormGroup>
          <RateLabel>Sua Avaliação:</RateLabel>
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
        <StyledButton type="submit">Enviar</StyledButton>
      </form>
    </RateContainer>
  );
};
export default SetMovieRate;
