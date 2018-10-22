import React, { Component } from 'react';
import './App.css';
import { observable } from 'mobx'
import { observer } from 'mobx-react'

@observer
class App extends Component {
  @observable email = ''
  @observable passwords = ''

  render() {
    return (
      <div className="App">
        <header>Login</header>
          <input name="email" placeholder="Email" fluid />
          <input
            name="password"
            type="password"
            placeholder="Password"
            fluid
          />
        <button>Submit</button>
      </div>
    );
  }
}

export default App;
