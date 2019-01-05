import React, { Component } from 'react';
import Form from './Form';
import './App.css';

class App extends Component {
  state = { showForm: false, form: { importeFrom: 0 } };
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
