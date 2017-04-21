app.controller('pedidoController', function ($scope, $location, pedidoService) {
    $scope.pedidos = pedidoService.getPedidos();
    $scope.pedido = {
        produtos: [
            {
                nome: 'Omo',
                quantidade: 2,
                preco: 33,
                desconto: 50,
                total: 100
            },
            {
                nome: 'Luva',
                quantidade: 1,
                preco: 33,
                desconto: 50,
                total: 15
            },
        ]
    };
    $scope.getDatetime = new Date();

    $scope.deletar = function (pedido) {
        pedidoService.deletar(pedido);
    };

    $scope.salvar = function () {
        pedidoService.salvar(angular.copy($scope.pedido));
        $scope.pedido = {};
        $location.path("/pedidos");
    };

});