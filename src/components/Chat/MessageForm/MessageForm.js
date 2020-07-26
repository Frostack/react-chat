import React, { useState } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { sendMessage } from '../../../actions/chatActions';

function MessageForm({ sendMessage }) {
  const [message, setMessage] = useState('');

  const handleSend = e => {
    e.preventDefault();
    if (message) sendMessage(message);
  };

  return (
    <Form className="pt-1" onSubmit={handleSend}>
      <Row>
        <Col xs={11}>
          <Form.Group>
            <Form.Control
              placeholder="Enter Message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Button type="submit" className="float-right">
            Send
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

const mapDispatchToProps = {
  sendMessage,
};

export default connect(null, mapDispatchToProps)(MessageForm);
