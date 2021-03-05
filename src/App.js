import React, { useState, useEffect, useRef } from "react";
import "./style.css";

export default function App() {
  const [timer, setTimer] = useState(false);
  const [count, setcount] = useState(0);
  const [valres, setreset] = useState(false);
  const the_timer = useRef();

  return (
    <div>
      <button
        onClick={() => {
          if (timer) {
            setTimer(false);
            setreset(true);
            clearInterval(the_timer.current);
          }
        }}
      >
        Stop Timer
      </button>

      <p>{count}</p>
      <button
        onClick={() => {
          if (!valres) {
            the_timer.current = setInterval(() => {
              setcount(count => count + 1);
              setTimer(true);
            }, 1000);
          } else {
            setcount(0);
            setreset(false);
          }
        }}
      >
        {valres ? "Reset Timer" : "Start Timer"}
      </button>
    </div>
  );
}
