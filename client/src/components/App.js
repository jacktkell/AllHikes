import React, {useEffect, useState} from 'react';
import { Switch, Route } from 'react-router-dom'
import HikeCollection from './HikeCollection'
import NavBar from './NavBar'
import Login from './Login'
import MyProfile from './MyProfile'
import Map from './Map'

function App() {
  const [user, setUser] = useState(null);

   if (!user) return <Login onLogin={setUser} />

  return (
    <>
    <div style={{backgroundImage: `url("https://i.pinimg.com/originals/d4/32/30/d4323062065c96e06e794370cfc01571.png")`}}>
      <NavBar user = {user} setUser = {setUser}/>
        <main>
          <Switch> 
            <Route exact path = "/login">
              <Login user = {user}/>
            </Route>
            <Route exact path = "/users/$id"> 
              <MyProfile user = {user}/>
            </Route>
            <Route exact path="/map"> 
              <Map user = {user}/>
            </Route>
            <Route exact path="/"> 
              <HikeCollection user = {user}/>
            </Route>
          </Switch>
        </main>
        </div>
    </>
  );
}

export default App;
