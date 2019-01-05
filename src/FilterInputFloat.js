import React, { Component } from 'react';

const format = (value, decimals) => {
  const number = value * Math.pow(10, decimals);
  if (value === '' || isNaN(number))
    return { number: 0, decimals, active: false };
  return { number, decimals, active: true };
};

const parse = ({ number, decimals, active }) => {
  if (!active) return '';
  return number / Math.pow(10, decimals);
};

class FilterInputFloat extends Component {
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

export default FilterInputFloat;
