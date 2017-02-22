/**
 * EXERCÍCIO FRONT-END ANGULAR
 * ======================================================================
 * Funções auxiliares.
 * ----------------------------------------------------------------------
 * @package     br.com.yuiti.exercicioangular
 * @author      Fabio Yuiti Goto <lab@yuiti.com.br>
 * @version     0.0.1
 */

var Dashboard = function() {
};

/**
 * Limpa a UI, caso não encontre nenhum dado.
 */
Dashboard.prototype.flushUI = function( message )
{
    var $tabs = document.getElementById( "tab-nav" ),
        $subs = document.createElement( "div" ),
        $link = document.createElement( "a" ),
        $data = document.getElementById( "tabbed-content" ),
        $grid = document.createElement( "div" ),
        $cols = document.createElement( "div" );
    
    // NÃO UTILIZADO
    // Cria nova navegação, vazia
    $subs.id = "tab-nav";
    $subs.className = "mdl-layout__tab-bar mdl-js-ripple-effect";
    
    // Aba Overview
    $link.href = "#overview";
    $link.className = "mdl-layout__tab is-active";
    $link.innerHTML = "Overview";
    $subs.appendChild( $link );
    
    // Grid element novo
    $grid.className = "mdl-grid contents";
    
    // Coluna nova
    $cols.className = "mdl-cell mdl-cell--12-col-desktop";
    $cols.innerHTML = "<h3>Erro</h3>"
        + "<p>" + message + "</p>";
    $grid.append( $cols );
    $data.innerHTML = "";
    $data.append( $grid );
    
    // Remove abas não utilizadas
    $tabs.parentNode.replaceChild( $subs, $tabs );
};

/**
 *
 */
Dashboard.prototype.sortData = function( data )
{
    var main = {};
    
    // Montando dados globais
    main.info = this.sortDataInfo( data );
    if ( main.info.name == "Pendentes" ) {
        main.data = this.sortDataSubs(data);
    } else {
        main.data = this.sortDataChildren(data);
    }
    main.options = {
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
    
    // Montando dados de children
    main.children = [];
    
    // Montando dados
    for ( var i in data.children ) {
        var temp = {};
        
        temp.info = this.sortDataInfo( data.children[i] );
        temp.subs = this.sortDataSubs( data.children[i] );
        
        // Adicionando à children
        main.children.push( temp );
    }
    
    return main;
};

/**
 *
 * @param data
 * @returns {{name: (string|string|string|string|string|string|*), description: (string|string|string|string|string|string|*), totalSubscriptions}}
 */
Dashboard.prototype.sortDataInfo = function( data )
{
    // Retornando informações
    return {
        name: data.group.name,
        description: data.group.description,
        total: data.subscriberCount
    }
};

Dashboard.prototype.sortDataChildren = function( data )
{
    var list = {
        data: [],
        labels: [],
        data_table: {}
    };
    
    for ( i in data.children ) {
        list.data.push( data.children[i].subscriberCount );
        list.labels.push( data.children[i].group.name );
        list.data_table[data.children[i].group.name] = data.children[i].subscriberCount;
    }
    
    // Retornando
    return list;
}

Dashboard.prototype.sortDataSubs = function( data )
{
    var list = {
        data: [],
        labels: [],
        data_table: {}
    };
    
    for ( i in data.subs ) {
        if ( data.subs[i].subscriptionName !== null ) {
            list.data.push(data.subs[i].subscriberCount);
            list.labels.push(data.subs[i].subscriptionName);
            list.data_table[data.subs[i].subscriptionName] = data.subs[i].subscriberCount;
        }
    }
    
    // Retornando
    return list;
};