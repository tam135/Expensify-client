import React, { Component } from 'react'
import TokenService from "../../Services/token-service";
import AuthApiService from "../../Services/auth-api-service";
import { Button2, Form, Input2 , Required} from "../Utils/Utils";
import './LoginForm.css'

export default class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }

    state = { error: null }

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { user_name, password } = ev.target

        AuthApiService.postLogin({
        user_name: user_name.value,
        password: password.value,
        })
        .then(res => {
            user_name.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            this.props.onLoginSuccess()
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
    } 

    render() {
        const { error } = this.state;
        return (
          <Form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
            <div role="alert">{error && <p className="red">{error}</p>}</div>
            <div className="user_name">
              <h2 className="login">
                Login 
              </h2>
              <hr />
              <label htmlFor="LoginForm__user_name">
                User name <Required />
              </label>
              <Input2 required name="username" id="user_name"></Input2>
            </div>

            <div className="password">
              <label htmlFor="LoginForm__password">
                Password <Required />
              </label>
              <Input2
                required
                name="password"
                type="password"
                id="password"
              ></Input2>
            </div>
            <Button2 type="submit">Login</Button2>
          </Form>
        );
    }
}

