import MovieCard from "./MovieCard";
import "./movieList.css";
import Modal from "./modal";
import { useState } from "react";

export default function MovieList({ moviesToShow, loadMoreMovies }) {
  const [currentMovie, setcurrentMovie] = useState({});

  return (
    <>
    <div className="movieList-container">
         <div className="movie-list">
        {moviesToShow &&
          moviesToShow.map((movie, index) => (
            <MovieCard
              key={index}
              openModal={() => setcurrentMovie(movie)}
              movieObj={movie}
            />
          ))}
      </div>
      {currentMovie.title && (
        <Modal
          isOpen={true}
          moviesToShow={currentMovie}
          onClose={() => setcurrentMovie({})}
        />
      )}
      <button className="load-more" onClick={loadMoreMovies}>
        Load more..
      </button>
    </div>
     
    </>
  );
}
