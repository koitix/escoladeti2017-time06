app.controller('produtoController', function ($scope, $location, produtoService) {
    $scope.produtos = produtoService.getProdutos();
    $scope.produto = {};

    $scope.salvar = function () {
        produtoService.salvar(angular.copy($scope.produto));
        $scope.produto = {};
        $location.path("/produtos");
    };

    $scope.deletar = function (produto) {
        produtoService.deletar(produto);
    };

    $scope.editar = function (codigoProduto) {
        $location.path('/editarproduto/' + codigoProduto)
    };

});