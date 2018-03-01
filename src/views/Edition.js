/**
 * EXERCÍCIO FRONT END REACT : Edition
 * ======================================================================
 * View de Edição.
 * ----------------------------------------------------------------------
 * @author      Fabio Y. Goto <lab@yuiti.com.br>
 */

// Importa libs
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Container, 
  Row, 
  Col
} from "reactstrap";

// Importa local
import Data from "assets/data/example-data.js";

// Classe
export default class Edition extends Component {
  /**
   * Construtor.
   * 
   * @param {object} props 
   *    Objeto com as propriedades do componente
   */
  constructor(props) {
    super(props);

    // Estado inicial
    this.state = {
      editionId: null
    };

    // Realiza binding para escopo do componente
    this.setEditionId = this.setEditionId.bind(this);
    this.subscriberCounts = this.subscriberCounts.bind(this);
    this.buildChildItem = this.buildChildItem.bind(this);
  }


  // Métodos do componente
  // --------------------------------------------------------------------

  buildChildItem(data) {
    console.log(data);
    return data.groups.map((item, index) => {
      let path = "/edition/" + this.state.editionId + "/item/" + item.id;

      return (
        <Col key={`${index}-${item.id}`} md={2} lg={3}>
          <h5>{item.name}</h5>
          <p><strong>Assinantes: </strong>{item.subscribers}</p>
          <NavLink to={path}>
            Go
          </NavLink>
        </Col>
      );
    });
  }

  /**
   * Define o Edition Id para o menu.
   */
  setEditionId() {
    // Extrai resultados
    const { result } = Data;

    // Define state
    this.setState({
      editionId: result.editionId
    });
  }

  subscriberCounts() {
    // Extrai resultados
    const { result } = Data;

    let list = [];
    let total = 0;

    for (let i = 0; i < result.children.length; i++) {
      let item = result.children[i];

      total += item.subscriberCount;

      list.push({
        id: item.group.id, 
        name: item.group.name, 
        description: item.group.description, 
        subscribers: item.subscriberCount
      });
    }

    return {
      groups: list, 
      totalSubscribers: total
    };
  }

  // React lifecycle
  // --------------------------------------------------------------------

  /**
   * Chamado imediatamente após ser montado.
   */
  componentDidMount() {
    // Se editionId for null
    if (this.state.editionId === null) {
      this.setEditionId();
    }
  }

  /**
   * Renderiza componente.
   * 
   * @returns {XML}
   */
  render() {
    const { props, state } = this;

    const { match, location, history } = props;
    
    if (match.params.id === undefined) {
      return (
        <Container>
          <h1 className={"display-4"}>Dashboard</h1>
          <h5 className={"text-muted"}>
            Forneça um ID válido de edição.
          </h5>
          <NavLink to={"/"}>
            <i className={"fa fa-chevron-left"}/>&nbsp;Voltar
          </NavLink>
        </Container>
      );
    }

    // Extrai dados
    const res = Data.result;

    if (state.editionId === null) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }

    let subs = this.subscriberCounts();
 
    return (
      <Container>
        <h1 className={"display-4"}>Dashboard</h1>
        <h5 className={"text-muted"}>
          Por favor, selecione uma edição da Glambox
        </h5>

        <div>
        <h5>Glambox</h5>
        <h6>Edition ID: {state.editionId}</h6>
        <p className={"lead"}>
          <strong>Total de Assinantes</strong>: {subs.totalSubscribers}
        </p>

        <hr/>
        <Row>
          {this.buildChildItem(subs)}
        </Row>
        </div>
      </Container>
    );
  }
}
