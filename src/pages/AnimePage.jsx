import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AnimePage = ({ mal_id, carloReasoning, rankingNum }) => {
  const url = `https://api.jikan.moe/v4/anime/${mal_id}`;
  const [animeInfo, setAnimeInfo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setTimeout(() => {
          setAnimeInfo(response.data.data);
        }, 10);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [url]);

  const [isSynopsisOpen, setIsSynopsisOpen] = useState(false);

  const handleOpenSynopsis = () => {
    setIsSynopsisOpen(true);
  };

  const handleCloseSynopsis = () => {
    setIsSynopsisOpen(false);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {animeInfo ? (
            <>
              <div className="anime">
                <div className="prev-and-next__btns">
                  <Link
                    to={`/anime-list/${
                      rankingNum == 20
                        ? rankingNum
                        : rankingNum >= 1 && rankingNum <= 20
                        ? rankingNum + 1
                        : rankingNum
                    }`}>
                    <h2 className="anime__header--btn">
                      <FontAwesomeIcon icon={faArrowLeft} /> Previous
                    </h2>
                  </Link>
                  <Link
                    to={`/anime-list/${
                      rankingNum == 1
                        ? rankingNum
                        : rankingNum >= 1 && rankingNum <= 20
                        ? rankingNum - 1
                        : rankingNum
                    }`}>
                    <h2 className="anime__header--btn">
                      Next <FontAwesomeIcon icon={faArrowRight} />
                    </h2>
                  </Link>
                </div>
                <div className="anime__info--container">
                  <div className="anime__info">
                    <h2 className="anime__title">
                      {animeInfo.title_english ||
                        animeInfo.title ||
                        animeInfo.title_japanese}
                      <span className="green">#{rankingNum}</span>
                    </h2>
                    <p className="anime__reasoning">{carloReasoning} </p>
                  </div>
                  <div className="anime__img--content">
                    <figure className="anime__img--wrapper">
                      <img
                        className="anime__img"
                        src={animeInfo.images.jpg.large_image_url}
                        alt=""
                      />
                    </figure>

                    <p className="anime__synopsis">
                      {animeInfo.synopsis.split(" ").slice(0, 25).join(" ")} . .
                      .
                      <br />
                      <br />
                      {!isSynopsisOpen ? (
                        <>
                          <span
                            onClick={handleOpenSynopsis}
                            className="synopsis__btn open__synopsis--btn">
                            Read Full Synopis
                          </span>
                        </>
                      ) : (
                        <>
                          <div className="full__synopsis">
                            <span className="full__synopsis--para">
                              {animeInfo.synopsis}
                            </span>
                            <br />
                            <br />
                            <span
                              onClick={handleCloseSynopsis}
                              className="synopsis__btn close__synopsis--btn">
                              Close Full Synopsis
                            </span>
                          </div>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <h4>Loading...</h4>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AnimePage;
