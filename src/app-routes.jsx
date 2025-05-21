import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./layout";
import MovieDetails from "./pages/movie-details";
import TopRatedMovies from "./pages/top-rated-movies";

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/top-rated-movies" element={<TopRatedMovies />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
