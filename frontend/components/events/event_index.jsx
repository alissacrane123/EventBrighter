import React from 'react';
import LoginNavbarContainer from '../navbar/login_navbar_container'
import LogoutNavbarContainer from '../navbar/logout_navbar_container';
import EventIndexItem from './event_index_item'

class EventIndex extends React.Component {


  render() {
    let { events, filters, currentUser } = this.props;

    if (events.length === 0) return null;

    let loginNav = <LoginNavbarContainer />
    let logoutNav = <LogoutNavbarContainer />

    events = events.map(event => (
      <EventIndexItem key={event.id} event={event} />
    ))

    return (
      <div className="event-index-cont">
        { currentUser ? logoutNav : loginNav }

        <div className="events-cont">

          { events }

        </div>
      </div>
    )
  }
}

export default EventIndex;