import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/layout/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';

const App = () => {
  const [alert, setAlert] = useState(null);

  const defineAlert = (type, msg) => {
    setAlert({ type, msg })
    setTimeout(() => setAlert(null), 5000)
  }
  const clearAlert = (msg) => {
    if (msg === 'clear') {
      setAlert(null)
    }
  }


  return (
    <GithubState>
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Alert
              alert={alert}
              clearAlert={clearAlert}
            />
            <Switch>
              <Route exact path='/' render={props =>
                <React.Fragment>
                  <Search
                    defineAlert={defineAlert}
                  />
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
    </GithubState>

  )

}
export default App;
