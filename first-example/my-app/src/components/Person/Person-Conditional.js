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
        const style = {
            backgroundColor: 'grey',
            color: 'white'
        };

        let content = null;
        
        if (this.state.showContent) {
            style.backgroundColor = 'green';

            content = (
                <i>coucou !</i>
            );
        }

        return (
            <div style={style}>
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
