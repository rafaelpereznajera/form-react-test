import React, { Component } from 'react';
import FilterInputFloat from './FilterInputFloat';
import FilterInputText from './FilterInputText';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.initial
    };
  }
  onChange = (ref, value) => {
    console.log({ [ref]: value });
    this.setState({ [ref]: value });
  };
  onSubmit = () => {
    this.props.onSubmit(this.state);
  };
  render() {
    return (
      <form>
        Form
        <FilterInputFloat
          initial={this.props.initial.importeFrom}
          onChange={this.onChange}
          name="importeFrom"
        />
        <FilterInputText
          initial={this.props.initial.name}
          onChange={this.onChange}
          name="name"
        />
        <button onClick={this.onSubmit}> submit</button>
      </form>
    );
  }
}

export default Filter;
