import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="App">
          <Switch>
            <Route path='/Main' component={Main} />
            <Route path='/Projects' component={Projects} />
            <Route path='/Resume' component={Resume} />
            <Route path='/Contact' component={Contact} />
            <Redirect to='/Main' />
          </Switch>
        </div>
        <Footer />
      </Router>
    )
  }
}

export default App;
