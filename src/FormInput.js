import React, { Component } from 'react';

const format = (value, decimals) => {
  return { number: value * Math.pow(10, decimals), decimals };
};

const parse = value => {
  return value.number / Math.pow(10, value.decimals);
};

class FormInput extends Component {
  state = {
    value: parse(this.props.initial)
  };
  onChange = event => {
    this.setState({ value: event.target.value });
    this.props.onChange(
      this.props.name,
      format(event.target.value, this.props.initial.decimals)
    );
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
