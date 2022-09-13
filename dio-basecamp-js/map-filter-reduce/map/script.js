const uva =
{
  value: 20,
}

const banana =
{
  value: 14,
}

//banana vai ser o this arf
function mapComThis (arr, thisArg)
{
  return arr.map(function(item)
  {
   return item * this.value;
  }, thisArg)
}
const nums = [1,2];

console.log('this --> uva' ,mapComThis(nums,uva))

console.log('this --> banana' ,mapComThis(nums,banana))