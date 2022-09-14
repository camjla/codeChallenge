import{Cliente} from "./Cliente.js"
import {Contacorrente} from "./Contacorrente.js"
import { Conta } from "./conta.js";
const cliente1 = new cliente ();
cliente1.Nome ="Camila";
cliente1.CPF = 50688698738;

const client2 = new cliente();
cliente2.Nome ="Samuel "
cliente2.CPF = 98677458738;

const contaCorrenteCamila = new contaCorrente ();
contaCorrenteCamila.saldo= 110;//se for  0, vai dar erro mas ta certo.
contaCorrenteCamila.agencia = 1001;
contaCorrenteCamila.cliente= cliente1;
contaCorrenteCamila.depositar(500);



const conta2= new Contacorrente();
conta2.cliente = cliente2;
conta2.agencia = 740


let valor = 200;

console.log ("valor", valor);

contaCorrenteCamila.transferir(150, conta2); //transferindo este dinheiro a conta2
console.log(conta2);


// PARA fazer o package.json> ctr+J> npm init // isso serve para importar as classes em outros arquivos.


