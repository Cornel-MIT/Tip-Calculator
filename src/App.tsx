import React from 'react';
import Display from './components/Display';
import Form from './components/Form';
import { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [bill, setBill] = useState<string>('');
  const [tip, setTip] = useState<string>('');
  const [people, setPeople] = useState<string>('');
  const [calculatedTip, setCalculatedTip] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const billNum = parseFloat(bill);
    const peopleNum = parseFloat(people);
    const tipNum = parseFloat(tip);

    if (billNum > 0 && peopleNum > 0 && tipNum > 0) {
      const tipAmount = billNum * (tipNum / 100);
      setCalculatedTip(tipAmount);
      setTotal(tipAmount + billNum);
    }
  }, [bill, people, tip]);

  const handleResetBtn = () => {
    setBill('');
    setTip('');
    setPeople('');
    setCalculatedTip(0);
    setTotal(0);
  };

  // Dummy function for handleRadioChange
  const handleRadioChange = () => {
  };

  return (
    <div className="wrapper">
      <img src="/logo.svg" alt="Splitter Logo" />
      <div className="container">
        <Form bill={bill} setBill={setBill} setTip={setTip} people={people} setPeople={setPeople} />
        <Display total={total} people={parseInt(people)} calculatedTip={calculatedTip} handleResetBtn={handleResetBtn} handleRadioChange={handleRadioChange} />
      </div>
    </div>
  );
};

export default App;
