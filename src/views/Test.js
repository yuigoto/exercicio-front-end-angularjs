/**
 * EXERCÍCIO FRONT END REACT : Test
 * ======================================================================
 * View de teste.
 * ----------------------------------------------------------------------
 * @author      Fabio Y. Goto <lab@yuiti.com.br>
 */

// Importa libs
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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
    this.state = {
      editionId: null
    };

    // Realiza binding para escopo do componente
    this.setEditionId = this.setEditionId.bind(this);
  }


  // Métodos do componente
  // --------------------------------------------------------------------

  buildNavigation() {
    // Extract data to be used
    const { result } = Data;

    return result.children.map((item, index) => {
      // Define caminho
      let path = `/edition/${item.editionId}/view/${item.group.id}`;

      // Retorna
      return (
        <li key={index}>
          <NavLink to={path}>
            {item.group.name}
          </NavLink>
        </li>
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

    if (state.editionId === null) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
 
    return (
      <div>
        <h5>Glambox</h5>
        <h6>Edition ID: {state.editionId}</h6>
        <ul className={"gb-edition-nav"}>
          {this.buildNavigation()}
        </ul>
      </div>
    );
  }
}
