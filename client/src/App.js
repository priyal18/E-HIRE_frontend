import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardComp from "./components/CardComp";
import Video from "./components/Video";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact>
            <CardComp />
          </Route>
          <Route path='/:id'>
            
                <Video/>
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
