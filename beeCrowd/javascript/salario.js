//salario
var nome = linhas.shift()
var salarioFixo = parseFloat(linhas.shift())
var totalVendas = parseFloat(linhas.shift())
var comissao = totalVendas * 0.15
var salarioFinal = salarioFixo + comissao

console.log('TOTAL = R$ ' + salarioFinal.toFixed(2))
