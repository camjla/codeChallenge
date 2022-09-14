
 const[x1, y1] = valores[0].split(" ");
 const[x2, y2] = valores[1].split(" ");

  const distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2-y1),2))
 console.log("Distância" + distancia.toFixed(4) );

 //math sqrt raiz quadrada