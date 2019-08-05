import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import PrivateRoute from '../utils/PrivateRoute'
//import PublicRoute from '../utils/PublicRoute'
import Navbar from '../components/Navbar/Navbar';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import LandingPage from '../components/LandingPage/LandingPage';
import Dashboard from '../components/Dashboard/Dashboard';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
