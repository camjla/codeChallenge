function validaArray (arr, num)
{ 
  try{

    if(!arr && !num) throw new ReferenceError("Envie os parametros");
    //! significa não logico, ou seja !arr= se não existe um array/
    if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");
    // se o tipo do array nao for object aparece este erro.
    if(typeof num !== 'number') throw new TypeError("Array precisa ser do tipo Number");
  
    if(arr.lenght !== num) throw new RangeError('Tamanho invalido');
    //se o tam do  array for diferente do num lance este erro

    return arr;
  }
  catch(e)
  {
    if(e instanceof ReferenceError)//se meu erro é uma instancia reference error
    { 
    console.log("Este é um erro de ReferenceError");
    console.log(e.message);
    }
    else if(e instanceof TypeError)
    {
      console.log("Este é um erro de TypeError");
      console.log(e.message);
    } 
    else if(e instanceof RangeError)
    {
      console.log("Este é um erro de RangeError");
      console.log(e.message);
    } 
    else{
      console.log("Ocorreu um tipo de erro não esperado:"+ e);
    }
  }
}

console.log(validaArray([],5));