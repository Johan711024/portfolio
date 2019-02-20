import React, { Component } from 'react';

function startAnimation(callback) {
    requestAnimationFrame(() => {
    requestAnimationFrame(() => {
        callback();
    });
    });
}

export default class AnimateMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animate: false,
    };
  }
 

    componentDidMount() {
        // You'll need to import startAnimation at the top of the file
        startAnimation(() => {
          this.setState({ animate: true });
        });
      }

  render() {
    return (
      <div
        style={ {
          background: '#eee',
          border: '1px solid black',
          height: this.state.animate ? 250 : 50,
          width: this.state.animate ? 250 : 50,
          margin: 20,
          padding: 20,
          transition: 'all 2s',
        } }
      >
        Animate me
      </div>
    );
  }
}