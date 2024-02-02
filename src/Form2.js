import React, { useState } from "react";

const fruits = [
  { value: "grapefruit", text: "Grape Fruit" },
  { value: "mango", text: "Mango" },
  { value: "lime", text: "Lime" },
  { value: "coconut", text: "Coconut" },
  { value: "pineapple", text: "PineApple" },
];

export default function Form2() {
  const [state, setState] = useState({ value: "coconut" });

  function handleChange(e) {
    setState({ value: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Your favorite fruit is " + state.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Pick your favorite fruit</label>
        <select value={state.value} onChange={handleChange}>
          {fruits.map((f) => (
            <option value={f.value}>{f.text}</option>
          ))}
        </select>
        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
}
