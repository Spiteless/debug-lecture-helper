import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div className="App">
        <button onClick={() => this.increment()}>Click Me!</button>
        <p>Click the button above to increment the number below.</p>
        <p>Button Clicks: {this.state.count}</p>
      </div>
    );
  }
}

export default App;
