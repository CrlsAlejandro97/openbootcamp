/*
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/
const fechaNac = new Date ("Dic 07 1997")
const Libro = {
    titulo: "Software Architects Handbook",
    autor: "Joseph Ingeno",
    fecha: new Date ("11 Jul 2000"),
    url: "htpps://libros.com"

}
const List = ["Alejandro",24,true,fechaNac,Libro]

console.logs(Libro[4])