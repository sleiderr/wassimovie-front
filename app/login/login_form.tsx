import { Button, FormControl, TextField } from "@mui/material"
import { Dispatch, FC, SetStateAction } from "react"
import SendIcon from '@mui/icons-material/Send'

interface LoginProps {
  children?: React.ReactNode,
  login: Boolean,
  setLogin: any,
  loginDetail: any,
  handleChange: any,
  submit: any,
}

const LoginForm: FC<LoginProps> = function({children, login, setLogin, loginDetail, handleChange, submit}) {
  return(
        <>
        <FormControl fullWidth={true}>
          <TextField 
            sx={{ p:2, pb: 3, input: { color: '#faedcd' } }}
            InputLabelProps={{
              sx: {
                p: 2,
                color: '#495057'          
              }          
            }}
            id="standard-basic" 
            label="Username" 
            name="username"
            value={loginDetail.username}
            onChange={handleChange}
          />
          <TextField
            sx={{ p:2, pb: 3, input: { color: '#faedcd'} }}
            InputLabelProps={{
              sx: {
                p: 2,
                color: '#495057'            
              }            
            }}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            name="password"
            value={loginDetail.password}
            onChange={handleChange}
          />
        </FormControl>
          <div className="flex flex-row inline-block">
          <Button onClick={() => {setLogin(!login)} } color="success" sx={{left:'10%',mr: 2, mt: 5, mb: 3 }} variant="contained" endIcon={<SendIcon />}>
            Sign up  
          </Button>
          <Button onClick={submit} color="primary" sx={{left: '40%', mr: 2, mt: 5, mb: 3, padding: "10px" }} variant="contained" endIcon={<SendIcon />}>
            log in
          </Button>
          </div>
        </>
  )
};

export default LoginForm;