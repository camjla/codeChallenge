console.log("Trabalhando com Condicionais ");
 //abaixo forma certa.
 const listaDestinos = new Array(
     `São Paulo`,
     `Rio de Janeiro`,
     `Curitiba`
     );

 const idadedocomprador = 15;
 const estaAcompanhada = true; //true se estiver e false se nao
 const passagemComprada = true;

 console.log(listaDestinos);
 console.log("Destinos disponiveis");
//incompleto pois depende de outras funcoes

 if (idadeComprador >= 18 || estaAcompanhada == true)
{ 
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1); // removendo item
} 
else 
{
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && passagemComprada)
    {
    console.log("Boa viagem");
}
else{
    console.log("Você não pode embarcar");
} 
//else if(estaAcompanhada)
//{
    //console.log("Comprador maior de idade");
   /// listaDestinos.splice(1,1);// remover um item se ele for menor de idade
//}
//else
//{
    //pessoa menor de idade
   // console.log("Não é maior de idade e não posso vender");
//}
//deixa comprar so se for maior de idade.
