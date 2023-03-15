import React, { useState, useEffect } from "react";
import { useToken } from "./auth";
import { useNavigate } from "react-router-dom";
import "./update.css";

function UpdateProfile() {
  const { token, logout} = useToken();
  const [username, setUserName] = useState("");
  const [password, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const [account_id, setAccount] = useState("");
  const navigate = useNavigate();

  const handleUserNameChange = (e) => {
    const value = e.target.value;
    setUserName(value);
  };

  const handleNewPasswordChange = (e) => {
    const value = e.target.value;
    setNewPassword(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  useEffect(() => {
    const accountsUrl = `${process.env.REACT_APP_WIZQUIZ_API_HOST}/token`;
    const fetchConfig = {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    if (token) {
      fetch(accountsUrl, fetchConfig)
        .then((response) => response.json())
        .then((data) => {
          const accountData = data.account.id;
          setAccount(accountData);
        });
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_WIZQUIZ_API_HOST}/accounts/${account_id}`,
        {
          method: "PUT",
          body: JSON.stringify({ username, password, email }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        navigate("/");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    console.log(account_id);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_WIZQUIZ_API_HOST}/accounts/${account_id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete account");
      }
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickhome4 = () => {
    navigate("/");
  };

  return (
    <div className="Auth-form-container">
      <button onClick={handleClickhome4} className="update-home-button">
        <img src="https://i.imgur.com/NcspCcg.png" alt="wizard" />
      </button>
      <h1 className="Quizard-text">Update your Quizardry!</h1>
      <form onSubmit={handleSubmit} className="Auth-form">
        <div className="Auth-form-content">
          <h2 className="Auth-form-title">Update your account</h2>
          <div className="Auth-form-field">
            <label htmlFor="email">Update Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="Auth-form-field">
            <label htmlFor="username">New Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUserNameChange}
            />
          </div>
          <div className="Auth-form-field">
            <label htmlFor="new-password">New Password:</label>
            <input
              type="password"
              id="new-password"
              value={password}
              onChange={handleNewPasswordChange}
            />
          </div>
          <button type="submit" className="Auth-form-submit">
            Update your profile!
          </button>
        </div>
      </form>
      <form onSubmit={handleDelete} className="delete-form">
        <div className="Auth-form-content">
          <h2 className="Auth-form-title">Delete your account</h2>
          <p>
            Warning: this will permanently delete your account and all
            associated data.
          </p>
          <button className="delete-button" onClick={logout}>
            Delete Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProfile;
