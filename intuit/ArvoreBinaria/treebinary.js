let arvore = {
  left: {
    value: 2,
    left: {
      value: 4,
      right:
    {
      value:5,
      left:
      {
        value:8
      },
      right:
      {
        value:9
      },
    },
    },
  },
  right: 
  {
    value:3,
  left:
  {
  value: 6,
  },
  right:
  {
    value: 7
  }
  },
  value: 1
}

Object.entries(arvore).reduce((previous, current) =>
{
  const [key,value] =current;
  
  if(key==="value")

  {
    return[value];
  }
  console.log(value)

  return[1];
});






//a função vai receber o nó da raiz contendo um valor inteiro e irá retornar uma lista com a soma dos valores de cada um dos niveis das arvores
//o nó nunca será nulo. left e right podem ser nulos
//A função deve retornar uma lista contendo [1, 5, 22, 17], onde: 1 é o nó raiz; 5 é a soma dos nós do segundo nível, 2 e 3; 22 é a soma dos nós do terceiro nível, 4, 5, 6 e 7; e 17 é a soma dos nós do quarto nível, 8 e 9.

//         1
//        / \
//       2   3
//      / \  / \
//     4  5  6  7
//    /\
//   8  9