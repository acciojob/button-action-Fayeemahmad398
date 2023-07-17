import React, { useState } from "react";
import "./../styles/App.css";

const App = (props) => {
  const [content, setContent] = useState("");
  return (
    <div className="App" id="main">
      {content && (
        <p id="para" className="hide show">
          {content}
        </p>
      )}
      <button
        id="click"
        onClick={() => {
          setContent(
            "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
          );
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default App;
