import styled from "styled-components";
import { Navbar, Card as BoostrapCard, Row, Button } from "react-bootstrap";

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
