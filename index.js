

import {cliente} from "./Cliente.js"
import {contaCorrente} from "./ContaCorrente.js"
import { ContaPoupança } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";



const cliente1 = new cliente("Arthur", 1122);

const contaArthur = new contaCorrente(cliente1, 1411);
const contapoupança = new ContaPoupança(50, cliente1, 1411);
const ContSal = new ContaSalario(cliente1)
ContSal.depositar(1000)
ContSal.sacar(23)
console.log(ContSal)
