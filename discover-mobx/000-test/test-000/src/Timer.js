import React, { Component } from 'react';
import { observer } from "mobx-react";
import { observable } from 'mobx';

// Store (the old state becoming mobx store)
const timerData = observable({
    passedSeconds: 0
});

// changing value of the store
setInterval(() => {
   timerData.passedSeconds ++; 
}, 1000);

// Component that listens all update of the store, and refresh the render
@observer
class Timer extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    render() {
        return (
            <span>
                Secondes passés : { this.store.passedSeconds }
            </span>
        )
    }
}

export {
    timerData, Timer
};