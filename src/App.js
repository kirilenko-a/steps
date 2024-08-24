import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);

  const handleNextClick = () => {
    setStep((prev) => prev + 1);
  };

  const handleprevClick = () => {
    setStep((prev) => prev - 1);
  };

  let startMessage = "";

  if (step < 1) {
    startMessage = "Hello";
  } else if (step < 4) {
    startMessage = `Step ${step}: ${messages[step - 1]}`;
  } else {
    startMessage = "Thank you";
  }

  return (
    <div className="App">
      <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>

          <div className={step >= 2 ? "active" : ""}>2</div>

          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>

        <p className="message">{startMessage}</p>

        <div className="buttons">
          <button
            onClick={handleprevClick}
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
    </div>
  );
}

export default App;
