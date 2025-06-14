import "./movieCard.css";

export default function MovieCard({ movieObj, openModal, setMovieState, moviesToShow }) {
  function toggleLike(e) {
    e.stopPropagation();
    const updatedData = moviesToShow.map(item =>
        item.id === movieObj.id
        ? { ...item, isLiked: !item.isLiked }
        : item
    );
    setMovieState(updatedData);
  }
   function toggleWatched(e) {
    e.stopPropagation();
    const updatedData = moviesToShow.map(item =>
        item.id === movieObj.id
        ? { ...item, isWatched: !item.isWatched }
        : item
    );
    setMovieState(updatedData);
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
            <i className={movieObj.isLiked ? "fas fa-heart" : "far fa-heart"}></i>
          </div>
          <div onClick={toggleWatched}>
            <i className={movieObj.isWatched ? "fas fa-eye-slash" : "fas fa-eye"}></i>
          </div>
        </div>
      </div>
    </>
  );
}
