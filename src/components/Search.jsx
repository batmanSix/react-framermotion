import React from "react";
import "./module/search.css";
function Search(props) {
  const close = () => {
    props.onParent();
  };
  return (
    <div className="search flex flex-col items-center" id="search">
      <button className="button mb-10" onClick={close}>
        <span className="X"></span>
        <span className="Y"></span>
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
          className="input"
          placeholder="搜索你的内容"
          required=""
          type="text"
        />
        <button className="reset" type="reset">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
  );
}

export default Search;
