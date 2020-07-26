import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function MessageItem({ username, user, text, date }) {
  return (
    <ListGroup.Item className="mb-2 border">
      <div>
        <div className="clearfix">
          <small className="text-muted float-right">@{username}</small>
          <strong className="m-0">{user}</strong>
        </div>
        <p className="m-0 text-secondary">{text}</p>
        <div className="clearfix">
          <small className="text-muted float-right">{date}</small>
        </div>
      </div>
    </ListGroup.Item>
  );
}

export default MessageItem;
