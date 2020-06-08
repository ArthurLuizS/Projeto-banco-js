import { Conta } from "./Conta.js";

export class ContaPoupança extends Conta{
    constructor(saldoinicial, cliente, agencia){
        super(saldoinicial, cliente, agencia)

    }
     //Método sobrescrito da classe conta
     sacar(valor){
         const taxa = 1.02
         return this._sacar(valor, taxa)
     }
}