import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const Movie = ({ imdbID, carloNotes, review, addMovieData }) => {
  const apiKey = "2e1f6500";
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;
  const [movieInfo, setMovieInfo] = useState(null);

  const [img, setImg] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const mountedRef = useRef(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setMovieInfo(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (movieInfo && movieInfo.Poster) {
      const image = new Image();
      image.src = movieInfo.Poster;
      image.onload = () => {
        setTimeout(() => {
          if (mountedRef.current) {
            setImg(image);
            setIsLoading(false);
          }
        }, 300);
      };
    }

    return () => {
      mountedRef.current = true;
    };
  }, [movieInfo]);

  useEffect(() => {
    if (movieInfo) {
      addMovieData(movieInfo);
    }
  }, [movieInfo]);

  return (
    <div className="movie">
      {isLoading ? (
        <div className="movie__skeleton">
          <div className="movie__img--wrapper">
            <div className="movie__poster--skeleton skeleton"></div>
          </div>
          <div className="movie__description--skeleton">
            <h3 className="movie__title--skeleton skeleton"></h3>
            <h4 className="movie__year--skeleton skeleton"></h4>
            <p className="movie__para--skeleton skeleton"></p>
          </div>
          <div className="carlo__notes--skeleton ">
            <h4 className="carlo__notes--header--skeleton skeleton"></h4>
            <p className="carlo__notes--para--skeleton skeleton"></p>
            <h4 className="review__header--skeleton skeleton"></h4>
            <p className="review__para--skeleton skeleton"></p>
          </div>
        </div>
      ) : (
        <div className="movie__container">
          <figure className="movie__img--wrapper">
            <img src={img.src} alt="" className="movie__poster--img" />
          </figure>
          <div className="movie__description">
            <h3 className="movie__title">{movieInfo.Title}</h3>
            <h4 className="movie__year">
              {movieInfo.Year}{" "}
              {movieInfo.Rated != "N/A" &&
              movieInfo.Rated != "Not Rated" &&
              movieInfo.Rated != "Unrated"
                ? movieInfo.Rated
                : null}
            </h4>
            <div className="movie__info">
              <p className="movie__para">{movieInfo.Plot}</p>
              <div className="rating_and_genre">
                {movieInfo.Genre}
                <br />{" "}
                {movieInfo.Ratings.length > 1 ? (
                  <div>
                    {" "}
                    Rotten Tomatoes Score:{" "}
                    <span className="green">{movieInfo.Ratings[1].Value}</span>
                  </div>
                ) : (
                  <div>
                    {" "}
                    Internet Movie Database:{" "}
                    <span className="green">{movieInfo.Ratings[0].Value}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="carlo__section">
            <div className="carlo__notes">
              <h4 className="carlo__notes--header">
                <span className="green">Carlo's Notes:</span>
              </h4>
              <p className="carlo__notes--para">{carloNotes}</p>
            </div>
            <div className="carlo__review">
              <h4 className="review__header">
                <span className="green">Review</span>
              </h4>
              <p className="review__para">{review}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
