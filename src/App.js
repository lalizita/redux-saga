import React, { Component } from 'react'
import {Provider} from 'react-redux'

import store from './store'

import Todo from './Todo'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Todo/>
        </div>
      </Provider>
    );
  }
}

export default App;
