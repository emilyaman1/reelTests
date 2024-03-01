import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import theMovieDb from '../Utils/themoviedb';

function Details() {
    const [movieDetails, setMovieDetails] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const movieId = location.pathname.split('/').pop();
        theMovieDb.movies.getById({"id": movieId}, detailsSuccess, errorCB);
      }, [location.pathname]);
    

    function detailsSuccess(details) {
        const parsedDetails = JSON.parse(details);
        setMovieDetails(parsedDetails);
    }
    function errorCB(error) {
        console.error('Error fetching data:', error);
    } 

    return (
        <div>
            { movieDetails && (
                <>
                    <h1>{movieDetails.original_title}</h1>
                    <img src={`https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`} alt="Movie Poster" />
                    <div>{movieDetails.overview}</div>
                </>
            )}
        </div>
    );
}




export default Details;