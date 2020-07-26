import React from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { logoutUser } from '../../../actions';

function ChatNavbar({ logoutUser }) {
  const handleLogout = () => {
    logoutUser();
  };

  return (
    <Navbar className="bg-secondary">
      <Navbar.Brand className="text-white">React Chat</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Item>
          <Navbar.Text className="text-white-50">Jack Sparrow |</Navbar.Text>
        </Nav.Item>
        <Nav.Item className="ml-1">
          <Navbar.Text className="text-white">
            <strong style={{ cursor: 'pointer' }} onClick={handleLogout}>
              Logout
            </strong>
          </Navbar.Text>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

const mapDispatchToProps = {
  logoutUser,
};

export default connect(null, mapDispatchToProps)(ChatNavbar);
