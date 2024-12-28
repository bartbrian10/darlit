import React from "react";
import {
  TextField,
  Stack,
  Typography,
  Button,
  AccountCircleIcon,
  VisibilityIcon
} from "@mui/material";
import styles from './LoginForm.module.css';

function LoginForm({currentState, setupState, submitForm}) {
return (

<form onSubmit={submitForm}>
<Stack  className={styles.layout} spacing={2} alignItems='center' justifyContent='center'>
<Typography>
<h1 >Sign In</h1>
</Typography>
<TextField label='Email' variant='standard' onChange={setupState} name='email' value={currentState.email}/>
<TextField label='password' variant='standard' onChange={setupState} name='password' value={currentState.password}/>
<Button variant='outlined' type='submit'>log in</Button>
<Typography>Do not have an Account? <Button>Sign up</Button></Typography>
</Stack>
</form>
);

}

export default LoginForm;