console.log("Trabalhando com listas");
 //abaixo forma certa.
 const listaDestinos = new Array(
     `São Paulo`,
     `Rio de Janeiro`,
     `Curitiba`
     );
 listaDestinos.push(`Tocantins`);//adicionando um item da lista
 console.log("Destinos disponiveis");
    console.log(listaDestinos);

 listaDestinos.splice(1,1);// contagem começa em 0 por isso irá deletar a primeira posição que é RIO e apenas um elemento.//tirar um item da lista
    console.log(listaDestinos);

 console.log(listaDestinos[2]); // irá exibir apenas um item da lista, ou seja Curitiba
    console.log(listaDestinos);
    // console.log(salvador,saoPaulo,rioDeJaneiro);
    // const salvador = `Salvador`;
    // const rioDeJaneiro = `Rio de Janeiro`;
    // const saoPaulo = `São Paulo`;
    //acima forma errada e nao é boa pratica.
    //abaixo forma certa.
    //listas são chamadas de arrays.
    //como escrever no array
