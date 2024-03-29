import React, { useState } from "react";
import { Input, Form } from "./style";
import { useHistory } from "react-router-dom";

function LoginForm({ setCurrentUser }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    const user = {
      name,
      password
    }
    const res = await fetch("http://localhost:3000/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    })
    const userData = await res.json();
    if (userData.id) {
     console.log(userData)
      setCurrentUser(userData)
      history.push("/");
    } else {
      setErrors(userData.message);
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h1>Log in</h1>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Input
          type="text"
          placeholder="Password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Input submit type="submit" value="Log in"></Input>
        {errors ? errors.map((error) => <div key = {error}>{error}</div>) : null}
      </Form>
    </>
  );
}
export default LoginForm;
