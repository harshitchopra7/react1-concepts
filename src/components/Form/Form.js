import React, { useState } from "react";
import "./Form.css";

function Form() {
  // Syntax of useState
  // const [variableName, setVariableName] = useState(initialValue)

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(null);

  const submitForm = () => {
    setName("");
    setSurname("");
    setAge("");
  };

  return (
    <div className="form_container">
      <p>Name: {name}</p>
      <p>Surname: {surname}</p>
      <p>Age: {age}</p>
      <div className="form_label_container">
        <label>First name</label>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your first name"
        />
      </div>
      <div className="form_label_container">
        <label>Surname</label>
        <input
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          placeholder="Enter your surname"
        />
      </div>
      <div className="form_label_container">
        <label>Age</label>
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age"
        />
      </div>

      <button onClick={submitForm}>Submit</button>
    </div>
  );
}

export default Form;
