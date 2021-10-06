import React, { useState } from "react";
import axios from "axios";
import {base_url} from "../../config/base_url"

const Register = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios({
      method: "POST",
      url: `${base_url}/api/register`,
      headers: { "content-type": "application/json" },
      data: {
        name,
        email,
        password,
      },
    })
      .then(async (res) => {
        console.log(res);
        if (res.data.error === false) {
          window.location.href = "/";
        } else {
        }
      })
      .catch((e) => {
        setLoading(false);
      });
  };
  return (
    <div className="loginContainer">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
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
        <input type="submit" value="Submit" className="submit" />
        <a href="/">have an account?</a>
      </form>
    </div>
  );
};

export default Register;
