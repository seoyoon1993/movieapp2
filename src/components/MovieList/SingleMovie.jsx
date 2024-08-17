/* eslint-disable no-unused-vars */
import "./SingleMovie.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import MovieTag from "./MovieTag";

const SingleMovie = () => {
  const { movieId } = useParams();
  const [singleMovie, setSingleMovie] = useState(null);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchSingleMovie();
  }, []);

  const fetchSingleMovie = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=1cd36bf9e39e2e65a9f986373c5a6321&language=ko`);
    const data = await response.json();
    setSingleMovie(data);
    setGenres(data.genres);
  };

  if (singleMovie !== null) {
    console.log(singleMovie);
    return (
      <div className="container">
        <div className="d-flex h-75">
          <img className="ms-5 mt-5 col-md-6 img-thumbnail" src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`} alt="movie poster" />

          <div className="ms-5 mt-5 col-md-6 card">
            <ul className="list-group list-group-flush">
              <li className="mt-3 text-center list-group-item">{singleMovie.title} ({singleMovie.original_title})</li>
              <li className="mt-3 list-group-item">개봉일 : {singleMovie.release_date}</li>
              <li className="mt-3 list-group-item">런타일 : {singleMovie.runtime} 분</li>
              <li className="mt-3 list-group-item">줄거리 <br /> {singleMovie.overview}</li>
              <li className="mt-3 list-group-item">{genres.map((genre) => (<MovieTag genre={genre} />))}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default SingleMovie;
