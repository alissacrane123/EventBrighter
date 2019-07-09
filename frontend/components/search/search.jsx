import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: '', event_type: '' }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);

    this.handleDrop = this.handleDrop.bind(this);
  } 

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  handleSelect(e) {
    this.setState({ event_type: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchWithFilters(this.state);
    this.props.history.push('/events');
  }

  handleDrop() {
    let ele = document.getElementById("dropdown");
    ele.classList.toggle("show");
  }


  render() {
    let { events, fetchWithFilters } = this.props;

    const eventTypes = ['food', 'music'].map(event => (
      <div className="event-type"  value={event} key={event} >{event}</div>
    ))

    

    return (
      <div className="search-form-cont">
        <div className="search-form">

          <div className="search-input-cont">
            <div className="search-input-label">Looking for</div>

            <input id="event" className="search-input" onClick={this.handleDrop} onChange={this.handleChange('event_type')} placeholder="Event Type" value={this.state.event_type} />
            <div id="dropdown" className="drop-content">
              { eventTypes } 
            </div>
          </div>

          <div className="search-input-cont">
            <div className="search-input-label">In</div>
            <input className="search-input" onChange={this.handleChange('city')} value={this.state.city} placeholder={'Enter your city'}/>
          </div>

          <div className="search-button-cont">
            <div className="search-date-cont">
              <div className="search-input-label">On</div>
              <input className="search-input" placeholder={'Any date'} />
            </div>
            <div className="search-button2-cont">
              <button className="search-button" onClick={this.handleSubmit}>
                <img className="search-icon" src={'search-3-xxl.png'} alt=""/>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;





{/* <select onChange={this.handleSelect} placeholder="Event Type" value={this.state.event_type}>
              <option value={''}>Event Type</option>
              { eventTypes }
            </select> */}