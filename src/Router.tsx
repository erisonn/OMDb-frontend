import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Random from "./pages/Random";
import Search from "./pages/Search";
import Starred from "./pages/Starred";
import About from "./pages/About";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/random" element={<Random />} />
      <Route path="/search" element={<Search />} />
      <Route path="starred" element={<Starred />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
};

export default Router;
