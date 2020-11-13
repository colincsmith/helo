import React, {Component} from 'react'
import './App.css';
import routes from './routes'
import Nav from './components/Nav'
import {withRouter} from 'react-router'

class App extends Component {
  render(){
  return (
    <div className="App">
      {this.props.location.pathname !== '/'? <Nav /> : <div></div>}
      {routes}
    </div>
  );
  }
}

export default withRouter(App);
