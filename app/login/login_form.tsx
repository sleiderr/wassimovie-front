import { Button, FormControl, TextField } from "@mui/material"
import { Dispatch, FC, SetStateAction } from "react"
import SendIcon from '@mui/icons-material/Send'

interface LoginProps {
  children?: React.ReactNode,
  login: boolean,
  setLogin: Dispatch<SetStateAction<boolean>>
}

const LoginForm: FC<LoginProps> = function({children, login, setLogin}) {
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
            label="Mail" 
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
            label="Mot de passe"
            type="password"
            autoComplete="current-password"
          />
        </FormControl>
          <div className="flex flex-row inline-block">
          <Button onClick={() => setLogin(!login) } color="success" sx={{ml: 9, mr: 2, mt: 5, mb: 3 }} variant="contained" endIcon={<SendIcon />}>
            Nous rejoindre  
          </Button>
          <Button onClick={() => {}} color="primary" sx={{ml: 9, mr: 2, mt: 5, mb: 3 }} variant="contained" endIcon={<SendIcon />}>
            Se connecter
          </Button>
          </div>
        </>
  )
};

export default LoginForm;