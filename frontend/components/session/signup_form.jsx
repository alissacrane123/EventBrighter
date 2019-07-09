import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', fname: '', lname: '', b_day: '', b_month: '', b_year: '', city: '', state: '' };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value })
  }

  handleSubmit(e)  {
    e.preventDefault();
    this.props.signup(this.state)
      .then(this.props.closeModal)
  }

  render() {
    let errors = this.props.errors.join('. ');

    return (
      <div className="signup-form-cont">
        <form className="signup-form" onSubmit={this.handleSubmit}>

          <div className="signup-head-cont">
            <div className="signup-head">Sign Up</div>
          </div>
          
          <div className="signup-input-cont">
            <div className="signup-names">
              <input className="signup-name" onChange={this.handleChange('fname')} value={this.state.fname} placeholder="first"/>
              <input className="signup-name" onChange={this.handleChange('lname')} value={this.state.lname} placeholder="last"/>
            </div>
          </div>

          <div className="signup-input-cont">
            <input className="signup-input" onChange={this.handleChange('email')} value={this.state.email} placeholder="email"/>
          </div> 

          <div className="signup-input-cont"> 
            <input className="signup-input" onChange={this.handleChange('password')} value={this.state.password} placeholder="password"/>
          </div> 

          <div className="signup-input-cont"> 
            <input className="signup-input" onChange={this.handleChange('city')} value={this.state.city} placeholder="city"/>
          </div> 

          <div className="signup-input-cont"> 
            <input className="signup-input" onChange={this.handleChange('state')} value={this.state.state} placeholder="state"/>
          </div> 

          <div className="signup-birthday-cont">

          </div>

          <div className="errors-cont">
            {errors}
          </div>


          <div className="signup-input-cont">
            <input className="signup-button" type="submit" value="signup" />
          </div>
        </form>
        
      </div>
    )
  }
}

export default SignupForm