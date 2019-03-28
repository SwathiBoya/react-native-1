import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Aboutus from './Aboutus';
import Customer from './Customer';

class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/home' component={Home} />
                  <Route exact path='/aboutus' component={Aboutus} />
                  <Route exact path='/customer' component={Customer} />
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;