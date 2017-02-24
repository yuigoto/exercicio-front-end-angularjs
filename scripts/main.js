/**
 * EXERCÍCIO ANGULAR :: Main
 * ======================================================================
 * JS principal da aplicação.
 * ----------------------------------------------------------------------
 * @package     br.com.yuiti.exercicioangular
 * @author      Fabio Y. Goto <lab@yuiti.com.br>
 * @version     0.0.2
 */
// Inicializa app
var gbDashboard = angular.module(
    "dashboardApp",
    [
        "chart.js"
    ]
);

// Diretiva de teste
gbDashboard.directive(
    "testDirective",
    function()
    {
        return {
            restrict: "C",
            template: "This is just a test directive."
        }
    }
);