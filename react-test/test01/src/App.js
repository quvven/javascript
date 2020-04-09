import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Usercard from './components/Usercard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <div className="row">
            <div className="col-3">
              deneem
            </div>
            <div className="col-9">
              <Usercard />
            </div>
          </div>
        </div>
  
      </div>
    );  
  }
}
export default App;
