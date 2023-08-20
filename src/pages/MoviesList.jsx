import React from "react";
import Movie from "../components/Movie";

const MoviesList = () => {
  return (
    <section id="movies__list">
      <div className="container">
        <div className="row">
          <div className="section__header">
            <h2 className="section__title">
              <span className="green">Movies</span> I Need To
              <span className="green">Watch</span>
            </h2>
            <p className="section__para">
              A list of movies that I have on my watch list as well as info on
              them.
            </p>
            <Movie />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviesList;
