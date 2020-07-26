import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouteMatch, Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

import { fetchChannels, fetchMembers, fetchMessages } from '../../../actions/chatActions';

const dummyData = ['General', 'Weapons', 'Combat', 'Ships', 'Treasure'];

function ChannelList({ fetchChannels, fetchMembers, fetchMessages }) {
  const routeMatch = useRouteMatch();
  const { currentChannel } = routeMatch.params;

  useEffect(() => {
    fetchChannels(currentChannel);
    fetchMembers(currentChannel);
    fetchMessages(currentChannel);
  }, [fetchChannels, fetchMembers, fetchMessages, currentChannel]);

  const renderChannels = () => {
    return dummyData.map(channel => (
      <Link to={`/chat/${channel}`}>
        <ListGroup.Item
          key={channel}
          active={channel === currentChannel}
          style={{ cursor: 'pointer' }}
        >
          {channel}
        </ListGroup.Item>
      </Link>
    ));
  };

  return (
    <>
      <h4>Channels</h4>
      <hr />
      <ListGroup>{renderChannels()}</ListGroup>
    </>
  );
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  fetchChannels,
  fetchMembers,
  fetchMessages,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
