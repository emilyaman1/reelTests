import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import theMovieDb from '../Utils/themoviedb';

function Search() {
    const navigate = useNavigate();
    const [searchResults, setSearchResults] = useState([]);

    function getSearch(event) {
        const query = event.target.value;
        theMovieDb.search.getMovie({"query": encodeURIComponent(query)}, successCB, errorCB);
    }

    function successCB(data) {
        const parsedData = JSON.parse(data);
        setSearchResults(parsedData.results.slice(0,5));
    }

    function errorCB(error) {
        console.error('Error fetching data:', error);
    }
    
    return (
        <div>
            <input id="searchbar" onKeyUp={getSearch} type="text" name="search" placeholder="Search movies"/>
            <ul>
                {searchResults.map(movie => (
                    <li key={movie.id} onClick={()=>navigate(`/details/movieId/${movie.id}`)}>
                        {movie.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Search;