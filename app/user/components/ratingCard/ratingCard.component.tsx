import React, { useEffect, useState } from 'react';
import './ratingCard.component.css';
import { Rating } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const RatingCard = ({ item }) => {
  const [movie, setMovie] = useState({
    title: "",
    poster_path: "",
  })
  const useFetchMovie = () => {
    axios
    .get(`${process.env.backURL}/movie/find`,{params: {id: item.movieId}})
    .then((response) => {setMovie(response.data)})
    .catch((err) => {console.log(err)});
  };

  function onClick() {
    router.push(`/movie/${movie.imdb_id}`)
  }

  useEffect(useFetchMovie,[])
  const router = useRouter()
  return (
    <a href={`/movie/${movie.imdb_id}`} className='rating-container'>
      <img className='rating-poster' src={process.env.imdbPhotoURL + movie.poster_path} alt={movie.title}/>
      <div className='rating-detail'>
        <p>{movie.title}</p>
        <Rating value={item.rating} readOnly></Rating>
        </div>
    </a>
    
  );
};

export default RatingCard;