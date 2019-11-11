import React from 'react';
import './App.css';
import Login from './login/login';
import Toast from './toast/toast';
import Carousel from './carousel/index';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
       <Login />
       <Carousel />
      </div>
    );
  }
}
export default App;
