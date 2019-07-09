import React from 'react';

class EventIndexItem extends React.Component {

  render() {
    let { event } = this.props;

    return (
      <div className="event-item-cont">
        { event.title }
      </div>
    )
  }
}

export default EventIndexItem;