import React, {Component} from 'react';
import {loadJson} from '../../utils/loadJson';
import Input from '../Input';
import PasswordInput from "../PasswordInput";
import {NAME_PATTERN, EMAIL_PATTERN, PASSWORD_PATTERN} from '../../constants';
import styles from './SingUpForm.module.css';

class SingUpForm extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            data: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            },
            user: null,
        };
    }

    handleChange = e => {
        const {target: {name, value}} = e;
        this.setState({
            data: {
                ...this.state.data,
                [name]: value,
            }
        });
    };

    submitHandler = e => {
        e.preventDefault();

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.data),
        };

        loadJson('http://192.168.0.106:3000/authorization/sign_up', options)
            .then(user => {
                this.setState({user});
            })
            .catch(console.dir);
    };

    render() {
        const {data: {firstName, lastName, email, password}} = this.state;
        return (
            <form className={styles.container} onSubmit={this.submitHandler}>
                <Input pattern={NAME_PATTERN} value={firstName} handleChange={this.handleChange} name="firstName"
                       placeholder="Name"/>
                <Input pattern={NAME_PATTERN} value={lastName} handleChange={this.handleChange} name="lastName"
                       placeholder="Last name"/>
                <Input pattern={EMAIL_PATTERN} value={email} handleChange={this.handleChange} name="email"
                       placeholder="Email"/>
                <PasswordInput pattern={PASSWORD_PATTERN} value={password} handleChange={this.handleChange} name="password"
                       placeholder="Password"/>
                <input type="submit"/>
            </form>
        );
    }
}

export default SingUpForm;