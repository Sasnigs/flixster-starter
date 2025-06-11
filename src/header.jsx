import "./header.css"
import { useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY

export default function Header({ setSearchState }){
    // 5. use Parent setSearchState to update search state
    const [searchVal, setSearchVal] = useState("")
    function search(e) {
        e.preventDefault()
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchVal)}&page=${1}`;
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjFhNmM2MGQ3OTQ1NTA2MzY5ODAyNzVmNmI5MDEwMyIsIm5iZiI6MTc0OTUzNDEwNS42LCJzdWIiOiI2ODQ3YzU5OTI0YzM5ZWY0ZTUxZWFmMDgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Tw_RWHG1ccwOFzJdJL4ajAyA5i_qiVecj-qXFkKX9_g'
        }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => setSearchState(json.results))
            .catch(err => console.error(err));
    }
    const UpdateSearch = (e) => setSearchVal(e.target.value);
    
    const clearInput = () => {
        setSearchState(null)
        setSearchVal("")
    }
    return (
        <>
            <div className="header">
               <h1>House of Movies</h1>
               <div style={{display: 'flex'}}>
                <form onSubmit={(e) => search(e)}>
                    <input value={searchVal} name="query" onChange={UpdateSearch}/>
                    <button type="submit">Search</button>
                </form>
                <button onClick={clearInput}>Clear</button>
               </div>
            </div>
        
        </>
    )
}