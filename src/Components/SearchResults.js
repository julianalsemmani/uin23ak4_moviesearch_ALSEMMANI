import MovieCard from "./MovieCard"

export default function SearchResults(props) {
    const { movieList } = props

    return (
        <main>
            <article className="movie-cards">
                {movieList.map(movie => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </article>
        </main>
    )
}