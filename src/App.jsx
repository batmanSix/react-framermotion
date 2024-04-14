import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Nav from "@/components/Nav";
import "./app.scss";
import "./index.css";
import "./theme/search.css";
import img from "@/assets/home1.png";
import account from "@/assets/account.png";
import search from "@/assets/search.png";
import travelor from "@/assets/travelor.png";
import { useWindowSize } from "@/hooks/useWindowSize.js";
import { useEffect } from "react";
import Tag from "@/components/Tag";
import Cards from "@/components/Card";
import Loading from "@/components/Loading";
import Login from "@/components/Login";
import Sidebar from "./components/sidebar/Sidebar";
import Experience from "@/components/Experience";
function App() {
  const [count, setCount] = useState(0);

  const { width, height } = useWindowSize();

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  console.log(width, height);

  const sea = () => {
    const search = document.getElementById("search");
    search.classList.add("show-search");
  };

  const close = () => {
    const search = document.getElementById("search");
    search.classList.remove("show-search");

    const login = document.getElementById("login");

    login.classList.remove("show-login");
  };

  const login = () => {
    const login = document.getElementById("login");

    login.classList.add("show-login");
  };

  return (
    <>
      {!isLoading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <Loading></Loading>
        </div>
      ) : (
        <div className="">
          <div className="max-sm:hidden  h-screen  cursor-pointer shadow-dark-900 fixed left-0 z-20 box-border pt-20  w-[134px] flex flex-col items-center bg-[#fff] bg-opacity-15">
            <img
              className="w-10 h-10"
              onClick={(e) => login()}
              src={account}
            ></img>
            <img
              className="w-12 h-12 mt-10 ml-2"
              onClick={(e) => sea()}
              src={search}
            ></img>
            <img className="mt-20 w-auto h-auto" src={travelor}></img>
          </div>
          <div className="ml-5">
            <Sidebar></Sidebar>
          </div>
          <img
            className="z-10"
            style={{ height: "100%", width: width }}
            src={img}
          ></img>
          <div className="w-full relative z-10 flex justify-center"></div>

          <div className="search flex flex-col items-center" id="search">
            <button class="button mb-10" onClick={close}>
              <span class="X"></span>
              <span class="Y"></span>
            </button>
            <div className="form w-60">
              <button>
                <svg
                  width="17"
                  height="16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-labelledby="search"
                >
                  <path
                    d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                    stroke="currentColor"
                    stroke-width="1.333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <input
                class="input"
                placeholder="搜索你的内容"
                required=""
                type="text"
              />
              <button class="reset" type="reset">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="login flex flex-col items-center" id="login">
            <div action="" className="login__form">
              <button
                class="button mb-10 absolute right-0 mt-5 mr-5"
                onClick={close}
              >
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

          <div className="mt-20 text-center">
            <div className="max-sm:text-xl text-5xl">Ui/Ux</div>
            <div className="flex  flex-wrap w-full justify-center  mt-20 ">
              <div className="sm:mr-20 sm:mb-20 max-sm:mb-5">
                <Cards></Cards>
              </div>
              <div className="">
                <Cards></Cards>
              </div>
            </div>
          </div>
          <Experience></Experience>
        </div>
      )}
    </>
  );
}

export default App;
