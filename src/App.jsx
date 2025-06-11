import './App.css'
import MovieList from './MovieList'
import Header from './header'
import Modal from './modal'
import { useState, useEffect } from 'react'


export default function App(){
  const [movieState, setMovieState] = useState(null);
  const [page, setPage] = useState(1);
  const [searchState, setSearchState] = useState(null);
  const [isModalOpen, setisModalOpen] = useState(false)

// API CALL
  const API_KEY = import.meta.env.VITE_API_KEY
  const BASE_URL = 'https://api.themoviedb.org/3';

  async function getPopularMovies(page){
      const res = await fetch(`${BASE_URL}/movie/now_playing?page=${page}`,{
          headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`,
    },

      }) 
      if (!res.ok) throw new Error('Failed to fetch movies');
      const data = await res.json();
      return data;
      
  };
  function openModal(){
    setisModalOpen(true)
  }

  // useEffect(() => {
  //   console.log('searchState', searchState)
  // }, [searchState])
  
  useEffect(() => {
    getPopularMovies(page)
      .then((data) => setMovieState(data.results))
      .catch((err) => console.error('Error fetching movies:', err));
  }, [page]);

  function loadMoreMovies(){
    getPopularMovies(page + 1)
      .then((data) => setMovieState([...movieState, ...data.results]))
      .catch((err) => console.error('Error fetching more movies:', err));
  }

  return(
    <>
      <div>
        <Header setSearchState={setSearchState} />
        <MovieList moviesToShow={searchState === null ? movieState : searchState} loadMoreMovies={loadMoreMovies} openModal= {openModal} />
      </div>
    </>
  )
}