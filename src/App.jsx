import React from 'react';
import { Component } from 'react';

var game = require('./index.js');

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
      </div>
    );
  }
}
