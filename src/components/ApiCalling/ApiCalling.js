import React from "react";

function ApiCalling() {

  const endpoint = "https://jsonplaceholder.typicode.com/todos";

  // GET
  fetch(endpoint)
  .then(response => response.json())
  .then(data => console.log(data[0].title))

  return <div>

  </div>;
}

export default ApiCalling;
