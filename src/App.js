import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [myPercentage, setMyPercentage] = useState("");
  const [frndPercentage, setFrndPercentage] = useState("");

  const tip = bill * ((myPercentage + frndPercentage) / 2 / 100);

  function handleReset() {
    setBill("");
    setMyPercentage(0);
    setFrndPercentage(0);
  }

  return (
    <div>
      <BillAmount billInput={bill} onSetBill={setBill} />
      <SelectPercentage percentage={myPercentage} onSelect={setMyPercentage}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        percentage={frndPercentage}
        onSelect={setFrndPercentage}
      >
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onHandleReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillAmount({ billInput, onSetBill }) {
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type="text"
        placeholder="Bill value"
        value={billInput}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        percentage={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%) </option>
        <option value="1">It was okay (5%) </option>
        <option value="2">It was good (10%) </option>
        <option value="3">Absolutey amzing (15%) </option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay {bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ onHandleReset }) {
  return <button onClick={onHandleReset}> Reset </button>;
}
