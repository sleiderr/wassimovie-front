"use client";
import './page.css'
import React, { useEffect, useState } from 'react';
import {useParams, useRouter} from 'next/navigation';
import axios from 'axios';
import ActorGrid from '../components/actorGrid/actorGrid.component';
import { Button, IconButton, Rating } from '@mui/material';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import RadioGroupRating from '../components/rating/rating.component';

const MoviePage = () => {
  const params = useParams();
  const [movie, setMovie] = useState({
    title: "",
    backdrop_path: "",
    poster_path: "",
    release_date: "",
    directors: [],
    cast: [],
    overview: "",
    vote_average: 0,
    vote_count: 0,
  });
  const [user, setUser] = useState(null)
  const [rating, setRating] = useState(-1)

  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const useFetchUser = () => {
    axios
      .get(`${process.env.backURL}/user/me`, {headers: {Authorization: localStorage.getItem('jwtToken')}})
      .then((response) => setUser(response.data))
      .catch(() => {})
  }

  const useFetchMovie = () => {
    axios
    .get(`${process.env.backURL}/movie/find`,{params: params})
    .then((response) => {setMovie(response.data)})
    .catch((err) => {console.log(err)});
  };

  const useFetchRating = () => {
    axios
      .get(`${process.env.backURL}/rating`,{params: params, headers: {Authorization: localStorage.getItem("jwtToken")}})
      .then((response) => setRating(response.data.rating))
      .catch(() => {})
  }

  const onSetRating = (event) => {
    setRating(event.target.value)
    axios
      .post(`${process.env.backURL}/rating/add`,{
        id: params.id,
        rating: event.target.value,
      },{headers: {Authorization: localStorage.getItem('jwtToken'), 'content-type': 'application/x-www-form-urlencoded'} })
      .catch(() => {console.log("Error adding rating")})
  }

  useEffect(useFetchMovie,[])
  useEffect(useFetchUser, [])
  useEffect(useFetchRating, [])

  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="page-container">
      <div className="main-body" style={{backgroundImage: `url("${process.env.imdbPhotoURL}${movie.backdrop_path}")`}}>
        <Button sx={{color: 'white'}} startIcon={<ArrowBackIosIcon />} onClick={handleGoBack}>Back</Button>
        <div className='dark-body'>
          <div className='header-card'>
            <img className='poster-image' src={`${process.env.imdbPhotoURL}${movie.poster_path}`}/>
            <div className='info-card'>
              <p className='text-header'>{movie.title}</p>
              <p><b>Released:</b> {movie.release_date}</p>
              <span style={{display: 'flex', flexDirection:'row'}}><b>Director(s):</b>{movie.directors.map((director,index) => <p key={index} style={{marginLeft: '15px'}}>{director['name']}</p>)}</span>
              <p><Rating name="rating_others" value={movie.vote_average/2} precision={0.1} readOnly />({movie.vote_count} Ratings)</p>
              {user && <>Give your own rating<RadioGroupRating rating={rating} onChange={onSetRating}></RadioGroupRating></>}
            </div>
          </div>
          <div className='info-section'>
            <div className='info-header'>
              <button
                className={activeTab === 1 ? 'tab-button-active' : ''}
                onClick={() => setActiveTab(1)}
              >
                About
              </button>
              <button
                className={activeTab === 2 ? 'tab-button-active' : ''}
                onClick={() => setActiveTab(2)}
              >
                Cast
              </button>
            </div>
            <hr style={{position:'relative',width:'90%', left:'5%',border:'none',padding:'2px',background:'linear-gradient(to right, #2b5876, #4e4376)'}}></hr>
            <div className='info-box'>
              {activeTab === 1 && <div>{movie.overview}</div>}
              {activeTab === 2 && <div><ActorGrid items={movie.cast}/></div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoviePage