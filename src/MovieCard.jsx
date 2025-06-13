import { useState } from "react";
import "./movieCard.css";

export default function MovieCard({ movieObj, openModal }) {
  const [Liked, setLiked] = useState(false);
  const [watched, setwatched] = useState(false);
  function toggleLike(e) {
    e.stopPropagation();
    setLiked((prev) => !prev);
  }
  function toggleWatched(e) {
    e.stopPropagation();
    setwatched((prev) => !prev);
  }

  return (
    <>
      <div className="movie-card" onClick={openModal}>
        <div className="image-container">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`}
            alt={`${movieObj.title} Image`}
          />
        </div>
        <div className="movie-info">
          <p>{movieObj.title}</p>
          <p>⭐ {movieObj.vote_average}</p>
        </div>

        <div className="fav-watch">
          <div onClick={toggleLike}>
            <i className={Liked ? "fas fa-heart" : "far fa-heart"}></i>
          </div>
          <div onClick={toggleWatched}>
            <i className={watched ? "fas fa-eye-slash" : "fas fa-eye"}></i>
          </div>
        </div>
      </div>
    </>
  );
}
