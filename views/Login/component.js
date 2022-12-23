import React, { PureComponent } from 'react'
import _ from 'lodash';
import {Route, Link, Routes, useLocation, useNavigate} from 'react-router-dom';

import CustomInput from "../../components/CustomInput.js";
import Button from "../../components/Button.js";
import { withRouter } from "../../config/index.js"
import './styles.scss'

class LoginComponent extends PureComponent {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      error: ""
    }
  }

  componentDidMount = async() => {
   
  }

  handleChange = e => {
    this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  };

  login = async() => {
    console.log(this.state.username, this.state.password)
    const { username, password } = this.state
    const { loginUser } = this.props
    const data = {
      username,
      password
    }
    try {
      const { value } = await loginUser(data)
      console.log(value.user, 'valuevaluevalue')
      if(value && value.user) {
        console.log('innnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn')
        this.setState({ error: "" })
        localStorage.setItem('user_data', JSON.stringify(value.user))
        localStorage.setItem('refresh_token', _.get(value, 'token.refresh', ''))
        localStorage.setItem('user_token', _.get(value, 'token.access', ''))
        console.log(this.props.navigate, 'this.props.navigate')
        this.props.navigate('/tenders')
      } else {
        this.setState({ error: _.get(value, 'detail', '') })
      }
    } catch(e) {
      //catch block
    }
  }

  render() {
    const { error } = this.state;
    return (
      <div className="App">
      <form className="form">
        <div className="text-left">
          <img src='/images/lock.svg' width="40px" alt="logo"/>
          <span className="project-head">MyGETs</span>
        </div>
        <CustomInput
          labelText="username"
          id="username"
          formControlProps={{
            fullWidth: true
          }}
          handleChange={this.handleChange}
          type="text"
          value={this.state.username}
        />
        <CustomInput
          labelText="Password"
          id="password"
          formControlProps={{
            fullWidth: true
          }}
          handleChange={this.handleChange}
          type="password"
          value={this.state.password}
        />
        { error ? <div className="alert alert-danger" role="alert">
          <small>{error}</small>
        </div> : "" }
        <Button type="button" color="primary" className="form__custom-button" onClick={this.login}>
          Log in
        </Button>
      </form>
    </div>
    )
  }
}
export default withRouter(LoginComponent)