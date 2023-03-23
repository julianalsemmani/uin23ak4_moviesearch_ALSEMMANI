import MovieCard from "./MovieCard"

export default function SearchResults(props) {
    const { movieList } = props

    return (
        <main>
            <div className="movie-cards">
                {movieList.map(movie => (
                    <MovieCard movie={movie} />
                ))}
            </div>
        </main>
    )
}