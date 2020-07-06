import React from 'react';
import './css/App.css';
import Main from './screens/Main';
import Who from './screens/Who';
import Works from './screens/Works';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Level from './screens/Level';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/who" component={Who} />
          <Route path="/works" component={Works} />
          <Route path="/level" component={Level} />
          <Route exact path="/" component={Main}/>
        </Switch>
        <Menu/>
      </Router>
    </div>
  );
}

export default App;
