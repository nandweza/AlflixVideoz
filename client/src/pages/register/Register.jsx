import { useRef, useState } from "react";
import "./register.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
          <img className="logo" 
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMsAAABzCAMAAAABvAYZAAAAaVBMVEUAAADjCRTnCRQ2AgXVCBLuCRXJCBKlBg64BxCPBgy+BxFaAwhyBArABxAaAQJVBAdMAwdlBAkhAQMQAAB+BQsuAgTQCBLcCBRQAwdBAgYKAAGfBg55BQtqBAklAQOyBxCFBQspAQOXBg2QcTwlAAAEDUlEQVR4nO2Z25prMBSAkxBF6UFb0apS7/+QW1biEMyMjoyL/a3/YiYixF8rR4QgCIIgCIIgCIIgCIIgCIIgCIIgCIIgyAdcHMllePCG9M0xkUWcCQ9CDqOsW1MwGd61pTtLLndIGyecw2qXLHVdVxTq4OTJgxzSoWtyb/LEKM8NE0IKM1eUjV8l8+jRrApqKuHhVUmdf5InXO++2uVIWYOn7yqaNN9B2mMmsio2xmtcIm7m+Y1LIPP43qwKavIh6cskv6r8HC4rV6s0LoD6UU5uk2StCx2iXKiJdjHzwEWWnLrIs5B8yvMshvRNQOGTLRcWbOuSuHArKFBxuNN6ldYlTuZdzBhT0aSfWZJ2Ll05vsSF5PIiDi0TtHhhzYXy+7xL3CF7HU8mQrhAQOaudWFeV7Be4uLARbRJRRBu6c2iSz7nAr/7BCjkd4fgMnruH11IDCUicglZH+N2XJg77+LMXAKFwm44UC7nD12uoBCSkwrll0UXyqJtXW4uVHsqeV+lNZfdti6khBdTC6g8s+viOtu6OKr7gz8WxsmhC/SKW7qQtButIL5tushReOry/juXqnVhqR2V3oXSZDq+uNUVMEayORcWl76kPC52OYk2IirrLk0f/9W4z+OfXLpxP1rsolq/bKlzL//3Lm1n/8V8jP3s0pYslrtk6kKWW1JRLgxGYZpt66JmYlRYmCEPXWrZqfDgvt7lgxgjOwgHGzPkgQsPclmPcH7vIjSfvBd1czHX769xKeBfNOnHrhFg9LizfXJBLsBjuctTt5fKsgvELgtT02V+Km5pfHnEuh8LR3scK11qFbvq3huN++e2QhvLY8Ml41u7lMys0J7LIWXburwG3Z9lF5Jv7FIP5slPyy77bWMMun8q1BDj22n9nUs3B7fXj43a9Mwa2dPbVOv3LE2XgM+4nI/n4lnVuzLuq1vqQhmnwk3DclffJy6p3kmC0OZ2pmS9izN1aYKgeaAGvT/2oQvt5tnF2OXY7intISGIDXoX0o5dX+9bfu6iUGeHLnG7k3RQe0pWVpYDFx1kW7hksA6DGTIUtbPiH7johd6syzDGhAy5gYucV9KRi7H3P3XJe4E37bQsuugg611UrENzEW7vcq2ez2j/aA/fxyzLjuZmXVYFQZ3vmnWz57pCtxfWfbM4qK19dUsf0pVllyuXL0B/f4mFSOMyD65Fdr+9X8nju7t8xeNySJLXW33zyss4pfAu1GvTC5fMWusfujw4p64Xqk884y90loCf5FrvfK/9GJdANLP9d1ctA76Lcb01fTw5t2T9d8MlXJJb+2MFMpq5hdafyTiK7Iy7v+SQRVVe+uuXl5fXrxqCfZK/iWkEQRAEQRAEQRAEQRAEQRAEQRAEQRDkv+UfY+M/1uDAbDwAAAAASUVORK5CYII=" 
          alt="" 
          />
          <button className="loginButton" onClick={handleFinish}>Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, Series, and more...</h1>
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
