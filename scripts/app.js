var app = angular.module('angularApp', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            // controller: 'MainCtrl',
            // controllerAs: 'main'
        }).when('/produtos', {
            templateUrl: 'views/listaprodutos.html',
            controller: 'produtoController',
            controllerAs: 'produtoController'
        }).when('/novoproduto', {
            templateUrl: 'views/novoproduto.html',
            controller: 'produtoController',
            controllerAs: 'produtoController'
        }).when('/editarproduto/:codigo', {
            templateUrl: 'views/novoproduto.html',
            controller: 'produtoEditarController'
        }).when('/pedidos', {
            templateUrl: 'views/listapedidos.html',
            controller: 'pedidoController'
            // controllerAs: 'main'
        }).when('/novopedido', {
            templateUrl: 'views/novopedido.html',
            controller: 'pedidoController'
            // controllerAs: 'main'
        })
        .otherwise({
            redirectTo: '/'
        });

});