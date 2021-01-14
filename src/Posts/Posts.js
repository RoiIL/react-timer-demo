import React, { Component } from 'react'

export default class Posts extends Component {  
    constructor(props) {
        super(props);
        this.state = {timeState: '', duration: ''}     
        this.curTime = "";
        this.time = new Date();
        this.curTime = this.time.getHours() + ':' + this.time.getMinutes() + ':' + this.time.getSeconds();     
    }

    componentDidMount() {        
        let interval = setInterval(() => {
            this.time = new Date();
            this.setState(() => {                
                return {timeState: this.time.getHours() + ':' + this.time.getMinutes() + ':' + this.time.getSeconds(), duration: this.state.timeState - this.curTime};
            });              
        }, 1000)
    }
    
    render() {
        console.log(this);
        return (
            <div>
                <h1>Posts for {this.props.userId}</h1>
                <h2>Time: {this.curTime}</h2>
                <h3>Current Time: {this.state.timeState}</h3>
                <h3>Duration: {this.state.duration}</h3>
            </div>
        )
    }
}
