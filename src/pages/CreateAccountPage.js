import React, { useState } from "react";
import CreateAccountForm from "../components/CreateAccountForm";
import { Stack } from "@mui/material";

function CreateAccountPage() {
  const [formState, setFormState] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    /*const phoneNumber = event.target.value;
  const isValid = validPhoneNumber.test(phoneNumber);
  if(isValid) {
  setPhone(phoneNumber);
  }*/
  };

  function handleSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(formState, "", 2));
  }

  return (
    <Stack sx={{ height: "100vh" }} alignItems="center" justifyContent="center">
      <CreateAccountForm
        submitForm={handleSubmit}
        updateState={handleChange}
        currentState={formState}
      />
    </Stack>
  );
}

export default CreateAccountPage;
