'use client'
import React from 'react';
import {TextField} from '@mui/material';
import './page.css'
import Image from 'next/image';
import Logo  from './logo-pride.png'
import { Grow } from '@mui/material'
import poster from './poster.jpeg'
import { useEffect, useRef, useState, useMemo } from 'react';
import ShowTrending from './components/trending';
import {InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {IconButton} from '@mui/material';

function Page () {
  const movie_list =[poster,poster,poster,poster,poster,poster]
  const [grow, setGrow] = useState(false);

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInViewport1 = useIsInViewport(ref1);
  const isInViewport2 = useIsInViewport(ref2);

  
  useEffect( () => {
    setGrow(true)
  },[])

  return(
  <div className='doc'>

  <Image className='wassi' src={Logo} alt='logo'/>

  <div className='search-div' style= {{ display: 'flex'}}>
    <TextField className='search-bar'
    InputProps={{
      endAdornment: (
        <InputAdornment position="start">
          <IconButton>
          <SearchIcon />
        </IconButton>
        </InputAdornment>
       )
      }}
    placeholder={'enter a movie'}

    size="medium"
    sx={{width: 600, input: { color: 'gray' }}}
  />

  </div>
  <Grow in={grow}>
  <h1 className='wassi-trend'>Trending</h1>
  </Grow>
  <hr className='wassi-separator'></hr>
  <ShowTrending movies={movie_list} grow = {grow} />
  <h1 className='wassi-trend'>Recommended</h1>
  <div ref={ref1}>
  <hr className='wassi-separator' ></hr>
  <ShowTrending movies={movie_list} grow = {isInViewport1} />
  </div>
  <div ref={ref2}>
  <ShowTrending movies={movie_list} grow = {isInViewport2} />
  </div>

  </div>  
  )


  function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting),
        ),
      [],
    );
  
    useEffect(() => {
      observer.observe(ref.current);
  
      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);
  
    return isIntersecting;
  }
}

export default Page;