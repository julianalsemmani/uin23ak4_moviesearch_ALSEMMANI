import '../tags.css';

export default function MovieCard(props) {
    const { movie } = props

    return (
        <section className="movie-card" key={movie.imdbID} aria-label={`Movie details for ${movie.Title}`}>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://www.popcorn.app/assets/app/images/placeholder-movieimage.png'} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p><span className="bold">Year</span>: {movie.Year} | <span className="bold">Released</span>: {movie.Released}</p>
            <p><span className="bold">Genre</span>: </p>
            <p>{movie.Genre.split(",").map(genre => <span className="tag genre-tag">{genre.trim()}</span>)}</p>
            <p><span className="bold">Director</span>:</p>
            <p>{movie.Director.split(",").map(director => <span className="tag director-tag">{director.trim()}</span>)}</p>
            <p className="bold">Actors:</p>
            <p>{movie.Actors.split(",").map(actor => <span className="tag actor-tag">{actor.trim()}</span>)}</p>
            <p><span className="bold">IMDb Rating</span>: {movie.imdbRating}</p>
            <p className="bold">Awards:</p>
            <p>{movie.Awards}</p>
        </section>
    )
}