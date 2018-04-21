import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            launches: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    reset = () => {
        this.setState({value: ''})
    };

    componentDidMount = () => {
        fetch('https://launchlibrary.net/1.3/launch/next/10/0')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({launches: data.launches});
            });
    };

    renderLaunches = () => {
        return (
            <ul>
                {this.state.launches.map((launch) => {
                    return (<li>{launch.name}</li>);
                })}
            </ul>)
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
                <div>{this.renderLaunches()}</div>

                {this.renderButton()}
            </div>
        );

    }
}

export default App;
