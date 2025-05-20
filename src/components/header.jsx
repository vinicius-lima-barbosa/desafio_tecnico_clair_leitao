import { AppNavbar, BrandContainer } from "../styles/styled";
import { Container, Nav } from "react-bootstrap";
import { FaFilm } from "react-icons/fa";

const Header = () => {
  return (
    <AppNavbar expand="lg" variant="dark" sticky="top">
      <Container>
        <BrandContainer href="/">
          <FaFilm size={24} />
          <span>My Movies</span>
        </BrandContainer>

        <Nav.Link href="/top-rated-movies">Top Rated</Nav.Link>
      </Container>
    </AppNavbar>
  );
};

export default Header;
