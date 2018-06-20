import React, { Component } from 'react';
import Graph from './Graph.js';
import Legend from '../containers/Legend';


export default class App extends Component {
  render() {
    return (
      <div>
        React simple starter
        <hr />
        <br />

        <Graph />
        <br />
        <br />
        <br />

        <Legend />

      </div>

    );
  }
}
