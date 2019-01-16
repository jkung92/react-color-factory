import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ColorDetails extends Component {
  render() {
    const color = this.props.match.params.color;
    const currentColor = this.props.colorData.filter(c => c.name === color)[0];

    console.log(this.props.colorData);
    console.log(currentColor);

    return (
      <div
        style={{
          backgroundColor: currentColor.hex,
          height: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <h2 style={{ color: 'white' }}>THIS IS {color.toUpperCase()}.</h2>
        <h2 style={{ color: 'white' }}> ISN'T IT BEAUTIFUL?</h2>
        <Link to="/colors"> Go Back </Link>
      </div>
    );
  }
}

export default ColorDetails;
