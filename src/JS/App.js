
//imports
import React from 'react';
import { Switch, Route } from "react-router-dom";
import '../App.css';

import Header from "./Header"
import About from "./About"

//react router
//needs setup of pages before work can be done on pages.
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/About"} component={About} />
      </Switch>
    </div>
  );
}
//home page
function Home(props) {
  return (
    <div>
      <h1>This is America</h1>
    </div>
  );
}
export default App;