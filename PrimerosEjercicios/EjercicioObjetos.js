/*const usuario = {
    username: 'jj',
    numeroFavorito: 100,
    saludar: function() {
        console.log(`Hola ${this.username}`);
    },
}
usuario.saludar();
//alt + 123 {}
// ``
function crearGato(nombre, edad) {
    // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
    // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
    // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
    // Devuelve el objeto
    // Tu código:
    return {
        nombre,
        edad,
        meow : function () {
            return `Meow! ${this.nombre}, ${this.edad}`;
        }
    }
    //return gato;
}
let nuevoGato = crearGato('gatito', 2);
console.log(nuevoGato.meow());
function agregarPropiedad(objeto, property) {
    // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
    // Devuelve el objeto
    // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
    // Tu código:
    return objeto[property] = null;
}
let nuevoObjeto = {
    nombre: 'jo',
    edad: 10
}
console.log(nuevoObjeto);
agregarPropiedad(nuevoObjeto,'telefono')
console.log(nuevoObjeto);

function eliminarPropiedad(objeto, unaPropiedad) {
    // Elimina la propiedad "unaPropiedad" de "objeto"
    // tip: tenes que usar bracket notation
    // Devuelve el objeto
    // Tu código:
    delete objeto[unaPropiedad]
    return objeto
}

let nuevoObjeto = {
    nombre: 'jo',
    edad: 10
}
console.log(eliminarPropiedad(nuevoObjeto, 'nombre'));
function nuevoUsuario(nombre, email, password) {
    // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
    // Devuelve el objeto
    // Tu código:
    let objetoDatos = {
        nombre, 
        email,
        password
    }
    return objetoDatos
}
console.log(nuevoUsuario('Octi', 'obrito@gmail.com', 'pass'));
function verificarPassword(usuario, password) {
    // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    // // Tu código:
    return password === usuario.password ? true : false
}
let objetoUser = {
    usuario: 'obrito', 
    password: 'p4sss'
}
console.log(verificarPassword(objetoUser,'p4sss'));
*/
/*
function agregarAmigo(usuario, nuevoAmigo) {
    // "usuario" tiene una propiedad llamada "amigos" que es un array
    // Agrega "nuevoAmigo" al final de ese array
    // Devuelve el objeto "usuario"
    // // Tu código:
    usuario.push(nuevoAmigo);
    return usuario;
}
let usuario = {
    amigos : []
}
console.log(agregarAmigo(usuario, nuevoAmigo))
*/

function pasarUsuarioAPremium(usuarios) {
    // "usuarios" es un array de objetos "usuario"
    // Cada objeto "usuario" tiene la propiedad "esPremium"
    // Define cada propiedad "esPremium" de cada objeto como "true"
    // Devuelve el array de usuarios
    // Tu código:
    /*
    for (let i = 0; i < usuarios.length; i++ )
    {
       //console.log(usuarios[i].esPremium);
       usuarios[i].esPremium = true;
    }
    */

    return usuarios.map((unUsuario)=>{
       return {...unUsuario, esPremium: true }
    })
}
let usuarioArr = [
    {
        name: `Primer Objeto`,
        esPremium : false
    },
    {
        name: `Segundo Objeto`,
        esPremium : false
    }
]
console.log(usuarioArr, pasarUsuarioAPremium(usuarioArr))


  

//Callbacks, Clases, Prototipos, herencias,
