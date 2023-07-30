import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const prime = useMemo(() => findPrime(text), [text]);

  console.log("Rendering....");

  return (
    <div
      className={
        "m-2 p-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          className={
            "m-2 p-1 rounded " +
            (isDarkTheme && "bg-gray-50 text-black") +
            " bg-black text-white"
          }
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          type="number"
          className="border border-black text-black"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1 className="font-bold">nth Prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
