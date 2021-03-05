import React, { useState } from "react"
import './App.css';
import img1 from "./images/img1.png"
import img2 from "./images/img2.png"
import text from "./images/text.png"

function App() {

  const [offset, setOffset] = useState()

  const handleScrool = () => setOffset(window.pageYOffset)

  window.addEventListener("scroll", handleScrool)

  return (
    <div className="App">
      <div className="zoom">
        <img src={img1} alt="" id="img1"
          style={{ width: (100 + offset * 0.3) + "%" }}
        />
        <img src={img2} alt="" id="img2"
          style={{ width: (100 + offset * 0.3) + "%" }}
        />
        <img src={text} alt="" id="text"
          style={{ top: ` -${10 + offset * 0.1 + "%"} ` }}
        />
      </div>

      <div className="content">
        <h2>Simple parallax effect with React</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default App;
