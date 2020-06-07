export class Conta {
    constructor(saldoinicial, cliente, agencia){
        this._saldo = saldoinicial;
        this._cliente = cliente;
        this._agencia = agencia;

    }
    set cliente (novoValor){
        if (novoValor instanceof cliente){
            this._cliente = novoValor;
        }

    }

    get cliente (){
        return this._cliente;
    }
    //por convenção da comunidade, qualquer variavel ou atributo que tenha um _ como primeiro elemento
    //na sua declaração
    //deve ser tratada como uma variavel ou atributo privado, e nao deverá ser usado fora da classe
    
    get saldo(){
        return this._saldo
    }
    sacar(valor){
        let taxa = 1;
        const valorSacado = taxa * valor
        if (this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
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