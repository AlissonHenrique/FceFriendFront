import React, { Fragment } from "react";
import { Form, Input } from "@rocketseat/unform";
import Logo from "../../../assets/img/logofechouganhou.png";
import Header from "../../components/Header";

export default function Voucher() {
  function handleSubmit(data) {
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
              <Form onSubmit={handleSubmit}>
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
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
