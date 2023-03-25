import '../tags.css';
import { Link } from 'react-router-dom';

export default function MovieCard(props) {
    const { movie } = props

    return (
        <>
            <Link className="movie-card" to={`/${movie.imdbID}`} key={movie.imdbID}>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://www.popcorn.app/assets/app/images/placeholder-movieimage.png'} alt={movie.Title} />
                <h3>{movie.Title}</h3>
                <p><span className="bold">Year</span>: {movie.Year} | <span className="bold">Released</span>: {movie.Released}</p>
                <p><span className="bold">Genre</span>: </p>
                <p>{movie.Genre.split(",").map((genre, i) => <span key={i} className="tag genre-tag">{genre.trim()}</span>)}</p>
                <p><span className="bold">Director</span>:</p>
                <p>{movie.Director.split(",").map((director, i) => {
                    const [firstName, lastName] = director.trim().split(" ");
                    return <span key={i} className="tag director-tag">{firstName} {lastName && lastName.charAt(0)}.</span>;
                })}</p>
                <p className="bold">Actors:</p>
                <p>{movie.Actors.split(",").map((actor, i) => {
                    const names = actor.trim().split(" ");
                    const firstName = names[0];
                    const lastName = names.length > 1 ? names[names.length - 1].charAt(0) + "." : "";
                    return <span key={i} className="tag actor-tag">{`${firstName} ${lastName}`}</span>;
                })}</p>
                <p><span className="bold">IMDb Rating</span>: {movie.imdbRating}</p>
                <p className="bold">Awards:</p>
                <p>{movie.Awards}</p>
            </Link>
        </>
    )
}