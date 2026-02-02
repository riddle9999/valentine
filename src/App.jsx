import { useState } from "react";
import "./App.css";

export default function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noPos, setNoPos] = useState({ top: "55%", left: "60%" });

  const moveNoButton = () => {
    const top = Math.random() * 70 + 10 + "%";
    const left = Math.random() * 70 + 10 + "%";
    setNoPos({ top, left });
  };

  return (
    <div className="app">
      {!yesClicked ? (
        <>
          <h1 className="question">Will you be my Valentine? NIKSSSS💘</h1>

          <div className="buttons">
            <div className="yes-wrapper">
              <button className="yes-btn" onClick={() => setYesClicked(true)}>
                YES 💖
              </button>
            </div>

            <button
              className="no-btn"
              style={{ top: noPos.top, left: noPos.left }}
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
            >
              NO 😜
            </button>
          </div>
        </>
      ) : (
        <div className="yes-screen">
          <div className="heart">YES</div>
          <p>You just made my heart yours 💕</p>
        </div>
      )}
    </div>
  );
}
