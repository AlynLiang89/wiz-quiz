import React, { useState } from "react";
import { useToken } from "./auth";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function UpdateProfile() {
  const { updateProfile } = useToken();
  const [username, setUserName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleUserNameChange = (e) => {
    const value = e.target.value;
    setUserName(value);
  };

  const handleCurrentPasswordChange = (e) => {
    const value = e.target.value;
    setCurrentPassword(value);
  };

  const handleNewPasswordChange = (e) => {
    const value = e.target.value;
    setNewPassword(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(email, currentPassword, newPassword, username);
      navigate("/");
    } catch (error) {
      console.log(error);
      setErrorMessage(String(error));
    }
  };

  return (
    <div className="Auth-form-container">
      <h1 className="Quizard-text">Update your Quizardry!</h1>
      <form onSubmit={handleSubmit} className="Auth-form">
        <div className="Auth-form-content">
          <h2 className="Auth-form-title">Update your account</h2>
          <div className="Auth-form-field">
            <label htmlFor="username">Update Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUserNameChange}
            />
          </div>
          <div className="Auth-form-field">
            <label htmlFor="current-password">Current Password:</label>
            <input
              type="password"
              id="current-password"
              value={currentPassword}
              onChange={handleCurrentPasswordChange}
            />
          </div>
          <div className="Auth-form-field">
            <label htmlFor="new-password">New Password:</label>
            <input
              type="password"
              id="new-password"
              value={newPassword}
              onChange={handleNewPasswordChange}
            />
          </div>
          <div className="Auth-form-field">
            <label htmlFor="email">Update Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <button type="submit" className="Auth-form-submit">
            Update your profile!
          </button>
        </div>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default UpdateProfile;
