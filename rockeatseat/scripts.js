let familia = 
{
  receitas : [2500,3200,250,154.52],
  despesas : [100.25,845,65,784.50]

}
function soma(array)
{
 let total = 0;
  for(let value of array)
  {
    total += value
  }
 return total

}
function calcularDespesas()
  {
 const calcReceitas = sum(familia.receitas);
 const calcDespesas = sum(familia.despesas);

 const total = calcReceitas - calcDespesas

 const ok = total >=0
let balanceText = "negativo"
if(ok)
{
  balanceText ="positivo"
}
console.log(`Seu saldo é de ${balanceText}: ${total}`)
  } 

  calcularDespesas()