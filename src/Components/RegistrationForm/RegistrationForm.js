
import React, { Component } from "react";
import "./RegistrationForm.css";
import { Button2, Required, Form, Input2 } from "../Utils/Utils";
import AuthApiService from "../../Services/auth-api-service";


export default class RegistrationForm extends Component {
   constructor(props){
    super(props)
    this.state = { error: null };
  } 
  static defaultProps = {
        onRegistrationSuccess: () => {}
    }

  /* state = {error: null} */
  handleSubmit = ev => {
    console.log(this.props);
    ev.preventDefault();
    this.setState({ error: null });
    const { full_name, user_name, password } = ev.target;
    const {onRegistrationSuccess} = this.props
    AuthApiService.postUser({
        full_name: full_name.value,
        user_name: user_name.value,
        password: password.value
    })
      .then(user => {
        full_name.value = "";
        user_name.value = "";
        password.value = "";
        //this.props.onRegistrationSuccess()
        console.log(onRegistrationSuccess)
        /* this.props.history.push('/login')  */
      })
        .catch(res => {
            this.setState({ error: res.error })
        }) 
  };

  render() {
    console.log(this.props)
     const { error } = this.state; 
    return (
      <Form className="RegistrationForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="full_name">
          <h2>Register</h2>
          <hr />
          <label htmlFor="RegistrationForm__full_name">
            Full name <Required />
          </label>
          <Input2
            name="full_name"
            type="text"
            required
            id="fullname"
            autoComplete="off"
          ></Input2>
        </div>
        <div className="user_name">
          <label htmlFor="RegistrationForm__user_name">
            User name <Required />
          </label>
          <Input2
            name="user_name"
            type="text"
            required
            id="user_name"
            autoComplete="off"
          ></Input2>
        </div>
        <div className="password">
          <label htmlFor="RegistrationForm__password">
            Password <Required />
          </label>
          <Input2
            name="password"
            type="password"
            required
            id="password"
            autoComplete="off"
          ></Input2>
        </div>
        <Button2 type="submit">Register</Button2>
      </Form>
    );
  }
}
