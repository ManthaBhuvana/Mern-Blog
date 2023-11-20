import { useState } from "react";

function FormDemo() {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(username);
    console.log(email);
  }

  return (
    <div>
      <h1 className="display-1 text-warning text-center">Form Demo</h1>

      <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="form-control"
            id="username"
            onChange={handleUsername}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            onChange={handleEmail}
          />
        </div>
      
        <button type="submit" className="btn btn-success">
          Login
        </button>
      </form>
    </div>
  );
}

export default FormDemo;
