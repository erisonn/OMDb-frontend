import { Routes, Route } from "react-router-dom";
import MoviePage from "./pages/MoviePage";
import Search from "./pages/Search";
import Starred from "./pages/Starred";
import About from "./pages/About";

const Router = () => {
  return (
    <Routes>
      <Route path="/search" element={<Search />} />
      <Route path="starred" element={<Starred />} />
      <Route path="about" element={<About />} />
      <Route path="/movie/:imdbID?" element={<MoviePage />} />
    </Routes>
  );
};

export default Router;
