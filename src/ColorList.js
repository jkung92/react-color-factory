import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ColorList extends Component {
  render() {
    return (
      <div>
        <header
          style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}
        >
          <h4> Welcome to the color factory</h4>
          <Link to="/colors/new">
            <h4 style={{ color: 'white' }}>Add a color</h4>
          </Link>
        </header>
        <p> Please select a color </p>
        <div style={{ listStyleType: 'none' }}>
          {this.props.colorData.map(color => (
            <Link to={`/colors/${color.name}`}>
              <p>{color.name}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorList;
