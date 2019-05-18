import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  render() {
    const { face, rolling } = this.props;
    return <i className={`die fas fa-dice-${face} ${rolling && 'shaking'}`} />
  }
}

export default Die