app.service('pedidoService', function () {
    this.pedidos = [
        {
            codigo: 1,
            emissao: '2017-04-21',
            total: 100
        },
        {
            codigo: 2,
            emissao: '2017-04-21',
            total: 100
        },
        {
            codigo: 13,
            emissao: '2017-04-21',
            total: 100
        },
        {
            codigo: 4,
            emissao: '2017-04-21',
            total: 100
        },

    ];

    this.contador = function () {
        var maior = 0;
        for (var i in this.pedidos) {
            if (maior < this.pedidos[i].codigo) {
                maior = this.pedidos[i].codigo;
            }
        }
        return maior + 1;
    };

    this.getPedidos = function () {
        return this.pedidos;
    };

    this.deletar = function (codigoPedido) {
        var indiceExcluir = null;
        for (var i in this.pedidos) {
            if (codigoPedido == this.pedidos[i].codigo) {
                indiceExcluir = i;
            }
        }
        if (indiceExcluir) {
            this.pedidos.splice(indiceExcluir, 1);
        }
    };

    this.salvar = function (pedido) {
        pedido.codigo = this.contador();
        this.pedidos.push(pedido);
    };

});