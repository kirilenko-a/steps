import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isClose, setIsClose] = useState(true);

  const handleNextClick = () => {
    if (step < 3) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrevClick = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const handleClose = () => {
    setIsClose((curr) => !curr);
  };

  return (
    <div className="App">
      <button className="close" onClick={handleClose}>
        &times;
      </button>

      {isClose && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>

            <div className={step >= 2 ? "active" : ""}>2</div>

            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              onClick={handlePrevClick}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Previous
            </button>

            <button
              onClick={handleNextClick}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
