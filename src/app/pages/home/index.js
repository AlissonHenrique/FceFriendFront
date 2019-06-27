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
                <figure>
                  <img src={Logo} alt="logo" className="img-fluid" />
                </figure>
              </div>
              <div className="col-md-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  <span>R$ 100,00</span>. Pellentesque cursus blandit lacus,
                  quis consectetur neque
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
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
                <div className="col">
                  <img src={Right} alt="Right" className="img-fluid" />
                </div>
                <div className="col">
                  <img src={Friend} alt="Friend" className="img-fluid" />
                  <h2>1. Indique alunos</h2>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
                <div className="col">
                  <img src={Right} alt="Right" className="img-fluid" />
                </div>
                <div className="col">
                  <img src={Price} alt="Price" className="img-fluid" />
                  <h2>1. Receba seu crédito</h2>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <br />
                  <br />

                  <center>
                    <Link to="/signup">
                      <img src={Btn3} alt="" />
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/signin">
                      <img src={Btn4} alt="" />
                    </Link>
                  </center>
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
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
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
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
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
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
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
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
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
              <div className="col">
                <a href="/">Regulamento</a>
              </div>
              <div className="col">
                <a href="/">Cadastro</a>
              </div>
              <div className="col">
                <a href="/">Dúvidas</a>
              </div>
              <div className="col">
                <a href="/">Fale Conosco</a>
              </div>
              <div className="col-md-12">
                <p>
                  Lorem ipsum at platea ullamcorper lorem luctus pharetra
                  pulvinar vulputate, interdum fames semper proin senectus vel
                  torquent ac, vehicula semper fringilla hac duis eros sem
                  donec. magna donec ligula justo netus convallis pharetra
                  venenatis suspendisse habitasse, platea suscipit ad taciti
                  urna metus egestas proin tempus, purus consectetur lacinia
                  ullamcorper himenaeos auctor senectus ad. pretium fusce rutrum
                  ornare scelerisque ornare.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="box-five">
          <div className="container">
            <div className="row">
              <div className="col">
                FCE - Faculdade Campos Elíseos - www.fce.edu.br | © Copyright
                2018
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
