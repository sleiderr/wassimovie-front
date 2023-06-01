'use client';
import { Avatar } from '@mui/material'
import './page.css'
import { deepOrange } from '@mui/material/colors'
import { useParams } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';
import withAuth from '../../middlewares/withAuth';

const User = () => {
  return <p style={{position: 'absolute', top:'50%'}}>Hello World!!</p>
}

export default withAuth(User);