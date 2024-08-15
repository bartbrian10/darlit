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
    <div>
      <form onSubmit={submitForm}>
        <Stack direction="column" spacing={1}>
          <Stack direction="row" justifyContent="center">
            <Avatar
              src="https://media.istockphoto.com/id/1294455829/vector/vector-illustration-nice-colorful-threedimensional-symbol-with-three-parts.jpg?s=2048x2048&w=is&k=20&c=or-Se99cEkJcvxSgV57JPuT12nPk0JX8ZNq80Yf40DM="
              sx={{ width: 100, height: 100, background: "green" }}
            />
          </Stack>

          <Typography
            sx={{ display: "flex", justifyContent: "center" }}
            variant="h6"
          >
            CREATE ACCOUNT
          </Typography>

          <TextField label="Email" variant="standard" />
          <Stack spacing={3} direction="row">
            <TextField label="First name" variant="standard" />
            <TextField label="Last name" variant="standard" />
          </Stack>

          <TextField label="phone number" variant="standard" />

          <TextField label="password" variant="standard" />
          <TextField label="confirm password" variant="standard" />

          <TextField label="Email" variant="standard" />

          <Stack justifyContent="space-between" spacing={2} direction="row">
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              variant="subtitle2"
            >
              Already Have An Account?
            </Typography>
            <Button variant="outlined">LOGIN</Button>
          </Stack>
        </Stack>
      </form>

      {/* <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ background: "yellow" }}>
            <Typography>yesss</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ background: "yellow" }}>
            <Typography>yesss</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ background: "yellow" }}>
            <Typography>yesss</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ background: "yellow" }}>
            <Typography>yesss</Typography>
          </Card>
        </Grid>
      </Grid> */}
    </div>
  );
}

export default CreateAccountForm;
