import { useState } from "react";
import axios from "axios";
import Home from "./Home";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);

  // LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/api/users/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Login Successful");

      setLoggedIn(true);

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  // REGISTER
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:8000/api/users/register",
        {
          name,
          email,
          password,
        }
      );

      alert("Registration Successful");

      setIsLogin(true);

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );
    }
  };

  // AFTER LOGIN SHOW HOME PAGE
  if (loggedIn) {
    return <Home />;
  }

  return (
    <div style={{ padding: "30px" }}>

      <h1>Book Exchange System</h1>

      <h2>
        {isLogin ? "Login" : "Register"}
      </h2>

      <form
        onSubmit={
          isLogin
            ? handleLogin
            : handleRegister
        }
      >

        {/* REGISTER ONLY */}
        {!isLogin && (
          <>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

            <br /><br />
          </>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <br /><br />

        <button type="submit">
          {isLogin ? "Login" : "Register"}
        </button>

      </form>

      <br />

      <button
        onClick={() =>
          setIsLogin(!isLogin)
        }
      >
        {isLogin
          ? "Create New Account"
          : "Already have an account?"}
      </button>

    </div>
  );
}

export default Auth;