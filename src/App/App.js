import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from '../utils/PrivateRoute';
import PublicRoute from '../utils/PublicRoute';
import UserContextProvider from '../contexts/UserContext';
import Navbar from '../components/Navbar/Navbar';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import LandingPage from '../components/LandingPage/LandingPage';
import Dashboard from '../components/Dashboard/Dashboard';
import JobForm from '../components/JobForm/JobForm';
import EditJob from '../components/EditJob/EditJob'
import Footer from '../components/Footer/Footer';
import JobContextProvider from '../contexts/JobContext';
import Study from '../components/Study/Study';

const App = () => {
  return (
    <div className="App">
      <UserContextProvider>
        <JobContextProvider>
          <Navbar />
          <Switch>
            <PublicRoute exact path="/" component={LandingPage} />
            <PublicRoute path="/signup" component={SignUp} />
            <PublicRoute exact path="/login" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/newjob" component={JobForm} />
            <PrivateRoute path="/edit/:id" component={EditJob} />
            <PrivateRoute exact path="/study/:id" component={Study} />
          </Switch>
          <Footer />
        </JobContextProvider>
      </UserContextProvider>
    </div>
  );
};

export default App;
