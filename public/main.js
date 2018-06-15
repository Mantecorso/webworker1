alert();

// crea un nuevo proceso que ejecuta tarea.js
var worker = new Worker("./tarea.js");
// Worker es palabra reservada en html5

worker.addEventListener("message", function (e){
    //recibe de tarea el evento
    console.log(e);
});
