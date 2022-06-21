import React, { useEffect, useState } from "react";

function ApiCalling() {
  //   const endpoint = "https://jsonplaceholder.typicode.com/todos";
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")

  const callApi = () => {
    // GET
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => console.log(data))
      // Error handling (edgecase)
      .catch((error) => console.log("Please try another api"));
  };

  useEffect(() => {
    // callApi();
    console.log("UseEffect chala")
  });

  return (
    <div>
      <h1>Hello</h1>
      <label>Name</label>
      <input value={name} onChange={e => setName(e.target.value)} />
      <label>Surname</label>
      <input value={surname} onChange={e => setSurname(e.target.value)} />
    </div>
  );
}

export default ApiCalling;
