import React from "react";

function Login() {
  return (
    <div>
      <div class="login" id="login">
        <form action="" class="login__form">
          <h2 class="login__title">Log In</h2>

          <div class="login__group">
            <div>
              <label for="email" class="login__label">
                Email
              </label>
              <input
                type="email"
                placeholder="Write your email"
                id="email"
                class="login__input"
              />
            </div>

            <div>
              <label for="password" class="login__label">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                id="password"
                class="login__input"
              />
            </div>
          </div>

          <div>
            <p class="login__signup">
              You do not have an account? <a href="#">Sign up</a>
            </p>

            <a href="#" class="login__forgot">
              You forgot your password
            </a>

            <button type="submit" class="login__button">
              Log In
            </button>
          </div>
        </form>

        <i class="ri-close-line login__close" id="login-close"></i>
      </div>
    </div>
  );
}

export default Login;
