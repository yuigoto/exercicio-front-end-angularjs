/**
 * EXERCÍCIO FRONT END REACT : Index
 * ======================================================================
 * Entrada da aplicação.
 * ----------------------------------------------------------------------
 * @author    Fabio Y. Goto <lab@yuiti.com.br>
 */

// Importa libs
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Importa local
import App from "App";
import registerServiceWorker from "registerServiceWorker";

// Render
ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>, 
  document.getElementById("root")
);
registerServiceWorker();
