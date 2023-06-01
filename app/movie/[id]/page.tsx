"use client";
import './page.css'
import React, { useEffect, useState } from 'react';
import {useParams} from 'next/navigation';
import axios from 'axios';
import ActorGrid from '../components/actorGrid/actorGrid.component';
import { Rating } from '@mui/material';

export default function() {
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

  const useFetchMovie = () => {
    axios
    .get(`${process.env.backURL}/movie/find`,{params: params})
    .then((response) => {setMovie(response.data)})
    .catch((err) => {console.log(err)});
  };

  useEffect(useFetchMovie,[])

  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="page-container">
      <div className="main-body" style={{backgroundImage: `url("${process.env.imdbPhotoURL}${movie.backdrop_path}")`}}>
        <div className='dark-body'>
          <div className='header-card'>
          <img className='poster-image' src={`${process.env.imdbPhotoURL}${movie.poster_path}`}/>
          <div className='info-card'>
            <p className='text-header'>{movie.title}</p>
            <p><b>Released:</b> {movie.release_date}</p>
            <p style={{display: 'flex', flexDirection:'row'}}><b>Director(s):</b>{movie.directors.map(director => <p style={{marginLeft: '15px'}}>{director['name']}</p>)}</p>
            {/* <a className='trailer-button'>
              <div style={{width: "30px", height:"2em"}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='white'>
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
                <span style={{height:'100%', verticalAlign:'center'}}>Trailer</span>
            </a> */}
            <Rating name="rating_others" value={movie.vote_average/2} precision={0.1} readOnly />
            <p>({movie.vote_count} Ratings)</p>
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
              <button
                className={activeTab === 3 ? 'tab-button-active' : ''}
                onClick={() => setActiveTab(3)}
              >
                Ratings
              </button>
            </div>
            <hr style={{position:'relative',width:'90%', left:'5%',border:'none',padding:'2px',background:'linear-gradient(to right, #2b5876, #4e4376)'}}></hr>
            <div className='info-box'>
              {activeTab === 1 && <div>{movie.overview}</div>}
              {activeTab === 2 && <div><ActorGrid items={movie.cast}/></div>}
              {activeTab === 3 && <div>Content for Tab 3</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}