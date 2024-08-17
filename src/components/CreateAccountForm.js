import React from "react";

function CreateAccountForm({ updateState, submitForm, currentState }) {
  return (
    <div>
      <form onSubmit={submitForm}>
        <h1>Create Account</h1>

        <label for="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={currentState.email}
          onChange={updateState}
        />
        <br />
        <br />

        <label for="phoneNumber">Phone Number: </label>
        <input
          type="number"
          name="phoneNumber"
          id="phoneNumber"
          value={currentState.phoneNumber}
          onChange={updateState}
        />
        <br />
        <br />

        <label for="firstName">First Name: </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={currentState.firstName}
          onChange={updateState}
        />
        <br />
        <br />

        <label for="lastName">Last Name: </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={currentState.lastName}
          onChange={updateState}
        />
        <br />
        <br />

        <label for="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={currentState.password}
          onChange={updateState}
        />
        <br />
        <br />

        <label for="confirmPassword">Confirm Password: </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={currentState.confirmPassword}
          onChange={updateState}
        />
        <br />
        <br />

        <input type="submit" value="submit" />
        <br />
        <br />

        <span>
          Already Have An Account?<button>log in</button>
        </span>
      </form>
    </div>
  );
}

export default CreateAccountForm;
