import React from "react";

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
              This lane holds all the animes I have watched and my rankings for
              them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimeList;
