import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import {Header} from "./component/header"
import {Productlist} from "./component/productlist"
import {Cart} from './component/cart'
import {Prodetails} from './component/prodetails'
import {Default} from './component/default'
function App() {
  return (
    <Router>
    <Header/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
          <Productlist/>
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route path="/cart/:id">
            <Prodetails/>
          </Route>
          <Route path="*">
            <Default/>
          </Route>
        </Switch>
     
    </Router>
   
   
  
  );
}

export default App;
