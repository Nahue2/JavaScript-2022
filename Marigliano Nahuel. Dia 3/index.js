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

function muestra(alumnados){ ///Muestra general
for(const item of alumnados){
    muestraIndividual(item);
}}

function muestraIndividual (item){  ///Muestra individual
    console.log("Numero de estudiante ",item.id);
    console.log("Nombre: ",item.nombre);
    console.log("Nota: ",item.nota);
}

function aprobadosSieteMas (alumnados){  ///Busqueda de aprobados
    console.log("Alumnos aprobados\n");
    for(const item of alumnados)
    {
        if(item.nota>7){
            muestraIndividual(item);
        }
    }
}

function eliminarAlumanoFinal (alumnados){
    alumnados.pop();
}
function eliminarAlumanoPrincipio (alumnados){
    alumnados.shift();
}

function eliminacion (alumnados){ ///Elimina alumnos
    console.log("Eliminacion de Alumanos en curso\n\n");
    eliminarAlumanoPrincipio(alumnados);
    eliminarAlumanoFinal(alumnados);
}

function oredenamientoAlumnos (items){ ///Ordenamiento de alumnos
    console.log("Ordenamiento de Mayor a Menor \n");
    console.log(
        items.sort((a, b) => {
          if (a.nota < b.nota) {
              return 1;
          }
          if (a.nota > b.nota) {
              return -1;
          }
        
          return 0;
        })
      );
    }

alumnados.push({id: 7, nombre: "Nicolas", nota: 7});
alumnados.unshift({id: 0, nombre: "Macarena", nota: 9});
muestra(alumnados);

oredenamientoAlumnos(alumnados);
aprobadosSieteMas(alumnados);

eliminacion(alumnados);
muestra(alumnados);