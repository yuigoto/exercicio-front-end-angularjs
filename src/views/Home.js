/**
 * EXERCÍCIO FRONT END REACT : Dummy
 * ======================================================================
 * Componente dummy, use-o para começar um novo.
 * 
 * Contém (quase) todos os métodos do lifecycle do React.
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
export default class Dummy extends Component {
  /**
   * Construtor.
   * 
   * @param {object} props 
   *    Objeto com as propriedades do componente
   */
  constructor(props) {
    super(props);

    // Estado inicial
    this.state = {};
  }


  // Métodos do componente
  // --------------------------------------------------------------------

  /**
   * Retorna a classe do componente, pode ser usada para juntar classes 
   * pré-definidas com classes definidas nas props.
   * 
   * @returns {string}
   */
  componentClass() {
    const { props } = this;

    // Classe de base
    let classes = ["default"];

    // Sem props? Retorna classe base
    if (!props.className) return classes.join(" ");

    // Classe é array ou string?
    if (Array.isArray(props.className)) {
      classes = classes.concat(props.className);
    } else {
      classes.push(props.className);
    }
    return classes.join(" ");
  }

  // React lifecycle
  // --------------------------------------------------------------------

  /**
   * Chamado imediatamente antes ser montado.
   */
  componentWillMount() {
  }

  /**
   * Chamado imediatamente após ser montado.
   */
  componentDidMount() {
  }

  /**
   * Chamado imediatamente antes do componente ser desmontado/destruído.
   */
  componentWillUnmount() {
  }

  /**
   * Invocado antes de um componente montado receber novas props, é utilizado 
   * quando o componente deve sofrer updates como resposta à mudanças nas 
   * props.
   * 
   * @param {object} nextProps 
   *    Novas props do componente
   */
  componentWillReceiveProps(nextProps) {
  }

  /**
   * Utilize para fazer com que o React saiba se o output do componente é, 
   * ou não, afetado pela mudança no estado ou props.
   * 
   * Ao retornar `false`, este método previne a re-renderização do componente.
   * 
   * @param {object} nextProps 
   *    Novas props do componente
   * @param {object} nextState 
   *    Próximo estado do componente
   * @returns {boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  /**
   * Invocado logo após renderização, quando novos props/state estão sendo 
   * recebidos.
   * 
   * Utilize para realizar algum preparo antes que um update ocorra.
   * 
   * Não é executado se `shouldComponentUpdate` retornar `false`.
   * 
   * @param {object} nextProps 
   *    Novas props do componente
   * @param {object} nextState
   *    Próximo estado do componente
   */
  componentWillUpdate(nextProps, nextState) {
  }

  /**
   * Invocado logo após o update, utilize este método para operar no DOM ou 
   * realizar requests.
   * 
   * Não é executado se `shouldComponentUpdate` retornar `false`.
   * 
   * @param {object} prevProps 
   *    Props anteriores  
   * @param {object} prevState 
   *    Estado anterior
   */
  componentDidUpdate(prevProps, prevState) {
  }

  /**
   * Renderiza componente.
   * 
   * @returns {XML}
   */
  render() {
    const { props, state } = this;

    // Extrai dados
    const res = Data.result;

    return (
      <Container>
        <h1 className={"display-4"}>Dashboard</h1>
        <h5 className={"text-muted"}>
          Por favor, selecione uma edição da Glambox
        </h5>
        <Row>
          <Col lg={4}>
            <NavLink to={`/edition/${res.editionId}`}>
              <i className={"fa fa-dropbox"}/> Edição {res.editionId}
            </NavLink>
          </Col>
        </Row>
      </Container>
    );
  }
}
