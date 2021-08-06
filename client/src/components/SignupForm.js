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
    console.log(user)
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