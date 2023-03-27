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

    /*
    Første koden: Den sjekker om isLoading er true, hvis den er true så vil den vise loading gif, hvis den er false så vil den vise filmen.
    Andre koden: Den sjekker om movie.Poster er lik 'N/A', hvis den er lik 'N/A' så vil den vise placeholder bilde, hvis den ikke er lik 'N/A' så vil den vise filmens bilde.
    Den looper gjennom movie.Genre og splitter den på komma, så lager den en span for hver genre.
    Den looper gjennom movie.Directors og splitter den på komma, så lager den en span for hver regissør.
    Den looper gjennom movie.Actors og splitter den på komma, så lager den en span for hver skuespiller. Den splitter også fornavn og etternavn, og forkorter etternavn til kun første bokstav og punktum.
    */
    return (
        <>
            {isLoading ? (
                <div className="loading">
                    <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="Loading..." />
                </div>
            ) : (
                <main className='one-movie'>
                    <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://www.popcorn.app/assets/app/images/placeholder-movieimage.png'} alt={movie.Title} />
                    <article>
                        <h3>{movie.Title}</h3>
                        <p><span className="bold">Year</span>: {movie.Year} | <span className="bold">Released</span>: {movie.Released}</p>
                        <p><span className="bold">Genre</span>: </p>
                        <div className='tag-container'>
                            <p>{movie.Genre && movie.Genre.split(",").map((genre, i) => <span key={i} className="tag genre-tag">{genre.trim()}</span>)}</p>
                        </div>
                        <p><span className="bold">Director</span>:</p>
                        <div className='tag-container'>
                            <p>{movie.Director && movie.Director.split(",").map((director, i) => <span key={i} className="tag director-tag">{director.trim()}</span>)}</p>
                        </div>
                        <p className="bold">Actors:</p>
                        <div className='tag-container'>
                            <p>{movie.Actors.split(",").map((actor, i) => {
                                const [firstName, lastName] = actor.trim().split(" ");
                                return <span key={i} className="tag actor-tag">{firstName} {lastName && lastName.charAt(0)}.</span>;
                            })}</p>
                        </div>
                        <p><span className="bold">IMDb Rating</span>: {movie.imdbRating}</p>
                        <p className="bold">Awards:</p>
                        <p>{movie.Awards}</p>
                        <p className="bold">Plot</p>
                        <p className='plot-text'>{movie.Plot}</p>
                    </article>
                </main>
            )}
        </>
    )
}

export default Movie;