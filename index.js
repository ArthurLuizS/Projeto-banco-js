

import {cliente} from "./Cliente.js"
import {contaCorrente} from "./ContaCorrente.js"


const cliente1 = new cliente();
const cliente2 = new cliente(); 

cliente1.nome = "Arthur"
cliente1.cpf = "001122"

cliente2.nome = "Rafael"
cliente2.cpf = "002212"


const contaRafa = new contaCorrente() 
contaRafa.cliente = cliente2   
contaRafa.agencia = "1232"

//contaRafa.depositar(1000) //metodo depositar na contaRafa



//console.log(contaRafa)

const contaArthur = new contaCorrente();
//console.log(`Arthur, ${contaArthur._saldo}`)
contaArthur.agencia = 1411
contaArthur.cliente = cliente1
contaArthur.depositar(20)
contaArthur.transferir(10, contaRafa)
//contaRafa.transferir(200, contaArthur)
//console.log(contaRafa)
//console.log(contaArthur)
console.log(contaRafa.cliente)