import React, {Component} from "react";
import {onChange} from "../../utils/checkUserInputValue";
import inputStyles from '../Input/Input.module.css';
import PropTypes from "prop-types";
import {mdiEyeOffOutline, mdiEyeOutline} from '@mdi/js';
import Icon from '@mdi/react';
import classNames from 'classnames';

class PasswordInput extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isInvalid: false,
            isHidden: true,
        }
    }

    onChange = onChange.bind(this);

    render() {
        const {isHidden} = this.state;

        return (
            <label>
                <input type={isHidden
                    ? 'password'
                    : 'text'
                } className={classNames({[inputStyles.invalid]: this.state.isInvalid})} value={this.props.value}
                       onChange={this.onChange}
                       placeholder={this.props.placeholder} name={this.props.name}/>
                <Icon onMouseDown={() => {
                    this.setState({
                        isHidden: false,
                    })
                }} onMouseUp={() => {
                    this.setState({
                        isHidden: true
                    })
                }} path={isHidden
                    ? mdiEyeOutline
                    : mdiEyeOffOutline} size={1}
                />

            </label>
        );
    }
}

export default PasswordInput;

PasswordInput.propTypes = {
    pattern: PropTypes.instanceOf(RegExp).isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
};