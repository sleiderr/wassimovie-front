"use client";
import logo from './logo.svg';
import './page.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieGrid from './components/MovieGrid/movieGrid'

function Home() {
  
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  function useFetchRecommended() {
    axios
      .get(`${process.env.backURL}/user/me`, {headers: {Authorization: localStorage.getItem("jwtToken")}})
      .then(() =>
        axios
        .get(`${process.env.backURL}/movie/recommended`, {
          headers: {Authorization: localStorage.getItem("jwtToken")},
        })
        .then((response) => {
          setRecommendedMovies(response.data);
        })
      )
      .catch((err) =>
        axios
        .get(`${process.env.backURL}/movie/popular`, {
          params: {number: 100},
        })
        .then((response) => {
          setRecommendedMovies(response.data);
        })
        .catch((error) => {
          console.log(error)
        })
      )
  };

  function useFetchTrending() {
    axios
      .get(`${process.env.backURL}/movie/trending`, {params: {number: 5}})
      .then((response) => setTrendingMovies(response.data))
      .catch((error) => console.log(error))
  };

  useEffect(useFetchTrending,[]);
  useEffect(useFetchRecommended,[]);

  return (
    <div className="App">
      <img className='App-logo' src={process.env.logoURL} />
      <header className="App-header">
        Trending
      </header>
      <hr style={{position:'relative',width:'60%', left:'20%',border:'none',padding:'2px',backgroundColor: "#1b263b"}}></hr>
      <MovieGrid movies={trendingMovies} />
      <header className="App-header">
        Recommended
      </header>
      <hr style={{position:'relative',width:'60%', left:'20%',border:'none',padding:'2px',backgroundColor: "#1b263b"}}></hr>
      <MovieGrid movies={recommendedMovies} />
    </div>
  );
}

export default Home;