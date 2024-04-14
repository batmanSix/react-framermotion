import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Nav from "@/components/Nav";
import "./app.scss";
import "./index.css";
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
import Search from "@/components/Search";
function App() {
  const [count, setCount] = useState(0);

  const { width, height } = useWindowSize();

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1500);
  }, []);

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

          <Login onParent={close}></Login>
          <Search onParent={close}></Search>

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
