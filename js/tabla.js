var yo = {
    Nombre: "Lenin Sanchez",
    Edad: 22,
    Matricula: "20243ds164",
    // Ajusté la ruta a "./Sprits" para que coincida con tu HTML anterior
    Imagen: "./Sprits/Lost tv pixel art isometrie.jpg" 
};

var BD_alumnos = [
    yo,
    {
        Nombre: "Monserrath",
        Edad: 18,
        Matricula: "20253ds100",
        Imagen: ""
    },
    {
        Nombre: "Canseco Juarez Dulce Yazmin",
        Edad: 20,
        Matricula: "20253ds119",
        Imagen: ""
    },
    {
        Nombre: "Jimenez Villegas Paulo Alejandro",
        Edad: 21,
        Matricula: "20243ds164",
        Imagen: ""
    },
    {
        Nombre: "Luis Fernando Rodríguez Rayo",
        Edad: 21,
        Matricula: "20253DS118",
        Imagen: ""
    }
    
];

function add_alumno() {
    // 1. Validar que aún haya alumnos en el arreglo antes de hacer pop()

    let tabla = document.getElementById("tabla_alumnos");
    let fila = document.createElement("tr");
    
    // 2. Extraer el alumno (Nota: pop saca primero a Monserrath y luego a Lenin)
    let alumno = BD_alumnos.pop();

    // 3. Manejar la imagen vacía asignando una por defecto
    let rutaImagen = alumno.Imagen !== "" ? alumno.Imagen : "./Sprits/Lost tv pixel art isometrie.jpg";

   // 4. Insertar el HTML
    fila.innerHTML = `
        <td>${alumno.Nombre}</td>
        <td>${alumno.Edad}</td>
        <td>${alumno.Matricula}</td>
        <td><img src="${rutaImagen}" class="profile-pic" alt="Avatar de ${alumno.Nombre}"></td>
    `;
    
    tabla.appendChild(fila);
}

document.getElementById("Agregar").addEventListener("click", add_alumno);

function create_Alumno(){
    let Nombre = document.getElementById("Nombre").value;
    let Edad = document.getElementById("Edad").value;
    let Matricula = document.getElementById("Matricula").value;
    let inputImagen = document.getElementById("Imagen");
    
    let Imagen = "";
    if (inputImagen.files && inputImagen.files[0]) {
        Imagen = URL.createObjectURL(inputImagen.files[0]);
    }
    let nuevo = {Nombre:Nombre ,Edad: Edad , Matricula: Matricula, Imagen: Imagen}
    BD_alumnos.push(nuevo);
    document.getElementById("Formulario").reset();
}
document.getElementById("create").addEventListener("click",create_Alumno);