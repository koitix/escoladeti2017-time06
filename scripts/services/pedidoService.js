app.service('produtoService', function () {
    this.produtos = [
        {
            codigo: 1,
            nome: 'Camiseta',
            preco: 22.3
        },
        {
            codigo: 5,
            nome: 'Calça',
            preco: 350.00
        },
        {
            codigo: 3,
            nome: 'Boné',
            preco: 11
        },
        {
            codigo: 4,
            nome: 'Vestido',
            preco: 250
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

    this.getProduto = function (codigoProduto) {
        for (var i in this.produtos) {
            if (codigoProduto == this.produtos[i].codigo) {
                return this.produtos[i];
            }
        }
    };

    this.salvar = function (produto) {
        if (produto.codigo) {
            var atualizarProduto = this.getProduto(produto.codigo);
            atualizarProduto.nome = produto.nome;
            atualizarProduto.preco = produto.preco;
        } else {
            produto.codigo = this.contador();
            this.produtos.push(produto);
        }
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