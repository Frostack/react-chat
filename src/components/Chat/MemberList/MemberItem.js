import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

function MemberItem({ name, status }) {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      {name}
      <Badge pill variant={status === 'online' ? 'success' : 'warning'}>
        {status}
      </Badge>
    </ListGroup.Item>
  );
}

export default MemberItem;
