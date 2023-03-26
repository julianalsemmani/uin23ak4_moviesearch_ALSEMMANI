export default function MovieCards(props) {
    const { movieList } = props

    return (
        <main>
                {movieList.map(movie => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))}
        </main>
    )
}