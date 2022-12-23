// 2. Dado el siguiente objeto, crear una funcion que verifique si todos los atributos se encuentran llenos.
// En caso no sea asi, que envie una alerta mostrando un mensaje y los atributos que estan vacíos.
// Ejemplo: {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""} => Los campos nombre y profesion se encuentran vacios.

function revisarVacio(objeto) {
  for (const prop in objeto) {
    if (objeto[prop] === "") {
      alert(`${prop} esta vacío`);
    }
  }
}

let objeto = { nombre: "", apellido: "Pacheco", edad: 38, profesion: "" };
console.log(revisarVacio(objeto));
