alert();

// crea un nuevo proceso que ejecuta tarea.js
var worker = new Worker("./tarea.js");

worker.addEventListener("message", function (e){
    //recibe de tarea el evento
    console.log(e);
});
