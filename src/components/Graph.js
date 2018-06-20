import React, { Component } from 'react';

class Graph extends Component {
  render() {
    return(
      <div>
        <form className="input-group">
          <input />
          <span className="input-group-btn">
            <button type="submit" className=" btn btn-secondary">Submit</button>
          </span>
        </form>
        Hi, I'm a graph!!!
      </div>
    )
  }
}


export default Graph;
