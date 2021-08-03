import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import NavBar from './components/NavBar'
import HikeCard from './components/HikeCard'
import Login from './components/Login'
import MyProfile from './components/MyProfile'
import SignupForm from './components/SignupForm'

function App() {
  return (
    <>
      <Router>
      <div>
          <span><Link to="/">Home</Link> </span><br/>
          <span> <Link to="/user/:id">My Profile</Link></span><br/>
          <span><Link to="/login">Login</Link></span><br/>
          <span><Link to="/signup">Signup</Link></span><br/>
        <Switch>
          //new addition
          <Route exact path="/user/:id">
            <MyProfile />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <SignupForm />
          </Route>
          {/* <Route path="/item/${id}">
            <ItemDetails />
          </Route> */}
          {/* <Route path="/hike/:hike_id" render={(props) =>  {
            let itemId = props.match.params.itemId
            const currentItem = products.find(x => x.id == parseInt(itemId))
            console.log("this is the current item we're sending: " , currentItem)
            return <ItemPage currentItem = {currentItem}/> 
          }
            }/> */}
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
