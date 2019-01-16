import React, { Component } from 'react';

class NewColorForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', hex: '#FFFFFF' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addColor(this.state);
    this.setState({ name: '', hex: '#FFFFFF' });
    this.props.history.push('/');
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="colorName">Color Name:</label>
        <input
          id="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor="hex">Hex:</label>
        <input
          type="color"
          id="hex"
          name="hex"
          value={this.state.hex}
          onChange={this.handleChange}
        />
        <button type="submit">Add a new Color</button>
      </form>
    );
  }
}

export default NewColorForm;
