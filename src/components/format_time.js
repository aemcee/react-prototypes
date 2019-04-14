import React, { Component } from 'react';

class FormatTime extends Component {
    // constructor is not necessary... initally???
    constructor(props){
        super(props);

        this.timeStyle = {
            display: 'inline-block',
            position: 'relative',
            left: '50%',
            transform: 'translate(-50%)',
            width: '295px'
        }

    }

    milisecondsToTime(){
        const { elapsed } = this.props;
        const sec = elapsed / 1000;
        const min = sec / 60;

        return {
            hour: Math.floor( min / 60 ),
            min: Math.floor( min % 60 ),
            sec: Math.floor( sec % 60 ),
            ms: Math.floor( elapsed % 100 )
        }
    }

    render(){
        // const { elapsed } = this.props;
        const { hour, min, sec, ms } = this.milisecondsToTime();

        return (
            // <div>{ elapsed }</div>
            <div style = { this.timeStyle }>{ hour }:{ min }:{ sec }.{ ms }</div>
        )
    }
}

export default FormatTime; 