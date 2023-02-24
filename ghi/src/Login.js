import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();


    if (!email || !password) {
      setFormError("Email and Password are required");
      return;
    }


    const data = { email, password };
    console.log(data);
  };

  return (
    <section>
      <div className="login">
        <div className="col-1">
          <h2>Login</h2>
          <span>Login in to your account</span>

          <form id="form" className="flex flex-col" onSubmit={onSubmit}>
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
            {formError && <span className="error">{formError}</span>}
            <button className="btn">Login</button>
          </form>
        </div>
      </div>
    </section>
  );
}
