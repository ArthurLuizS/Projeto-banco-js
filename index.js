import {Gerente} from "./Gerente.js"
import {Diretor} from "./Diretor.js"

import {cliente} from "./Cliente.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const GerenteA = new Gerente("Arthur", 12301230, 5000)
GerenteA.CadastrarSenha(1230)
const DiretorB = new Diretor ("Rafael", 12401240, 10000)
const Cliente = new cliente("le", 1234321, "123")

const statusc = SistemaAutenticacao.login(Cliente, "123")
const status = SistemaAutenticacao.login(GerenteA, "1230")
console.log(status, statusc)
