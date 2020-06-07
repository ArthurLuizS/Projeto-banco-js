

import {cliente} from "./Cliente.js"
import {contaCorrente} from "./ContaCorrente.js"
import { ContaPoupança } from "./ContaPoupanca.js/index.js";


const cliente1 = new cliente("Arthur", 1122);

const contaArthur = new contaCorrente(cliente1, 1411);
contaArthur.depositar(4000)
contaArthur.sacar(100)
console.log(contaArthur)

const contapoupança = new ContaPoupança(50, cliente1, 1411)
contapoupança.sacar(10)
console.log(contapoupança)