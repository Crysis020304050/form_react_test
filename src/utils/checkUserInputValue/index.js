export function onChange (e) {
    if (this.props.pattern.test(e.target.value) || e.target.value === '') {
        this.setState({
            isInvalid: false,
        });
        this.props.handleChange(e);
    } else {
        this.setState({
            isInvalid: true,
        });
        this.props.handleChange(e);
    }
}