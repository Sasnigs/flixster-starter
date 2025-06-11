import MovieCard from "./MovieCard";
import "./movieList.css";
import Modal from "./modal";
import { useState } from "react";

export default function MovieList({ moviesToShow, loadMoreMovies }) {
  const [currentMovie, setcurrentMovie] = useState({})

  return (
    <>
      <div className="movie-list">
        {moviesToShow &&
          moviesToShow.map((movie, index) => (
            <div key={index}>
              <MovieCard
                // key={index}
                // imageUrl={movie.poster_path}
                // movieTitle={movie.title}
                // rating={movie.vote_average}
                coreMovie= {currentMovie}
                openModal={()=> setcurrentMovie(movie)}
                movieObj= {movie}
              />
              <Modal
               moviesToShow={currentMovie}
              />
            </div>
          ))}
      </div>
      <button className="load-more" onClick={loadMoreMovies}>
        Load more..
      </button>
    </>
  );
}
