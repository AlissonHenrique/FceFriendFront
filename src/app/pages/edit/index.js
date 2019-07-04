import React, { useState, useEffect, Fragment } from "react";
import { Form, Input, Select } from "@rocketseat/unform";
import api from "../../../services/api";
import Header from "../../components/Header";
export default function Edit({ history, match }) {
  const [data, setData] = useState({});

  const options = [
    { id: "Aguardando", title: "Aguardando" },
    { id: "Aguardando pagamento", title: "Aguardando pagamento" },
    { id: "Pago", title: "Pago" }
  ];
  const option = [
    { id: "Aguardando", title: "Aguardando" },
    { id: "Retirar Voucher", title: "Retirar Voucher" }
  ];

  async function handleSubmit(data) {
    await api.postOrPut("/ads", match.params.id, data);

    history.push("/listfriend");
  }

  useEffect(() => {
    async function loadData() {
      const { id } = match.params;
      const response = await api.get(`/ads/${id}`);

      setData(response.data);
    }

    if (match.params.id) {
      loadData();
    }
  }, [match.params, match.params.id]);

  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-12 card">
            <div className="card-body">
              <Form initialData={data} onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label htmlFor="inputEmail4">Nome</label>
                    <Input name="name" className="form-control" />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="dataVencimento">Data do vencimento</label>
                    <Input name="dataVencimento" className="form-control" />
                  </div>

                  <div className="form-group col-md-4">
                    <label htmlFor="inputEmail4">Status</label>
                    <Select
                      name="status"
                      options={options}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputEmail4">Voucher</label>
                    <Select
                      name="voucher"
                      options={option}
                      className="form-control"
                    />
                  </div>
                </div>

                <button type="submit">Enviar</button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
