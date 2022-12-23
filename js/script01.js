//1. Crear una funcion que convierta los strings que se ingresan como parametros a estilo capitalizado.
// Ejemplo: "hola a todos" => "Hola A Todos"

function capitalizar(frase) {
  let fraseCortada = frase.split(" "); // ["hola", "a", "todos", "los", "humanos"]
  let newArray = [];
  for (let i = 0; i < fraseCortada.length; i++) {
    let nuevaPalabra = `${fraseCortada[i][0].toUpperCase()}${fraseCortada[
      i
    ].substring(1)}`;
    newArray.push(nuevaPalabra);
  }
  return newArray.join(" ");
}

let frase = "hola mundo aqui estoy";
console.log(capitalizar(frase));
