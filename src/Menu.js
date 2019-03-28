import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Menu extends Component {
   render() {
      return (
         <div>
            <Link to={'/'}>Home</Link>  |
            <Link to={'/home'}>  Home</Link>  |
            <Link to={'/aboutus'}>  About Us</Link>  |
            <Link to={'/customer'}>  Customer</Link>  |
            <Link to={'/login'}>  LogOut</Link>  

         </div>
      );
   }
}
export default Menu;