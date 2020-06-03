export class contaCorrente{
    agencia;
    cliente;


    //por convenção da comunidade, qualquer variavel ou atributo que tenha um _ como primeiro elemento
    //na sua declaração
    //deve ser tratada como uma variavel ou atributo privado, e nao deverá ser usado fora da classe
    _saldo = 0;


    sacar(valor){
        if (this._saldo >= valor){
            this._saldo -= valor
            return valor;
        } else{
            console.log("Valor informado acima do saldo da conta")
        }
    }
    depositar(valor){
        if (valor <= 0){
            return; /*o return aqui, fara com que o comando "depositar" seja interrompido, 
                    semelhante ao comando "break" */
        }
        this._saldo += valor;
    }

    transferir (valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)

    }
}