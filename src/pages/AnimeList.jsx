import React, { useEffect, useState } from "react";
import { AnimeData } from "../AnimeData";
import axios from "axios";

const AnimeList = () => {
  const url = "https://api.jikan.moe/v4/anime";
  const [animeInfo, setAnimeInfo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setAnimeInfo(response.data.data[24]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  console.log(animeInfo);

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
