import SearchResults from "./Components/SearchResults";
import { useState, useEffect } from "react";

function App() {

  const [search, setSearch] = useState('James Bond')
  const [movieList, setMovieList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchMovieDetails = async (imdbID) => {
    const url = `http://www.omdbapi.com/?i=${imdbID}&apikey=9e1609b`
    const response = await fetch(url)
    const data = await response.json()
    return data
  }

  const fetchMovies = async () => {
    setIsLoading(true);
    const url = `http://www.omdbapi.com/?apikey=9e1609b&s=${search}&type=movie`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response !== 'False') {
      const movieList = [];
      for (const movie of data.Search) {
        const details = await fetchMovieDetails(movie.imdbID);
        const movieWithDetails = { ...movie, ...details };
        movieList.push(movieWithDetails);
      }
      setMovieList(movieList);
    }
    setIsLoading(false);
    console.log(movieList);
  };

  useEffect(() => {
    if (search !== '' && search.length >= 3) {
      fetchMovies()
    }
    // eslint-disable-next-line
  }, [search])

  return (
    <div className="App">
      <header>
        <h1>Movie Search</h1>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search for a movie" />
      </header>

      {isLoading ? (
        <div className="loading">
          <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="Loading..." />
        </div>
      ) : (
        <SearchResults movieList={movieList} />
      )}

      <footer>
        <a id="copyright" href="https://github.com/julianalsemmani">Copyright &copy; Julian Alsemmani</a>
      </footer>
    </div>
  );
}

export default App;
