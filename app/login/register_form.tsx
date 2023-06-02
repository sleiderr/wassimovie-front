import { Button, FormControl, TextField } from "@mui/material"
import { Dispatch, FC, SetStateAction } from "react"
import SendIcon from '@mui/icons-material/Send'

interface LoginProps {
  children?: React.ReactNode,
  login: boolean,
  setLogin: Dispatch<SetStateAction<boolean>>
}

const RegisterForm: FC<LoginProps> = function({children, login, setLogin}) {
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
            label="Mail" 
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
            label="Mot de passe" 
          />
          <TextField
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
          />
        </FormControl>
          <div className="flex flex-row inline-block">
          <Button onClick={() => setLogin(!login) } color="primary" sx={{ml: "75%", mr: 2, mt: 1, mb: 3 }} variant="contained" endIcon={<SendIcon />}>
            Suivant
          </Button>
          </div>
        </>
  )
};

export default RegisterForm;