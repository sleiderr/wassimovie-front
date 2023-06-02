'use client'
import { FC, useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import styles from './styles.module.css'
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send'
import FormControl from "@mui/material/FormControl";
import { Alert, Avatar, Divider, IconButton } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";


const LoginPage: FC = function() {
  const [loginDetail, setLoginDetail] = useState({
    username: null,
    email: null,
    password: null,
  })

  const [errorMessage, setErrorMessage] = useState("")

  const router = useRouter();

  const onSubmit = async () => {
    axios
      .post(`${process.env.backURL}/user/login`, loginDetail,
        {headers: {'content-type': 'application/x-www-form-urlencoded'}}
      )
      .then((response) => {
        localStorage.setItem('jwtToken',response.data.code);
        router.push('/user');
      })
      .catch((err) => {
        setErrorMessage("Invalid user credentials")
      })
  }

  const handleChange = function (evt) {
    const value = evt.target.value;
    setLoginDetail({
      ...loginDetail,
      [evt.target.name]: value
    })
  };

  useEffect(() => {
    axios
      .get(`${process.env.backURL}/user/me`,{ headers: {Authorization: localStorage.getItem("jwtToken")}})
      .then(() => {
        router.push('/user')
      })
      .catch(() => {
        })
  },[])

  return (
    <>
      <div className={`${styles.anim_gradient} h-screen overflow-hidden`}>
        <div className="grid grid-cols-10 grid-rows-5">
        <div className="rounded-lg col-start-4 col-end-8 row-start-1 row-end-3 content-center">
        <Paper elevation={12} className="rounded-lg bg-[#1b263b]">
          <div className="grid grid-rows-2 m-20 ">
          <img className="place-self-center" width="50%" src="https://cdn-pop.viarezo.fr/static/wassimovie/logos/logo-small.png" />
          <div className="row-start-2 block">
          <FormControl fullWidth={true}>
          {errorMessage && <Alert severity="error" style={{marginBottom: '20px'}}>{errorMessage}</Alert>}
          <TextField 
            sx={{ pb: 3, input: { color: '#faedcd' } }}
            InputLabelProps={{
              sx: {
                color: '#495057'          
              }          
            }}
            value={loginDetail.username}
            name="username"
            onChange={handleChange}
            id="standard-basic" 
            label="Username" 
          />
          <TextField
            sx={{ pb: 5, input: { color: '#faedcd'} }}
            InputLabelProps={{
              sx: {
                color: '#495057'            
              }            
            }}
            id="outlined-password-input"
            label="Mot de passe"
            type="password"
            autoComplete="current-password"
            value={loginDetail.password}
            name="password"
            onChange={handleChange}
          />
          <Button onClick={onSubmit} style={{backgroundColor: '#ab47bc'}} sx={{ '&:active': {bgcolor: '#a11111'}, backgroundColor: '#ab47bc', mb: 7 }} variant="contained" endIcon={<SendIcon />}>
            Se connecter
          </Button>
          </FormControl>
          <Divider />
          <div className="grid grid-cols-5">
          <IconButton className="col-start-2 col-end-3" size='large' sx={{ mb: 2 }}>
              <GoogleIcon fontSize='large' color='error' />
          </IconButton>
          <IconButton className="col-start-4 col-end-5" size='large' sx={{ mb: 2 }}>
              <FacebookIcon fontSize='large' color='primary' />
          </IconButton>
          </div>
          </div>
          </div>
        </Paper>
        </div>
        </div>
      </div>
    </>
  )
  
}

export default LoginPage;