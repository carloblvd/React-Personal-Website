import "./index.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MoviesList from "./pages/MoviesList";
import AnimeList from "./pages/AnimeList";
import { AnimeData } from "./AnimeData";
import AnimePage from "./pages/AnimePage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-list" element={<MoviesList />} />
          <Route path="/anime-list" element={<AnimeList />} />
          {AnimeData.map((anime, index) => (
            <Route
              key={anime.mal_id}
              path={`/anime-list/${index + 1}`}
              element={
                <AnimePage
                  mal_id={anime.mal_id}
                  carloReasoning={anime.carloReasoning}
                  rankingNum={index + 1}
                />
              }
            />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
