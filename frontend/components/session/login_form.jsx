import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(this.props.closeModal)
  }

  handleChange(field) {
    return (e) => { this.setState({ [field]: e.target.value }) }
  }

  render() {
    let errors = this.props.errors.join('. ');
    
    return (
      <div className="login-form-cont">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div className="login-head-cont">
            <div className="login-head">Log in</div>
            <div className="login-subhead">Enter your email and password below!</div>
          </div>
          <div className="login-input-cont">
            <input className="login-input" placeholder="email address" value={this.state.email} onChange={this.handleChange('email')} />
          </div>
          <div className="login-input-cont">
            <input className="login-input" placeholder="password" value={this.state.password} onChange={this.handleChange('password')} />
          </div>
          <div className="errors-cont">
            { errors }
          </div>
          <div className="login-input-cont">
            <input className="login-button" type="submit" value="Login"/>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm;