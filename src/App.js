import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import ColorList from './ColorList.js';
import ColorDetails from './ColorDetails.js';
import NewColorForm from './NewColorForm.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        { name: 'red', hex: '#ff0000' },
        { name: 'green', hex: '#008000' },
        { name: 'blue', hex: '#0000ff' }
      ]
    };
  }

  addColor = color => {
    this.setState(currState => ({
      colors: [...currState.colors, color]
    }));
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/colors"
            render={() => <ColorList colorData={this.state.colors} />}
          />
          <Route
            exact
            path="/colors/new"
            render={routeProps => (
              <NewColorForm {...routeProps} addColor={this.addColor} />
            )}
          />
          <Route
            path="/colors/:color"
            render={routeProps => (
              <ColorDetails {...routeProps} colorData={this.state.colors} />
            )}
          />
          <Redirect to="/colors" />
        </Switch>
      </div>
    );
  }
}

export default App;
