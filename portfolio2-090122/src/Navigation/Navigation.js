import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';

const navigation = (props) => (
    <div className="navigationMain">
    <nav>
      <ul>
        <li><NavLink exact activeClassName="current" to='/'>Skillset</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
        
        <li><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li>
      </ul>
    </nav>
    <Switch>
        <Route exact path='/' component={About}></Route>
        <Route exact path='/about' component={Home}></Route>        
        <Route exact path='/contact' render={(routeProps) => <Contact {...routeProps} loading={props.loading} isAuthed={true} />}>
        </Route>
    </Switch>
    </div>
  );

export default navigation;