//4. Te enviaron una base de datos de usuarios:

let users = [
  { nombre: "", apellido: "Pacheco", edad: 38, profesion: "" },
  { nombre: "Andrea", apellido: "", edad: 25, profesion: "profesor" },
  { nombre: "Julia", apellido: "", edad: 32, profesion: "musico" },
  { nombre: "", apellido: "Martinez", edad: 29, profesion: "programador" },
  { nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "" },
  {
    nombre: "Mercedes",
    apellido: "Sanchez",
    edad: 35,
    profesion: "veterinario",
  },
];
// Te piden que utilizando las funciones de los ejercicios anteriores, evalues que usuarios tienen datos pendientes
// y en caso no existan, solicitar el ingreso de los datos a traves del prompt para completarlos.

function revisarVacio(users) {
  for (const user of users) {
    for (const prop in user) {
      if (!(prop in user) || user[prop] === "") {
        user[prop] = prompt(
          `El dato ${prop} esta vacío o no existe, por favor ingreselo:`
        );
      }
    }
  }
  return users;
}

console.log(revisarVacio(users));
