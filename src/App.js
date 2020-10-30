import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Work from './components/Work/Work';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
function App() {
  return (
      <div id="bg-img">
        <Router>
        <Header/>
          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/" component={Home} />
            <Route path="/about">
              <About/>
              <Footer />
            </Route>
            <Route path="/work">
              <Work/>
              <Footer />
            </Route>
            <Route path="/blog">
              <Blog />
              <Footer />
            </Route>
            <Route path="/contact">
              <Contact />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
