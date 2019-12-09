import React, { Component } from 'react';

class PersonConditional extends Component {
    state = {
        showContent: false
    };

    showHide = () => {
        this.setState({
            showContent: !this.state.showContent
        })
    }

    render() {
        let content = null;
        if (this.state.showContent) {
            content = (
                <i>coucou !</i>
            );
        }

        return (
            <div>
                <b>PersonConditional</b>
                <button onClick={this.showHide}>Hey eh ouh ouh</button>
                {
                    content
                }
            </div>
        );
    }
}

export default PersonConditional;
