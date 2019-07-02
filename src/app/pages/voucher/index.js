import React, { Fragment, useState } from "react";
import { Form, Input } from "@rocketseat/unform";
import Logo from "../../../assets/img/logofechouganhou.png";
import Header from "../../components/Header";
import api from "../../../services/api";
import * as Yup from "yup";
export default function Voucher() {
  const [message, setMessage] = useState("");

  const schema = Yup.object().shape({
    name: Yup.string().required("*Preencha o campo Nome"),
    email: Yup.string()
      .email("*Preencha com um email válido")
      .required("*Preencha o campo email"),
    agencia: Yup.string().required("*Preencha o campo agencia"),
    conta: Yup.string().required("*Preencha o campo conta")
  });

  async function handleSubmit(data) {
    try {
      const response = await api.post("/mail", data);
      console.log(response);
      setMessage("Obrigado. Em breve entraremos em contato");
    } catch (err) {
      setMessage(err);
      console.log(err);
    }
  }

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
              <h4>
                Preencha seu dados para que possamos depositar em sua conta
              </h4>
              <br />
              <Form onSubmit={handleSubmit} schema={schema}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail6">Nome Completo</label>
                    <Input name="name" className="form-control" />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="">Email</label>
                    <Input name="email" className="form-control" />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="agencia">Agencia</label>
                    <Input name="agencia" className="form-control" />
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="conta">Conta</label>
                    <Input name="conta" className="form-control" />
                  </div>
                </div>

                <button type="submit">Enviar</button>
              </Form>
              <br />
              {message.length > 1 ? (
                <p className="alert alert-danger text-center">{message}</p>
              ) : (
                <span />
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
