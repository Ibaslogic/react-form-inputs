import React, { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({
    fname: "",
    lname: "",
    message: "",
    carBrand: "",
    isChecked: false,
    gender: "",
    price: 0,
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  return (
    <div>
      <h1>React Form Handling</h1>
      <form>
        <label>
          First Name:{" "}
          <input
            type="text"
            name="fname"
            value={state.fname}
            onChange={handleChange}
          />
        </label>{" "}
        <label>
          Last Name:{" "}
          <input
            type="text"
            name="lname"
            value={state.lname}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Your Message:{" "}
          <textarea
            name="message"
            value={state.message}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Pick your favorite car brand:{" "}
          <select
            name="carBrand"
            value={state.carBrand}
            onChange={handleChange}
          >
            <option value="mercedes">Mercedes</option>
            <option value="bmw">BMW</option>
            <option value="maserati">Maserati</option>
            <option value="infinity">Infinity</option>
            <option value="audi">Audi</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          <input
            type="checkbox"
            name="isChecked"
            checked={state.isChecked}
            onChange={handleChange}
          />{" "}
          Is Checked?
        </label>
        <br />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={state.gender === "male"}
            onChange={handleChange}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={state.gender === "female"}
            onChange={handleChange}
          />{" "}
          Female
        </label>
        <br />
        <br />
        <label>
          Price (between 0 and 50):
          <input
            type="range"
            name="price"
            min="0"
            max="50"
            value={state.price}
            onChange={handleChange}
          />
        </label>
      </form>
      <h5>
        Name: {state.fname} {state.lname}
      </h5>
      <h5>My favorite car brand: {state.carBrand}</h5>
      <p>Message: {state.message}</p>
      <h5>Is it checked? : {state.isChecked ? "Yes" : "No"}</h5>
      <h5>Gender Selected : {state.gender}</h5>
      <h5>Price : ${state.price}</h5>
    </div>
  );
}

export default App;
