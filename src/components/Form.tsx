import React from 'react';
import dollarIcon from '../images/icon-dollar.svg';
import personIcon from '../images/icon-person.svg';

interface FormProps {
  bill: string;
  setBill: (value: string) => void;
  setTip: (value: string) => void;
  people: string;
  setPeople: (value: string) => void;
}

const Form: React.FC<FormProps> = ({ bill, setBill, setTip, people, setPeople }) => {
  const handleSelectedTip = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTip(e.target.value);
  };

  return (
    <div className="form">
      <div className="label-group">
        <div className="label-wrapper">
          <label className="label" htmlFor="bill">
            Bill
          </label>
        </div>
        <div className="number-wrapper">
          <input
            type="number"
            className="number-input"
            id="bill"
            onInput={(e) => setBill(e.currentTarget.value)}
            value={bill}
          />
          <img src={dollarIcon} aria-hidden="true" className="icon" />
        </div>
      </div>

      <div className="tip-section">
        <p className="label">Select Tip %</p>
        <div className="tip-amount-wrapper">
          {[5, 10, 15, 25, 50].map((amount) => (
            <div className="tip-amount" key={amount}>
              <input
                type="radio"
                onInput={handleSelectedTip}
                id={`tip-${amount}`}
                className="tip-input"
                name="tip"
                value={amount}
              />
              <label className="tip-btn" htmlFor={`tip-${amount}`}>
                {amount}%
              </label>
            </div>
          ))}
          <div className="custom-wrapper">
            <input
              type="number"
              onInput={handleSelectedTip}
              id="custom-tip"
              name="tip"
              className="number-input tip-custom"
              placeholder="Custom"
            />
          </div>
        </div>
      </div>

      <div className="label-group">
        <div className="label-wrapper">
          <label className="label" htmlFor="people">
            Number of People
          </label>
          <p className="error">{parseInt(people) === 0 ? "Can't be zero" : ""}</p>
        </div>
        <div className="number-wrapper">
          <input
            type="number"
            className={`number-input ${parseInt(people) === 0 ? 'number-error' : ''}`}
            id="people"
            value={people}
            onInput={(e) => setPeople(e.currentTarget.value)}
          />
          <img src={personIcon} aria-hidden="true" className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Form;
