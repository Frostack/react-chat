import React, { useRef, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';

import MessageItem from './MessageItem';

function MessageList() {
  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current.scrollIntoView();
  });

  return (
    <div className="flex-grow-1 overflow-auto">
      <ListGroup className="pr-1" style={{ contain: 'size' }}>
        <MessageItem
          user="John Wick "
          username="john"
          text="Not all treasure is silver and gold mate"
          date="11:49:32 pm 11/12/2020"
        />
        <MessageItem
          user="John Wick "
          username="john"
          text="Feel free to talk about anything here"
          date="12:45:58 pm 12/12/2020"
        />
        <MessageItem
          user="John Wick "
          username="john"
          text="Feel free to talk about anything here"
          date="12:45:58 pm 12/12/2020"
        />
        <MessageItem
          user="John Wick "
          username="john"
          text="Feel free to talk about anything here"
          date="12:45:58 pm 12/12/2020"
        />
        <MessageItem
          user="John Wick "
          username="john"
          text="Feel free to talk about anything here"
          date="12:45:58 pm 12/12/2020"
        />
        <MessageItem
          user="John Wick "
          username="john"
          text="Feel free to talk about anything here"
          date="12:45:58 pm 12/12/2020"
        />
        <MessageItem
          user="John Wick "
          username="john"
          text="Feel free to talk about anything here"
          date="12:45:58 pm 12/12/2020"
        />
        <MessageItem
          user="John Wick "
          username="john"
          text="Feel free to talk about anything here"
          date="12:45:58 pm 12/12/2020"
        />
        <MessageItem
          user="John Wick "
          username="john"
          text="Feel free to talk about anything here"
          date="12:45:58 pm 12/12/2020"
        />
        <MessageItem
          user="John Wick "
          username="john"
          text="Feel free to talk about anything here"
          date="12:45:58 pm 12/12/2020"
        />
        <MessageItem
          user="John Wick "
          username="john"
          text="Feel free to talk about anything here"
          date="12:45:58 pm 12/12/2020"
        />
        <Alert variant="danger">Relax! This is just a drill error message</Alert>
        <div ref={bottomRef}></div>
      </ListGroup>
    </div>
  );
}

export default MessageList;
