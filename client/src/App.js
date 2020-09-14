import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppContext } from './context/AppContext';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SinglePost from './pages/SinglePost';
import NavBar from './components/NavBar';
import NavHome from './components/NavHome';
import CM from './pages/CM';
import './App.css';

function App() {
  const { currentUser } = useContext(AppContext);
  return (
    <BrowserRouter>
      {currentUser ? <NavBar /> : <NavHome />}
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/article/:id" component={SinglePost} />
        <Route exact path="/signup" component={SignUp} />
        <PrivateRoute exact path="/manage" component={CM} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
