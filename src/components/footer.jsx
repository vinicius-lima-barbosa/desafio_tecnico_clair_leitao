import { AppFooter } from "../styles/styled";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <AppFooter>
      <Container>
        <p>&copy; 2025 Vinicius' rights reserved.</p>
        <p>My project for the Clair Leitão's company challenge.</p>
      </Container>
    </AppFooter>
  );
};

export default Footer;
