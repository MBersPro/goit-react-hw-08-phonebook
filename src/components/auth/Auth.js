import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import authOperations from "../../redux/auth/authOperations";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    name === "email" && setEmail(value);
    name === "password" && setPassword(value);
    name === "name" && setName(value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    location.pathname === "/signup"
      ? dispatch(authOperations.register({ name, email, password }))
      : dispatch(authOperations.logIn({ email, password }));
  };

  return (
    <form onSubmit={onFormSubmit}>
      {location.pathname === "/signup" && (
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={onInputChange}
            name="name"
          />
        </label>
      )}
      <label>
        Email
        <input
          type="text"
          value={email}
          onChange={onInputChange}
          name="email"
        />
      </label>
      <label>
        Password
        <input
          type="text"
          value={password}
          onChange={onInputChange}
          name="password"
        />
      </label>

      <button type="submit">
        {location.pathname === "/signup" ? "Sign Up" : "Sign In"}
      </button>
    </form>
  );
};

export default Auth;
