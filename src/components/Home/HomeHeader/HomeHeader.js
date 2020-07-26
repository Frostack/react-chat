import React from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

function HomeHeader() {
  return (
    <Jumbotron className="rounded-0">
      <h1 className="display-3">ReactJS Chat</h1>
      <p className="lead">Real-time Chat Application Powered with React and React-bootstrap</p>
      <p>For more information visit website</p>
      <Link to="/chat/general">
        <Button variant="info">More Info</Button>
      </Link>
    </Jumbotron>
  );
}

export default HomeHeader;
