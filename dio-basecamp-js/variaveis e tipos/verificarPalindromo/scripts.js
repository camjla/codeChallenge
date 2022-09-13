//1 solução
function verificaPalindromo(string)
{
  if(!string) return 
  
  //se a string existe
  return string.split("").reverse().join("") === string
  //split se passar vazio ele separará todas as letras -split retorna array- join junta e vira string
}
verificaPalindromo("ovo")


// solução 2 -mais complicado porém maisinteressante
//abba > string.lenght i=1 vai comparar ele com o 2 index 1 . 3-1 =2 index
//por isso a conta abaixo
function varificaPalindromo2(string) {
	if (!string) return; //se a stringexiste
	if (!string.length) return; //tamanho 

	for (var i = 0; i < string.length / 2; i++) { //n precisa percorrer a string  inteira ||

		if (string[i] !== string[string.length - 1 - i]) {  //se nao for igual tem que ser -1 pq começa no 0-- se o num for diferente retorna falso
			return console.log(false);
		}
	}
	return console.log(true);
}

varificaPalindromo2('gato');