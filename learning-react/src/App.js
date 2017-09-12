import React, { Component } from 'react';
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Toolbar from './components/Toolbar'
import BodyItem from './components/BodyItem'
import { Container, Row, Col } from 'reactstrap'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './css/bootstrap.css'

const links = [
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About' },
  { to: '/contact', text: 'Contact' },
]

class App extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Row>
          <Col>
            <Router>
              <div>
              <Toolbar title="Project name" links={links} />
                <hr/>

                <Route exact path="/" component={Home}/>
                <Route path="/about" component={AboutUs}/>
                <Route path="/contact" component={ContactUs}/>
              </div>
            </Router>
          </Col>
        </Row>
      </Container>
    );
  }
}
const styles = {
  container: {
    paddingTop: 20
  }
}

export default App;
