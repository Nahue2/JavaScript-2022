let registro = document.getElementById("registro");
class NotaAlumnos{
    constructor(id, nombre, nota){
      this.id = id;
      this.nombre = nombre;
      this.nota = nota;
    }
  }
  
  const alumnados = [
      new NotaAlumnos (1,"Santiago",8),
      new NotaAlumnos (2,"Mateo",6),
      new NotaAlumnos (3,"Emma",10),
      new NotaAlumnos (4,"Noha",10),
      new NotaAlumnos (5,"Sharon",5),
      new NotaAlumnos (6,"Luka",5),
  ];
let nombre = prompt("Ingrese el nombre del alumno");
let nota = prompt("Ingrese la nota del examen");

let obj = {
  id: alumnados.length + 1,
  nombre: nombre,
  nota: nota
};
alumnados.push(obj);

for(const item of alumnados){
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>ID: ${item.id}</h2>
    <p>nombre: ${item.nombre}</p>
    <b>${item.nota}</b>
  `;

  registro.append(div);
}