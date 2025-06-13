import MovieCard from "./MovieCard";
import "./movieList.css";
import Modal from "./modal";
import { useState } from "react";

export default function MovieList({ moviesToShow, loadMoreMovies,  updateMovieCard, setMovieState }) {
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
                updateMovieCard = { updateMovieCard}
                setMovieState={setMovieState}
                moviesToShow={moviesToShow}
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
      </div>
      <div className="load-more" >
        <button onClick={loadMoreMovies}>
          Load more..
        </button>
      </div>
    </>
  );
}
