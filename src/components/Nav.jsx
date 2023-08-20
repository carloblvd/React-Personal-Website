import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isListOpen, setIsListOpen] = useState(false);

  function handleMouseLeave() {
    setIsListOpen(false);
  }

  function handleMouseEnter() {
    setIsListOpen(true);
  }

  return (
    <nav>
      <div className="row">
        <div className="nav__bar">
          <ul className="nav__links">
            <li className="nav__list">
              <Link to="/" className="nav__link link__hover-effect">
                Home
              </Link>
            </li>
            <li className="nav__list">
              <span
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`nav__link link__hover-effect ${
                  isListOpen && "lanes"
                }`}>
                Lanes
              </span>
              {isListOpen && (
                <ul
                  className="lanes__list"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}>
                  <li className="lanes__item">
                    <Link to="/movie-list" className="lanes__list--link">
                      Movies List
                    </Link>
                  </li>
                  <li className="lanes__item">
                    <Link to="/anime-list" className="lanes__list--link">
                      Anime List
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav__list">
              <Link
                to=""
                className="nav__link link__hover-effect nav__link--contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
