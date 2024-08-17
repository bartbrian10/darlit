import React, { useState } from "react";
import CreateAccountForm from "../components/CreateAccountForm";

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
    <div>
      <CreateAccountForm
        submitForm={handleSubmit}
        updateState={handleChange}
        currentState={formState}
      />
    </div>
  );
}

export default CreateAccountPage;
