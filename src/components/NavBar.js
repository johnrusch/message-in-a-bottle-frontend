import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../png/message-in-a-bottle-logo.png"

class NavBar extends Component {
  
  render() {
    const currentUser = this.props.currentUser
    const loggedIn = !!this.props.currentUser.id
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
          <Link className="navbar-brand" to="/login">
            <img src={logo} alt="message in a bottle logo"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {loggedIn ? (<div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/dashboard">
                  Dashboard <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/journal">
                  My Journal
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/mailbox"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  My Messages
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/dashboard/mailbox/inbox">
                    Inbox
                  </Link>
                  <Link className="dropdown-item" to="/dashboard/mailbox/outbox">
                    Sent Messages
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/dashboard/mailbox/message-form">
                    New Message
                  </Link>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              {/* {loggedIn ? (
                <a className="item">Welcome {currentUser.username}</a>
              ) : null} */}
              {loggedIn ? (
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    <div onClick={() => {
                      this.props.handleLogout();
                    }}
                    className="ui primary button"
                    >
                    Log Out
                    </div>
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link to="/login" className="nav-item">
                    <div className="nav-link">Sign In</div>
                  </Link>
                </li>
              )}
              {/* <li class="nav-item">
                <Link class="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link class="nav-link btn btn-primary" to="/signup">
                  Start Here
                </Link>
              </li> */}
            </ul>
          </div>) : null }
        </nav>  
      </div>
    );
  }
}

export default NavBar;
