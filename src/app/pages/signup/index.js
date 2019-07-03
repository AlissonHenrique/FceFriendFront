import React, { useState, Fragment } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { withRouter } from 'react-router-dom';
import * as Yup from 'yup';
import api from '../../../services/api';
import './styles.css';
import { phoneMask, cpfMask } from '../../../utils/masks';
import Logo from '../../../assets/img/logofechouganhou.png';

import Navbar from '../../components/Navbar';

function Signup(props) {
  const { history } = props;
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [message, setMessage] = useState('');

  const schema = Yup.object().shape({
    name: Yup.string().required('*Preencha o campo Nome'),
    email: Yup.string()
      .email('*Preencha com um email válido')
      .required('*Preencha o campo email'),
    phone: Yup.string('*Preencha com um número válido').required('*Preencha o campo Celular'),
    cpf: Yup.string()
      .min(14, '*Preencha o campo CPF')
      .required('*Preencha o campo CPF'),
    state: Yup.string()
      .min(2, '*Preencha o campo Estado')
      .required('*Preencha o campo Estado'),
    city: Yup.string().required('*Preencha o campo Cidade'),
  });

  function handleSubmit(data) {
    api.post('/users', data).then(
      (response) => {
        console.log(response);
        history.push('/signin');
      },
      (error) => {
        console.log(error.response.data.error);
        setMessage(error.response.data.error);
      },
    );
  }
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
                <Form onSubmit={handleSubmit} schema={schema}>
                  <br />

                  <h1>Cadastro</h1>
                  <p>Dados Pessoais</p>
                  <div className="form-group">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Nome completo"
                      className="form-control"
                    />
                    <span>&nbsp;</span>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <Input
                        type="text"
                        name="cpf"
                        value={cpfMask(cpf)}
                        onChange={e => setCpf(e.target.value)}
                        placeholder="Seu CPF"
                        className="form-control"
                      />
                      <span>&nbsp;</span>
                    </div>
                    <div className="form-group col-md-6">
                      <Input
                        type="text"
                        name="phone"
                        value={phoneMask(phone)}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="Seu celular"
                        className="form-control"
                      />
                      <span>&nbsp;</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Seu e-mail"
                      className="form-control"
                    />
                    <span>&nbsp;</span>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <Input
                        type="text"
                        name="state"
                        placeholder="Seu estado"
                        className="form-control"
                      />
                      <span>&nbsp;</span>
                    </div>
                    <div className="form-group col-md-6">
                      <Input
                        type="text"
                        name="city"
                        placeholder="Sua cidade"
                        className="form-control"
                      />
                      <span>&nbsp;</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <Input
                      type="password"
                      name="password"
                      placeholder="Senha secreta"
                      className="form-control"
                    />
                  </div>
                  {message.length > 1 ? (
                    <p className="alert alert-danger text-center">{message}</p>
                  ) : (
                    <span />
                  )}
                  <button type="submit">
                    Criar conta
                    {' '}
                    <i className="fas fa-chevron-right" />
                  </button>
                </Form>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </Fragment>
  );
}

export default withRouter(Signup);
