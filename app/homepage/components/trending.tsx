import { Grow } from '@mui/material'
import { Grid } from '@mui/material'
import Image from 'next/image';
import './trending.css'
import { Box } from '@mui/material';
import { useState } from 'react';
import ActorCard from '@/app/movie/components/actorCard/actorCard.component';

function ShowTrending({movies, grow}){

    return (
        <Grid className='movies-grid'>
    {movies.map((movie,index) => 
    (
    <Grid item alignItems='stretch'>

  <Grow in={grow} {...(grow ? { timeout: 800*index +500 } : {})}>
  <ActorCard key={index} item={movie} />
                </Grow>

    </Grid>
    
    )
  )}

  </Grid>
    )
}

export default ShowTrending;