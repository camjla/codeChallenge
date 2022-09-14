const arr1 = [25, 4, 1, 17, 28]
const arr2 = [37, 15, 41, 2, 24]

function sumArray(array) {
  //coloco só um pois usei o for para realizar o exercicio
  //se o array ter um par de numeros que da 42 ele irá retornar true, se não será false
  //para pegar todos os numeros tem que ter o < pois se não, não pega, se fosse maior pararia no 0
  for (let indexNum = 0; indexNum < array.length; indexNum++){//indexnum++ irá somar os num do index criado (0)

    for (let indexDois = indexNum + 1; indexDois < array.length; indexDois++){

      if((array[indexNum] + array[indexDois]) == 42){
        return true;
      }
    }
    
  }

  return false; //se um dos arr nao der 42
}

console.log(sumArray(arr1)) // true
console.log(sumArray(arr2)) // false










/*metodo some ajuda a testar a condição e retornar true se a ocorrencia existir.
function sumArray(arr) {
  return arr.some((item1, index1) => arr.some((item2, index2) => (index1 !== index2) && (item1 + item2 === 42)))
}

Tem um some dentro do outro porque é uma combinação de 2 elementos  e por isso colocou a condição do item1+ item2 

Foi necessário excluir as somas com o próprio elemento que surgem ao fazer a soma aninhado.
Por isso existe o teste se o index do primeiro é diferente do index 2

*/
