'use client';
import { Avatar, Box, Button, Typography } from '@mui/material'
import './page.css'
import { deepOrange } from '@mui/material/colors'
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import withAuth from '../../middlewares/withAuth';
import RatingGrid from './components/ratingGrid/ratingGrid.component';

const User = () => {
  const [user, setUser] = useState({username:'', email:'', firstname:'', lastname:''})
  const [ratings, setRatings] = useState(null)
  
  const router = useRouter()

  function useFetchUser() {
    axios
      .get(`${process.env.backURL}/user/me`, {headers: {Authorization: localStorage.getItem("jwtToken")}})
      .then((response) => {
        setUser(response.data);
      })
      .catch(() => {
        console.log("Error")
      })
  }

  function useFetchRatings() {
    axios
      .get(`${process.env.backURL}/rating/user`, {headers: {Authorization: `${localStorage.getItem("jwtToken")}`}})
      .then((userRating) => {
        setRatings(userRating.data)
      })
      .catch(() => console.log("ratings unavailable"))
  }

  function getInitials() {
    const firstNameInitial = user.firstname.charAt(0).toUpperCase();
    const lastNameInitial = user.lastname.charAt(0).toUpperCase();
    return firstNameInitial + lastNameInitial;
  }

  function disconnect() {
    localStorage.removeItem('jwtToken');
    router.push('/')
  }

  useEffect(useFetchUser,[])
  useEffect(useFetchRatings,[])

  return (
    <div className='main-body'>
      <div className='top-card'>
        <Avatar
        sx={{
          backgroundColor: '#1b263b',
          width: '130px',
          height: '130px',
        }}
        >
          <Box
          sx={{
            width: '80%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            fontSize: '50px',
            alignItems: 'center',
            color: 'white',
          }}
          >
            {getInitials()}
          </Box>
        </Avatar>
        <div className='user-info'>
          <Typography variant="h5" sx={{fontWeight: 'bold'}} gutterBottom>
            @{user.username}
          </Typography>
          <Typography variant="body1" sx={{fontWeight: '700'}} gutterBottom>
            {user.firstname} {user.lastname}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {user.email}
          </Typography>
          <Button color='secondary' sx={{color: 'red'}} onClick={disconnect}>Disconnect</Button>
          <p></p>
        </div>
      </div>
      <div className='ratings-main'>
        {ratings && <RatingGrid items={ratings}></RatingGrid>}
      </div>
    </div>
  )
}

export default withAuth(User);