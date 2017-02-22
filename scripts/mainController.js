/**
 * EXERCÍCIO FRONT-END ANGULAR
 * ======================================================================
 * Controlador Principal
 * ----------------------------------------------------------------------
 * @package     br.com.yuiti.exercicioangular
 * @author      Fabio Yuiti Goto <lab@yuiti.com.br>
 * @version     0.0.1
 */
angular.module( "dashboardApp", [ 'chart.js' ] ).controller( "mainController", function( $scope, $http ) {
    // Dados Gerais
    $scope.graphOverview = {
        data:   [],
        labels: [],
        data_table: {},
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        },
        total: 0
    };
    
    // Dados Pendentes
    $scope.graphPendentes = {};
    
    // Dados Perdidas
    $scope.graphPerdidas = {};
    
    // Dados Mantidas
    $scope.graphMantidas = {};
    
    // Dados Conquistadas
    $scope.graphConquistadas = {};
    
    // Inicializando dados
    $http.get('data/example-data.js').then(
        function success($response) {
            // Extrai dados
            var $data = $response.data,
                $contents = $data.result;
            
            if ($data.resultType == "SUCCESS") {
                // Variável para itens filho
                var $children = $contents.children,
                    $dash = new Dashboard(),
                    $global = ( $scope.graphOverview.total > 0 )
                        ? false : true;
                
                // Montando dados para cada índice
                for (var $i in $children) {
                    // Montando dados locais
                    var $item = $dash.sortData($children[$i]);
                    
                    // Adicionando aos dados Globais apenas se vazio
                    if ( $global === true ) {
                        $scope.graphOverview.data.push(
                            $item.info.total
                        );
                        $scope.graphOverview.labels.push(
                            $item.info.name
                        );
                        $scope.graphOverview.data_table[$item.info.name] = $item.info.total;
                        $scope.graphOverview.total += $item.info.total;
                    }
                }
            } else {
                // Limpando interface, caso nenhum dado seja encontrado
                var dash = new Dashboard();
                dash.flushUI("Houve um erro ao acessar os dados do sistema, verifique se a API está respondendo corretamente.");
            }
        },
        function error() {
            // Limpando interface, caso nenhum dado seja encontrado
            var dash = new Dashboard();
            dash.flushUI("Não foi possível coletar os dados do sistema.");
        }
    );
    
    $scope.clickError = function()
    {
        // Inicializando dados
        $http.get('data/non-existent.js').then(
            function success( $response ) {
                
            },
            function error( $response ) {
                // Limpando interface, caso nenhum dado seja encontrado
                var dash = new Dashboard();
                dash.flushUI("Não foi possível coletar os dados do sistema. Atualize a página para visualizar o conteúdo normalmente. <a href=\".\">Clique aqui para recarregar a página.</a>");
            }
        );
    };
    
    $scope.clickFetch = function() {
        // Inicializando dados
        $http.get('data/example-data.js').then(
            function success($response) {
                // Extrai dados
                var $data = $response.data,
                    $contents = $data.result;
                
                if ($data.resultType == "SUCCESS") {
                    // Variável para itens filho
                    var $children = $contents.children,
                        $dash = new Dashboard(),
                        $global = ( $scope.graphOverview.total > 0 )
                                ? false : true;
                
                    // Montando dados para cada índice
                    for (var $i in $children) {
                        // Montando dados locais
                        var $item = $dash.sortData($children[$i]);
                    
                        // Adicionando aos dados Globais apenas se vazio
                        if ( $global === true ) {
                            $scope.graphOverview.data.push(
                                $item.info.total
                            );
                            $scope.graphOverview.labels.push(
                                $item.info.name
                            );
                            $scope.graphOverview.data_table[$item.info.name] = $item.info.total;
                            $scope.graphOverview.total += $item.info.total;
                        }
                    
                        // Define dados usando switch
                        switch ($item.info.name) {
                            case "Pendentes":
                                $scope.graphPendentes = $item;
                                break;
                            case "Perdidas":
                                $scope.graphPerdidas = $item;
                                break;
                            case "Mantidas":
                                $scope.graphMantidas = $item;
                                break;
                            case "Conquistadas":
                                $scope.graphConquistadas = $item;
                                break;
                        }
                    }
                } else {
                    // Limpando interface, caso nenhum dado seja encontrado
                    var dash = new Dashboard();
                    dash.flushUI("Houve um erro ao acessar os dados do sistema, verifique se a API está respondendo corretamente.");
                }
            },
            function error() {
                // Limpando interface, caso nenhum dado seja encontrado
                var dash = new Dashboard();
                dash.flushUI("Não foi possível coletar os dados do sistema.");
            }
        );
    };
} );