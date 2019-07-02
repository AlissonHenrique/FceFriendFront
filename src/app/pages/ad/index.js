import React, { Fragment, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { withRouter } from 'react-router-dom';
import * as Yup from 'yup';
import { getSetId, getUsername } from '../../../services/auth';
import Header from '../../components/Header';
import api from '../../../services/api';
import './styles.css';
import { phoneMask, cpfMask } from '../../../utils/masks';
import Logo from '../../../assets/img/logofechouganhou.png';

const schema = Yup.object().shape({
  name: Yup.string().required('Preencha o campo Nome'),
  email: Yup.string()
    .email('Preencha com um email válido')
    .required('Preencha o campo email'),
  phone: Yup.string('Preencha com um número válido').required('Preencha o campo Celular'),
  cpf: Yup.string()
    .min(14, 'Preencha o campo CPF')
    .required('Preencha o campo CPF'),
});

function Ad(props) {
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [message, setMessage] = useState('');
  function handleSubmit(data, { resetForm }) {
    const id = getSetId();
    const userName = getUsername();
    const obj = { ...data, user_id: id, user_name: userName };

    api.post('/ads', obj).then(
      (response) => {
        console.log(response);
        props.history.push('/list');
      },
      (error) => {
        setMessage(error.response.data.error);
        resetForm();
      },
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
              <Form onSubmit={handleSubmit} schema={schema}>
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

                  <div className="form-group col-md-12">
                    {message.length > 1 ? (
                      <p className="alert alert-danger text-center">{message}</p>
                    ) : (
                      <span />
                    )}
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
export default withRouter(Ad);
