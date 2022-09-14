var pontos = 0; 

const umPonto = {
  letras : ['E', 'A', 'O', 'R', 'T', 'L', 'S'],
  qtdPontos : 1
};

const doisPontos = {
  letras : ['D', 'G'],
  qtdPontos : 2
};

const tresPontos = {
  letras : [ 'B', 'C', 'M', 'P', 'U' ],
  qtdPontos : 3
};

const quatroPontos = {
  letras : ['F', 'H', 'V', 'W', 'Y'],
  qtdPontos : 4
}

const cincoPontos = {
  letras : [ 'I', 'K', 'N' ],
  qtdPontos : 5
};


const oitoPontos = {
  letras : ['J', 'X'],
  qtdPontos : 8
}

const dezPontos = {
  letras : [ 'Q', 'Z' ],
  qtdPontos : 10
};//objeto


const listaComparativa = [
  umPonto,
  doisPontos,
  tresPontos,
  quatroPontos,
  cincoPontos,
  oitoPontos,
  dezPontos
]

function contaPontos(palavra){// () de fora para dentro

  //este primeiro for está passando por cada uma das letras que foi mencionada acima por isso se chama index da letra
    for(let indexLetra = 0; indexLetra < palavra.length; indexLetra++){

      //este segundo for indexlista ele está passando por cada uma das criadas acima
      for(let indexLista = 0; indexLista < listaComparativa.length; indexLista++){
      
        if(listaComparativa[indexLista].letras.includes(palavra[indexLetra].toUpperCase())){ //includes >todas as letras da lista, e verifica se a letra da palavra que ele está "procurando" 
            //o if ele está verificando se a letra  corresponde a um dos objetos acima e realizando contagem da qtde ponto
        //ele transforma em letra maiuscula e verifica se a letra existe dentro da lista que está comparando no momento.
        //usei o upper case pois as letras declaradas estão em maiusculo 
          pontos += listaComparativa[indexLista].qtdPontos
        }
      }

    }

  console.log(pontos);
}

contaPontos("Floquinho");


// AMEIXA 
// AMEIXA.length == 6
// AMEIXA[0] == "A"
//uppercase = serve para deixar a palavra na letra maiuscula
// i= index = serve para ser um num/ começa do  0 tipo um contador
//se eu tivesse fazendo uma contagem regressiva dessa forma mas seria contador= palavra.length; contador > palavra.lengtg; contador --
