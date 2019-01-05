import React, { Component } from 'react';
import Filter from './Filter';
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
    form: {
      importeFrom: { number: 1234, decimals: 2, active: true },
      name: { value: '', active: false }
    }
  };
  onSubmit = form => {
    console.log(form);
    this.setState({ form, showForm: false });
  };
  render() {
    return (
      <div className="App">
        <div onClick={() => this.setState({ showForm: !this.state.showForm })}>
          show hide form
        </div>
        {this.state.showForm && (
          <Filter initial={this.state.form} onSubmit={this.onSubmit} />
        )}
      </div>
    );
  }
}

export default App;
