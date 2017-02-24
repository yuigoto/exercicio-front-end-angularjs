/**
 * EXERCÍCIO ANGULAR :: baseService
 * ======================================================================
 * Factory principal (?).
 * ----------------------------------------------------------------------
 * @package     br.com.yuiti.exercicioangular
 * @author      Fabio Y. Goto <lab@yuiti.com.br>
 * @version     0.0.2
 */
gbDashboard.service(
    "baseService",
    function( $http, BASE )
    {
        this.data = {};
        
        this.fetchData = function()
        {
            return $http.get( BASE.DATA_URI ).then(
                function success( $response )
                {
                    if ( $response.data.resultType === "SUCCESS" ) {
                        return $response.data.result;
                    }
                },
                function error()
                {
                    return {};
                }
            );
        };
        
        this.overviewData = function( data )
        {
            var main = {
                data: [],
                labels: [],
                data_table: {},
                total: 0,
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
                
            };
            
            for ( var i in data ) {
                main.data.push( data[i].subscriberCount );
                main.labels.push( data[i].group.name );
                main.data_table[data[i].group.name] = data[i].subscriberCount;
                main.total += data[i].subscriberCount;
            }
            
            return main;
        };
    
        this.mainFetch = function( data, id )
        {
            var main = {
                    title: '',
                    info: '',
                    data: [],
                    labels: [],
                    data_table: {},
                    total: 0,
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
                    children: []
                },
                item,
                subs;
            
            for ( var i in data ) {
                if ( id === data[i].group.id ) {
                    item = data[i];
                    break;
                }
            }
            
            if ( id !== BASE.DATA_TYPE.PENDENTES ) {
                // Define dados "globais
                main.title  = item.group.name;
                main.info   = item.group.description;
    
                subs = item.children;
    
                for ( var i in subs ) {
                    main.data.push( subs[i].subscriberCount );
                    main.labels.push( subs[i].group.name );
                    main.data_table[subs[i].group.name] = subs[i].subscriberCount;
                    main.total += subs[i].subscriberCount;
                    main.children.push(
                        this.childFetch( item.children[i] )
                    );
                }
            } else {
                main = this.childFetch( item );
            }
            
            console.log( main );
            
            return main;
        };
    
        this.childFetch = function( data )
        {
            var main = {
                title: '',
                info: '',
                data: [],
                labels: [],
                data_table: {},
                total: 0,
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
                }
            };
    
            // Define dados "globais
            main.title  = data.group.name;
            main.info   = data.group.description;
    
            for ( var i in data.subs ) {
                console.log(data.subs[i]);
                main.data.push( data.subs[i].subscriberCount );
                main.labels.push( data.subs[i].subscriptionName );
                main.data_table[data.subs[i].subscriptionName] = data.subs[i].subscriberCount;
                main.total += data.subs[i].subscriberCount;
            }
        
            return main;
        };
    }
);