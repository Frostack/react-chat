import React from 'react';
import { Route } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ChatNavbar from './ChatNavbar/ChatNavbar';
import ChannelList from './ChannelList/ChannelList';
import MessageList from './MessageList/MessageList';
import MemberList from './MemberList/MemberList';
import MessageForm from './MessageForm/MessageForm';

function Chat() {
  return (
    <div className="vw-100 vh-100 d-flex flex-column">
      <ChatNavbar />
      <Route exact path="/chat/:currentChannel">
        <Row className="mx-1 flex-grow-1 pt-3">
          <Col xs="2">
            <ChannelList />
          </Col>
          <Col>
            <div className="d-flex flex-column h-100">
              <h4 className="m-0">Messages</h4>
              <hr className="w-100" />
              <MessageList />
              <MessageForm />
            </div>
          </Col>
          <Col xs="2">
            <MemberList />
          </Col>
        </Row>
      </Route>
    </div>
  );
}

export default Chat;
