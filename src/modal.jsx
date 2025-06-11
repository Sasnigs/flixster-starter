import "./modal.css";

export default function Modal({ moviesToShow, onClose }) {
  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>{moviesToShow.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${moviesToShow.backdrop_path}`}
            alt={moviesToShow.title}
          />
          <p>{moviesToShow.release_date}</p>
          <p>{moviesToShow.vote_average}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </>
  );
}
