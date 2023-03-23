import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Movie() {
    const { slug } = useParams();

    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const fetchMovie = async () => {
        const url = `https://www.omdbapi.com/?apikey=9e1609b&i=${slug}&plot=full`;
        const response = await fetch(url);
        const data = await response.json();
        setMovie(data);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchMovie();
        // eslint-disable-next-line
    }, [slug])
    
    return (
        <>
            {isLoading ? (
                <div className="loading">
                    <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="Loading..." />
                </div>
            ) : (
                <main className='one-movie'>
                    <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://www.popcorn.app/assets/app/images/placeholder-movieimage.png'} alt={movie.Title} />
                    <div>
                        <h3>{movie.Title}</h3>
                        <p><span className="bold">Year</span>: {movie.Year} | <span className="bold">Released</span>: {movie.Released}</p>
                        <p><span className="bold">Genre</span>: </p>
                        <div className='tag-container'>
                            <p>{movie.Genre && movie.Genre.split(",").map(genre => <span className="tag genre-tag">{genre.trim()}</span>)}</p>
                        </div>
                        <p><span className="bold">Director</span>:</p>
                        <div className='tag-container'>
                            <p>{movie.Director && movie.Director.split(",").map(director => <span className="tag director-tag">{director.trim()}</span>)}</p>
                        </div>
                        <p className="bold">Actors:</p>
                        <div className='tag-container'>
                            <p>{movie.Actors.split(",").map(actor => {
                                const names = actor.trim().split(" ");
                                const firstName = names[0];
                                const lastName = names.length > 1 ? names[names.length - 1].charAt(0) + "." : "";
                                return <span className="tag actor-tag">{`${firstName} ${lastName}`}</span>;
                            })}</p>
                        </div>
                        <p><span className="bold">IMDb Rating</span>: {movie.imdbRating}</p>
                        <p className="bold">Awards:</p>
                        <p>{movie.Awards}</p>
                        <p className="bold">Plot</p>
                        <p className='plot-text'>{movie.Plot}</p>
                    </div>
                </main>
            )}
        </>
    )
}

export default Movie;