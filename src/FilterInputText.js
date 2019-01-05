import React, { Component } from 'react';

const format = value => {
  return { value, active: value !== '' };
};

class FilterInputText extends Component {
  state = {
    ...this.props.initial
  };
  onChange = event => {
    this.setState({ value: event.target.value });
    this.props.onChange(this.props.name, format(event.target.value));
  };
  render() {
    console.log(this.state.value);
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.onChange} />
      </div>
    );
  }
}

export default FilterInputText;
