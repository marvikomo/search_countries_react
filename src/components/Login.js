import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import axios from "axios";
import {base_url} from "../config/base_url"

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios({
      method: "POST",
      url: `${base_url}/api/login`,
      headers: { "content-type": "application/json" },
      data: {
        email,
        password,
      },
    })
      .then(async (res) => {
        if (res.data.error === false) {
          await localStorage.setItem("token", res.data.data.token);
          setLoading(false);
          window.location.href = "/home";
        }
      })
      .catch((e) => {
        setLoading(false);
      });
  };
  return (
    <div className="loginContainer">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {loading ? (
          <input type="submit" value="loading..." className="submit" disabled />
        ) : (
          <input type="submit" value="Submit" className="submit" />
        )}

        <a href="/register">Dont have an account?</a>
      </form>
    </div>
  );
};

export default Login;
