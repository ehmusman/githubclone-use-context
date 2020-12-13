import React, { useState } from 'react'
import axios from 'axios'
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
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
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

  const getUserRepos = async (username) => {
    setLoading(true)

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    setRepos(res.data);
    setLoading(false);
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
              <Route exact path='/user/:login' render={props =>
                <User
                  {...props}
                  userRepos={getUserRepos}
                  repos={repos}
                />
              } />
            </Switch>

          </div>
        </div>
      </Router>
    </GithubState>

  )

}
export default App;
