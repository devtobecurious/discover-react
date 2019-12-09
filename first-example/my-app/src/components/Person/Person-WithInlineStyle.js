import React, { Component } from 'react';

class PersonWithInlineStyle extends Component {
    style = {
        backgroundColor: 'blue',
        border: '1px solid red',
        padding: '20px',
        color: 'white'
    };

    render() {

        return (
            <div style={this.style}>
                <b>PersonWithInlineStyle</b>
            </div>
        )
    }
}

export default PersonWithInlineStyle;