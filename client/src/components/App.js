import React, {useEffect, useState} from 'react';
import { Switch, Route } from 'react-router-dom'
import HikeCollection from './HikeCollection'
import NavBar from './NavBar'
// import Login from './Login'
import MyProfile from './MyProfile'
import Map from './Map'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import HikePage from './HikePage';


function App() {
  const [currentUser, setCurrentUser] = useState([]);
  //  if (!user) return <Login onLogin={setUser} />
  return (
    <>
    <div style={{backgroundImage: `url("https://i.pinimg.com/originals/d4/32/30/d4323062065c96e06e794370cfc01571.png")`}}>
      <NavBar currentUser={currentUser}/>
        <main>
          <Switch> 
            {/* <Route exact path = "/login">
              <Login />
            </Route> */}
            <Route exact path = "/signup">
              <SignupForm setCurrentUser={setCurrentUser} />
            </Route>
            <Route exact path = "/login">
              <LoginForm setCurrentUser={setCurrentUser} />
            </Route>
            <Route exact path = "/users/:id"> 
              <MyProfile />
            </Route>
            <Route exact path = "/hikes/:id"> 
              <HikePage />
            </Route>
            <Route exact path="/map"> 
              <Map />
            </Route>
            <Route exact path="/"> 
              <HikeCollection />
            </Route>
          </Switch>
        </main>
        </div>
    </>
  );
}
export default App;