import React, { useState } from "react";

function SignupForm() {
  const { token, signup } = useToken();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleUserNameChange = (e) => {
    const value = e.target.value;
    setUserName(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signup(email, password, username);
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit} className="Auth-form">
      <div className="Auth-form-content">
        <h2 className="Auth-form-title">Sign up for an account</h2>
        <div className="Auth-form-field">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUserNameChange}
          />
        </div>
        <div className="Auth-form-field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="Auth-form-field">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button type="submit" className="Auth-form-submit">
          Sign Up!
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
