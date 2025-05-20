import styled from "styled-components";
import {
  Navbar,
  Card as BoostrapCard,
  Row,
  Button,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";

// Layout
export const AppNavbar = styled(Navbar)`
  background-color: #0c0c0c;
  padding: 1rem;

  .nav-link {
    color: #ddd;
    transition: color 0.3s;
    font-weight: bold;
    font-size: 1.5rem;
  }

  .nav-link:hover {
    color: #ffc107;
  }
`;

export const BrandContainer = styled(Navbar.Brand)`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  color: #f8f9fa;
  transition: color 0.3s;

  span {
    margin-left: 0.5rem;
  }

  &:hover {
    color: #ffc107;
  }
`;

export const AppFooter = styled.footer`
  background-color: #0c0c0c;
  color: #f8f9fa;
  text-align: center;
  padding: 1rem 0;

  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;

// Movie Card Styles
export const MovieCardStyled = styled(BoostrapCard)`
  background-color: #1c1c1c;
  border: none;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.2s ease;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MovieImage = styled(BoostrapCard.Img)`
  width: 100%;
  height: auto;
  border-radius: 0.5rem 0.5rem 0 0;
  object-fit: cover;
`;

export const MovieInfo = styled(BoostrapCard.Body)`
  padding: 1rem;
  background-color: #1c1c1c;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MovieTitle = styled(BoostrapCard.Title)`
  font-size: 1rem;
  font-weight: bold;
  color: #f8f9fa;
  margin: 0.5rem 0;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.5em;
`;

export const MovieMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #ccc;
  margin-top: 0.5rem;
`;

export const MovieMetaRating = styled.span`
  background-color: #ffc107;
  color: #000;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
`;

// Home Page Movie List Styles
export const HomeTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #f8f9fa;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const HomeRow = styled(Row)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
`;

export const HomePageButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const HomePageButton = styled(Button)`
  background-color: #ffc107;
  border: none;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  transition: background-color 0.3s, transform 0.2s;

  &:hover:enabled {
    background-color: rgb(220, 169, 18);
    transform: scale(1.05);
  }

  &:active:enabled,
  &:focus:enabled {
    background-color: #ffc107 !important;
    box-shadow: none !important;
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }
`;

// Movie Details Hero
export const MovieHero = styled.div`
  background-image: ${({ style }) => `url(${style})`};
  background-size: cover;
  background-position: center;
  padding: 4rem 2rem;
  position: relative;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  margin-bottom: 2rem;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffc107;
  margin-bottom: 1rem;
`;

export const HeroGenres = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const HeroGenre = styled.span`
  background-color: #343a40;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
`;

export const HeroInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  font-size: 0.95rem;
`;

export const HeroInfoReleaseDate = styled.div``;
export const HeroInfoRuntime = styled.div``;
export const HeroInfoRating = styled.div``;

// Movie Details Container
export const MovieContainer = styled.div`
  max-width: 900px;
  margin: 0 auto 4rem;
  padding: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
`;

export const MovieInfoSection = styled.div`
  flex: 2;
`;

export const MovieOverview = styled.div`
  margin-bottom: 2rem;
`;

export const MovieOverviewTitle = styled.h2`
  font-size: 1.5rem;
  color: #ffc107;
  margin-bottom: 1rem;
`;

export const MovieOverviewText = styled.p`
  text-align: justify;
  color: rgb(23, 23, 23);
  line-height: 1.6;
`;

export const MovieDetailsContainer = styled.div``;

export const MovieDetailsTitle = styled.h3`
  font-size: 1.25rem;
  color: #ffc107;
  margin-bottom: 1rem;
`;

export const MovieDetailsItem = styled.div`
  display: flex;
  gap: 1rem;
  color: rgb(23, 23, 23);

  strong {
    display: block;
    margin-bottom: 0.5rem;
  }
`;

export const MovieRatingSection = styled.div`
  flex: 1;
  min-width: 250px;
`;

// Set Movie Rate
// Movie Rating Styles
export const RateContainer = styled.div`
  background-color: #1c1c1c;
  padding: 1.5rem;
  border-radius: 0.75rem;
  color: #f8f9fa;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
`;

export const RateTitle = styled.h4`
  color: #ffc107;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

export const RateLabel = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: #f8f9fa;
  margin-bottom: 0.5rem;
  display: block;
`;

export const RateValue = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  color: #ffc107;
`;

export const RateFormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const StyledFormRange = styled.input.attrs({ type: "range" })`
  width: 100%;
  margin-top: 0.75rem;
  background: transparent;
  -webkit-appearance: none;

  &::-webkit-slider-runnable-track {
    height: 6px;
    background: #ffc107;
    border-radius: 5px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    background: #ffc107;
    border-radius: 50%;
    margin-top: -5px;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    height: 16px;
    width: 16px;
    background: #ffc107;
    border-radius: 50%;
    cursor: pointer;
  }

  &::-moz-range-track {
    height: 6px;
    background: #ffc107;
    border-radius: 5px;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 0.6rem;
  background-color: #ffc107;
  color: #000;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #e0a800;
    transform: scale(1.03);
  }

  &:active {
    background-color: #d39e00;
  }
`;
