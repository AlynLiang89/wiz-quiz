import React, { useState } from "react";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [formError, setFormError] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    // Perform form validation here
    if (!username || !email || !password || !confirmPwd) {
      setFormError("All fields are required");
      return;
    }

    if (password !== confirmPwd) {
      setFormError("Passwords do not match");
      return;
    }

    // If all validations pass, submit the form
    const data = { username, email, password, confirmPwd };
    console.log(data);
  };

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Sign Up</h2>
          <span>Register and enjoy the service</span>

          <form id="form" className="flex flex-col" onSubmit={onSubmit}>
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Username"
            />
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
            />
            <input
              type="password"
              value={confirmPwd}
              onChange={(event) => setConfirmPwd(event.target.value)}
              placeholder="Confirm Password"
            />
            {formError && <span className="error">{formError}</span>}
            <button className="btn">Sign Up</button>
          </form>
        </div>
      </div>
    </section>
  );
}
