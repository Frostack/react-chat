import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../Home/Home';
import Chat from '../Chat/Chat';
import Easy from '../Easy/Easy';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/chat" component={Chat} />
        <Route path="/easy" component={Easy} />
      </Switch>
    </Router>
  );
}

export default App;
