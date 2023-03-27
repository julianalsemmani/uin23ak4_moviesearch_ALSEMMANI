import '../tags.css';
import { Link } from 'react-router-dom';

export default function MovieCard(props) {
    // Destructuring av props
    const { movie } = props
    /*
    Første koden: Den sjekker om isLoading er true, hvis den er true så vil den vise loading gif, hvis den er false så vil den vise filmen.
    Andre koden: Den sjekker om movie.Poster er lik 'N/A', hvis den er lik 'N/A' så vil den vise placeholder bilde, hvis den ikke er lik 'N/A' så vil den vise filmens bilde.
    Den looper gjennom movie.Genre og splitter den på komma, så lager den en span for hver genre.
    Den looper gjennom movie.Directors og splitter den på komma, så lager den en span for hver regissør.
    Den looper gjennom movie.Actors og splitter den på komma, så lager den en span for hver skuespiller. Den splitter også fornavn og etternavn, og forkorter etternavn til kun første bokstav og punktum.
    */
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
                    const [firstName, lastName] = actor.trim().split(" ");
                    return <span key={i} className="tag actor-tag">{firstName} {lastName && lastName.charAt(0)}.</span>;
                })}</p>
                <p><span className="bold">IMDb Rating</span>: {movie.imdbRating}</p>
                <p className="bold">Awards:</p>
                <p>{movie.Awards}</p>
            </Link>
        </>
    )
}