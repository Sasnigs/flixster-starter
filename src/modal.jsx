import "./modal.css";
import { useEffect, useState } from "react";

export default function Modal({ moviesToShow, onClose, isOpen }) {
  const [movieDetails, setmovieDetails] = useState(null);
  const [Trailer, setTrailer] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";

  async function getMovieDetails(id) {
    const res = await fetch(`${BASE_URL}/movie/${id}?language=en-US`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    if (!res.ok) throw new Error("Failed to fetch movies");
    const data = await res.json();
    return data;
  }
  async function getTrailerId(id) {
    const res = await fetch(`${BASE_URL}/movie/${id}/videos`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    if (!res.ok) throw new Error("Failed to fetch movies");
    const data = await res.json();
    return data;
  }
  useEffect(() => {
    getTrailerId(moviesToShow.id)
      .then((data) => setTrailer(data?.results?.find(t => t.type === "Trailer" && t.site === "YouTube")))
      .catch((err) => console.error("Error fetching moviesDetials:", err));
  }, [isOpen, setTrailer]);


  useEffect(() => {
    getMovieDetails(moviesToShow.id)
      .then((data) => setmovieDetails(data))
      .catch((err) => console.error("Error fetching moviesDetials:", err));
  }, [isOpen, moviesToShow]);

  if (!isOpen || !movieDetails) return null;

  return (
    <>
      <div
        className={`modal-overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>{moviesToShow.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${moviesToShow.backdrop_path}`}
            alt={moviesToShow.title}
          />
          <p>
            <strong>Runtime:</strong> {movieDetails.runtime} mins
          </p>
          <p>
            <strong>Release Date:</strong> {moviesToShow.release_date}
          </p>
          <p className="overview">{moviesToShow.overview}</p>

          <p>
            <strong>Genre:</strong> {movieDetails.genres[0].name}
          </p>
          {
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${Trailer.key}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; 
              clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          }
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </>
  );
}
