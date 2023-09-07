import React from "react";
import { AnimeData } from "../AnimeData";
import { Link } from "react-router-dom";

const AnimeList = () => {
  return (
    <section id="anime-list">
      <div className="container">
        <div className="row">
          <div className="section__header">
            <h2 className="section__title">
              My Anime <span className="green">Rankings</span>
            </h2>
            <p className="section__para">
              My top 20 ranked animes/mangas I have seen.
            </p>
          </div>
          {AnimeData.slice(0, 20)
            .map((anime, index) => (
              <Link to={`/anime-list/${index + 1}`} key={anime.mal_id}>
                <h4>
                  {index + 1} {anime.name}
                </h4>
                <br />
              </Link>
            ))
            .reverse()}
        </div>
      </div>
    </section>
  );
};

export default AnimeList;
