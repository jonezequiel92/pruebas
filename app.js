const firebaseConfig = {
    apiKey: "AIzaSyCGQ0tYppWFJkuSxBhOpkH0xVDmX245Vdc",
    authDomain: "project-id.firebaseapp.com",
    databaseURL: "https://project-id.firebaseio.com",
    projectId: "project-id",
    storageBucket: "project-id.appspot.com",
    messagingSenderId: "637908496727",
    appId: "2:637908496727:web:a4284b4c99e329d5",
    measurementId: "G-9VP01NDSXJ"
  };

firebase.analytics();



let contactosRef = firebase.database().ref('contactosWeb');



document.getElementById('formContacto').addEventListener('submit', guardarFormulario);

function guardarFormulario(e) {
    e.preventDefault();
    let nombre = document.getElementById('fname').value;
    let apellido = document.getElementById('lname').value;
    let comentario = document.getElementById('email').value;
    let mensaje = document.getElementById('message').value;
    console.log(nombre);
    console.log(apellido);
    console.log(comentario);
    console.log(mensaje);

    let nuevoComentarioRef =  contactosRef.push();
        nuevoComentarioRef.set({
            email: email,
            nombre: nombre,
            apellido: apellido,
            comentario: comentario
        });


}