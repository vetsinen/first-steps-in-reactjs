import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    reset = ()=>{
        this.setState({value:''})
    };

    renderButton() {
        return (
            <button onClick={this.reset}>click button</button>
        )
    }

    render() {
        const {value} = this.state;
        return (
            <div className="App">
                <h1>hello, react</h1>
                <input name="input01" type="text" value={this.state.value}
                       onChange={this.handleChange}
                />
                <div>current: {this.state.value}</div>
                {this.renderButton()}
            </div>
        );

    }
}

export default App;
