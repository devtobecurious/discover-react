import React, { Component } from 'react';

class People extends Component {

    render() {
        console.log('People::render', this.props);
        return (
            <div>
                <h2>{this.props.name}</h2>

                <div>
                    <h3>Update</h3>
                    <input type="text" onChange={this.props.changed} value={this.props.name} />
                </div>
            </div>
        );
    }
}

export default People;