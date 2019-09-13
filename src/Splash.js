import React, { useEffect, useState } from "react";
import "./Splash.css";

function Splash() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 2000);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "rgb(12,11,11)",
        color: "#fff",
        transition: "1s ease-in",
        opacity: done ? 0 : 1,
        zIndex: done ? -100 : 1000
      }}
      className="Splash"
    >
      <h1
        style={{
          textAlign: "center",
          maxWidth: "80%",
          fontFamily: "times new roman",
          marginBottom: "1rem"
        }}
      >
        Weston Gibson
      </h1>
      <div className="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Splash;
