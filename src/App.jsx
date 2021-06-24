import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
        </Switch>
      </BrowserRouter>
      <Home/>
    </div>
  );
}

export default App;
