import "./App.css";
import MovieList from "./MovieList";
import Header from "./header";
import { useState, useEffect } from "react";
import Footer from "./footer";

export default function App() {
  const [movieState, setMovieState] = useState(null);
  const [page, setPage] = useState(1);
  const [searchState, setSearchState] = useState(null);

  // API CALL
  const API_KEY = import.meta.env.VITE_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";
  
  async function getPopularMovies(page) {
    const res = await fetch(`${BASE_URL}/movie/now_playing?page=${page}`, {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    if (!res.ok) throw new Error("Failed to fetch movies");
    const data = await res.json();

    return data;
  }

  useEffect(()=> {
    getPopularMovies(page)
    .then(data => {
      if (page ===1) {
        let updateMyData = data?.results
        updateMyData = updateMyData.map(item => ( 
          ({...item, isLiked: false, isWatched: false })
        ))
        setMovieState(updateMyData)
      } else{
        setMovieState(prev => [...prev, ...data.results])
      }
    })
     .catch((err) => console.error("Error fetching more movies:", err));
  }, [page])

  function loadMoreMovies() {
    setPage(page +1 )
  }
  return (
    <>
      <div className="header-container">
        <Header movieState={movieState} setMovieState={setMovieState} setSearchState={setSearchState} />
      </div>
      <MovieList
        moviesToShow={searchState === null ? movieState : searchState}
        loadMoreMovies={loadMoreMovies} 
        setMovieState={setMovieState}
      />
      <Footer />
    </>
  );
}
