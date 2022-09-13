function somaNumeros(arr)
{
  return arr.reduce(function(prev,current)
  {
    return prev+current
  })
}

const arr =[23,47]

console.log(somaNumeros(arr))