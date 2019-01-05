import React, { Component } from 'react';
import FormInput from './FormInput';
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: this.props.initial
    };
  }
  onChange = (ref, value) => {
    this.setState({ [ref]: value }, () => console.log(this.state));
  };
  render() {
    return (
      <form>
        Form
        <FormInput
          initial={this.state.initial.importeFrom}
          onChange={this.onChange}
          name="moneyFrom"
        />
        <button onClick={this.props.onSubmit}> submit</button>
      </form>
    );
  }
}

export default Form;
