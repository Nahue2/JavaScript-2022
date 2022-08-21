let op;
op = prompt ("Desea entrar al sistema" + "\n1 - Si" + "\nCualquier tecla - No");
if (op==1)
{
while(op!=4){
alert("Elegir una opcion para trabajar" + "\n1 _ Suma de números" + "\n2 _ Armar oraciones" + "\n3 _ Ingrese palabras a repetir" + "\n4 _ Salir");
op = prompt("Ingrese una opcion").toUpperCase();;
let pal;
let cantidad;
let i=0;
let palabritaConcatenada=" ";
let number1;
let suma1=parseInt(0);
let opPalabra;
switch (op){
    case "1":
        cantidad = prompt("¿Cuantas veces quieres hacer una suma de números?");
        for(i=1;i<=cantidad;i++)
        {
            number1 = parseInt ( prompt("Ingrese numero a sumar"));
            suma1= suma1+number1;
            alert(`${suma1}`);
        }
        break;
    case "2":
        {
            while(opPalabra != "ESC" ){
            pal = prompt("Armemos una oración");
            palabritaConcatenada += pal + " ";
            alert(palabritaConcatenada);
            opPalabra = prompt("ESC para salir");
            }
        }
        break;     
    case "3":
        pal = prompt("Palabra a repetir");
        cantidad = prompt("Ingrese la cantidad de veces a repetir");

        for(i=1;i<=cantidad;i++)
        {
             alert(pal);
        }
        break;
}
}
}
alert("TERMINO");