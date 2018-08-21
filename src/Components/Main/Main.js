import React, { Component } from 'react';
import Form from '../Form/Form';
import Tabs from '../Tabs/Tabs';

class Main extends Component {
  render() {
    return (
      <div>
        <h3>What type of idea do you have?</h3>
        <Tabs />
        <Form />
      </div>
    );
  }
}

export default Main;
