'use client'
import { FC, useState } from "react";
import styles from './styles.module.css'
import Paper from "@mui/material/Paper";
import { Divider, IconButton } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LoginForm from "./login_form";
import RegisterForm from "./register_form";


const loginPage: FC = function() {

  const [login, setLogin] = useState(true);
  
  return (
    <>
      <div className={`${styles.anim_gradient} h-screen overflow-hidden`}>
        <div className="grid grid-cols-10">
        <div className="min-w-1000 rounded-lg col-start-4 col-end-8 mt-14 content-center">
        <Paper elevation={12} className="rounded-lg bg-[#1b263b]">
          <div className="flex flex-col">
          <img className="place-self-center mt-10" width="50%" src="https://cdn-pop.viarezo.fr/static/wassimovie/logos/logo-small.png" />
          <div>
          {login ?
          <LoginForm login={login} setLogin={setLogin}/>
          :
          <RegisterForm login={login} setLogin={setLogin} />
          }
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

export default loginPage;