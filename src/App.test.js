/**
 * EXERCÍCIO FRONT END REACT : App.test
 * ======================================================================
 * Teste do root component.
 * ----------------------------------------------------------------------
 * @author    Fabio Y. Goto <lab@yuiti.com.br>
 */

// Importa libs
import React from "react";
import ReactDOM from "react-dom";

// Importa local
import App from "App";

// Renderiza sem dar pau?
it("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
