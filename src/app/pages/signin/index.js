import React, { Component, Fragment } from "react";
import { Form, Input } from "@rocketseat/unform";
import { withRouter } from "react-router-dom";
import api from "../../../services/api";
import { login, username, setId } from "../../../services/auth";
import Logo from "../../../assets/img/logofechouganhou.png";
import Navbar from "../../components/Navbar";
import "./styles.css";
class Signup extends Component {
  state = {
    message: ""
  };
  componentDidMount() {}
  handleSubmit = async data => {
    try {
      const response = await api.post("/session", data);
      const { name, _id } = response.data.user;
      login(response.data.token);
      username(name);
      setId(_id);
      this.props.history.push("/register");
    } catch (err) {
      console.log(err);
      this.setState({ message: err.response.data.error });
    }
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="cadastro">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <center>
                  <img src={Logo} alt="logo" className="img-fluid" />
                </center>
              </div>
              <div className="col-md-8 offset-md-2">
                <div className="card">
                  <br />
                  <h1>Logar</h1>
                  <Form onSubmit={this.handleSubmit}>
                    {this.state.message ? (
                      <p className="alert alert-danger text-center">
                        {this.state.message}
                      </p>
                    ) : (
                      <span />
                    )}
                    <br />
                    <div className="form-group">
                      <Input
                        type="email"
                        name="email"
                        placeholder="Seu e-mail"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <Input
                        type="password"
                        name="password"
                        placeholder="Senha secreta"
                        className="form-control"
                      />
                    </div>
                    <button type="submit">
                      Logar <i className="fas fa-chevron-right" />
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Signup);
