import React, { useEffect, useRef, useState } from "react";
import MovieImg from "../assets/mid90s poster.jpeg";

const Movie = () => {
  const [img, setImg] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = MovieImg;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImg(image);
          setIsLoading(false);
        }
      }, 3000);
    };
    return () => {
      mountedRef.current = false;
    };
  });

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
            <h3 className="movie__title">Mid90s</h3>
            <h4 className="movie__year">1991</h4>
            <p className="movie__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              consequuntur, consectetur optio tempora aut nam quos,
              necessitatibus voluptas quas mollitia molestiae. Incidunt
              doloribus aut iste tempora officiis repellat non aliquam?
            </p>
          </div>
          <div className="carlo__notes">
            <h4 className="carlo__notes--header">Carlo's Notes:</h4>
            <p className="carlo__notes--para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
              quas!
            </p>
            <h4 className="review__header">Review</h4>
            <p className="review__para">N/A</p>
          </div>
        </div>
      )}
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
    </div>
  );
};

export default Movie;
