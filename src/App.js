import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Calculator from './js/components/Calculator'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Calculator/>
      </div>
    );
  }
}

export default App;
