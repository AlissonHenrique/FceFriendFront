import React, { Component, Fragment } from "react";
import Header from "../../components/Header";
import Logo from "../../../assets/img/logofechouganhou.png";
import api from "../../../services/api";
export default class Listusers extends Component {
  state = {
    users: '',
    friends:''
  };
  componentDidMount() {
    this.load();
  }

  load = async () => {
    try {
      const response = await api.get("/users");
      this.setState({ users: response.data.length });
      const responsef = await api.get("/ads");

      this.setState({ friends: responsef.data.docs.length });
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
                      <th scope="col">Usuarios cadastrados</th>
                      <th scope="col">Amigos Cadastrados</th>
                    </tr>
                  </thead>
                  <tbody>

                      <tr >
                        <td><center>{this.state.users}</center></td>
                        <td><center>{this.state.friends}</center></td>
                      </tr>

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
