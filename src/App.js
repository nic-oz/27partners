import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Main />
        <button>My idea is different</button>
        <Footer />
      </div>
    );
  }
}

export default App;
