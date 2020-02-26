import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Input.module.css';

class Input extends Component {

  constructor (props, context) {
    super(props, context);
    this.state = {
      valid: true,
    };
  }

  onChange = (e) => {
    if (this.props.pattern.test(e.target.value) || e.target.value === '') {
      this.setState({
                      valid: true,
                    });
      this.props.handleChange(e);
    } else {
      this.setState({
                      valid: false,
                    });
      this.props.handleChange(e);
    }
  };

  render () {
    return (
      <input className={classNames({ [styles.invalid]: !this.state.valid })}
             type={this.props.isPassword ? 'password' : 'text'}
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
  isPassword: PropTypes.bool,

};