/**
 * EXERCÍCIO FRONT END REACT : App
 * ======================================================================
 * Root component.
 * ----------------------------------------------------------------------
 * @author    Fabio Y. Goto <lab@yuiti.com.br>
 */

// Importa libs
import React, { Component } from "react";
import { Route } from "react-router-dom";

// Importa local
import "App.css";
import Routes from "core/Routes";

// Componente
export default class App extends Component {
  applicationRoutes() {
    return Routes.map((item, key) => {
      return (
        <Route key={key} {...item}/>
      );
    });
  }

  render() {
    return (
      <div className="App">
        {this.applicationRoutes()}
      </div>
    );
  }
}
