import logo from "../../logo.png";
import { useRef, useState } from "react";
import "./register.scss";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
 
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);

    try {
      await axios.post("auth/register", { email, username, password });
      navigate("/login");
    } catch (err) {console.log(err);}
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={logo} alt="" />
          <button className="loginButton" ><a href="/login">Sign In</a></button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, Series, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>Ready to watch? Enter your Email to create or restart your membership.</p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Email Address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>Get Started</button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="Username" ref={usernameRef} />
            <input type="password" placeholder="Password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>Start</button>
          </form>
        )}
      </div>
    </div>
  );
}
