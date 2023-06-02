import { Button, FormControl, TextField } from "@mui/material"
import { Dispatch, FC, SetStateAction } from "react"
import SendIcon from '@mui/icons-material/Send'

interface LoginProps {
  children?: React.ReactNode,
  loginDetail: any,
  handleChange: any,
  submit: any,
}

const RegisterForm: FC<LoginProps> = function({children, loginDetail, handleChange, submit}) {
  return(
        <>
        <FormControl fullWidth={true}>
          <TextField 
            sx={{ p:2, pb: 3, input: { color: '#faedcd' } }}
            InputLabelProps={{
              sx: {
                m: 2,
                color: '#495057'          
              }          
            }}
            id="standard-basic" 
            label="Username" 
            name="username"
            required={true}
            value={loginDetail.username}
            onChange={handleChange}
          />
          <TextField 
            sx={{ p:2, pb: 3, input: { color: '#faedcd' } }}
            InputLabelProps={{
              sx: {
                m: 2,
                color: '#495057'          
              }          
            }}
            id="standard-basic" 
            label="Email" 
            name="email"
            required={true}
            value={loginDetail.email}
            onChange={handleChange}
          />
          <TextField 
            sx={{ p: 2, pb: 3, input: { color: '#faedcd' } }}
            InputLabelProps={{
              sx: {
                m: 2,
                color: '#495057'          
              }          
            }}
            id="standard-basic" 
            type="password"
            label="Password"
            name="password"
            required={true}
            value={loginDetail.password}
            onChange={handleChange}
          />
          <TextField 
            sx={{ p:2, pb: 3, input: { color: '#faedcd' } }}
            InputLabelProps={{
              sx: {
                m: 2,
                color: '#495057'          
              }          
            }}
            id="standard-basic" 
            label="First Name" 
            name="firstname"
            value={loginDetail.firstname}
            onChange={handleChange}
          />
          <TextField 
            sx={{ p:2, pb: 3, input: { color: '#faedcd' } }}
            InputLabelProps={{
              sx: {
                m: 2,
                color: '#495057'          
              }          
            }}
            id="standard-basic" 
            label="Last Name" 
            name="lastname"
            value={loginDetail.lastname}
            onChange={handleChange}
          />
          {/* <TextField
            sx={{ p:2, pb: 3, input: { color: '#faedcd'} }}
            InputLabelProps={{
              sx: {
                m: 2,
                color: '#495057'            
              }            
            }}
            id="outlined-password-input"
            label="Confirmez votre mot de passe"
            type="password"
            autoComplete="current-password"
          /> */}
        </FormControl>
          <div className="flex flex-row inline-block">
          <Button onClick={submit} color="primary" sx={{left: "60%", padding: '10px' }} variant="contained" endIcon={<SendIcon />}>
            Register
          </Button>
          </div>
        </>
  )
};

export default RegisterForm;