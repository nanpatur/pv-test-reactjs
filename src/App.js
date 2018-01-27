import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Container } from 'semantic-ui-react'

import store from './store'
import Home from './components/Home'
import Navbar from './components/Navbar'
import EventDetail from './components/EventDetail'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar/>
            <Container>
              <Route exact path='/' component={Home}/>
              <Route path='/events/:id' component={EventDetail}/>
            </Container>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
