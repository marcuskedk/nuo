import './assets/scss/App.scss';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Home from './components/home';
import Navigation from './components/navigation';
import Page from './components/page';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Container>
          <Navigation />
          <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/whatwedo" exact>
                <Page />
            </Route>
            <Route path="/maintainable" exact>
                <Page />
            </Route>
            <Route path="/getintouch" exact>
                <Page />
            </Route>
          </Switch>
        </Container>
      </Router>
    </Fragment>
  );
}

export default App;
