import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authenticate } from '../actions';

class Header extends Component {
  authButton() {
    const { isAuthenticated, authenticate } = this.props;
    const style = 'btn btn-default';

    if (isAuthenticated) {
      return <button className={style} onClick={() => authenticate(false)}>Sign Out</button>;
    }
    
    return <button className={style} onClick={() => authenticate(true)} >Sign In</button>;
  }
  render() {
    return (
      <nav className="Header navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">Resources</Link>
          </li>
        </ul>
        <div className="navbar-form">
          <div className="form-group">
            { this.authButton() }
          </div>
        </div>
      </nav>
    );
  } 
}

const mapStateToProps = ({ isAuthenticated }) => ({ isAuthenticated });
export default connect(mapStateToProps, { authenticate })(Header);