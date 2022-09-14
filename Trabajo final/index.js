class ListaAlumnos{
    constructor(id, nombre, apellido, curso, nota){
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;
      this.curso = curso;
      this.nota = nota;}}
  
  const alumnos = [
      new ListaAlumnos (1,"Santiago","Garcia",4.1,8),
      new ListaAlumnos (2,"Mateo","Marin",3.1,6),
      new ListaAlumnos (3,"Emma","Franco",4.1,10),
      new ListaAlumnos (4,"Noha","Robles",3.1,10),
      new ListaAlumnos (5,"Sharon","Burgos",1.1,5),
      new ListaAlumnos (6,"Luka","Villaverde",1.1,5),
  ];

  function muestra(alumnos){ ///Muestra general
    for(const item of alumnos){
        muestraIndividual(item);
    }}
    
    function muestraIndividual (item){  ///Muestra individual
        console.log("Numero de estudiante ",item.id);
        console.log("Apellido: ",item.apellido);
        console.log("Nombre: ",item.nombre);
        console.log("Curso: ",item.curso);
        console.log("Nota: ",item.nota);
    }

    function buscarCurso (alumnos,cursoBuscar){  ///Buscar alumnos por curso
        for(const item of alumnos){
            if(item.curso === cursoBuscar){
                muestraIndividual(item);}}}

    function buscarNota(alumnos,notaBuscar){   ///Buscar alumnos por nota
        for(const item of alumnos){
            if(item.nota === notaBuscar){
                muestraIndividual(item);
            }}}

    function buscarId(alumnos,idAlumno){   ///Buscar alumnos por ID
        for(const item of alumnos){
            if(item.id === idAlumno){
                muestraIndividual(item);
            }}}
    
    function buscarApellido(alumnos,apellidoAlumno){  ///Buscar alumnos por apellido
        for(const item of alumnos){
            if(item.apellido === apellidoAlumno){
                muestraIndividual(item);
    }}}

    function buscarNombre(alumnos,nombreAlumno){   ///Buscar alumnos por nombre
        for(const item of alumnos){
            if(item.nombre === nombreAlumno){
                muestraIndividual(item);
    }}}

    buscarNombre(alumnos,"Sharon");