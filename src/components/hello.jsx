import React from "react";
import { useState } from "react";
import "./css/hello.css"

const keys = [["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
  ["Space", "Backspace"]
];

const Keybord = () => {
  
  const [text, setText] = useState("");

  const handleClick = (key) => {
    if (key === "Space"){
        setText(text + " ");
    }else if (key === "Backspace"){
        setText(text.slice(0, -1));
    }else{
        setText(text + key);
    }
  }

  return(
    <div>
      <div className="keyboard-container">
      <div className="display">{text || "Type something..."}</div>
        <div className="keyboard">
          {keys.map((row, i) => (
            <div key={i} className="row">
              {row.map((key) => (
                <button key={key} onClick={() => handleClick(key)}>
                  {key}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Keybord;