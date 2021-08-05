// import React, { useState } from "react";
// import { Button, Error, Input, FormField, Label } from "../styles";
// function LoginForm({ onLogin }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   function handleSubmit(e) {
//     e.preventDefault();
//     setIsLoading(true);
//     async function login(){
//      const res = await fetch("/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name:username, password }),
//       })
//       if(res.ok){
//         setIsLoading(false);
//         const user = await res.json()
//         onLogin(user)
//       } else {
//         const err = await res.json()
//         setErrors(err.errors)
//       }
//       };
//     login()
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <FormField>
//         <Label htmlFor="username">Username</Label>
//         <Input
//           type="text"
//           id="username"
//           autoComplete="off"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </FormField>
//       <FormField>
//         <Label htmlFor="password">Password</Label>
//         <Input
//           type="password"
//           id="password"
//           autoComplete="current-password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </FormField>
//       <FormField>
//         <Button variant="fill" color="primary" type="submit">
//           {isLoading ? "Loading..." : "Login"}
//         </Button>
//       </FormField>
//       {/* <FormField>
//         {errors.map((err) => (
//           <Error key={err}>{err}</Error>
//         ))}
//       </FormField> */}
//     </form>
//   );
// }
// export default LoginForm;
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
      body: JSON.stringify({ user })
    });
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
        {errors ? errors.map((error) => <div>{error}</div>) : null}
      </Form>
    </>
  );
}
export default LoginForm;
