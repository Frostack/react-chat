import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

import { registerUser } from '../../../actions/userActions';

function RegisterForm({ registerUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (username && password) registerUser(username, password);
  };

  return (
    <Row className="justify-content-center">
      <Col xs="12" md="6" lg="4">
        <h5 className="text-center">Chat Sign up</h5>
        <hr />
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              placeholder="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block type="submit">
            Sign up
          </Button>
          <Form.Text className="my-2">
            already have an account? <Link to="/home/login">login</Link>
          </Form.Text>
        </Form>
        <Alert variant="danger">User is already registered!</Alert>
      </Col>
    </Row>
  );
}

const mapDispatchToProps = {
  registerUser,
};

export default connect(null, mapDispatchToProps)(RegisterForm);
