// import React, { useState } from "react";
// import { Button, Error, Input, FormField, Label, Textarea } from "../styles";
// function SignupForm({ onLogin }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [bio, setBio] = useState("");
//   const [errors, setErrors] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   function handleSubmit(e) {
//     e.preventDefault();
//     setErrors([]);
//     setIsLoading(true);
//     async function signUp(){
//       const res =  await fetch("/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           username,
//           password,
//         })
//       });
//       setIsLoading(false);
//       if(res.ok){
//        const user = await res.json()
//        console.log(user)
//        onLogin(user)
//       } else {
//         const err = await res.json()
//         setErrors(err.errors)
//       };
//     };
//     signUp();
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
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           autoComplete="current-password"
//         />
//       </FormField>
//       <FormField>
//         <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
//       </FormField>
//       {/* <FormField>
//         {errors.map((err) => (
//           <Error key={err}>{err}</Error>
//         ))}
//       </FormField> */}
//     </form>
//   );
// }
// export default SignupForm;
import React, {useState} from 'react';
import {Input, Form} from './style'
import {useHistory} from 'react-router-dom'

function SignupForm({setCurrentUser}) {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState(null)

  const history = useHistory();

  async function handleSubmit(e){
    e.preventDefault()
    const user = {
      name,
      password
    }
    const res = await fetch('http://localhost:3000/users',{ 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    });
    const userData = await res.json();
    if(res.ok) {
      setCurrentUser(userData)
      history.push('/')
    } else {
      setErrors(userData.message)
    }
  };
  
  return (
    <>
      <Form onSubmit = {handleSubmit}> 
        <h1>Sign up</h1>
        <Input
        type = "text"
        placeholder = "Name"
        value = {name}
        name = "name"
        onChange = {(e) => setName(e.target.value)}
        >
        </Input>
        <Input 
        type ="text"
        placeholder = "Password"
        value = {password}
        name = "password"
        onChange = {(e) => setPassword(e.target.value)}
        >
        </Input>
        <Input submit type = "submit" value = "Sign up"></Input>
        {errors?errors.map(error => <div>{error}</div>):null}
      </Form>
    </>
  )
}
export default SignupForm