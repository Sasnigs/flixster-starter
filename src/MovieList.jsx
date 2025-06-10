import MovieCard from "./MovieCard"
import data from "./data/data";
import { useState } from "react";
import { useEffect } from "react";
import "./movieList.css"


const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getPopularMovies(){
    const res = await fetch(`${BASE_URL}/movie/popular`,{
        headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
  },

     }) 
     if (!res.ok) throw new Error('Failed to fetch movies');
     const data = await res.json();
     return data.results;
    
};


export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then((data) => setMovies(data))
      .catch((err) => console.error('Error fetching movies:', err));
  }, []);

  return (
    <>
    <div className="movie-list">
         {movies.map((movie, index) => (
        <MovieCard
          key={index}
          imageUrl={movie.poster_path}
          movieTitle={movie.title}
          rating={movie.vote_average}
        />
      ))}
    </div>
     
    </>
  );
}