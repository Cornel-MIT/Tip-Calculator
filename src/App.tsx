import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [bill, setBill] = useState<number | undefined>(undefined);
  const [numberOfPeople, setNumberOfPeople] = useState<number | undefined>(undefined);
  const [customTip, setCustomTip] = useState<number | undefined>(undefined);
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

  const handleTipCalculation = (tipPercentage: number) => {
    if (!bill || !numberOfPeople || numberOfPeople === 0) {
      setError(true);
      return;
    }

    setError(false);
    const tip = (bill * tipPercentage) / 100 / numberOfPeople;
    const totalAmount = (bill + bill * (tipPercentage / 100)) / numberOfPeople;
    setTipAmount(tip);
    setTotal(totalAmount);
  };

  const handleCustomTip = () => {
    if (!customTip) return;
    handleTipCalculation(customTip);
  };

  const reset = () => {
    setBill(undefined);
    setNumberOfPeople(undefined);
    setCustomTip(undefined);
    setTipAmount(0);
    setTotal(0);
    setError(false);
  };

  return (
    <div className="container">
      <img src="/images/logo.svg" alt="logo" className="logo-img" />
      <main className="tip-calculator">
        <form className="tip-form" id="form" onSubmit={(e) => e.preventDefault()}>
          <div className="tip-input">
            <label htmlFor="bill" className="label-title bill">Bill</label>
            <input
              type="number"
              id="bill"
              className="bill-input"
              placeholder="0"
              value={bill ?? ''}
              onChange={(e) => setBill(parseFloat(e.target.value))}
            />
            <div className="tip-btns">
              <label htmlFor="tip" className="label-title select">Select Tip %</label>
              <div className="col">
                <button type="button" className="tip-buttons five" onClick={() => handleTipCalculation(5)}>5%</button>
                <button type="button" className="tip-buttons ten" onClick={() => handleTipCalculation(10)}>10%</button>
                <button type="button" className="tip-buttons fifteen" onClick={() => handleTipCalculation(15)}>15%</button>
              </div>
              <div className="col">
                <button type="button" className="tip-buttons twenty-five" onClick={() => handleTipCalculation(25)}>25%</button>
                <button type="button" className="tip-buttons fifty" onClick={() => handleTipCalculation(50)}>50%</button>
                <input
                  type="number"
                  className="custom-input"
                  placeholder="Custom"
                  value={customTip ?? ''}
                  onChange={(e) => setCustomTip(parseFloat(e.target.value))}
                  onBlur={handleCustomTip}
                />
              </div>
            </div>
            <label htmlFor="quantity" className="label-title num">Number of People</label>
            {error && <small className="error-message">Can't be zero</small>}
            <input
              type="number"
              className="numOfPeople-input"
              id="quantity"
              placeholder="0"
              value={numberOfPeople ?? ''}
              onChange={(e) => setNumberOfPeople(parseFloat(e.target.value))}
            />
          </div>
          <div className="perPerson-input">
            <div className="col amount-col">
              <label className="amount-label" htmlFor="amount">Tip Amount</label><br />
              <label className="sub-label" htmlFor="total">/ person</label>
            </div>
            <div className="col input-col">
              <p id="amount" className="amount-input">${tipAmount.toFixed(2)}</p>
            </div>
            <div className="col total-col">
              <label className="total-label" htmlFor="total">Total</label><br />
              <label className="sub-label" htmlFor="total">/ person</label>
            </div>
            <div className="col input-col">
              <p id="total" className="total-input">${total.toFixed(2)}</p>
            </div>
            <button type="button" className="reset-button" onClick={reset}>Reset</button>
          </div>
        </form>
      </main>
      <footer>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://github.com/taepal467" target="_blank">@taepal467</a>.
        </div>
      </footer>
    </div>
  );
};

export default App;
