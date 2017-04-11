app.service('produtoService', function () {
    this.produtos = [
        {
            codigo: 1,
            nome: 'prod1',
            preco: 22.3
        },
        {
            codigo: 5,
            nome: 'prod2',
            preco: 22.3
        },
        {
            codigo: 3,
            nome: 'prod3',
            preco: 22.3
        },
        {
            codigo: 4,
            nome: 'prod4',
            preco: 22.3
        }

    ];

    this.contador = function () {
        var maior = 0;
        for (var i in this.produtos) {
            if (maior < this.produtos[i].codigo) {
                maior = this.produtos[i].codigo;
            }
        }
        return maior + 1;
    };

    this.getProdutos = function () {
        return this.produtos;
    };

    this.salvar = function (produto) {
        produto.codigo = this.contador();
        this.produtos.push(produto);
    };

    this.deletar = function (codigoProduto) {
        var indiceExcluir = null;
        for (var i in this.produtos) {
            if (codigoProduto == this.produtos[i].codigo) {
                indiceExcluir = i;
            }
        }
        if (indiceExcluir) {
            this.produtos.splice(indiceExcluir, 1);
        }
    };
});