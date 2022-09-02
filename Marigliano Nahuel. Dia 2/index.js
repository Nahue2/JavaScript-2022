class alumno{
    constructor (nombre,apellido,curso, nota1, nota2, nota3){
        this.nombre = nombre;
        this.apellido = apellido;
        this.curso = curso;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }
}

const datos1 = new alumno()
{
    datos1.nombre = "Pablo";
    datos1.apellido = "Garcia";
    datos1.curso = "1ro";
    datos1.nota1 = 10;
    datos1.nota2 = 10;
    datos1.nota3 = 10;
}
const datos2 = new alumno()
{
    datos2.nombre = "Estefania";
    datos2.apellido = "Mendez";
    datos2.curso = "1ro";
    datos2.nota1 = 9;
    datos2.nota2 = 10;
    datos2.nota3 = 8;
}

function mostrar (datoMuestra)
{
    console.log("\n\nNombre: " + datoMuestra.nombre);
    console.log("\nApellido: " + datoMuestra.apellido);
    console.log("\nCurso: " + datoMuestra.curso);
    console.log("\nNota 1er trimestre: " + datoMuestra.nota1, "\nNota 2do trimestre: " + datoMuestra.nota2, "\nNota 3er trimestre: " + datoMuestra.nota3);
}

function promedio (datosMuestra)
{
    let promedio1 = (datosMuestra.nota1+datosMuestra.nota2+datosMuestra.nota3)/3;
    console.log(promedio1);
    respuesta(promedio1);
}

function respuesta(prom)
{
    if(prom>=7)
    {
        console.log("Aprobado");
    }else{
        console.log("Desaprobado");
    }
}

console.log("Bienvenidos al sistema de funciones y objetos\n\n");
const alumno1 = new alumno(datos1);
const alumno2 = new alumno(datos2);

mostrar(datos1);
promedio(datos1);
mostrar(datos2);
promedio(datos2);


  
    
