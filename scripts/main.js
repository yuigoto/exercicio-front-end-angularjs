/**
 * EXERCÍCIO FRONT-END ANGULAR
 * ======================================================================
 * Arquivo JS principal.
 * ----------------------------------------------------------------------
 * @package     br.com.yuiti.exercicioangular
 * @author      Fabio Yuiti Goto <lab@yuiti.com.br>
 * @version     0.0.1
 */

// Inicializa App
var app = angular.module( "dashboardApp", [] );

// Diretiva teste
app.directive( "testDirective", function() {
    return {
        restrict: "C",
        template: "Test"
    }
} );