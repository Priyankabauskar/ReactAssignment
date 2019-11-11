import React from "react";
import axios from 'axios';
import "./login.css";
import ToastMessage from "../toast/toast";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Username: "Priyankabauskar",
      password: "abc@123",
      showMsg : false,
      logMsg : ''
    };
    this.updatedUsername = this.updatedUsername.bind(this);
    this.updatedpassword = this.updatedpassword.bind(this);
  }
  updatedUsername(e) {
    this.setState({newusername: e.target.value });
  }
  updatedpassword(e) {
    this.setState({newpassword: e.target.value });
  }
   handleValidation =() =>{
    let username = this.state.newusername;
    let password = this.state.newpassword;

    if (!(username.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)) || username === "") 
    {
      alert("Please enter valid username");
    }
    if (( password === "") )
    {
      alert("Please enter valid password");
    }
    this.apiAuthentication();
  }
  apiAuthentication =() =>{
      axios({
        method: 'post',
        url: 'https://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/oauth/login',
        data: {
              username :this.state.newusername, //trupti.kashid@objectedge.com
              password : this.state.newpassword //Objectedge$10
            },
        config: { headers: { 'authorization':'Bearer YWRtaW46YWRtaW4=',
            'content-type':'application/json' }}
        })
        .then(response => {
           this.setState({logMsg : "SUCCESS"})
           this.setState({showMsg : true})
        })
        .catch(response =>  {
           this.setState({logMsg : "Failed"})
           this.setState({showMsg : true})
        });
        
      } 
 
  render() {
    return (
      <div className="logincomponent">
        {this.state.showMsg ? <ToastMessage msg={this.state.logMsg}/> : null}
        <div id="container">
          <label htmlFor="uname">
            <b>Username :</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            onChange={this.updatedUsername}
          />

          <label htmlFor="psw">
            <b>Password :</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            onChange={this.updatedpassword}
          />

          <button type="submit" className="loginbtn"onClick={this.handleValidation}>
            Login
          </button>
        </div>
      </div>
    );
  }
}
export default Login;
