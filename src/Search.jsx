import Dropdown from "./dropdown";
import "./search.css";
import { useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function Search({ setSearchState , SortMovies}) {
    const API_KEY = import.meta.env.VITE_API_KEY;
  // 5. use Parent setSearchState to update search state
  const [searchVal, setSearchVal] = useState("");
  
  function search(e) {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      searchVal
    )}&page=${1}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setSearchState(json.results))
      .catch((err) => console.error(err));
  }
  const UpdateSearch = (e) => setSearchVal(e.target.value);

  const clearInput = () => {
    setSearchState(null);
    setSearchVal("");
  };
  return (
    <>
      <div className="search-comp">
        <div className="search-input">
          <form className="search-form" onSubmit={(e) => search(e)}>
            <input className="search-field" value={searchVal} name="query" onChange={UpdateSearch} required placeholder="Search movies.." />
            <button  className="playing-btn" type="submit">Search</button>
          </form>
          <button className="playing-btn" onClick={clearInput}>Now Playing</button>
        </div>
        <Dropdown SortMovies={SortMovies}  />
      </div>
    </>
  );
}
