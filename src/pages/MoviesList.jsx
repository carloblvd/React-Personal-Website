import React, { useState } from "react";
import Movie from "../components/Movie";
import { movieTitleAndId, addMovieData, movieData } from "../MovieData";

const MoviesList = () => {
  const [originalMovies, setOriginalMovies] = useState(movieData);
  const [sortedMovies, setSortedMovies] = useState(originalMovies);
  const [displayedMovies, setDisplayedMovies] = useState(movieTitleAndId);

  function convertToWholeNumber(input) {
    if (typeof input === "string") {
      if (input.endsWith("%")) {
        const percentage = parseFloat(input);
        if (!isNaN(percentage)) {
          return Math.round(percentage);
        }
      } else if (input.includes("/")) {
        const [numerator, denominator] = input.split("/");
        const parsedNumerator = parseInt(numerator);
        const parsedDenominator = parseInt(denominator);

        if (
          !isNaN(parsedNumerator) &&
          !isNaN(parsedDenominator) &&
          parsedDenominator !== 0
        ) {
          const result = parsedNumerator / parsedDenominator;
          return Math.round(result * 100);
        }
      }
    }
    return input;
  }

  function movieRating(movie) {
    if (movie.Ratings && movie.Ratings.length > 0) {
      if (movie.Ratings.length == 1) {
        return convertToWholeNumber(movie.Ratings[0].Value);
      } else {
        return convertToWholeNumber(movie.Ratings[1].Value);
      }
    }
  }

  const handleFilterMovies = (event) => {
    let value = event.target.value;

    if (originalMovies.length > 0) {
      if (value === "ALL") {
        setDisplayedMovies(movieTitleAndId);
        setSortedMovies(originalMovies);
      } else {
        const filteredMovies = originalMovies.filter(
          (movie) =>
            movie && movie.Genre && movie.Genre.toUpperCase().includes(value)
        );
        setSortedMovies(filteredMovies);
        sortMovieList(filteredMovies);

        return filteredMovies;
      }
    }
  };

  const handleSortMovies = (event) => {
    let value = event.target.value;

    if (value === "HIGH_TO_LOW") {
      setSortedMovies((prevSortedMovies) => {
        const newSortedMovies = prevSortedMovies.sort(
          (a, b) => movieRating(b) - movieRating(a)
        );
        sortMovieList(newSortedMovies);
        return newSortedMovies;
      });
    }
    if (value === "LOW_TO_HIGH") {
      setSortedMovies((prevSortedMovies) => {
        const newSortedMovies = prevSortedMovies.sort(
          (a, b) => movieRating(a) - movieRating(b)
        );
        sortMovieList(newSortedMovies);
        return newSortedMovies;
      });
    }
    if (value === "NEW_TO_OLD") {
      setSortedMovies((prevSortedMovies) => {
        const newSortedMovies = prevSortedMovies.sort(
          (a, b) => +b.Year - +a.Year
        );
        sortMovieList(newSortedMovies);
        return newSortedMovies;
      });
    }
    if (value === "OLD_TO_NEW") {
      setSortedMovies((prevSortedMovies) => {
        const newSortedMovies = prevSortedMovies.sort(
          (a, b) => +a.Year - +b.Year
        );
        sortMovieList(newSortedMovies);
        return newSortedMovies;
      });
    }
    // Does not work when I sort by recently_added and then I change the filter
    if (value === "RECENTLY_ADDED") {
      setSortedMovies((prevSortedMovies) => {
        const sortedByIndex = prevSortedMovies.sort((a, b) => {
          const indexA = movieTitleAndId.findIndex(
            (item) => item.imdbID === a.imdbID
          );
          const indexB = movieTitleAndId.findIndex(
            (item) => item.imdbID === b.imdbID
          );
          return indexB - indexA;
        });
        sortMovieList(sortedByIndex);
        return sortedByIndex;
      });
    }
  };

  function sortMovieList(moviesInput1) {
    const sortedMovieIds = moviesInput1.map((movie) => movie.imdbID);
    const sortedDisplayedMovies = sortedMovieIds.map((id) =>
      movieTitleAndId.find((movie) => movie.imdbID === id)
    );
    setDisplayedMovies(sortedDisplayedMovies);
  }

  return (
    <section id="movies__list">
      <div className="container">
        <div className="row">
          <div className="section__header">
            <h2 className="section__title">
              <span className="green">Movies</span> I Need To
              <span className="green"> Watch</span>
            </h2>
            <p className="section__para">
              A list of movies that I have on my watch list as well as info on
              them.
            </p>
            <div className="movie__filter__sort">
              <select
                className="movie__filter"
                onChange={handleFilterMovies}
                defaultValue="default">
                <option value="default" disabled>
                  Filter
                </option>
                <option value="ALL">All Genres</option>
                <option value="ACTION">Action</option>
                <option value="ANIMATION">Animation</option>
                <option value="COMEDY">Comedy</option>
                <option value="CRIME">Crime</option>
                <option value="DRAMA">Drama</option>
                <option value="HORROR">Horror</option>
                <option value="MYSTERY">Mystery</option>
                <option value="ROMANCE">Romance</option>
                <option value="SCI-FI">Sci-Fi</option>
                <option value="THRILLER">Thriller</option>
              </select>
              <select
                className="movie__sort"
                onChange={handleSortMovies}
                defaultValue="default">
                <option value="default" disabled>
                  Sort
                </option>
                <option value="HIGH_TO_LOW">Ratings, High to Low</option>
                <option value="LOW_TO_HIGH">Ratings, Low to High</option>
                <option value="NEW_TO_OLD">Year, New to Old</option>
                <option value="OLD_TO_NEW">Year, Old to New</option>
                <option value="RECENTLY_ADDED">Recently Added</option>
              </select>
            </div>
            {displayedMovies.map((movie) => {
              return (
                <Movie
                  key={movie.imdbID}
                  imdbID={movie.imdbID}
                  carloNotes={movie.carlonotes}
                  review={movie.review}
                  addMovieData={addMovieData}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviesList;
