import React from "react";
import {
  TextField,
  Stack,
  Typography,
  Grid,
  Card,
  Avatar,
  Button,
} from "@mui/material";

function CreateAccountForm({ updateState, submitForm, currentState }) {
  return (

      <form onSubmit={submitForm}>
        <Stack  spacing={1} justifyContent='center' alignItems='center'>

            <Avatar
              src="https://media.istockphoto.com/id/1294455829/vector/vector-illustration-nice-colorful-threedimensional-symbol-with-three-parts.jpg?s=2048x2048&w=is&k=20&c=or-Se99cEkJcvxSgV57JPuT12nPk0JX8ZNq80Yf40DM="

            />


            <Typography

            variant="h6"
            >
            CREATE ACCOUNT
            </Typography>


            <TextField label="First name" variant="standard" value={currentState.firstName} onChange={updateState}  name='firstName'/>


            <TextField label="Last name" variant="standard" value={currentState.lastName} onChange={updateState}  name='lastName'/>


            <TextField label="Email" variant="standard" value={currentState.email} onChange={updateState}  name='email'/>


            <TextField label="phone number" variant="standard" value={currentState.phoneNumber} onChange={updateState}  name='phoneNumber'/>


            <TextField label="password" variant="standard" value={currentState.password} onChange={updateState}  name='password'/>


            <TextField label="confirm password" variant="standard" value={currentState.confirmPassword} onChange={updateState}  name='confirmPassword'/>

            <Button variant='contained' type='submit'>Sign Up</Button>


            <Typography

              variant="subtitle2"
            >
              Already Have An Account?
            </Typography>


            <Button>Log In</Button>
          </Stack>
      </form>

  );
}

export default CreateAccountForm;
