import React, { Component } from 'react';
import FormInput from './FormInput';
class Form extends Component {
  state = {};
  onChange = (ref, value) => {
    this.setState({ [ref]: value }, () => console.log(this.state));
  };
  render() {
    return (
      <form>
        Form
        <FormInput initial={'1'} onChange={this.onChange} name="moneyFrom" />
        <button onClick={this.props.onSubmit}> submit</button>
      </form>
    );
  }
}

export default Form;
