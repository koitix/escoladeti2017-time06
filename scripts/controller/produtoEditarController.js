app.controller('produtoEditarController', function ($scope, $routeParams, $location, produtoService) {
    $scope.produto = produtoService.getProduto($routeParams.codigo);

    $scope.salvar = function () {
        produtoService.salvar(angular.copy($scope.produto));
        $scope.produto = {};
        $location.path("/produtos");
    };

});