import React from "react";
import "../index.css";

interface DisplayProps {
  calculatedTip: number;
  total: number;
  people: number;
  handleResetBtn: () => void;
  handleRadioChange: () => void;
}

const Display: React.FC<DisplayProps> = ({ calculatedTip, total, people, handleResetBtn, handleRadioChange }) => {
  const returnCurrencyAmt = (amt: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amt);
  };

  const tipAmountPerPerson = people > 0 ? calculatedTip / people : 0;
  const totalAmountPerPerson = people > 0 ? total / people : 0;

  return (
    <div className="display">
      <div className="display-group">
        <div className="display-row">
          <div className="display-label">
            <p className="header">Tip Amount</p>
            <p className="unit">/ person</p>
          </div>
          <p className="display-amt">{returnCurrencyAmt(tipAmountPerPerson)}</p>
        </div>
        <div className="display-row">
          <div className="display-label">
            <p className="header">Total</p>
            <p className="unit">/ person</p>
          </div>
          <p className="display-amt">{returnCurrencyAmt(totalAmountPerPerson)}</p>
        </div>
      </div>
      <button className="btn" onClick={() => { handleResetBtn(); handleRadioChange(); }} disabled={!total}>
        Reset
      </button>
    </div>
  );
};

export default Display;
