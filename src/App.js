import React, { Component } from 'react';
import Form from './Form';
import './App.css';

/*
        "importeRiesgoPendiente": {
          "importeConSigno": 0,
          "numeroDecimalesImporte": "2",
          "moneda": { "divisa": "281", "digitoControlDivisa": "1" }
        },
*/

class App extends Component {
  state = {
    showForm: true,
    form: { importeFrom: { number: 1234, decimals: 2 } }
  };
  onSubmit = () => {
    this.setState({ showForm: false });
  };
  render() {
    return (
      <div className="App">
        <div onClick={() => this.setState({ showForm: !this.state.showForm })}>
          show hide form
        </div>
        {this.state.showForm && (
          <Form initial={this.state.form} onSubmit={this.onSubmit} />
        )}
      </div>
    );
  }
}

export default App;
