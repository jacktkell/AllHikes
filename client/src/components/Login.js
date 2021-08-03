import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import {Logo, Divider} from './style'
import {Button} from "../styles";

function Login({onLogin}) {
    const [showLogin, setShowLogin] = useState(true);

  return (
    <Wrapper>
      <Logo>All-Hikes</Logo>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <Divider />
          <p>
            Don't have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignupForm onLogin={onLogin} />
          <Divider />
          <p>
            Already have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </p>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

export default Login;
