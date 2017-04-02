app.service('produtoService', function () {
    this.produtos = [];

    this.contador = 1;
    this.getProdutos = function () {
        return this.produtos;
    };

    this.salvar = function (produto) {
        produto.codigo = this.contador++;
        this.produtos.push(produto);
    }
});