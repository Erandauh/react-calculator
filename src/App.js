import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Calculator from './js/components/Calculator'

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {

  render() {
    return (
        <Provider store={store}>
        <div className="App">
          <Calculator/>
        </div>
        </Provider>
    );
  }
}

export default App;
