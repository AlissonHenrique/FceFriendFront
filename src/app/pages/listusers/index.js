import React, { Component, Fragment } from "react";
import Header from "../../components/Header";
import Logo from "../../../assets/img/logofechouganhou.png";
import api from "../../../services/api";
export default class Listusers extends Component {
  state = {
    dados: []
  };
  componentDidMount() {
    this.load();
  }

  load = async () => {
    try {
      const response = await api.get("/users");

      this.setState({ dados: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Fragment>
        <Header />
        <center>
          <img src={Logo} alt="logo" className="img-fluid" />
        </center>
        <div className="container">
          <div className="row">
            <div className="col-md-12 card">
              <div className="card-body">
                <table className="table table-hover table-responsive">
                  <thead>
                    <tr>
                      <th scope="col">Registered users</th>
                      <th scope="col">Friends</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.dados.map(val => (
                      <tr key={val._id}>
                        <td>{val.name}</td>
                        <td>{val.user_id}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
