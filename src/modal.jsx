import "./modal.css";
import { useEffect, useState } from "react";

export default function Modal({ moviesToShow, onClose, isOpen }) {
  const [movieDetails, setmovieDetails] = useState(null);
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
  
   useEffect(() => {
      getMovieDetails(moviesToShow.id)
        .then((data) => setmovieDetails(data))
        .catch((err) => console.error("Error fetching moviesDetials:", err));
    }, [isOpen, moviesToShow]);
    
    if(!isOpen || !movieDetails) return null
    console.log(movieDetails)
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
          <p><strong>Release Date:</strong> {moviesToShow.release_date}</p>
          <p>{moviesToShow.overview}</p>
          <p><strong>Genre:</strong>  {movieDetails.genres[0].name}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </>
  );
}
