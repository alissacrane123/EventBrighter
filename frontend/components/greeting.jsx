import React from 'react';
import LoginNavbarContainer from './navbar/login_navbar_container';
import LogoutNavbarContainer from './navbar/logout_navbar_container';
import SearchContainer from './search/search_container';
import SignupForm from './session/signup_form';

class Greeting extends React.Component {
  handleDrop() {
    let ele = document.getElementById("dropdown");
    if (ele.classList.contains("show")) {
      ele.classList.toggle("show");
    }
  }

  render() {
    let { currentUser, signup  } = this.props;
    let loginNav = <LoginNavbarContainer />
    let logoutNav = <LogoutNavbarContainer />

    // let loginMain = <SignupForm signup={signup} />
    // let logoutMain = <div>Feed</div>

    return(
      <div className="greet-cont" >
        { currentUser ? logoutNav : loginNav }
        
        <div className="greet-img-cont" onClick={this.handleDrop}>
          <img className="greet-img" src={'background.jpg'}/>
        </div>

        <div className="greet-search-cont">
          {/* <div className="greet-search"> */}
            {/* <div className="greet-search-box"> */}
              <SearchContainer />
            {/* </div> */}
          {/* </div> */}
        </div>

        <div className="greet-main-cont">
          {/* { currentUser ? logoutMain : loginMain} */}
          <div className="greet-1-cont">
            <div className="greet-header">
              {/* What's happenin' in your HOOD? */}
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Greeting;