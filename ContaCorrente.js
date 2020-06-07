import { cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class contaCorrente extends Conta{
    static numeroDeContas= 0;
    //_cliente;

    constructor(cliente, agencia){
        super(0, cliente, agencia)
        contaCorrente.numeroDeContas += 1;
        
    
    }
    sacar(valor){
        let taxa = 1.1;
        const valorSacado = taxa * valor
        if (this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        } else{
            console.log("Valor informado acima do saldo da conta")
        }
    }

    
}