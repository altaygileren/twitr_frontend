import React, { useEffect, useState } from 'react';
import Header from './components/Layout/Header/header';
import { TwitContextProvider } from './utils/TwitContext';
import { UserContextProvider } from './utils/UserContext';
import { SearchContextProvider } from './utils/SearchContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Alltwits from './components/Twits/all.twits';
import Exploreleft from './components/Layout/explore.left'
import Exploreright from './components/Layout/search.bar'
import Signup from './components/Auth/auth.signup';
import Signin from './components/Auth/auth.signin';

function App() {
  return (
    <UserContextProvider>
      <SearchContextProvider>
        <TwitContextProvider>
          <Router>
            <div className="twitrComponents">
              <Header />
              <div className="twitr-body">
                <Row>
                  <Col
                    lg={{ span: 3, order: 'first' }}
                    md={{ span: 3, order: 'first' }}
                    sm={{ span: 12, order: 'second' }}
                    xs={{ span: 12, order: 'second' }}>
                    <div className="sticky-div">
                      <Exploreleft />
                    </div>
                  </Col>
                  <Col
                    lg={{ span: 6, order: 'second' }}
                    md={{ span: 3, order: 'second' }}
                    sm={{ span: 12, order: 'first' }}
                    xs={{ span: 12, order: 'first' }}>
                    <Switch>
                      <Route component={Alltwits} exact path='/' />
                      <Route component={Signup} exact path='/signup' />
                      <Route component={Signin} exact path='/signin' />
                    </Switch>
                  </Col>
                  <Col
                    lg={{ span: 3, order: 'third' }}
                    sm={{ span: 12, order: 'first' }}
                    xs={{ span: 12, order: 'first' }}>
                    <div className="sticky-div">
                      <Exploreright />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Router>
        </TwitContextProvider>
      </SearchContextProvider>
    </UserContextProvider>
  );
}

export default App;
