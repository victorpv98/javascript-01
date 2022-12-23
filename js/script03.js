//3. Para el ejercicio anterior, crear una funcion que dados los datos pendientes, lance un prompt para que el usuario
// complete los datos faltantes. Debe verificar que el dato ingresado no este vacio y que corresponda al tipo de dato.

let objeto = { nombre: "", apellido: "Pacheco", edad: 38, profesion: "" };

function revisarVacio(objeto) {
  for (const prop in objeto) {
    if (objeto[prop] === "") {
      objeto[prop] = prompt(`El dato ${prop} esta vacío, por favor ingreselo:`);
    }
  }
  return objeto;
}

console.log(revisarVacio(objeto));
