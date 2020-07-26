import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import MemberItem from './MemberItem';

function MemberList() {
  return (
    <>
      <h4>Members</h4>
      <hr />
      <ListGroup>
        <MemberItem name="Jack Sparrow" status="online" />
        <MemberItem name="Hector Barbossa" status="offline" />
      </ListGroup>
    </>
  );
}

export default MemberList;
