/**
 * EXERCÍCIO ANGULAR :: baseController
 * ======================================================================
 * Controlador da raíz da aplicação
 * ----------------------------------------------------------------------
 * @package     br.com.yuiti.exercicioangular
 * @author      Fabio Y. Goto <lab@yuiti.com.br>
 * @version     0.0.2
 */
gbDashboard.controller(
    "baseController",
    function( $scope, $http, $rootScope, baseService, BASE )
    {
        $scope.data = baseService.fetchData().then(function(data) {
            return data;
        });
        
        $scope.loadOverview = function()
        {
            if ( !$rootScope.data ) {
                console.log( 'A' );
                baseService.fetchData().then(function (data) {
                    $rootScope.data = data;
                    
                    $scope.overviewData = baseService.overviewData(
                        $rootScope.data.children
                    );
                });
            } else {
                console.log( 'B' );
                $scope.overviewData = baseService.overviewData(
                    $rootScope.data.children
                );
            }
        };
    
        $scope.loadMantidas = function()
        {
            if ( !$rootScope.data ) {
                console.log( 'A' );
                baseService.fetchData().then(function (data) {
                    $rootScope.data = data;
                
                    $scope.mantidasData = baseService.mainFetch(
                        $rootScope.data.children,
                        BASE.DATA_TYPE.MANTIDAS
                    );
                });
            } else {
                console.log( 'B' );
                $scope.mantidasData = baseService.mainFetch(
                    $rootScope.data.children,
                    BASE.DATA_TYPE.MANTIDAS
                );
            }
        };
    
        $scope.loadConquistadas = function()
        {
            if ( !$rootScope.data ) {
                console.log( 'A' );
                baseService.fetchData().then(function (data) {
                    $rootScope.data = data;
                
                    $scope.conquistadasData = baseService.mainFetch(
                        $rootScope.data.children,
                        BASE.DATA_TYPE.CONQUISTADAS
                    );
                });
            } else {
                console.log( 'B' );
                $scope.conquistadasData = baseService.mainFetch(
                    $rootScope.data.children,
                    BASE.DATA_TYPE.CONQUISTADAS
                );
            }
        };
    
        $scope.loadPerdidas = function()
        {
            if ( !$rootScope.data ) {
                console.log( 'A' );
                baseService.fetchData().then(function (data) {
                    $rootScope.data = data;
                
                    $scope.perdidasData = baseService.mainFetch(
                        $rootScope.data.children,
                        BASE.DATA_TYPE.PERDIDAS
                    );
                });
            } else {
                console.log( 'B' );
                $scope.perdidasData = baseService.mainFetch(
                    $rootScope.data.children,
                    BASE.DATA_TYPE.PERDIDAS
                );
            }
        };
    
        $scope.loadPendentes = function()
        {
            if ( !$rootScope.data ) {
                console.log( 'A' );
                baseService.fetchData().then(function (data) {
                    $rootScope.data = data;
                
                    $scope.pendentesData = baseService.mainFetch(
                        $rootScope.data.children,
                        BASE.DATA_TYPE.PENDENTES
                    );
                });
            } else {
                console.log( 'B' );
                $scope.pendentesData = baseService.mainFetch(
                    $rootScope.data.children,
                    BASE.DATA_TYPE.PENDENTES
                );
            }
        };
    }
);