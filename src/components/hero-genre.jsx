import { HeroGenre as GenreTag } from "../styles/styled";

const HeroGenre = ({ genre }) => {
  return <GenreTag>{genre.name}</GenreTag>;
};

export default HeroGenre;
