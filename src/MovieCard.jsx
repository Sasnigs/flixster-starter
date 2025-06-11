import "./movieCard.css";

export default function MovieCard({ movieObj, openModal }) {
  return (
    <>
      <div className="movie-card" onClick={openModal}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`}
          alt=""
        />
        <p>{movieObj.title}</p>
        <p>⭐{movieObj.vote_average}</p>
      </div>
    </>
  );
}
