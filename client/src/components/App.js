import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HikeCollection from './HikeCollection'
import NavBar from './NavBar'
import Login from './Login'
import MyProfile from './MyProfile'

function App() {
  return (
    <>
      <NavBar />
        <main>
          <Switch> 
            <Route path = "/login">
              <Login/>
            </Route>
            <Route path = "/users/:id"> 
              <MyProfile/>
            </Route>
            <Route path="/"> 
              <HikeCollection/>
            </Route>
          </Switch>
        </main>
    </>
  );
}

export default App;
