import React, { useState } from "react";
import Style from "./index.module.css";

export default function Contaner() {
  const [counterBoard, setCounterBoard] = useState("");

  const clickHandler = (e) => {
    setCounterBoard(counterBoard.concat(e.target.name));
  };
  const results = () => {
    setCounterBoard(eval(counterBoard).toString());
  };
  const clear = () => {
    setCounterBoard("");
  };

  return (
    <div className={Style.contaner}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "250px",
          border: "1px solid black",
          padding: "10px",
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        }}
      >
        <div className={Style.valueContainer}>{counterBoard}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div>
            <button onClick={clickHandler} name="1">
              1
            </button>
            <button onClick={clickHandler} name="2">
              2
            </button>
            <button onClick={clickHandler} name="3">
              3
            </button>
            <button onClick={clickHandler} name="+">
              +
            </button>
          </div>
          <div>
            <button onClick={clickHandler} name="4">
              4
            </button>
            <button onClick={clickHandler} name="5">
              5
            </button>
            <button onClick={clickHandler} name="6">
              6
            </button>
            <button onClick={clickHandler} name="-">
              -
            </button>
          </div>
          <div>
            <button onClick={clickHandler} name="7">
              7
            </button>
            <button onClick={clickHandler} name="8">
              8
            </button>
            <button onClick={clickHandler} name="9">
              9
            </button>
            <button onClick={clickHandler} name="*">
              *
            </button>
          </div>
          <div>
            <button onClick={clickHandler} name="/">
              /
            </button>
            <button onClick={clickHandler} name="0">
              0
            </button>
            <button onClick={clickHandler} name=".">
              .
            </button>
            <button onClick={results} name="=">
              =
            </button>
          </div>
          <div>
            <button className={Style.clear} onClick={clear} name="clear">
              clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
