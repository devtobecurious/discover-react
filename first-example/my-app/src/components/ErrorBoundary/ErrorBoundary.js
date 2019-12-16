import React, { Component } from "react";

class ErrorBoundary extends Component {
    state = {
        hasGotOne: false,
        message: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({
            hasGotOne: true,
            message: error
        });
    }

    render() {
        let returnContent = this.props.children;

        if (this.state.hasGotOne) {
            returnContent = <h1>{ this.state.message }</h1>
        }

        return returnContent;
    }

}

export default ErrorBoundary;