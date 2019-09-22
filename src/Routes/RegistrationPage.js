import React, { Component } from "react";

import { Section } from "../../Components/Utils/Utils";
import RegistrationForm from "../../Components/RegistrationForm/RegistrationForm";

class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/login');
  };

  render() {
    return (
      <Section className="RegistrationPage">
        <h2>Register</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
          history={this.props.history}
        />
      </Section>
    );
  }
}

export default RegistrationPage
