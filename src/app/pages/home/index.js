import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import ScrollableAnchor from "react-scrollable-anchor";
import Nabar from "../../components/Navbar";
import Logo from "../../../assets/img/logofechouganhou.png";
import Pen from "../../../assets/img/iconPen.png";
import Right from "../../../assets/img/iconRight.png";
import Friend from "../../../assets/img/iconFriend.png";
import Price from "../../../assets/img/iconPrice.png";
import Btn1 from "../../../assets/img/btn1.png";
import Btn2 from "../../../assets/img/btn2.png";
import Btn3 from "../../../assets/img/btn3.png";
import Btn4 from "../../../assets/img/btn4.png";
export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Nabar />
        <div className="box">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src={Logo} alt="logo" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <p>
                  Participe da campanha <br />
                  “Fechou Ganhou”. <br />
                  Ganhe <span>R$ 100,00 </span>por matrícula de suas indicações.
                  <br />
                  Participe!
                  <br />
                  <br />
                  <Link to="/signup">
                    <img src={Btn1} alt="" />
                  </Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to="/signin">
                    <img src={Btn2} alt="" />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <ScrollableAnchor id={"participar"}>
          <div className="box-two">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1>Como Participar?</h1>
                  <br /> <br /> <br />
                </div>
                <div className="col">
                  <img src={Pen} alt="Pen" className="img-fluid" />
                  <br />

                  <h2>1. Cadastre-se</h2>
                  <span>Faça seu cadastro como INDICADOR DE ALUNOS...</span>
                </div>
                <div className="col">
                  <img src={Right} alt="Right" className="img-fluid" />
                </div>
                <div className="col">
                  <img src={Friend} alt="Friend" className="img-fluid" />
                  <h2>1. Indique alunos</h2>
                  <span>
                    Comece a INDICAR, indique quantos amigos desejar...
                  </span>
                </div>
                <div className="col">
                  <img src={Right} alt="Right" className="img-fluid" />
                </div>
                <div className="col">
                  <img src={Price} alt="Price" className="img-fluid" />
                  <h2>1. Receba seu crédito</h2>
                  <span>Retire seu Voucher para receber seus créditos...</span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <br />
                  <br />
                  <p className="text-center">
                    <Link to="/signup">
                      <img src={Btn3} alt="" />
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/signin">
                      <img src={Btn4} className="img-fluid" alt="" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={"perguntas"}>
          <div className="box-tre" id="perguntas">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1>Perguntas Frequentes</h1>
                  <br />
                  <div className="accordion" id="accordionExample">
                    <div className="card">
                      <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <i className="fas fa-chevron-right" /> Como faço
                            para participar da promoção?
                          </button>
                        </h2>
                      </div>

                      <div
                        id="collapseOne"
                        className="collapse "
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          Para participar, bastar se cadastrar em nosso site e
                          começar a indicar, quanto mais indicações melhor. Cada
                          matrícula realizada, você ganha premios em dinheiro,
                          participe!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <i className="fas fa-chevron-right" /> Posso indicar
                            quantos alunos?
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          Você pode indicar quantos alunos desejar, desta forma
                          não economize seu tempo, cadastre todos os seus
                          amigos, quanto mais melhor e maiores chances de
                          ganhar. Nâo fique de fora!!
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingFour">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            <i className="fas fa-chevron-right" /> Qual o
                            periodo da promoção?
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseFour"
                        className="collapse"
                        aria-labelledby="headingFour"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          A Promoção "Fechou Ganhou" tem o período previsto para
                          inicio em 01/07/2019 a 30/09/2019, podendo ser
                          extendida pela Faculdade Campos Elíseos, como também
                          aumentando seu raio de alcance promocional. Por isso
                          não fique de fora dessa! Pegue sua agenda de contatos
                          e comece a indicar, todas as suas indicações ficaram
                          visiveis para você, como também o status de oferta e
                          compra de nossos produtos. Seja gestor de suas
                          próprias vendas, ganhe dinheiro sem sair de casa. Seja
                          bem vindo ao novo Universo de Possibilidades.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            <i className="fas fa-chevron-right" /> Como faço
                            para receber meu créditos?
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          Com a confirmação do pagamento da matrícula pelo nosso
                          Departamento Financeiro, você receberá um "Voucher"
                          para preencher e informar seus dados para serem
                          imediatamente depositados os valores de seus créditos
                          de indicações consolidadas em sua conta corrente. Você
                          terá o controle e andamento de suas indicações pelo
                          nosso Portal de Indicações.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollableAnchor>
        <div className="box-four">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <a
                  href="http://fce.edu.br/pdf/regulamentoFechou.pdf"
                  target="_blank"
                  without="true"
                  rel="noopener noreferrer"
                >
                  Regulamento
                </a>
              </div>
              <div className="col-md-3">
                <Link to="/signup">Cadastro</Link>
              </div>
              <div className="col-md-3">
                <a href="/">Dúvidas</a>
              </div>
              <div className="col-md-3">
                <a
                  href="https://api.whatsapp.com/send?phone=5511950371990"
                  target="_blank"
                  without="true"
                  rel="noopener noreferrer"
                >
                  11 9503-71990
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="box-five">
          <div className="container">
            <div className="row">
              <div className="col">
                FCE - Faculdade Campos Elíseos - www.fce.edu.br | © Copyright
                2019
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
