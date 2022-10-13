class ListaAlumnos {
    constructor(id, nombre, apellido, curso, nota) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.curso = curso;
        this.nota = nota;
    }
}

const alumnos = [
    new ListaAlumnos(1, "Santiago", "Garcia", 4.1, 8),
    new ListaAlumnos(2, "Mateo", "Marin", 3.1, 6),
    new ListaAlumnos(3, "Emma", "Franco", 4.1, 10),
    new ListaAlumnos(4, "Noha", "Robles", 3.1, 10),
    new ListaAlumnos(5, "Sharon", "Burgos", 1.1, 5),
    new ListaAlumnos(6, "Luka", "Villaverde", 1.1, 5),
];

function muestra(alumnos) { ///Muestra general
    for (const item of alumnos) {
        muestraIndividual(item);
    }
}

function muestraIndividual(item) {  ///Muestra individual
    console.log("Numero de estudiante ", item.id);
    console.log("Apellido: ", item.apellido);
    console.log("Nombre: ", item.nombre);
    console.log("Curso: ", item.curso);
    console.log("Nota: ", item.nota);
}

function buscarCurso(alumnos, cursoBuscar) {  ///Buscar alumnos por curso
    for (const item of alumnos) {
        if (item.curso === cursoBuscar) {
            muestraIndividual(item);
        }
    }
}

function buscarNota(alumnos, notaBuscar) {   ///Buscar alumnos por nota
    for (const item of alumnos) {
        if (item.nota === notaBuscar) {
            muestraIndividual(item);
        }
    }
}

function buscarId(alumnos, idAlumno) {   ///Buscar alumnos por ID
    for (const item of alumnos) {
        if (item.id === idAlumno) {
            muestraIndividual(item);
        }
    }
}

function buscarApellido(alumnos, apellidoAlumno) {  ///Buscar alumnos por apellido
    for (const item of alumnos) {
        if (item.apellido === apellidoAlumno) {
            muestraIndividual(item);
        }
    }
}

function buscarNombre(alumnos, nombreAlumno) {   ///Buscar alumnos por nombre
    for (const item of alumnos) {
        if (item.nombre === nombreAlumno) {
            muestraIndividual(item);
        }
    }
}

function filtradoPorNota(alumnos) {   ///Filtrar por Nota
    let notasFiltrado = parseInt(prompt("Ingrese la nota a filtrar"));
    let filtrado = alumnos.filter(item => item.nota >= notasFiltrado);
    notaFiltradoUsuario(alumnos,filtrado);
}

function notaFiltradoUsuario(alumnos, filtrado) {   ///Filtrar por Nota
    for (const alumno1 of filtrado) {
        let li = document.createElement("li");
        li.innerHTML = `
        <p>Numero de alumno: ${alumno1.id}</p>
        <p>Nombre del alumno: ${alumno1.nombre}</p>
        <p>Apellido del alumno: ${alumno1.apellido}</p>
        <p>Nota del alumno: ${alumno1.nota}</p>
        `;
        estudiante.append(li);
    }
}

function ingresoNuevoAlumno (alumnos){
let alumnosCargadosN = prompt("Ingrese el nombre del alumno");
let alumnosCargadosA = prompt("Ingrese el apellido del alumno");
let alumnosCargadosC = prompt("Ingrese el curso del alumno");
let alumnosCargadosNota = prompt("Ingrese el nota del alumno");
let obj = {
    id: alumnos.length + 1,
    nombre: alumnosCargadosN,
    apellido: alumnosCargadosA,
    curso: alumnosCargadosC,
    nota: alumnosCargadosNota,
};
alumnos.push(obj);
}

function mostrarListaCompleta (alumnos,estudiante)
{for (const alumno1 of alumnos) {
    let li = document.createElement("li");
    li.innerHTML = `
    <p>Numero de alumno: ${alumno1.id}</p>
    <p>Nombre del alumno: ${alumno1.nombre}</p>
    <p>Apellido del alumno: ${alumno1.apellido}</p>
    <p>Nota del alumno: ${alumno1.nota}</p>
    `;
    estudiante.append(li);
}}

let estudiante = document.getElementById("listaDeAlumnado")

let boton1 = document.getElementById('boton');
let boton2 = document.getElementById('boton1');
let boton3 = document.getElementById('boton3');

const respuesta = () => {
    localStorage.setItem(ingresoNuevoAlumno(alumnos));
};

const mostrarLista = () =>{
    mostrarListaCompleta (alumnos,estudiante);
};

const buscadorAlumno = () =>{
   // let apellidoAlumno = prompt("Ingrese el apellido a buscar");
    filtradoPorNota(alumnos);
}

boton1.addEventListener("click",respuesta);

boton2.addEventListener("click",mostrarLista);

boton3.addEventListener("click",buscadorAlumno);