import React, { Component } from 'react';
import { logout } from '../../../services/auth';
import { Link, withRouter } from 'react-router-dom';
import { getUsername } from '../../../services/auth';
import './styles.css';

class Header extends Component {
  state = {
    name: getUsername(),
  };
  handleLogout = () => {
    logout();
    this.props.history.push('/');
  };
  render() {
    return (
      <div className="fundo">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <ul className="nav">
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    Indicar Amigo
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/list" className="nav-link">
                    Amigos indicados
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-user" /> {this.state.name}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <button className="dropdown-item" onClick={this.handleLogout}>
                    Sair
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
