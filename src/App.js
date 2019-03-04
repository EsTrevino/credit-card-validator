import React, { Component } from 'react';
import Main from './Components/main';
import alertify from 'alertifyjs';
import { luhnAlgorithm } from './util/luhnAlgorith';

import './App.css';

class App extends Component {
  state = {
    formInput: '',
    result: {}
  };

  handleChange = e => {
    this.setState({
      formInput: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    let { formInput } = this.state;

    if (formInput.length === 0) {
      alertify.alert('Listen...', 'You didnt enter a value');
    } else {
      let result = luhnAlgorithm(formInput);
      this.setState(
        {
          result: result
        },
        () => {
          this.setState({
            formInput: ''
          });
        }
      );
    }
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand">Check Credit Card Numbers</span>
        </nav>
        <Main
          onChange={this.handleChange}
          formValue={this.state.formInput}
          result={this.state.result}
          name={'password'}
          submit={this.onSubmit}
        />
      </div>
    );
  }
}

export default App;
