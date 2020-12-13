import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/layout/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div>
            <Navbar />
            <div className="container">
              <Alert
              />
              <Switch>
                <Route exact path='/' render={props =>
                  <React.Fragment>
                    <Search />
                    <Users />
                  </React.Fragment>
                } />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User}
                />
              </Switch>

            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>

  )

}
export default App;
