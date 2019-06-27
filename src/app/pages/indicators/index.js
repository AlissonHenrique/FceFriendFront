import React, { Component, Fragment } from "react";
import Header from "../../components/Header";
import api from "../../../services/api";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default class Indicators extends Component {
  state = {
    dados: []
  };

  componentDidMount() {
    this.load();
  }

  load = async () => {
    try {
      const response = await api.get("/ads");
      this.setState({ dados: response.data.docs });
    } catch (err) {
      console.log(err + "erro");
    }
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-12 card">
              <div className="card-body">
                <table className="table table-hover">
                  <tbody>
                    <tr>
                      <td>
                        <ExcelFile
                          element={
                            <button className="btn btn-success">
                             
                              Exportar dados
                            </button>
                          }
                        >
                          <ExcelSheet data={this.state.dados} name="Leaves">
                            <ExcelColumn label="Aluno" value="user_name" />
                            <ExcelColumn label="Indicou" value="name" />
                            <ExcelColumn label="Email" value="email" />
                            <ExcelColumn label="Telefone" value="phone" />
                            <ExcelColumn label="CPF" value="cpf" />
                          </ExcelSheet>
                        </ExcelFile>
                      </td>
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
