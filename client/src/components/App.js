import React, {useEffect, useState} from 'react';
import { Switch, Route } from 'react-router-dom'
import HikeCollection from './HikeCollection'
import NavBar from './NavBar'
import Login from './Login'
import MyProfile from './MyProfile'

function App() {
  const [user, setUser] = useState(null);

  if (!user) return <Login onLogin={setUser} />

  return (
    <>
    {/* <div style={{backgroundImage: `url("https://i.pinimg.com/originals/d4/32/30/d4323062065c96e06e794370cfc01571.png")`}}></div> */}
      <NavBar user = {user} setUser = {setUser}/>
        <main>
          <Switch> 
            <Route path = "/login">
              <Login user = {user}/>
            </Route>
            <Route path = "/users/:id"> 
              <MyProfile user = {user}/>
            </Route>
            <Route path="/"> 
              <HikeCollection user = {user}/>
            </Route>
          </Switch>
        </main>
    </>
  );
}

export default App;
