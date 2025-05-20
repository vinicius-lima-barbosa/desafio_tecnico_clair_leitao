import styled from "styled-components";
import { Navbar } from "react-bootstrap";

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
