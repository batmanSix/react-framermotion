import React from "react";
import "./module/load.css";
function Loading() {
  return (
    <div className="loader">
      <span className="loader-text">loading</span>
      <span className="load"></span>
    </div>
  );
}

export default Loading;
