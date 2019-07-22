import React, { Fragment, useState } from "react";
import { Form, Input } from "@rocketseat/unform";
import { withRouter } from "react-router-dom";
//import * as Yup from "yup";
import { getSetId, getUsername } from "../../../services/auth";
import Header from "../../components/Header";
import api from "../../../services/api";
import "./styles.css";
import { phoneMask, cpfMask } from "../../../utils/masks";
import Logo from "../../../assets/img/logofechouganhou.png";

function Ad(props) {
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [message, setMessage] = useState("");
  function handleSubmit(data, { resetForm }) {
    const id = getSetId();
    const userName = getUsername();
    const obj = { ...data, user_id: id, user_name: userName };

    api.post("/ads", obj).then(
      response => {
        console.log(response);
        props.history.push("/list");
      },
      error => {
        setMessage(error.response.data.error);
        resetForm();
      }
    );
    resetForm();
    console.log(data);
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
              <h4>Indique seus amigos!</h4>
              <p className="subtit">
                Comece a INDICAR, indique quantos amigos desejar...
              </p>
              <br />
              <Form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label htmlFor="inputEmail4">Nome</label>
                    <Input name="name" className="form-control" />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="">Email</label>
                    <Input name="email" className="form-control" />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputEmail4">Celular</label>
                    <Input
                      name="phone"
                      value={phoneMask(phone)}
                      onChange={e => setPhone(e.target.value)}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label htmlFor="cpf">CPF</label>
                    <Input
                      name="cpf"
                      value={cpfMask(cpf)}
                      onChange={e => setCpf(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="state">Estado</label>
                    <Input name="state" className="form-control" />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="city">Cidade</label>
                    <Input name="city" className="form-control" />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="code">Código do vendedor</label>
                    <Input name="code" className="form-control" />
                  </div>

                  <div className="form-group col-md-12">
                    {message.length > 1 ? (
                      <p className="alert alert-danger text-center">
                        {message}
                      </p>
                    ) : (
                      <span />
                    )}
                  </div>
                </div>

                <button className="btn-yellow" type="submit">
                  Enviar
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default withRouter(Ad);
