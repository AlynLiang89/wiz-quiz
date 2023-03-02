import { NavLink, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthContext, useToken } from "./auth";

function Nav() {
  // authorization

  const { token } = useAuthContext();
  const { logout } = useToken();

  // this line of code fetches user data

  const [user, setUser] = useState([]);
  const fetchUserData = async () => {
    const URL = "http://localhost:8080/api/accounts/";

    const response = await fetch(URL, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.ok) {
      const data = await response.json();
      setUser(data);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, [token]);

  //// logout feature

  const handleLogout = async (e) => {
    await logout();
  };
}
