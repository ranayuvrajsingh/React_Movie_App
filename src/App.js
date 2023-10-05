import { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import Footer from "./footer";

const ApiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=5b5dd42f";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${ApiUrl}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  // const handleKeyPress = (event) => {
  //   if (event.key === "Enter") {
  //     searchMovies(searchTerm);
  //   }
  // };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchMovies(searchTerm);
    }
  };

  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <div className="app">
      <h1>⭐Yoo Movies⭐</h1>
      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          onKeyPress={handleKeyPress}
        />
        <img
          src={SearchIcon}
          alt="SearchIcon"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>

      {movies?.length ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies found</h2>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default App;
