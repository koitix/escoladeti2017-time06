app.controller('pedidoController', function ($scope, $location, pedidoService, produtoService) {
    $scope.pedidos = pedidoService.getPedidos();
    $scope.produtos = produtoService.getProdutos();
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

    $scope.incluirProduto = function () {
        $scope.pedido.produtos.push(angular.copy($scope.produtoSelecionado));
        $scope.produtoSelecionado = {};
    };

    $scope.excluirProduto = function (produto) {
        var indiceExcluir = null;
        for (var i in $scope.pedido.produtos) {
            if (produto == $scope.pedido.produtos[i].nome) {
                indiceExcluir = i;
            }
        }
        if (indiceExcluir) {
            $scope.pedido.produtos.splice(indiceExcluir, 1);
        }
    };
});