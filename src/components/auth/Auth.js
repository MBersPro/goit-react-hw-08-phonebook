import React, { useState } from "react";
import { useLocation } from "react-router";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const location = useLocation();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    name === "email" && setEmail(value);
    name === "password" && setPassword(value);
    name === "name" && setName(value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
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
