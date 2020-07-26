import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import HomeHeader from './HomeHeader/HomeHeader';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';

function Home() {
  return (
    <>
      <HomeHeader />
      <Container fluid>
        <Switch>
          <Redirect exact from="/home" to="/home/login" />
          <Route path="/home/login" component={LoginForm} />
          <Route path="/home/register" component={RegisterForm} />
        </Switch>
      </Container>
    </>
  );
}

export default Home;
