import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import logoFce from "../../../assets/img/logo-fce.png";

export default class Navbar extends Component {
  render() {
    return (
      <div className="fundo-nav fixed-top">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/">
                  <img src={logoFce} alt="" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                      <Link to="/" className="nav-link" href="#">
                        Inicio
                      </Link>
                    </li>
                    <li className="nav-item ">
                      <a href="/#participar" className="nav-link">
                        Como participar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/#perguntas" className="nav-link">
                        Perguntas Frequentes
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/#regulamento" className="nav-link">
                        Regulamento
                      </a>
                    </li>
                  </ul>
                  <span className="navbar-text">
                    <Link to="/signin">
                      <i className="fas fa-user" /> Logar
                    </Link>
                    &nbsp;|&nbsp;<Link to="/signup">Cadastrar</Link>
                  </span>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
