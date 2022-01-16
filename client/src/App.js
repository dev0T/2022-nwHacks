import React, { useState, useEffect } from "react";
import "./App.css";
import { getAPI } from "./service";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";
import Error from "./pages/Error";
import Discover from "./pages/Discover"
import Contact from "./pages/Contact"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [ApiState, setApiState] = useState();

  useEffect(() => {
    getAPI().then((result) => {
      setApiState(result);
    });
  }, []);

  return (
    <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/discover' component={Discover} />
          <Route path='/contact' component={Contact} />
          <Route component={Error} />
        </Switch>
    </BrowserRouter>

  );
}

export default App;
