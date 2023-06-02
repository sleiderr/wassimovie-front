'use client';
import './page.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieGrid from '../home/components/MovieGrid/movieGrid';
import { Button } from '@mui/material';

function Home() {
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState([]);

  function onSearchClick() {
    axios
      .get(`${process.env.backURL}/movie/search`,{params: {title: movieName}})
      .then((result) => {
        setMovies(result.data)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        Search a Movie
      </header>
      <input value={movieName} onChange={event => setMovieName(event.target.value)} placeholder='Search a movie' onKeyDown={(e) => {if (e.key == 'Enter') {onSearchClick()}}}/>
      <Button style={{marginLeft:"30px", backgroundColor:"#1b263b", color:"white", borderRadius:"30px", padding: "10px"}} onClick={onSearchClick}>Search</Button>
      <MovieGrid movies={movies} />
    </div>
  );
}

export default Home;
