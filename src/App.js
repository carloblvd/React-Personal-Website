import "./index.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoviesList from "./pages/MoviesList";
import AnimeList from "./pages/AnimeList";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Routes>
          <Route path="/" exact element={<Home></Home>} />
          <Route path="/movie-list" element={<MoviesList />} />
          <Route path="/anime-list" element={<AnimeList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
