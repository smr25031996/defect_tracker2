import React from "react";
import "./styles/login.css"; // Import your CSS file for styling

function Login() {
  return (
    <React.Fragment>
      <header>
        <h1 className="heading">Defect Tracker</h1>
      </header>
      <div className="login-container">
        <h3>Log In</h3>
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" id="username" name="username" required />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id="password" name="password" required />
        <br />
        <br />
        <button type="submit">Submit</button>
      </div>
    </React.Fragment>
  );
}

export default Login;
