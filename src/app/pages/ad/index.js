import React, { Fragment, useState } from "react";
import { Form, Input,Select } from "@rocketseat/unform";
import { withRouter } from "react-router-dom";
//import * as Yup from "yup";
import { getSetId, getUsername } from "../../../services/auth";
import Header from "../../components/Header";
import api from "../../../services/api";
import "./styles.css";
import { phoneMask, cpfMask } from "../../../utils/masks";
import Logo from "../../../assets/img/logofechouganhou.png";
import {json_cidades,options} from '../signup/estados_cidades'


function buscaCidades(e){

  document.querySelector("#cidade").innerHTML = '';
  var cidade_select = document.querySelector("#cidade");

  var num_estados = json_cidades.estados.length;

  var j_index = -1;

  // aqui eu pego o index do Estado dentro do JSON
  for(var x=0;x<num_estados;x++){
     if(json_cidades.estados[x].sigla === e){
        j_index = x;

     }
  }
  if(j_index !== -1){
   // aqui eu percorro todas as cidades e crio os OPTIONS

     json_cidades.estados[j_index].cidades.forEach(function(cidade){


        var cid_opts = document.createElement('option');
        cid_opts.setAttribute('value',cidade)
        cid_opts.innerHTML = cidade;
        cidade_select.appendChild(cid_opts);

     });

  }else{
     document.querySelector("#cidade").innerHTML = '';

  }
}
function Ad(props) {
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [message, setMessage] = useState("");
  const [cidade, setCidade] = useState("");


  function handleSubmit(data, { resetForm }) {
    const id = getSetId();
    const userName = getUsername();
    const obj = { ...data, user_id: id, user_name: userName ,city:cidade};

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
                    <Select
                        onChange={ e => buscaCidades(e.target.value)}
                        name="state"
                        placeholder="Seu estado"
                        className="form-control"
                        options={options} />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="city">Cidade</label>
                    <select
                        id='cidade'
                        type="text"
                        name="city"
                        value={cidade}
                        onChange={e => setCidade(e.target.value)}
                        placeholder="Sua cidade"
                        className="form-control"

                      >
                         </select>
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
