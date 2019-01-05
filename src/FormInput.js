import React, { Component } from 'react';

class FormInput extends Component {
  state = {
    value: this.props.initial
  };
  onChange = event => {
    this.setState({ value: event.target.value });
    this.props.onChange(this.props.name, event.target.value);
  };
  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.onChange} />
      </div>
    );
  }
}

export default FormInput;
