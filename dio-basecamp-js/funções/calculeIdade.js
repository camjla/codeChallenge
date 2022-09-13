function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`
}

const pessoa1 = {
  nome: 'Camila',
  idade: 19
}
const pessoa2 = {
  nome: 'Jimin',
  idade: 26
}
const animal1 = {
  nome: 'Tom',
  idade: 6
}
const animal2 = {
  nome: 'Safira',
  idade: 3
}

console.log(calculaIdade.call(pessoa2, 30))
console.log(calculaIdade.apply(animal2, [27]))
