import React, { Component } from 'react';

class Login extends Component {
   doLogin(){
      window.location = "/home";
   }
   render() {
      return (
         <div>
            <h2>Login</h2>
            <input type="text" placeholder="User Name"/><br/><br/>
            <input type="password" placeholder="Password"/><br/><br/>
            <input type="button" value="Sign In" onClick={()=>this.doLogin()} />
         </div>
      );
   }
}
export default Login;