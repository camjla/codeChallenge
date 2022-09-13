function filtraPares(arr) {
  return arr.filter(callback)
}

function callback(item) {
  return item % 2 === 0 //tem q passar apenas os pares
}

const meuArray = [72, 85, 98, 7, 24, 32, 84, 5, 3, 1]

console.log(filtraPares(meuArray))
