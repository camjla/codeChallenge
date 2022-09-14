console.log (`\n Trabalhando com loops`);
const listaDeDestinos = new Array (
    `Salvador`
    `Curitiba`
    `Rio de Janeiro`
);

const idadeComprador= 18;
const estaAcompanhado = false;
let temPassagemComprada= false;
const destino = "Curitiba";

console.log (`\n Possiveis destinos`);
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador= 0;
let destinoExiste= false;
while (contador <3)
{
    if(listaDeDestinos[contador]== destino)
    {
      destinoExiste= true;
      break; //quebra e nao continua o loop  
    }
   // else 
  // {
    //    destinoExiste=false
    //    console.log ("Destino n existe");
   // } não é necessário por se não fica repetitivo.

    contador +=1
}
console.log("Destino existe:", destinoExiste);
