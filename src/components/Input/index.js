import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Input.module.css';
import {onChange} from "../../utils/checkUserInputValue";

class Input extends Component {

  constructor (props, context) {
    super(props, context);
    this.state = {
      isInvalid: false,
    };
  }
  onChange = onChange.bind(this);

  render () {
    return (
      <input className={classNames({ [styles.invalid]: this.state.isInvalid })}
             type='text'
             value={this.props.value} onChange={this.onChange}
             placeholder={this.props.placeholder} name={this.props.name}/>
    );
  }
}

export default Input;

Input.propTypes = {
  pattern: PropTypes.instanceOf(RegExp).isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
};