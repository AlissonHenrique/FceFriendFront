import React, { Component, Fragment } from "react";
import Header from "../../components/Header";
import api from "../../../services/api";
import { Link } from "react-router-dom";
import "./styles.css";
import Logo from "../../../assets/img/logofechouganhou.png";
import moment from "moment";

export default class ListFriend extends Component {
  state = {
    dados: [],
    info: [],
    page: 1
  };

  componentDidMount() {
    this.load();
  }
  load = async (page = 1) => {
    const response = await api.get(`/ads?&page=${page}`);
    const { docs, ...info } = response.data;
    this.setState({ dados: docs, info, page });
  };
  prevPage = () => {
    const { page } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.load(pageNumber);
  };
  nextPage = () => {
    const { page, info } = this.state;

    if (page === info.page + 1) return;

    const pageNumber = page + 1;
    this.load(pageNumber);
  };
  handleDelete = async item => {
    try {
      await api.delete(`/ads/${item}`);
      this.load();
    } catch (err) {
      console.log(err + "erro");
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
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">ALUNO</th>
                      <th scope="col">CPF</th>
                      <th scope="col">Telefone</th>
                      <th scope="col">Email</th>
                      <th scope="col">Status</th>
                      <th scope="col">Dt. Cadastro</th>
                      <th scope="col">Dt. Vencimento</th>
                      <th scope="col">Cd. Vendedor</th>
                      <th scope="col">Voucher</th>
                      <th scope="col">EDITAR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.dados.map(val => (
                      <tr key={val._id}>
                        <td>{val.name}</td>
                        <td>{val.cpf}</td>
                        <td>{val.phone}</td>
                        <td>{val.email}</td>
                        <td>
                          <div
                            className={
                              val.status === "Aguardando"
                                ? "bg-info"
                                : "" || val.status === "Aguardando pagamento"
                                ? "bg-danger"
                                : "" || val.status === "Pago"
                                ? "bg-success"
                                : ""
                            }
                          >
                            {val.status}
                          </div>
                        </td>

                        <td>{moment(val.created_at).format("DD/MM/YYYY")}</td>
                        <td>{val.dataVencimento}</td>
                        <td>{val.code}</td>
                        <td>
                          <div
                            className={
                              val.voucher === "Aguardando"
                                ? "bg-info "
                                : "bg-success "
                            }
                          >
                            <Link
                              to={
                                val.voucher === "Aguardando"
                                  ? "/list"
                                  : "/voucherstudent"
                              }
                            >
                              {val.voucher}
                            </Link>
                          </div>
                        </td>
                        <td>
                          <Link
                            to={`/addfriend/edit/${val._id}`}
                            className="btn btn-warning"
                          >
                            Editar
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="actions">
                  <button className="btn-list" onClick={this.prevPage}>
                    Anterior
                  </button>
                  <button className="btn-list" onClick={this.nextPage}>
                    Próximo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
