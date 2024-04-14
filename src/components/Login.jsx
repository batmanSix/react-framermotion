import React from "react";
import "./module/login.css";
function Login(props) {
  const close = () => {
    props.onParent();
  };
  return (
    <div className="login flex flex-col items-center" id="login">
      <div action="" className="login__form">
        <button class="button mb-10 absolute right-0 mt-5 mr-5" onClick={close}>
          <span class="X"></span>
          <span class="Y"></span>
        </button>
        <h2 className="login__title">Log In</h2>

        <div className="login__group">
          <div>
            <label for="email" className="login__label">
              Email
            </label>
            <input
              type="email"
              placeholder="Write your email"
              id="email"
              className="login__input"
            />
          </div>

          <div>
            <label for="password" className="login__label">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              className="login__input"
            />
          </div>
        </div>

        <div>
          <p className="login__signup">
            You do not have an account? <a href="#">Sign up</a>
          </p>

          <a href="#" className="login__forgot">
            You forgot your password
          </a>

          <button type="submit" className="login__button">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
