import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { ListContainer } from "./components/ListContainer";
import { SearchForm } from "./components/SearchForm";

function App() {
  const [movieList, setMovieList] = useState([]);

  const addMovie = (movie) => {
    const filteredMovies = movieList.filter(
      (item) => item.imdbID !== movie.imdbID
    );
    setMovieList([...filteredMovies, movie]);
  };
  const removeMovie = (id) => {
    if (!window.confirm("Are you sure want to delete this movie?")) {
      return;
    }
    const filteredMovies = movieList.filter((item) => item.imdbID !== id);
    setMovieList(filteredMovies);
  };
  return (
    <div className="wrapper bg-dark text-warning pt-5">
      <Container>
        <h3 clasName="text-center">My Movie collection</h3>
        <hr />

        {/* form section */}
        <SearchForm addMovie={addMovie} />
        {/* Card Section  */}
        {/* list section  */}
        <ListContainer movieList={movieList} removeMovie={removeMovie} />

        {/* Button  */}

        {/* movie list  */}
      </Container>
    </div>
  );
}

export default App;
