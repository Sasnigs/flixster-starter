import './header.css'
import Search from "./Search";

export default function Header({ setSearchState, movieState, setMovieState}){
  function SortMovies(value){
    let sortedMovies = [...movieState]
   if (value.toLowerCase() === "title"){
       sortedMovies.sort((a, b) => a.title.localeCompare( b.title))
       setMovieState(sortedMovies)
     }
     else if (value === 'Most recent'){
      sortedMovies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
         setMovieState(sortedMovies);
   }
     else if (value === 'Rating'){
      sortedMovies.sort((a, b) => b.vote_average - a.vote_average)
       setMovieState(sortedMovies)
      }
    }
  return(
    <>
      <div className='header'>
         <h1 className="header-name">House Of</h1>
          <img src="/movie.png" alt="" />
      </div>
      <Search setSearchState={setSearchState} SortMovies={SortMovies} />
    </>
  )
}


