import SearchResults from "../Components/SearchResults";
import { useState, useEffect } from "react";
import Footer from "../Components/Footer";

function HomePage() {
  // Definerer UseState for søk, filmListe og isLoading
  const [search, setSearch] = useState('James Bond')
  const [movieList, setMovieList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // Henter ut detaljer om filmen basert på imdbID
  const fetchMovieDetails = async (imdbID) => {
    const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=9e1609b`
    const response = await fetch(url)
    const data = await response.json()
    return data
  }

  // Henter ut filmene basert på søk query
  const fetchMovies = async () => {
    // Setter isLoading til true for å vise loading gif
    setIsLoading(true);
    // Definerer url med APi key, søk og type
    const url = `https://www.omdbapi.com/?apikey=9e1609b&s=${search}&type=movie`;
    // Henter ut data fra url
    const response = await fetch(url);
    // Konverterer data til json
    const data = await response.json();
    // Sjekker om responsen er false, hvis den er false så vil den ikke kjøre koden under
    if (data.Response !== 'False') {
      // Definerer en tom array for å legge til filmene i
      const movieList = [];
      // For hver film i data.Search så kjører vi fetchMovieDetails funksjonen og legger til filmen i movieList arrayen
      for (const movie of data.Search) {
        // Henter ut detaljer om filmen basert på imdbID
        const details = await fetchMovieDetails(movie.imdbID);
        // Definerer en ny variabel som inneholder filmen og detaljene
        const movieWithDetails = { ...movie, ...details };
        // Legger til filmen i movieList arrayen
        movieList.push(movieWithDetails);
      }
      // Setter movieList til movieList arrayen
      setMovieList(movieList);
    }
    // Setter isLoading til false for å fjerne loading gif
    setIsLoading(false);
  };

  // Kjører fetchMovies funksjonen når komponenten lastes inn
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

      <Footer />
    </div>
  );
}


export default HomePage;