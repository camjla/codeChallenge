//celsius para fahrenheit


function transformarGrau(grau)
{
  const celsiusExiste = degree.toUpperCase().includes('C');
  const fahrenheitExiste = degree.toUpperCase().includes('F');

  if(!celsiusExiste && !fahrenheitExiste)
  {
    throw new Error('Grau não identificado');
  }

  //converte de F > C
  let atualizarGrau = Number(grau.toUpperCase().replace("C", ""));
  let formula =(fahrenheit) => (fahrenheit - 32) * 5/9;
  let  grau = 'C';
  //fluxo alterrnativo
  if(celsiusExiste)
  {
    let atualizarGrau = Number(grau.toUpperCase().replace("F", ""));
    let formula =(celsius) => celsius * 9/5 + 32;
    let  grau = 'F';
  }

  return formula(atualizarGrau) + grau;
}

 try{
  console.log(transformarGrau('58F'));
  console.log(transformarGrau('30C'));
 } catch(error)
 {
console.log(error.degree)
 }