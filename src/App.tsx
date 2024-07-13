import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import Display from "./components/Display";
import Form from "./components/Form";

function App() {
  const [bill, setBill] = useState<string>("");
  const [tip, setTip] = useState<string>("");
  const [people, setPeople] = useState<string>("");
  const [calculatedTip, setCalculatedTip] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const calculateTotals = () => {
      const billAmount = parseFloat(bill) || 0;
      const tipPercentage = parseFloat(tip) || 0;
      const numberOfPeople = parseInt(people) || 1;

      if (billAmount > 0 && numberOfPeople > 0 && tipPercentage > 0) {
        const tipAmount = billAmount * (tipPercentage / 100);
        setCalculatedTip(tipAmount);
        setTotal(billAmount + tipAmount);
      } else {
        setCalculatedTip(0);
        setTotal(0);
      }
    };

    calculateTotals();
  }, [bill, people, tip]);

  const handleResetBtn = () => {
    setBill("");
    setTip("");
    setPeople("");
    setCalculatedTip(0);
    setTotal(0);
  };

  const handleRadioChange = () => {
    // No operation, but retained for future use if needed.
  };

  return (
    <div className="wrapper">
      <img src={logo} alt="Splitter Logo" />
      <div className="container">
        <Form
          bill={bill}
          setBill={setBill}
          setTip={setTip}
          people={people}
          setPeople={setPeople}
        />
        <Display
          total={total}
          people={parseInt(people) || 1}
          calculatedTip={calculatedTip}
          handleResetBtn={handleResetBtn}
          handleRadioChange={handleRadioChange}
        />
      </div>
    </div>
  );
}

export default App;
